const jwt = require('jsonwebtoken');
const {CatchErrorFunc} = require('../utils/CatchErrorFunc')


const getCurrentAdmin = CatchErrorFunc(async (req, res) => {
    const adminToken = req.cookies.adminToken
    const verifiedToken = await jwt.verify(adminToken, process.env.JWT_SECRET);
    return verifiedToken.id

})
    


module.exports = {getCurrentAdmin};

