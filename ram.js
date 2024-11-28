// auth.js
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3bXZlciI6Miwid21pZGZtdCI6ImFzY2lpIiwid21pZHR5cCI6MSwid21rZXl2ZXIiOjEsIndtaWRsZW4iOjUxMiwid21pZCI6IlpHRm1aV00yTmpndFptVTJOUzAwWkRkaUxXRmxPVGN0TXpOaE5EWTRaVE5qT0RBeiIsIndtb3BpZCI6MzIsImV4cCI6MTczMjk1MzE3NSwiaWF0IjoxNzMyMzQ5MTc1fQ.qFZPZuFarIMaYHYkTQ44NaiiMomFTaJ8-yHTGz5FLH4';
// Allowed domain
var allowedDomain = "finallystream.pages.dev";

// Check current domain
var currentDomain = window.location.hostname;

// Redirect if the current domain doesn't match the allowed domain
if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/FinallyLiveOwner"; // Redirect to your preferred URL
}
