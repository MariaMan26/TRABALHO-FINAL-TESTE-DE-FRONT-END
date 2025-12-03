describe('Validação página de login', () => {
    const LOGIN_URL = 'http://127.0.0.1:5500/TESTE-DE-FRONT-END/login/loginhtml.html' //corrigir para o respectivo diretório local
    beforeEach(() => {
        cy.visit(LOGIN_URL)
    })
    
    it('Validar elementos visuais estáticos e itens do form', () => {
        //Valida título da página
        cy.title().should('eq', 'RACK+ Login')
        //Valida favicon da página
        cy.get('link[rel="icon"]').should('have.attr', 'href', '../pngs/logo.png')

        //Valida título da página de login
        cy.get('#title').should('be.visible').and('contain', 'Entrar')

        //Valida logo da página
        cy.get('.logo-img').should('be.visible').and('have.attr', 'src', '../pngs/logo-lateral.png')

        //Valida background da página
        cy.get('body').should('have.css', 'background-image').and('include', 'teladefundo.png')
        
        //Valida visibilidade geral do form
        cy.get('.form-group').should('be.visible')

        //Valida inputs de email e senha
        cy.get('#email').should('be.visible').and('have.attr', 'type', 'email')
        cy.get('#password').should('be.visible').and('have.attr', 'type', 'password')

        //Valida botão de visualizar senha
        cy.get('#eyeIcon').should('be.visible').and('have.class', 'bi-eye-slash')

        //Valida nome de cada input/botão do form
        cy.get('label[for="email"]').should('contain', 'E-mail')
        cy.get('label[for="password"]').should('contain', 'Senha')
        cy.get('.btn').should('be.visible').and('contain', 'Entrar')
        cy.get('#redirect-cadastro').should('be.visible').and('contain', 'Não possui uma conta? Cadastre-se!')
        cy.get('#redirect-recuperarSenha').should('be.visible').and('contain', 'Esqueceu sua senha?')
    })
    it('Validar login ignorando espaços desnecessários (Trim)', () => {
        cy.get('#email').type('exemplo@gmail.com')
        cy.get('#password').type('Exemplo*123')
        cy.get('.btn').click()
        cy.url().should('include', '/homepage/homepagehtml.html')
    })
    it('Validar login com sucesso', () => {
        cy.get('#email').clear()
        cy.get('#password').clear() //garante que o campo está vazio
        //Preenche campos com dados corretos
        cy.get('#email').type('exemplo@gmail.com')
        cy.get('#password').type('Exemplo*123')
        cy.get('.btn').click()
        //Valida redirecionamento para homepage
        cy.url().should('include', '/homepage/homepagehtml.html')
    })
    it('Validar login com falha - dados incorretos', () => {
        cy.get('#email').clear()
        cy.get('#password').clear() //garante que o campo está vazio
        //Preenche campos com dados incorretos
        cy.get('#email').type('usuario@invalido.com')
        cy.get('#password').type('SenhaErrada')
        cy.get('.btn').click()
        //Valida mensagem de erro
        cy.get('#mensagem').should('be.visible').and('contain', 'E-mail ou senha incorretos.')
    })
    it('Validar login com falha - campos vazios', () => {
        //Clica em entrar sem preencher campos
        cy.get('.btn').click()
        //Valida mensagem de erro
        cy.get('#mensagem').should('be.visible').and('contain', 'Por favor, preencha todos os campos.')

        //Preenche campos com dados incompletos
        cy.get('#email').clear()
        cy.get('#password').clear() //garante que o campo está vazio
        cy.get('#email').type('usuario@invalido.com')
        cy.get('.btn').click()
        //Valida mensagem de erro
        cy.get('#mensagem').should('be.visible').and('contain', 'Por favor, preencha todos os campos.')
        
        //Preenche campos com dados incompletos
        cy.get('#email').clear()
        cy.get('#password').clear() //garante que o campo está vazio
        cy.get('#password').type('SenhaErrada')
        cy.get('.btn').click()
        //Valida mensagem de erro
       cy.get('#mensagem').should('be.visible').and('contain', 'Por favor, preencha todos os campos.')
    })
    it('Validar animação de shake ao errar login', () => {
        cy.get('.btn').click() // Clica sem preencher nada
        
        // Verifica se a classe 'shake' foi adicionada
        cy.get('#mensagem').should('have.class', 'shake')
        
        // Verifica se a mensagem de erro está em vermelho
        cy.get('#mensagem').should('have.css', 'color', 'rgb(255, 0, 0)') 
    })
    it('Validar funcionalidade de mostrar/ocultar senha', () => {
        cy.get('#password').clear() //garante que o campo está vazio
        cy.get('#password').type('exemplo@gmail.com') //Preenche campo de senha

        //Verifica se o campo de senha está como "password" inicialmente
        cy.get('#password').should('have.attr', 'type', 'password')
        //Clica no ícone para mostrar a senha
        cy.get('#eyeIcon').click()
        //Verifica se o campo de senha mudou para "text"
        cy.get('#password').should('have.attr', 'type', 'text')
        //Clica novamente no ícone para ocultar a senha
        cy.get('#eyeIcon').click()
        //Verifica se o campo de senha voltou para "password"
        cy.get('#password').should('have.attr', 'type', 'password')
    })
    it('Validar troca do ícone ao mostrar/ocultar senha', () => {
        cy.get('#password').type('123')
        
        // Estado inicial
        cy.get('#eyeIcon').should('have.class', 'bi-eye-slash')
        
        // Clica para mostrar
        cy.get('#eyeIcon').click()
        cy.get('#password').should('have.attr', 'type', 'text')
        cy.get('#eyeIcon').should('have.class', 'bi-eye') // Valida que o ícone mudou
        
        // Clica para esconder
        cy.get('#eyeIcon').click()
        cy.get('#password').should('have.attr', 'type', 'password')
        cy.get('#eyeIcon').should('have.class', 'bi-eye-slash') // Valida que voltou
    })
    it('Validar links de redirecionamento', () => {
        //Valida link de cadastro
        cy.get('#redirect-cadastro a').should('have.attr', 'href', '../cadastro/cadastrohtml.html')
        //Valida link de recuperar senha
        cy.get('#redirect-recuperarSenha a').should('have.attr', 'href', 'https://www.youtube.com/watch?v=La44ebRSy-Y')
    })

    // Teste de responsividade
    it('Valida comportamento ao redimensionar a tela', () => {

    // Simula uma tela mobile
    cy.viewport(375, 812)
    cy.get('.logo-img').should('have.css', 'max-height', '120px')
        //Valida logo da página
        cy.get('.logo-img').should('be.visible').and('have.attr', 'src', '../pngs/logo-lateral.png')

        //Valida background da página
        cy.get('body').should('have.css', 'background-image').and('include', 'teladefundo.png')
        
        //Valida visibilidade geral do form
        cy.get('.form-group').should('be.visible')

        //Valida inputs de email e senha
        cy.get('#email').should('be.visible').and('have.attr', 'type', 'email')
        cy.get('#password').should('be.visible').and('have.attr', 'type', 'password')

        //Valida botão de visualizar senha
        cy.get('#eyeIcon').should('be.visible').and('have.class', 'bi-eye-slash')

        //Valida nome de cada input/botão do form
        cy.get('label[for="email"]').should('contain', 'E-mail')
        cy.get('label[for="password"]').should('contain', 'Senha')
        cy.get('.btn').should('be.visible').and('contain', 'Entrar')
        cy.get('#redirect-cadastro').should('be.visible').and('contain', 'Não possui uma conta? Cadastre-se!')
        cy.get('#redirect-recuperarSenha').should('be.visible').and('contain', 'Esqueceu sua senha?')
    })

})