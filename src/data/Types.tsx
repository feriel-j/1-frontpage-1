// define user type for register
export type User={
    firstName: string,
    lastName: string,
    email: string,
    companyName:string,
}
//registration state type
export type RegistrationState ={
    isLoading: boolean;
    isSuccess: boolean;
    error: string | null;
  }

//define message type for contact us
export type Message ={
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
  };


 // Custom type for input change events
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
// Custom type for textarea change events
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
//--------------------------------------------------------------------


