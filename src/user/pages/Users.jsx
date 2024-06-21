import { UsersList } from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://w0.peakpx.com/wallpaper/272/80/HD-wallpaper-stewie-griffin-ixpap-in-2022-stewie-griffin-family-guy-stewie-brian-family-guy-thumbnail.jpg",
      name: "Donavan",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
