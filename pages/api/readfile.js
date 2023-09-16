import fs from 'fs';

export default (req, res) => {
    const filePath = 'data/data.txt';

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        res.status(200).json({ content: fileContent });
    } catch (error) {
        res.status(500).json({ error: 'Error reading file' });
    }
};
