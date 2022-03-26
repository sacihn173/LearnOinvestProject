package com.example.demo.repo;

import com.example.demo.model.account_balance;
import jdk.jfr.Percentage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface account_balance_interface extends JpaRepository<account_balance, Integer> {
}
