import React from "react";
import { AuthRouter } from "routes";

export const AuthContainer = () => {
    return (
        <section className="feedback">
            <div className="feedback-container">
                <AuthRouter />
            </div>
        </section>
    )
}