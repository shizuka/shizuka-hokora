$(document).ready(function () {
  
  $('#toggle-box-checkbox').on("change", function () {
    if (this.checked) {
      $('#dark-mode').prop("disabled", false);
      localStorage.setItem("darkmode", "on");
    } else {
      $('#dark-mode').prop("disabled", true);
      localStorage.setItem("darkmode", "off");
    }
  })
});