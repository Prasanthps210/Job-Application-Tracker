package com.example.jobapplicationtracker.controller;

import com.example.jobapplicationtracker.model.Application;
import com.example.jobapplicationtracker.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {

    @Autowired
    private ApplicationService service;

    @GetMapping
    public List<Application> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Application create(@RequestBody Application app) {
        return service.save(app);
    }

    @PutMapping("/{id}")
    public Application update(@PathVariable int id,
                              @RequestBody Application app) {
        return service.update(id, app);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }
}

