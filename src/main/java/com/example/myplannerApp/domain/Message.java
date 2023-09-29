package com.example.myplannerApp.domain;


import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "messages")
public class Message {
    String id;
    String content;
    String idSender;
    String idReceiver;
    Date timeStamp;
    String idConversation;
}
