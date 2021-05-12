const posts=[
    {title:'Post one',body:'This is post one'},
    {title:'Post two',body:'This is post two'}
];
function getPosts(){
    setTimeout(() => {
        let output=' ';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
function creatPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error=false;
            if (! error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        },1000);
    });
    
}
function deletePost(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            
            let error =true;
            if ((posts.length)==0){error=false}
            if (error){
                posts.pop();
                res();
            }else{
                rej('Error: Array is empty')
            }
        },1000);
    });
    
}   
creatPost({title:'Post three',body:'This is post three'}).then(getPosts).
catch(err=> console.log(err));   // add post three
deletePost();   // delete post three
deletePost();   // delete post two
deletePost();   // delete post one
deletePost().then(getPosts).
catch(e=> console.log(e));  // deleting from empty array will return error


//////////promise.all///////
const promise1= Promise.resolve("hello world");
const promise2=10;
const promise3=new Promise ((resolve,reject) =>{
    setTimeout(resolve,2000,'goodbye')
});
Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
