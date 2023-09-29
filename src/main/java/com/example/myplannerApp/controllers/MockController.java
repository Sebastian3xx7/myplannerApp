package com.example.myplannerApp.controllers;

import com.example.myplannerApp.domain.Assigner;
import com.example.myplannerApp.domain.User;
import com.example.myplannerApp.domain.Worker;
import com.example.myplannerApp.persistance.AssignerRepository;
import com.example.myplannerApp.persistance.UserRepository;
import com.example.myplannerApp.persistance.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class MockController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WorkerRepository workerRepository;
    @Autowired
    private AssignerRepository assignerRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        // Retrieve all users from the MongoDB collection
        List<User> users = userRepository.findAll();

        // Map the User objects to UserDTO for JSON serialization

        return users.stream()
                .map(user -> new User(user.getId(), user.getUsername(), user.getEmail(), user.getPassword()))
                .collect(Collectors.toList());
    }

    @GetMapping("/new")
    public List<User> getAllUsersNew() {

        User us = new User("123213", "Danban", "dan@gmail.com", "bob");

        // Save the user to the MongoDB collection
        userRepository.save(us);

        System.out.println("User added successfully");
        // Retrieve all users from the MongoDB collection
        List<User> users = userRepository.findAll();

        // Map the User objects to UserDTO for JSON serialization
        List<User> userDTOs = users.stream()
                .map(user -> new User(user.getId(), user.getUsername(), user.getEmail(), user.getPassword()))
                .collect(Collectors.toList());

        return userDTOs;
    }

    @GetMapping("/addWorker")
    public void addWorker() {
        List<String> lst = new ArrayList<>();
        lst.add("Bebe2");
        lst.add("Java2");
        Worker worker = new Worker("Yes", lst);
        worker.setUsername("Jhon");
        worker.setEmail("Jhon");
        worker.setPassword("Jhon");
        workerRepository.save(worker);

        //return workerRepository.findAll();
    }

    @PostMapping("/addAssigner")
    public ResponseEntity<String> addAssigner(@RequestBody Assigner assigner) {
        assignerRepository.save(assigner);
        return ResponseEntity.ok("Assigner added successfully!");
    }


}
