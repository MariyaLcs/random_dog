let btn = document.querySelector("#btn"),
  img = document.querySelector("#photo");

//listen for clicks
btn.addEventListener("click", function () {
  //make the request
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let url = JSON.parse(XHR.responseText).message;
      img.src = url;
    }
  };

  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});
