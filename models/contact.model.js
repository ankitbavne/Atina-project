const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contactno: {
            type: Sequelize.STRING,
            allowNull: false
        },
        zip: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        created_by: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })

    return Contact
}