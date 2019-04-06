import styled from 'styled-components';

import bgLogin from '../../img/bg-login.png';

const LoginWrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(${bgLogin});
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    padding-top: 120px;
    padding-bottom: 80px;
`;

export default LoginWrapper;
