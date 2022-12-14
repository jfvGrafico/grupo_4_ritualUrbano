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

    const categoryProducts =  sequelize.define(alias, cols, config)

    // categoryProducts.associate = function(models){
    //     categoryProducts.hasMany(models.Product, {
    //         as: "Producto",
    //         foreignKey: "idCategoria"
    //     })
    // }

    return categoryProducts
}