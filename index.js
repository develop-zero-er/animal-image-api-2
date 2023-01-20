const express = require('express')
const cors = require('cors') // cors
const app = express()
const port = 3000

app.use(cors()); // cors

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    // const id = req.params.id;
    if (id=="artech"){
        res.send(`<h1>Hello ${id}</h1>`);
    }else{
        res.send(`Hello ${id}`);
    }

})

app.get('/image/:name', (req, res)=>{
    const {name} = req.params;
    console.log(name);

    if(name=="cat"){
        res.json({ "image_url": "https://cdn2.thecatapi.com/images/d7j.jpg" });
    }else if(name=="dog"){
        res.json({"image_url": "https://images.dog.ceo/breeds/malamute/n02110063_97.jpg"});
    }else{
        res.json({"image_url":null});
    }
})

app.get('/dog', (req, res) => {
    res.json({ "image_url": "https://images.dog.ceo/breeds/malamute/n02110063_97.jpg" });
})

app.get('/cat', (req, res) => {
    res.json({ "image_url": "https://cdn2.thecatapi.com/images/d7j.jpg" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})