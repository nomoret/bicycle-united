import { connect } from "react-redux";
import Container from "./container";
import { actionCreators } from "../../redux/modules/favorites";

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  const {
    favorites: { locationList }
  } = state;

  return {
    locationList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFavorite: favorite =>
      dispatch(actionCreators.removeFavorite(favorite))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
