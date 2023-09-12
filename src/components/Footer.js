import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-text">
                <div className="footer-text-element">
                    <h2>Skontaktuj się!</h2>
                    <p>Twoja witryna internetowa to wizytówka Twojego biznesu!</p>
                </div>
                <div className="footer-text-element">
                    <h2>E-mail:</h2>
                    <p>email@email.pl</p>
                </div>
            </div>
            <hr />
            <p>Copyright © 2023 | All Rights Reserved</p>
        </div>
    );
}

export default Footer;
