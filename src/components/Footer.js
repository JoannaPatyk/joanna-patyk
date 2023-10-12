import React from 'react';
import { Link } from 'react-router-dom';
import Media from '../components/Media';
import PageLink from '../components/PageLink';
import links from '../utils/links';
import '../css/footer.css';
import { TbWorldHeart } from 'react-icons/tb';

function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-text">
                <div className="footer-text-element">
                    <h2>Menu</h2>
                    {links.map(({ id, icon, text, path }) => (
                        <PageLink key={id} to={path} title={text} icon={icon} />
                    ))}
                </div>
                <div className="footer-text-element">
                    <h2>Kontakt</h2>
                    <p>Joanna Patyk</p>
                    <p>patykjoanna93@gmail.com</p>
                    <Media />
                </div>
                <div className="footer-text-element">
                    <h2>Skontaktuj się!</h2>
                    <p className="footer-slogan">
                        Twoja witryna internetowa to wizytówka Twojego biznesu <TbWorldHeart />
                    </p>
                </div>
            </div>
            <hr />
            <p className="copyright-text">
                Copyright © 2023 | All Rights Reserved |{' '}
                <Link to="/privacy-policy" className="policy-link">
                    Polityka prywatności
                </Link>{' '}
            </p>
        </div>
    );
}

export default Footer;
