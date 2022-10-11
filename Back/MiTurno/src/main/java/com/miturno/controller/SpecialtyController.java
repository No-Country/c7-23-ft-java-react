package com.miturno.controller;

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

import com.miturno.Service.SpecialtyService;
import com.miturno.exceptions.InvalidSpecialtyException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Specialty;

@RestController
public class SpecialtyController {
    
    @Autowired
    private SpecialtyService SpeServ;

    @GetMapping("/specialties")
    @ResponseBody
    public List<Specialty> getSpecialtys() throws NotFoundException{
        return SpeServ.getSpecialtys();        
    }

    @GetMapping("/specialty")
    @ResponseBody
    public Specialty getSpecialty(Long id) throws NotFoundException{
        return SpeServ.getSpecialty(id);
    }

    @PostMapping("/auth/register")
    public void registerSpecialty(@RequestBody Specialty specialty) throws InvalidSpecialtyException{
        SpeServ.saveSpecialty(specialty);
    }
    
    @DeleteMapping("/specialty/delete")
    public void deleteSpecialty(@RequestParam Long id) throws NotFoundException{
        SpeServ.deleteSpecialty(id);
    }
    
    @PatchMapping("/specialty/update")
    public void updateSpecialty(@RequestBody Specialty specialty, @RequestParam Long id) throws InvalidSpecialtyException{
        //SpeciaLty.setId(id); TIRA ERROR
        SpeServ.updatePatient(specialty);
    }

}
