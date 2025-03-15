export const adminMiddleware = (req, res, next) => {
  try {
    const admin = req.user.isAdmin
    // console.log(admin);
    if(!admin){
      return  res.status(404).json({msg:"Access denied , user is not a admin"})
    }
    // res.json({ msg: admin});
    next()
  } catch (error) {
    next(error);
  }
};
