import { useLoginContext } from "./loginContextApi";
import { Navigate } from "react-router-dom";

export default function RouteGuard({ children }) {
  const { loginIn } = useLoginContext();
  if (loginIn) return children;
  else return <Navigate to="/" replace />;
}
