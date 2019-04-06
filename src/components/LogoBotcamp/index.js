import styled from 'styled-components';

import logoImg from '../../img/logo.svg';

const LogoBotcamp = styled.img.attrs({
    src: logoImg,
    alt: 'Logo do Botcamp'
})`
    margin: 0 auto;
    width: 250px;
    max-height: 50px;
    display: block;
    padding-top: 5rem;
`;

export default LogoBotcamp;