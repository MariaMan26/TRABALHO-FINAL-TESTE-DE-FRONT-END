describe('Validação página de cadastro', () => {
    // URL do seu projeto
    const LOGIN_URL = 'http://127.0.0.1:5500/TESTE-DE-FRONT-END/homepage/homepagehtml.html'
    
    // Link padrão (Youtube) para não precisar repetir toda hora
    const LINK_PADRAO = 'https://www.youtube.com/watch?v=La44ebRSy-Y'
    
    // Regra para aceitar cor Vermelha OU Verde (Isso é necessário para validar o status)
    const REGEX_STATUS = /bg-danger|bg-success/

    beforeEach(() => {
        cy.visit(LOGIN_URL)
    })

    it('Validar elementos visuais estáticos e Links Desktop', () => {
        // Valida título da página e ícone
        cy.title().should('eq', 'RACK+ Homepage')
        cy.get('link[rel="icon"]').should('have.attr', 'href', '../pngs/logo.png')

        // Valida título visual e Background
        cy.get('#title').should('be.visible').and('contain', 'Salas')
        cy.get('body').should('have.css', 'background-image').and('include', 'teladefundo.png')

        // --- BARRA LATERAL (Links) ---

        // Logo
        cy.get('img[alt="logo_desktop"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/logo.png')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // Pesquisar
        cy.get('img[alt="pesquisar_desktop"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/icon-lupa.png')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)
        
        // Dashboard
        cy.get('img[alt="dashboard_desktop"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/icon-dashboard.png')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // Logs
        cy.get('img[alt="logs_desktop"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/icon-logs.png')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // Configurações
        cy.get('img[alt="configurações_desktop"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/icon-config.png')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // Pokemon (Link diferente)
        cy.get('img[alt="pokemon_desktop"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/icon-bulbasaur.png')
            .parent('a').should('have.attr', 'href', '../api/pokemonhtml.html')
        

        // Usuário
        cy.get('img[alt="usuário_desktop"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/icon-user.png')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // ITENS QUE NÃO DEVEM APARECER NO DESKTOP 
        // O menu do mobile não pode estar visível
        cy.get('img[alt="menu_mobile"]').should('not.be.visible')
        // O logo versão mobile não pode estar visível
        cy.get('img[alt="logo_mobile"]').should('not.be.visible')
        // O campo de busca versão mobile não pode estar visível
        cy.get('input[placeholder="PESQUISAR..."]').should('not.be.visible')

    })

    it('Validar salas uma a uma (Link e Status Vermelho OU Verde)', () => {
        // --- SALA 1304 ---
        cy.contains('.card', 'Sala 1304')
            .should('have.attr', 'href', LINK_PADRAO)
            .find('.indicador-status')
            .should('be.visible')
            .invoke('attr', 'class')
            .should('match', REGEX_STATUS) // Aceita bg-danger ou bg-success

        // --- SALA 1305 ---
        cy.contains('.card', 'Sala 1305')
            .should('have.attr', 'href', LINK_PADRAO)
            .find('.indicador-status')
            .should('be.visible')
            .invoke('attr', 'class')
            .should('match', REGEX_STATUS)

        // --- SALA 1306 ---
        cy.contains('.card', 'Sala 1306')
            .should('have.attr', 'href', LINK_PADRAO)
            .find('.indicador-status')
            .should('be.visible')
            .invoke('attr', 'class')
            .should('match', REGEX_STATUS)

        // --- SALA 1307 ---
        cy.contains('.card', 'Sala 1307')
            .should('have.attr', 'href', LINK_PADRAO)
            .find('.indicador-status')
            .should('be.visible')
            .invoke('attr', 'class')
            .should('match', REGEX_STATUS)

        // --- SALA 1308 ---
        cy.contains('.card', 'Sala 1308')
            .should('have.attr', 'href', LINK_PADRAO)
            .find('.indicador-status')
            .should('be.visible')
            .invoke('attr', 'class')
            .should('match', REGEX_STATUS)

        // --- SALA 1309 ---
        cy.contains('.card', 'Sala 1309')
            .should('have.attr', 'href', LINK_PADRAO)
            .find('.indicador-status')
            .should('be.visible')
            .invoke('attr', 'class')
            .should('match', REGEX_STATUS)
    })

    it('Validar responsividade mobile e Links', () => {
        cy.viewport(390, 844)

        // Valida se existem 6 salas
        cy.get('.sala').should('have.length', 6)

        // Ícone usuário mobile e Link
        cy.get('img[alt="usuário_mobile"]').should('be.visible')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // Ícone pesquisar mobile (apenas visual)
        cy.get('img[alt="pesquisar_mobile"]').should('be.visible')

        // Campo de pesquisa (Digitação)
        cy.get('input[placeholder="PESQUISAR..."]').type('Sala 1304')
            .should('have.value', 'Sala 1304')

        // Logo mobile e Link
        cy.get('img[alt="logo_mobile"]').should('be.visible')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // TESTES NEGATIVOS (O que NÃO deve aparecer no Mobile) 
        // A barra lateral inteira do desktop deve sumir
        cy.get('.barra-lateral-desktop').should('not.be.visible')
        // O ícone de usuário da versão desktop deve sumir
        cy.get('img[alt="usuário_desktop"]').should('not.be.visible')
    })

    it('Validar menu lateral mobile (Abrir, Validar Links e Fechar)', () => {
        cy.viewport(390, 844)

        // Garante que o menu está fechado no início
        cy.get('#menuMobile').should('not.be.visible')

        // Clica para abrir
        cy.get('a[data-bs-target="#menuMobile"]').click()

        // Aguarda ficar visível
        cy.get('#menuMobile').should('be.visible')
        
        // --- ITENS DO MENU MOBILE ---

        // Home
        cy.get('img[alt="home_mobile"]').should('be.visible')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)
        
        // Dashboard
        cy.get('img[alt="dashboard_mobile"]').should('be.visible')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // Logs/Documentos
        cy.get('img[alt="documentos_mobile"]').should('be.visible')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)

        // Configurações
        cy.get('img[alt="configurações_mobile"]').should('be.visible')
            .parent('a').should('have.attr', 'href', LINK_PADRAO)
            
        // Pokemon API
        cy.get('img[alt="pokemon_mobile"]').should('be.visible')
            .and('have.attr', 'src', '../pngs/icon-bulbasaur.png')
            .parent('a').should('have.attr', 'href', '../api/pokemonhtml.html')

        // Fecha o menu clicando no X
        cy.get('.offcanvas-header .btn-close').click()

        // Garante que fechou
        cy.get('#menuMobile').should('not.be.visible')
    })
})