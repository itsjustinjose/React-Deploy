// importing
const express = require ("express");
const movieModel = require("./model/moviesDB");
const cors = require('cors');
const path = require('path'); 

// initialize
const app = new express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'/build'))); 

// API creation  
// to post data
app.post('/api/addmovie',async (req,res)=>{
    console.log(req.body)
    var data = await movieModel(req.body);
    data.save();
    res.send({status:"Data Saved"})
})

// to view movies
app.get('/api/viewmovies',async(req,res)=>{
    var data = await movieModel.find();
    res.json(data);
})

// to delete movies
app.delete('/api/deletemovies/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await movieModel.findByIdAndDelete(id);
    res.json({status:"Deleted"})
})

// to update
app.put('/api/edit/:id', async(req,res)=>{
    let id = req.params.id;
    try{
        var data = await movieModel.findByIdAndUpdate(id,req.body)
        res.json({status:"Updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})
app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname 
    ,'/build/index.html')); });

// port
app.listen(3030,()=>{
    console.log("App is running in port 3030")
})