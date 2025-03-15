
import  { Schema , model } from "mongoose";

export const serviceSchema = new  Schema({
 service:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 price:{
    type:Number,
    required:true
 }
})

export const Service = new model("service",serviceSchema)