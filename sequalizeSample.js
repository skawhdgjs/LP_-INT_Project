const Sequelize = require('sequelize');
const pass = 'pass'
const sequelize = new Sequelize('world', 'root', pass, {
  host: 'localhost',
   dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
 // const sequelize = new Sequelize('mysql://root:${pass}@localhost:3306/world');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    const City = sequelize.define('city' ,{
        ID : {
          type : Sequelize.INTEGER
        },
        Name : {
          type : Sequelize.STRING
        },
        CountryCode : {
          type : Sequelize.STRING
        },
        District : {
          type : Sequelize.STRING
        },
        Population : {
          type : Sequelize.INTEGER
        }
    }, {
      tableName : 'city',
      timestamps : false
    })

    const CountryLan = sequelize.define('countrylanguage', {
      CountryCode : {
        type : Sequelize.STRING
      },
      Language : {
        type : Sequelize.STRING
      },
      IsOfficial : {
        type : Sequelize.ENUM('T', 'F')
      },
      Percentage : {
        type : Sequelize.FLOAT
      }
    })


    City.findAll({
      where : {
        CountryCode : 'AFG'
      }
    }).then((mod)=>{
      mod.forEach((model)=>{
        console.log(model.Name)
      })
    })

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
