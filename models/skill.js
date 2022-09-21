import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
})

const Skill = mongoose.model('Todo', skillSchema)

export {
  Skill
}