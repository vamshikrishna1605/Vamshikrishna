const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieparser = require("cookie-parser");


const app = express();
app.use(helmet());


app.use(cookieparser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("view engine", "ejs");


app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  
  let username = req.cookies.username;

  
  return res.render("home", {
    username,
  });
});

app.get("/login", (req, res) => {
  
  let bad_auth = req.query.msg ? true : false;


  if (bad_auth) {
    return res.render("login", {
      error: "Invalid username or password",
    });
  } else {
    
    return res.render("login");
  }});

  app.get("/welcome", (req, res) => {
    
    let username = req.cookies.username;
    return res.render("welcome", {
      username,
    });
  });
  
  app.post("/process_login", (req, res) => {

    let { username, password } = req.body
    let userdetails = {
      username: "vamshii",
      password: "123456",
    };
  

    if (
      username === userdetails["username"] &&
      password === userdetails["password"]
    ) {
      // saving the data to the cookies
      res.cookie("username", username);
      // redirect
      return res.redirect("/welcome");
    } else {
      // redirect with a fail msg
      return res.redirect("/login?msg=fail");
    }
  });
  
  app.get("/logout", (req, res) => {
    
    res.clearCookie("username");
    
    return res.redirect("/login");
  });
  
  app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
  
  