
package com.miturno.controller;

import com.miturno.Service.TurnService;
import com.miturno.exceptions.InvalidTurnException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Turn;
import java.util.List;
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
    
    @GetMapping("/turns")
    @ResponseBody
    public List<Turn> getTurns() throws NotFoundException {
        return turnServ.getTurns();
    }
    
    @GetMapping("/turn/find")
    @ResponseBody
    public Turn getTurn(@RequestParam Long id) throws NotFoundException {
        return turnServ.getTurn(id);
    }
    
    @PostMapping("/turn/new")
    public void saveTurn(@RequestBody Turn turn) throws InvalidTurnException {
        turnServ.saveTurn(turn);
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
    
}