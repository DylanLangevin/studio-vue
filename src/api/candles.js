import img1 from '@/assets/img/IMG_0333_1.png';

/* eslint-disable no-undef */
const candles = [
    { id: 1, name: 'Bougie', img: img1, desc: 'Taille en cm sans la mèche : 6 X 6 <br> 147 grammes de cire de soja<br> + 1,50€ pour l\'ajout d\'un parfum<br> +1€ pour l\'ajout d\'une couleur' },
    { id: 2, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 3, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 4, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 5, name: 'Bougie', img: img1, desc: 'blablablablablaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { id: 6, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 7, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 8, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 9, name: 'Bougie', img: img1, desc: 'blablablablablaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { id: 10, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 11, name: 'Bougie', img: img1, desc: 'blablablablabla' },
    { id: 12, name: 'Bougie', img: img1, desc: 'blablablablabla' },
]

export default candles;

// const imagePaths = [
//     '@/assets/img/IMG_0333_1.png',
//     '@/assets/img/IMG_0333_2.png',
//     // Ajoutez les autres chemins d'image ici
// ];

// /* eslint-disable no-undef */
// const createCandle = async (id, name, imgPath, desc) => {
//     const img = await import(`${imgPath}`);
//     return { id, name, img: img.default, desc };
// };

// const init = async () => {
//     const candleData = imagePaths.map((path, index) => ({
//         id: index + 1,
//         name: `Bougie ${index + 1}`,
//         imgPath: path,
//         desc: `Description ${index + 1}`
//     }));

//     const candles = await Promise.all(candleData.map(candle =>
//         createCandle(candle.id, candle.name, candle.imgPath, candle.desc)
//     ));

//     console.log(candles);
// };

// init();