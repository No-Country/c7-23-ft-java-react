
package com.miturno.controller;

import com.miturno.Service.RoleService;
import com.miturno.exceptions.InvalidRoleException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Role;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author maybechiapas
 */

@RestController
public class RoleController {
    
    @Autowired
    private RoleService roleServ;
    
    @GetMapping("(/roles")
    @ResponseBody
    public List<Role> getRoles() throws NotFoundException{
        return roleServ.getRoles();
    }
    
    @GetMapping("/rol")
    @ResponseBody
    public Role getRole(@RequestParam Long id) throws NotFoundException{
        return roleServ.getRole(id);
    }
    
    @PostMapping("/rol/new")
    public void saveRole(@RequestBody Role role) throws InvalidRoleException{
        roleServ.saveRole(role);
    }
    
    @DeleteMapping("/rol/delete")
    public void deleteRole(@RequestParam Long id) throws NotFoundException{
        roleServ.deleteRole(id);
    }
    
    @PatchMapping("/rol/update")
    public void updateRole(@RequestBody Role role, @RequestParam Long id) throws InvalidRoleException{
        roleServ.updateRole(role, id);
    }
    
}
