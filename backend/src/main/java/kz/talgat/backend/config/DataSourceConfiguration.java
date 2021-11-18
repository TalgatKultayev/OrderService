package kz.talgat.backend.config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.SQLException;

@Configuration
public class DataSourceConfiguration {

    @Bean
    public Connection getConnection() throws SQLException {
        DataSourceBuilder builder = DataSourceBuilder.create();
        builder.driverClassName("com.mysql.cj.jdbc.Driver");
        builder.url("jdbc:mysql://localhost:3306/order_directory?useSSL=false&serverTimezone=UTC");
        builder.username("springstudent");
        builder.password("springstudent");

        return builder.build().getConnection();
    }
}
