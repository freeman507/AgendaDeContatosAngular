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
        this.contatoCtrl.imprimirContatos();
    }
}