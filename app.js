const searchFun = () => {
  let filterValue = document.getElementById("myInput").value.toUpperCase();
  // console.log(filterValue);
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  // console.log(tr);
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    // console.log(td);
    if(td){
      let textValue = td.textContent || td.innerHTML;
      // console.log(textValue);
      if(textValue.toUpperCase().indexOf(filterValue) > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
      
    }
  }
};
