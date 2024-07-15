function calcularProduto() {
    let produto = 1;
    for (let i = 1; i <= 5; i++) {
        produto *= i;
    }
    alert('O produto dos números de 1 a 5 é: ' + produto);
}