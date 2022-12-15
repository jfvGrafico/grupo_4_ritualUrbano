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
        categoryUsers:  dataTypes.INTEGER,
        image:  dataTypes.STRING,
    }

    const config = {
        tableName : "users",
        timestamps: false
    }

    const User =  sequelize.define(alias, cols, config)
    User.associate = (models) => {
        User.hasMany(models.Products , {
            as : "products" , 
            foreingKey : "idUser"
        })

        User.associate = (models) => {
            User.belongsTo(models.categoryUser, {
                as : "categoryUser",
                foreingKey : "idCategory"
            })
        }
    }
    return User
}