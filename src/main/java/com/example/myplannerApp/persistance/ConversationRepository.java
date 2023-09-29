package com.example.myplannerApp.persistance;

import com.example.myplannerApp.domain.Conversation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConversationRepository extends MongoRepository<Conversation, Integer> {
    // Additional custom queries can be defined here
}

