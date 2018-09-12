// Lines 18-26 in index.js go through everything in the same directory as itself, and will import all of their contents as long as they are not itself, and are a js file.
// This format is all it takes to make a new Model (table). This one is for a "User".
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};
