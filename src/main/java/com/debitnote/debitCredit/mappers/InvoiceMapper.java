package com.debitnote.debitCredit.mappers;

import org.mapstruct.Mapper;

import com.debitnote.debitCredit.dtos.InvoiceDto;
import com.debitnote.debitCredit.entity.InvoiceEntity;

@Mapper(componentModel="spring")
public interface InvoiceMapper extends EntityMapper<InvoiceDto, InvoiceEntity> {
	

}
