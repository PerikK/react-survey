import AnswersItem from "./AnswersItem";

export default function AnswersList({answers}) {
  // console.log("Inside AnswersList: ", props);

  // const { answersList } = props;

  return (
    <ul>
      {answers.map((answer,i) => (
        <AnswersItem answerSet={answers} i={i}/>
      ))}
    </ul>
  );
}
