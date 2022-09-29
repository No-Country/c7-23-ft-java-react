/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nocountryc723.HomeBanking.Repositories;

import com.nocountryc723.HomeBanking.Models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Jorge
 */
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{
    
    
}
