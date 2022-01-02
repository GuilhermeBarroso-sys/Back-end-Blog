# Sobre o projeto

Backend do projeto que se encontra aqui: https://github.com/GuilhermeBarroso-sys/blog-front 

# Principais Tecnologias utilizadas
- Javascript
- Typescript
- Mysql
- Prisma

# Como executar o projeto

```bash
# O servidor precisa de um banco de dados mysql, o primeiro passo é cria-lo com o nome "blog".
# Caso utilize Linux ou Mac e tenha o mysql, basta abrir o terminal e digitar:
mysql -u root -p
create database blog;

# Clonar repositório
git clone https://github.com/GuilhermeBarroso-sys/Back-end-Blog.git

# Entrar na pasta do projeto
cd Back-end-Blog/

# Baixar dependências
yarn
```
## Configurar .env
```bash
# Renomeie o Arquivo .env.example para .env
# Digite no terminal caso seja Linux ou Mac:
# mv .env.example .env

# O .env possui uma variavel de ambiente chamada DATABASE_URL onde vamos configurar o banco de dados com o seguinte formato:
# mysql://SeuUsuario:SuaSenha@localhost:3306/blog
```
## Iniciando migrations
```bash
# Sincronize o prisma com o .env:
yarn prisma generate
# Inicie as migrations:
yarn prisma migrate dev
```
## Iniciando o Projeto configurado:
```bash
# Agora que o backend está configurado, basta digitar:
yarn dev
```

# Autor

Guilherme Barroso de Oliveira
https://www.linkedin.com/in/guilherme-barroso-931147175/

