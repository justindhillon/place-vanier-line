import styles from './button.module.css';
import axios from "axios";
import { setCookie, getCookie } from 'cookies-next';

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

  if (hour < 7 || 21 < hour) {
      return "invalid";
  }

  let formattedHour = hour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  let formattedMinute = minute.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  
  return formattedHour.toString() + ":" + formattedMinute.toString();
}

export default function Button() {
    async function fetchData() {
      const res = await axios.get('https://placevanierline.vercel.app/api/add', {body: getCurrentTime()}); 
      setCookie('time', res.data);
    }

    function handleClick() {
      fetchData();
    }

    if (getCookie('time') == getCurrentTime()) {
      return (
        <div>
          <br /><br />
          <div class={styles.buttonContainer}>
            <br /><br />
            <h1 style={{fontSize: "2em"}}>Thanks for the response!</h1>
            <br /><br />
            <h1 style={{fontSize: "2em"}}>Come back later</h1>
            <br /><br /><br />
            <p>Back to <a href="https://placevanierline.vercel.app/"><span style={{ color: "#2596be" }}>Graph</span></a></p>
            <br /><br />
          </div>
        </div>
      );
    } else {
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
      )
    }
}
