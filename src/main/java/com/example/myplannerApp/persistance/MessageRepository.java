package com.example.myplannerApp.persistance;

import org.apache.logging.log4j.message.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<Message, Integer> {
    // Additional custom queries can be defined here
}

