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
<br/>

# FRONTEND

## Instalação de pacotes iniciais 
Entre na pasta */client* e execute:
````
yarn install
````

## Configuração do ambiente
Atualmente não é necessário nenhuma configuração. Subi o env apenas com a URL da API do Backend. Apenas não trocar a porta.

## Iniciar o projeto
Agora inicie o projeto
````
yarn dev
````

**NÃO SE ESQUEÇA DE ESTAR COM A API EM EXECUÇÃO, CASO CONTRÁRIO NÃO IRÁ FUNCIONAR**

# Considerações finais

- O projeto foi bem divertido de ser feito, fortaleci vários conceitos principalmente no Backend, que é onde tenho mais dificuldade;
- Todas as dificuldades foram superadas e consegui desenvolver o projeto;
- Na parte do backend eu deveria ter dividido as migrations para cada entidade para facilitar o rollback caso houvessem erros;
- Na parte do backend eu deveria ter commitado mais frequentemente;
- Devido a demandas da semana, iniciei o projeto no dia 19, assim não podendo fazer as coisas listadas acima devido ao tempo;
  <br/> </br>

  **OBRIGADO PELO SEU TEMPO!!**


