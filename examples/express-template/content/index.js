const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/health', (req, res) => {
  res.json({ status: 'Tudo certo!', timestamp: new Date() });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if(require.main === module){
  app.listen(port, () => {
  console.log(`Servidor ouvindo a porta: ${port}`);
});
}

module.exports = app;
