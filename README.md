# workflow-playground

Want to get started quickly with your first workflow application? Look no further and dive into the workflow-playground. 

What's included?

- Built on Camunda 7 and Spring Boot as the backend
- Angular 13 client
- Client styled with Bulma.io
- Easy Setup with H2 in-memory database
- Nested forms for complex data types, perfect for enterprisy use cases 
- Switch users quickly with built-in dummy authentication system
- Adjust code to your personal needs, it's easy

What's planned?

- React and Vue.js clients
- Key cloak demo setup
- Search for process instances
- Error handling

Running the application:

Start the backend in the backend-spring-boot folder with

    mvn spring-boot:run

Build the client in client-angular

    npm install

Start the client in client-angular with

    npm start


- Upon start 10 process instances are created and assigned to the user "anna". 
- Log in as "anna" and complete one of her user-tasks. 
- Then log in as "joe" or "mike". Both of them are members of the "approve_order" group and are able to complete the second user-task in the process.
- Note that the task-list is personalized. It only contains tasks that are assigned to a user or that can be claimed by a user because he is member of a candidate group.




