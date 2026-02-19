<script>
document.addEventListener("DOMContentLoaded", function() {
  // =========================
  // Floating Contact Widget
  // =========================
  var widget = document.querySelector('.contact-widget');
  if (widget) {
    var toggle = widget.querySelector('.contact-toggle');
    if (toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        widget.classList.toggle('open');
      });
    }
  }

  //
</script>
