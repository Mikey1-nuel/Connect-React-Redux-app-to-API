import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../store/users/usersSlice";

const Users = () => {
const { users, isLoading, error } = useSelector((state) => state.users);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getUsers());
}, [dispatch]);

return (
  <div>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <ul>
      {users.map(user => (
        <li key={user.first}>{user.first} {user.last}</li>
      ))}
    </ul>
  </div>
)
}

export default Users;