// schema
import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
  name : String,
  title : String,
  category : String,
  price : Number,
  image : String,

})

// create schema model
const Book = mongoose.model("Book", BookSchema)

export default Book