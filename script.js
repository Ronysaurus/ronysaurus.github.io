$(document).ready(function () {
  // By default
  $(".es_lang").addClass("active-lang");
  $("#lang-switch .es").addClass("active-flag");

  // Function switch
  $(function () {
    // French button
    $("#lang-switch .es").click(function () {
      // Enable French
      $(".es_lang").addClass("active-lang");

      // Disable English
      $(".en_lang").removeClass("active-lang");

      // Active or remove the opacity on the flags.
      $("#lang-switch .es").addClass("active-flag");
      $("#lang-switch .en").removeClass("active-flag");
    });

    // English button
    $("#lang-switch .en").click(function () {
      // Enable English
      $(".en_lang").addClass("active-lang");

      // Disable French
      $(".es_lang").removeClass("active-lang");

      // Active or remove the opacity on the flags.
      $("#lang-switch .en").addClass("active-flag");
      $("#lang-switch .es").removeClass("active-flag");
    });
  });
});
