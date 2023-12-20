const db = require("../database");

const createContact = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.contact.create(payload);
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}


const getContactById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.contact.findOne({
                where: {
                    id: id
                }
            });
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

const getContactByUserId = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.contact.findAll({
                where: {
                    created_by: user_id
                }
            });
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createContact,
    getContactById,
    getContactByUserId
}