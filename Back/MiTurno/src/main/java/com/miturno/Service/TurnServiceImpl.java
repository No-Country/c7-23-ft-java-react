
package com.miturno.Service;

import com.miturno.exceptions.InvalidDoctorException;
import com.miturno.exceptions.InvalidTurnException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.mapper.TurnResponseMapper;
import com.miturno.models.*;
import com.miturno.models.dto.TurnResponse;
import com.miturno.repositories.TurnRepository;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
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

    @Autowired
    private MonthCalendarService calendarServ;

    @Autowired
    private TurnResponseMapper mapper;
    
    @Autowired
    private PatientService patServ;
    
    @Autowired
    private DoctorService docServ;

    @Override
    public List<TurnResponse> getTurns() throws NotFoundException {
        Optional<List<Turn>> listTurnsOptional = Optional.ofNullable(turnRepo.findAll());
        List<TurnResponse> listTurnResponse = new ArrayList<>();
        if (listTurnsOptional.isPresent()){
            List<Turn> listTurn = listTurnsOptional.get();

            for (Turn turn : listTurn) {
                listTurnResponse.add(mapper.turnToTurnResponse(turn));
            }
            return listTurnResponse;
        }else {
            return listTurnResponse;
        }
    }

    @Override
    public TurnResponse getTurn(Long id) throws NotFoundException {
        Optional<Turn> response = turnRepo.findById(id);
        
        if (response.isPresent()){
            TurnResponse turnResponse = mapper.turnToTurnResponse(response.get());
            return turnResponse;
        }else {
            return mapper.turnToTurnResponse(response.get());
        }
    }

    @Override
    public Turn getTurnById(Long id) throws NotFoundException {
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
    public void updateTurn(TurnResponse turn) throws InvalidTurnException, NotFoundException {
        Turn turno = new Turn();
        turno.setId(turn.getIdTurn());
        turno.setPatient(patServ.getPatientById(turn.getIdPatient()));
        turno.setDay(turn.getDay());
        turno.setHora(turn.getHora());
        turno.setDoctor(docServ.getDoctorById(turn.getIdDoctor()));
        //Turn turno = mapper.TurnResponseToTurn(turn);
        turnRepo.save(turno);
    }

    @Override
    public void lockTurn(Turn turn) throws InvalidTurnException {
        if(turn.getAvailable() && turn.getLocked()) {
           turn.setLocked(Boolean.TRUE);
           turnRepo.save(turn);
        }
        if(turn.getAvailable() && !turn.getLocked()) {
           turn.setLocked(Boolean.FALSE);
           turnRepo.save(turn);
        }

    }

    @Override
    public void addPatientToTurn(Patient patient, Turn turn) throws NotFoundException {
        turn.setPatient(patient);
        turnRepo.save(turn);
    }





    //metodos de calendario

    //metodos de calendario

    public Boolean calendarChecker(List<MonthCalendar> calendars, int year, int month) {
        if(calendars != null ) {
              for(MonthCalendar calendar: calendars) {
            if (calendar.getAnio() == year && calendar.getMes() == month){
                return true;
            }

        }
              
        }
        else return false;
        return false;
    }

    public ArrayList<LocalDate> addDiasLaboralesDelmes(Doctor doctor, int year, int month) {

        LocalDate lastDay;
        if(month != 12) {
            lastDay = LocalDate.of(year, month+1, 1);
        }
        else {
            lastDay = LocalDate.of(year+1, 1, 1);
        }
        List<DayOfWeek> dias = doctor.getAttentionDays();
        ArrayList<LocalDate> diasLaborablesDelMes = new ArrayList<>();

        //agrega dias al array diasLaborablesDelMes segun los dias que trabaje el m??dico
        for(LocalDate firstDay = LocalDate.of(year, month, 1); firstDay.isBefore(lastDay); firstDay = firstDay.plusDays(1)){
            if(dias.contains(firstDay.getDayOfWeek())) {
                diasLaborablesDelMes.add(firstDay);
            }
        }
        return diasLaborablesDelMes;
    }
    
    public List<MonthCalendar> getCalendarsByDoc(List<MonthCalendar> calendars, Long doc_id){
        List<MonthCalendar> calendarsReturn = new ArrayList<>();
        for(MonthCalendar calendar: calendars) {
            if(calendar.getDoctor().getId() == doc_id) {
                calendarsReturn.add(calendar);
            }
        
        }
        return calendarsReturn;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void flushTurns(Doctor doctor, int month, int year) throws InvalidDoctorException {
        Long doc_id = doctor.getId();
        List<MonthCalendar> calendars = new ArrayList<>();
        List<MonthCalendar> calendarsByDoc = new ArrayList<>();
        calendars = calendarServ.getCalendars();
        calendarsByDoc = getCalendarsByDoc(calendars, doc_id);
       
        Boolean alreadyDone = calendarChecker(calendarsByDoc, year, month);

        if(!alreadyDone) {
            ArrayList<LocalDate> diasLaborablesDelMes = addDiasLaboralesDelmes(doctor, year, month);


            //Con el calendario armado seg??n los d??as que trabaje el m??dico, seg??n el turno (Ma??ana o tarde,
            //asigna turnos vac??os disponibles cada 30 minutos a ese m??dico

            //Turno ma??ana
            if(doctor.getAttentionTurn().contains(1)){
                LocalTime lastTurn = LocalTime.of(13, 30);
                for(int i = 0; i < diasLaborablesDelMes.size(); i++) {
                    for(LocalTime firstTurn = LocalTime.of(8, 0); firstTurn.isBefore(lastTurn); firstTurn = firstTurn.plusMinutes(30)){
                        Turn turn = new Turn();
                        turn.setDoctor(doctor);
                        turn.setAvailable(Boolean.TRUE);
                        turn.setLocked(Boolean.FALSE);
                        turn.setDay(diasLaborablesDelMes.get(i));
                        turn.setHora(firstTurn);
                        turnRepo.save(turn);
                    }
                }
                 MonthCalendar calendar = new MonthCalendar();
                 calendar.setAnio(year);
                 calendar.setDoctor(doctor);
                 calendar.setMes(month);
                 calendarServ.saveCalendar(calendar);
            }

            //Turno Tarde

            if(doctor.getAttentionTurn().contains(2)){
                LocalTime lastTurn = LocalTime.of(20, 30);
                for(int i = 0; i < diasLaborablesDelMes.size(); i++) {
                    for(LocalTime firstTurn = LocalTime.of(14, 0); firstTurn.isBefore(lastTurn); firstTurn = firstTurn.plusMinutes(30)){
                        Turn turn = new Turn();
                        turn.setDoctor(doctor);
                        turn.setAvailable(Boolean.TRUE);
                        turn.setLocked(Boolean.FALSE);
                        turn.setDay(diasLaborablesDelMes.get(i));
                        turn.setHora(firstTurn);
                        turnRepo.save(turn);
                    }
                }
                 MonthCalendar calendar = new MonthCalendar();
                 calendar.setAnio(year);
                 calendar.setDoctor(doctor);
                 calendar.setMes(month);
                 calendarServ.saveCalendar(calendar);
            }
           
        }

    }



}

