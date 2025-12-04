const request = require('supertest');
const app = require('./index');

describe('Testes do Servidor', () => {
  it('GET /health deve retornar status 200 e json com mensagem correta', async () => {
    const resposta = await request(app).get('/health');

    expect(resposta.statusCode).toEqual(200);

    expect(resposta.body).toHaveProperty('status', 'Tudo certo!');
  });

  it('GET / deve retornar Hello World', async () => {
    const resposta = await request(app).get('/');

    expect(resposta.statusCode).toEqual(200);

    expect(resposta.text).toContain('Hello World!');
  });
});
