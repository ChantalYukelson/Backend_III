import request from 'supertest';
import app from '../app.js';

describe('Adoption Routes', () => {
  it('GET /api/adoptions debe devolver 200', async () => {
    const res = await request(app).get('/api/adoptions');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('POST /api/adoptions debe crear una adopción', async () => {
    const res = await request(app).post('/api/adoptions').send({
      name: 'Cliente Test',
      product: 'Camisa de lino'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('POST /api/adoptions debe fallar si faltan campos', async () => {
    const res = await request(app).post('/api/adoptions').send({ name: 'Faltante' });
    expect(res.statusCode).toEqual(400);
  });
});
