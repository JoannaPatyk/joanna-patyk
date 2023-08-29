import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
import '../css/media.css';

function Media() {
    return (
        <div className="contact-icon-container">
            <a href="https://github.com/JoannaPatyk">
                <AiFillGithub className="contact-icon" />
            </a>

            <a href="mailto:joannakosjose@gmail.com">
                <HiOutlineMailOpen className="contact-icon" />
            </a>
        </div>
    );
}

export default Media;
