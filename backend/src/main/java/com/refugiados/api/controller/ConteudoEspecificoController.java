package com.refugiados.api.controller;

import com.refugiados.api.model.ConteudoEspecifico;
import com.refugiados.api.service.ConteudoEspecificoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conteudos-especificos")
public class ConteudoEspecificoController {

    @Autowired
    private ConteudoEspecificoService conteudoEspecificoService;

    @GetMapping
    public List<ConteudoEspecifico> listar() {
        return conteudoEspecificoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ConteudoEspecifico buscarPorId(@PathVariable Long id) {
        return conteudoEspecificoService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public ConteudoEspecifico criar(@RequestBody ConteudoEspecifico conteudo) {
        return conteudoEspecificoService.salvar(conteudo);
    }

    @PutMapping("/{id}")
    public ConteudoEspecifico atualizar(@PathVariable Long id, @RequestBody ConteudoEspecifico conteudo) {
        return conteudoEspecificoService.atualizar(id, conteudo);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        conteudoEspecificoService.deletar(id);
    }
}