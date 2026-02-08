import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    //  Delete the auth cookie
    document.cookie = "isAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    //  Redirect to frontend login
    window.location.href = "http://localhost:3000";
  }, []);

  return null; // Nothing is rendered
};

export default Logout;
