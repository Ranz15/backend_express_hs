const UsersModel = require("../models/users");

// Read User Controller
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UsersModel.getAllUsers();
    res.json({
      message: "GET All User Success",
      data: allUsers,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Some field is null",
      data: null,
    });
  }
};

// Create User Controller
const createNewUser = async (req, res) => {
  const { body } = req;

  if (
    !body.firstname ||
    !body.lastname ||
    !body.email ||
    !body.username ||
    !body.password ||
    !body.roles
  ) {
    return res.status(400).json({
      message: "Some field is null",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "Create New User Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Update User Controller
const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      message: "UPDATE User Success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Some field is null",
      data: null,
    });
  }
};

// Delete User Controller
const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "Delete User Success",
      data: null,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Some field is null",
      data: null,
    });
  }
};

// Export Function
module.exports = {
  createNewUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
