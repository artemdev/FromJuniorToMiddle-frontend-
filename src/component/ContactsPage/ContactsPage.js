import styles from './ContactsPage.module.scss';
import contacts from '../../team/team.json';
import { v4 as uuidv4 } from 'uuid';

const ContactPageView = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Our team</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {contacts.map(el => {
            return (
              <li key={uuidv4()} className={styles.listItem}>
                <div className={styles.CARD}>{el.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactPageView;
