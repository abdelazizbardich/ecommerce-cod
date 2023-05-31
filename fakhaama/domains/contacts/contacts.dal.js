const db = require('../../config/db');

const getContacts = async () => { return await db.asyncQuery('')}
const getContact = async () => { return await db.asyncQuery('')}
const addContact = async () => { return await db.asyncQuery('')}
const updateContact = async () => { return await db.asyncQuery('')}
const deleteContact = async () => { return await db.asyncQuery('')}

module.exports = {
    getContacts,
    getContact,
    addContact,
    updateContact,
    deleteContact
}