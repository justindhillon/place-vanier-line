export default function Homepage() {
  return (
    <Button />
  );
}

function Button() {
  function handleClick() {
    fetch("https://placevanierline.vercel.app/api/add");
  }

  return (
    <div>
      <button onClick={handleClick}>Likes</button>
    </div>
  );
}
