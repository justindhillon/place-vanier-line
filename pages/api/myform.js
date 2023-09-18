import { promises as fs } from 'fs';

export default function handler(req, res) {
    const body = req.body;
    
    fs.writeFileSync("json/data.json", { user: `${body.firstName} ${body.lastName}` });

    res.status(200).json({ user: `${body.firstName} ${body.lastName}` });
  }
