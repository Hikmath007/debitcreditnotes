package com.debitnote.debitCredit.entity;
import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Invoices")
public class InvoiceEntity {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
     private Long id;
	
	 @Column(name="VendorCode")
	private Long vendorCode;
	
	@Column(name ="S_InvoiceNo")
	private String SupplementaryInvoiceNo;
	
    
    @Column(name="PO_NO")
    private String poNumber;
    
    @Column(name="MaterialCode")
    private String materialCode;
    
    @Column(name="GRN_NO")
    private String grnNumber;
    
    @Column(name ="InvoiceDate")
    private Date invoiceDate;
    
    @Column(name ="GRNDATE")
    private Date grnDate;
    
    @Column(name ="Quantity")
    private Long quantity;
    
    @Column(name ="OldRate")
    private Long oldRate;
    
    @Column(name ="NewRate")
    private Long newRate;
    
    @Column(name ="Difference")
    private Long difference;
    
    @Column(name ="TotalPrice")
    private Long totalPrice;
    
    @Column(name="Status")
    private String status;

}
