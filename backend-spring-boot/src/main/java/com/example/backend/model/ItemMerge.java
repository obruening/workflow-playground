package com.example.backend.model;

public class ItemMerge {

    public static Item mergeSimpleAttributes(Item item, Item persistedItem) {

        persistedItem.setProductName(item.getProductName());
        persistedItem.setProductNumber(item.getProductNumber());
        return persistedItem;
    }
}
