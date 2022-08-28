const db = require('../config/connection');
const Product = require('../models/product');



db.once('open', async () => {
  try {
    await Product.deleteMany({});
    
    await Product.insertMany([
        
            {
            category: 'Yeezy',
            image: 'YeezyBlack.png',
            title: "Adidas Yeezy Boost 350 V2",
            price: 330
             },
          {
            category: 'Yeezy',
            image: "/images/YeezySlides.png",
            title: "Adidas Yeezy Slides",
            price: 124
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyFoam.png",
            title: "Adidas Yeezy Foam Runner",
            price: 227.00
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyWave.png",
            title: "Adidas Yezzy Boost 700 Wave",
            price: 410.00
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyZebra.png",
            title: "Adidas Yeezy Boost 350 V2 Zebra",
            price: 348.00
          },
          {
            category: 'Airforces',
            image: "RedOctober.png",
            title: "Nike Air Yeezy 2 SP Red October",
            price: 23
          },
          {
            category: 'Airforces',
            image: "/images/JordanRetro.png",
            title: "Jordan 1 Retro High OG",
            price: 186.00
          }
        
    ])

   
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
