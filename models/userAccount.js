module.exports = function(sequelize, DataTypes) {
  const UserAccount = sequelize.define("UserAccount", {
    email: {type: DataTypes.STRING, allowNull: false},
    username: {type: DataTypes.STRING, allowNull: false},
    passhash: {type:DataTypes.STRING(4096), allowNull: false},
    schedules: {type: DataTypes.JSON}
  });
  return UserAccount;
};
