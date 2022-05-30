import { useContext } from "react";
 
import { RegistrationContext } from "../Context/RegistrationContextProvider";

export const PrivateRoute = () => {
  const [state, dispatch] = useContext(RegistrationContext);
  if (state.isRegister) {
    return children;
  }
  return (
    <button
      onClick={() => {
        dispatch({
          type: "REGISTRATION_SUCESS",
        });
      }}
    >
      Register
    </button>
  );
};
