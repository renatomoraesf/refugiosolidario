package com.refugiados.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.refugiados.api.model.Servico;
import com.refugiados.api.repository.ServicoRepository;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    public List<Servico> listarTodos() {
        return servicoRepository.findAll();
    }

    public Optional<Servico> buscarPorId(Long id) {
        return servicoRepository.findById(id);
    }

    public Servico salvar(Servico servico) {
        return servicoRepository.save(servico);
    }

    public Servico atualizar(Long id, Servico servicoAtualizado) {
        servicoAtualizado.setId(id);
        return servicoRepository.save(servicoAtualizado);
    }

    public void deletar(Long id) {
        servicoRepository.deleteById(id);
    }
}