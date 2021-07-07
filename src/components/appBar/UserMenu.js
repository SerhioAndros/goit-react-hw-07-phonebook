import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";
import { getUserName } from "../../redux/auth/auth-selector";

const defaultAvatar =
  "https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="50" />
    <span>Вечер в хату, {name}</span>
    <button type="button" onClick={onLogout}>
      Сваливаем...
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: (data) => dispatch(logout(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
