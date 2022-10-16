package com.miturno.Service;

import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.mapper.DoctorResponseMapper;
import com.miturno.models.dto.DoctorResponse;
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
import com.miturno.util.intToDayFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;

@Service
public class DoctorServiceImpl implements DoctorService{
    
    @Autowired
    private DoctorRepository docRepo;

    @Autowired
    private Encrypter encrypter;

    @Autowired
    private Validation validation;
    
    @Autowired
    private intToDayFactory intToDayFactory;

    @Autowired
    private DoctorResponseMapper mapper;

    @Override
    public List<DoctorResponse> getDoctors() throws NotFoundException {

        Optional<List<Doctor>> listDoctorsOptional = Optional.ofNullable(docRepo.findAll());
        List<DoctorResponse> listDoctorResponse = new ArrayList<>();
        if (listDoctorsOptional.isPresent()){
            List<Doctor> listDoctor = listDoctorsOptional.get();

            for (Doctor doctor : listDoctor) {
                listDoctorResponse.add(mapper.doctorToDoctorResponse(doctor));
            }
            return listDoctorResponse;
        }else {
            return listDoctorResponse;
        }
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
  //      ArrayList<DayOfWeek> dias = intToDayFactory.intToDayFactory(days);
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
