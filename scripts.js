function check() {
  let data = document.getElementById("data").value;

  if (data % 4 == 0 && data % 100 != 0) window.alert("É BISEXTOOO!!!! <3");
  else if (data % 4 == 0 && data % 100 == 0 && data % 400 == 0)
    window.alert("É BISEXTOOO!!!! <3");
  else window.alert("NÃO É BISEXTO :(");
}
