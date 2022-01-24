const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SCREATE = "Teamexitc0de";


//Route1:-Create a user using POST: "/api/auth". Doesn't require Auth
router.post('/createuser',[
    body('email',"Enter Valid Email").isEmail(),
    body('name','Enter name atleast 3 character').isLength({ min: 3 }),
    body('password','minimum length of password is 5').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success,error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass, 
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SCREATE);
        success = true;
        res.json({success,authToken})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error") 
    }
})


//Route2:-Authenticate a user using POST: "/api/auth". Doesn't require Login
router.post('/login',[
    body('email','Enter valid Email').isEmail(),
    body('password','Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;

    try {

        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({success,error:"Invalid Credentials!! Try to login with correct Credentials"});
        }

        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({success,error:"Invalid Credentials!! Try to login with correct Credentials"});
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SCREATE);
        success = true;
        res.json({success,authToken})


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error") 
    }

})

//Route3:-Authenticate a user using POST: "/api/auth". Doesn't require Login

module.exports = router;