package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "portfolio_details")
public class portfolio {

    @Id
    @Column(name = "stock_name",unique=true,columnDefinition="VARCHAR(64)")
    private String stock_name;
    private int quantity;
    private int buy_price;

    public String getStock_name() {
        return stock_name;
    }
    public int getQuantity(){
        return quantity;
    }
    public int getBuy_price(){
        return buy_price;
    }

    public void setBuy_price(int buyPrice) {
        this.buy_price = buyPrice;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setStock_name(String stockName) {
        this.stock_name = stockName;
    }

}
