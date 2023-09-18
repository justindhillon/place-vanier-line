import { sql } from '@vercel/postgres';

function getCurrentTime(separator=''){
    let newDate = new Date()
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
  
    minute = (Math.round(minute/15) * 15) % 60;
    
    return `${hour}${separator}${minute}`
}
 
export default async function handler(request, response) {
  await sql`INSERT INTO Database (Name, Owner) VALUES (${getCurrentTime()}, ${getCurrentTime()});`;
  const pets = await sql`SELECT * FROM Database;`;
  return response.status(200).json({ pets });
}
