const { Schema, model} = require('mongoose');

const userSchema = new Schema ({
    userName: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true
    },

    
},{
    timestamps: true
});
module.exports = model ('User', userSchema)
