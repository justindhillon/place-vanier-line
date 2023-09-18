export default function Homepage() {
  return (
    <Button />
  );
}

function Button() {
  function handleClick() {
    fetch("api/add.js");
    console.log("Success");
  }

  return (
    <div>
      <button onClick={handleClick}>Likes</button>
    </div>
  );
}