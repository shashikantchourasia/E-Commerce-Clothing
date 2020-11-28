const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Black Hat',
        imageUrl: 'https://i.ibb.co/MsKYgjV/IMG-20181105-WA0004.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Tree Beanie',
        imageUrl: 'https://i.ibb.co/BP1045Q/61-Ixp-KIPAg-L-AC-UX385.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/fVJXd53/Royal-Wedding-Church-Fedoras-Women-s-Hats-Wedding-Woman-Hat-For-Elegant-Gray-Fascinator-Bowler-Cap.webp',
        price: 25
      },
      {
        id: 5,
        name: 'Boot Barn',
        imageUrl: 'https://i.ibb.co/nMm7dk3/281-R24-41-P1.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Monaco Cap',
        imageUrl: 'https://i.ibb.co/hLPL60J/A1-2.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Grey Cap',
        imageUrl: 'https://i.ibb.co/1LzLXKZ/bullsheathergrey-800x.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/FHzVTHn/Black-Converse-sneakers.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/PrwpZNm/rsz-1profile-pic.png',
        price: 125
      },
      {
        id: 19,
        name: 'D&J Jacket',
        imageUrl: 'https://i.ibb.co/phW2gyw/Whats-App-Image-2020-10-25-at-3-28-04-PM.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Winter Jacket',
        imageUrl: 'https://i.ibb.co/RgQkSR3/Whats-App-Image-2020-10-25-at-3-29-24-PM.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Black Leather Jacket',
        imageUrl: 'https://i.ibb.co/Tv9vx5m/Whats-App-Image-2020-10-25-at-3-28-42-PM.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Red White Duppatta',
        imageUrl: 'https://i.ibb.co/tC46NGg/Women.png',
        price: 25
      },
      {
        id: 24,
        name: 'Blue Jean',
        imageUrl: 'https://i.ibb.co/Rjjcb3W/44448157-2195781084013784-1141981702798147332-n.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Twinkle Kurti Dress',
        imageUrl: 'https://i.ibb.co/z5VDmx5/52008558-1105701076275520-1669598687873574475-n.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Safron Dress',
        imageUrl: 'https://i.ibb.co/pX8cg2h/39316648-2159390951016908-1898571867787100160-n.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Top',
        imageUrl: 'https://i.ibb.co/9VPHY6N/103184052-685851275313099-2237437108947541512-n.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'Black Kurti',
        imageUrl: 'https://i.ibb.co/ZzzpLZs/100524960-259567538639767-7069122506021512940-n.jpg',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'White Jersey',
        imageUrl: 'https://i.ibb.co/xq2bKCP/rsz-3screenshot-2018-10-11-17-49-17.png',
        price: 32
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/kXY8nb7/Whats-App-Image-2020-10-25-at-2-33-55-PM.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Yellow BIBA t-shirt',
        imageUrl: 'https://i.ibb.co/GvJdgr8/Whats-App-Image-2020-10-25-at-2-54-21-PM.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/xDVGLjj/Whats-App-Image-2020-10-25-at-2-39-09-PM.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/sg90R7D/Whats-App-Image-2020-10-25-at-2-41-48-PM.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Black Silicon Shirt',
        imageUrl: 'https://i.ibb.co/G99CTtJ/Whats-App-Image-2020-10-25-at-2-48-19-PM.jpg',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
