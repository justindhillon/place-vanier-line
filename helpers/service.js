import { database } from "./database";

export const service = {
    readFile,
    writeFile
};

function readFile(name) {
    data = database.readFile(name);
    return data;
}

function writeFile(name) {
    database.writeFile(name);
}
