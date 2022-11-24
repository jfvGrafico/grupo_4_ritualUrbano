module.exports = (sequelize, dataTypes) => {
    const alias = "categoryProducts"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : dataTypes.STRING,
        
    }

    const config = {
        tableName : "categoryProducts",
        timestamps: false
    }

    const loggedUser =  sequelize.define(alias, cols, config)
    return loggedUser
}