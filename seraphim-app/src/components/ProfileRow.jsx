import React from 'react';
import PropTypes from 'prop-types';
import './ProfileRow.css';

const ProfileRow = (props) => {

    return (
        <div className={props.imageAlign}>
            <div className="photoCaptionContainer">
                <img
                    src={props.photo}
                    className="profilePhoto"
                    alt="musician profile"
                />
                <p className="profileName">
                    {props.name}
                    <br />
                    <span className="instrument">
                        {props.instrument}
                    </span>
                </p>
            </div>
            <p className="bio">{props.bio}</p>
        </div>
    )
}

ProfileRow.propTypes = {
    imageAlign: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string,
    instrument: PropTypes.string,
    bio: PropTypes.string
}

export default ProfileRow;