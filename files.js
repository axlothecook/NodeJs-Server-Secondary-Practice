import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log('dirname:');
// console.log(__dirname);
// console.log('filename:'); 
// console.log(__filename);


// reading files

// fs.readFile('./docs/blog1.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     };
//     console.log(data);
// });

// try {
//     const data = fs.readFileSync('./docs/blog1.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

// writing files

// const content = 'Some content';
// fs.writeFile('./docs/blog1.txt', content, err => {
//     err ? console.error(err) : console.log('success');
// });

// fs.writeFile('./docs/blog2.txt', 'uwu', err => {
//     err ? console.error(err) : console.log('success2');
// });

// const content2 = 'Lorem ipsum';
// try {
//     fs.writeFileSync('./docs/monster.txt', content2);
// } catch (err) {
//     console.error(err);
// }


//directories
// if (!fs.existsSync('./assets2')) {
//     fs.mkdir('./assets2', err => {
//         if (err) {
//             console.error(err);
//             return;
//         };

//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets2', err => {
//         if (err) {
//             console.error(err);
//             return;
//         };

//         console.log('folder removed');
//     });
// };


// delete files

if (fs.existsSync('./docs/monster.txt')) {
    fs.unlink('./docs/monster.txt', err => {
        if (err) {
            console.error(err);
        };
        console.log('file deleted');
    });
}