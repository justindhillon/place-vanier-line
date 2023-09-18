import fs from 'fs';

export default (req, res) => {
    try {
      const fileContent = fs.readFileSync('data/data.txt', 'utf-8');
      res.status(200).json({ content: fileContent });
    } catch (error) {
      console.error('Error reading the file:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};