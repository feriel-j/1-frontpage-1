import React, { useState } from "react";
import KsdCompContactUs from "../communs/KsdCompContactUs";
import emailjs from "@emailjs/browser";
const KsdCompContactUsFeature = () => {
  
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (field: keyof typeof sendMessage, value: string) => {
    setSendMessage((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    /*used to collect the data from the sendMessage state and organize it into a format that can be sent to the Email.js service for composing and sending an email.*/
    const emailParams = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        emailParams,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessageSent(true); // Display the message sent notification
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
    // Reset emailParams
    emailParams.reset();
    //Reset the state
    setSendMessage({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      {" "}
      <KsdCompContactUs
        sendMessage={sendMessage}
        messageSent={messageSent}
        onSubmit={handleSubmit}
        onInputChange={handleChange}
      />
    </>
  );
};

export default KsdCompContactUsFeature;
