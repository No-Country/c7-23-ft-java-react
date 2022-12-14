package com.miturno.Service;

import java.util.ArrayList;
import java.util.List;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;
import com.miturno.models.dto.DoctorResponse;
import com.sun.corba.se.impl.protocol.RequestCanceledException;

public interface DoctorService {

    public List<DoctorResponse> getDoctors() throws NotFoundException;

    public DoctorResponse getDoctor(Long id) throws NotFoundException;
    
    public Doctor getDoctorById(Long id) throws NotFoundException;

    public void saveDoctor(Doctor doctor) throws InvalidDoctorException;

    public void deleteDoctor(Long id) throws NotFoundException;

    public void updateDoctor(Doctor doctor) throws InvalidDoctorException, InvalidUserException;

    public void registerDoctor(Doctor Doctor, ArrayList<Integer> days) throws InvalidDoctorException, InvalidUserException;

    public Doctor validationDoctor(Doctor doctor) throws InvalidUserException, NotFoundException, RequestCanceledException;

}


