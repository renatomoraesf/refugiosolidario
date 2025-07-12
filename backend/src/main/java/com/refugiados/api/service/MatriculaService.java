package com.refugiados.api.service;

import com.refugiados.api.model.Matricula;
import com.refugiados.api.repository.MatriculaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MatriculaService {

    @Autowired
    private MatriculaRepository matriculaRepository;

    public List<Matricula> listarTodos() {
        return matriculaRepository.findAll();
    }

    public Optional<Matricula> buscarPorId(Long id) {
        return matriculaRepository.findById(id);
    }

    public Matricula salvar(Matricula matricula) {
        return matriculaRepository.save(matricula);
    }

    public Matricula atualizar(Long id, Matricula atualizado) {
        return matriculaRepository.findById(id).map(matricula -> {
            matricula.setDataMatricula(atualizado.getDataMatricula());
            return matriculaRepository.save(matricula);
        }).orElse(null);
    }

    public void deletar(Long id) {
        matriculaRepository.deleteById(id);
    }
}