class Tabelas{
    init (conexao){
        this.conexao = conexao
        this.criarAgenda()
        this.criarRepresentante()
        this.criarEstatisticas()
    }

    criarAgenda(){

        /*id_agenda nome_agenda palavra_chave1 palavra_chave2 hora domingo segunda terca quarta quinta sexta sabado*/
        const sql = 'CREATE TABLE IF NOT EXISTS TB_AGENDA (id_agenda int NOT NULL AUTO_INCREMENT, nome_agenda text NOT NULL, palavra_chave1 text NOT NULL, palavra_chave2 text NOT NULL, hora text NOT NULL, domingo int NOT NULL, segunda int NOT NULL, terca int NOT NULL, quarta int NOT NULL, quinta int NOT NULL, sexta int NOT NULL, sabado int NOT NULL, bloqueado int NOT NULL, PRIMARY KEY(id_agenda))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela agenda criada com sucesso')
            }
        })
    }
    criarRepresentante(){
        const sql = 'CREATE TABLE IF NOT EXISTS TB_REPRESENTANTE (id_rep int NOT NULL AUTO_INCREMENT, nome_rep text NOT NULL, numero_rep text NOT NULL, PRIMARY KEY (id_rep))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela representante criada com sucesso')
            }
        })
    }
    criarEstatisticas(){
        /*id_est cod_ocorrencia nome_ocorrencia data_ocorrencia valor_ocorrencia*/
        const sql = 'CREATE TABLE IF NOT EXISTS TB_ESTATISTICAS (id_est int NOT NULL AUTO_INCREMENT, cod_ocorrencia int NOT NULL, nome_ocorrencia text NOT NULL, data_ocorrencia datetime NOT NULL, valor_ocorrencia text NOT NULL, PRIMARY KEY (id_est))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela estatísticas criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas