const userRouter = require('express').Router();
const {signupUser,
     loginUser,
     loginForm,
     signupForm,
      homePage,
       logoutUser,
       displayUpdatePasswordEmail,
       submitEmailForPasswordUpdate,
       getUpdatePassword,
       postUpdatedPassword
     } = require('../controller/userController');
const {verifyUser} = require('../middleware/authUser');

//SIGN UP A USER
userRouter.post('/signup-user', signupUser);

userRouter.post('/login-user', loginUser);

userRouter.get('/login-user', loginForm);

userRouter.get('/signup-user', signupForm);

userRouter.get('/home', verifyUser,  homePage);

userRouter.get('/logout-user', logoutUser);

userRouter.get('/submit-email', displayUpdatePasswordEmail);

userRouter.post('/submitted', submitEmailForPasswordUpdate);

userRouter.get('/update-password/:id/:token', getUpdatePassword);

userRouter.put('/update-password/:id/:token', postUpdatedPassword);



module.exports = userRouter;