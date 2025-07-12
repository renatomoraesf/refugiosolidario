package com.refugiados.api.controller;

import com.refugiados.api.model.Modulo;
import com.refugiados.api.service.ModuloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/modulos")
public class ModuloController {

    @Autowired
    private ModuloService moduloService;

    @GetMapping
    public List<Modulo> listar() {
        return moduloService.listarTodos();
    }

    @GetMapping("/{id}")
    public Modulo buscarPorId(@PathVariable Long id) {
        return moduloService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public Modulo criar(@RequestBody Modulo modulo) {
        return moduloService.salvar(modulo);
    }

    @PutMapping("/{id}")
    public Modulo atualizar(@PathVariable Long id, @RequestBody Modulo modulo) {
        return moduloService.atualizar(id, modulo);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        moduloService.deletar(id);
    }
}
