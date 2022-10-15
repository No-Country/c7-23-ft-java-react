package com.miturno.Service;

import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.models.User;
import com.miturno.util.Encrypter;
import com.miturno.util.Validation;
import com.sun.corba.se.impl.protocol.RequestCanceledException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;
import com.miturno.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

@Service
public class DoctorServiceImpl implements DoctorService{
    
    @Autowired
    private DoctorRepository docRepo;

    @Autowired
    private Encrypter encrypter;

    @Autowired
    private Validation validation;

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

    @Override
    public void registerDoctor(Doctor doctor, ArrayList<Integer> days) throws InvalidDoctorException, InvalidUserException {

        validation.validationEmail(doctor.getEmail());
        validation.validationDocument(doctor.getDocument());

        // Esto pasalo donde quieras
        ArrayList<DayOfWeek> dias = new ArrayList<>();
        for(int i= 0; i < days.size(); i++) {
            dias.add(DayOfWeek.of(days.get(i)));
        }
        doctor.setAttentionDays(dias);
        doctor.setPassword(encrypter.EncrypterPassword(doctor.getPassword()));
        saveDoctor(doctor);
    }

    @Override
    public  Doctor validationDoctor(Doctor doctor) throws InvalidUserException, NotFoundException, RequestCanceledException {
        Optional<Doctor> response = Optional.ofNullable(docRepo.findByDocument(doctor.getDocument()));
        if (response.isPresent()) {
            Doctor repoDoctor = response.get();
            if (new BCryptPasswordEncoder().matches(repoDoctor.getPassword(), repoDoctor.getPassword())){
                return repoDoctor;
            } else {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect password");
            }
        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Document no exist");
    }


}
