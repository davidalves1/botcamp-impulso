// import React from 'react';

// import './style.css';

// const BtnBotcamp = () => <button className="btn-botcamp">Entrar</button>;

import styled from 'styled-components';

const BtnBotcamp = styled.button.attrs(props => ({
    children: props.content
}))`
    background-color: #ee3e25;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    text-transform: uppercase;
    transition: ease .3s;
    width: 280px;

    :hover {
        background: #dd2d14;
    }
`;

export default BtnBotcamp;