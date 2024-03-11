const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let messages = [
  {
    id: 1,
    text: "hola"
  },
  {
    id: 2,
    text: "soy"
  },
  {
    id: 3,
    text: "el "
  },
  {
    id: 4,
    text: "tutor"
  },
  {
    id: 5,
    text: "nos"
  },
  {
    id: 6,
    text: "vemos"
  },
  {
    id: 7,
    text: "en"
  },
  {
    id: 8,
    text: "el"
  },
  {
    id: 9,
    text: "checkpoint"
  }
];


app.post('/messages', (req, res) => {
  const { text } = req.body;
  const newMessage = { id: messages.length + 1, text };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.put('/messages/:id', (req, res) => {
  const messageId = parseInt(req.params.id);
  const { text } = req.body;
  const messageIndex = messages.findIndex(message => message.id === messageId);
  if (messageIndex !== -1) {
    messages[messageIndex].text = text;
    res.json(messages[messageIndex]);
  } else {
    res.status(404).json({ message: 'Message not found' });
  }
});

app.delete('/messages/:id', (req, res) => {
  const messageId = parseInt(req.params.id);
  const messageIndex = messages.findIndex(message => message.id === messageId);
  if (messageIndex !== -1) {
    messages.splice(messageIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Message not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});