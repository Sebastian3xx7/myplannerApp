package com.example.myplannerApp.controllers;

import com.example.myplannerApp.domain.*;
import com.example.myplannerApp.persistance.ManagerRepository;
import com.example.myplannerApp.persistance.UserRepository;
import com.example.myplannerApp.persistance.WorkerRepository;
import com.example.myplannerApp.services.TaskService;
import com.example.myplannerApp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class Controller {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WorkerRepository workerRepository;
    @Autowired
    private ManagerRepository assignerRepository;

    @Autowired
    private UserService service;

    @Autowired
    TaskService taskService;

    @Autowired
    private MongoTemplate mongoTemplate;


//    public Optional<Manager2> findLogger(String username, String password) {
//        return service.authenticateAndGetUser(username, password);
//    }

//    public Optional<Manager> findID(String id) {
//        return service.findUser(id);
//    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/newTask")
    public ResponseEntity<String> addTask(@RequestBody Task task) {
        System.out.println(task.getTitle()+" "+task.getDescription());
        taskService.saveTask(task);

        return ResponseEntity.ok("Task added successfully");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskService.findAllTasks();

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/filteredTasks")
    public List<Task> getFilteredTasks(@RequestParam List<String> skills) {
        return taskService.findFiltered(skills);

    }



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
        return null;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/newWorker")
    public ResponseEntity<SignupResponse> addWorker(@RequestBody Worker worker) {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder randomString = new StringBuilder(20);
        Random random = new Random();

        for (int i = 0; i < 20; i++) {
            int index = random.nextInt(characters.length());
            char randomChar = characters.charAt(index);
            randomString.append(randomChar);
        }
        worker.setId(String.valueOf(randomString));
        workerRepository.save(worker);

        return ResponseEntity.ok(new SignupResponse(true, worker));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/newManager")
    public ResponseEntity<String> addAssigner(@RequestBody Manager manager) {

        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder randomString = new StringBuilder(20);
        Random random = new Random();

        for (int i = 0; i < 20; i++) {
            int index = random.nextInt(characters.length());
            char randomChar = characters.charAt(index);
            randomString.append(randomChar);
        }


//        manager.setId(String.valueOf(randomString));
//        assignerRepository.save(manager);
        return ResponseEntity.ok("Manager added successfully!");
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody UserCredentials credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();
        System.out.println(username+" "+password);

        Manager authenticatedUser = service.findManagerByUsernameAndPassword(username, password);

        if (authenticatedUser != null) {

            System.out.println(authenticatedUser.getUsername()+" "+authenticatedUser.getId()+" manager");
            return ResponseEntity.ok(new LoginResponse(true, "manager", authenticatedUser));
        } else{
            Worker authenticatedWorker = service.findWorkerByUsernameAndPassword(username, password);
            if(authenticatedWorker != null){
                System.out.println(authenticatedWorker.getUsername()+" "+authenticatedWorker.getPassword()+" worker");
                return ResponseEntity.ok(new LoginResponse(true, "worker", authenticatedWorker));
            }
            return ResponseEntity.ok(new LoginResponse(false, null, null));
        }

    }


}
