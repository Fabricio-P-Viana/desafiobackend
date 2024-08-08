module.exports = (sequelize, DataTypes) => {
  const Pergunta = sequelize.define('Pergunta', {
    texto: DataTypes.STRING,
    canalId: DataTypes.INTEGER
  }, {});
  Pergunta.associate = function(models) {
    Pergunta.belongsTo(models.Canal, {
      foreignKey: 'canalId',
      as: 'canal'
    });
    Pergunta.hasMany(models.Resposta, {
      foreignKey: 'perguntaId',
      as: 'respostas'
    });
  };
  return Pergunta;
};
