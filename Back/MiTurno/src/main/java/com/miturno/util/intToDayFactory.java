package com.miturno.util;

import java.time.DayOfWeek;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

@Service
public class intToDayFactory {
    
    public ArrayList<DayOfWeek> intToDayFactory(ArrayList<Integer> days){ 
      ArrayList<DayOfWeek> dias = new ArrayList<>();
        for(int i= 0; i < days.size(); i++) {
            dias.add(DayOfWeek.of(days.get(i)));
        }
        return dias;
    }
}
