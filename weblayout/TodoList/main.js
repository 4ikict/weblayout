window.addEventListener("DOMContentLoaded", function () {
  let input_text = document.getElementById("input-text");
  let input_open = this.document.getElementById("input-open");
  let input_clear = this.document.getElementById("input-clear");

  input_open.addEventListener("click", function () {
    let text_value = input_text.value;
    // Добавляем новый лист после нажатия кнопки и очищаем input
    list(text_value);
    input_text.value = "";
  });

  input_clear.addEventListener("click", function () {
    input_text.value = "";
  });

  //Создаем новый лист
  function list(value) {
    let ul = document.getElementById("lists");
    let li = document.createElement("li");
    li.className = "list";

    let block_btn = document.createElement("div");
    let open_btn = document.createElement("button");
    open_btn.className = "open-btn";
    open_btn.innerHTML = "Open";
    let clear_btn = document.createElement("button");
    clear_btn.className = "clear-btn";
    clear_btn.innerHTML = "Clear";

    open_btn.addEventListener("click", function () {
      if (li.className === "list") {
        li.className = "list green";
      } else {
        li.className = "list";
      }
    });

    clear_btn.addEventListener("click", function () {
      li.remove();
    });

    li.innerHTML = value;
    block_btn.append(open_btn, clear_btn);
    li.append(block_btn);
    ul.append(li);
  }
});
