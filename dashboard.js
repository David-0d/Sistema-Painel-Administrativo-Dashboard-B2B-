document.addEventListener("DOMContentLoaded", () => {
    console.log("Painel Administrativo B2B carregado com sucesso.");
    
    // Simulação de carregamento de dados do sistema
    const faturamentoElement = document.querySelector(".card:nth-child(1) p");
    const clientesElement = document.querySelector(".card:nth-child(2) p");

    // Efeito visual simulando atualização ao carregar a página
    if (faturamentoElement && clientesElement) {
        setTimeout(() => {
            console.log("Dados sincronizados com o servidor com sucesso.");
        }, 800);
    }
});

// Função para simular a geração de relatórios corporativos
function gerarRelatorio() {
    alert("Relatório gerado com sucesso! O arquivo PDF será baixado em breve.");
}