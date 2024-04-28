import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../db";

function User() {
  const { id } = useParams();


  return (
    <div>
      <h1>hello! {users[Number(id) - 1].name}</h1>
      <Link to={"followers"}>see followers</Link>
      <Outlet context={{
        nameOfMyUser: users[Number(id) - 1].name
      }} />
    </div>
  )
}

export default User;