import styled from 'styled-components';

import logoImg from '../../img/logo.png';

const LogoBotcamp = styled.img.attrs(props => ({
    src: logoImg,
    alt: 'Logo do Botcamp'
}))`
    width: ${props => props.small ? '200px' : '250px'};
    max-height: 50px;
`;

export default LogoBotcamp;