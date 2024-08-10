const { Pergunta,Resposta } = require('../models');

const getAllRespostas = async (req,res) =>{
    try {
        const respostas = await Resposta.findAll();
        res.status(200).json(respostas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createResposta = async (req,res) =>{
    try {
        const respostas = await Resposta.create(req.body);
        res.status(200).json(respostas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateResposta = async (req, res) => {
    const { id } = req.params;
    try {
        const respostas = await Resposta.findOne({ where: { id } });
        if (!respostas) {
            return res.status(404).json({ error: 'Resposta não encontrado' });
        }

        const [updated] = await Resposta.update(req.body, {
            where: { id }
        });

        if (updated) {
            res.status(200).json({ message: 'Resposta atualizado com sucesso!' });
        } else {
            res.status(400).json({ error: 'Nenhuma mudança detectada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteResposta = async (req, res) => {
    const { id } = req.params;
    try {
        const respostas = await Resposta.findOne({ where: { id } });

        if (!respostas) {
            return res.status(404).json({ error: 'Resposta não encontrado' });
        }

        await respostas.destroy();

        res.status(204).json({ message:'Resposta excluido com sucesso!' });
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

const getRespostasByPerguntaId = async (req, res) => {
    try {
        const { perguntaId } = req.params;
        
        const canal = await Pergunta.findOne({
            where: { id: perguntaId },
            include: [
                {
                    model: Resposta,
                    as: 'respostas'   
                }
            ]
        });

        if (!canal) {
            return res.status(404).json({ error: 'Canal não encontrado' });
        }

        res.status(200).json(canal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    getAllRespostas,
    createResposta,
    updateResposta,
    deleteResposta,
    getRespostasByPerguntaId
}