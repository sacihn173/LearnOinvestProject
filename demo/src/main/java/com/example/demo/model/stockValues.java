package com.example.demo.model;


import javax.persistence.*;

@Entity
@Table(name = "stock_table")
public class stockValues {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String query;

    public  void setQuery(String query){
        this.query = query;
    }
    public String getQuery(){
        return query;
    }

}
