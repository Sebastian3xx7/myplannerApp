package com.example.myplannerApp.persistance;

import com.example.myplannerApp.domain.Worker;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkerRepository extends MongoRepository<Worker, Integer> {
    // Additional custom queries can be defined here
}
