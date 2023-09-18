import { sql } from '@vercel/postgres';

function getCurrentTime(separator=''){
    let newDate = new Date()
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
  
    minute = (Math.round(minute/15) * 15);

    if (minute == 60) {
        minute = 0;
        hour++;
    }
    
    return hour.toString() + ":" + minute.toString()
}
 
export default async function handler(request, response) {
    //await sql`INSERT INTO Timebase (Time, Value) VALUES (${getCurrentTime()}, ${getCurrentTime()});`;
    console.log(getCurrentTime());
    const pets = await sql`SELECT * FROM Timebase;`;
    return response.status(200).json({ pets });
}
