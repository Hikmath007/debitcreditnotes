package com.debitnote.debitCredit.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.debitnote.debitCredit.dtos.InvoiceDto;
import com.debitnote.debitCredit.entity.InvoiceEntity;
import com.debitnote.debitCredit.services.InvoiceService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins="*") 
@RestController
@RequestMapping("creditdebit/api/v1/invoice")
public class InvoiceController {
	
	@Autowired
	private InvoiceService invoiceService;
	
	@PostMapping("/")
	public ResponseEntity<InvoiceDto> createInvoicedata(@RequestBody InvoiceDto invoiceDto){
	log.info("Received request to create Invoicedata: {}", invoiceDto);
    InvoiceDto createdinvoices= invoiceService.createInvoicedata(invoiceDto);
    return new ResponseEntity<>(createdinvoices,HttpStatus.CREATED);
  
	}
	@GetMapping
    public List<InvoiceEntity> getAllInvoices() {
		
        return invoiceService.getAllInvoices();
    }
	
	
	
	

}



