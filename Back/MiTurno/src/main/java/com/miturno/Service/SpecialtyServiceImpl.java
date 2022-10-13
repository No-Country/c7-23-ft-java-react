package com.miturno.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.miturno.exceptions.InvalidSpecialityException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Speciality;
import com.miturno.repositories.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class SpecialtyServiceImpl implements SpecialityService {

    @Autowired
    private SpecialityRepository specialityRepo;
    
    @Override
    public List<Speciality> getSpecialtys() throws NotFoundException {      
        return specialityRepo.findAll();
    }

    @Override
    public Speciality getSpecialty(Long id) throws NotFoundException {
        return specialityRepo.findById(id).orElse(null);
    }

    @Override
    public void saveSpecialty(Speciality speciality) throws InvalidSpecialityException {
        specialityRepo.save(speciality);
    }

    @Override
    public void deleteSpecialty(Long id) throws NotFoundException {
        specialityRepo.deleteById(id);
    }

    @Override
    public void updatePatient(Speciality speciality) throws InvalidSpecialityException {
        specialityRepo.save(speciality);
    }
    
}
