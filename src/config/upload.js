const multer = require('multer')
const path = require('path')


module.exports = {
    storage: multer.diskStorage({
        //Metodo converte o path para padrao windows ou Linux
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // Requisicao, arquivo e Callback
        filename: (req, file, cb) => {
            // Error e o nome que sera colocado em cada arquivo
            // FiledName -> 

            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)
            cb(null, `${name}-${Date.now()}${ext}`)
        } 
    })
}