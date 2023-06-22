module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        { title: "Morning Devotion" },
        { title: "Build some API's" },
        { title: "Bake some pies"}
      ]);
    }
  };
};