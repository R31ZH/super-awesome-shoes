const Product = require('../models/product');


const resolvers = {
    Query: {
        products: async () => {
            return Product.find()
        }

    }
}

module.exports= resolvers;