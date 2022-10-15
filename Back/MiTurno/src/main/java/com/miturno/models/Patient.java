package com.miturno.models;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.miturno.models.enums.DocumentType;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/**
 *
 * @author Leonardo Terlizzi
 */

@Entity
@Data
@Table(name = "patients")
//@SQLDelete(sql = "UPDATE patients SET deleted = true WHERE id=?")
//@Where(clause= "deleted=false")
public class Patient implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(length= 20, nullable=false)
    private String name;

    @Column(length= 30, nullable=false)
    private String last_name;
    
    @Enumerated(value = EnumType.STRING)
    private DocumentType documentType;
    
    @Column(unique = true, nullable = false)
    private Long document;
    
    @Column(length= 30, nullable=false)
    private String phone;
    
    @Column(length= 50, nullable=false)
    private String email;
    
    @Column(nullable=false)
    private boolean particular;
    
    @Column(length= 50, nullable=false)
    private String social_work;
    
    @Column(columnDefinition= "TEXT", length=5000)
    private String clinic_history;
    

    
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "turn_id", referencedColumnName = "id")
    @ElementCollection
    private List<Turn> turnos = new ArrayList<>();
    
    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp createAt;

    @UpdateTimestamp
    private Timestamp updateAt;

    private Boolean deleted = false;
    
}
