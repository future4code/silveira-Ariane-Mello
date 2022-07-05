
import app from './controller/app';
import { userController } from './controller/userController';

const UserController = new userController()

app.post('/signup', UserController.signup)
app.post('/login', UserController.login)


