function inSNT() {
  //input
  let iSo = +document.getElementById("number").value;
  //output
  let ketQua = "";
  //Xử lí
  for (let i = 2; i <= iSo; i++) {
    let checkSNT = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        checkSNT = false;
        break;
      }
    }
    if (checkSNT) {
      ketQua += i + " ";
    }
  }
  display(ketQua);
}

function display(ketQua) {
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("ketQua").innerHTML = ketQua;
}
