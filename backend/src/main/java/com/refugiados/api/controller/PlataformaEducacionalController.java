package com.refugiados.api.controller;

import com.refugiados.api.model.PlataformaEducacional;
import com.refugiados.api.service.PlataformaEducacionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plataformas")
public class PlataformaEducacionalController {

    @Autowired
    private PlataformaEducacionalService plataformaService;

    @GetMapping
    public List<PlataformaEducacional> listar() {
        return plataformaService.listarTodos();
    }

    @GetMapping("/{id}")
    public PlataformaEducacional buscarPorId(@PathVariable Long id) {
        return plataformaService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public PlataformaEducacional criar(@RequestBody PlataformaEducacional plataforma) {
        return plataformaService.salvar(plataforma);
    }

    @PutMapping("/{id}")
    public PlataformaEducacional atualizar(@PathVariable Long id, @RequestBody PlataformaEducacional plataforma) {
        return plataformaService.atualizar(id, plataforma);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        plataformaService.deletar(id);
    }
}