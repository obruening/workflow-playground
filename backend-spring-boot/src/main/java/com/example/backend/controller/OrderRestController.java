package com.example.backend.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.primary.Order;
import com.example.backend.service.primary.OrderService;

@RestController
@RequestMapping(value = "/api/orders")
public class OrderRestController {

    private static Logger logger = LoggerFactory.getLogger(OrderRestController.class);

    @ModelAttribute
    public void setResponseHeader(HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setDateHeader("Expires", 0);
    }

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> order(@PathVariable("id") Long id) {

        Optional<Order> order = orderService.findById(id);

        if (order.isPresent()) {
            return new ResponseEntity<Order>(order.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> order(@RequestBody Order order) {

        logger.info(order.toString());

        Order persistedOrder = orderService.save(order);

        if (persistedOrder != null) {
            return new ResponseEntity<Order>(persistedOrder, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "update", method = RequestMethod.POST)
    public ResponseEntity<?> update(@RequestBody Order order) {

        logger.info(order.toString());

        Order persistedOrder = orderService.merge(order);

        if (persistedOrder != null) {
            return new ResponseEntity<Order>(persistedOrder, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
