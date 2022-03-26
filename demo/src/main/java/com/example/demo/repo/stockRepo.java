package com.example.demo.repo;

import com.example.demo.model.stockValues;
import org.springframework.data.jpa.repository.JpaRepository;

public interface stockRepo extends JpaRepository<stockValues, Long> {
}
