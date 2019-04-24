import styled from 'styled-components';

const InputMessage = styled.input.attrs(props => ({
    type: 'text',
    placeholder: 'Diz aí...'
}))`
    box-sizing: border-box;
    color: #999;
    width: 100%;
    height: 50px;
    background-color: #fbfbff;
    font-size: 20px;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, .1);
    position: absolute;
    bottom: 0;
    border: none;
    padding: 14px 11px 14px 16px;
`;

export default InputMessage;