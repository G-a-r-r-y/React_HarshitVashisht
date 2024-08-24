function Greetings(props) {
  const { firstName, lastName, age, list, object } = props;
  console.log(props);
  return (
    <>
      Greetings {`${firstName} ${lastName} whose age is ${age}.`}
      <br />
      {`list's 1 element --> ${list[0]} `}
      <br />
      {`Object's 1 value --> ${object.key1}`}
    </>
  );
}

export default Greetings;
