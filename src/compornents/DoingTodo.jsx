import React from "react";

export const DoingTodo = (props) => {
  const { doingItems, onClickDone, onClickDelete } = props;

  return (
    <div className="doing-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {doingItems.map((item, index) => {
          return (
            <div key={item} className="list-row">
              <li>{item}</li>
              <button onClick={() => onClickDone(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
