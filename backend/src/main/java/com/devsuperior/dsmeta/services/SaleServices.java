package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service //regista o SalesService como um componente do sistema
public class SaleServices {
// responsável por fazer operações de négocio com vendas.
	
	@Autowired // anotação que faz importação automática
	private SaleRepository repository;
	
	public List<Sale> findSales() {
	 return	repository.findAll();// busca no banco todas as vendas.
	}
}
