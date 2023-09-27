
import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            let formattedHour = hour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            let formattedMinute = minute.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            await sql`INSERT INTO Database (Time, Value) VALUES (${formattedHour.toString() + ":" + formattedMinute.toString()}, ${0});`;
        }
    }

    const pets = await sql`SELECT * FROM Database;`;
    return response.status(200).json({ pets });
}

