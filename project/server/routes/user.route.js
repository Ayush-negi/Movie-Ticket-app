const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.model.js')

// sign up route
userRouter.post('/register', async (req, res) =>{
    // check if the user already exists
    // password must be  8 characters long
    // if all good register the user and return the user data as response

    try{
        const userExists = await User.findOne({email: req.body.email});
        if(userExists){

            res.send({
                sucess: false,
                messaege: "User already exists"
            })
        }

        const newUser = await User(req.body);
        await newUser.save();

        res.send({
            sucess: true,
            message: "User registered successfully",
            user: newUser
        })


    }
    catch(error){
        res.status(500).json({message: "Internal server error"})

    }
})

module.exports = userRouter;