package com.debitnote.debitCredit.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class InvoiceDto {
	
	private Long id;
	
	private Long vendorCode;
	
	
	private String SupplementaryInvoiceNo;
	
   
  
   private String poNumber;
   
  
   private String materialCode;
   
   
   private String grnNumber;
   
  
   private Date invoiceDate;
   
   
   private Date grnDate;
   
   
   private Long quantity;
   
   
   private Long oldRate;
   
   
   private Long newRate;
   
  
   private Long difference;
   
   private Long totalPrice;
   
   private String status;

}
