# Projeto de API para uma Livraria com MVC, Helpers e Autenticação

## Descrição do Sistema
Este projeto consiste em uma API RESTful destinada ao gerenciamento de usuários e livros. A API é desenvolvida utilizando Node.js e Express, com PostgreSQL como sistema de banco de dados.
### A aplicação adota a arquitetura MVC (Model-View-Controller), onde:
- Controllers: Responsáveis por processar as requisições HTTP.
-Models: Representam a estrutura e o formato dos dados.
- Views: Não são necessárias, uma vez que se trata de uma API.
- Services: Contêm a lógica de negócios da aplicação.
- Helpers: Fornecem funções auxiliares, como validação de dados e criptografia de senhas.
## Requisitos Funcionais
- A utenticação de Usuário:
- Registro de novos usuários.
- Login para usuários existentes com verificação de senha.

### Gerenciamento de Livros:
Cadastro de livros, incluindo título, autor e preço.
Consulta para exibir todos os livros cadastrados.
### Gerenciamento de Usuários:
Consulta para listar todos os usuários registrados.
Criação de novos usuários com validação dos dados fornecidos.

## Requisitos Não Funcionais 

### Desempenho:
O sistema deve fornecer respostas rápidas e eficientes, mesmo sob múltiplas requisições simultâneas.

### Segurança:
As senhas devem ser armazenadas utilizando hashing. A comunicação deve ser realizada por meio de HTTPS para garantir segurança.

### Escalabilidade: 
O sistema deve ser capaz de se expandir conforme o número de usuários aumenta.

### Usabilidade: 
As respostas da API devem ser claras, incluindo mensagens de erro que sejam compreensíveis para os desenvolvedores.

### Confiabilidade: 
Os dados devem ser mantidos em segurança e todos os erros devem ser registrados para facilitar o diagnóstico.

### Manutenibilidade: 
O código deve ser organizado e fácil de modificar para futuras atualizações.

### Testabilidade: 
O sistema deve permitir a realização de testes automatizados para garantir a qualidade do código.

### Alta Disponibilidade: 
O sistema deve estar disponível continuamente, com a possibilidade de ser distribuído em múltiplos servidores para garantir redundância.

## Rotas e Funcionalidades

### Rota de Autenticação (/auth)
POST /register: Cria um novo usuário.
POST /login: Realiza o login do usuário.

### Rota de Livros (/livros)
GET /livros: Retorna a lista completa de livros.
POST /livros: Adiciona um novo livro ao catálogo.

### Rota de Usuários (/users)
GET /users: Lista todos os usuários registrados.
POST /users: Cria um novo usuário.

### Dependências
As principais dependências do projeto incluem:
Express: Framework utilizado para construir a API.
pg: Cliente PostgreSQL para interação com o banco de dados.
crypto: Utilizado para realizar o hashing das senhas.
dotenv: Para gerenciamento das variáveis de ambiente (recomendado, mas não incluído no código).

## Conclusão
Este projeto implementa uma API robusta para o gerenciamento de livros e usuários, garantindo autenticação segura. A estrutura baseada em MVC facilita a manutenção e a expansão futura do sistema. Com um foco em desempenho, segurança e usabilidade, esta API está preparada para atender às necessidades dos usuários enquanto proporciona uma experiência confiável e eficiente.
