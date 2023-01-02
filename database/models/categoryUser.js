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
        tableName : "categoryusers",
        timestamps: false
    }

    const categoryUser =  sequelize.define(alias, cols, config)

    // categoryUser.associate = (models) => {
    //     categoryUser.belongsTo(models.User, {
    //         as: "categoryUser",
    //         foreignKey: "idCategory"
    //     })
    // }

    return categoryUser
}