import s from './Modal.module.scss';
import { getResult } from '../../../service/serviceTests';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Modal({ active, setActive }) {
  const testName = useSelector(state => state.tests.testActive);
  const url = testName === 'technical QA' ? 'technical' : 'theory';
  const userAnswers = useSelector(state => state.tests.question);
  const token = useSelector(state => state.user.token);

  const sendAnswers = () => {
    if (url === 'technical') {
      getResult('technical', userAnswers, token);
    }

    if (url === 'theory') {
      getResult('theory', userAnswers, token);
    }
  };

  const closeModal = () => {
    setActive(false);
  };
  return (
    <div
      className={active ? s.modal__active : s.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? s.modal_content__active : s.modal_content}
        onClick={e => e.stopPropagation()}
      >
        <p className={s.modalInfo}>Вы хотите завершить тест?</p>
        <div className={s.btnWrapper}>
          <NavLink to="/result" onClick={sendAnswers} className={s.modalBtn}>
            Ок
          </NavLink>
          <button onClick={closeModal} className={s.modalBtn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
