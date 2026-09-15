/*
 * Minimal SCORM 1.2 API wrapper.
 * Locates the SCORM API in the current window, its parents, or its opener
 * chain, and exposes small helper functions used by index.html.
 * Based on the standard ADL / Rustici "find API" pattern.
 */
var g_scormAPI = null;
var g_scormFindAttempts = 0;
var g_scormFindAttemptLimit = 500;

function ScormFindAPI(win) {
  var attempts = 0;
  while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
    attempts++;
    if (attempts > g_scormFindAttemptLimit) { return null; }
    win = win.parent;
  }
  return win.API;
}

function ScormGetAPI() {
  var theAPI = null;
  if (window.parent != null && window.parent != window) {
    theAPI = ScormFindAPI(window.parent);
  }
  if ((theAPI == null) && (window.opener != null)) {
    theAPI = ScormFindAPI(window.opener);
  }
  return theAPI;
}

function ScormProcessInitialize() {
  g_scormAPI = ScormGetAPI();
  if (g_scormAPI == null) {
    return false;
  }
  var result = g_scormAPI.LMSInitialize("");
  return (result.toString() === "true" || result === true);
}

function ScormProcessGetValue(name, debug) {
  if (g_scormAPI == null) { return ""; }
  var value = g_scormAPI.LMSGetValue(name);
  return value;
}

function ScormProcessSetValue(name, value) {
  if (g_scormAPI == null) { return false; }
  var result = g_scormAPI.LMSSetValue(name, value);
  return (result.toString() === "true" || result === true);
}

function ScormProcessCommit() {
  if (g_scormAPI == null) { return false; }
  var result = g_scormAPI.LMSCommit("");
  return (result.toString() === "true" || result === true);
}

function ScormProcessFinish() {
  if (g_scormAPI == null) { return false; }
  var result = g_scormAPI.LMSFinish("");
  return (result.toString() === "true" || result === true);
}
