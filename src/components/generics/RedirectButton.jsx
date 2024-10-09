import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RedirectButton.scss";

export function RedirectButton(props) {
    const {propIcon, label} = props;
    const classNames = [
        'redirect-button',
        propIcon ? 'with-icon' : '',
        label ? 'with-label' : ''
    ].join(' ').trim();
    return(
        <button className={classNames}>
            {label != null ?
                <p>{label}</p>
                :
                <FontAwesomeIcon icon={propIcon} />
            }
        </button>
    );
}