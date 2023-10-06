package com.example.myplannerApp.controllers;

import com.example.myplannerApp.domain.Manager;
import com.example.myplannerApp.domain.User;
import com.example.myplannerApp.domain.Worker;
import com.example.myplannerApp.persistance.ManagerRepository;
import com.example.myplannerApp.persistance.UserRepository;
import com.example.myplannerApp.persistance.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WorkerRepository workerRepository;
    @Autowired
    private ManagerRepository assignerRepository;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        // Retrieve all users from the MongoDB collection
        List<User> users = userRepository.findAll();

        // Map the User objects to UserDTO for JSON serialization

        return users.stream()
                .map(user -> new User(user.getId(), user.getUsername(), user.getEmail(), user.getPassword()))
                .collect(Collectors.toList());
    }

    @PostMapping("/sebi")
    public User getAllUsersNew() {

        User us = new User("123456789", "sebastian", "mail", "matei");
        // Save the user to the MongoDB collection
        userRepository.save(us);

        System.out.println("User added successfully");
        // Retrieve all users from the MongoDB collection
        return us;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/newWorker")
    public ResponseEntity<String> addWorker(@RequestBody Worker worker) {
        workerRepository.save(worker);

        return ResponseEntity.ok("Worker added successfully");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/newManager")
    public ResponseEntity<String> addAssigner(@RequestBody Manager manager) {
        assignerRepository.save(manager);
        return ResponseEntity.ok("Manager added successfully!");
    }


}
