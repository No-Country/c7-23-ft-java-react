package com.miturno.Service;

import java.util.List;

import com.miturno.exceptions.InvalidPatientException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Patient;
import com.miturno.models.Turn;
import com.miturno.models.dto.PatientResponse;

public interface PatientService {

    public List<PatientResponse> getPatients() throws NotFoundException;

    public Patient getPatient(Long id) throws NotFoundException;
    
    public Patient getPatientByDocument(Long document) throws NotFoundException;
    
    public Turn getLastTurnByDocument(Long document) throws NotFoundException;

    public void savePatient(Patient patient) throws InvalidPatientException;

    public void deletePatient(Long id) throws NotFoundException;

    public void updatePatient(Patient patient) throws InvalidPatientException;
    
}
