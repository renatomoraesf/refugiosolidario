package com.refugiados.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.refugiados.api.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Aqui você pode colocar métodos personalizados se quiser, como buscar por email
    Usuario findByEmail(String email);
}
