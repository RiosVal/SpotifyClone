import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { convertToEmbedURL } from "../../../utils/accountUtils";
import "./YoutubeModal.scss";

export function YoutubeModal({ isOpen, onClose, videoURL }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faX} />
                </button>
                <iframe
                    className="modal-iframe"
                    src={convertToEmbedURL(videoURL)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
