// in Java script we can give default parameters to funtions
1.
const sum= (a,b=4)=>{
    console.log(a+b);
}
sum(2,3);
2.
const name = (name,companyName="currentCompany")=>{
    console.log("my name is "+name +"and im working in "+companyName);
}
name("Aditya")
