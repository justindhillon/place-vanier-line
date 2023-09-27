import styles from './button.module.css'

export default function Button() {
    function handleClick() {
      fetch("https://placevanierline.vercel.app/api/add");
    }
  
    return (
      <div class="button-container">
        <br />
        <br />
        <h1>Stuck in line?</h1>
        <br />
        <br />
        <button class={styles.button} onClick={handleClick}>PRESS ME</button>
      </div>
    );
}
