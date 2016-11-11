function contatoCtrl() {
    var dao = new contatoDAO();
    this.salvarContato = function(nome, telefone, endereco) {
        var contato = new Contato();
        contato.setNome(nome);
        contato.setTelefone(telefone);
        contato.setEndereco(endereco);
        dao.salvarContato(contato);
    }
    this.atualizarContato = function(nome, telefone, endereco) {
        var contato = new Contato();
        contato.setNome(nome);
        contato.setTelefone(telefone);
        contato.setEndereco(endereco);
        dao.atualizarContato(contato);
    }
    this.deletarContato = function(nome) {
        dao.deletarContato(nome);
    }
    this.buscarTodosContatos = function() {
        return dao.buscarTodosContatos();
    }
    this.buscarPorNome = function(nome) {
        var contato = dao.buscarContatoPorNome(nome);
        return contato;
    }
}