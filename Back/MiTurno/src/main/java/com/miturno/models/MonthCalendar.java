
package com.miturno.models;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/**
 *
 * @author Leonardo Terlizzi
 */
@Entity
@Data

public class MonthCalendar {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    private Doctor doctor;
    
    private int mes;
    
    private int anio;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Timestamp createAt;
        
    @UpdateTimestamp
    @Column(nullable = false)
    private Timestamp updateAt;
    
}
