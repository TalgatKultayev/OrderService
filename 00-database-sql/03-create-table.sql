CREATE TABLE `order_directory`.order_items(
                    `order_id` varchar(128) not null,
                    `client_product_id` varchar(30) not null,
                    `product_name` varchar(50) not null,
                    `product_price` double not null,
                    `product_quantity` integer not null,
                    primary key(order_id, client_product_id)
					)