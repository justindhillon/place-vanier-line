import path from 'path';
import { promises as fs } from 'fs';

export default function handler(req, res) {
    //const body = req.body;
  
    //res.status(200).json({ user: `${body.firstName} ${body.lastName}` });

    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    //Read the json data file data.json
    const fileContents = fs.readFile(jsonDirectory + '/data.json', 'utf8');
    //Return the content of the data file in json format
    res.status(200).json(fileContents);
  }
  