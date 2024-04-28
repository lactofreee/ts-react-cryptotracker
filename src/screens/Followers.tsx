import { useOutletContext } from "react-router-dom";

interface iFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<iFollowersContext>();

  return <h1>{nameOfMyUser}'s Followers</h1>
}

export default Followers;