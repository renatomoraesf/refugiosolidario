package com.refugiados.api.service;

import com.refugiados.api.model.Instituicao;
import com.refugiados.api.repository.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstituicaoService {

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    public List<Instituicao> listarTodos() {
        return instituicaoRepository.findAll();
    }

    public Optional<Instituicao> buscarPorId(Long id) {
        return instituicaoRepository.findById(id);
    }

    public Instituicao salvar(Instituicao instituicao) {
        return instituicaoRepository.save(instituicao);
    }

    public Instituicao atualizar(Long id, Instituicao atualizado) {
        return instituicaoRepository.findById(id).map(instituicao -> {
            instituicao.setNome(atualizado.getNome());
            instituicao.setTipo(atualizado.getTipo());
            return instituicaoRepository.save(instituicao);
        }).orElse(null);
    }

    public void deletar(Long id) {
        instituicaoRepository.deleteById(id);
    }
}