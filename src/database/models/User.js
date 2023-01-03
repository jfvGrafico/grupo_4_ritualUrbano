module.exports = (sequelize, dataTypes) => {
    const alias = "User"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        first_name : dataTypes.STRING,
        last_name : dataTypes.STRING,
        password:  dataTypes.STRING,
        email:  dataTypes.STRING,
        idCategory:  dataTypes.INTEGER,
        image:  dataTypes.STRING,
        token: dataTypes.STRING,
    }

    const config = {
        tableName : "users",
        timestamps: false
    }

    const User =  sequelize.define(alias, cols, config)

    User.associate = (models) => {
      User.belongsTo(models.CategoryUser, {
        as: "CategoryUser",
        foreignKey: "idCategory",
      });
    };

    return User
}