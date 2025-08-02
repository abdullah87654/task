let arr=document.getElementsByClassName("container")
    let n=arr.length
function count(){ 
      document.querySelector(".count").innerHTML="Total Task = " + n;
}
count()
function del(){
    this.parentElement.remove();
    n=n-1
    count()
}
function add(){
    let div=document.createElement("div");
    div.setAttribute("class","task");
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("class","input");
    let done=document.createElement("button");
    done.setAttribute("class","bt done");
    done.setAttribute("onclick","pop()")
    done.innerHTML="Complete";
    let remove=document.createElement("button");
    remove.setAttribute("class","bt remove");
    remove.setAttribute("onclick","del.call(this)");
    remove.innerHTML="Delete";
    div.append(input);
    div.append(done);
    div.append(remove);
    document.querySelector(".container").append(div);
    n=n+1
    count()
}
let j=document.querySelector(".pop");
function pop(){
    j.style.display="block"
}
function cl(){
    j.style.display="none"
}
function cle(){
     let parent=document.querySelector(".container");
   while(parent.firstElementChild){
   parent.removeChild(parent.firstElementChild);
   }
   n=0;
   count()
}

