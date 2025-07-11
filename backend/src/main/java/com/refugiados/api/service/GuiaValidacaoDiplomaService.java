package com.refugiados.api.service;

import com.refugiados.api.model.GuiaValidacaoDiploma;
import com.refugiados.api.repository.GuiaValidacaoDiplomaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuiaValidacaoDiplomaService {

    @Autowired
    private GuiaValidacaoDiplomaRepository guiaRepository;

    public List<GuiaValidacaoDiploma> listarTodos() {
        return guiaRepository.findAll();
    }

    public Optional<GuiaValidacaoDiploma> buscarPorId(Long id) {
        return guiaRepository.findById(id);
    }

    public GuiaValidacaoDiploma salvar(GuiaValidacaoDiploma guia) {
        return guiaRepository.save(guia);
    }

    public GuiaValidacaoDiploma atualizar(Long id, GuiaValidacaoDiploma atualizado) {
        return guiaRepository.findById(id).map(guia -> {
            guia.setTitulo(atualizado.getTitulo());
            guia.setConteudo(atualizado.getConteudo());
            return guiaRepository.save(guia);
        }).orElse(null);
    }

    public void deletar(Long id) {
        guiaRepository.deleteById(id);
    }
}