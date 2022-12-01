// Write your solution in this file!
const employee = {
    employeename: "sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
const newObj = {...obj};
newObj[key] = value;
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
delete employee[key];
return employee;
}

eyJsbXNfZW1haWwiOiJtYXh3ZWxsLm
dpdGhpbmppQHN0dWRlbnQubW9yaW5n
YXNjaG9vbC5jb20iLCJ2Y3NfdXJsIj
oiZ2l0QGdpdGh1Yi5jb206bWF4R2l0
aGluamk0OS9waGFzZS0wLWludHJvLX
RvLWpzLTItb2JqZWN0cy1sYWIuZ2l0
IiwidGltZXN0YW1wIjoiMjAyMi0xMS
0yNyAxODoyODozMiBVVEMifQ==