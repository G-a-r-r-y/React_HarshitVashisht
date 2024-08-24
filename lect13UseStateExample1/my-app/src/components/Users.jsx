import React from "react";
import User from "./User";

function Users({ users, increaseAge, deleteEle }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <User
            {...user}
            key={user.id}
            increaseAge={increaseAge}
            deleteEle={deleteEle}
          />
        );
      })}
    </div>
  );
}

export default Users;
