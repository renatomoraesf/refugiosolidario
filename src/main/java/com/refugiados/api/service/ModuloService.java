package com.refugiados.api.service;

import com.refugiados.api.model.Modulo;
import com.refugiados.api.repository.ModuloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModuloService {

    @Autowired
    private ModuloRepository moduloRepository;

    public List<Modulo> listarTodos() {
        return moduloRepository.findAll();
    }

    public Optional<Modulo> buscarPorId(Long id) {
        return moduloRepository.findById(id);
    }

    public Modulo salvar(Modulo modulo) {
        return moduloRepository.save(modulo);
    }

    public Modulo atualizar(Long id, Modulo atualizado) {
        return moduloRepository.findById(id).map(modulo -> {
            modulo.setNome(atualizado.getNome());
            modulo.setConteudo(atualizado.getConteudo());
            return moduloRepository.save(modulo);
        }).orElse(null);
    }

    public void deletar(Long id) {
        moduloRepository.deleteById(id);
    }
}
