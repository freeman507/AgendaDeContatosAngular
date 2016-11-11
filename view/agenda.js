var agenda = angular.module("agenda", []);
agenda.controller("AgendaCtrl", AgendaCtrl);

function AgendaCtrl() {
    this.nome = "";
    this.telefone = "";
    this.endereco = "";
    this.contatoCtrl = new contatoCtrl();
    this.contatos = this.contatoCtrl.buscarTodosContatos();
    this.salvarContato = function() {
        this.contatoCtrl.salvarContato(this.nome, this.telefone, this.endereco);
        this.limpar();
    }
    this.alterarContato = function() {
        this.contatoCtrl.atualizarContato(this.nome, this.telefone, this.endereco);
        this.limpar();
    }
    this.deletarContato = function() {
        this.contatoCtrl.deletarContato(this.nome);
        this.limpar();
    }
    this.buscarPorNome = function() {
        var contato = this.contatoCtrl.buscarPorNome(this.nome);
        this.nome = contato.getNome();
        this.telefone = contato.getTelefone();
        this.endereco = contato.getEndereco();
    }
    this.limpar = function() {
        this.nome = "";
        this.telefone = "";
        this.endereco = "";
    }
}