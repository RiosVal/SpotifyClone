import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { convertToEmbedURL } from "../../../utils/accountUtils";

export function YoutubeModal(props) {
    const { isOpen, onClose, videoURL } = props;
    if (!isOpen) return null;
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faX} />
                </button>
                <div className="modal-content">
                    <iframe
                        width="100%"
                        height="315"
                        src={convertToEmbedURL(videoURL)}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}