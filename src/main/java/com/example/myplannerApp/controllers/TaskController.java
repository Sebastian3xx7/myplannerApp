//package com.example.myplannerApp.controllers;
//
//
//import com.example.myplannerApp.domain.Task;
//import com.example.myplannerApp.domain.Worker;
//import com.example.myplannerApp.services.TaskService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/tasks")
//public class TaskController {
//
//    @Autowired
//    TaskService taskService;
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @PostMapping("/newTask")
//    public ResponseEntity<String> addTask(@RequestBody Task task) {
//        taskService.saveTask(task);
//
//        return ResponseEntity.ok("Task added successfully");
//    }
//}
