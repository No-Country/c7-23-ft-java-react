
package com.miturno.Service;

import com.miturno.exceptions.InvalidRoleException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Role;
import com.miturno.repositories.RoleRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leonardo Terlizzi
 */

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepo;
    
    
    @Override
    public List<Role> getRoles() throws NotFoundException {
        return  roleRepo.findAll();
    }

    @Override
    public Role getRole(Long id) throws NotFoundException {
        return roleRepo.findById(id).orElse(null);
    }

    @Override
    public void saveRole(Role role) throws InvalidRoleException {
        roleRepo.save(role);
    }

    @Override
    public void deleteRole(Long id) throws NotFoundException {
        roleRepo.deleteById(id);
    }

    @Override
    public void updateRole(Role role, Long id) throws InvalidRoleException {
        role.setId(id);
        roleRepo.save(role);
    }
    
}
