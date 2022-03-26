package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.model.account_balance;
import com.example.demo.model.portfolio;
import com.example.demo.model.stockValues;
import com.example.demo.service.serviceClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
import java.util.List;
import java.util.Optional;

// for connecting with ui
@CrossOrigin(origins = "http://localhost:3000")


@RequestMapping("/")

// maps given request to respected function
@RestController
public class BookController {

    @Autowired
    private final serviceClass service;

    public BookController(serviceClass service){
        this.service = service;
    }


    // ****** API calls taking data from external API ***************

    // return price object for a given symbol of stock
    @PostMapping("/stockprice")
    public String returnPriceForStock(@RequestBody stockValues stockvalues){
        return service.returnPriceForStock(stockvalues);
    }

    // return search results for a given keyword
    @PostMapping("/search")
    public String searchAPIReturn(@RequestBody stockValues stockvalues){
        return service.searchAPIReturn(stockvalues);
    }

    @GetMapping("/toploss")
    public String topLossers(){
        return service.topLossers();
    }

    @GetMapping("/topgain")
    public String topGainers(){
        return service.topGainers();
    }

    @GetMapping("/nifty50")
    public String niftyFifty(){
        return service.niftyFifty();
    }

    @GetMapping("/niftybnk")
    public String niftyBank(){
        return service.niftyBank();
    }

    @GetMapping("/mktstat")
    public String currentMarketStatus(){
        return service.currentMarketStatus();
    }


    // ********* Receiving buy, sell data to update it to database


    @PostMapping("/buyupdate")
    public String buy_update(@RequestBody portfolio request_obj){
        return service.update_transaction_done(request_obj, "BUY");
    }

    @PostMapping("/sellupdate")
    public String sell_update(@RequestBody portfolio request_obj){
        return service.update_transaction_done(request_obj, "SELL");
    }


    // ******* Sending back details for portfolio from database


    @GetMapping("/portfolio")
    public List<portfolio> return_portfolio(){
        return service.return_portfolio();
    }

    @GetMapping("/balance")
    public List<account_balance> return_balance(){
        return service.return_balance_details();
    }

    // ********** demo database interactions *********

    @PostMapping("/bookSave")
    public String addBook(@RequestBody Book book){
        return service.insertBook(book);
    }

    @PostMapping("/multipleBookSave")
    public String insertBook(List<Book> book){
        return service.insertBook(book);
    }

    @GetMapping("/getAllBook")
    public List<Book> getBook(){
        return (List<Book>) service.getBook();
    }

    @GetMapping("/getByBookName/{name}")
    public List<Book> getBookByName(@PathVariable("name") String bookName){
        return (List<Book>) service.getBookByName(bookName);
    }

    @GetMapping("/getByBookId/{bookId}")
    public Optional<Book> getBookById(@PathVariable("bookId") Long id){
        return service.getBookById(id);
    }

    @PutMapping("/updateBook")
    public String updateProduct(@RequestBody Book book){
        return service.updateProduct(book);
    }

    @DeleteMapping("/deleteBook/{bookId}")
    public String deleteBook(@PathVariable long bookId){
        return service.deleteBook(bookId);
    }

}
