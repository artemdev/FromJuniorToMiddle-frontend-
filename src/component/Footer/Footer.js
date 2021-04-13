import { Link } from 'react-router-dom';

import './Footer.scss';

import iconCopyright from '../../icon/copyright.svg';

import iconHeart from '../../icon/heart-footer.svg';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container"> 
                <svg className="copyright" width="15" height="15">
                    <use href={iconCopyright + '#Vector'}></use>
                </svg>&nbsp;
                2021 | All Rights Reserved | Developed with 
                <svg className="heartIcon" width="16" height="16">
                    <use href={iconHeart + '#Vector'}></use>
                </svg>
                <p>by&nbsp;</p>
                <Link to="/contacts" className="footer-link">
                GoIT Students
                </Link>
            </div>
        </footer>
    )
}