import styles from './button.module.css'

export default function Button() {
    function handleClick() {
      fetch("https://placevanierline.vercel.app/api/add");
    }
  
    return (
      <div class={styles.buttonContainer}>
        <br />
        <br />
        <h1 style={{fontSize: "3em"}}>Stuck in line?</h1>
        <br />
        <br />
        <button class={styles.button} onClick={handleClick}>PRESS ME</button>
      </div>
    );
}
