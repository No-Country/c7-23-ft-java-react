package com.miturno.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.miturno.exceptions.InvalidPatientException;
import com.miturno.mapper.PatientResponseMapper;
import com.miturno.models.Doctor;
import com.miturno.models.dto.DoctorResponse;
import com.miturno.models.dto.PatientResponse;
import org.springframework.stereotype.Service;

import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Patient;
import com.miturno.models.Turn;
import com.miturno.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PatientServiceImpl implements PatientService{
    
    @Autowired
    private PatientRepository patientRepo;
    @Autowired
    private PatientResponseMapper mapper;

    @Override
    public List<PatientResponse> getPatients() throws NotFoundException {
        Optional<List<Patient>> listPatientsOptional = Optional.ofNullable(patientRepo.findAll());
        List<PatientResponse> listPatientResponse = new ArrayList<>();
        if (listPatientsOptional.isPresent()){
            List<Patient> listPatient = listPatientsOptional.get();

            for (Patient patient : listPatient) {
                listPatientResponse.add(mapper.patientToPatientResponse(patient));
            }
            return listPatientResponse;
        }else {
            return listPatientResponse;
        }
    }

    @Override
    public Patient getPatient(Long id) throws NotFoundException {
        return patientRepo.findById(id).orElse(null);
    }

    @Override
    public void savePatient(Patient patient) throws InvalidPatientException {
        patientRepo.save(patient);
        
    }

    @Override
    public void deletePatient(Long id) throws NotFoundException {
        patientRepo.deleteById(id);
    }

    @Override
    public void updatePatient(Patient patient) throws InvalidPatientException {
        patientRepo.save(patient);
        
    }

    @Override
    public Patient getPatientByDocument(Long document) throws NotFoundException {
        return patientRepo.findByDocument(document);
    }

    @Override
    public Turn getLastTurnByDocument(Long document) throws NotFoundException {
        Patient patient = patientRepo.findByDocument(document);
        
        
        List<Turn> turns = patient.getTurns();
        if(turns != null){
                    return turns.get(turns.size() -1);

        }
        else{ 
        return (Turn) turns;}
       
    }

    
}
