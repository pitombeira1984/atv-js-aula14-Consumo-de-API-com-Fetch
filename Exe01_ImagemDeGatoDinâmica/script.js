document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const removeBotao = document.getElementById('removeBotao');
    const catImages = document.getElementById('catImages');

    botao.addEventListener('click', fetchCatImages);
    removeBotao.addEventListener('click', removeCatImages);

    function fetchCatImages() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                if (!response.ok) {
                    throw new Error('A solicitação não foi bem-sucedida');
                }
                return response.json();
            })
            .then(data => {
                catImages.innerHTML = '';
                data.forEach(cat => {
                    const catImage = document.createElement('img');
                    catImage.src = cat.url;
                    catImages.appendChild(catImage);
                });
            })
            .catch(error => {
                console.error(`Erro: ${error}`);
            });
    }

    function removeCatImages() {
        catImages.innerHTML = '';
    }
});

