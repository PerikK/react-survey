// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item,i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}



// This is the main component being exported from this file
export default function AnswersItem({ answerSet, i}) {

  console.log('anIT', answerSet);
  
  return (
    <li key={i}>
      <article className="answer">
        <h3>{answerSet.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerSet.color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerSet.timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerSet.review}</span>
        </p>
      </article>
    </li>
  );
}
