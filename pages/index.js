export default function Homepage() {
  <Button />
}

function Button() {
  function handleClick() {
    console.log("memes");
  }

  return (
    <div>
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}