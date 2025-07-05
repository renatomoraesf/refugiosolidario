package com.refugiados.api.controller;

import com.refugiados.api.model.Instituicao;
import com.refugiados.api.service.InstituicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/instituicoes")
public class InstituicaoController {

    @Autowired
    private InstituicaoService instituicaoService;

    @GetMapping
    public List<Instituicao> listar() {
        return instituicaoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Instituicao buscarPorId(@PathVariable Long id) {
        return instituicaoService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public Instituicao criar(@RequestBody Instituicao instituicao) {
        return instituicaoService.salvar(instituicao);
    }

    @PutMapping("/{id}")
    public Instituicao atualizar(@PathVariable Long id, @RequestBody Instituicao instituicao) {
        return instituicaoService.atualizar(id, instituicao);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        instituicaoService.deletar(id);
    }
}
