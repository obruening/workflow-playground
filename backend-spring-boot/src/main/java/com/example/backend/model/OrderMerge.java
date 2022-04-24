package com.example.backend.model;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OrderMerge {

    private static Logger logger = LoggerFactory.getLogger(OrderMerge.class);

    public static Order mergeSimpleAttributes(Order order, Order persistedOrder) {

        persistedOrder.setCustomerId(order.getCustomerId());
        persistedOrder.setDescription(order.getDescription());
        persistedOrder.setDecision(order.getDecision());
        return persistedOrder;
    }

    public static Order mergeItems(Order order, Order persistedOrder) {

        List<Item> itemList = order.getItemList();
        List<Item> persistedItemList = persistedOrder.getItemList();

        // items kopieren

        List<Item> copyOfPersistedItemList = persistedItemList.stream().map(persistedItem -> {
            Item copyOfPersistedItem = new Item();
            copyOfPersistedItem.setId(persistedItem.getId());
            copyOfPersistedItem.setProductName(persistedItem.getProductName());
            copyOfPersistedItem.setProductNumber(persistedItem.getProductNumber());
            copyOfPersistedItem.setOrder(persistedOrder);
            return copyOfPersistedItem;
        }).collect(Collectors.toList());

        // items löschen
        logger.info("changed: " + persistedOrder.getItemList().removeAll(persistedItemList));
        persistedItemList.forEach(persistedItem -> persistedItem.setOrder(null));

        // logger.info("changed: " + persistedOrder.getItemList().remove(0));
        // persistedItemList.forEach(persistedItem -> persistedItem.setOrder(null));

        logger.info("size: " + persistedOrder.getItemList().size());

        // items hinzufügen
        for (Item item : itemList) {

            Optional<Item> optionalCopyOfPersistedItem = copyOfPersistedItemList
                    // Optional<Item> optionalCopyOfPersistedItem = persistedItemList
                    .stream().filter(copyOfPersistedItem -> copyOfPersistedItem.getId().equals(item.getId()))
                    .findFirst();

            if (optionalCopyOfPersistedItem.isPresent()) {

                persistedOrder.getItemList()
                        .add(ItemMerge.mergeSimpleAttributes(item, optionalCopyOfPersistedItem.get()));

            } else {

                persistedOrder.getItemList().add(item);
                item.setOrder(persistedOrder);
            }
        }

        return persistedOrder;
    }

}
