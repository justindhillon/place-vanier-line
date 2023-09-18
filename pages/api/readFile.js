import fs from 'fs';

export default async function handler (req, res) {
    const fileContent = await fs.readFileSync('data/data.txt', 'utf-8');
    res.status(200).json(fileContent);
};
