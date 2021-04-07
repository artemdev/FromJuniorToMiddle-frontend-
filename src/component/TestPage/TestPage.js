import { useState, useEffect } from 'react';
import s from './TestPage.module.scss';
import axios from 'axios';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import { makeStyles } from '@material-ui/core/styles';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
// import { Radio, Input } from 'antd';

axios.defaults.baseURL = 'http://localhost:3123';

export default function TestPage() {
  const [tests, setTests] = useState(null);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(null);
  // const [answers, setAnswers] = useState([]);

  async function getTests() {
    try {
      const { data } = await axios.get('/tests/technicalQA');
      return data;
    } catch (error) {
      console.log('error', { error });
      return [];
    }
  }
  // useEffect(() => {
  //   getTests().then(tests => setTests(tests.data.tests));
  // }, []);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const moveNext = () => {
    if (index === tests.length - 1) {
      return;
    }
    setValue(null);
    setIndex(prevState => prevState + 1);
  };
  const moveBack = () => {
    if (index === -1) {
      return;
    }
    setIndex(prevState => prevState - 1);
  };

  return (
    <>
      {tests && (
        <section className={s.testsSection}>
          <div className={s.header}></div>
          <div className={s.testCard}>
            <p className={s.questionNumber}>
              Question{' '}
              <span className={s.questionNumber_currentQuestion}>{`${
                index + 1
              }`}</span>{' '}
              / 12
            </p>
            <h2 className={s.question}>{tests[index].question}</h2>
            <Radio.Group onChange={handleChange} value={value}>
              {tests[index].answers.map(question => (
                <>
                  <Radio value={question} className={s.anwersItem}>
                    {question}
                  </Radio>
                </>
              ))}
            </Radio.Group>
          </div>
          <div className={s.btnWrapper}>
            {index === 0 ? (
              <button className={s.nextBtn_disabled} disabled>
                Back
              </button>
            ) : (
              <button className={s.nextBtn_active} onClick={moveBack}>
                Back
              </button>
            )}
            {!value ? (
              <button className={s.nextBtn_disabled} disabled>
                Next
              </button>
            ) : (
              <button className={s.nextBtn_active} onClick={moveNext}>
                Next
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
}

// {
//   <FormControl component="fieldset">
//               <FormLabel component="legend">{tests[index].question}</FormLabel>
//               <RadioGroup
//                 aria-label={tests[index].question}
//                 name={tests[index].question}
//                 value={value}
//                 onChange={handleChange}
//               >
//                 {tests[index].answers.map(question => (
//                   <FormControlLabel
//                     className={classes.root}
//                     value={question}
//                     control={<Radio />}
//                     label={question}
//                   />
//                 ))}
//               </RadioGroup>
//             </FormControl>
// }
