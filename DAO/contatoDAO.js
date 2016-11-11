function contatoDAO() {
    var contatos = [];
    this.salvarContato = function(contato) {
        contatos.push(contato);
    }
    this.buscarTodosContatos = function() {
        return contatos;
    }
    this.buscarContatoPorNome = function(nome) {
        for (var i = 0; i < contatos.length - 1; i++) {
            var contato = contatos[i];
            if (contato.getNome() === nome) {
                return contato;
            }
        }
        return null;
    }
    this.atualizarContato = function(contato) {
        for (var i = 0; i < contatos.length - 1; i++) {
            if (contatos[i].getNome() === contato.getNome()) {
                contatos[i] = contato;
            }
        }
        return null;
    }
    this.deletarContato = function(nome) {
        for (var i = 0; i < contatos.length - 1; i++) {
            var contato = contatos[i];
            if (contato.getNome() === nome) {
                contatos.splice(i, 1);
            }
        }
    }
}