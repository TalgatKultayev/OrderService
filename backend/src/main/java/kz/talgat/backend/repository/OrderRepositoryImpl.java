package kz.talgat.backend.repository;

import kz.talgat.backend.model.Order;
import kz.talgat.backend.model.OrderItem;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

@Slf4j
@Repository
public class OrderRepositoryImpl implements OrderRepository {

    @Autowired
    private Connection connection;

    @Override
    public Order save(Order order) {
        if (order.getId() == null){
            //insert new row
            order.setId(UUID.randomUUID().toString());
            insertOrderItems(order);
        } else {
            //update existing row
            deleteOrderItems(order);
            insertOrderItems(order);
        }
        return order;
    }

    private void insertOrderItems(Order order) {
        try (PreparedStatement preparedStatement = connection.prepareStatement(
                "INSERT INTO order_items(order_id,client_product_id,product_name,product_price, product_quantity)" +
                        "VALUES (?,?,?,?,?)"
        )) {
            preparedStatement.setString(1, order.getId());

            for (OrderItem orderItem : order.getOrderItems()) {
                preparedStatement.setString(2, orderItem.getId());
                preparedStatement.setString(3, orderItem.getProductName());
                preparedStatement.setBigDecimal(4, orderItem.getProductPrice());
                preparedStatement.setInt(5, orderItem.getQuantity());

                preparedStatement.executeUpdate();
            }

        } catch (SQLException e) {
            log.error("SQL ERROR:", e);
        }
    }

    private void deleteOrderItems(Order order) {
        try (PreparedStatement preparedStatement = connection.prepareStatement(
                "DELETE FROM order_items WHERE order_id=?"
        )) {
            preparedStatement.setString(1, order.getId());

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            log.error("SQL ERROR:", e);
        }
    }
}
