import styles from './ContactsPage.module.scss';
import contacts from '../../team/team.json';
import { v4 as uuidv4 } from 'uuid';

import ContactCard from '../ContactCard/ContactCard';

const ContactPageView = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Our team</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {contacts.map(
            ({ name, position, description, images, git, linkedin }) => {
              return (
                <li key={uuidv4()} className={styles.listItem}>
                  <ContactCard
                    name={name}
                    position={position}
                    description={description}
                    images={images}
                    git={git}
                    linkedin={linkedin}
                  />
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactPageView;
