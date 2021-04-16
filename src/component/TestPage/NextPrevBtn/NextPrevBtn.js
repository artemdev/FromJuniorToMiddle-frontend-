import s from '../TestPage.module.scss';
import { useDispatch } from 'react-redux';
import questionActions from '../../../redux/questions/questions-actions';

export default function NextPrevBtn({
  randomQuestions,
  index,
  value,
  setValue,
  setModalActive,
}) {
  const dispatch = useDispatch();

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
        <>
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
        </>
      )}
    </>
  );
}
