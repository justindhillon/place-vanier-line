import { sql } from '@vercel/postgres';

function getCurrentTime(separator=''){
    let newDate = new Date()
    let hour = newDate.getUTCHours() + 17;
    let minute = newDate.getMinutes();
  
    minute = (Math.round(minute/15) * 15);

    if (minute == 60) {
        minute = 0;
        hour++;
    }

    hour = hour % 24;

    let formattedHour = hour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    let formattedMinute = minute.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    
    return formattedHour.toString() + ":" + formattedMinute.toString();
}
 
export default async function handler(request, response) {
    let time = getCurrentTime();

    if (7 <= Number(time.charAt(0)) && Number(time.charAt(0)) < 22) { 
        await sql`UPDATE Database SET Value = Value::DECIMAL + 1 WHERE Time = ${time};`;
    }

    return response.status(200).json({ "success" : "success" });
}
