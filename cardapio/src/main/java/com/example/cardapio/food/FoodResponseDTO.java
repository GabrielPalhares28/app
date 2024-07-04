package com.example.cardapio.food;

public record FoodResponseDTO(long id, String title, String image, Integer price) {
public FoodResponseDTO (Food food) {

    this(food.id);
}
}
