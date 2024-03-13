package com.debitnote.debitCredit.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.debitnote.debitCredit.dtos.InvoiceDto;
import com.debitnote.debitCredit.entity.InvoiceEntity;
import com.debitnote.debitCredit.mappers.InvoiceMapper;
import com.debitnote.debitCredit.repositories.InvoiceRepo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class InvoiceService {
	
	@Autowired
	private InvoiceRepo invoiceRepo;
	
	@Autowired
	private InvoiceMapper invoiceMapper;
	
	public InvoiceDto createInvoicedata(InvoiceDto invoiceDto){
		log.info("Creating Invoices for vendor: {}", invoiceDto);
		InvoiceEntity invoiceEntity = invoiceMapper.toEntity(invoiceDto);
		
		InvoiceEntity savedInvoice= invoiceRepo.save(invoiceEntity);
		log.info("Saving Invoices details: {}", invoiceEntity);
		
		
		return invoiceMapper.toDto(savedInvoice);
		}
	
	public List<InvoiceEntity> getAllInvoices() {	
		return invoiceRepo.findAll();
	}
	
	
	
	}
  

	 


