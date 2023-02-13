import jsonwebtoken from "jsonwebtoken";

export const generateToken = (id) => {
  const token = jsonwebtoken.sign(id.toJSON(), process.env.PRIVATE_KEY);
  // //console.log("Your Token is :- " + token);
  return token;
};

export const authoriceToken = (req, res, next) => {
  const authHeader = req.headers["authorizaton"];
  // //console.log(req)
  // //console.log(authHeader)
  // const token = authHeader && authHeader.split(" ")[1];
  // if (token == null) {
  //   res.status(403).json("person is unauthorized");
  // }
  jsonwebtoken.verify(authHeader, process.env.PRIVATE_KEY, (error, User) => {
    if (error) {
      res.status(403).json("you are not authorized");
    } else {
      req.User = User;
      next();
    }
  });
};
