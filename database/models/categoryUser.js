module.exports = (sequelize, dataTypes) => {
    const alias = "categoryUsers"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : dataTypes.STRING,
        
    }

    const config = {
        tableName : "categoryUsers",
        timestamps: false
    }

    const categoryUsers =  sequelize.define(alias, cols, config)

    categoryUsers.associate = function(models){
        categoryUsers.hasMany(models.User, {
            as: "categoryUser",
            foreignKey: "idCategory"
        })
    }

    return categoryUsers
}