package com.miturno.controller;

import java.util.List;

import com.miturno.exceptions.InvalidPatientException;
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
import com.miturno.models.Turn;


@RestController
public class PatientController {

    @Autowired
    private PatientService patServ;

    @GetMapping("/patients")
    @ResponseBody
    public List<Patient> getPatients() throws NotFoundException{
        return patServ.getPatients();        
    }

    @GetMapping("/patient")
    @ResponseBody
    public Patient getPatient(@RequestParam Long id) throws NotFoundException{
        return patServ.getPatient(id);
    }
    
    @GetMapping("/patientByDocument")
    @ResponseBody
    public Patient getPatientByDocument(@RequestParam Long document) throws NotFoundException {
        return patServ.getPatientByDocument(document);
    }
    
    @GetMapping("/turnByDocument")
    @ResponseBody
    public Turn getTurnByPatientDocument(@RequestParam Long document) throws NotFoundException{
        return patServ.getLastTurnByDocument(document);
    }

    @PostMapping("/patient/register")
    public void registerPatient(@RequestBody Patient patient) throws InvalidPatientException {
        patServ.savePatient(patient);
    }
    
    @DeleteMapping("/patient/delete")
    public void deletePatient(@RequestParam Long id) throws NotFoundException{
        patServ.deletePatient(id);
    }
    
    @PatchMapping("/patient/update")
    public void updateDoctor(@RequestBody Patient patient, @RequestParam Long id) throws InvalidPatientException{
        patient.setId(id);
        patServ.updatePatient(patient);
    }
}
