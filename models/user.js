'use strict';
const bcrypt = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'email sudah digunakan'
      }

    },
    password: DataTypes.STRING
  }, {
      hooks: {
        beforeCreate(user, option) {
          let hash = bcrypt.hash(user.password);
          user.password = hash
        }
      }
    });
  User.associate = function (models) {
    User.hasMany(models.Todo)
    // associations can be defined here
  };
  return User;
};

