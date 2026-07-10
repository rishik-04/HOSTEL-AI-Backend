\# HOSTEL AI Backend API Documentation



\## Base URL



```

http://localhost:5000

```



\---



\# 1. Register User



\### Endpoint



```

POST /api/auth/register

```



\### Description



Creates a new user account.



\### Request Body



```json

{

&#x20;   "name":"Rishik",

&#x20;   "email":"rishik@gmail.com",

&#x20;   "password":"123456",

&#x20;   "role":"Student",

&#x20;   "hostel":"A Block",

&#x20;   "roomNumber":"A-204",

&#x20;   "phone":"9876543210"

}

```



\### Success Response



```json

{

&#x20;   "message":"User Registered Successfully",

&#x20;   "user":{

&#x20;       "\_id":"687xxxxx",

&#x20;       "name":"Rishik",

&#x20;       "email":"rishik@gmail.com"

&#x20;   }

}

```



\---



\# 2. Login User



\### Endpoint



```

POST /api/auth/login

```



\### Request Body



```json

{

&#x20;   "email":"rishik@gmail.com",

&#x20;   "password":"123456"

}

```



\### Success Response



```json

{

&#x20;   "message":"Login Successful",

&#x20;   "token":"JWT\_TOKEN",

&#x20;   "user":{

&#x20;       "\_id":"687xxxxx",

&#x20;       "name":"Rishik"

&#x20;   }

}

```



\---



\# 3. Create Complaint



\### Endpoint



```

POST /api/complaints

```



\### Request Body



```json

{

&#x20;   "title":"Water Leakage",

&#x20;   "description":"Water leaking from bathroom ceiling",

&#x20;   "category":"Water",

&#x20;   "priority":"High",

&#x20;   "studentId":"687a12bc34de56fg78hi9012",

&#x20;   "building":"A Block",

&#x20;   "roomNumber":"A-204"

}

```



\### Success Response



```json

{

&#x20;   "message":"Complaint Created Successfully",

&#x20;   "complaint":{

&#x20;       "\_id":"688xxxxx",

&#x20;       "status":"Pending"

&#x20;   }

}

```



\---



\# 4. Get All Complaints



\### Endpoint



```

GET /api/complaints

```



\### Success Response



```json

\[

&#x20;   {

&#x20;       "\_id":"688xxxxx",

&#x20;       "title":"Water Leakage",

&#x20;       "status":"Pending"

&#x20;   }

]

```



\---



\# 5. Get Complaint By ID



\### Endpoint



```

GET /api/complaints/:id

```



Example



```

GET /api/complaints/688abcdef1234567890

```



\### Success Response



```json

{

&#x20;   "\_id":"688xxxxx",

&#x20;   "title":"Water Leakage",

&#x20;   "description":"Water leaking",

&#x20;   "status":"Pending"

}

```



\---



\# 6. Update Complaint



\### Endpoint



```

PUT /api/complaints/:id

```



\### Request Body



```json

{

&#x20;   "priority":"High",

&#x20;   "status":"In Progress"

}

```



\### Success Response



```json

{

&#x20;   "\_id":"688xxxxx",

&#x20;   "priority":"High",

&#x20;   "status":"In Progress"

}

```



\---



\# 7. Delete Complaint



\### Endpoint



```

DELETE /api/complaints/:id

```



\### Success Response



```json

{

&#x20;   "message":"Complaint Deleted Successfully"

}

```



\---



\# 8. Create Technician



\### Endpoint



```

POST /api/technicians

```



\### Request Body



```json

{

&#x20;   "name":"Rahul",

&#x20;   "department":"Electrical",

&#x20;   "phone":"9876543210",

&#x20;   "email":"rahul@gmail.com",

&#x20;   "availability":"Available"

}

```



\### Success Response



```json

{

&#x20;   "message":"Technician Created Successfully"

}

```



\---



\# 9. Get All Technicians



\### Endpoint



```

GET /api/technicians

```



\### Success Response



```json

\[

&#x20;   {

&#x20;       "name":"Rahul",

&#x20;       "availability":"Available"

&#x20;   }

]

```



\---



\# 10. Assign Technician



\### Endpoint



```

PUT /api/complaints/:id/assign

```



Example



```

PUT /api/complaints/688abc123456/assign

```



\### Request Body



```json

{

&#x20;   "technicianId":"689xyz987654321"

}

```



\### Success Response



```json

{

&#x20;   "message":"Technician Assigned Successfully",

&#x20;   "complaint":{

&#x20;       "status":"Assigned"

&#x20;   }

}

```



\---



\# 11. Send Notification



\### Endpoint



```

POST /api/notifications

```



\### Request Body



```json

{

&#x20;   "studentId":"687xxxxx",

&#x20;   "complaintId":"688xxxxx",

&#x20;   "message":"Your complaint has been assigned."

}

```



\### Success Response



```json

{

&#x20;   "message":"Notification Sent Successfully"

}

```



\---



\# 12. Get Notifications



\### Endpoint



```

GET /api/notifications

```



\### Success Response



```json

\[

&#x20;   {

&#x20;       "message":"Your complaint has been assigned."

&#x20;   }

]

```



\---



\# 13. Create Agent Action Log



\### Endpoint



```

POST /api/agentlogs

```



\### Request Body



```json

{

&#x20;   "complaintId":"688xxxxx",

&#x20;   "action":"Assigned Technician",

&#x20;   "reason":"Nearest available technician selected."

}

```



\### Success Response



```json

{

&#x20;   "message":"Agent Action Logged Successfully"

}

```



\---



\# 14. Get Agent Action Logs



\### Endpoint



```

GET /api/agentlogs

```



\### Success Response



```json

\[

&#x20;   {

&#x20;       "action":"Assigned Technician",

&#x20;       "performedBy":"AI Agent"

&#x20;   }

]

```



\---



\# Complete Backend Workflow



```

Student Registers

&#x20;       │

&#x20;       ▼

Student Logs In

&#x20;       │

&#x20;       ▼

Student Creates Complaint

&#x20;       │

&#x20;       ▼

Complaint Saved in MongoDB

&#x20;       │

&#x20;       ▼

AI Agent Reads Complaint

&#x20;       │

&#x20;       ▼

AI Selects Technician

&#x20;       │

&#x20;       ▼

Assign Technician API

&#x20;       │

&#x20;       ▼

Notification API

&#x20;       │

&#x20;       ▼

Agent Action Log API

&#x20;       │

&#x20;       ▼

Frontend Shows Updated Status

```



\---



\# Backend Developed By



Backend Module



Person B



HOSTEL AI – AI Powered Grievance Redressal System

