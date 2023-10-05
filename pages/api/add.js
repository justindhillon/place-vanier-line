import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
    let time = request.body;

    if (time != "invalid") { 
        await sql`UPDATE Database SET Value = Value::DECIMAL + 1 WHERE Time = ${time};`;
    }

    return response.status(200).end(time);
}
