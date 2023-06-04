const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const image = document.querySelector('#input-file').value.trim();
  const age = document.querySelector('#age').value.trim();

  if (name && breed && image && age) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ name, breed, image, age }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create profile');
    }
  }
};

document
  .querySelector('#form-submit')
  .addEventListener('click', newFormHandler);
