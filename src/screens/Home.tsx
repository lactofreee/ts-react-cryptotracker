import { users } from "../db";
import { Link } from "react-router-dom";

function Home() {
  return (<div>
    <h1>Users</h1>
    {users.map(user => (
      <li key={user.id}>
        <Link to={`/user/${user.id}`} >
          {user.name}
        </Link>

      </li>
    ))}
  </div>)
}

export default Home;