import styled from 'styled-components';

import logoImg from '../../img/logo.png';

const LogoBotcamp = styled.img.attrs({
    src: logoImg,
    alt: 'Logo do Botcamp'
})`
    width: 250px;
    max-height: 50px;
`;

export default LogoBotcamp;