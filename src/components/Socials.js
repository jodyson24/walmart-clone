import React from 'react'
import FbIcon from '../Walmart_svgs_collection/svg35.svg';
import TwitterIcon from '../Walmart_svgs_collection/svg36.svg';
import PinterestIcon from '../Walmart_svgs_collection/svg37.svg';
import YoutubeIcon from '../Walmart_svgs_collection/svg38.svg';
import IGIcon from '../Walmart_svgs_collection/svg39.svg';

function Socials() {
    return (
        <div className="d-flex w-40">
            <img src={FbIcon} alt="socials" className="socials" />
            <img src={TwitterIcon} alt="socials" className="socials" />
            <img src={PinterestIcon} alt="socials" className="socials" />
            <img src={YoutubeIcon} alt="socials" className="socials" />
            <img src={IGIcon} alt="socials" className="socials" />
        </div>
    )
}

export default Socials