import React from 'react';
import Media from '../components/Media';
import PageLink from '../components/PageLink';
import links from '../utils/links';
import '../css/footer.css';

function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-text">
                <div className="footer-text-element">
                    <h2>Menu</h2>
                    {links.map(({ id, text, path }) => (
                        <PageLink key={id} to={path} title={text} />
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
                    <p>Twoja witryna internetowa to wizytówka Twojego biznesu!</p>
                </div>
            </div>
            <hr />
            <p className="copyright-text">Copyright © 2023 | All Rights Reserved</p>
        </div>
    );
}

export default Footer;
