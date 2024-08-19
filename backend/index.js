const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const SECRET_KEY = "mahesh";
const { typeSchema } = require('./type');  

app.use(express.json());

app.post('/signup', (req, res) => {
    const data =typeSchema.safeParse(req.body);
    if(!data.success) {
        res.status(404).json({
            message:"Invalid input"
        })
    }
    else{
        const token=jwt.sign(data,SECRET_KEY);
        res.status(200).json({token});
    }
});

function authorization(req,res,next) {
        const token = req.headers['authorization']?.split(' ')[0];
        if(!token) {
            res.status(404).json({message:"Please signup"})
        }
        try{
            jwt.verify(token,SECRET_KEY,(err,decoded)=>{
                if(err) {
                    return res.status(401).json({ message: 'Invalid token' });
                }
                req.user=decoded;
                next();
            });
            
        }catch(error) {
            res.status(500).json({"error":error})
        }
        
}

app.get('/signin', authorization,(req, res) => {
    // now user now signin 
    res.status(200).json({
        username: req.user.data.username,
        password: req.user.data.password 
    });
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});
