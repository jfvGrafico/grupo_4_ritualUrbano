module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
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

    Product.associate = function(models){
        Product.belongsTo(models.categoryProducts, {
            as: "categoria_de_producto",
            foreignKey: "idCategoria"
        })
    }

    return Product
}