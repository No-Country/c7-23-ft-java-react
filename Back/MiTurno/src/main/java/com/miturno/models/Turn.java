
package com.miturno.models;

import java.time.LocalDate;
import java.time.LocalTime;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

/**
 *
 * @author Leonardo Terlizzi
 */

@Entity
@Data
@Table(name="Turns")
@SQLDelete(sql = "UPDATE turns SET deleted = true WHERE id=?")
@Where(clause= "deleted=false")
public class Turn {
    
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    private Long id;
    
    @Column(nullable=false)
    private LocalDate day;
    
    @Column(nullable=false)
    private LocalTime hora;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    private Patient patient;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
    private Doctor doctor;

    public Turn(Long id, LocalDate day, LocalTime hora, Patient patient, Doctor doctor) {
        this.id = id;
        this.day = day;
        this.hora = hora;
        this.patient = patient;
        this.doctor = doctor;
    }
    
    
    
    
    
    
}
