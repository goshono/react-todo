import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornents/InputTodo";
import { DoingTodo } from "./compornents/DoingTodo";
import { DoneTodo } from "./compornents/DoneTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [doingItems, setDoingItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  // onChangeイベントは引数を取ることができる
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;

    const newDoingItems = [...doingItems, todoText];
    setDoingItems(newDoingItems);
    setTodoText("");
  };

  const onClickDone = (index) => {
    const newDoingItems = [...doingItems];
    newDoingItems.splice(index, 1);

    const newDoneItems = [...doneItems, doingItems[index]];
    setDoingItems(newDoingItems);
    setDoneItems(newDoneItems);
  };

  const onClickDelete = (index) => {
    const newDoingItems = [...doingItems];
    newDoingItems.splice(index, 1);
    setDoingItems(newDoingItems);
  };

  const onClickReturn = (index) => {
    const newDoneItems = [...doneItems];
    newDoneItems.splice(index, 1);

    const newDoingItems = [...doingItems, doneItems[index]];

    setDoneItems(newDoneItems);
    setDoingItems(newDoingItems);
  };

  return (
    <>
      {/* TODO入力部 */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={doingItems.length >= 5}
      />
      {doingItems.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTodoは5個まで</p>
      )}
      {/* 未完了TODO */}
      <DoingTodo
        doingItems={doingItems}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />

      {/* 完了済TODO */}
      <DoneTodo doneItems={doneItems} onClick={onClickReturn} />
    </>
  );
};
