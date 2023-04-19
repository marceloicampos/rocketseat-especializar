# API com NodeJS e MongoDB Atlas

> Para utilizar esse projeto:

-   instale o vscode para usar o projeto
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
-   npm i nodemon -g
-   npm i nodemailer
-   npm i nodemailer-express-handlebars

> rotas da api estão em http://localhost:3000/
