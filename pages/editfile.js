import fs from 'fs';

export function readData(fileName) {
    data = fs.readFileSync(fileName).toString();
    return data;
}

export function writeData(fileName, data) {
    fs.writeFileSync(fileName, data);
}
