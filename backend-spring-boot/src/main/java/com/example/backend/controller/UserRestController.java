package com.example.backend.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.User;
import com.example.backend.service.primary.UserService;

@RestController
@RequestMapping(value = "/api/users")
public class UserRestController {

    @Autowired
    private UserService userService;

    @ModelAttribute
    public void setResponseHeader(HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setDateHeader("Expires", 0);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<User> userList() {

        return userService.getUserList();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User user(@PathVariable("id") String id) {

        return userService.getUser(id);
    }
}
