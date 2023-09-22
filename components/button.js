export default function Button() {
    function handleClick() {
      fetch("https://placevanierline.vercel.app/api/add");
    }
  
    return (
      <div>
        <button onClick={handleClick}>Submit Time</button>
      </div>
    );
}
