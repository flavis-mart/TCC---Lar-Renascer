const prisma = require('../config/prismaClient');

const registrarDoacao = async (req, res) => {
  try {
    const { nome_doador, anonimo, telefone, email, valor_informado, mensagem } = req.body;

    const novaDoacao = await prisma.doacao.create({
      data: {
        nome_doador: anonimo ? null : nome_doador,
        anonimo: anonimo || false,
        telefone,
        email,
        valor_informado: parseFloat(valor_informado),
        mensagem
      }
    });

    res.status(201).json(novaDoacao);
  } catch (error) {
    console.error('Erro ao registrar doação:', error);
    res.status(500).json({ erro: 'Erro interno ao salvar a doação.' });
  }
};

const listarDoacoes = async (req, res) => {
  try {
    const doacoes = await prisma.doacao.findMany({
      orderBy: { criado_em: 'desc' }
    });
    res.json(doacoes);
  } catch (error) {
    console.error('Erro ao listar doações:', error);
    res.status(500).json({ erro: 'Erro interno ao buscar os dados.' });
  }
};

module.exports = { registrarDoacao, listarDoacoes };