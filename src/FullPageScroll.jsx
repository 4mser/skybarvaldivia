import React from "react";
import  Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

const FullPageScroll = () => {

    const SectionStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Fullpage scrollSensitivity={.5}>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection style={SectionStyle}>
                    <h1>Pagina 1 Sky Bar</h1>
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <h1>Pagina 2 Sky Bar</h1>
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <h1>Pagina 2 Sky Bar</h1>
                </FullpageSection>


            </FullPageSections>
        </Fullpage>
    )
}

export default FullPageScroll