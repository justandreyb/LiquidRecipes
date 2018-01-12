import {fromJS} from "immutable";
import {sendElement, deleteElement, getElements} from "../../api";
import {takeEvery, takeLatest} from "redux-saga/effects";

// ---------------------- CONSTANTS ----------------------- //

const COUNTRIES_URL = "/countries";

const CREATE_COUNTRY_REQUEST = "CREATE_COUNTRY_REQUEST";
const CREATE_COUNTRY_SUCCESS = "CREATE_COUNTRY_SUCCESS";
const CREATE_COUNTRY_FAIL = "CREATE_COUNTRY_FAIL";

const GET_COUNTRIES_REQUEST = "GET_COUNTRIES_REQUEST";
const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
const GET_COUNTRIES_FAIL = "GET_COUNTRIES_FAIL";

const DELETE_COUNTRY_REQUEST = "DELETE_COUNTRY_REQUEST";
const DELETE_COUNTRY_SUCCESS = "DELETE_COUNTRY_SUCCESS";
const DELETE_COUNTRY_FAIL = "DELETE_COUNTRY_FAIL";

// --------------------- INITIAL STATE --------------------- //

const initialState = fromJS({
  countries: [],
  error    : null,
  loading  : false
});

// ----------------------- REDUCER ------------------------ //

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case CREATE_COUNTRY_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case CREATE_COUNTRY_SUCCESS:
    return state
      .updateIn(["countries"], (arr) => arr.push(action.payload))
      .set("loading", false)
      .set("error", null);

  case CREATE_COUNTRY_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case GET_COUNTRIES_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case GET_COUNTRIES_SUCCESS:
    return state
      .set("countries", action.payload)
      .set("loading", false)
      .set("error", null);

  case GET_COUNTRIES_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);


  case DELETE_COUNTRY_REQUEST:
    return state
      .set("loading", true)
      .set("error", null);

  case DELETE_COUNTRY_SUCCESS:
    return state
      .updateIn(["countries"],
        (arr) => arr.filter((val) => val.id !== action.payload))
      .set("loading", false)
      .set("error", null);

  case DELETE_COUNTRY_FAIL:
    return state
      .set("loading", false)
      .set("error", action.payload);

  default:
    return state;
  }
};

// ----------------- ACTIONS ----------------------- //

export const createCountry = (country) => ({
  type   : CREATE_COUNTRY_REQUEST,
  payload: country
});

export const createCountrySuccess = (country) => ({
  type   : CREATE_COUNTRY_SUCCESS,
  payload: country
});

export const createCountryFail = (error) => ({
  type   : CREATE_COUNTRY_FAIL,
  payload: error,
  error  : true
});


export const getCountries = () => ({
  type: GET_COUNTRIES_REQUEST
});

export const getCountriesSuccess = (countries) => ({
  type   : GET_COUNTRIES_SUCCESS,
  payload: countries
});

export const getCountriesFail = (error) => ({
  type   : GET_COUNTRIES_FAIL,
  payload: error,
  error  : true
});


export const deleteCountry = (countryId) => ({
  type   : DELETE_COUNTRY_REQUEST,
  payload: countryId
});

export const deleteCountrySuccess = (countryId) => ({
  type   : DELETE_COUNTRY_SUCCESS,
  payload: countryId
});

export const deleteCountryFail = (error) => ({
  type   : DELETE_COUNTRY_FAIL,
  payload: error,
  error  : true
});


// ----------------------- SAGAS ------------------------ //

function* createCountryRequest(action) {
  yield sendElement(
    COUNTRIES_URL,
    action.payload,
    createCountrySuccess,
    createCountryFail
  );
}

function* getCountriesRequest() {
  yield* getElements(
    COUNTRIES_URL,
    getCountriesSuccess,
    getCountriesFail
  );
}

function* deleteCountryRequest(action) {
  yield deleteElement(
    COUNTRIES_URL,
    action.payload,
    deleteCountrySuccess,
    deleteCountryFail
  );
}

export function* watchCountriesActions() {
  yield takeEvery(CREATE_COUNTRY_REQUEST, createCountryRequest);
  yield takeLatest(GET_COUNTRIES_REQUEST, getCountriesRequest);
  yield takeEvery(DELETE_COUNTRY_REQUEST, deleteCountryRequest);
}

// ------------------ SELECTORS -------------------- //

export const selectCountriesContainer = (state) => state.containers.countries;
export const selectCountriesData = (state) => selectCountriesContainer(state).get("countries");
