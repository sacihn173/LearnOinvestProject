package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.model.account_balance;
import com.example.demo.model.portfolio;
import com.example.demo.model.stockValues;
import com.example.demo.repo.BookRepository;
import com.example.demo.repo.account_balance_interface;
import com.example.demo.repo.portfolio_interface;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class serviceClass {

    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private portfolio_interface portfolio_interface_obj;
    @Autowired
    private account_balance_interface account_balance_interface_obj;

    //  *** External API call returns ******
    public String searchAPIReturn(stockValues stockvalues){

        String url = "https://nse-data1.p.rapidapi.com/search_stock?stockname=" + stockvalues.getQuery();

        HttpResponse<String> response = Unirest.get(url)
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "3f3100401dmsh738ba16e0978df1p1a0562jsnd173ccc04308")
                .asString();

        return response.getBody().toString();
    }

    public String topLossers(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/top_loosers")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "3f3100401dmsh738ba16e0978df1p1a0562jsnd173ccc04308")
                .asString();

        return response.getBody();
    }

    public String topGainers(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/top_gainers")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "3f3100401dmsh738ba16e0978df1p1a0562jsnd173ccc04308")
                .asString();

        return response.getBody();
    }

    public String currentMarketStatus(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/market_status")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "3f3100401dmsh738ba16e0978df1p1a0562jsnd173ccc04308")
                .asString();

        return response.getBody();
    }

    public String niftyBank(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/nifty_bank_indices_data")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "3f3100401dmsh738ba16e0978df1p1a0562jsnd173ccc04308")
                .asString();

        return response.getBody();
    }

    public String niftyFifty(){
        HttpResponse<String> response = Unirest.get("https://nse-data1.p.rapidapi.com/nifty_fifty_indices_data")
                .header("x-rapidapi-host", "nse-data1.p.rapidapi.com")
                .header("x-rapidapi-key", "3f3100401dmsh738ba16e0978df1p1a0562jsnd173ccc04308")
                .asString();

        return response.getBody();
    }

    // **** DataBase Work *******

    // #####################################

    public List<portfolio> return_portfolio(){
        return portfolio_interface_obj.findAll();
    }

    public List<account_balance> return_balance_details(){
        return account_balance_interface_obj.findAll();
    }

    public String update_transaction_done(portfolio port_request, String operation_done){

        // "SELL" == selling request "BUY" == buying request

        System.out.println("\n\nreachedd\n\n");

        System.out.println(port_request.getStock_name());
        System.out.println(port_request.getQuantity());

        portfolio stk = portfolio_interface_obj.findById(port_request.getStock_name()).orElse(null);
        System.out.println("re");
        account_balance act_balance = account_balance_interface_obj.findById(1).orElse(null);


        System.out.println("reached");

        if(operation_done.equals("SELL")){
            if(stk == null){ // no such stock exist in account
                return "INVALID";
            }
            else{
                if(port_request.getQuantity() <= stk.getQuantity()){ // quantity available

                    // update account balance and amount invested

                    if(act_balance == null){ // doing just for first time inserting
                        account_balance new_act_bal = new account_balance();

                        new_act_bal.setBalance(port_request.getQuantity() * port_request.getBuy_price());
                        new_act_bal.setInvested(port_request.getBuy_price() * port_request.getQuantity());
                        account_balance_interface_obj.save(new_act_bal);
                    }
                    else{
                        act_balance.setBalance(act_balance.getBalance() + port_request.getQuantity() * port_request.getBuy_price());
                        act_balance.setInvested(act_balance.getInvested() - port_request.getBuy_price() * port_request.getQuantity());

                        account_balance_interface_obj.save(act_balance);

                    }

                    // quantity of a stock can also go 0 delete that stock

                    if(port_request.getQuantity() == stk.getQuantity()){
                        // all gone
                        portfolio_interface_obj.deleteById(stk.getStock_name());
                    }
                    else{
                        stk.setQuantity(stk.getQuantity() - port_request.getQuantity());
                        portfolio_interface_obj.save(stk);
                    }

                    return "VALID";
                }
                else{ // quantity not available
                    return "INVALID";
                }
            }
        }
        else{

            if(act_balance == null){  // before first inserting case only
                return "INVALID";
            }
            else if(act_balance.getBalance() >= port_request.getBuy_price() * port_request.getQuantity()){
                // possible to buy

                // update in quantity and buy_price in db

                if(stk == null){ // this stock is new to be added
                    portfolio new_port = new portfolio();
                    new_port.setStock_name(port_request.getStock_name());
                    new_port.setQuantity(port_request.getQuantity());
                    new_port.setBuy_price(port_request.getBuy_price());

                    portfolio_interface_obj.save(new_port);
                }
                else{

                    int total_quantity = stk.getQuantity() + port_request.getQuantity();
                    stk.setBuy_price( (stk.getBuy_price() *  stk.getQuantity() + port_request.getQuantity() * port_request.getBuy_price()) /  total_quantity);
                    stk.setQuantity(stk.getQuantity() + port_request.getQuantity());

                    portfolio_interface_obj.save(stk);
                }

                // update balance and invested

                act_balance.setBalance(act_balance.getBalance() - port_request.getQuantity() * port_request.getBuy_price());
                act_balance.setInvested(act_balance.getInvested() + port_request.getBuy_price() * port_request.getQuantity());

                account_balance_interface_obj.save(act_balance);

                return "VALID";
            }
            else{
                return "INVALID";
            }

        }
    }



    // #####################################

    public String insertBook(Book book){
        bookRepository.save(book);
        return "saved";
    }

    // for saving multiple objects at the same time and saving them
    public String insertBook(List<Book> book){
        bookRepository.saveAll(book);
        return "All records saved !";
    }

    // ** for taking data from database **
    public List<Book> getBook(){
        return (List<Book>) bookRepository.findAll();
    }

    // for getting data from database using bookName field
    public List<Book> getBookByName(@PathVariable("name") String bookName){
        return (List<Book>) bookRepository.findBybookName(bookName);
    }

    // for getting data from database using bookId field
    // optional type contains only values which are not null
    public Optional<Book> getBookById(@PathVariable("bookId") Long id){
        return bookRepository.findById(id);
    }


    public String updateProduct(Book book){
        Book existingBook = bookRepository.findById(book.getBookId()).orElse(null);
        existingBook.setBookName(book.getBookName());
        existingBook.setBookAuthor(book.getBookAuthor());
        bookRepository.save(existingBook);
        return "updated !";
    }

    // ### Deletion
    public String deleteBook(long id){
        bookRepository.deleteById(id);
        return "deleted !";
    }


    // **** for external api calling

    private final RestTemplate restTemplate;

    @Autowired
    public serviceClass(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }


    public String searchAPIAlpha(stockValues stockvalues){
        String url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stockvalues.getQuery() + "&apikey=JJOY4DWMGMI1F08X";
        return restTemplate.getForObject(url, String.class);
    }

    public String returnPriceForStock(stockValues stockvalues){ // symbol of the stock is recieved
        String stock = stockvalues.getQuery() + ".BSE";
        String url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + stock +  "&apikey=JJOY4DWMGMI1F08X";
        return restTemplate.getForObject(url, String.class);
    }

}
