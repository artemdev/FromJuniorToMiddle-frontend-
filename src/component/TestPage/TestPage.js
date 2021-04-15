import { useState, useEffect } from 'react';
import s from './TestPage.module.scss';
import { Radio } from 'antd';
import { getTests } from '../../service/serviceTests';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import questionActions from '../../redux/questions/questions-actions';
import Modal from './Modal/Modal';

// import { getResult } from '../../redux/questions/questions-operations';

export default function TestPage() {
  const [value, setValue] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const testName = useSelector(state => state.tests.testActive);
  const url = testName === 'technical QA' ? 'technical' : 'theory';

  const userAnswers = useSelector(state => state.tests.question);
  const randomQuestions = useSelector(state => state.tests.randomQuestions);
  const index = useSelector(state => state.tests.index);

  const dispatch = useDispatch();

  useEffect(() => {
    if (randomQuestions) {
      return;
    }

    if (testName === 'technical') {
      getTests('/tests/technical/random').then(tests =>
        dispatch(questionActions.addRandomQuestions(tests.data.tests)),
      );
    }
    getTests('/tests/theory/random').then(tests =>
      dispatch(questionActions.addRandomQuestions(tests.data.tests)),
    );
  }, [randomQuestions, testName]);

  useEffect(() => {
    if (!randomQuestions) {
      return;
    }
    userAnswers.map(question => {
      if (question.questionId === randomQuestions[index].questionId) {
        setValue(question.userAnswer);
      }
    });
  }, [index, randomQuestions, userAnswers]);

  const handleChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const moveNext = () => {
    if (index === randomQuestions.length - 1) {
      dispatch(
        questionActions.addResult(
          randomQuestions[index].questionId,
          value,
          randomQuestions[index].question,
        ),
      );
      return;
    }
    dispatch(
      questionActions.addResult(
        randomQuestions[index].questionId,
        value,
        randomQuestions[index].question,
      ),
    );
    setValue(null);
    dispatch(questionActions.addIndex(1));
  };
  const moveBack = () => {
    if (index === -1) {
      return;
    }
    dispatch(questionActions.addIndex(-1));
  };
  const finishTest = async () => {
    dispatch(questionActions.removeRusult());
  };

  const openModal = () => {
    setModalActive(true);
    dispatch(
      questionActions.addResult(
        randomQuestions[index].questionId,
        value,
        randomQuestions[index].question,
      ),
    );
  };

  return (
    <>
      {randomQuestions && (
        <section className={s.testsSection}>
          {/* <button onClick={() => setModalActive(true)}>Open modal</button> */}
          <div className={s.testHeaderWrapper}>
            <h2 className={s.testName}>{testName}</h2>

            <NavLink to="/" className={s.finishBtn} onClick={finishTest}>
              Finish test
            </NavLink>
          </div>
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
              {randomQuestions[index].answers.map(question => (
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
                Previous question
              </button>
            ) : (
              <button className={s.nextBtn_active} onClick={moveBack}>
                Previous question
              </button>
            )}
            {!value ? (
              <button className={s.nextBtn_disabled} disabled>
                Next question
              </button>
            ) : index !== 11 ? (
              <button className={s.nextBtn_active} onClick={moveNext}>
                Next question
              </button>
            ) : (
              <button className={s.nextBtn_active} onClick={openModal}>
                Send results
              </button>
            )}
          </div>
        </section>
      )}
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
