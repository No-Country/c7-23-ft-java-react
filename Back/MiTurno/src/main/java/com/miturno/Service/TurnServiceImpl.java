
package com.miturno.Service;

import com.miturno.exceptions.InvalidTurnException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Turn;
import com.miturno.repositories.TurnRepository;
import java.util.List;
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
    
    


    
}
