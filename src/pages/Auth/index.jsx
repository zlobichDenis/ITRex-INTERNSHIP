import React from "react";

import { AuthRouter } from "routes";
import { Section, MainContainer } from "./styles";

export const Authentification = () => {
    return (
        <Section>
            <MainContainer>
                <AuthRouter />
            </MainContainer>
        </Section>
    )
}
