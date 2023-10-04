import styles from './button.module.css';

export default function Button() {
    function handleClick() {
      fetch("https://placevanierline.vercel.app/api/add");
    }

    document.cookie = "time=15:00";
    console.log(document.cookie);
  
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
