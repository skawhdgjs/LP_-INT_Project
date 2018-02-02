'use strict';
module.exports = (sequelize, DataTypes) => {
  var MyTable = sequelize.define('MyTable', {
    testatt: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MyTable;
};