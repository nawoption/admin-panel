import { createContext, useState, useContext } from "react";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

function LoginContextProvider(props) {
  const [loginIn, setLoginIn] = useState(false);
  const value = { loginIn, setLoginIn };
  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
}
export default LoginContextProvider;
