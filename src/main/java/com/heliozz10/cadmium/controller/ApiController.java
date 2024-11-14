package com.heliozz10.cadmium.controller;

import com.heliozz10.cadmium.content.TestResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {
    @GetMapping("/get-message")
    public TestResponse getMessage() {
        System.out.println("hello");
        return new TestResponse("salam", "bro");
    }
}
