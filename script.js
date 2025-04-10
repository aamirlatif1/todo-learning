

let v = 1;

function add() {
  console.log(v);
  let w = document.getElementById("wrapper");
  w.innerHTML += " <div>New value "+v+"</div>";
  v++;
}