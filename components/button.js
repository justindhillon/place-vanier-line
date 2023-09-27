export default function Button() {
    function handleClick() {
      fetch("https://placevanierline.vercel.app/api/add");
    }
  
    return (
      <div class="button-container">
        <h1>Stuck in line?</h1>
        <button class="button-3" onClick={handleClick}>PRESS ME</button>
      </div>
    );
}
