const user =[
    {
        id:1,
        name : "Vijay",
        age : 48
    },
    {
        id:2,
        name : "Ram",
        age : 19
    }
];


const addUser = (obj,user) => {
    const index = obj.findIndex((val) => val.id===user.id);
    if(index === -1) obj.push(user);
    return obj;
}

const getUser = (obj,id) => {
    return obj.find((user) => user.id === id) || {};

    // Other Method
    // return obj.filter((user) => {
    //     return user.id === id;
    //  })[0] || {};
}

const editUser = (obj,id,key,value) =>{
    const index = obj.findIndex((user) => user.id===id);
    if( index != -1) obj[index][key]=value;
    return obj;
}

const deleteUser = (obj,id) =>{
    const index = obj.findIndex((user) => user.id === id);
    if(index !== -1) obj.splice(index,1);
    return obj;
    
    // Other method 
    // return obj.filter((user,index,obj) => {
    //     if(user.id === id){
    //         obj.splice(index,1);
    //         return true;
    //     }
    //     return false;
    // })
}

const newUser = {
    id:3,
    name : "Kirthick",
    age : 18
}

console.log("orginial Object = " ,user)
console.log("Add User = ",addUser(user,newUser))
console.log("Get User = " ,getUser(user,4))
console.log("Edit User = ",editUser(user,3,'name','Madesh'))
console.log("Edit User = ",editUser(user,3,'age',22))
console.log("Delete User = ",deleteUser(user,3))
console.log("Final After modified : ")
console.log(user)

/*
        OUTPUT
orginial Object =  [ { id: 1, name: 'Vijay', age: 48 }, { id: 2, name: 'Ram', age: 19 } ]

Add User =  [
  { id: 1, name: 'Vijay', age: 48 },
  { id: 2, name: 'Ram', age: 19 },
  { id: 3, name: 'Kirthick', age: 18 }
]

Get User =  {}

Edit User =  [
  { id: 1, name: 'Vijay', age: 48 },
  { id: 2, name: 'Ram', age: 19 },
  { id: 3, name: 'Madesh', age: 18 } //name changes
]

Edit User =  [
  { id: 1, name: 'Vijay', age: 48 },
  { id: 2, name: 'Ram', age: 19 },
  { id: 3, name: 'Madesh', age: 22 } //age changes
]

Delete User =  [ { id: 1, name: 'Vijay', age: 48 }, { id: 2, name: 'Ram', age: 19 } ]

Finally After modified user object : 
[ { id: 1, name: 'Vijay', age: 48 }, { id: 2, name: 'Ram', age: 19 } ]

*/