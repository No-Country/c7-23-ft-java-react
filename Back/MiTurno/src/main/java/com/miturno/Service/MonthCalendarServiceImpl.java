
package com.miturno.Service;

import com.miturno.models.MonthCalendar;
import com.miturno.repositories.MonthCalendarRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leonardo Terlizzi
 */

@Service
public class MonthCalendarServiceImpl implements MonthCalendarService {

    @Autowired
    private MonthCalendarRepository calendarRepo;
    
    @Override
    public List<MonthCalendar> getCalendars() {
        return calendarRepo.findAll();
    }

    @Override
    public List<MonthCalendar> getCalendarsByDoctorId(Long id) {
        return (List<MonthCalendar>) calendarRepo.findByDoctorId(id);
    }

    @Override
    public void saveCalendar(MonthCalendar calendar) {
        calendarRepo.save(calendar);
    }

    @Override
    public void deleteCalendar(Long id) {
        calendarRepo.deleteById(id);
    }

    @Override
    public void updateCalendar(MonthCalendar calendar) {
        calendarRepo.save(calendar);
    }
    
}
