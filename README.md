# RACK+ Frontend Testing (Automação E2E)

Este repositório contém a suíte de testes automatizados End-to-End (E2E) desenvolvida com **Cypress** para validar o Front-end da aplicação **RACK+**. O projeto foca na garantia de qualidade das interfaces de Login e Homepage, cobrindo aspectos visuais, funcionais e de responsividade.

---

##  Escopo dos Testes Realizados

A automação cobre os fluxos críticos da aplicação, divididos em dois módulos principais:

### 1. Módulo de Login (`login.cy.js`)
* **Validação Visual (UI):** Verifica a presença e integridade de elementos estáticos (Logo, Título, Labels, Inputs, Favicon e Background).
* **Caminho Feliz (Happy Path):** Valida o fluxo de login com credenciais corretas e o redirecionamento para a Homepage.
* **Tratamento de Erros (Sad Path):**
    * Valida bloqueio de login com credenciais inválidas.
    * Valida bloqueio de tentativa de login com campos vazios.
    * Verifica a exibição de mensagens de erro ("E-mail ou senha incorretos", "Preencha todos os campos").
    * Valida animações visuais de erro (Efeito "Shake"/Tremor e cor vermelha no texto).
* **Interatividade:**
    * Testa a funcionalidade do botão de "Mostrar/Ocultar Senha" (Toggle Visibility).
    * Verifica se espaços em branco desnecessários (Trim) são ignorados no input.
* **Navegação:** Valida se os links "Cadastre-se" e "Esqueceu a senha" apontam para os destinos corretos.
* **Responsividade:** Verifica a adaptação do layout e redimensionamento da logo em dispositivos móveis (Viewport simulado: iPhone X).

### 2. Módulo Homepage (`homepage.cy.js`)
* **Estrutura de Navegação (Sidebar):** Valida se todos os ícones da barra lateral (Dashboard, Logs, Configurações, etc.) estão visíveis e possuem links funcionais.
* **Lógica de Negócio (Status das Salas):**
    * Verifica individualmente cada card de sala (1304 a 1309).
    * Valida se o indicador de status possui a cor correta (`bg-danger` ou `bg-success`) conforme a regra de negócio.
* **Menu Mobile (Offcanvas):**
    * Testa a abertura e fechamento do menu lateral em telas pequenas.
    * Valida a presença e os links dos itens dentro do menu mobile.
* **Responsividade (Cross-Device):**
    * **Desktop:** Garante que elementos mobile (botão hambúrguer) não apareçam.
    * **Mobile:** Garante que a barra lateral do desktop desapareça e o layout se ajuste para 390x844px.

---

---Siga as instruções abaixo para configurar o ambiente e executar os testes na sua máquina.

## Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** instalado em sua máquina.
* [Download Node.js](https://nodejs.org/) (Recomendado a versão LTS)

---

##  Passo a Passo para Instalação

### 1. Clonar o repositório
Abra o terminal e execute o comando abaixo para baixar os arquivos:

```bash
git clone [https://github.com/MariaMan26/TRABALHO-FINAL-TESTE-DE-FRONT-END.git](https://github.com/MariaMan26/TRABALHO-FINAL-TESTE-DE-FRONT-END.git)
```

### 2. Instale as dependências
Execute o comando abaixo na raiz do projeto para baixar o Cypress e bibliotecas auxiliares:

```bash
npm install
```

### Inicie o Servidor Local (IMPORTANTE)
Como este é um projeto estático, o Cypress precisa acessar os arquivos via protocolo HTTP.Como este é um projeto estático, o Cypress precisa acessar os arquivos via protocolo HTTP.

* Abra o VS Code na pasta do projeto.

* Abra o arquivo login/loginhtml.html ou homepage/homepagehtml.html.

* Clique com o botão direito no código e selecione "Open with Live Server".

* Certifique-se de que o navegador abriu na porta 5500 (Ex: http://127.0.0.1:5500/...).

