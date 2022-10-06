/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miturno.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miturno.models.Doctor;

/**
 *
 * @author Jorge
 */
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{
    
    
}
