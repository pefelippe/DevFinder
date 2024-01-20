![Captura de Tela](./assets/screenshot.png)

### Desafio

O desafio técnico consiste em criar uma página web que permita a consulta de usuários do Github a partir do nome de usuário. Para isso, será necessário utilizar o serviço REST que o GitHub disponibiliza.

Além disso, será necessário construir um ranking de popularidade dos usuários, que será baseado em quantidade de seguidores e quantidade de repositórios que cada usuário possui.

### Como executar

#### Usando Docker Compose

O docker compose utiliza o dockerfile padrao. Ele irá buildar o projeto e servir na porta 8080.

```
  docker-compose up
```

#### Buildando diretamente via docker

Voce tambem pode buildar diretamente as imagems. Existem dois dockerfiles. Caso queria rodar o projeto em dev mode, especifique o dockerfile.dev:

```
  docker build -f Dockerfile.dev -t <nome-do-projeto> .
  docker run -p 3000:3000 <nome-do-projeto>
```

### Requisitos

Com base no login do usuário devemos construir uma aplicação para consultar e apresentar:

- Nome do usuário
- E-mail
- Localização
- Ranking de popularidade

O ranking de popularidade deve se comportar com base nas seguintes regras:

- Usuários que não possuem repositórios públicos e seguidores não pontuam no ranking.
- Usuários com 1-2 seguidores e 1 ou mais repositórios públicos recebem 1 estrela.
- Usuários com 3-4 seguidores e 3 ou mais repositórios públicos recebem 2 estrelas.
- Usuários com 5-6 seguidores e 5 ou mais repositórios públicos recebem 3 estrelas.
- Usuários com 7-9 seguidores e 7 ou mais repositórios públicos recebem 4 estrelas.
- Usuários com 10 ou mais seguidores e 8 ou mais repositórios públicos recebem 5 estrelas.
- Usuários que não se encaixam em nenhuma das categorias definidas nas regras recebem uma pontuação padrão de 0,5 estrelas.

### Requisitos Técnicos

Recomendações

- Defina e utilize padrões de projeto para estruturação de uma arquitetura de código limpo e organizado.
  Itens obrigatórios
- Utilize a biblioteca react para construção da aplicação
- Utilize Typescript
- Testes unitários com react-testing-library
- Testes de componente com a biblioteca cypress
- Integração com APIs REST e protocolo HTTP
- README.md do projeto com as informações essenciais para a execução da aplicação
- Código do desafio técnico versionado em sua conta pessoal do Github (o repositório deve ser público).
  Itens desejáveis
- Implemente mais camadas da pirâmide de testes (caso julgue necessário)
- Crie uma imagem docker da aplicação.
- Crie um pipeline de Build & Tests com GitHub Actions

Fique a vontade para definir:

- Frameworks de design e estilização de interfaces de usuário para desenvolvimento web.
- Validações de erros, dados não encontrados, loadings etc.
- Cache
- Outros pontos que julgar necessário

### Material de Apoio

Github REST API

- Overview: https://docs.github.com/en/rest?apiVersion=2022-11-28
- User endpoint: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
