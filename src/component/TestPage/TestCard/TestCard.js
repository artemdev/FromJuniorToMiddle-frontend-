import s from '../TestPage.module.scss';
import { Radio } from 'antd';

export default function TestCard({ randomQuestions, setValue, index, value }) {
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      {randomQuestions && (
        <>
          <div className={s.testCard}>
            <p className={s.questionNumber}>
              Question{' '}
              <span className={s.questionNumber_currentQuestion}>{`${
                index + 1
              }`}</span>{' '}
              / 12
            </p>
            <h2 className={s.question}>{randomQuestions[index].question}</h2>

            <Radio.Group onChange={handleChange} value={value}>
              {randomQuestions[index].answers.map((question, index) => (
                <>
                  <Radio value={question} className={s.anwersItem} key={index}>
                    {question}
                  </Radio>
                </>
              ))}
            </Radio.Group>
          </div>
        </>
      )}
    </>
  );
}
