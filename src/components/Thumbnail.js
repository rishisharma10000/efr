import React from 'react';
import PropTypes from 'prop-types';
import './thumbnail.scss';

const Thumbnail = ({ children }) => {
    return (
        <div className="thumbnail">
            {children}
        </div>
    );
};

Thumbnail.propTypes = {
    children: PropTypes.object
}

export default Thumbnail;