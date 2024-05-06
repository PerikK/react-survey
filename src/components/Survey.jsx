import { useState } from "react";
import Form from "./Form";

import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
    const [input, setInput] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
    })
  
  console.log(input);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <AnswersList /> */}
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <Form input={input} setInput={setInput}/>
        {/* a form should be here */}</section>
    </main>
  );
}

export default Survey;
