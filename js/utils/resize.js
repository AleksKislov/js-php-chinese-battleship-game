function resize() {
  var cellActualWidth = document.getElementsByTagName("tbody")[0].offsetWidth;
  var td = document.getElementsByTagName("td");
  var th = document.getElementsByTagName("th");

  for (let i=0; i < th.length; i++) {
      th[i].style.height = ((cellActualWidth -11) / 10) + "px";
      th[i].style.width = ((cellActualWidth -11) / 10) + "px";
  }

  for (let i=0; i < td.length; i++) {
      td[i].style.height = ((cellActualWidth -11) / 10) + "px";
  }

  var formId= document.getElementById("centerIt");
  var formIdActualWidth = formId.offsetWidth;
  formId.style.marginLeft = (formIdActualWidth * 0.15) + "px";
}