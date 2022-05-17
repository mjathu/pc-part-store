const SHOP_DATA = [
    {
      id: 1,
      title: 'Case',
      routeName: 'case',
      items: [
        {
          id: 1,
          name: 'Thermaltake Versa H15',
          imageUrl: 'https://m.media-amazon.com/images/I/91shtYx6DUL._AC_SL1500_.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Corsair 4000D',
          imageUrl: 'https://m.media-amazon.com/images/I/81hL4tPkXZL._AC_SL1500_.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'NZXT H510',
          imageUrl: 'https://m.media-amazon.com/images/I/51L49BD0-zL._AC_SL1000_.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'be quiet! 500DX',
          imageUrl: 'https://m.media-amazon.com/images/I/71OBC-gzktL._AC_SL1500_.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'CORSAIR Crystal 680X',
          imageUrl: 'https://m.media-amazon.com/images/I/71VTmE0Qb6L._AC_SL1500_.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'Lian Li O11',
          imageUrl: 'https://m.media-amazon.com/images/I/81gmQ2j9uhL._AC_SL1500_.jpg',
          price: 14
        },
        {
          id: 7,
          name: 'Thermaltake Versa H17',
          imageUrl: 'https://m.media-amazon.com/images/I/71QNdFu6oTL._AC_SL1440_.jpg',
          price: 18
        },
        {
          id: 8,
          name: 'Thermaltake Core V1',
          imageUrl: 'https://m.media-amazon.com/images/I/91egUhloTQL._AC_SL1500_.jpg',
          price: 14
        },
        {
          id: 9,
          name: 'Antec NX410',
          imageUrl: 'https://m.media-amazon.com/images/I/81-Cz+0RUCL._AC_SL1500_.jpg',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Ram',
      routeName: 'ram',
      items: [
        {
          id: 10,
          name: 'Corsair Vengeance 16GB',
          imageUrl: 'https://m.media-amazon.com/images/I/51XWCgqIUVL._AC_SL1150_.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'Patriot Viper Steel 8GB',
          imageUrl: 'https://m.media-amazon.com/images/I/81XNrcp5BKL._AC_SL1500_.jpg',
          price: 280
        },
        {
          id: 12,
          name: ' G.Skill Trident Z',
          imageUrl: 'https://m.media-amazon.com/images/I/61l4EStxhnL._AC_SL1274_.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'Corsair Dominator 16GB',
          imageUrl: 'https://m.media-amazon.com/images/I/61OyBIH+eEL._AC_SL1500_.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'TEAMGROUP T-Force 16GB',
          imageUrl: 'https://m.media-amazon.com/images/I/71Rt2ikw46L._AC_SL1500_.jpg',
          price: 160
        },
        {
          id: 15,
          name: 'G.Skill Ripjaws 16GB',
          imageUrl: 'https://m.media-amazon.com/images/I/515AemXA3LS._AC_SL1000_.jpg',
          price: 160
        },
        {
          id: 16,
          name: 'XPG GAMMIX 16GB',
          imageUrl: 'https://m.media-amazon.com/images/I/71SsyeTAbfL._AC_SL1500_.jpg',
          price: 190
        },
        {
          id: 17,
          name: 'Kingston FURY 8GB',
          imageUrl: 'https://m.media-amazon.com/images/I/61Yc53OhY4L._AC_SL1500_.jpg',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Storage',
      routeName: 'storage',
      items: [
        {
          id: 18,
          name: 'Seagate Portable 2TB',
          imageUrl: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg',
          price: 125
        },
        {
          id: 19,
          name: 'Seagate BarraCuda 2TB',
          imageUrl: 'https://m.media-amazon.com/images/I/71Czt9ypIbL._AC_SL1500_.jpg',
          price: 90
        },
        {
          id: 20,
          name: 'SAMSUNG 980 SSD 1TB',
          imageUrl: 'https://m.media-amazon.com/images/I/714VYiAYssL._AC_SL1500_.jpg',
          price: 90
        },
        {
          id: 21,
          name: 'Crucial BX500 1TB',
          imageUrl: 'https://m.media-amazon.com/images/I/61dPLkN4poL._AC_SL1050_.jpg',
          price: 165
        },
        {
          id: 22,
          name: 'Crucial P2 500GB',
          imageUrl: 'https://m.media-amazon.com/images/I/61eqMCabEyL._AC_SL1280_.jpg',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'CPU',
      routeName: 'cpu',
      items: [
        {
          id: 23,
          name: 'AMD Ryzen 5 5600X',
          imageUrl: 'https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SL1384_.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'AMD Ryzen 7 5800X',
          imageUrl: 'https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Intel Core i7-12700KF',
          imageUrl: 'https://m.media-amazon.com/images/I/51yfHYcZ7lL._AC_SL1040_.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Intel Core i7-12600K',
          imageUrl: 'https://m.media-amazon.com/images/I/51yfHYcZ7lL._AC_SL1040_.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Intel Core i5-11600K',
          imageUrl: 'https://m.media-amazon.com/images/I/61pZ7RxQQtL._AC_SL1500_.jpg',
          price: 45
        },
        {
          id: 28,
          name: 'Intel Cerleon G5905',
          imageUrl: 'https://m.media-amazon.com/images/I/51q5MQyoubL._AC_SL1000_.jpg',
          price: 135
        },
        {
          id: 29,
          name: 'AMD Ryzen 3 3100',
          imageUrl: 'https://m.media-amazon.com/images/I/71DTUOZdDnL._AC_SL1500_.jpg',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'GPU',
      routeName: 'gpu',
      items: [
        {
          id: 30,
          name: 'ZOTAC RTX 3060',
          imageUrl: 'https://m.media-amazon.com/images/I/71ovX5jBEeL._AC_SL1500_.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'MSI GTX 1650',
          imageUrl: 'https://m.media-amazon.com/images/I/61frd2sztpL._AC_SL1024_.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Radeon RX 6600',
          imageUrl: 'https://m.media-amazon.com/images/I/71Zh1z87kkL._AC_SL1500_.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Radeon RX 6700 XT',
          imageUrl: 'https://m.media-amazon.com/images/I/71CRJwGvaWL._AC_SL1500_.jpg',
          price: 25
        },
        {
          id: 34,
          name: 'Radeon RX 550',
          imageUrl: 'https://m.media-amazon.com/images/I/611TqSsTTLL._AC_SL1000_.jpg',
          price: 40
        },
        {
          id: 35,
          name: 'ASUS RTX 2060',
          imageUrl: 'https://m.media-amazon.com/images/I/81NyeP2oXZL._AC_SL1500_.jpg',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  