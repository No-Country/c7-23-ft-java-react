
package com.miturno.repositories;

import com.miturno.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Leonardo Terlizzi
 */

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    
}
