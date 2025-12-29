import fs from 'node:fs';
//                                                             or just 'utf8'
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt', 'utf8');

readStream.on('data', (chunk, err) => {
    if (err) {
        console.error(err);
        return;
    };

    console.log('------- NEW CHUNK --------');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream);