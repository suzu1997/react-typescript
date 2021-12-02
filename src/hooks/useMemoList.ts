import { useCallback, useState } from 'react';

export const useMemoList = () => {
  // メモ一覧を保持するState
  const [memos, setMemos] = useState<string[]>([]);

  // 追加ボタン押下時
  const addMemo = useCallback((text: string) => {
    // state変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    // テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);
    setMemos(newMemos);
    // setMemos([...memos, text]);
  }, [memos]);

  // 削除ボタン押下時 (index: 削除対象のメモのindex。何番目が押されたか)
  const deleteMemo = useCallback((i: number) => {
    // state変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    // 削除対象のメモを配列から削除
    newMemos.splice(i, 1);
    setMemos(newMemos);
  }, [memos]);

  return { memos, addMemo, deleteMemo };
}