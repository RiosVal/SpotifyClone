import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RedirectButton.scss";

export function RedirectButton(props) {
    const {propIcon, label, href} = props;
    const classNames = [
        'redirect-button',
        propIcon ? 'with-icon' : '',
        label ? 'with-label' : ''
    ].join(' ').trim();
    return(
        <button className={classNames}>
            <Link to={href}>
                {label != null ?
                    <p>{label}</p>
                    :
                    <FontAwesomeIcon icon={propIcon} />
                }
            </Link>
        </button>
    );
}