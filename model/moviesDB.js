const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://itsjustinjose:justinjose@cluster0.hvykuwn.mongodb.net/movieapp?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const movieSchema = new Schema({
    MovieName:String,
    Actor:String,
    Actress:String,
    Director:String,
    ReleasedYear:Number,
    Camera:String,
    Producer:String,
    Language:String
});
var movieModel = mongoose.model("movie",movieSchema);
module.exports = movieModel;