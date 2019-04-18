import React from 'react';

import HeaderWrapper from '../../components/HeaderWrapper';
import LogoBotcamp from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import InputMessage from '../../components/InputMessage';
import MessageWrapper from '../../components/MessageWrapper';

const Chat = () => (
    <>
        <HeaderWrapper>
            <LogoBotcamp small />
            <LogoutBotcamp />
        </HeaderWrapper>
        <MessageWrapper>
            <InputMessage />
        </MessageWrapper>
    </>
);

export default Chat;
