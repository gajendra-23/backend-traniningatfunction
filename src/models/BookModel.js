const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName: {
        type: String,
        
        required: true
    },
    AuthorName: {
        type: String,
        
        required: true
    },
    Category: {
        type: String,
        
        required: true,
            enum: ["action", "scinence", "english"]
    },
    
    Year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema) //users



// String, Number
// Boolean, Object/json, array