function aplicarEstilo(numero){
    var titulo = document.getElementById('titulo');
    var parrafo = document.getElementById('parrafo');
    var body = document.body;
                                              
    titulo.classList = "estilo" + numero;
    parrafo.classList = "estilo" + numero;
    body.classList = "estilo" + numero;
}



