import React from "react";
import "./AppContentContainer.scss";

export function AppContentContainer({ children }) {
    return(
        <section className="app-content-section-container">
            {children}
        </section>
    );
}