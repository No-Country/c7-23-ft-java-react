
package com.miturno.Service;

import com.miturno.models.MonthCalendar;
import java.util.List;

/**
 *
 * @author Leonardo Terlizzi
 */
public interface MonthCalendarService {
    
    public List<MonthCalendar> getCalendars();
    
    public List<MonthCalendar> getCalendarsByDoctorId(Long id);
    
    public void saveCalendar(MonthCalendar calendar);
    
    public void deleteCalendar(Long id);
    
    public void updateCalendar(MonthCalendar calendar);
    
}
