module.exports = {
  authenticatedOnly: (req, res, next) => {
    // if session is valid, go to the next stage
    if (req?.session?.currentUser) {
      next();
      return;
    }
    res.redirect("/authenticated/login");
  },
  setGlobalUserVariableMiddleware: (req, res, next) => {
    res.locals.authUser = req?.session?.currentUser;
    console.log("currentUser in middleware: ", req?.session?.currentUser);
    console.log("authUser in middleware: ", res?.locals?.authUser);
    console.log("authUser Photo in middleware: ", res?.locals?.authUser?.profile_photos_url);
    next();
  },
};
