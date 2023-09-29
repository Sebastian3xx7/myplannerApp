package com.example.myplannerApp.persistance;

import com.example.myplannerApp.domain.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, Integer> {
    // Additional custom queries can be defined here
}

