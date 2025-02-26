import React from 'react'
import KsdCompUnderlinedTitle from './titles/KsdCompUnderlinedTitle';
import "../_dist/KsdCompQuestionsComponent.css";
interface QuestionsProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    variant?:"para-question-one" | "para-question-two";
    title?:string
  }
const KsdCompQuestionsComponent = ({ ...props }: QuestionsProps) => {
   
  return (
    <section
    {...props}
    className={`questions-container ${
      props.className ? props.className : ""
    }`}>

        <KsdCompUnderlinedTitle variant='centred'>{props.title}</KsdCompUnderlinedTitle>
        <div className={`questions-content questions-content-${
        props.variant ? props.variant : "para-question-one"
      }`}>
            {props.children}
        </div>
    </section>
  )
}

export default KsdCompQuestionsComponent