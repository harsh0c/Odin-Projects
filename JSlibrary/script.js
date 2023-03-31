let myLibrary = [];   // book objects.

function Book(title,author,pages,read) {
  // the constructor...
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}
Book.prototype.toggleread=function(){ // change read status
  this.read=!this.read;
}

function dis(){
  let elemdis=document.querySelector(".display");
  elemdis.innerHTML="";
  for(let i=0;i<myLibrary.length;i++){
    const content = document.createElement('div');
    content.classList.add('content');
    content.style.cssText='font-size: 30px; border:black; background-color: pink; margin:5px; padding:12px';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "Title: " + myLibrary[i].title;
    content.appendChild(title);

    const auth = document.createElement('div');
    auth.classList.add('title');
    auth.textContent = "Author: " + myLibrary[i].author;
    content.appendChild(auth);

    const pag = document.createElement('div');
    pag.classList.add('pag');
    pag.textContent = "Pages: " + myLibrary[i].pages;
    content.appendChild(pag);

    const read = document.createElement('button');
    read.classList.add('read');
    read.textContent = "Status: " + (myLibrary[i].read? "Read" : "Not Read");
    content.appendChild(read);

    const rmbut = document.createElement('button');
    rmbut.style.display="block";
    rmbut.classList.add('rmbut');
    rmbut.textContent = "Remove\n";
    content.appendChild(rmbut);
    elemdis.appendChild(content);
    

    read.addEventListener("click",function(){   // to toggle read status
      myLibrary[i].toggleread();
      dis();
    });

    rmbut.addEventListener("click",function(){    // to remove book
      myLibrary.splice(i,1);
      dis();
    });
  }
}



function addBookToLibrary(event) {    // add the book from form.
  // do stuff here
  var btitle = document.getElementById("title").value;
  var bauthor = document.getElementById("author").value;
  var bpages = document.getElementById("page").value;
  var bread = document.getElementById("check").checked;

  let bookobj=new Book(btitle,bauthor,bpages,bread);
  myLibrary.push(bookobj);
  event.preventDefault();
  document.getElementById("Form").reset();
  // console.log(myLibrary);
  dis();

}

let addbk=document.querySelector("#book");  // add book show form.
addbk.addEventListener("click",disform);

function disform(){   // unhide form.
    let elform=document.querySelector(".bform")
    elform.style.display="block";
}


const bookadd = document.querySelector("#id-submit");
bookadd.addEventListener("click", addBookToLibrary, false);
