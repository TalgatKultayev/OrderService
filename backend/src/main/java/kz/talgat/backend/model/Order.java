package kz.talgat.backend.model;

import lombok.Data;

import java.util.List;

@Data
public class Order {
    private String id; // backend generated UUID
    private List<OrderItem> orderItems; // one transaction may contain many orderItems
}
