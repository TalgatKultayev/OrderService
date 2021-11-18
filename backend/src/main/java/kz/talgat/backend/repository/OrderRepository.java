package kz.talgat.backend.repository;

import kz.talgat.backend.model.Order;

public interface OrderRepository {
    Order save(Order order);
}
