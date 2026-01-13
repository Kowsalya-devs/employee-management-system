# Employee Management System – Backend API Documentation

## Base URL
http://localhost:5000

---

## 1. Get All Employees

### Endpoint
GET /employees

### Description
Fetches all employees from the database.

### Request
No body required

### Response – 200 OK
```json
[
  {
    "id": 1,
    "name": "Kowsalya",
    "age": 22,
    "position": "Developer",
    "department": "IT"
  }
]
## Base URL
http://localhost:5000

---

## 2. POST – Add Employee

### Endpoint
POST /employees

### Description
Adds a new employee to the database.

### Request Body
```json

{
  "name": "Abi",
  "age": 23,
  "position": "Tester",
  "department": "IT"
}
## Response – 200 OK
Employee added

## 3. PUT – Update Employee

### Endpoint
PUT /employees/:id

### Description
Updates an existing employee details in the database.

### Request Body
```json
{
  "name": "Abi Updated",
  "age": 24,
  "position": "Senior Tester",
  "department": "IT"
}

## Response – 200 OK
Employee Updated

## 4. DELETE – Delete Employee

### Endpoint
DELETE /employees/:id

### Description
Deletes an employee from the database using employee ID.

### Request
No body required

### Response – 200 OK
Employee deleted





