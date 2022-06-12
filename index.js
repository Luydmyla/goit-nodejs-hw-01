const contactsOperations = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;
    case "get":
      console.log(id);
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;
      //   console.log("невідома дія");
      gefault: console.warn("\x1B[31m Unknown action type!");
  }
};
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

//ПЕРЕВІРКА
// Отримати всі контакти
// invokeAction({ action: "listContacts" });

// Отримати контакт по id
// const id = 5;
// invokeAction({ action: "get", id });

// Додаємо новий контакт
// const newContact = {
//   name: "Elon Musk",
//   email: "elon@star.link" ,
//   phone: "(380) 380-8080",
// };
// передаємо в дію назву діі та новий контакт, який треба додати
// invokeAction({
//   action: "addContact",
//   name: "Elon Musk",
//   email: "elon@star.link",
//   phone: "(380) 380-8080",
// });

//Видалямо контакт, передаємо id
// const removeContactId = "10";
// invokeAction({
//   action: "removeContact",
//   id: "e14e20eb-c703-4e49-ba2a-8d0bcb4e910c",
// });
