export default function Homepage() {
  return (
    <Button />
  );
}

function Button() {
  function handleClick() {
    fetch("https://placevanierline.vercel.app/api/add");
    console.log("Success");
  }

  return (
    <div>
      <button onClick={handleClick}>Likes</button>
    </div>
  );
}