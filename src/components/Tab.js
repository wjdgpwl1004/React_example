import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const colorStyles = css`
    background-color: black;

    ${props => props.isOn && css`
        background-color: red;
    `};
`;

const StyledTab = styled.div`
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 1px solid white;
    ${colorStyles} 
    &>a {
        display:block;
        width:100%;
        height:100%;
    }
`;

function Tab({ id, text, isOn, url, onClick }) {
    return (
        <StyledTab isOn={isOn} onClick={() => onClick(id)}>
            <Link to={url}>{ text }</Link>
        </StyledTab>
    );
}

export default Tab; 