const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verduraSchema = new Schema({
    nombre: {
        type:String,
        required: true
    },
    tipo: {
        type:String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
},{timestamps: true})

const Verdura = mongoose.model('Verdura',verduraSchema);
module.exports = Verdura;