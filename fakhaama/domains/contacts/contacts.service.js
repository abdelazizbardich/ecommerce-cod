const contactsDal = require('./contacts.dal');

const getContacts = async () => { return await contactsDal.getContacts() }
const getContact = async () => { return await contactsDal.getContact() }
const addContact = async () => { return await contactsDal.addContact() }
const updateContact = async () => { return await contactsDal.updateContact() }
const deleteContact = async () => { return await contactsDal.deleteContact() }

module.exports = {
    getContacts,
    getContact,
    addContact,
    updateContact,
    deleteContact
}