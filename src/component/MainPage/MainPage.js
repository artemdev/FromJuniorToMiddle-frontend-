import s from './MainPage.module.scss';
import Loader from 'component/Loader';
import MainPageContainer from './MainPageContainer';
import { Link } from 'react-router-dom';
// import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/questions/questions-actions';
import routes from 'routes';

export default function MainPage() {
  // const { url } = useRouteMatch();
  const testActive = useSelector(state => state.tests.testActive);
  const dispatch = useDispatch();
  const technicalQA = () => dispatch(actions.technicalQA());
  const testingTheory = () => dispatch(actions.testingTheory());

  return (
    <div className={s.main}>
      <h2 className={s.quote}>
        "Regression testing. What is it?
        <span className={s.textBr}>
          If the system compiles, that's good, if it boots,that's great!"
        </span>
      </h2>
      <h3 className={s.author}>Linus Torvalds</h3>
      <p className={s.authorDesc}>Linux kernel creator, hacker, 1969</p>
      <section className={s.card}>
        {testActive === 'testing theory' ? (
          <>
            {<Loader /> && (
              <MainPageContainer
                disabled={true}
                testActive={testActive}
                title={'QA technical training'}
                className={s.testLinkDisable}
              />
            )}
          </>
        ) : (
          <Link to={routes.TEST_VIEW} className={s.testLink}>
            {<Loader /> && (
              <MainPageContainer
                testActive={testActive}
                title={
                  testActive === 'technical QA'
                    ? 'Сontinue the test'
                    : 'QA technical training'
                }
                className={s.oneContainer}
                onClick={technicalQA}
              />
            )}
          </Link>
        )}
        {testActive === 'technical QA' ? (
          <>
            {<Loader /> && (
              <MainPageContainer
                disabled={true}
                testActive={testActive}
                title={'Testing theory'}
                className={s.testLinkDisable}
              />
            )}
          </>
        ) : (
          <Link to={routes.TEST_VIEW} className={s.testLink}>
            {<Loader /> && (
              <MainPageContainer
                testActive={testActive}
                title={
                  testActive === 'testing theory'
                    ? 'Сontinue the test'
                    : 'Testing theory'
                }
                className={s.twoContainer}
                onClick={testingTheory}
              />
            )}
          </Link>
        )}
      </section>
    </div>
  );
}
