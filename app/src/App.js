import MyComponent from "./pages/Index";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SmartFunds: state.contracts.SmartFunds,
    drizzleStatus: state.drizzleStatus,
  };
};

const App = drizzleConnect(MyComponent, mapStateToProps);

export default App;
