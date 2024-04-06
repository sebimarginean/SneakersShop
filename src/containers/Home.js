import { connect } from "react-redux";
import Home from "../screens/Home";

const mapStateToProps = (state) => {
  return {
    darkMode: state.switchMode.darkMode,
  };
};

export default connect(mapStateToProps, null)(Home);
