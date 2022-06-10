const mongoose = require('mongoose')

const commandeSchema = mongoose.Schema({
    id_cmd : {
        type : String
    },
    date_cmd : {
        type : Date,
        default: Date.now
    },
    mdePaiment: {
        type : String
    }

})

module.exports = mongoose.model('commandes',
commandeSchema)