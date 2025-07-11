package com.refugiados.api.service;

import com.refugiados.api.model.PlataformaEducacional;
import com.refugiados.api.repository.PlataformaEducacionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlataformaEducacionalService {

    @Autowired
    private PlataformaEducacionalRepository plataformaRepository;

    public List<PlataformaEducacional> listarTodos() {
        return plataformaRepository.findAll();
    }

    public Optional<PlataformaEducacional> buscarPorId(Long id) {
        return plataformaRepository.findById(id);
    }

    public PlataformaEducacional salvar(PlataformaEducacional plataforma) {
        return plataformaRepository.save(plataforma);
    }

    public PlataformaEducacional atualizar(Long id, PlataformaEducacional atualizado) {
        return plataformaRepository.findById(id).map(plataforma -> {
            plataforma.setNome(atualizado.getNome());
            plataforma.setUrl(atualizado.getUrl());
            return plataformaRepository.save(plataforma);
        }).orElse(null);
    }

    public void deletar(Long id) {
        plataformaRepository.deleteById(id);
    }
}