# My Care Force Application

# BACKEND

Para rodar a aplicação, vamos começar criando o container do Docker para facilitar o desenvolvimento local com o PostgreSQL.
É importante que você já tenha o docker instalado no computador.

## Iniciar o container Docker do PostgreSQL
````
docker run --name my-care-force-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
````

## Acessar o container e criar a base de dados
````
docker exec -it my-care-force-postgres psql -U admin
````
````
CREATE DATABASE my_care_force;
````
````
\q
````

## Clonar o repositório
````
git clone https://github.com/ItaloCovas/my-care-force-app
````
````
cd my-care-force-app
````

## Instalar dependências
````
cd server
````
````
yarn install
````

## Configurar variáveis de ambiente
Crie e edite o arquivo .env na raíz do seu projeto (dentro da pasta server). <br/>
Os exemplos das variáveis que você precisa estão no .env.example <br/> <br/>
**A chave *DATABASE_URL* deve ser colocada do seguinte modo =>** postgresql://admin:root@localhost:5432/my_care_force?schema=public  <br/> <br/>
**A chave *JWT_SECRET* pode ser aleatória, mas recomendo que coloque algo não relacionado a nada do projeto, como um hash gerado aleatoriamente.** <br/>

## Gerar cliente do Prisma
````
npx prisma generate
````

## Executar as migrations
````
npx prisma migrate deploy
````

## Rodar o script de seed (popular banco de dados)
````
yarn seed
````

## Iniciar o servidor
````
yarn start
````

## Informações adicionais
- Você pode acessar a pasta */files* na raíz do projeto para buscar 
- Você pode ver o seu login no arquivo *seed.service.ts*, no diretório */server/src/modules/seed*.

# FRONTEND

## Instalação de pacotes iniciais 
- Entre na pasta */client* e execute:
````
yarn install
````


