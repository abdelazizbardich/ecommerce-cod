const db = require('../../config/db');

const getContacts = async () => { return await db.asyncQuery('')}
const getContact = async () => { 
    return await db.asyncQuery('')
}
const addContact = async (contact) => { 
    console.log(`INSERT INTO public.contacts ("name", phone, email, subject, message) VALUES ('${contact.name}', '${contact.phone}','${contact.email}', '${contact.subject}', '${contact.message}');`);
    return await db.asyncQuery(`INSERT INTO public.contacts ("name", phone, email, subject, message) VALUES ('${contact.name}', '${contact.phone}','${contact.email}', '${contact.subject}', '${contact.message}');`)
}
const updateContact = async () => { return await db.asyncQuery('')}
const deleteContact = async () => { return await db.asyncQuery('')}

module.exports = {
    getContacts,
    getContact,
    addContact,
    updateContact,
    deleteContact
}