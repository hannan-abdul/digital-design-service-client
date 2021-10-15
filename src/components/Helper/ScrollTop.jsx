import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ScrollTop = () => {
    const [visibility, setVisibility] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 })

    const handleClick = () => {
        setPosition({ ...position, position: { top: 0, left: 0 } })
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            e.preventDefault()
            if (window.scrollY > 50) {
                setVisibility(true)
            }
            else {
                setVisibility(false)
            }
        })
    })

    return (
        <div className="scroll-top">
            <Button variant="dark" onClick={handleClick} title="Back to Top" className={visibility ? "d-block" : "d-none"}>
                <FontAwesomeIcon icon={faLevelUpAlt}/>
            </Button>
        </div>
    );
};

export default ScrollTop;