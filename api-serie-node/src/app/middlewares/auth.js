const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')
// acima estamos chamando a dependência jwt e a chave de autenticação auth.json

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    // acima estamos buscando o headers de autorização (dentro desse header deve conter o token atribuído ao usuário)
    if (!authHeader) return res.status(401).send({ error: 'No Token Provided' })
    // se o token não foi informado responda com status 401 e mensagem 'token nao informado'
    const parts = authHeader.split(' ')
    // estamos dividindo o token em 2 partes (Bearer de um lado e token do outro lado)
    if (!parts.length === 2) return res.status(401).send({ error: 'Token Error' })
    // se o token não estiver divido em 2 partes (Bearer + numeração do token) responda com status 401 e mensagem 'erro de token'
    const [scheme, token] = parts
    // usando desestruturação da arrays coletamos Bearer e o token
    if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Bad Formatted Token ' })
    // regex >>> / começo da regex, ^ início da verificação, Bearer é a expressão a ser localizada, $ é o final da localização, / para terminar a REGEX
    // regex >>> i para indicar que a regex é insensitive, passando ao final o test sobre o scheme
    // se o scheme não contiver a expressão Bearer responda com status 401 e mensagem 'token mal formatado'
    jwt.verify(token, authConfig.secret, (error, decoded) => {
        // verificação de token com jwt, capturando o token, expondo o secret hash, passando parâmetros de error e decoded que
        if (error) return res.status(401).send({ error: 'Invalid Token' })
        // se tiver erro esponda com status 401 e mensagem 'token invalido'
        req.userId = decoded.params.id
        // ao final incluímos no req userId recebimento dos parâmetros de id único do usuário
        return next()
        // o método next() indica que o usuário está pronto para ir para o próximo controller que no casso é o projectController
    })
}
