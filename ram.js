// Authorization token
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3bXZlciI6Miwid21pZGZtdCI6ImFzY2lpIiwid21pZHR5cCI6MSwid21rZXl2ZXIiOjEsIndtaWRsZW4iOjUxMiwid21pZCI6IlpHRm1aV00yTmpndFptVTJOUzAwWkRkaUxXRmxPVGN0TXpOaE5EWTRaVE5qT0RBeiIsIndtb3BpZCI6MzIsImV4cCI6MTczMjk1MzE3NSwiaWF0IjoxNzMyMzQ5MTc1fQ.qFZPZuFarIMaYHYkTQ44NaiiMomFTaJ8-yHTGz5FLH4';

// Allowed domain
const allowedDomain = "finallystream.pages.dev";

// Get the current domain
const currentDomain = window.location.hostname.toLowerCase();

// Check if the current domain matches the allowed domain
if (currentDomain !== allowedDomain.toLowerCase()) {
  // Redirect to the specified URL if the domain is not allowed
  window.location.href = "https://telegram.me/FinallyLiveOwner";
}
