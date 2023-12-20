const ContactService = require("../services/contact.service");
const { successResponse, errorResponse } = require("../utils");

exports.createContact = async (req, res) => {
    try {
        const contact = await ContactService.createContact(req.body);

        return successResponse(res, contact, 201, "Contact is successfully created.");

    } catch (error) {
        return errorResponse(res, error)
    }
}


exports.getContactById = async (req, res) => {
    try {

        const {id} = req.params;

        const users = await ContactService.getContactById(id);

        return successResponse(res, users);
        
    } catch (error) {
        return errorResponse(res, error)
    }
}

exports.getContactByUserId = async (req, res) => {
    try {

        const {user_id} = req.params;

        const users = await ContactService.getContactByUserId(user_id);

        return successResponse(res, users);
        
    } catch (error) {
        return errorResponse(res, error)
    }
}