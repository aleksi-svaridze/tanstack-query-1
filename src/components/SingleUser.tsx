import React from "react";

interface SingleUsersProps {
  id: number;
  name: string;
}

const SingleUser: React.FC<SingleUsersProps> = ({ id, name }) => {
  return (
    <div>
      Single user- {id}: {name}
    </div>
  );
};

export default SingleUser;
