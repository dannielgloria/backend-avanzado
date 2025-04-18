import request from 'supertest';
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../app";
import User from "../../src/models/User";

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(mongoUri);
    }
});

afterAll( async () => {
    await mongoose.disconnect()
    await mongoServer.stop()
});

afterEach( async () => {
    await User.deleteMany();
})

describe('Prueba de integracion - AuthController.js', () => {

    test('Registro de Usuario Exitoso', async () => { 
        const response = await request(app)
            .post('/api/v0/auth/register')
            .send({
                name: 'Juan Perez',
                email: 'juan@example.com',
                password: 'secure123',
            });
        
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('token');
        expect(response.body.email).toBe('juan@example.com');
    });

    test('Falla al registrar usuario ya existente', async () => {
        await User.create({
          name: 'Juan Perez',
          email: 'juan@example.com',
          password: 'hashedPassword123',
        });
    
        const response = await request(app)
          .post('/api/v0/auth/register')
          .send({
            name: 'Juan Perez',
            email: 'juan@example.com',
            password: 'secure123',
          });
    
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('User already exists');
      });

});
