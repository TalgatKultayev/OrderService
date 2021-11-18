package kz.talgat.backend.model;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class OrderItem {
    private String id; // generated at client side
    private String productName; // given by client
    private BigDecimal productPrice; // given by client
    private Integer quantity; // given by client
}
