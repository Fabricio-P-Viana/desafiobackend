const whiteList = [
    'http://localhost:3333',
    'http://localhost:3000'
];

const corsOptions = {
    origin: function (origin, callback) {
      if(whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
};

module.exports = corsOptions;