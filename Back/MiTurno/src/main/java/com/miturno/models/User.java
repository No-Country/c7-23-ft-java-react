package com.miturno.models;

import com.miturno.models.enums.DocumentType;
import com.miturno.models.enums.RoleEnum;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Data
@Table(name = "users")
@SQLDelete(sql = "UPDATE users SET deleted = true WHERE id=?")
@Where(clause = "deleted=false")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class User implements Serializable {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Name cannot be null")
//  @Column(length = 30, nullable = false)
    private String name;

    @NotBlank(message = "Lastname cannot be null")
//  @Column(length = 40, nullable = false)
    private String lastName;


    @NotNull(message = "DocumentType cannot be null")
    @Enumerated(value = EnumType.STRING)
    private DocumentType documentType;

    @NotNull(message = "Document cannot be null")
//  @Column(unique = true, nullable = false)
    private Long document;

    @Email(message = "Email should be valid")
//  @Column(nullable = false)
    private String email;

  @NotBlank(message = "Password cannot be null")
//  @Column(nullable = false)
    private String password;

//  @OneToOne(fetch = FetchType.EAGER)
    @OneToOne
    @JoinColumn(name = "role_id")
    private Role role;

    
    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp createAt;

    @UpdateTimestamp
    private Timestamp updateAt;

    private Boolean deleted = false;

}
