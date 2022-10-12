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

import com.miturno.Service.SpecialityService;
import com.miturno.exceptions.InvalidSpecialityException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Speciality;

@RestController
public class SpecialtyController {
    
    @Autowired
    private SpecialityService SpeServ;

    @GetMapping("/specialties")
    @ResponseBody
    public List<Speciality> getSpecialtys() throws NotFoundException{
        return SpeServ.getSpecialtys();        
    }

    @GetMapping("/specialty")
    @ResponseBody
    public Speciality getSpecialty(Long id) throws NotFoundException{
        return SpeServ.getSpecialty(id);
    }

    @PostMapping("/specialty/register")
    public void registerSpecialty(@RequestBody Speciality speciality) throws InvalidSpecialityException {
        SpeServ.saveSpecialty(speciality);
    }
    
    @DeleteMapping("/specialty/delete")
    public void deleteSpecialty(@RequestParam Long id) throws NotFoundException{
        SpeServ.deleteSpecialty(id);
    }
    
    @PatchMapping("/speciality/update")
    public void updateSpecialty(@RequestBody Speciality speciality, @RequestParam Long id) throws InvalidSpecialityException {
        //SpeciaLty.setId(id); TIRA ERROR
        SpeServ.updatePatient(speciality);
    }

}
