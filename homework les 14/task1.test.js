const axios = require ('axios');
const env = require ('./env.json');


describe ('Api tests', ()=> {
    test ('Axios GET', async ()=>{
        const response = await axios.get (`${env.baseURL}/posts`)

        expect(response.data[0].userId).toBe(1);
        expect(response.status).toBe(200);
    })

    test ('Axios Post', async ()=>{
        const body = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
  })};
        const response = await axios.post (`${env.baseURL}/posts`, body)

        expect(response.status).toBe(201);
        expect(response.data.id).toBeDefined;
    })
    
    test ('Axios put', async ()=>{
        const body = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
  })};
        const response = await axios.put ('https://jsonplaceholder.typicode.com/posts/1', body)
        expect(response.data.title).toBe(body.title);
        expect(response.data.id).toBeDefined;
        expect(response.status).toBe(200)
    })

    test ('Axios patch', async ()=>{
        const body = {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'new title'
  })};
        const response = await axios.patch (`${env.baseURL}/posts/1`, body)
        console.log(response.title);
        expect(response.status).toBe(200)
    })

    test ('Axios Delete', async ()=>{
        const response = await axios.delete (`${env.baseURL}/posts/1`)
        expect(response.status).toBe(200);
    })
})