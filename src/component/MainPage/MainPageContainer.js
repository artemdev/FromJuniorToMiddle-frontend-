import s from './MainPage.module.scss';

const MainPageContainer = ({ title, className, onClick, disabled }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${s.container}`}
      >
        <p className={s.ContainerText}>{title}</p>

        <svg
          className={s.arrow}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <g clip-path="url(#clip0)"> */}
          <path
            d="M29.817 14.5581L20.442 5.18312C20.1978 4.93896 19.8023 4.93896 19.5582 5.18312C19.314 5.42728 19.314 5.82279 19.5582 6.06689L27.8663 14.375H0.625081C0.279612 14.375 6.10352e-05 14.6546 6.10352e-05 15C6.10352e-05 15.3455 0.279612 15.6251 0.625081 15.6251H27.8663L19.5582 23.9331C19.314 24.1773 19.314 24.5728 19.5582 24.8169C19.6802 24.9389 19.8402 25 20.0001 25C20.16 25 20.3199 24.9389 20.442 24.8169L29.817 15.4419C30.0611 15.1978 30.0611 14.8023 29.817 14.5581Z"
            fill="white"
          />
          {/* </g> */}
          <defs>
            <clipPath id="clip0">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </>
  );
};

export default MainPageContainer;
