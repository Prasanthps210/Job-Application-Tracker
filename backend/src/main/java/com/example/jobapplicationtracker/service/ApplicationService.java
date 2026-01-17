package com.example.jobapplicationtracker.service;

import com.example.jobapplicationtracker.model.Application;
import com.example.jobapplicationtracker.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository repo;

    public List<Application> getAll() {
        return repo.findAll();
    }

    public Application save(Application app) {
        return repo.save(app);
    }

    public Application update(int id, Application app) {
        app.setId(id);
        return repo.save(app);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
