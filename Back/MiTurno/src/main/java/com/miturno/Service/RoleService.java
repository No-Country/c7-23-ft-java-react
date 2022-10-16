
package com.miturno.Service;

import com.miturno.exceptions.InvalidRoleException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Role;
import java.util.List;

/**
 *
 * @author Leonardo Terlizzi
 */
public interface RoleService {
    
    public List<Role> getRoles() throws NotFoundException;
    
    public Role getRole(Long id) throws NotFoundException;
    
    public void saveRole(Role role) throws InvalidRoleException;
    
    public void deleteRole(Long id) throws NotFoundException;
    
    public void updateRole(Role role, Long id) throws InvalidRoleException;
}
