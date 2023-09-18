import { sql } from '@vercel/postgres';

function getCurrentTime(separator=''){
    let newDate = new Date()
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
  
    minute = (Math.round(minute/15) * 15) % 60;
    
    return `${hour}${separator}${minute}`
}
 
export default async function handler(request, response) {
    const petName = request.query.petName;
    const ownerName = request.query.ownerName;
 
    const pets = await sql`SELECT * FROM Pets;`;
    return response.status(200).json({ pets });
}
