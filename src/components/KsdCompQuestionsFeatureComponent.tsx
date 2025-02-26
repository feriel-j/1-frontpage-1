import React, { useContext } from 'react'
import KsdCompQuestionsComponent from './KsdCompQuestionsComponent';
import { DataContext } from '../utils/SwitchedData';
import"../_dist/KsdCompQuestionsFeatureComponent.css"
interface QuestionsFeatureProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    variant:"para-question-one" | "para-question-two";
  }
const KsdCompQuestionsFeatureComponent = ({ ...props }: QuestionsFeatureProps) => {
    // Access to the values data  that is passed as a value to the provider.
  const { data } = useContext(DataContext);
 //switch case for the content of the caroussel items-----------
 const contentSwitch = (variant: string) => {
    switch (variant) {
      case "para-question-one": 
        return (
            <KsdCompQuestionsComponent
            variant="para-question-one"
            title={data?.reason?.title}
          >
            <p>
              {data?.reason?.p_1.part_1}
              <label>{data?.reason?.p_1?.label}</label>
            </p>
            <p>
              {data?.reason?.p_2?.part_1}
              <span>{data?.reason?.p_2?.span_1}</span>
              {data?.reason?.p_2?.part_2}
              <span>{data?.reason?.p_2?.span_2}</span>
            </p>
            <p>
              {data?.reason?.p_3?.part_1}
              <label>{data?.reason?.p_3?.label}</label>
              {data?.reason?.p_3?.part}
              <span className="specific-span">{data?.reason?.p_3?.span_1}</span>
              {data?.reason?.p_3?.part_2}
              <span className="specific-span">{data?.reason?.p_3?.span_2}</span>
              {data?.reason?.p_3?.part_3}
              <span className="specific-span">{data?.reason?.p_3?.span_3}</span>
              {data?.reason?.p_3?.part_4}
            </p>
          </KsdCompQuestionsComponent>
        );
      case "para-question-two":
        return (
            <KsdCompQuestionsComponent
            variant="para-question-two"
            title={data?.timing?.title}
          >
            <p>
              {data?.timing?.p_1?.part_1}
              <label>{data?.timing?.p_1?.label}</label>{" "}
              {data?.timing?.p_1?.part_2}
            </p>
            <p>
              {data?.timing?.p_2?.part_1}
              <span>{data?.timing?.p_2?.span_1}</span> {data?.timing?.p_2?.part_2}
              <span>{data?.timing?.p_2?.span_2}</span>
              {data?.timing?.p_2?.part_3}
              <span>{data?.timing?.p_2?.span_3}</span>
            </p>
            <p>
              {data?.timing?.p_3?.part_1}
              <span>{data?.timing?.p_3?.span_1}</span> {data?.timing?.p_3?.part_2}
              <span className="specific-span">{data?.timing?.p_3?.span_2}</span>
              {data?.timing?.p_3?.part_3}
              <span className="specific-span">{data?.timing?.p_3?.span_3}</span>
              {data?.timing?.p_3?.part_4}
            </p>
          </KsdCompQuestionsComponent>
        );
      
      default:
        break;
    }
  };
  return (
    <section {...props}
    className={`questions-feature-container ${
      props.className ? props.className : ""
    }`}>
        {contentSwitch(props.variant)}
    </section>
  )
}

export default KsdCompQuestionsFeatureComponent