package com.example.cardapio.food;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;

public interface FoodRepository extends JpaRepositoriesAutoConfiguration <Food, Long> {
}
