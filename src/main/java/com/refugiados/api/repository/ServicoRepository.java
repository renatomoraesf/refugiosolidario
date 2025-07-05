package com.refugiados.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.refugiados.api.model.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {
    // Exemplo de método para buscar serviços por categoria
    // List<Servico> findByCategoria(Servico.Categoria categoria);
}