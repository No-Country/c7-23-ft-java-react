package com.miturno.models;

import java.sql.Timestamp;
import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/**
 *
 * @author Jorge, Leonardo Terlizzi
 */

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "Doctors")
public class Doctor extends User  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

//	@Basic
//	@Column(nullable = false)
//	private java.time.LocalTime start_time;
//
//	@Basic
//	@Column(nullable = false)
//	private java.time.LocalTime end_time;

	//@Column(nullable = false)
        @ElementCollection(targetClass=DayOfWeek.class)
	private List<DayOfWeek> attentionDays = new ArrayList<>(); // 0 lunes 1 martes 2 miercoles 3 jueves 4 viernes 5 sabado
        
        //@Column(nullable = false)
        @ElementCollection(targetClass=Integer.class)
        private List<Integer> attentionTurn = new ArrayList<>(); // 1 mañana (8 a 13), 2 tarde (14 a 20)
        
        @OneToMany(fetch = FetchType.LAZY)
        private List<Turn> turns = new ArrayList<>();

	private Boolean available;
	

	@OneToMany(fetch = FetchType.LAZY)
	private List<Speciality> specialties = new ArrayList<>();
	
	@CreationTimestamp
        @Column(nullable = false, updatable = false)
        private Timestamp createAt;
        
        @UpdateTimestamp
        @Column(nullable = false)
        private Timestamp updateAt;

}
