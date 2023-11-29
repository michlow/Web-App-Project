function displayFurniturePreview(jsonFilePath, displayElementId) {
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            const displayElement = document.getElementById(displayElementId);
            let row;

            data.slice(0, 9).forEach((item, index) => {
                if (index % 3 === 0) {
                    row = document.createElement('div');
                    row.className = 'row';
                    displayElement.appendChild(row);
                }

                const col = document.createElement('div');
                col.className = 'col-md-4';
                col.innerHTML = `
                    <div class="card">
                        <img src="${item.imageURL}" class="card-img-top custom-img-height aspect-ratio-img" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">Price: $${item.price}</p>
                        </div>
                    </div>
                `;
                row.appendChild(col);
            });
        })
}