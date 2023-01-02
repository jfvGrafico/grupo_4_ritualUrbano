module.exports = (sequelize, dataTypes) => {
    const alias = "categoryProduct"
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

    const categoryProduct =  sequelize.define(alias, cols, config);
    /* categoryProduct.associate = models => {
        categoryProduct.hasMany(models.Product, {as: 'products', foreignKey: 'category_id'});
    } */

    return categoryProduct;
}