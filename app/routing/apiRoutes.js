const friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    const userScores = req.body.scores;

    for(let i = 0; i < friends.length; i++){
        for(let j =0; j < friends[i].scores.length; j++){
            console.log(j)
        }
    }
  });
};
