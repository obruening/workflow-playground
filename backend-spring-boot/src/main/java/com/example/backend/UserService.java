package com.example.backend;

import java.util.List;
import java.util.stream.Collectors;

import org.camunda.bpm.engine.IdentityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service

public class UserService {
	
	private static Logger logger = LoggerFactory.getLogger(UserService.class);

	@Autowired
	private IdentityService identityService;

	@Cacheable("userList")
	public List<User> getUserList() {
		
		List<org.camunda.bpm.engine.identity.User> camundUserList = identityService
				.createUserQuery()
				.orderByUserId()
				.asc()
				.list();
		
		/*
		if (true) {
		    throw new IllegalArgumentException("das ist eine Nullpointer Exception");
		}
		*/
		
		return camundUserList
				.stream()
				.map(camundaUser -> mapCamundaUserToUser(camundaUser))
				.collect(Collectors.toList());
	}

	@Cacheable("user")
	public User getUser(String id) {

		org.camunda.bpm.engine.identity.User camundaUser = identityService
				.createUserQuery()
				.userId(id)
				.singleResult();
		
		return mapCamundaUserToUser(camundaUser);
	}

	private List<Group> getGroupListForUser(String id) {

		List<org.camunda.bpm.engine.identity.Group> camundaGroupList = identityService
				.createGroupQuery()
				.groupMember(id)
				.orderByGroupId()
				.asc()
				.list();
		return camundaGroupList
				.stream()
				.map(camundaGroup -> new Group(camundaGroup.getId()))
				.collect(Collectors.toList());
	}
	
	private User mapCamundaUserToUser(org.camunda.bpm.engine.identity.User camundaUser) {
		
		User user = new User(camundaUser.getId(), camundaUser.getFirstName(), camundaUser.getLastName());
        user.setGroupList(getGroupListForUser(user.getId()));
        return user;
	}
}
