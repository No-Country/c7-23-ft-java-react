package com.miturno.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miturno.models.User;

@Repository
public interface UserRepository extends  JpaRepository<User, Long>{

}
