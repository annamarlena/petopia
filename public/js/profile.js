const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#profile-name').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/profiles/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete profile');
    }
  }
};

document
  .querySelector('.new-profile')
  .addEventListener('submit', newFormHandler);

