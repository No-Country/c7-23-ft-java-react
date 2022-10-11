package com.miturno.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.miturno.exceptions.InvalidSpecialtyException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Specialty;

@Service
public class SpecialtyServiceImpl implements SpecialtyService{

    @Override
    public List<Specialty> getSpecialtys() throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Specialty getSpecialty(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void saveSpecialty(Specialty specialty) throws InvalidSpecialtyException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteSpecialty(Long id) throws NotFoundException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void updatePatient(Specialty specialty) throws InvalidSpecialtyException {
        // TODO Auto-generated method stub
        
    }
    
}
