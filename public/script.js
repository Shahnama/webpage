document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/pairings')
        .then(response => response.json())
        .then(data => displayPairings(data));
});

function setupNameClicks() {
    document.querySelectorAll('.pair-name').forEach(element => {
      element.addEventListener('click', function() {
        const name = this.textContent;
        fetch(`/api/profile/${name}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Profile not found');
            }
            return response.json();
          })
          .then(profile => {
            displayProfile(profile); // Implement this function to show the profile and comments
          })
          .catch(error => console.error('Error fetching profile:', error));
      });
    });
  }

function displayPairings(data) {
    const monthSelect = document.getElementById('monthSelect');
    const pairsList = document.getElementById('pairs-list');

    // Populate month selector
    for (const month in data) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSelect.appendChild(option);
    }

    // Handle month selection change
    monthSelect.addEventListener('change', function() {
        const selectedMonth = this.value;
        const pairs = data[selectedMonth];
        pairsList.innerHTML = ''; // Clear current list

        // Display pairs for selected month
        pairs.forEach(pair => {
            const div = document.createElement('div');
            div.className = 'pair';
            div.innerHTML = `<h3>${pair.pair}</h3><img src="${pair.image}" alt="Pair Image">`;
            pairsList.appendChild(div);
        });
    });
}

function fetchAndDisplayProfile(personId) {
    fetch(`/api/profile/${personId}`)
      .then(response => response.json())
      .then(profile => {
        console.log(profile); // Implement the logic to display the profile information
        // For example, update the DOM with profile.name, profile.image, and iterate over profile.comments to display them.
      })
      .catch(error => console.error('Error fetching profile:', error));
  }
