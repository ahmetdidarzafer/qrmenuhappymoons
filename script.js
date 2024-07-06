const menu = {
    başlangıçlar: [
        { name: 'Maxi Combo Mix (3-4 kişilik)', description: 'Cips patates, sweet chilli churros, fireball ve mac&cheese topları, jalapeno biberi, Ege otlu ve kıymalı tulumba börekleri, tavuklu ve keçi peynirli patlıcanlı empenadalar, guacamole, hot chili ve sarımsak aioli sos ile.', image: 'https://www.happygroup.com.tr/uploads/2023/04/maxicombomix.jpg' },
        { name: 'Chicken In London', description: 'Peynir soslu elbows makarna, jalapeno biber, Meksika fasulyesi ve acılı bolognese sos, kızarmış tortilla cips ile', image: 'https://www.happygroup.com.tr/uploads/source/2022/06/chicken-in-london.jpg' }
    ],
    salatalar: [
        { name: 'Cajun Chicken Salata', description: 'S.mix, cajun baharatında hazırlanmış tavuk parçaları, mısır, kaşar peyniri, domates, salatalık, renkli biberler ve honey mustard sos ile.', image: 'https://www.happygroup.com.tr/uploads/source/2022/06/cajun-chicken-salata.jpg' },
        { name: 'Falafel Salata', description: 'S.mix, panelenmiş falafel, taze nane, ceviz, peynir topları, mor soğan, cherry domates ve nar ekşisi sos ile.', image: 'https://www.happygroup.com.tr/uploads/source/2022/06/falafel-salata-51.jpg' }
    ],
    'ana Yemekler': [
        { name: 'Mexico Schnitzel', description: 'Mısır cipsi ile panelenmiş tavuk, salsa sos, sour cream sos, patates tava ve s.mix ile.', image: 'https://www.happygroup.com.tr/uploads/source/2023/05/bobs-mexico-schnitzel.jpg' },
        { name: 'Tikka Masala Tavuk', description: 'Tavuk parçaları, tikka masala sos ve Jasmin pilav ile.', image: 'https://www.happygroup.com.tr/uploads/source/2023/05/tikka-masala-tavuk-hm.jpg' }
    ],
    tatlılar: [
        { name: 'Dondurmalı Cookie (1-2 Kişilik)', description: 'Dondurma ile servis edilir.', image: 'https://www.happygroup.com.tr/uploads/source/2023/05/dondurmali-cookie-hm.jpg' },
        { name: 'KITKAT ® ile Çikolatalı Çıtır Cheesecake', description: '', image: 'https://www.happygroup.com.tr/uploads/source/2023/05/bobs-kitkat-cheesecake.jpg' },
    ],
    içecekler: [
        { name: 'Meyveli Soda', description: 'Limonlu, elmalı.', image: 'https://lh5.googleusercontent.com/proxy/wtzXmnmChO8EwJO4TMMInGHbFrhmm3OR6dbad9UHrCUn3eLweO4rvGJTLx0oL3ZceXBQiscr4mCaKefz_vS6hF5nCHGBgGu_ei4s0LQmmnA2mgV7H438' },
        { name: 'Kola', description: 'Soğuk kola.', image: 'https://img.gercekgundem.com/rcman/Cw820h461q95gc/storage/files/images/2023/07/18/kolaya-ve-gazli-iceceklere-20-gun-icinde-ikinci-zam-artik-luks-oldu-uABe.jpg' }
    ]
};

let currentCategory = '';

function showCategories() {
    document.getElementById('category-list').classList.remove('d-none');
    document.getElementById('items').classList.add('d-none');
    document.getElementById('items').innerHTML = ''; // Clear items list
}

function showItems(category) {
    currentCategory = category;
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = ''; // Clear items list

    const categoryTitle = document.createElement('h2');
    categoryTitle.id = 'category-title';
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    itemsContainer.appendChild(categoryTitle);

    const row = document.createElement('div');
    row.className = 'row';

    menu[category].forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = item.image;
        img.alt = item.name;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = item.name;
        

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = item.description;
        

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    itemsContainer.appendChild(row);
    document.getElementById('category-list').classList.add('d-none');
    itemsContainer.classList.remove('d-none');
}
