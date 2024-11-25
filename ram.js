// auth.js
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3bXZlciI6Miwid21pZGZtdCI6ImFzY2lpIiwid21pZHR5cCI6MSwid21rZXl2ZXIiOjEsIndtaWRsZW4iOjUxMiwid21pZCI6IlpESmtNVEJtWm1NdE5USTFNUzAwT1dNNUxUZzVaVFV0WWprME1XTXdNbUptT1RJdyIsIndtb3BpZCI6MzIsImV4cCI6MTczMjg4MjQ3MiwiaWF0IjoxNzMyMjc4NDcyfQ.By34a5TxsLnGhX5vwecexvRVRV-Ms-5SvgEAzRM6J0Q';

// Allowed domain
var allowedDomain = "finallystream.pages.dev";

// Check current domain
var currentDomain = window.location.hostname;

// Redirect if the current domain doesn't match the allowed domain
if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/FinallyLiveOwner"; // Redirect to your preferred URL
}
