import React from 'react';
import {css, Global} from "@emotion/react";

interface GlobalProviderProps {
    panelStatus: boolean
}

const GlobalProvider = ({panelStatus}:GlobalProviderProps) => {
    return (
        <Global styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');

          :root {
            font-size: 6.25%;
            font-family: 'Roboto Condensed', sans-serif;
            --main-ff: 'Roboto Condensed', sans-serif;
            --white: #fff;
            --base-pink: #f2e6dd;
            --light-pink: #FAF5F4;
            --base-green: #B1DBCF;
            --dark-green: #3C6E68;
            --base-blue: #0b1839;
          }

          * {
            box-sizing: border-box;
          }

          html, body {
            font-size: 16rem;
            margin: 0;
            padding: 0;
            background: var(--light-pink);
            overflow: ${panelStatus ? "hidden" : "auto"}
          }

          #__next {
            width: 100%;
            height: 100%;
          }

          img {
            max-width: 100%;
          }
          
        `}/>
    );
};

export default GlobalProvider;