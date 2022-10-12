package com.miturno.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;

@Service
public class DoctorServiceImpl implements DoctorService{

    @Override
    public List<Doctor> getDoctors() throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Doctor getDoctor(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void saveDoctor(Doctor doctor) throws InvalidDoctorException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteDoctor(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void updateDoctor(Doctor doctor) throws InvalidDoctorException {
        // TODO Auto-generated method stub
        
    }

    
}
