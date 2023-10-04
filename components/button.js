import styles from './button.module.css';
import { NextResponse, NextRequest } from 'next/server';

export default function Button() {
    function handleClick() {
      fetch("https://placevanierline.vercel.app/api/add");
    }

    response.cookies.set('time', '15:00');

    console.log(request.cookies.get('time')?.value);
  
    return (
      <div>
        <br /><br />
        <div class={styles.buttonContainer}>
          <br /><br /><br />
          <h1 style={{fontSize: "3em"}}>Stuck in line?</h1>
          <br /><br />
          <a href='https://placevanierline.vercel.app/'>
            <button class={styles.button} onClick={handleClick}>PRESS ME</button>
          </a>
          <br /><br /><br /><br />
        </div>
      </div>
    );
}
