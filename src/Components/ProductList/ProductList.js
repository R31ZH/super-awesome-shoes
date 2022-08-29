import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
<<<<<<< HEAD
import { Category } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function TitlebarBelowImageList() {
  return (
    <ImageList l={{ width: 100, height: 100, border: '3px solid black', margin:'100px', padding:'150px' }} cols={2} gap={50} rowHeight={704}>
      {itemData.map((item, index) => (
        <Link to="/detail">
        <ImageListItem key={index}>
=======
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import '../../styles/productlist.css'
import Container from '@mui/material/Container'
// import Product from '../Product';



export default function TitlebarBelowImageList() {
  return (
    <Container maxWidth='lg'>
    <ImageList sx={{ width: 1300, height: 1000, border: '3px solid black', gap: '15px', rowHeight:'auto', display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', cols:'6'}}>
      {itemData.map((item) => (
        <button style={{flexBasis:'240px', backgroundColor:'white'}}> 
        <ImageListItem key={item.img}>
>>>>>>> 54f38112d06673b9055cc7df974cd288bf9bb9a6
          <img
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Price: {item.price}</span>}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
<<<<<<< HEAD
      </Link>
=======
        </button>
>>>>>>> 54f38112d06673b9055cc7df974cd288bf9bb9a6
      ))}
    </ImageList>
    </Container>
  );
}


const itemData = [
  // Yeezy
  {
    id:1,
    Category: 'Yeezy',
    img: '/images/YeezyBlack.png',
    title: 'Adidas Yeezy Boost 350 V2',
    price: '$330.00',
  },
  {
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
  // Jordans
  {
    img: '/images/JordanRetro.png',
    title: 'Jordan 1 Retro High OG',
    price: '$186.00',
  },
  {
    img: '/images/Jordan3.png',
    title: 'Jordan 3 Retro',
    price: '$263.00',
  },
  {
    img: '/images/Jordan11.png',
    title: 'Jordan 11 Retro',
    price: '$266.00',
  },
  {
    img: '/images/Jordan4.png',
    title: 'Jordan 4 Retro Red Thunder (PS)',
    price: '$110.00',
  },
  {
    img: '/images/Jordan11Playoffs.png',
    title: 'Jordan 11 Retro',
    price: '$335.00',
  },
  {
    img: '/images/Jordan6TravisScott.png',
    title: 'Jordan 6 Retro - Travis Scott British Khaki',
    price: '$388.00',
  },
  // Air Force
  {
    img: '/images/AirForceWhite.png',
    title: 'Nike Air Force 1 Low 07 White',
    price: '$121.00',
  },
  {
    img: '/images/AirForceBlack.png',
    title: 'Nike Air Force 1 Low 07 Black',
    price: '$115.00',
  },
  {
    img: '/images/AFMid.png',
    title: 'Nike Air Force 1 Mid',
    price: '$110.00',
  },
  {
    img: '/images/AFMidNH.png',
    title: 'Nike Air Force 1 Mid NH',
    price: '$134.00',
  },
  {
    img: '/images/AFLowShadow.png',
    title: 'Nike Air Force 1 Low Shadow',
    price: '$121.00',
  },
  {
    img: '/images/AFHigh.png',
    title: 'Nike Air Force 1 High',
    price: '$177.00',
  },
  // Designer
  {
    img: '/images/BalTrack.png',
    title: 'Balenciaga Track',
    price: '$782.00',
  },
  {
    img: '/images/Gucci.png',
    title: 'Gucci Rhyton - Vintage Logo',
    price: '$675.00',
  },
  {
    img: '/images/BalSpeed.png',
    title: 'Balenciaga Speed Graffiti Trainers',
    price: '$600.00',
  },
  {
    img: '/images/Dior.png',
    title: 'Dior B22',
    price: '$1,262.00',
  },
  {
    img: '/images/LV.png',
    title: 'Louis Vuitton Trainer Sneaker Boot',
    price: '$2,522.00',
  },
  {
    img: '/images/OffWhite.png',
    title: 'OFF-WHITE Vulc Low',
    price: '$256.00',
  },
  {
    img: '/images/McQueen.png',
    title: 'Alexander McQueen Tread Slick Lace Up Boot',
    price: '$512.00',
  },
];
