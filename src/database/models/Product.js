module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: dataTypes.STRING,
      descripcion: dataTypes.STRING,
      /* idCategoria: dataTypes.INTEGER, */
      peso: dataTypes.INTEGER,
      imagen: dataTypes.STRING,
      precio: dataTypes.INTEGER,
      /* idUser: dataTypes.INTEGER, */
    };

    const config = {
        tableName : "products",
        timestamps: false
    }

    const Product =  sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsTo(models.CategoryProduct, {
          as: "CategoryProduct",
          foreignKey: "idCategoria",
        });
    }

    return Product
}