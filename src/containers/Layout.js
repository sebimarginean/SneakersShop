import { connect } from "react-redux";
import Layout from "../components/Layout";

const mapStateToProps = (state) => {
  return {
    darkMode: state.switchMode.darkMode,
  };
};

export default connect(mapStateToProps, null)(Layout);
