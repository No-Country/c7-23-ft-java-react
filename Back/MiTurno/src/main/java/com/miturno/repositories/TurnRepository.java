
package com.miturno.repositories;

import com.miturno.models.Turn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Leonardo Terlizzi
 */

@Repository
public interface TurnRepository extends JpaRepository<Turn, Long> {
    
  //  Turn findByDocument(String document);
    
}
