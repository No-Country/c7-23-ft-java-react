
package com.miturno.repositories;

import com.miturno.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Leonardo Terlizzi
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    
}
