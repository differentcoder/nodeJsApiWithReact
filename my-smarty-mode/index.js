const express = require('express')
var cors = require('cors');
const app = express()

const port = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! & Md Minhajul')
})

app.get('/user',(req,res)=>{
    res.send('Hello for users')
})

// Nourmal api 
const users=[
    {id:1, name :'minki',email:'saba@gmail.com',phone:'0180000000'},
    {id:2, name :'minhaj',email:'saba@gmail.com',phone:'0160000000'},
    {id:3, name :'tisha',email:'saba@gmail.com',phone:'0150000000'},
    {id:4, name :'nur',email:'saba@gmail.com',phone:'0110000000'},
    {id:5, name :'tamina',email:'saba@gmail.com',phone:'0120000000'},
    {id:6, name :'sabab6',email:'saba@gmail.com',phone:'0130000000'},
    {id:7, name :'sabab7',email:'saba@gmail.com',phone:'0140000000'},
]
app.get('/users',(req,res)=>{
    // Filter by search query parameter
   if(req.query.name ){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=> user.name.toLowerCase().includes(search))
        res.send(matched);
    }else{
    res.send(users)
   }
})

// Daynamic API 


app.get('/user/:id',(req,res)=>{
    // console.log(req.params);
    const id = parseInt(req.params.id);
    const user=users.find(u => u.id === id);
    res.send(user)
})

// data post 

app.post('/user', (req,res)=>{
    // console.log('Requrest',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})