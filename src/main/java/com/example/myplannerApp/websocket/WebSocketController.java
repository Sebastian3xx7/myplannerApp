//package com.example.myplannerApp.websocket;
//
//import com.example.myplannerApp.domain.Manager;
//import com.example.myplannerApp.domain.Worker;
//import com.example.myplannerApp.persistance.ManagerRepository;
//import com.example.myplannerApp.persistance.WorkerRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestBody;
//
//@Controller
//public class WebSocketController {
//
//    @Autowired
//    private WorkerRepository workerRepository;
//    @Autowired
//    private ManagerRepository managerRepository;
//
////    @MessageMapping("/chat") // Handle messages with this mapping
////    //@SendTo("/topic/chat") // Send the response to this topic
////    public WebSocketMessage handleMessage(WebSocketMessage message) {
////        // Handle the message and send a response
////        return new WebSocketMessage("Server says: " + message.getContent());
////    }
//
//
//    @MessageMapping("/newWorker")
//    //@SendTo("/topic/newWorker")
//    public WebSocketMessage addWorker(@RequestBody Worker worker) {
//        try {
//            workerRepository.save(worker);
//            System.out.println("Received newWorker message: " + worker);
//            return new WebSocketMessage("Worker added");
//        } catch (Exception e) {
//            e.printStackTrace();
//            // Handle the exception as needed
//            return new WebSocketMessage("Error adding worker");
//        }
//    }
//
//    @MessageMapping("/newManager")
//    //@SendTo("/topic/newManager")
//    public WebSocketMessage addManager(@RequestBody Manager manager) {
//        try {
//            managerRepository.save(manager);
//            System.out.println("Received newManager message: " + manager);
//            return new WebSocketMessage("Manager added");
//        } catch (Exception e) {
//            e.printStackTrace();
//            // Handle the exception as needed
//            return new WebSocketMessage("Error adding worker");
//        }
//    }
//
//}
//
