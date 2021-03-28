import React from 'react';
import Button from './button-component';
import './questionPage-styles.scss';

const QuestionPage = ({nr, question, srcImg, answers, saveAnswer}) => {

return (
  <div className='questionPage'>
    <h2 className='question'>{question}</h2>
    <div className='answers'>
      <img src={srcImg} alt='questionImage'/>
      <div className='buttony'>
        {answers.map((answer, id) => 
          <Button
            key={id}
            buttonText={answer}
            onPressed={() => saveAnswer(id+1)}/>
        )}
      </div>
    </div>
  </div>
);
      }
export default QuestionPage;