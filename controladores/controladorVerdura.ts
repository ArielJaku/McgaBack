import { Request, Response } from "express";
import verdura from "../modelos/verdura";
const DatosVerdura = require ('../datos/datosVerdura')

const verdura_get = (req : Request,res: Response) =>{
    DatosVerdura.find().sort({createdAt: -1})
    .then((result : Array<verdura>)=>{
       res.send(result) 
    })
    .catch((err : any)=>{
        console.log(err)
    })
}

const verdura_post = (req : Request,res: Response) =>{
    console.log(req.body)
    const verdura = new DatosVerdura(req.body)
    verdura.save()
    .then((result : verdura)=>{
        res.send(result)
    })
    .catch((err : any)=>{
        console.log(err);
    })
}

const verdura_delete = (req : Request,res: Response) =>{
    const id = req.params.id;
    DatosVerdura.findByIdAndDelete(id)
    .then((result : verdura) => {
        res.send(result)
    })
    .catch((err : any)=>{
        console.log(err);
    })
}

const verdura_update = (req : Request,res: Response) =>{
    const id = req.params.id;
    console.log(req.body)
    DatosVerdura.findByIdAndUpdate(id,req.body,{
        new : true
    })
    .then((result : verdura) => {
        res.send(result)
    })
    .catch((err : any)=>{
        console.log(err);
    })
}

module.exports = {
    verdura_get,
    verdura_post,
    verdura_delete,
    verdura_update
}