package com.refugiados.api.model;

import jakarta.persistence.*;

@Entity
public class GuiaValidacaoDiploma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    @Column(length = 1000)
    private String passos;

    private String conteudo;

    private String documentoNecessario;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getPassos() {
        return passos;
    }

    public void setPassos(String passos) {
        this.passos = passos;
    }

    public String getDocumentoNecessario() {
        return documentoNecessario;
    }

    public void setDocumentoNecessario(String documentoNecessario) {
        this.documentoNecessario = documentoNecessario;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    
    
}
