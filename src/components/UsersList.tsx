import React from "react";
import type { IUser } from "../interfaces/User.interface";
import { useNavigate } from "react-router-dom";

interface UsersListProps {
  users: IUser[] | undefined;
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const navigate = useNavigate();
  return (
    <ul>
      {users?.map((user: IUser) => (
        <li key={user.id} onClick={() => navigate(`/all-users/${user.id}`)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
