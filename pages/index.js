export default function Homepage() {
  return (
    <Button />
  );
}

function Button() {
  function handleClick() {
    console.log("memes");
  }

  return (
    <div>
      <button onClick={handleClick}>Likes</button>
    </div>
  );
}