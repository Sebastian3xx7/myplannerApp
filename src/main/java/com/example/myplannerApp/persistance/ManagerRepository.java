package com.example.myplannerApp.persistance;

import com.example.myplannerApp.domain.Manager;
import com.example.myplannerApp.domain.Manager2;
import com.example.myplannerApp.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface ManagerRepository extends MongoRepository<Manager2, String> {

    Optional<Manager2> findByUsernameAndPassword(String username, String password);
//    @Query("{'_id':  ?0}")
//    Optional<Manager> findById(String id);
    // Additional custom queries can be defined here
}