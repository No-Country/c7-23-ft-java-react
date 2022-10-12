package com.miturno.Service;

import java.util.List;

import com.miturno.exceptions.InvalidSpecialityException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Speciality;

public interface SpecialityService {
    public List<Speciality> getSpecialtys() throws NotFoundException;

    public Speciality getSpecialty(Long id) throws NotFoundException;

    public void saveSpecialty(Speciality speciality) throws InvalidSpecialityException;

    public void deleteSpecialty(Long id) throws NotFoundException;

    public void updatePatient(Speciality speciality) throws InvalidSpecialityException;
}
