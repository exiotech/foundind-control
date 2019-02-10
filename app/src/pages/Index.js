import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import logo from "../assets/logo.png";

export default ({ accounts }) => (
  <div className="App">
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a class="navbar-brand" href="#">SmartFunds</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col">
          <div className="card card-body">
            <AccountData accountIndex="0" units="ether" precision="3" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
