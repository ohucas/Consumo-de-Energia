app.post('/api/consumo', (req, res) => {
    const { userId, kwh, date } = req.body;

    if (!userId || !kwh || !date) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const newConsumo = { id: consumo.length + 1, userId, kwh, date };
    consumo.push(newConsumo);

    fs.writeFileSync('./database/consumo.json', JSON.stringify(consumo, null, 2));

    res.json({ message: 'Consumo adicionado com sucesso', consumo: newConsumo });
});
