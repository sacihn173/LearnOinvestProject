package com.example.demo.repo;

import com.example.demo.model.portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface portfolio_interface extends JpaRepository<portfolio, String> {


}
