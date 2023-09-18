import fs from fs;

export const database = {
    readFile,
    writeFile
};

function readFile() {
    let data = fs.readFileSync("data/data.txt").toString();
    return data;
}

function writeFile(data) {
    fs.writeFileSync("data/data.txt", data);
}
