const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.header("x-auth-token");
    if(!token){
        return res.status(401).send("Token mavjud emas")
    }
    
    try{
        const decoded = await jwt.verify(token, 'tillo');
        res.user = decoded;
        next();
    }catch(err){
        return res.status(400).send("Token yaroqli emas");
    }
}