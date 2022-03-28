package com.example.backend;

import java.util.List;

public class User {
	
	private String id;
	private String firstname;
	private String lastname;
	private List<Group> groupList;
	
	public User(String id, String firstname, String lastname) {
		this.id = id; 
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public List<Group> getGroupList() {
		return groupList;
	}
	public void setGroupList(List<Group> groupList) {
		this.groupList = groupList;
	}
}
