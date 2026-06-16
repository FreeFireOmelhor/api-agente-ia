const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  pergunta: {
    type: String,
    required: true
  },
  resposta: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  "Conversation",
  ConversationSchema
);