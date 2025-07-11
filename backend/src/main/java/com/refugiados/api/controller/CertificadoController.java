package com.refugiados.api.controller;

import com.refugiados.api.model.Certificado;
import com.refugiados.api.service.CertificadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/certificados")
public class CertificadoController {

    @Autowired
    private CertificadoService certificadoService;

    @GetMapping
    public List<Certificado> listar() {
        return certificadoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Certificado buscarPorId(@PathVariable Long id) {
        return certificadoService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public Certificado criar(@RequestBody Certificado certificado) {
        return certificadoService.salvar(certificado);
    }

    @PutMapping("/{id}")
    public Certificado atualizar(@PathVariable Long id, @RequestBody Certificado certificado) {
        return certificadoService.atualizar(id, certificado);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        certificadoService.deletar(id);
    }
}
