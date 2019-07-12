const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const RESET_STATE = "RESET_STATE";

function addFavorite(payload) {
  return {
    type: ADD_FAVORITE,
    payload
  };
}

function removeFavorite(payload) {
  return {
    type: REMOVE_FAVORITE,
    payload
  };
}

function resetState() {
  return {
    type: RESET_STATE
  };
}

const initialState = {
  locationList: []
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return applyAddFavorite(state, payload);
    case REMOVE_FAVORITE:
      return applyRemoveFavorite(state, payload);
    case RESET_STATE:
      return {};
    default:
      return state;
  }
}

function applyAddFavorite(state, payload) {
  console.log("payload", payload);
  const { locationList } = state;
  const { stationName, stationId, parkingBikeTotCnt, rackTotCnt } = payload;

  const item = {
    title: stationName,
    data: [
      {
        id: stationId,
        usableCount: parkingBikeTotCnt,
        entireCount: rackTotCnt
      }
    ]
  };

  return {
    locationList: [...locationList, item]
  };
}

function applyRemoveFavorite(state, payload) {
  const { locationList } = state;
  const updateLocationList = locationList.filter(
    item => item.data[0].id !== payload
  );

  return {
    ...state,
    locationList: updateLocationList
  };
}

const actionCreators = {
  addFavorite,
  removeFavorite,
  resetState
};

export { actionCreators };
export default reducer;
