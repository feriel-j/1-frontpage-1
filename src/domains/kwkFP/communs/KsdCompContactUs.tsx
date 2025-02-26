import React, { useContext, useRef } from "react";
import KsdCompKwkLogo from "../../../components/icons/KsdCompKwkLogo";
import KsdCompUnderlinedInput from "../../../components/inputs/KsdCompUnderlinedInput";
import KsdCompUnderlinedTitle from "../../../components/titles/KsdCompUnderlinedTitle";
import KsdCompTextarea from "../../../components/inputs/KsdCompTextarea";
import KsdCompHeroButton from "../../../components/buttons/KsdCompHeroButton";
import "../../../_dist/KsdCompContactUs.css";
// import KsdCompMessageAlert from "../../../components/KsdCompMessageAlert";
import KsdCompDivider from "../../../components/divider/KsdCompDivider";
import { DataContext } from "../../../utils/SwitchedData";
import { InputChangeEvent, Message, TextAreaChangeEvent } from "../../../data/Types";
import KsdCompMessageAlert from "../../../components/KsdCompMessageAlert";




interface ContactUsProps extends React.HTMLAttributes<HTMLFormElement> {
  id?: string;
  sendMessage: Message;
  messageSent: boolean;
  onInputChange: (field: keyof Message, value: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}
const KsdCompContactUs = ({ ...props }: ContactUsProps) => {
  // Create a reference using the useRef hook--------------------------------
  const formRef = useRef<HTMLElement>(null);
    // Access to the values data that is passed as a value to the provider.
    const { data } = useContext(DataContext);
    //---------------------------------------------------------------------
  return (
    <form
      onSubmit={props.onSubmit}
      className={`contact-us-container ${
        props.className ? props.className : ""
      }`}
    >
      <main ref={formRef} className="form-content-container">
        <div className="inputs-container">
          <div className="logo-container">
            <KsdCompKwkLogo className="kwk-logo-contact" />
            <h1>{data?.contactUs?.h_1}</h1>
          </div>
          <div className="inputs-content">
            <KsdCompUnderlinedInput
              className="contact-us-underline-input"
              type="text"
              placeholder={data?.contactUs?.name}
              name="name"
              value={props.sendMessage.name}
              required
              onChange={(e:InputChangeEvent) =>
                props.onInputChange("name", e.target.value)
              }
            />
            <KsdCompUnderlinedInput
              className="contact-us-underline-input"
              type="email"
              placeholder={data?.contactUs?.email}
              name="email"
              value={props.sendMessage.email}
              required
              onChange={(e: InputChangeEvent) =>
                props.onInputChange("email", e.target.value)
              }
            />
            <KsdCompUnderlinedInput
              className="contact-us-underline-input"
              type="text"
              placeholder={data?.contactUs?.company}
              name="company"
              value={props.sendMessage.company}
              onChange={(e:InputChangeEvent) =>
                props.onInputChange("company", e.target.value)
              }
            />
            <KsdCompUnderlinedInput
              className="contact-us-underline-input"
              type="text"
              placeholder={data?.contactUs?.subject}
              name="subject"
              value={props.sendMessage.subject}
              required
              onChange={(e:InputChangeEvent) =>
                props.onInputChange("subject", e.target.value)
              }
            />
          </div>
        </div>
        <div className="message-side-content">
          <KsdCompUnderlinedTitle
            variant="textarea"
            className="underline-title"
          >
            {data?.contactUs?.h_2}
          </KsdCompUnderlinedTitle>
          <KsdCompTextarea
            placeholder={data?.contactUs?.message}
            className="contact-us-textarea"
            type="text"
            name="message"
            value={props.sendMessage.message}
            onChange={(e: TextAreaChangeEvent) =>
              props.onInputChange("message", e.target.value)
            }
          />
        </div>
      </main>
      <footer className="form-footer-container">
        <KsdCompDivider className="contact-us-divider" line={"horizontal"} />
        <KsdCompHeroButton id={props.messageSent?"disabled-btn":""}
          variant="primary"
          className="contact-us-button"
          type="submit"
        >
          {data?.contactUs?.text_button}
        </KsdCompHeroButton>
      </footer>
      {props.messageSent && (
        <KsdCompMessageAlert variant="success" className="contact-us-message">
          {data?.messageAlert?.contact_message}
        </KsdCompMessageAlert>
      )}
    </form>
  );
};

export default KsdCompContactUs;
