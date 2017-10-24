import * as React from "react";
import Container from "containers/Login";
import Notifications from "containers/Notifications";
import cx from "classnames";
import css from "./login.module.scss";

const Login = ({ handleClose, test }) => (
  <div className={`login ${test}`}>
    <div className="login-header modal-header">
      <h3 className="title is-3">Login to EOS</h3>

      <button
        className="js-modal-close"
        onClick={handleClose}
      />
    </div>
    <div className="modal-body">
      <Notifications />

      <Container />
    </div>
  </div>
);

export default Login;