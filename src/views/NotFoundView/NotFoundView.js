import errorImg from './images/notFound.gif';
import s from './NotFoundView.module.scss';

const NotFoundView = () => {
  return (
    <div className={s.notFound}>
      <h1 className={s.title}>404 Page not found</h1>
      <img className={s.img} src={errorImg} width="650" alt="Page not found" />
    </div>
  );
};

export default NotFoundView;
