/*Start Pixel Art Maker */
$(document).ready(function(event) {
  const pixelCanvas = $("#pixelCanvas");
  const sizePicker = $("#sizePicker");

  /*PreLoad Canvas*/
  pixelCanvas.ready(function() {
    height = 0;
    while (height < 20) {
      pixelCanvas.append("<tr></tr>");
      height++;
      for (let width = 0; width < 20; width++) {
        pixelCanvas
          .children()
          .last()
          .append("<td></td>");
      }
    }
  });

  sizePicker.submit(function(event) {
    pixelCanvas.empty();

    event.preventDefault();
    makeGrid();
  });
  //resize canvas
  function makeGrid() {
    let inputHeight = $("#inputHeight").val();
    let inputWidth = $("#inputWidth").val();
    let height = 0;

    while (height < inputHeight) {
      pixelCanvas.append("<tr></tr>");
      height++;
      for (let width = 0; width < inputWidth; width++) {
        pixelCanvas
          .children()
          .last()
          .append("<td></td>");
      }
    }
  }
  // paint color
  $("#colorPicker").change(function() {
    let pixelColor = $("#colorPicker").val();
  });

  //fill pixel on click
  pixelCanvas.on("click", "td", function() {
    let pixelColor = $("#colorPicker").val();
    $(this).css("background-color", pixelColor);
  });

  $(pixelCanvas).on("mousedown", function() {
    mouseDown = true;
  });

  $(pixelCanvas).on("mouseup", function() {
    mouseDown = false;
  });

  pixelCanvas.on("mousemove", "td", function(event) {
    event.preventDefault();
    let pixelColor = $("#colorPicker").val();
    if (mouseDown) {
      $(this).css("background-color", pixelColor);
    }
  });

  //clear pixel on double click
  pixelCanvas.on("dblclick", "td", function() {
    $(this).css("background-color", "transparent");
  });

  $(document).contextmenu(function() {
    return false;
  });
});
