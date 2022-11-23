# Produtos e Categorias

#Resumo

Esta aplicação consiste em criar categorias e produtos, relacionando as duas models em um relacionamento 1:n (um para muitos), aonde essas informações serão
persistidas dentro de um banco (PostgreSQL).

#Tecnologias utilizadas

Node.js
Express.js
Yarn
PostgreSQL
DOTENV
Docker



Para iniciar este projeto é necessário fazer o clone da aplicação em seu terminal.

````
git clone git@github.com:anjosdelacerda/produtos-e-categorias.git
````

Para que a aplicação funcione é necessário instalar as tecnologias utilizadas na mesma. Digite yarn no terminal dentro da pasta clonada.

````
yarn
````

**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````
Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````

**Atenção:** É necessário criar uma arquivo chamado .env dentro da pasta do projeto e colocar as suas credenciais nela, use o arquivo .env.example como
parâmetro. Para isso você terá que ter o PostgreSQL instalado em sua máquina, caso tenha dúvidas você poderá consultar a documentação <a href="https://www.postgresql.org/docs/current/tutorial-start.html">aqui</a>.

**Atenção:** A aplicação roda a partir do **Docker**, você precisará ter o Docker baixado em sua máquina para poder acessar o localhost da aplicação,
em caso de dúvidas você poderá consultar a documentação <a href="https://docs.docker.com/desktop/install/linux-install/">aqui</a>.

Após a instalação do Docker você precisa subir as images da aplicação, digite em seu terminal:

````
docker-compose up --build
````

E pronto, a sua aplicação deverá estar rodando agora!

Dentro da pasta você encontrará um arquivo chamado **workspace.json** aonde está a data com as rotas para serem testadas e os formatos de requests que a 
API espera.

