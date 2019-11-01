const Users = require('./auth.controller');
module.exports = (router) => {
    router.post('/register', User.createUser);
    router.post('/login', User.loginUser);
}