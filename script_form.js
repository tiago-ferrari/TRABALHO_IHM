document.addEventListener('DOMContentLoaded', function() {
    updateIndicator(1);
    setFutureDate();
});

function nextStep(step) {
    document.querySelectorAll('.form-step').forEach(function(step) {
        step.style.display = 'none';
    });
    document.getElementById('step' + step).style.display = 'block';
    updateIndicator(step);
}

function prevStep(step) {
    document.querySelectorAll('.form-step').forEach(function(step) {
        step.style.display = 'none';
    });
    document.getElementById('step' + step).style.display = 'block';
    updateIndicator(step);
}

function updateIndicator(step) {
    document.querySelectorAll('.step-indicator').forEach(function(indicator) {
        indicator.classList.remove('active');
    });
    document.getElementById('indicator' + step).classList.add('active');
}

function populateCities() {
    const state = document.getElementById('state').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '<option value="">Selecione a cidade</option>'; // Limpa as opções

    const cities = {
        'SP': ['São Paulo', 'Campinas', 'Santos'],
        'RJ': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
        'MG': ['Belo Horizonte', 'Uberlândia', 'Ouro Preto'],
        'SC': ['Iomerê', 'Florianópolis', 'Videira']
    };

    if (state && cities[state]) {
        cities[state].forEach(function(city) {
            const option = document.createElement('option');
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }
}

function setFutureDate() {
    const dateInput = document.getElementById('date');
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 20);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    dateInput.value = `${year}-${month}-${day}`;
}
