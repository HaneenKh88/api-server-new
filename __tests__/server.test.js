/* eslint-disable indent */

'use strict';

require('dotenv').config();
const { server } = require('../src/server');
const supergoose = require('@code-fellows/supergoose'); 
const request = supergoose(server);


let id;

describe('api server', () => {
  it('should be able to create a food on POST /food', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'nodels',
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('nodels');
    id = response.body._id;
  });

  it('should get all the food on GET /food', async () => {
		const response = await request.get('/api/v1/food/');
		expect(response.status).toEqual(200);
	});


  it('should be able to update a food on PUT /food', async () => {
    const response = await request.put(`/api/v1/food/${id}`).send({
     
      name: 'rice',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('rice');
  });
  it('should be able to get a food on Get /food/:id', async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('rice');
  });

  it('handle server errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(404);
  });

  it('handle method errors', async () => {
      const response = await request.post('/food');
      expect(response.status).toEqual(404);
    });

    
});


describe('api server', () => {
  it('should be able to create a clothes on POST /cloth', async () => {
    const response = await request.post('/api/v1/cloth').send({
      name: 'shirt',
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('shirt');
    id = response.body._id;
  });

  it('should get all the clothes on GET /cloth', async () => {
		const response = await request.get('/api/v1/cloth');
		expect(response.status).toEqual(200);
	});

  it('should be able to update a clothes on PUT /cloth', async () => {
    const response = await request.put(`/api/v1/cloth/${id}`).send({
     
      name: 'dress',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('dress');
  });
  it('should be able to get a clothes on Get /cloth/:id', async () => {
    const response = await request.get(`/api/v1/cloth/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('dress');
  });

  it('handle server errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(404);
  });

  it('handle method errors', async () => {
      const response = await request.post('/food');
      expect(response.status).toEqual(404);
    });

    
});