import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/UseRole";


const TutorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, roleLoading] = useRole();

  if (loading || roleLoading) {
    return <p>Loading...</p>;
  }

  if (user && role === "tutor") {
    return children;
  }

  return <Navigate to="/unauthorized" />;
};

export default TutorRoute;
