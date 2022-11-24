module.exports = (sequelize, dataTypes) => {
    const alias = "Products"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : dataTypes.STRING,
        descripcion : dataTypes.STRING,
        categoryProducts:  dataTypes.INTEGER,
        peso:  dataTypes.INTEGER,
        imagen:  dataTypes.STRING,
        precio:  dataTypes.INTEGER,
        id_user : dataTypes.INTEGER,
       
    }

    const config = {
        tableName : "products",
        timestamps: false
    }

    const Product =  sequelize.define(alias, cols, config)
    return Product
}