module.exports = (sequelize, dataTypes) => {
    const alias = "Users"
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
            User.belongTo(models.categoryUsers, {
                as : "categoryProducts",
                foreingKey : "idCategory"
            })
        }
    }
    return User
}