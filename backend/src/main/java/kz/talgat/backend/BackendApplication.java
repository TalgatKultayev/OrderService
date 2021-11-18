package kz.talgat.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Connection;
import java.sql.Statement;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

//    @Bean
//    CommandLineRunner runner( @Autowired Connection connection) {
//        return args -> {
//            final Statement statement = connection.createStatement();
//            statement.execute("CREATE DATABASE order_directory");
//
//            statement.execute("CREATE TABLE `order_directory`.order_items(" +
//                    " order_id varchar(128) not null," +
//                    " client_product_id varchar(30) not null," +
//                    " product_name varchar(50) not null," +
//                    " product_price double not null," +
//                    " product_quantity integer not null," +
//                    " primary key(order_id, client_product_id)" +
//                    ")"
//            );
//        };
//    }
}
