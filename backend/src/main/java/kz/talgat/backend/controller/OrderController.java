package kz.talgat.backend.controller;

import kz.talgat.backend.exception.BadProductNameException;
import kz.talgat.backend.exception.BadProductPriceQuantityException;
import kz.talgat.backend.exception.EmptyOrderException;
import kz.talgat.backend.model.Order;
import kz.talgat.backend.model.OrderItem;
import kz.talgat.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    @Autowired
    private OrderService orderService; // field injection

    @RequestMapping(value = {"", "/"},
            method = {RequestMethod.POST, RequestMethod.PUT})
    public Order createOrder(@RequestBody Order order) {
        // validation
        if (order.getOrderItems().isEmpty()) {
            throw new EmptyOrderException("order items not found");
        }

        for (OrderItem anItem : order.getOrderItems()) {
            //product name length validation 0<length<50
            if (anItem.getProductName() == null || anItem.getProductName().equals("")
                    || anItem.getProductName().length() > 50) {
                throw new BadProductNameException("product name is empty or exceeded 50 character limit");
            }
            //product price validation price > 0
            int variable = anItem.getProductPrice().compareTo(BigDecimal.ZERO);
            if (variable == 0 || variable == -1) {
                throw new BadProductPriceQuantityException("product price cannot be negative or zero");
            }
            //quantity validation quantity > 0
            if (anItem.getQuantity() <= 0) {
                throw new BadProductPriceQuantityException("product quantity cannot be negative or zero");
            }
        }
        return orderService.createOrder(order);
    }
}
