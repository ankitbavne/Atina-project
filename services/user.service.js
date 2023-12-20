const db = require("../database");



const createUser = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.user.create(payload);
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.user.findAll();
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createUser,
    getAllUsers
}

