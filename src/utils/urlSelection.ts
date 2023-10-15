export const DEV_LINK_ADDRESS: string = 'http://127.0.0.1:5173/';

// function getMainUrl(urlType: string) {
//     if (!DEV_LINK_ADDRESS) {
//         switch (urlType) {
//             case 'vite':
//                 console.log('process.env.VITE_URL: ', process.env.VITE_URL);
//                 DEV_LINK_ADDRESS = process.env.VITE_URL!;
//             case 'express':
//                 DEV_LINK_ADDRESS = process.env.EXPRESS_URL!;
//             default:
//                 DEV_LINK_ADDRESS = process.env.NETLIFY_URL!;
//         }
//     }
//     return DEV_LINK_ADDRESS;
// }
