import './Footer.scss';

import icon from '../../icon/sprite.svg';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container"> 

                © 2021 | All Rights Reserved |
                Developed with
                <svg className="heartIcon" width="16" height="15">
                    <use href={icon + '#heart'}></use>
                 </svg>
                by GoIT Students

            </div>
        </footer>
    )
}