
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZTVhMmFjLTRmMWMtNDdhZi04MTVjLTAzODMxODJmMzZiNSIsInJvbGUiOiJDT0xMRUNUT1IiLCJpYXQiOjE3MDQwMzgzNDF9.EuJGzdQLQJvKNLhKHJTf9HhzyBdrfzLn4BQGGUFqHcM"
//Bearer token

// get all users
let url = 'http://172.201.248.164/v1/profiles' 

//get single user by id
let urlsingle = 'http://172.201.248.164/v1/profiles/3fa85f64-5717-4562-b3fc-2c963f66afa6' 

//patch update user

let urlpatch = 'http://172.201.248.164/v1/profiles/{id}'
// body
// {
//     "firstName": "string",
//     "lastName": "string",
//     "phoneNumber": "string",
//     "email": "user@example.com",
//     "active": true,
//     "collectionBoundary": {}
//   }
