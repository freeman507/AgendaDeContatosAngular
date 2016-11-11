function Contato() {
    var nome;
    var telefone;
    var endereco;
    this.getNome = function() {
        return this.nome;
    }
    this.setNome = function(nome) {
        this.nome = nome;
    }
    this.getTelefone = function() {
        return this.telefone;
    }
    this.setTelefone = function(telefone) {
        this.telefone = telefone;
    }
    this.getEndereco = function() {
        return this.endereco;
    }
    this.setEndereco = function(endereco) {
        this.endereco = endereco;
    }
}