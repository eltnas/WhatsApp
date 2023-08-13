const jsonUrl = 'https://raw.githubusercontent.com/eltnas/jsons/main/countries.json';

fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        const datalist = document.getElementById('countryList');

        Object.keys(data).forEach(key => {
            const opt = data[key];
            const optElement = document.createElement('option');
            optElement.setAttribute("value", `${opt.ddi}`)
            optElement.innerHTML = `<span><img src="${opt.img}" alt="${opt.pais}" width="23" height="14"> (+${opt.ddi}) ${opt.pais}</span>`;
            datalist.appendChild(optElement);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));