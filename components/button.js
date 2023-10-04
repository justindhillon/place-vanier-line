import styles from './button.module.css';
import axios from "axios";
import { setCookie, getCookie } from 'cookies-next';

export default function Button() {
    async function fetchData() {
      const res = await axios.get('https://placevanierline.vercel.app/api/add'); 
      setCookie('time', res.data);
    }

    function handleClick() {
      fetchData();
    }

    console.log(getCookie('time'));

    const button = (
      <div>
        <br /><br />
        <div class={styles.buttonContainer}>
          <br /><br /><br />
          <h1 style={{fontSize: "3em"}}>Stuck in line?</h1>
          <br /><br />
          <a>
            <button class={styles.button} onClick={handleClick}>PRESS ME</button>
          </a>
          <br /><br /><br /><br />
        </div>
      </div>
    )
  
    return (
      (true && button)
    );
}
