package com.devsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;
//<Sale, Long> Sale= tipo da entidade , longo = Id
public interface SaleRepository extends JpaRepository<Sale, Long> {
// componente do sistema responsável por acessar o banco de dados.	
// salvar uma venda deletar buscar etc.	
	
	

}
