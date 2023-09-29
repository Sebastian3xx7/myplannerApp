package com.example.myplannerApp.persistance;

import com.example.myplannerApp.domain.Assigner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssignerRepository extends MongoRepository<Assigner, Integer> {
    // Additional custom queries can be defined here
}