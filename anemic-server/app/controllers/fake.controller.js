function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

exports.nationalRegistry = (req, res) => {
  setTimeout(() => {
    res.send({ isValid:  getRandomInt(10)  > 3 });
  }, 2000);
};

exports.judicialRecord = (req, res) => {
  setTimeout(() => {
    res.send({ isValid: getRandomInt(10)  > 3  });
  }, 2000);
};

exports.score = (req, res) => {
  setTimeout(() => {
    res.send({ score: getRandomInt(100) });
  }, 3000);
};
