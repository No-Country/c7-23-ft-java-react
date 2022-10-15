
package com.miturno.Service;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.InvalidTurnException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;
import com.miturno.models.Turn;
import com.miturno.repositories.TurnRepository;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leonardo Terlizzi
 */
@Service
public class TurnServiceImpl implements TurnService{
    
    @Autowired
    private TurnRepository turnRepo;


    @Override
    public List<Turn> getTurns() throws NotFoundException {
        return  turnRepo.findAll();
    }

    @Override
    public Turn getTurn(Long id) throws NotFoundException {
        return turnRepo.findById(id).orElse(null);
    }

    @Override
    public void saveTurn(Turn turn) throws InvalidTurnException {
        turnRepo.save(turn);

    }

    @Override
    public void deleteTurn(Long id) throws NotFoundException {
        turnRepo.deleteById(id);
        
    }

    @Override
    public void updateTurn(Turn turn) throws InvalidTurnException {
        turnRepo.save(turn);
    }

    @Override
    public void lockTurn(Turn turn) throws InvalidTurnException {
        if(turn.getAvaible() && turn.getLocked()) {
           turn.setLocked(Boolean.TRUE);
           turnRepo.save(turn);
        }
        if(turn.getAvaible() && !turn.getLocked()) {
           turn.setLocked(Boolean.FALSE);
           turnRepo.save(turn);
        }
        
    }

    @Override
    public void flushTurns(Doctor doctor, int month, int year) throws InvalidDoctorException {
        //LocalDate firstDay = LocalDate.of(year, month, 1);
        LocalDate lastDay;
        if(month != 12) {
            lastDay = LocalDate.of(year, month+1, 1);
        }
        else {
            lastDay = LocalDate.of(year+1, 1, 1);
        }
        List<DayOfWeek> dias = doctor.getAttentionDays();
        ArrayList<LocalDate> diasLaborablesDelMes = new ArrayList<>();
        
        //agrega dias al array diasLaborablesDelMes segun los dias que trabaje el médico
        for(LocalDate firstDay = LocalDate.of(year, month, 1); firstDay.isBefore(lastDay); firstDay = firstDay.plusDays(1)){
            if(dias.contains(firstDay.getDayOfWeek())) {
                diasLaborablesDelMes.add(firstDay);
            }
        }
        
        //Con el calendario armado según los días que trabaje el médico, según el turno (Mañana o tarde,
        //asigna turnos vacíos disponibles cada 30 minutos a ese médico
        
        //Turno mañana
        if(doctor.getAttentionTurn().contains(1)){
            LocalTime lastTurn = LocalTime.of(13, 30);
            for(int i = 0; i < diasLaborablesDelMes.size(); i++) {
                for(LocalTime firstTurn = LocalTime.of(8, 0); firstTurn.isBefore(lastTurn); firstTurn = firstTurn.plusMinutes(30)){
                Turn turno = new Turn();
                turno.setDoctor(doctor);
                turno.setAvaible(Boolean.TRUE);
                turno.setLocked(Boolean.FALSE);
                turno.setDay(diasLaborablesDelMes.get(i));
                turno.setHora(firstTurn);
                turnRepo.save(turno);
                }
            }
        }
        
        //Turno Tarde
        
         if(doctor.getAttentionTurn().contains(2)){
            LocalTime lastTurn = LocalTime.of(20, 30);
            for(int i = 0; i < diasLaborablesDelMes.size(); i++) {
                for(LocalTime firstTurn = LocalTime.of(14, 0); firstTurn.isBefore(lastTurn); firstTurn = firstTurn.plusMinutes(30)){
                Turn turno = new Turn();
                turno.setDoctor(doctor);
                turno.setAvaible(Boolean.TRUE);
                turno.setLocked(Boolean.FALSE);
                turno.setDay(diasLaborablesDelMes.get(i));
                turno.setHora(firstTurn);
                turnRepo.save(turno);
                }
            }
        }
    }
    
    
    
    


    
}


