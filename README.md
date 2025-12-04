# Trabalho Final - Teste de Front-End (RACK+)

Este repositório contém o código front-end (HTML/CSS/JS) das páginas de **Login** e **Homepage** do sistema **RACK+**, juntamente com uma suíte de testes automatizados End-to-End (E2E) desenvolvidos com **Cypress**.

🔗 **Link do Repositório:** [https://github.com/MariaMan26/TRABALHO-FINAL-TESTE-DE-FRONT-END](https://github.com/MariaMan26/TRABALHO-FINAL-TESTE-DE-FRONT-END)

---

## Sobre o Projeto

O objetivo deste projeto é garantir a qualidade e o funcionamento correto da interface do usuário através de testes automatizados. Os testes cobrem:
* Validação de elementos visuais (UI).
* Comportamento funcional (Login, navegação, interação).
* Responsividade (Layout Desktop vs. Mobile).

## Contexto Acadêmico e Objetivos

Este projeto foi desenvolvido como atividade avaliativa final da Unidade Curricular de **Testes de Front-End** no SENAI.

O objetivo principal é realizar a validação da qualidade da interface web desenvolvida anteriormente (RACK+), aplicando técnicas de **Quality Assurance (QA)** através de testes automatizados. Além do caráter avaliativo, este repositório serve como uma ferramenta de **consolidação de aprendizado**.
  
### Cobertura de Testes E2E (Cypress)

** Login (`login.cy.js`)**
* **Fluxos de Autenticação:** Cobre o caminho feliz (login com sucesso) e tratativas de erro (credenciais inválidas e campos vazios).
* **Experiência do Usuário (UX):** Valida feedbacks visuais (mensagens de erro, animação "shake") e interatividade (botão mostrar/ocultar senha).
* **Responsividade:** Verifica a integridade visual e adaptação de elementos (logo, inputs) em simulação mobile.

** Homepage (`homepage.cy.js`)**
* **Experiência do Usuário e Responsividade:** Garante a visibilidade correta dos menus de navegação, validando a alternância suave entre a Barra Lateral (Desktop) e o Menu Mobile conforme a resolução do dispositivo.
* **Validação Visual de Status:** Verifica a renderização dos cards das salas, confirmando se os indicadores de cor (Verde/Vermelho) estão sendo exibidos corretamente.
* **Integridade dos Elementos:** Assegura que links externos, ícones e imagens estejam presentes, visíveis e funcionais em ambas as versões.

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* **Node.js** (versão 12 ou superior): [Download aqui](https://nodejs.org/)
* **VS Code** (Recomendado): Com a extensão **Live Server** instalada (necessária para rodar o projeto localmente na porta 5500).
* **Cypress**: Framework de testes (será instalado nas dependências do projeto).
---

## Instalação

Siga os passos abaixo para configurar o ambiente de teste:

1.  **Clone o repositório:**
    Abra seu terminal (Git Bash, Powershell ou Terminal do VS Code) e rode:
    ```bash
    git clone https://github.com/MariaMan26/TRABALHO-FINAL-TESTE-DE-FRONT-END.git

2.  **Acesse a pasta do projeto:**
    ```bash
    cd TESTE-DE-FRONT-END
    ```

3.  **Instale as dependências (Cypress):**
    Execute o comando abaixo para instalar o Cypress localmente no projeto:
    ```bash
    npm install cypress --save-dev
    ```
    *(Caso não tenha um arquivo `package.json` iniciado, rode `npm init -y` antes do comando acima).*

---

## Configuração do Ambiente Local

**Importante:**
Os testes foram configurados para rodar buscando a aplicação no endereço:
`http://127.0.0.1:5500/TESTE-DE-FRONT-END/...`

Para que os testes funcionem sem erros:
1.  Abra a pasta `TESTE-DE-FRONT-END` no **VS Code**.
2.  Clique com o botão direito no arquivo `login/loginhtml.html` e selecione **"Open with Live Server"**.
3.  Certifique-se de que o servidor subiu na porta **5500**.

> Se o seu servidor local rodar em outra porta (ex: 8080), você precisará alterar a constante `LOGIN_URL` dentro dos arquivos `.cy.js` na pasta `cypress/e2e/`.

---

## Como Executar os Testes

Você pode rodar o Cypress de duas maneiras:

### 1. Modo Interativo (Interface Gráfica)
Ideal para ver os testes acontecendo em tempo real.
Execute o comando abaixo ainda na pasta raiz do projeto apresentada acima
```bash
npx cypress open
```
1.  Uma janela do Cypress será aberta.

2.  Selecione a opção **"E2E Testing"**.

3.  Escolha o navegador de sua preferência (Chrome, Edge, Electron, etc) e clique em **"Start E2E Testing"**.
   ![CYPRESS TELA INICIAL APP](/IMG-FOR-READMEMD/abrindocypress.png)

4.  Na lista de specs, clique em `login.cy.js` ou `homepage.cy.js` para rodar o teste visualmente.
  ![CYPRESS HOMEPAGE NAVEGADOR](/IMG-FOR-READMEMD/homepagecypress.png)

5.  Em seguida, se todos os passos tiverem sido executados corretamente essa deverá ser a tela visualizada.
   ![CYPRESS TELA INICIAL APP](/IMG-FOR-READMEMD/testcypress.png)

## 2. Modo Headless (Terminal)

Executa os testes sem abrir a interface gráfica — ideal para CI/CD, pipelines e execuções rápidas.
```
npx cypress run
```

### Ao rodar esse comando:
- Todos os testes da pasta cypress/e2e serão executados.
- O Cypress utilizará o navegador Electron em modo headless por padrão.
- Serão gerados:
  - ✔️ Vídeos de cada spec (em cypress/videos/)
  - ✔️ Screenshots em caso de falha (em cypress/screenshots/)
- O resumo da execução aparecerá diretamente no terminal.

---
## Tecnologias Utilizadas
- HTML5 & CSS3
- JavaScript
- Bootstrap 5
- Cypress (Automação de Testes)

# Autor
### Desenvolvido por Caio Gomes de Oliveira

### Projeto realizado como avaliação final da disciplina de Testes de Front-End no *SENAI*.



