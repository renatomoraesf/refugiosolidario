package com.refugiados.api.controller;

import com.refugiados.api.model.GuiaValidacaoDiploma;
import com.refugiados.api.service.GuiaValidacaoDiplomaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guias")
public class GuiaValidacaoDiplomaController {

    @Autowired
    private GuiaValidacaoDiplomaService guiaService;

    @GetMapping
    public List<GuiaValidacaoDiploma> listar() {
        return guiaService.listarTodos();
    }

    @GetMapping("/{id}")
    public GuiaValidacaoDiploma buscarPorId(@PathVariable Long id) {
        return guiaService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public GuiaValidacaoDiploma criar(@RequestBody GuiaValidacaoDiploma guia) {
        return guiaService.salvar(guia);
    }

    @PutMapping("/{id}")
    public GuiaValidacaoDiploma atualizar(@PathVariable Long id, @RequestBody GuiaValidacaoDiploma guia) {
        return guiaService.atualizar(id, guia);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        guiaService.deletar(id);
    }
}
