package com.example.backend;

import java.util.Arrays;
import java.util.List;

import org.camunda.bpm.engine.IdentityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class UserConfiguration {
	
	@Autowired
	private IdentityService	identityService;
	
	private static Logger logger = LoggerFactory.getLogger(IdentityService.class);
	
	@Bean
	public List<User> userList() {
		
		logger.info("in userList()");
		
		
		Group groupAccess = new Group("access");
		Group groupClearance = new Group("clearance");
		
		User userAnna = new User("anna", "Anna", "Alpha");
		List<Group> groupListAnna = Arrays.asList(groupAccess, groupClearance);
		userAnna.setGroupList(groupListAnna);
		
		User userJoe = new User("joe", "Joe", "Johnson");
		List<Group> groupListJoe = Arrays.asList(groupAccess);
		userJoe.setGroupList(groupListJoe);
		
		List<User> userList = Arrays.asList(userAnna, userJoe);
		
		userList.stream().forEach(user -> {
			org.camunda.bpm.engine.identity.User camundaUser = identityService.newUser(user.getId());
			camundaUser.setFirstName(user.getFirstname());
			camundaUser.setLastName(user.getLastname());
			identityService.saveUser(camundaUser);
			user.getGroupList().stream().forEach(group -> {
				org.camunda.bpm.engine.identity.Group camundaGroup = identityService.newGroup(group.getName());
				camundaGroup.setName(group.getName());
				if (identityService.createGroupQuery().groupId(group.getName()).count() == 0) {
					identityService.saveGroup(camundaGroup);
				}
				identityService.createMembership(user.getId(), group.getName());
			});
			
		});
		
		return userList;
	}
}
