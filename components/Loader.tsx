import React from 'react';
import styled from "@emotion/styled";

const LoaderSVG = styled.svg`
  display: block;
  margin: 0 auto;
`

const Loader = () => {
    return (
        <LoaderSVG xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#0b1738" stroke="none">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"/>
            </path>
        </LoaderSVG>
    );
};

export default Loader;