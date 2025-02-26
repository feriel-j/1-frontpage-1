import React, { useContext } from "react";
import "../../../_dist/KsdCompRegister.css";
import KsdCompKwkLogo from "../../../components/icons/KsdCompKwkLogo";
import KsdCompUnderlinedInput from "../../../components/inputs/KsdCompUnderlinedInput";
import KsdCompHeroButton from "../../../components/buttons/KsdCompHeroButton";
import { DataContext } from "../../../utils/SwitchedData";
import KsdCompMessageAlert from "../../../components/KsdCompMessageAlert";
import GetTargetValue from "../../../utils/GetTargetValue";
import { RegistrationState, User } from "../../../data/Types";

interface RegisterProps extends React.HTMLAttributes<HTMLFormElement> {
  isUser: User;
  setIsUser: React.Dispatch<React.SetStateAction<User>>;
  validation: () =>void; // the function used on click
  hasShowResult: boolean; // to show the success message
  registrationState:RegistrationState;
}
// Custom type for input change events
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
//----------------------------------------------------------
const KsdCompRegister = ({
  registrationState,
  hasShowResult,
  isUser,
  setIsUser,
  validation,
  ...props

}: RegisterProps) => {
  // Access to the values setData  that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  //------------------------------------------------------------------

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent the default form submission behavior
    validation(); // Run the validation logic
  };
  return (
    <form onSubmit={handleSubmit}
      {...props}
      className={`register-container ${
        props.className ? props.className : ""
      }`}>
      <div className="logo-container">
        <KsdCompKwkLogo className="kwk-logo" />
        <h1>{data?.register.title}</h1>
      </div>

      <div className="inputs-container">
        <KsdCompUnderlinedInput
          placeholder={data?.register.first_name}
          type="text"
          required={true}
          value={isUser.firstName}
          name="firstName"
          onChange={(e: InputChangeEvent) => {
            setIsUser({
              ...isUser,
              firstName: GetTargetValue(e),
            });
          }}
        />
        <KsdCompUnderlinedInput
          placeholder={data?.register.last_name}
          type="text"
          required
          value={isUser.lastName}
          name="lastName"
          onChange={(e: InputChangeEvent) => {
            setIsUser({
              ...isUser,
              lastName: GetTargetValue(e),
            });
          }}
        />
        <KsdCompUnderlinedInput
          placeholder={data?.register.email}
          type="email"
          required
          value={isUser.email}
          name="email"
          onChange={(e: InputChangeEvent) => {
            setIsUser({
              ...isUser,
              email: GetTargetValue(e),
            });
          }}
        />
        <KsdCompUnderlinedInput
          placeholder={data?.register.company_name}
          type="text"
          value={isUser.companyName}
          name="companyName"
          onChange={(e: InputChangeEvent) => {
            setIsUser({
              ...isUser,
              companyName: GetTargetValue(e),
            });
          }}
        />
      </div>
      <KsdCompHeroButton id={hasShowResult?"disabled-btn":""} type="submit"  >
        {data?.register.register}
      </KsdCompHeroButton>
      {hasShowResult&& registrationState.isSuccess && (
        <KsdCompMessageAlert variant="success">
          {data?.messageAlert.register_message_success}
        </KsdCompMessageAlert>
      
      )}
       {hasShowResult&&registrationState.error && (
        <KsdCompMessageAlert variant="fail">
         {registrationState.error}
        </KsdCompMessageAlert>
      )}
      
    </form>
  );
};

export default KsdCompRegister;
