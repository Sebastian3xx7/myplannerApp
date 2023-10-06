//package com.example.myplannerApp.websocket;
//
//import org.springframework.http.server.ServerHttpRequest;
//import org.springframework.http.server.ServerHttpResponse;
//import org.springframework.stereotype.Component;
//import org.springframework.web.socket.WebSocketHandler;
//import org.springframework.web.socket.server.HandshakeInterceptor;
//
//import java.util.Map;
//
//@Component
//public class WebSocketCorsInterceptor implements HandshakeInterceptor {
//
//    @Override
//    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response,
//                                   WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
//        // Perform CORS checks here and return true if allowed, false if denied.
//        // You can access request headers, origin, etc., and apply your CORS logic.
//        // Example:
//        // if ("http://localhost:3000".equals(request.getHeaders().getOrigin())) {
//        //     return true; // Allow the WebSocket handshake
//        // } else {
//        //     return false; // Deny the WebSocket handshake
//        // }
//        return true; // Allow for demonstration purposes (customize according to your needs)
//    }
//
//    @Override
//    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response,
//                               WebSocketHandler wsHandler, Exception exception) {
//        // After handshake logic (not used in CORS checks)
//    }
//}
//
