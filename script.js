

let w2 = document.getElementById("w2");


let items = ["Breakfast", "Lunch", "Dinner", "Supper"]

for (let i = 0; i < 4; i++) {
  let dd = document.createElement("div");
  let sp = document.createElement("span")
  sp.innerHTML = items[i]
  dd.append(sp)

  let edit = document.createElement("textarea")
  edit.value = items[i]
  edit.rows = 1
  edit.style.display = "none"
  edit.addEventListener("focusout", (event) => {
    let t = event.target.parentElement
    t.children[0].style.display = "block"
    t.children[0].innerHTML = t.children[1].value
    t.children[1].style.display = "none"
  });
  dd.append(edit)


  dd.ondblclick = function(evt) {
    let t = evt.target.tagName == "SPAN" ? evt.target.parentElement : evt.target;
    console.log(t)
    t.children[0].style.display = "none"
    t.children[1].style.display = "block"
    t.children[1].focus()
    
  }
  w2.appendChild(dd);
}




// let s = {
//   name: "Mustafa",
//   age: 14,
//   class: 8,
// }

// s.describe = function() {
//   return "I am "+this.name +" and my age is "+this.age+" i study in class "+this.class
// }

// function Student(name, age, classe) {
//   this.name = name
//   this.age = age
//   this.classe = classe
// }

// Student.prototype.describe = function() {
//   return "I am "+this.name +" and my age is "+this.age+" i study in class "+this.classe
// }

// let s = new Student("Abdullah", 10, 4)

// console.log(s.describe())
