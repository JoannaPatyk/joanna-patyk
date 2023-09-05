import React from 'react';
import projects from '../utils/projects';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

function DisplayProjects() {
    return (
        <div className="projects">
            {projects.map(({ id, title, images, description, characteristics, technologies }) => {
                return (
                    <div key={id} className="project">
                        <h2 className="project-title">{title}</h2>
                        {images}
                        <div className="project-description">
                            {description}
                            <h4 className="points-title">Cechy projektu:</h4>
                            <div className="characteristics">
                                <ul>{characteristics}</ul>
                            </div>
                            <h4 className="points-title">Zastosowane technologie:</h4>
                            <div className="technologies">{technologies}</div>
                            <h4 className="points-title">Link:</h4>
                            <div className="link-content">
                                <MdOutlineKeyboardDoubleArrowRight className="link-icon" /> {title}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DisplayProjects;
