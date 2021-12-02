import { ChangeEventHandler, useCallback, useState, VFC } from 'react';
import styled from 'styled-components';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';

export const App: VFC = () => {
  const { memos, addMemo, deleteMemo } = useMemoList();

  // テキストボックスの値を保持するState
  const [text, setText] = useState<string>('');

  // テキストボックス入力時に入力内容をstateに設定
  const onChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    addMemo(text);
    // テキストボックスを空に
    setText('');
  };

  const onClickDelete = useCallback((i: number) => {
    deleteMemo(i);
  }, [deleteMemo]);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type='text' value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

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

export default App;
