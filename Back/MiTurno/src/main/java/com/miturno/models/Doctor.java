package com.miturno.models;

import java.io.Serializable;
import java.sql.Timestamp;
<<<<<<< HEAD
import java.util.List;
//import java.util.List;

=======
>>>>>>> 89e237b8fae529ad03d7d18b8fdbe3444d01efbe
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
<<<<<<< HEAD
import javax.persistence.FetchType;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
//import javax.persistence.ManyToMany;
=======
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
>>>>>>> 89e237b8fae529ad03d7d18b8fdbe3444d01efbe
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//import java.util.List;
//import javax.persistence.DiscriminatorValue;
//import javax.persistence.FetchType;
//import javax.persistence.ManyToMany;
//import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author Jorge, Leonardo Terlizzi
 */

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "Doctors")
<<<<<<< HEAD
public class Doctor extends User  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Basic
	@Column(nullable = false)
	private java.time.LocalTime start_time;

	@Basic
	@Column(nullable = false)
	private java.time.LocalTime end_time;

	@Column(nullable = false)
	private List<Integer> atentionDays; // 0 lunes 1 martes 2 miercoles 3 jueves 4 viernes 5 sabado
        
        @Column(nullable = false)
        private List<Integer> atentionTurn; // 0 mañana 1 tarde
        
        @OneToMany(fetch = FetchType.LAZY)
        private List<Turn> turnos;

	private Boolean available;
	

	@OneToMany(fetch = FetchType.LAZY)
	private List<Speciality> specialties;
	
	@CreationTimestamp
        @Column(nullable = false, updatable = false)
        private Timestamp createAt;
        
        @UpdateTimestamp
        @Column(nullable = false)
        private Timestamp updateAt;
=======
public class Doctor extends User implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

    @Basic
    //@Column(nullable = false)
    private java.time.LocalTime start_time;

    @Basic
    //@Column(nullable = false)
    private java.time.LocalTime end_time;

    @Column(length = 10) //, nullable = false
    private String days;

    private Boolean available;

//  @JsonIgnore
//  @ManyToMany(fetch = FetchType.LAZY)
//  private List<Speciality> roles;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Timestamp createAt;

    @UpdateTimestamp
    @Column(nullable = false)
    private Timestamp updateAt;
    
>>>>>>> 89e237b8fae529ad03d7d18b8fdbe3444d01efbe
}
