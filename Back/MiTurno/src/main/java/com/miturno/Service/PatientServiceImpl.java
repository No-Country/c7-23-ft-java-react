package com.miturno.Service;

import java.util.List;

import com.miturno.exceptions.InvalidPatientException;
import org.springframework.stereotype.Service;

import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Patient;
import com.miturno.models.Turn;
import com.miturno.repositories.PatientRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PatientServiceImpl implements PatientService{
    
    @Autowired
    private PatientRepository patientRepo;

    @Override
    public List<Patient> getPatients() throws NotFoundException {
        return patientRepo.findAll();
    }

    @Override
    public Patient getPatient(Long id) throws NotFoundException {
        return patientRepo.findById(id).orElse(null);
    }

    @Override
    public void savePatient(Patient patient) throws InvalidPatientException {
        patientRepo.save(patient);
        
    }

    @Override
    public void deletePatient(Long id) throws NotFoundException {
        patientRepo.deleteById(id);
    }

    @Override
    public void updatePatient(Patient patient) throws InvalidPatientException {
        patientRepo.save(patient);
        
    }

    @Override
    public Patient getPatientByDocument(Long document) throws NotFoundException {
        return patientRepo.findByDocument(document);
    }

    @Override
    public Turn getLastTurnByDocument(Long document) throws NotFoundException {
        Patient patient = patientRepo.findByDocument(document);
        List<Turn> turnos = patient.getTurnos();
        return turnos.get(turnos.size() -1);
       
    }

    
}
