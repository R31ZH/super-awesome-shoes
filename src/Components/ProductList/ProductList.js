import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 630, height: 500, border: '3px solid black', margin: '100px', padding: '150px' }} cols={3} gap={50} rowHeight={164}>
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Price: {item.price}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const itemData = [
  {
    id: 1,
    img: '/images/YeezyBlack.png',
    title: 'Adidas Yeezy Boost 350 V2',
    price: '$330.00',
  },
  {
    id: 2,
    img: '/images/YeezySlides.png',
    title: 'Adidas Yeezy Slides',
    price: '$124.00',
  },
  {
    img: '/images/YeezyFoam.png',
    title: 'Adidas Yeezy Foam Runner',
    price: '$227.00',
  },
  {
    img: '/images/YeezyWave.png',
    title: 'Adidas Yezzy Boost 700 Wave',
    price: '$410.00',
  },
  {
    img: '/images/YeezyZebra.png',
    title: 'Adidas Yeezy Boost 350 V2 Zebra',
    price: '$348.00',
  },
  {
    img: '/images/RedOctober.png',
    title: 'Nike Air Yeezy 2 SP Red October',
    price: '$23,250.00',
  },
  {
    img: '/images/JordanRetro.png',
    title: 'Jordan 1 Retro High OG',
    price: '$186.00',
  },
];