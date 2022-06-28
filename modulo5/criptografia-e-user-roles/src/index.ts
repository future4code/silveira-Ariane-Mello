import { HashManager } from './services/HashManager'
import app from "./app";
import { UserController } from "./endpoints/UserController";

const userController = new UserController()

app.get("/user/profile", userController.getUserProfile)
app.post("/user/signup", userController.createUser)
app.post('/user/login', userController.login)

// const passwordCriptografada = new HashManager().createHash('teste');
// console.log(passwordCriptografada);

//$2a$12$R/YI82u1pxMMTAnUpMGJUuXGy0dKm81CO2yHDiAH2SVDxwFQwvFo6

// const compare = new HashManager().compareHash('exercicio', passwordCriptografada);
// console.log(compare);

