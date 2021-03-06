import React from 'react';
import { useDispatch } from 'react-redux';
import { removeMessage } from 'store/messenger';
import * as S from './styled';

type Message = {
  messageId: number;
  message: string;
};

function RemoveMessageModal({ messageId, message }: Message) {
  const dispatch = useDispatch();
  const slicedMessage =
    message.length > 10 ? `${message.slice(0, 10)}...` : message;

  const onRemove = () => {
    dispatch(removeMessage(messageId));
  };

  return (
    <S.Wrapper>
      <S.TextContainer>
        <S.Message>{`"${slicedMessage}"`}</S.Message>
        <p>메시지를 삭제하시겠습니까?</p>
      </S.TextContainer>
      <S.Button onClick={onRemove}>확인</S.Button>
    </S.Wrapper>
  );
}

export default RemoveMessageModal;
