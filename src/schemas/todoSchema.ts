import { Schema } from "mongoose";
import mongoose = require("mongoose");

mongoose.Promise = global.Promise;

/**
 * This is Schema for Blog
 * @constant {BlogSchema}
 */
export const TodoSchema = new Schema({
  id: {
    type: String,
  },
  postedByid: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    select: true,
  },
  description: {
    type: String,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String, ref: "User",
  },
}, {
  timestamps: {},
});
