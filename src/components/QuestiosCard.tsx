import React from "react";
import { Wrapper } from "../App.style";
import { AnswerObject } from "./API";
import { ButtonWrapper } from "./QuestiosCard.style";
type Props = {
  question: string;
  answers: string[];
  callback: (e:React.MouseEvent<HTMLButtonElement>)=>void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
export const QuestiosCard: React.FC<Props> = ({question,answers,callback,userAnswer,questionNr,totalQuestions,}) => 
   (
    <Wrapper>
      <p className="number">
        Question : {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html:question}}/>
      <div>
        {answers.map(answer =>(
            <ButtonWrapper
             key={answer}
             correct={userAnswer?.correctAnswer===answer}
             userClicked={userAnswer?.answer===answer}
             >
                <button disabled={userAnswer?true:false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html:answer}}/>
                </button>
            </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );

