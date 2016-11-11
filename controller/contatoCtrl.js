function contatoCtrl() {
    var dao = new contatoDAO();
    this.salvarContato = function(contato) {
        dao.salvarContato(contato);
    }
    this.imprimirContatos = function() {
        var contatos = dao.buscarTodosContatos();
        console.log("inicio:");
        console.log("--------------------------------------------")
        for (var i = 0; i < contatos.length; i++) {
            var contato = contatos[i];
            console.log("nome: " + contato.getNome());
            console.log("telefone: " + contato.getTelefone());
            console.log("Endereço: " + contato.getEndereco());
            console.log("--------------------------------------------")
        }
        console.log("Fim.")
    }
    this.atualizarContato = function(contato) {
        dao.atualizarContato(contato);
    }
}