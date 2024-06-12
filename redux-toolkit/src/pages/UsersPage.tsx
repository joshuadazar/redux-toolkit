import { useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import store from "../store/store";
import { useSelector } from "react-redux";

const UsersPage = () => {

  type IUserID = ReturnType<typeof store.getState>
  const userState = useSelector((state: IUserID) => state.counter);
  const [user, setUser] = useState<IUser| null>(null);

  useEffect(() => {
    if (userState.count !== undefined) {
      getUsers(userState.count);
    }
  }, [userState.count]);


  async function getUsers(number: number | IUserID = 1) {
    const userResponse = await fetch(`https://65eae93a43ce16418932cbf9.mockapi.io/users/agent/${number}`);
    const data : IUser = await userResponse.json();
    if (data !== undefined) {
      setUser(data);
    }
  }

  return (
    <>
      <h1>Users Subscriptions { userState.count}</h1>
      <h3>name: { user?.name}</h3>
      <p>Photo: <img src={user?.avatar} alt="Avatar image" /></p>
      <p>Phone Number: { user?.phone}</p>

    </>
  )
}

export default UsersPage;