function contatoCtrl() {
    var dao = new contatoDAO();
    var contato = new contato();
    this.salvarContato = function(nome, telefone, endereco) {
        contato.setNome(nome);
        contato.setTelefone(telefone);
        contato.setEndereco(endereco);
        dao.salvarContato(contato);
        contato = null;
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
    this.deletarContato = function(nome) {
        dao.deletarContato(nome);
    }
    this.buscarTodosContatos = function() {
        return dao.buscarTodosContatos();
    }
}