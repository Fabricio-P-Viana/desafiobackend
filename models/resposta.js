module.exports = (sequelize, DataTypes) => {
  const Resposta = sequelize.define('Resposta', {
    texto: DataTypes.STRING,
    nota: DataTypes.INTEGER,
    perguntaId: DataTypes.INTEGER
  }, {});
  Resposta.associate = function(models) {
    Resposta.belongsTo(models.Pergunta, {
      foreignKey: 'perguntaId',
      as: 'pergunta'
    });
  };
  return Resposta;
};
