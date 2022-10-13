
package com.miturno.Service;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.InvalidTurnException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Doctor;
import com.miturno.models.Turn;
import java.util.List;

/**
 *
 * @author Leonardo Terlizzi
 */
public interface TurnService {
    
    public List<Turn> getTurns() throws NotFoundException;
    
    public Turn getTurn(Long id) throws NotFoundException;
    
    public void saveTurn(Turn turn) throws InvalidTurnException;
    
    public void deleteTurn(Long id) throws NotFoundException;
    
    public void updateTurn(Turn turn) throws InvalidTurnException;
    
    public void lockTurn(Turn turn) throws InvalidTurnException;
    
    public void flushTurns(Doctor doctor, int month, int year) throws InvalidDoctorException;
}
