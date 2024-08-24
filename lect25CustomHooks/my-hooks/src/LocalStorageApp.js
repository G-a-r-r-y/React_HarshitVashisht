import useLocalStorage from "./hooks/useLocalStorage";

function LocalStorageApp() {
  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  return (
    <form>
      <label htmlFor="firstName">FirstName: </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h1>FirstName: {firstName}</h1>

      <label htmlFor="lastName">LastName: </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <h1>LastName: {lastName}</h1>
    </form>
  );
}

export default LocalStorageApp;
