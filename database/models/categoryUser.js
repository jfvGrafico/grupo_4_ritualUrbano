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

    const loggedUser =  sequelize.define(alias, cols, config)
    return loggedUser
}