module.exports = {
  authenticatedOnly: (req, res, next) => {
    // if session is valid, go to the next stage
    if (req?.session?.currentUser) {
      next();
      return;
    }
    res.redirect("/authenticated/login");
  },
};
