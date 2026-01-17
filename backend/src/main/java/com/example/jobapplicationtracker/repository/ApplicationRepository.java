package com.example.jobapplicationtracker.repository;

import com.example.jobapplicationtracker.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository
        extends JpaRepository<Application, Integer> {
}

