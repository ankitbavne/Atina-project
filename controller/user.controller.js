const UserService = require("../services/user.service");
const bcrypt = require("bcrypt");
const { successResponse, errorResponse } = require("../utils");
const db = require("../database");

exports.createUser = async (req, res) => {
    try {

        const payload = req.body;

        payload['password'] = await bcrypt.hash(payload.password, 10)

        const user = await UserService.createUser(payload);

        return successResponse(res, user, 201, "User is successfully created.");

    } catch (error) {
        return errorResponse(res, error)
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let findUser = await db.user.findOne({
            where: {
                email: email
            }
        });

        if (!findUser) {
            errorResponse(res, "User not found")
        } else {
            let matchPasword = await bcrypt.compare(password, findUser.password);
            if (matchPasword) {
                let token = await jwt.sign(findUser, "secretkey", {
                    expiresIn: "24h",
                });
                findUser["token"] = `Bearer ${token}`;
                successResponse(res, findUser, 201, "User successfully loggedin.");
            } else {
                errorResponse(res, 'something went wrong')
            }
        }

    } catch (error) {
        return errorResponse(res, error)
    }
}


exports.changeUserPass = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        let email = req.email
        let findUser = await db.user.findOne({
            where: {
                email: email
            }
        });

        if (!findUser) {
            errorResponse(res, "User not found")
        } else {
            let matchPasword = await bcrypt.compare(oldPassword, findUser.password);
            if (matchPasword) {
                let newPass = await bcrypt.hash(newPassword, 10)
                db.user.update({ password: newPass }, { where: { id: findUser.id } })
                successResponse(res, findUser, 201, "Password successfully changed.");
            } else {
                errorResponse(res, 'something went wrong')
            }
        }
    } catch (error) {
        return errorResponse(res, error)
    }
}



exports.getAllUsers = async (req, res) => {
    try {

        const users = await UserService.getAllUsers();

        return successResponse(res, users);

    } catch (error) {
        return errorResponse(res, error)
    }
}