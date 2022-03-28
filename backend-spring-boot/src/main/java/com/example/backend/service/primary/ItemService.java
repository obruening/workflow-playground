package com.example.backend.service.primary;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.model.primary.Item;
import com.example.backend.repository.primary.ItemRepository;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepository itemRepository;
	
	@Transactional("primaryTransactionManager")
	public List<Item> findAll() {
		
		return itemRepository.findAll();
	}
}
