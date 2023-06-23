import request from 'supertest';
import app from '../src/app';

describe('GET /categories', () => {
  it('Lista todas as categorias', async () => {
    const result = await request(app).get('/categories')
      .expect('content-type', /json/)
      .expect(200);
    const category = result.body[0];
    expect(category.nome).toEqual('INFORMÁTICA');
    expect(category.status).toEqual('ATIVA');
  })

  it('Lista uma categoria pelo ID', async () => {
    const result = await request(app).get('/categories')
      .expect('content-type', /json/)
      .expect(200);
    const category = result.body[0];
    const { nome, id, status } = category
    const singleResult = await request(app).get(`/categories/${id}`).expect(200);
    expect(nome).toEqual(singleResult.nome);
    expect(status).toEqual(singleResult.status);
  })
});

describe('POST /categories', () => {
  it('Insere uma nova categoria', async () => {
    await request(app).post('/categories')
      .send({
        nome: "NEW_category",
      })
      .expect(201, { body: 'Categoria cadastrada com sucesso' })
  });
});