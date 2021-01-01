module.exports = (sequelize, Sequelize) => {
    
    const Parameters = sequelize.define("parameters", {
      ph: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ammonia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nitrite: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nitrate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      temperature: {
        type: Sequelize.STRING,
        allowNull: false
      },
      water_change: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
    });

    return Parameters;
  };