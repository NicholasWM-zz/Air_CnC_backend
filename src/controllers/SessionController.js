// index, show, store, update, destroy

// index -> Listagem
// store -> Listagem de um
// update -> Criar
// destroy -> ...

const User = require('../models/User')

module.exports = {
    async store(req, res){
        const {email} = req.body;

        let user = await User.findOne({ email })
        user = !user ? await User.create({ email }): user

        return res.json(user)
    }
}