import React from 'react';

import Time from './Time';
import skateboard4 from '../assets/img/skateboard4.png';
import windsurf from '../assets/img/windsurf.png';

const Header = () => (
    <header className="header">
        <Time />
        <h1>What should I skate today?</h1>
        <img className="img skateboard" src={skateboard4} />
        <img className="img windsurf" src={windsurf} />

    </header>
)

export default Header;