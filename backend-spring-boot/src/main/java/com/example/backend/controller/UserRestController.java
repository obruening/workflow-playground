package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping(value = "/api/users")
public class UserRestController extends BaseController {

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public List<User> userList() {

        return userService.getUserList();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User user(@PathVariable("id") String id) {

        return userService.getUser(id);
    }
}
