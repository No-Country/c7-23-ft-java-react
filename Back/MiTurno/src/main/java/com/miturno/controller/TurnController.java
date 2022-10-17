
package com.miturno.controller;

import com.miturno.Service.DoctorService;
import com.miturno.Service.PatientService;
import com.miturno.Service.TurnService;
import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.InvalidTurnException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;
import com.miturno.models.Patient;
import com.miturno.models.Turn;
import java.util.List;

import com.miturno.models.dto.TurnResponse;
import com.miturno.repositories.TurnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Leonardo Terlizzi
 */
@RestController
public class TurnController {
    
    @Autowired
    private TurnService turnServ;
    
    @Autowired
    private DoctorService docServ;
    
    @Autowired
    private PatientService patServ;

    @Autowired
    private TurnRepository turnRepo;
    
    @GetMapping("/turns")
    @ResponseBody
    public List<TurnResponse> getTurns() throws NotFoundException {
        return turnServ.getTurns();
    }
    
    @GetMapping("/turn/find")
    @ResponseBody
    public TurnResponse getTurn(@RequestParam Long id) throws NotFoundException {
        return turnServ.getTurn(id);
    }
    
    @PostMapping("/turn/new")
    public void saveTurn(@RequestBody Turn turn) throws InvalidTurnException {
        turnServ.saveTurn(turn);
    }
  
    @PostMapping("/calendar")
    public void saveCalendar(@RequestParam Long id, @RequestParam int year, @RequestParam int month) throws NotFoundException, InvalidDoctorException{
        Doctor doc = docServ.getDoctor(id);
        turnServ.flushTurns(doc, month, year);
    }
    
    @DeleteMapping("/turn/delete")
    public void deleteTurn(@RequestParam Long id) throws NotFoundException {
        turnServ.deleteTurn(id);
    }
    
    @PatchMapping("/turn/update")
    public void updateTurn(@RequestBody Turn turn, @RequestParam Long id) throws InvalidTurnException{
        turn.setId(id);
        turnServ.updateTurn(turn);
    }
    
    @PatchMapping("/turn/lock")
    public void lockTurn(@RequestParam Long id) throws NotFoundException, InvalidTurnException {
        Turn turn = turnRepo.getReferenceById(id);
        turnServ.lockTurn(turn);
    }
    
    @PostMapping("/turn/addpatient")
    public void addPatientToTurn(@RequestParam Long turn_id, @RequestParam Long patient_id) throws NotFoundException {
        Patient patient = patServ.getPatient(patient_id);
        Turn turn = turnRepo.getReferenceById(turn_id);
        turnServ.addPatientToTurn(patient, turn);       
    }
}
