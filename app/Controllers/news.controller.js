
const fetch = require("node-fetch");



exports.search = (req, res) => {
    var keyWord = "";
    var count = 1000;
    var mkt = "en-US";
    var safeSearch = "strict";

    console.log("mkt = " + req.body.mkt);

    if (req.body.key != undefined && req.body.key != "") {
        keyWord = req.body.key;
    }
    if (req.body.mkt != undefined && req.body.mkt != "") {
        if (req.body.mkt == "en") {
            mkt = "en-US";
        } else if (req.body.mkt == "ch") {
            mkt = "zh-CN";
        } else {
            mkt = "en-US";
        }
    }

    keyWord = keyWord + "";
    keyWord = keyWord.replace(",", " ");

    console.log(keyWord);

    console.log(keyWord + " and " + mkt);

    const urlval =
        'https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=' +
        keyWord +
        '&count=' +
        count +
        "&mkt=" +
        mkt +
        "&safeSearch=" +
        safeSearch;
    fetch(urlval, {
        method: "GET",
        headers: { "Ocp-Apim-Subscription-Key": "fbd73627143043a9858f3f2e2104673b" }
    })
        .then(res => res.json())
        .then(json => res.status(200).send(json));
};







