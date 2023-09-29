package com.example.myplannerApp.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "assigners")
public class Assigner extends User{
   String currentlyWantedSkill;
}
