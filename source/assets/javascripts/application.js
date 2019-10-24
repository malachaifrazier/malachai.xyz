$(document).ready(function(){
  $('.nav-button').click(function(){
    $('body').toggleClass('nav-open');
  });

  // $('#inputPhone').mask('(000) 000-0000');
  $("#contact-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      window.FlashMessage.success('Success! I will contact you within 24 hours to discuss your needs 🤓', {
        progress: false,
        interactive: true,
        timeout: 8000,
        appear_delay: 200,
        container: '.flash-container',
        theme: 'default',
        classes: {
          container: 'flash-container',
          flash: 'flash-message',
          visible: 'is-visible',
          progress: 'flash-progress',
          progress_hidden: 'is-hidden'
        }
      });

      $form[0].reset();
    });
  });
});
