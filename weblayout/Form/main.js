document.addEventListener("DOMContentLoaded", function () {
  let formData = {};

  const form = document.querySelector("form");
  const LS = localStorage;

  //Получаем данные из input
  form.addEventListener("input", function (event) {
    formData[event.target.name] = event.target.value;
    LS.setItem("formData", JSON.stringify(formData));
    console.log(formData);
  });

  //Востановление данных из LS, после перезагрузки страницы

  if (LS.getItem("formData")) {
    formData = JSON.parse(LS.getItem("formData"));
    // console.log(formData);

    //form.elements[name]
    for (let key in formData) {
      if (form.elements[key].type === "checkbox" && formData[key] === "on") {
        form.elements[key].checked = true;
      } else {
        form.elements[key].value = formData[key];
      }
    }
  }
});
