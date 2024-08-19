const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const SECRET_KEY = "mahesh";
const { typeSchema } = require('./type');  

const cors = require('cors');

app.use(express.json());
app.use(cors())
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
    const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded; // Store decoded user information
    next();
  });
}

app.get('/signin', authorization,(req, res) => {
    res.status(200).json({
        username: req.user.data.username,
        password: req.user.data.password 
    });
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});
