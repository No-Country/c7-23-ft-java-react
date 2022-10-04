
package com.miturno.repositories;

import com.miturno.models.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Leonardo Terlizzi
 */

@Repository
public interface SpecialtyRepository extends JpaRepository<Specialty, Long>{
    
}
