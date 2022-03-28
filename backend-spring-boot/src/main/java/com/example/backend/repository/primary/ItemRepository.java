package com.example.backend.repository.primary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.primary.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
