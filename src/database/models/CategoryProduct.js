module.exports = (sequelize, dataTypes) => {
    const alias = "CategoryProduct"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : dataTypes.STRING,
        
    }

    const config = {
        tableName : "categoryproducts",
        timestamps: false
    }

    const CategoryProduct = sequelize.define(alias, cols, config);
    CategoryProduct.associate = (models) => {
      CategoryProduct.hasMany(models.Product, {
        as: "products",
        foreignKey: "idCategoria",
      });
    };

    return CategoryProduct;
}