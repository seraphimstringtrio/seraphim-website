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
                />
                <p className="profileName">
                    {props.name}
                    <br />
                    <span style={{fontWeight: "normal", fontStyle: "italic"}}>{props.instrument}</span>
                </p>
            </div>
            <p className="bio">{props.bio}</p>
        </div>
    )
}

export default ProfileRow;