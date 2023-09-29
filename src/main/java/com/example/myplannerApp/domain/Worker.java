package com.example.myplannerApp.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "workers")
public class Worker extends User{
    String available;
    List<String> skills;
}
