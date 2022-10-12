package com.miturno.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.miturno.exceptions.InvalidSpecialityException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Speciality;

@Service
public class SpecialtyServiceImpl implements SpecialityService {

    @Override
    public List<Speciality> getSpecialtys() throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Speciality getSpecialty(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void saveSpecialty(Speciality speciality) throws InvalidSpecialityException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteSpecialty(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void updatePatient(Speciality speciality) throws InvalidSpecialityException {
        // TODO Auto-generated method stub
        
    }
    
}
