
package com.miturno.repositories;

import com.miturno.models.Speciality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Leonardo Terlizzi
 */

@Repository
public interface SpecialityRepository extends JpaRepository<Speciality, Long>{
    
}
