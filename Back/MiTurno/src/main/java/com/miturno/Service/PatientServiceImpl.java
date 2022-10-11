package com.miturno.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Patient;

@Service
public class PatientServiceImpl implements PatientService{

    @Override
    public List<Patient> getPatients() throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Patient getPatient(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void savePatient(Patient patient) throws InvalidDoctorException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deletePatient(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void updatePatient(Patient patient) throws InvalidDoctorException {
        // TODO Auto-generated method stub
        
    }

    
}
