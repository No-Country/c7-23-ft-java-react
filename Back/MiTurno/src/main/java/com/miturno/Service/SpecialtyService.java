package com.miturno.Service;

import java.util.List;

import com.miturno.exceptions.InvalidSpecialtyException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Specialty;

public interface SpecialtyService {
    public List<Specialty> getSpecialtys() throws NotFoundException;

    public Specialty getSpecialty(Long id) throws NotFoundException;

    public void saveSpecialty(Specialty specialty) throws InvalidSpecialtyException;

    public void deleteSpecialty(Long id) throws NotFoundException;

    public void updatePatient(Specialty specialty) throws InvalidSpecialtyException;
}
