
package com.miturno.repositories;

import com.miturno.models.MonthCalendar;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Leonardo Terlizzi
 */
public interface MonthCalendarRepository extends JpaRepository<MonthCalendar, Long> {
    
    MonthCalendar findByDoctorId(Long doctor_id);
    
}
