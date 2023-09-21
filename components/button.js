export default function Button() {
    function handleClick() {
      fetch("https://placevanierline.vercel.app/api/add");
    }
  
    return (
      <div>
        <button onClick={handleClick}>Likes</button>
      </div>
    );
}
