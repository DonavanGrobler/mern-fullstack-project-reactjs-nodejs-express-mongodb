import { UsersList } from "../components/UsersList";
import { useEffect, useState } from "react";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = () => {
  const [islLoading, setIslLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIslLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users/");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
      setIslLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {islLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!islLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;
