export const  baseurl = "http://172.201.248.164/v1"
export const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZTVhMmFjLTRmMWMtNDdhZi04MTVjLTAzODMxODJmMzZiNSIsInJvbGUiOiJDT0xMRUNUT1IiLCJpYXQiOjE3MDQwMzgzNDF9.EuJGzdQLQJvKNLhKHJTf9HhzyBdrfzLn4BQGGUFqHcM"
export const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
});

