module.exports = (sequelize, DataTypes) => {
  const Canal = sequelize.define('Canal', {
    nome: DataTypes.STRING
  }, {});
  Canal.associate = function(models) {
    Canal.hasMany(models.Pergunta, {
      foreignKey: 'canalId',
      as: 'perguntas'
    });
  };
  return Canal;
};
