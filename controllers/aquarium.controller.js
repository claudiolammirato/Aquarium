const db = require("../models");
const Users = db.users;
const Parameters = db.parameters;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a User
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
  
    // Save User in the database
    Users.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Users.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Users.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Users with id=" + id
        });
      });
  };

// Update a Users by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Users.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Users was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Users with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Users with id=" + id
        });
      });
  };

// Delete a Users with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Users.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Users was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Users with id=${id}. Maybe Users was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Users with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Users.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      });
  };
// Find all published Users
exports.findAllPublished = (req, res) => {
    Users.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };