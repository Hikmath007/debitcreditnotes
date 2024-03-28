package com.debitnote.debitCredit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.debitnote.debitCredit.entity.InvoiceEntity;

@Repository 
public interface InvoiceRepo extends JpaRepository<InvoiceEntity, Long> {

}
