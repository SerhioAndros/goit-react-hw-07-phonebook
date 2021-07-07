import React from "react";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="30" />
    <span>Вечер в хату, {name}</span>
    <button type="button" onClick={onLogout}>
      Сваливаем...
    </button>
  </div>
);

export default UserMenu;
