import PropTypes from 'prop-types';

import { ImGithub } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';

import s from './ContactCard.module.scss';

export default function ContactCard({
  name,
  position,
  description,
  images,
  git,
  linkedin,
}) {
  return (
    <>
      <div className={s.card}>
        <div className={s.imageBox}>
          <img className={s.image} src={images} alt={name} />
        </div>

        <div className={s.position}>
          <div className={s.info}>
            <h2 className={s.name}>{name}</h2>
            <p className={s.position}>{position}</p>
            <p className={s.description}>{description}</p>
          </div>
          <div className={s.links}>
            <a className={s.link} href={git} target="_blank" rel="noreferrer">
              <ImGithub className={s.git} /> GitHub
            </a>
            <a
              className={s.link}
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <ImLinkedin className={s.linkedin} />
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};
