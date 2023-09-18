import fs from 'fs';

export async function Post (req, res) {
    const fileContent = fs.readFileSync('data/data.txt', 'utf-8');
    res.status(200).json(fileContent);
};
