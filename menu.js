// Add ARIA attributes to button
$(".js-toggle-trigger").attr("aria-expanded", false).attr("aria-label", "Toggle site menu");

// When the button is clicked, then...
$(".js-toggle-trigger").click(function() {
  // Get the state and recast it as a true/false (boolean)
  let expanded = $(this).attr("aria-expanded") === "true" || false;
  // Toggle the state (if it was false, now set it to be true)
  $(this).attr("aria-expanded", !expanded);
});
