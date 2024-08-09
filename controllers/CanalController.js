const { Canal } = require('../models');

const getAllCanais = async (req,res) =>{
    try {
        const canais = await Canal.findAll();
        res.status(200).json(canais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCanal = async (req,res) =>{
    try {
        const canal = await Canal.create(req.body);
        res.status(200).json(canal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCanal = async (req, res) => {
    const { id } = req.params;
    try {
        const canal = await Canal.findOne({ where: { id } });
        if (!canal) {
            return res.status(404).json({ error: 'Canal não encontrado' });
        }

        const [updated] = await Canal.update(req.body, {
            where: { id }
        });

        if (updated) {
            res.status(200).json({ message: 'Canal atualizado com sucesso!' });
        } else {
            res.status(400).json({ error: 'Nenhuma mudança detectada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteCanal = async (req, res) => {
    const { id } = req.params;
    try {
        const canal = await Canal.findOne({ where: { id } });

        if (!canal) {
            return res.status(404).json({ error: 'Canal não encontrado' });
        }

        await canal.destroy();

        res.status(204).json({ message:'Canal excluido com sucesso!' });
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllCanais,
    createCanal,
    updateCanal,
    deleteCanal
}