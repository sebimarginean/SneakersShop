import { connect } from "react-redux";
import Menu from "../components/Menu";
import { switchMode } from "../actions/darkmode";

const mapStateToProps = (state) => {
  return {
    darkMode: state.switchMode.darkMode,
  };
};

const mapDispatchToProps = { switchMode };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
