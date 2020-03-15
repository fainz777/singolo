const formValidation = () => {
  const form = document.querySelector('.contacts_form');
  const submitBtn = document.querySelector('.contacts_form__submit_btn');
  const formFields = document.querySelectorAll('.contacts_form__field');
  
  submitBtn.addEventListener('click', () => {
    form.classList.add('touched');
  });
  
  formFields.forEach(field => {
    field.addEventListener('focusout', (e) => {
      e.target.classList.add('touched');
    });
  });
};

const setNavigation = () => {
  const activeClass = 'active';
  const navLinks = document.querySelectorAll('.page_header__nav_link');
  
  navLinks.map(link => {
    link.addEventListener('click', () => {
    
    });
  });
};

const ready = () => {
  formValidation();
};

document.addEventListener("DOMContentLoaded", ready);

