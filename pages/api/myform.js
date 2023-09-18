import { promises as fs } from 'fs';

export default function handler(req, res) {
    const body = req.body;
    
    fs.writeFileSync("data/data.txt", "memes");

    res.status(200).json({ user: `${body.firstName} ${body.lastName}` });
  }
