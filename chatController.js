const { GoogleGenerativeAI } = require("@google/generative-ai");
const Conversation = require("../models/Conversation");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

exports.chat = async (req, res) => {
  try {
    const { pergunta } = req.body;

    if (!pergunta) {
      return res.status(400).json({
        erro: "Pergunta não enviada."
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(
      `Você é um assistente virtual inteligente. Responda: ${pergunta}`
    );

    const resposta =
      result.response.text();

    await Conversation.create({
      pergunta,
      resposta
    });

    return res.json({
      sucesso: true,
      resposta
    });

  } catch (error) {
    return res.status(500).json({
      erro: error.message
    });
  }
};