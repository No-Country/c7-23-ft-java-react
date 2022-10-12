package com.miturno.Service;

import java.util.List;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;

public interface DoctorService {

    public List<Doctor> getDoctors() throws NotFoundException;

    public Doctor getDoctor(Long id) throws NotFoundException;

    public void saveDoctor(Doctor doctor) throws InvalidDoctorException;

    public void deleteDoctor(Long id) throws NotFoundException;

    public void updateDoctor(Doctor doctor) throws InvalidDoctorException;
    
}
