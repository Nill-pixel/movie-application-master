## <h3 align="center">Gerenciador de Filmes</h3>

<p align="center">Aplicação para gerenciamento de filmes com suporte para envio de logs para um serviço central.</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Authors](#authors)

## 🧐 About <a name="about"></a>

O Gerenciador de Filmes é uma aplicação para catalogar, buscar e gerenciar filmes. A aplicação possui um sistema de envio de logs que transmite informações sobre eventos e erros para um serviço central para monitoramento e análise.

A arquitetura do projeto é dividida em dois repositórios principais:

1. **[movie-application-master](https://github.com/Nill-pixel/movie-application-master.git)**: Contém a implementação da aplicação de gerenciamento de filmes e a funcionalidade de envio de logs.
2. **[Logs](https://github.com/Nill-pixel/Logs.git)**: O repositório que coleta, armazena e analisa os logs enviados pela aplicação de gerenciamento de filmes, gerando insights e alertas em tempo real.

## 🏁 Getting Started <a name="getting_started"></a>

Estas instruções vão ajudá-lo a configurar o projeto em sua máquina local para desenvolvimento e testes.

### Prerequisites

Certifique-se de ter o Node.js e o npm instalados. Você pode baixar o Node.js [aqui](https://nodejs.org/).

### Installing

1. Clone o repositório da aplicação de gerenciamento de filmes:

   ```bash
   git clone https://github.com/Nill-pixel/movie-application-master.git
   cd movie-application-master
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o endpoint de API para enviar logs para o serviço central de logs (repositório `Logs`).

4. Inicie o JSON Server para simular a API de dados dos filmes:

   ```bash
   npx json-server data/movies.json
   ```

5. Inicie a aplicação:

   ```bash
   npm start
   ```

### Configurando o Serviço de Logs

Clone o repositório de logs:

1. Clone o repositório:

   ```bash
   git clone https://github.com/Nill-pixel/Logs.git
   cd Logs
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados e outras variáveis de ambiente conforme necessário.

4. Inicie o servidor de logs em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

## 🔧 Running the tests <a name="tests"></a>

Este projeto inclui alguns testes automatizados. Para executá-los:

```bash
npx mocha ./test/*.spec.js
```

Certifique-se de testar manualmente as funcionalidades principais após a instalação.

## 🎈 Usage <a name="usage"></a>

Para usar o sistema de gerenciamento de filmes com o envio de logs:

1. Utilize a aplicação de gerenciamento de filmes para catalogar e gerenciar filmes.
2. A aplicação enviará automaticamente logs para o serviço central de logs.
3. Conecte-se ao WebSocket do serviço de logs para receber atualizações em tempo real.
4. Utilize a API do serviço de logs para consultar logs e estatísticas.

## 🚀 Deployment <a name="deployment"></a>

Para implantar a aplicação e o sistema de logs em um ambiente de produção:

1. Configure o banco de dados e outras variáveis de ambiente no servidor de produção.
2. Compile o projeto, se necessário, e inicie a aplicação:

   ```bash
   npm start
   ```

## ⛏️ Built Using <a name="built_using"></a>

- [Express](https://expressjs.com/) - Framework de servidor
- [Axios](https://axios-http.com/) - Cliente HTTP
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - Documentação da API
- [Mocha](https://mochajs.org/) - Framework de testes
- [Chai](https://www.chaijs.com/) - Assertiva para testes
- [Supertest](https://github.com/visionmedia/supertest) - Testes de APIs
- [JSON Server](https://github.com/typicode/json-server) - Simulação de API REST

## ✍️ Authors <a name="authors"></a>

- [Nilvany Sunguessungue](https://github.com/Nill-pixel) - Desenvolvimento e manutenção
