import { connect } from "react-redux";
import Container from "./container";
import { actionCreators } from "../../redux/modules/favorites";

const mapStateToProps = state => {
  const {
    favorites: { locationList }
  } = state;
  return {
    locationList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: station => dispatch(actionCreators.addFavorite(station)),
    removeFavroite: stationId =>
      dispatch(actionCreators.removeFavorite(stationId)),
    resetState: station => dispatch(actionCreators.resetState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
