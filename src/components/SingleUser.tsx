import React from "react";

interface SingleUsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  somename: string;
  bs: string;
  catchPhrase: string;
  suite: string;
  zipcode: string;
  street: string;
  lat: string;
  lng: string;
  city: string;
}

const SingleUser: React.FC<SingleUsersProps> = ({
  name,
  username,
  email,
  phone,
  website,
  bs,
  catchPhrase,
  somename,
  zipcode,
  street,
  city,
  suite,
  lat,
  lng,
}) => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-2xl">{name}</h1>
      <h2>UserName: {username}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <div>
        <p>bs: {bs}</p>
        <p>somename: {somename}</p>
        <p>catchPhrase: {catchPhrase}</p>
      </div>

      <address>
        City: {city} <br />
        Street: {street} <br />
        zip Code: {zipcode} <br />
        Suite: {suite} <br />
        lat: {lat} <br />
        lng: {lng} <br />
      </address>
    </div>
  );
};

export default SingleUser;
