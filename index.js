function tambahTabel() {
  
    var body = document.getElementsByTagName("body")[0];
  
   
    var tabel = document.createElement("table");
    var tabelBody = document.createElement("tbody");
  
 
    for (var i = 0; i<2; i++) {
    
      var baris = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        
        var tambahCell = document.createElement("td");
        var tambahText = document.createTextNode(  "Masukkan Angka" +   "Masukkan Angka");
        tambahCell.appendChild(tambahText);
        baris.appendChild(tambahCell);
      }
  
   
      tabelBody.appendChild(baris);
    }
  

    tabel.appendChild(tabelBody);

    body.appendChild(tabel);

    tabel.setAttribute("border", "2");
  }
