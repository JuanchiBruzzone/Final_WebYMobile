const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users.model');

router.post('/register', async (req: any, res: any) => {
try{
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    const user = await User.create(req.body);
    res.json(user);
}
catch(error: any){
    res.json({error: error.message});
}
});

router.post('/login', async (req: any, res: any) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
        return res.json({error: 'Usuario no encontrado'});
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
        return res.json({error: 'Contraseña incorrecta'});
    }

    res.json({message: 'Usuario logueado correctamente',
    token: creartoken(user)
    });
});

function creartoken(user: any) {
    const payload = {
        user_username: user._username,
    }
    return jwt.sign(payload, 'Vamo el Manya!', {expiresIn: '1h'});

}


module.exports = router;
