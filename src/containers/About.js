import { connect } from "react-redux";
import About from "../screens/About";

const mapStateToProps = (state) => {
  return {
    darkMode: state.switchMode.darkMode,
  };
};

export default connect(mapStateToProps, null)(About);
