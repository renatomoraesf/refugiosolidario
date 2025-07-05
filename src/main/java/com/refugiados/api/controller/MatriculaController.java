package com.refugiados.api.controller;

import com.refugiados.api.model.Matricula;
import com.refugiados.api.service.MatriculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/matriculas")
public class MatriculaController {

    @Autowired
    private MatriculaService matriculaService;

    @GetMapping
    public List<Matricula> listar() {
        return matriculaService.listarTodos();
    }

    @GetMapping("/{id}")
    public Matricula buscarPorId(@PathVariable Long id) {
        return matriculaService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public Matricula criar(@RequestBody Matricula matricula) {
        return matriculaService.salvar(matricula);
    }

    @PutMapping("/{id}")
    public Matricula atualizar(@PathVariable Long id, @RequestBody Matricula matricula) {
        return matriculaService.atualizar(id, matricula);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        matriculaService.deletar(id);
    }
}
