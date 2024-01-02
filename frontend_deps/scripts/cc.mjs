#! /usr/bin/env node

import { mkdir, readFileSync, writeFileSync } from 'node:fs';

console.info('create content');

mkdir('content', (m) => {
    if (m) {
        console.warn('message:', m );
    } else {
        console.debug('NO message.');
        let data
        data = readFileSync('node_modules/htmx.org/dist/htmx.min.js');
        writeFileSync('content/htmx.min.js', data);
        data = readFileSync('node_modules/alpinejs/dist/cdn.min.js');
        writeFileSync('content/alpinejs.min.js', data);
        console.debug('file copy done...');
    }
});
