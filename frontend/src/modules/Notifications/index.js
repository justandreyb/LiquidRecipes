import {takeEvery} from "redux-saga/effects";
import toastr from "toastr";

/*
import {Spinner} from "spin.js";

let spinnerOptions = {
  lines    : 13, // The number of lines to draw
  length   : 38, // The length of each line
  width    : 17, // The line thickness
  radius   : 45, // The radius of the inner circle
  scale    : 1, // Scales overall size of the spinner
  corners  : 1, // Corner roundness (0..1)
  color    : "#ffffff", // CSS color or array of colors
  fadeColor: "transparent", // CSS color or array of colors
  opacity  : 0.25, // Opacity of the lines
  rotate   : 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  speed    : 1, // Rounds per second
  trail    : 60, // Afterglow percentage
  fps      : 20, // Frames per second when using setTimeout() as a fallback in IE 9
  zIndex   : 2e9, // The z-index (defaults to 2000000000)
  className: "spinner", // The CSS class to assign to the spinner
  top      : "50%", // Top position relative to parent
  left     : "50%", // Left position relative to parent
  position : "absolute" // Element positioning
};
*/

let toastrOptions = {
  timeOut: 5000
};

export function* showFail(action) {
  yield* toastr.error(action.payload, "Something went wrong..", toastrOptions);
}


export function* showSuccess(data) {
  yield* toastr.success(data, "Success !", toastrOptions);
}

/*
function* showWarning(action) {
  yield* toastr.warning(action.payload, "Warning !", toastrOptions);
}

let spinner;
let target = document.getElementById("spinner");

function* showSpinner() {
  if (!spinner) new Spinner(spinnerOptions);

  yield* spinner.spin(target);
}

function* stopSpinner() {
  if (!spinner) new Spinner(spinnerOptions);

  yield* spinner.stop();
}

function* watchSpinnerActions() {
  yield takeEvery((action) => action.type.includes("REQUEST"), showSpinner);
  yield takeEvery((action) => action.type.includes("SUCCESS"), stopSpinner);
  yield takeEvery((action) => action.type.includes("FAIL"), stopSpinner);
}
*/

export function* watchNotificationsActions() {
  yield takeEvery((action) => action.type.includes("FAIL"), showFail);
}
