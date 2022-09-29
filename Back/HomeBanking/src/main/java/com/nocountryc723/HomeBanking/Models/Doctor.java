package com.nocountryc723.HomeBanking.Models;

import java.sql.Time;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Data;


/**
 *
 * @author Jorge
 */

@Entity
@Data
@Table(name = "Doctors")
public class Doctor /* extends User */{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Temporal(TemporalType.TIME)
    @Column(nullable = false)
    private Time start_time;
    
    @Temporal(TemporalType.TIME)
    @Column(nullable = false)
    private Time end_time;
    
    @Column(length = 10, nullable = false)
    private String days;
    
    private Boolean  available;
    
  //  @ManyToMany
  //  private Speciality speciality_id;

    
    
}
