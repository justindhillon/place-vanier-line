export default function Homepage() {
  return (
    <Button />
  );
}

function Button() {
  function handleClick() {
    fetch("pages/api/add", {method: 'POST'});
  }

  return (
    <div>
      <button onClick={handleClick}>Likes</button>
    </div>
  );
}