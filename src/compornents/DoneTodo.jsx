import React from "react";

export const DoneTodo = (props) => {
  const { doneItems, onClick } = props;
  return (
    <div className="done-area">
      <p className="title">完了のTODO</p>
      <ul>
        {doneItems.map((item, index) => {
          return (
            <div key={item} className="list-row">
              <li>{item}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
