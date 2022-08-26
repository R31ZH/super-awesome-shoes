const { Schema, model } = require('mongoose');


const productSchema = new Schema({
    
    category:{ 
        type: String,
        require: true,

    },
    image: {
      type: String,

    },
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,

    },
})


const Product = model('Product', productSchema);

module.exports = Product;



// id:1,
//     Category: 'Yeezy',
//     img: '/images/YeezyBlack.png',
//     title: 'Adidas Yeezy Boost 350 V2',
//     price: '$330.00',