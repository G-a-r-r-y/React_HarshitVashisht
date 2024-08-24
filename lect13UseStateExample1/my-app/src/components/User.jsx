import "./user.css";

function User({ Name, age, id, increaseAge, deleteEle }) {
  return (
    <div className="user">
      <h1>{Name}</h1>
      <p>{age}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          deleteEle(id);
        }}
      >
        Delete Button
      </button>
    </div>
  );
}

export default User;
