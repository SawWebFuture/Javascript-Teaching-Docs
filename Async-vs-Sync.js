//Javascript is a single threaded language = reads line by line
//Callstate vs Web APIs

////////// Sync code

function otherFunct(){
  console.log("we are in another funct");
  console.log("do stuff");
}

console.log("start");

otherFunct();

console.log("end");

// Async example

console.log("start");

setTimeout(() => {
  console.log('Timeout')
}, 2000);


console.log("end");
//result: Start, End, Timeout

//////////////////////// Async used
// Callback function
// Nesting and nesting 

console.log("start");

function loginUser(email, password){
  setTimeout(() => {
    console.log('Timeout')
    callback { userEmail: email };
  }, 2000);
}

function getUserVideos(email, callback){
  setTimeOut(() => {
    callback (['video1', 'video2', 'video3']);
  }, 1000);
}

const user = loginUser("deded@gmail.com", 1232132, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, videos => {
    console.log(videos);
  });
});


console.log("end");
