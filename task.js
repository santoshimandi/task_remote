"use script"
let array=[{user_name:"santu",user_password:"santu",user_age:26,user_state:"ap"},{user_name:"santosh",user_password:"santosh",user_age:27,user_state:"ts"}];
console.log(array);

alert("enter valid username and password to login");


for(index=0;index<100;index++)
{
  let username=prompt("enter username");
  let password=prompt("enter password");


  // if(username==array[index].user_name && password==array[index].user_password)
  // {
  //   alert("cheers.......you are successfully logged into the website");
  // }

  if((username==Object.keys(array[index].user_name)) && (password==Object.keys(array[index].user_password)))
  {
    alert("cheers.......you are successfully logged into the website");
  }

// if(username==Object.keys(index)(user_name))
// {
//   if(password==Object.keys[index] in array[index])
//   {
//   alert("cheers.......you are successfully logged into the website");
//   break;
//   }
// }
else {
  alert("you are not an user of this website.so,please register yourself");
  let username=prompt("enter username");
  let password=prompt("enter password");
  let age=+prompt("enter your age")
  let state=prompt("enter your state");
  array.push({
    user_name:username,
    user_password:password,
    user_age:age,
    user_state:state
  })
  alert("please login to your website");

}
console.log(array);
}
