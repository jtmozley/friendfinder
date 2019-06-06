const friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    const userScores = req.body;

    let bestMatchIndex = 0;
    let bestMatchVal = 1000;
    let totalDiff = 0;
    let currentDiff = 0;

    for (let i = 0; i < friends.length; i++) {
      currentDiff = 0;
      totalDiff = 0;
      for (let j = 0; j < friends[i].scores.length; j++) {
        currentDiff =
          parseInt(userScores.scores[j]) - parseInt(friends[i].scores[j]);
        if (currentDiff < 0) {
          currentDiff = currentDiff * -1;
        }
        totalDiff += currentDiff;
      }
      if (totalDiff < bestMatchVal) {
        bestMatchIndex = i;
        bestMatchVal = totalDiff;
      }
    }
    friends.push(userScores);

    res.json(friends[bestMatchIndex]);
  });
};
