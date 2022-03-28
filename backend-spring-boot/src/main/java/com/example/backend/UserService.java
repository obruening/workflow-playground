package com.example.backend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired 
	private List<User> userList;
	
	public List<User> getUserList() {
		
		return userList;
	}
	
	public User getUser(String id) {
		
		Optional<User> user = userList.stream().filter(u -> u.getId().equals(id)).findFirst();
		
    	if (user.isPresent()) {
    		return user.get();
    	} else {
    		return null;
    	}
	}
}
