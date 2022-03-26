package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "balance_details")
public class account_balance {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int id;
    private int balance;
    private int invested;

    public int getId() {
        return id;
    }
    public int getBalance() {
        return balance;
    }
    public int getInvested() {
        return invested;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
    public void setInvested(int invested) {
        this.invested = invested;
    }
}
