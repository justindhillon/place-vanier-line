export const service = {
    readFile,
    writeFile
};

function readFile(name) {
    // data = database.readFile(name);
    return fetch("helpers/api/readFile.js");
}

function writeFile(name) {
    //database.writeFile(name);
    console.log("memes")
}
