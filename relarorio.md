# RELATÓRIO DE RELEASE - SPRINT CLOUD COMPUTING

## 1. Nome do Projeto e Integrantes

### Projeto

Agente IA Inteligente com Gemini e MongoDB Atlas

### Integrantes

* Kaua Oliveira

---

## 2. Objetivo da Sprint

O objetivo desta sprint foi evoluir o Projeto Integrador através da utilização de serviços em nuvem, implementando armazenamento persistente de conversas utilizando MongoDB Atlas e disponibilizando a aplicação em ambiente de produção.

A evolução permitiu transformar o sistema em um agente virtual inteligente capaz de responder perguntas utilizando Inteligência Artificial Generativa da Google (Gemini) e armazenar o histórico das interações dos usuários.

---

## 3. Arquitetura em Nuvem Utilizada

### Serviços Utilizados

* Gemini API (Google AI)
* MongoDB Atlas (DBaaS)
* Render (Backend)
* GitHub (Versionamento)

### Fluxo da Aplicação

Usuário → Front-end → API Node.js → Gemini AI → MongoDB Atlas → Resposta ao Usuário

### Benefícios Obtidos

* Escalabilidade.
* Persistência dos dados.
* Alta disponibilidade.
* Facilidade de manutenção.

---

## 4. Trecho de Código Chave

```javascript
await Conversation.create({
  pergunta,
  resposta
});
```

Esse trecho é responsável por armazenar no MongoDB Atlas todas as conversas realizadas pelo usuário, permitindo histórico persistente na nuvem.

---

## 5. Desafios Enfrentados

### Problema 1: Integração com a API Gemini

Inicialmente ocorreram dificuldades na configuração da chave de autenticação da API.

### Solução

Foi utilizado um arquivo `.env` para armazenar credenciais de forma segura.

### Problema 2: Persistência de Dados

As conversas eram perdidas após reiniciar o servidor.

### Solução

Foi realizada a integração com MongoDB Atlas para armazenamento permanente.

### Problema 3: Organização do Código

Toda a lógica estava centralizada em um único arquivo.

### Solução

O projeto foi refatorado utilizando arquitetura baseada em Controllers, Routes, Models e Config.

---

## 6. Resultados Obtidos

* Integração com Inteligência Artificial Generativa.
* Armazenamento persistente em MongoDB Atlas.
* Código modularizado.
* Melhor manutenção e escalabilidade.
* Backend preparado para produção.

---

## 7. Aplicação de Cloud Computing

O projeto atende aos requisitos da disciplina através do uso de:

* DBaaS (MongoDB Atlas)
* API de IA Generativa (Gemini)
* Deploy em Nuvem (Render)

Essas tecnologias permitiram executar o sistema integralmente em ambiente cloud.

---

## 8. Link de Produção

GitHub:
(https://github.com/FreeFireOmelhor/api-agente-ia.git)

Backend:
https://api-agente-ia-wr4g.onrender.com

## 9. Conclusão

A sprint permitiu a evolução significativa do Projeto Integrador por meio da adoção de serviços em nuvem modernos. A utilização do MongoDB Atlas juntamente com a API Gemini agregou valor ao sistema, proporcionando persistência dos dados, inteligência artificial e arquitetura preparada para crescimento futuro.
