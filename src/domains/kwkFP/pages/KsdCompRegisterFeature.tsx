import React, { useState } from "react";
import KsdCompRegister from "./KsdCompRegister";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { registerActionCreators } from "../../../routes";
import { State } from "../../../services/Reducers";

const KsdCompRegisterFeature = () => {
  //------------------------------------------------------------------
  const dispatch = useDispatch();
  //------------------------------------------------------------------
  const [isUser, setIsUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
  });

  //-------------------------------------------------------------
  const { addUser } = bindActionCreators(registerActionCreators, dispatch);

  // const errorMessage: string = useSelector(
  //   (state: State) => state?.registerReducer.error
  // );
  const registrationState = useSelector((state: State) => state.registerReducer);
  const [hasShowResult, setHasShowresult] = useState(false);
  //-------------------------------------------------------------
  //@function : this function is used to verify the email adress is correct (format email)
  
  // const isEmailValid = (email: string): boolean => {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   return emailRegex.test(email);
  // };
  // @const : this constant is a boolean constant to check if the email entred by the user is valid or not.
  // const isValid = isEmailValid(isUser.email);
  //-------------------------------------------------------------

  //@function: this function is for validate the input are filled or not , if true the user will be added succesfully----
  const validation = async () => {
    if (!isUser.firstName || !isUser.lastName || !isUser.email 
      // || !isValid
      ) {
      setHasShowresult(false);
    } else {
      addUser(isUser);
      setIsUser({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
      });
      setHasShowresult(true);
      setTimeout(() => {
        setHasShowresult(false);
      }, 3000);
    }
  };
  return (
    <>
      {" "}
      <KsdCompRegister
        isUser={isUser}
        setIsUser={setIsUser}
        validation={validation}
        hasShowResult={hasShowResult}
        registrationState={registrationState}
      />
    </>
  );
};

export default KsdCompRegisterFeature;
