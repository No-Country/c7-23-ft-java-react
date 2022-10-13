package com.miturno.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;
import com.miturno.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class DoctorServiceImpl implements DoctorService{
    
    @Autowired
    private DoctorRepository docRepo;

    @Override
    public List<Doctor> getDoctors() throws NotFoundException {
        return docRepo.findAll();
    }

    @Override
    public Doctor getDoctor(Long id) throws NotFoundException {
        return docRepo.findById(id).orElse(null);
    }

    @Override
    public void saveDoctor(Doctor doctor) throws InvalidDoctorException {
        docRepo.save(doctor);
    }

    @Override
    public void deleteDoctor(Long id) throws NotFoundException {
        docRepo.deleteById(id);
        
    }

    @Override
    public void updateDoctor(Doctor doctor) throws InvalidDoctorException {
        docRepo.save(doctor);
    }

    
}
