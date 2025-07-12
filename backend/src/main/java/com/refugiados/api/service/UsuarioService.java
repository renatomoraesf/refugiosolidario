package com.refugiados.api.service;

import com.refugiados.api.model.Usuario;
import com.refugiados.api.repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional
    public Usuario criarUsuario(Usuario usuario) {
        // Em um cenário real, a senha deve ser criptografada antes de salvar
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    public Usuario buscarUsuarioPorId(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com id: " + id));
    }

    @Transactional
    public Usuario atualizarUsuario(Long id, Usuario usuarioAtualizado) {
        Usuario usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com id: " + id));

        usuarioExistente.setNome(usuarioAtualizado.getNome());
        usuarioExistente.setEmail(usuarioAtualizado.getEmail());
        
        usuarioExistente.setTipo(usuarioAtualizado.getTipo());
        usuarioExistente.setPaisOrigem(usuarioAtualizado.getPaisOrigem());
        usuarioExistente.setDataNascimento(usuarioAtualizado.getDataNascimento());
        usuarioExistente.setStatus(usuarioAtualizado.getStatus());
        usuarioExistente.setTelefone(usuarioAtualizado.getTelefone());
        usuarioExistente.setFormacaoAcademica(usuarioAtualizado.getFormacaoAcademica());
        usuarioExistente.setHabilidadesCompetencias(usuarioAtualizado.getHabilidadesCompetencias());

        return usuarioRepository.save(usuarioExistente);
    }

    @Transactional
    public void deletarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}