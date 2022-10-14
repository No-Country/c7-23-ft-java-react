package com.miturno.controller;

import java.util.List;

import com.miturno.exceptions.InvalidUserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.miturno.Service.DoctorService;
import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;
import java.sql.Array;
import java.time.DayOfWeek;
import java.util.ArrayList;

@RestController
public class DoctorController {
    
    @Autowired
    private DoctorService docServ;

    @GetMapping("/doctors")
    @ResponseBody
    public List<Doctor> getDoctors() throws NotFoundException{
        return docServ.getDoctors();        
    }

    @GetMapping("/doctor")
    @ResponseBody
    public Doctor getDoctor(Long id) throws NotFoundException{
        return docServ.getDoctor(id);
    }

    @PostMapping("/doctor/register")
    public void registerDoctor(@RequestBody Doctor doctor, @RequestParam ArrayList<Integer> days) throws InvalidDoctorException, InvalidUserException {
        docServ.registerDoctor(doctor, days);
    }
    
    @DeleteMapping("/doctor/delete")
    public void deleteDoctor(@RequestParam Long id) throws NotFoundException{
        docServ.deleteDoctor(id);
    }
    
    @PatchMapping("/doctor/update")
    public void updateDoctor(@RequestBody Doctor doctor, @RequestParam Long id) throws InvalidDoctorException{
        doctor.setId(id);
        docServ.updateDoctor(doctor);
    }

}
