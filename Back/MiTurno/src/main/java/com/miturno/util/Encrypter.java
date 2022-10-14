package com.miturno.util;

import com.miturno.models.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class Encrypter {

    public String EncrypterPassword (String password){
        return new BCryptPasswordEncoder().encode(password);
    }
}
