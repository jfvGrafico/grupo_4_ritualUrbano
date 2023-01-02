module.exports = (sequelize, dataTypes) => {
    const alias = "loggedUser"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        first_name : dataTypes.STRING,
        last_name : dataTypes.STRING,
        email:  dataTypes.STRING,
        category:  dataTypes.STRING,
        image:  dataTypes.STRING,
        token:  dataTypes.STRING,
    }

    const config = {
        tableName : "loggeduser",
        timestamps: false
    }

    const loggedUser =  sequelize.define(alias, cols, config)
    return loggedUser
}