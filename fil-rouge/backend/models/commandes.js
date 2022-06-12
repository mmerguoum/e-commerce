const mongoose = require('mongoose')

const commandeSchema = mongoose.Schema({
    id_cmd : {
        type : String
    },
    mdePaiment: {
        type : String
    }

},{
    timestamps: true
})

module.exports = mongoose.model('commandes',
commandeSchema)