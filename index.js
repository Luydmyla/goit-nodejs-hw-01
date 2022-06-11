const contactsOperations = require("./contacts");
console.log(contactsOperations);
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;
    case "getContactById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        //   якщо база даних не знайшла такого contact, то ми генеруємо помилку и повідомляємо про це
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "addContact":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;
    case "removeContact":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;
      //   console.log("невідома дія");
      gefault: console.warn("\x1B[31m Unknown action type!");
  }
};
// const id = "1";
// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", contactId });
// const newContact = {
//   name: "Elon Musk",
//   email: "elon@star.link" ,
//   phone: "(380) 380-8080",
// };
// передаємо в дію назву діі та новий товар (датуЇ який треба додати
// invokeAction({
//   action: "addContact",
//   name: "Elon Musk",
//   email: "elon@star.link",
//   phone: "(380) 380-8080",
// });
// const removeContactId = "10";
//
invokeAction({ action: "removeContact", id: "1" });
