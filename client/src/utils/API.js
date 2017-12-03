import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },


   // Gets all contacts
   getContacts: function() {
    return axios.get("/api/contacts");
  },
  // Gets the contact with the given id
  getContact: function(id) {
    return axios.get("/api/contacts/" + id);
  },
  // Deletes the contact with the given id
  deleteContact: function(id) {
    return axios.delete("/api/contacts/" + id);
  },
  // Saves a contact to the database
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  }


};
