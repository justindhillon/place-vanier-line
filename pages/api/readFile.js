import fs from 'fs';

export default (req, res) => {
    const fileContent = fs.readFileSync('data/data.txt', 'utf-8');
    res.status(200).json(fileContent);
};
