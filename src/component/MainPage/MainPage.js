import s from './MainPage.module.scss';
import Loader from 'component/Loader';
import MainPageContainer from './MainPageContainer';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../redux/questions/questions-actions';

const MainPage = ({ testActive, technicalQA, testingTheory }) => {
  return (
    <main className={s.main}>
      <h2 className={s.quote}>
        "Regression testing. What is it?
        <span className={s.textBr}>
          If the system compiles, that's good, if it boots,that's great!"
        </span>
      </h2>
      <h3 className={s.author}>Linus Torvalds</h3>
      <p className={s.authorDesc}>Linux kernel creator, hacker, 1969</p>
      <section className={s.card}>
        <NavLink to="/test" className={s.testLink}>
          {<Loader /> && (
            <MainPageContainer
              testActive={testActive}
              title={'QA technical training'}
              className={s.oneContainer}
              onClick={technicalQA}
            />
          )}
        </NavLink>
        <NavLink to="/test" className={s.testLink}>
          {<Loader /> && (
            <MainPageContainer
              testActive={testActive}
              title={'Testing theory'}
              className={s.twoContainer}
              onClick={testingTheory}
            />
          )}
        </NavLink>
      </section>
    </main>
  );
};

const mapStateToProps = state => ({
  testActive: state.testActive,
});
const mapDispatchToProps = dispatch => ({
  technicalQA: () => dispatch(actions.technicalQA()),
  testingTheory: () => dispatch(actions.testingTheory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
