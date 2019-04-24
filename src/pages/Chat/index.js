import React from 'react';
import { Link } from 'react-router-dom';

import HeaderWrapper from '../../components/HeaderWrapper';
import LogoBotcamp from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import InputMessage from '../../components/InputMessage';
import ChatWrapper from '../../components/ChatWrapper';
import MessageWrapper from '../../components/MessageWrapper';

const Chat = () => (
    <>
        <HeaderWrapper>
            <LogoBotcamp small />
            <Link to="/">
                <LogoutBotcamp />
            </Link>
        </HeaderWrapper>
        <ChatWrapper>
            teste
        </ChatWrapper>
        <MessageWrapper>
            <InputMessage />
        </MessageWrapper>
    </>
);

export default Chat;
