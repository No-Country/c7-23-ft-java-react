/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miturno.models;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.miturno.models.enums.RoleEnum;

import lombok.Data;

/**
 *
 * @author Jorge
 */
@Entity
@Data
public class Role {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private RoleEnum role;
    
    @Column(nullable = false)
    private String description;
    
    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp createAt;

    @UpdateTimestamp
    private Timestamp updateAt;
}
