# API com NodeJS e MongoDB Atlas

> Para utilizar esse projeto:

-   instale o vscode para utilizar o projeto
-   instale o git para clonar o projeto
-   instale o nodejs lts para usar o back-end
-   instale o insomnia para usar a api
-   faça o clone do projeto pelo meu github
-   dentro da pasta 'src', crie um pasta 'config'
-   dentro da pasta 'config' crie '3 (três) arquivos'
-   PRIMEIRO ARQUIVO: auth.json, este arquivo deve conter tão somente um hash MD5, criado através de um gerador de hash, para tanto utilizamos o site md5hashgenerator.com para gerar o hash (conteúdo do arquivo)

```
{
    "secret": "EXEMPLO-DE-HASH-MD5-AQUI"
}
```

-   SEGUNDO ARQUIVO: mail.json, este arquivo deve conter tão somente as configurações de conexão com o serviço de fake mail, para tanto utilizamos o site mailtrap.io (conteúdo do arquivo). NOTA: para usar o serviço terá que criar uma conta no mailtrap

```
{
    "host": "sandbox.smtp.mailtrap.io",
    "port": 2525,
    "auth": {
        "user": "seu-usuário",
        "pass": "sua-senha"
    }
}
```

-   TERCEIRO ARQUIVO: configdb.js, este arquivo deve conter tão somente as configurações de conexão com o serviço do mongodb atlas (conteúdo do arquivo). NOTA: para usar o serviço terá que criar uma conta no mongodb atlas

```
module.exports = {
    use: 'seu-usuário',
    pwd: 'sua-senha',
    clu: 'seu-cluster-mongodb',
    dbn: 'seu-data-base-name'
}
```

-   DETALHE IMPORTANTE: não estou explicando (nem ensinando aqui) como instalar e nem utilizar: o VSCODE, o GIT, o NODE, o INSOMNIA, o GITHUB, HASH MD5, MAILTRAP e o MONGODB ATLAS, todas essas ferramentas tem tutoriais na internet ... então dá um GOOGLE para aprender
-   depois de criar os arquivos rode o comando abaixo para instalar as dependências do projeto:

```
npm install
```

-   dentro da pasta api-serie-node rode o comando abaixo para iniciar o servidor de back-end e efetuar a conexão com o banco de dados mongodb atlas (nota: o servidor utiliza nodemon e pode ser parado utilizando o atalho de teclado ctrl+c):

```
npm run dev
```

> Bibliotecas utilizadas no projeto

-   npm i express
-   npm i mongoose
-   npm i bcryptjs
-   npm i jsonwebtoken
-   npm i nodemon --save-dev
-   npm i nodemailer
-   npm i nodemailer-express-handlebars

> rotas da api estão em http://localhost:3000/

> ROTA http://localhost:3000/users

-   Está é a rota mais simples de todas, simplesmente ela lista os usuários que estão cadastrados no banco de dados Mongo DB Atlas. Por óbvio ao utilizar a rota a primeira vez a mesma estará vazia e para tanto precisamos usar a próxima rota auth/register, que irá registrar um usuário

> ROTA http://localhost:3000/auth/register

-   Como nossa aplicação não tem front end vamos utilizar o programa insomnia para efetuar um post na rota auth/register e enviar dados de registro do usuário.

-   a rota a ser utilizada será http://localhost:3000/auth/register com método POST e com o conteúdo em JSON conforme abaixo

```
 {
	"name": "seu-nome",
	"email": "seu@email.com",
	"password": "sua-senha"
}
```

-   ao realizar um SEND da informação um novo usuário será cadastrado e então poderemos listar os usuários na rota http://localhost:3000/users

> http://localhost:3000/auth/authenticate

-   Utilizamos para a referida rota com a ferramenta de autenticação JWT - Json Web Token - e como nossa aplicação não tem front end vamos utilizar o programa insomnia para efetuar um post na rota auth/authenticate e enviar dados necessário para identificação do usuário que são e-mail e senha para efetuarmos geração de um web token para o usuário

-   a rota a ser utilizada será http://localhost:3000/auth/authenticate com método POST e com o conteúdo em JSON conforme abaixo. Nota: o email e a senha deve ser os mesma conforme registrados na rota anterior, caso contrário vamos tomar um erro.

```
 {
	"email": "seu@email.com",
	"password": "sua-senha"
}
```

-   ao realizar um SEND a API irá gerar um Json Web Token único que servirá para autenticação futuras do usuário

-   NOTA IMPORTANTE: COMO REGRA DE SEGURANÇA CADA TOKEN GERADO EXPIRA COM 24 HORAS

> http://localhost:3000/auth/forgot_password

-   Utilizamos para a referida rota com a ferramenta crypto do próprio node para geração de um token único com expiração de 1 hora

-   a rota a ser utilizada será http://localhost:3000/auth/forgot_password com método POST e com o conteúdo em JSON conforme abaixo.

{
"email": "seu@email"
}

-   Será informado o envio de email OK e no mailtrap poderemos verificar o recebimento do e-mail com o token para reset de senha

> http://localhost:3000/auth/reset_password

a rota a ser utilizada será http://localhost:3000/auth/reset_password com método POST e com o conteúdo em JSON conforme abaixo.

{
"email": "seu@email",
"token": "token informado no e-mail",
"password" : "sua nova senha"
}

-   Passamos o email o token recebido no email e informamos a nova senha, ao final se tudo certo seremos informados do Reset Password OK

> http://localhost:3000/projects

-   Utilizamos a referida rota para autenticar o usuário para fazer requisições na rota projetos e como nossa aplicação não tem front end vamos utilizar o programa insomnia para efetuar um get na rota /projects passando como única informação um Authorization Bearer no Headers da requisição

```
No Insomnia abra nova rota http://localhost:3000/projects com método GET
Vá em aba Headers e adicione
Authorization >>> como chave >>> Authorization
Bearer "token gerado" >>> como valor >>> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp9.eyJwYXJhbXMiOnsiaWQiOiI2NDNmZmI4MGI5NmJiOWNlNGQ4MTg4YWQifSwiaWF0IjoxNjgyMDAyMDIxLCJleHAiOjE2ODIwODg0MjF9.SunOKgmWLvYt-PKsVwVb7oiZd0ViDxyY0i0W6Qc
Clique em em SEND
Então recebemos OK como True se usuário estiver autenticado na rota projeto além do Id do Usuário e o email do usuário autenticado
```

-   A parte acima demonstramos que o usuário está autenticado para utilizar a rota http://localhost:3000/projects, inclusive retornando o User ID e o email
-   Para tanto vamos utilizamos um middlewares Auth que vai "Intermediar" uma "Autorização por meio da troca de informação entre o id do usuário e o token informado, este está arquivo de intermediação está localizado na pasta middlewares auth.js

> > > UM USUÁRIO PODE CRIAR VÁRIOS PROJECTS E CADA PROJECTS PODERÁ TER VÁRIAS TASKS
