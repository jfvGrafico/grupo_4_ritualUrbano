module.exports = (sequelize, dataTypes) => {
  const alias = "CategoryUser";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: dataTypes.STRING,
  };

  const config = {
    tableName: "categoryusers",
    timestamps: false,
  };

  const CategoryUser = sequelize.define(alias, cols, config);

  CategoryUser.associate = (models) => {
    CategoryUser.hasMany(models.User, {
      as: "users",
      foreignKey: "idCategory",
    });
  };

  return CategoryUser;
}