import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Results.module.scss';
import Diagram from '../Diagram';
import {
  // getResult,
  deleteResult,
} from '../../redux/questions/questions-operations';

import getResults from '../../service/serviceResults';

import routes from '../../routes';
import { image } from './data/image';
import { title } from './data/title';
import { subtitle } from './data/subtitle';

export default function Results() {
  const [result, setResult] = useState(null);
  const testActive = useSelector(state => state.tests.testActive);

  // STATIC DATA(added for testing)
  let correct = 6;
  let total = 12;

  const dispatch = useDispatch();

  const url = testActive === 'technical QA' ? 'technicalQA' : 'testingTheory';

  useEffect(() => {
    async function getUserResult() {
      try {
        const dataToFind = await getResults(url);
        console.log('url:', url);
        console.log(dataToFind);
        setResult(dataToFind);
      } catch (error) {
        console.error(error);
      }
    }
    getUserResult();
  }, [url]);

  const handleTryAgain = () => {
    dispatch(deleteResult());
  };

  return (
    <>
      {result !== null && (
        <div className={styles.wrapper}>
          <div className={styles.results}>
            <h1 className={styles.title}>Results</h1>
            <h2 className={styles.subtitle}>[ {testActive}_]</h2>
            <hr className={styles.line} />
            <Diagram correct={correct} total={total} />
            {/* correct={result.correctAnswers} total={result.total} */}
          </div>
          <div className={styles.feedback}>
            <img src={image[correct]} alt="cat" className={styles.image} />
            <h2 className={styles.feedbackTitle}>{title[correct]}</h2>
            <h3 className={styles.feedbackSubtitle}>{subtitle[correct]}</h3>
            <Link to={routes.TEST_VIEW} className={styles.testLink}>
              <button className={styles.button} onClick={handleTryAgain}>
                Try again
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
