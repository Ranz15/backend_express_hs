const knex = require("../knexmodel/knex");

// SQL Create
const createNewUser = (body) => {
  const insertData = knex("users").insert({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    username: body.username,
    password: body.password,
    roles: body.roles,
  });

  return insertData;
};

// SQL Read
const getAllUsers = () => {
  const viewData = knex.select("*").from("users");

  return viewData;
};

// SQL Update
const updateUser = (body, idUser) => {
  const updateData = knex("users").where({ id: idUser }).update({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    username: body.username,
    password: body.password,
    roles: body.roles,
  });

  return updateData;
};

// SQL Delete
const deleteUser = (idUser) => {
  const deleteData = knex("users").where({ id: idUser }).del();

  return deleteData;
};

// Export Function
module.exports = {
  createNewUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
