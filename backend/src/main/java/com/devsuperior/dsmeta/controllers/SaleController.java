package com.devsuperior.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleServices;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleServices service;
	
	@GetMapping // conecta com o HTTP
	//Page<Sale> findSales(Pageable pageable) retorna ás primeiras 20 vendas ou resultado páginado
	public Page<Sale> findSales(
		@RequestParam(value="minDate", defaultValue = "") String minDate, 
		@RequestParam(value="maxDate", defaultValue = "") String maxDate ,
			Pageable pageable){
		return service.findSales(minDate, maxDate, pageable);
	}
}
