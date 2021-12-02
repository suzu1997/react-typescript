import { memo, VFC } from 'react';
import styled from 'styled-components';

type Props = {
  memos: Array<string>;
  onClickDelete: (i: number) => void;
};

export const MemoList: VFC<Props> = memo((props) => {
  const { memos, onClickDelete } = props;

  return (
    <SContainer>
      <p>メモ一覧</p>
      <ul>
        {memos.map((memo: string, i: number) => {
          return (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(i)}>削除</SButton>
              </SMemoWrapper>
            </li>
          );
        })}
      </ul>
    </SContainer>
  );
});

const SButton = styled.button`
  background-color: #ddd;
  border: none;
  margin-left: 10px;
  padding: 6px;
  border-radius: 4px;
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

const SContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
