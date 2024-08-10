const { Canal,Pergunta } = require('../models');

const getAllPerguntas = async (req,res) =>{
    try {
        const perguntas = await Pergunta.findAll();
        res.status(200).json(perguntas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createPergunta = async (req,res) =>{
    try {
        console.log(req.body);
        
        const pergunta = await Pergunta.create(req.body);
        res.status(200).json(pergunta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePergunta = async (req, res) => {
    const { id } = req.params;
    try {
        const pergunta = await Pergunta.findOne({ where: { id } });
        if (!pergunta) {
            return res.status(404).json({ error: 'Pergunta não encontrado' });
        }

        const [updated] = await Pergunta.update(req.body, {
            where: { id }
        });

        if (updated) {
            res.status(200).json({ message: 'Pergunta atualizado com sucesso!' });
        } else {
            res.status(400).json({ error: 'Nenhuma mudança detectada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePergunta = async (req, res) => {
    const { id } = req.params;
    try {
        const pergunta = await Pergunta.findOne({ where: { id } });

        if (!pergunta) {
            return res.status(404).json({ error: 'Pergunta não encontrado' });
        }

        await pergunta.destroy();

        res.status(204).json({ message:'Pergunta excluido com sucesso!' });
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

const getPerguntasByCanalId = async (req, res) => {
    try {
        const { canalId } = req.params;
        
        const canal = await Canal.findOne({
            where: { id: canalId },
            include: [
                {
                    model: Pergunta,
                    as: 'perguntas',  
                }
            ],
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
    getAllPerguntas,
    createPergunta,
    updatePergunta,
    deletePergunta,
    getPerguntasByCanalId
}