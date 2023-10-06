package com.example.myplannerApp.persistance;

import com.example.myplannerApp.domain.Manager;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ManagerRepository extends MongoRepository<Manager, Integer> {
    // Additional custom queries can be defined here
}