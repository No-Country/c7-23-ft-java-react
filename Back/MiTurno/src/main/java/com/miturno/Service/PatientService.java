package com.miturno.Service;

import java.util.List;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Patient;

public interface PatientService {

    public List<Patient> getPatients() throws NotFoundException;

    public Patient getPatient(Long id) throws NotFoundException;

    public void savePatient(Patient patient) throws InvalidDoctorException;

    public void deletePatient(Long id) throws NotFoundException;

    public void updatePatient(Patient patient) throws InvalidDoctorException;
    
}
