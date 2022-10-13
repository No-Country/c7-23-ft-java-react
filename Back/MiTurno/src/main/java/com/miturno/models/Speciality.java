
package com.miturno.models;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "specialties")
//@SQLDelete(sql = "UPDATE specialties SET deleted = true WHERE id=?")
//@Where(clause= "deleted=false")
public class Speciality implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    
    @Column(length = 30, nullable = false)
    private String name;
  
    //@OneToOne(fetch = FetchType.LAZY)
    //private Doctor doctor_id;
    
  
    
}
