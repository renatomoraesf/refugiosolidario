package com.refugiados.api.service;

import com.refugiados.api.model.Certificado;
import com.refugiados.api.repository.CertificadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CertificadoService {

    @Autowired
    private CertificadoRepository certificadoRepository;

    public List<Certificado> listarTodos() {
        return certificadoRepository.findAll();
    }

    public Optional<Certificado> buscarPorId(Long id) {
        return certificadoRepository.findById(id);
    }

    public Certificado salvar(Certificado certificado) {
        return certificadoRepository.save(certificado);
    }

    public Certificado atualizar(Long id, Certificado atualizado) {
        return certificadoRepository.findById(id).map(certificado -> {
            certificado.setNome(atualizado.getNome());
            certificado.setDataEmissao(atualizado.getDataEmissao());
            return certificadoRepository.save(certificado);
        }).orElse(null);
    }

    public void deletar(Long id) {
        certificadoRepository.deleteById(id);
    }
}
