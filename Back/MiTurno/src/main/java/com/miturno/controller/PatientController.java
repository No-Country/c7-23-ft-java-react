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

import com.miturno.Service.PatientService;
import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Patient;


@RestController
public class PatientController {

    @Autowired
    private PatientService PatServ;

    @GetMapping("/patients")
    @ResponseBody
    public List<Patient> getPatients() throws NotFoundException{
        return PatServ.getPatients();        
    }

    @GetMapping("/patient")
    @ResponseBody
    public Patient getPatient(Long id) throws NotFoundException{
        return PatServ.getPatient(id);
    }

    @PostMapping("/auth/register")
    public void registerPatient(@RequestBody Patient patient) throws InvalidDoctorException{
        PatServ.savePatient(patient);
    }
    
    @DeleteMapping("/patient/delete")
    public void deletePatient(@RequestParam Long id) throws NotFoundException{
        PatServ.deletePatient(id);
    }
    
    @PatchMapping("/patient/update")
    public void updateDoctor(@RequestBody Patient patient, @RequestParam Long id) throws InvalidDoctorException{
        //Patient.setId(id); TIRA ERROR
        PatServ.updatePatient(patient);
    }



}
