import {fromJS} from "immutable";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios/index";
import {ACCESS_TOKEN_NAME, API_URL, CLIENT_ID, CLIENT_SECRET} from "../settings";
import {getCookies, removeCookies, setCookies} from "../utils/cookies";
import {showSuccess} from "../utils/notificator";
import {navigateTo} from "../utils/navigator";


// ---------------------- CONSTANTS ----------------------- //




// --------------------- INITIAL STATE --------------------- //




// ----------------------- REDUCER ------------------------ //




// ----------------- ACTIONS ----------------------- //



// ----------------------- SAGAS ------------------------ //



// ------------------ SELECTORS -------------------- //

