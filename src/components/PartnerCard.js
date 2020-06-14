import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png'
import Thumbnail from './Thumbnail';
import './partnerCard.scss'

const PartnerCard = ({ partner }) => {
    const randomRating = () => {
        return Math.floor(Math.random() * 5) + 1

    }
    return (
        <div className="partnerCard">
            <div>
                <Thumbnail>
                    <img
                        src={logo}
                        alt="Twitter Logo" width='70px' height='70px'
                        className="thumbnail__image"
                    />

                </Thumbnail>
            </div>

            <div className="partnerCard__textHeading">
                <span className="partnerCard_textHeadingTitle">Name: </span>{partner.name}

            </div>
            <div className="partnerCard__textHeading">
                <span className="partnerCard_textHeadingTitle">Website:</span> <a href={`https://www.${partner.website}`} target='_blank' rel="noopener noreferrer">{partner.website} </a>

            </div>
            <div className="partnerCard__textHeading">
                <span className="partnerCard_textHeadingTitle">Description:</span> {partner.bs}{'. '}{partner.catchPhrase}

            </div>
            <div className="partnerCard__textHeading">
                <span className="partnerCard_textHeadingTitle">Rating:</span>{' '}{randomRating()} / 5
            </div>
        </div>
    );
};

PartnerCard.propTypes = {
    partner: PropTypes.object
}

export default PartnerCard;

