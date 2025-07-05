package com.refugiados.api.service;

import com.refugiados.api.model.ConteudoEspecifico;
import com.refugiados.api.repository.ConteudoEspecificoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConteudoEspecificoService {

    @Autowired
    private ConteudoEspecificoRepository conteudoRepository;

    public List<ConteudoEspecifico> listarTodos() {
        return conteudoRepository.findAll();
    }

    public Optional<ConteudoEspecifico> buscarPorId(Long id) {
        return conteudoRepository.findById(id);
    }

    public ConteudoEspecifico salvar(ConteudoEspecifico conteudo) {
        return conteudoRepository.save(conteudo);
    }

    public ConteudoEspecifico atualizar(Long id, ConteudoEspecifico atualizado) {
        return conteudoRepository.findById(id).map(conteudo -> {
            conteudo.setTitulo(atualizado.getTitulo());
            conteudo.setDescricao(atualizado.getDescricao());
            return conteudoRepository.save(conteudo);
        }).orElse(null);
    }

    public void deletar(Long id) {
        conteudoRepository.deleteById(id);
    }
}
