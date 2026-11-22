CREATE DATABASE IF NOT EXISTS achados_perdidos
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE achados_perdidos;

CREATE TABLE IF NOT EXISTS usuarios (
  id             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_usuario   VARCHAR(50)  NOT NULL,
  email          VARCHAR(255) NOT NULL,
  senha_hash     VARCHAR(255) NOT NULL,
  avatar_url     VARCHAR(255) NULL,
  perfil         ENUM('comum', 'admin')      NOT NULL DEFAULT 'comum',
  status         ENUM('ativo', 'desativado')  NOT NULL DEFAULT 'ativo',
  criado_em      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_usuarios_nome_usuario (nome_usuario),
  UNIQUE KEY uq_usuarios_email (email)
) ENGINE=InnoDB;