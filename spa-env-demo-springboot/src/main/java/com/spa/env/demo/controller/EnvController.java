package com.spa.env.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class EnvController {

    @Value("${app.user}")
    String user;

    @GetMapping("/name")
    public Map<String, String> getName() {
        return Collections.singletonMap("user", user);
    }
}
