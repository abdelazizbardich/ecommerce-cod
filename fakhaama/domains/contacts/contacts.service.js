const contactsDal = require('./contacts.dal');

const getContacts = async () => { return await contactsDal.getContacts() }
const getContact = async () => { return await contactsDal.getContact() }
const addContact = async (contact) => {
    try {
        if(!contact.name ||!contact.subject ||!contact.message) throw new Error('bad request');
        await contactsDal.addContact(contact);
        return true;
    } catch (error) {
        console.log('error',error);
        throw new Error(error);
    }
}
const updateContact = async () => { return await contactsDal.updateContact() }
const deleteContact = async () => { return await contactsDal.deleteContact() }

module.exports = {
    getContacts,
    getContact,
    addContact,
    updateContact,
    deleteContact
}