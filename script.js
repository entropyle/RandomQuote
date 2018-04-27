"use strict";

const quoteButton = document.body.querySelector("#btn-quote");
const quoteTweet = document.body.querySelector("#btn-tweet");
const quoteOutput = document.body.querySelector("#quote");
const authorOutput = document.body.querySelector("#author");

const urlTwitter = "https://www.twitter.com/intent/tweet/?text=";
const urlQuote = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
const author = "- Ron Swanson";

function updateAuthor() {
  authorOutput.innerHTML = author;
}

function updateQuote() {
  fetch(urlQuote)
    .then(resp => resp.json())
    .then(function(data) {
      quoteOutput.innerHTML = `"${data[0]}"`;
      quoteTweet.href =
        `${urlTwitter}` + encodeURIComponent(`"${data[0]}" ${author}`);
    });
}

quoteButton.onclick = updateQuote;

updateQuote();
updateAuthor();
