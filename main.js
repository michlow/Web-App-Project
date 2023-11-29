document.addEventListener('DOMContentLoaded', () => {

    const styleOptions = document.querySelectorAll('.card'); 
    const styleSelectorSection = document.getElementById('style-selector');
    const budgetOptions = document.querySelectorAll('[data-budget]');
    const budgetSection = document.getElementById('budget');
    const budgetUnder10kButton = document.querySelector('[data-budget="<10000"]');
    const budgetUnder20kButton = document.querySelector('[data-budget="<20000"]');
    const noBudgetButton = document.querySelector('[data-budget="no budget"]');
    const budgetButtonToggle = [budgetUnder20kButton,noBudgetButton];
    const recommendationsContainer = document.getElementById('shop-recommendations');

    let selectedStyle = '';
    
    styleOptions.forEach(option => {
        option.addEventListener('click', function() {
            selectedStyle = this.getAttribute('data-style');

            if (selectedStyle === 'designer') {
                budgetUnder10kButton.disabled = true;
                budgetUnder10kButton.classList.add('disabled');
            } else {
                budgetUnder10kButton.disabled = false;
                budgetUnder10kButton.classList.remove('disabled');
            };
            if (selectedStyle === 'second hand'){
                budgetButtonToggle.forEach(button =>{
                    button.disabled = true; 
                    button.classList.add('disabled');})
            } else {
                budgetButtonToggle.forEach(button =>{
                    button.disabled = false; 
                    button.classList.remove('disabled');})}
            
            budgetSection.style.display = 'block';
            styleSelectorSection.style.display = 'none';
            recommendationsContainer.style.display = 'none';
        })});
    
    let selectedBudget = '';

    budgetOptions.forEach(button => {
        button.addEventListener('click', function() {
            selectedBudget = this.getAttribute('data-budget');
            updateRecommendations(selectedStyle, selectedBudget);
            budgetSection.style.display = 'none';
            recommendationsContainer.style.display = 'block'; 

    })

    });
    
    function updateRecommendations(selectedStyle,selectedBudget){
        
        let htmlContent = ''; 

        if (selectedStyle === 'midcentury' && selectedBudget === '<10000') {
            htmlContent = `
                <h3>Midcentury style with a budget of less than $10,000</h3>
                <ul>
                    <li><a href="https://scanteak.com.sg/" target="_blank">Scanteak</a></li>
                    <li><a href="https://www.castlery.com/sg/" target="_blank">Castlery</a></li>
                    <li><a href="https://www.soulandtables.com.sg/" target="_blank">Soul and Tables</a></li>
                    <li>
                        <a href="https://gamarfurniture.com/" target="_blank">Gamar (#supportlocal)</a>
                        <div id="gamar-preview"></div>
                    </li> 
                </ul>`;

            displayFurniturePreview('./Reformatted_Gamar_Dining_Table.json', 'gamar-preview');

        } else if (selectedStyle === 'midcentury' && selectedBudget === '<20000') {
            htmlContent = `
                <h3>Midcentury style with a budget of less than $20,000</h3>
                <ul>
                    <li><a href="https://www.thecommunelife.com/" target="_blank">Commune</a></li>
                    <li><a href="https://greyandsanders.com/" target="_blank">Grey and Sanders</a></li>
                </ul>`;
        } else if (selectedStyle === 'midcentury' && selectedBudget === 'no budget'){
            htmlContent = `
                <h3>Midcentury style without a budget</h3>
                <ul>
                    <li><a href="https://www.nodenhome.com/" target="_blank">Noden</a></li>
                    <li><a href="https://danishdesignco.com.sg/" target="_blank">Danish Design Co</a></li>
                </ul>`;
        } else if (selectedStyle === 'muji' && selectedBudget === '<10000'){
            htmlContent = `
                    <h3>Muji style with a budget of less than $10,000</h3>
                    <ul>
                        <li><a href="https://www.muji.com/sg/products/list/Furniture%20and%20Interior" target="_blank">Muji</a></li>
                        <li>
                            <a href="https://www.ikea.com/sg/en/" target="_blank">Ikea</a>
                            <div id="ikea-preview"></div>
                        </li>
                        <li><a href="https://www.nitori.com.sg/" target="_blank">Nitori</a></li> 
                    </ul>
            `;
            
            displayFurniturePreview('./Cleaned_Ikea_Dining_Table.json', 'ikea-preview');

        } else if (selectedStyle === 'muji' && selectedBudget === '<20000'){
            htmlContent = `
                <h3>Muji style with a budget of less than $20,000</h3>
                <ul>
                    <li><a href="https://how-furniture.sg/" target="_blank">How Furniture</a></li>
                    <li><a href="https://www.thecommunelife.com/" target="_blank">Commune</a></li>
                    <li><a href="https://www.originals.com.sg/" target="_blank">Originals</a></li> 
                </ul>`;
        } else if (selectedStyle === 'muji' && selectedBudget === 'no budget'){
            htmlContent = `<h3> I havent found a shop. Let me know if you do!</h3>`;
        } else if (selectedStyle === 'modern' && selectedBudget === '<10000'){
            htmlContent = `
                <h3>Modern style with a budget of less than $10,000</h3>
                <ul>
                    <li><a href="https://www.castlery.com/sg/" target="_blank">Castlery</a></li>
                </ul>`;
        } else if (selectedStyle === 'modern' && selectedBudget === '<20000'){
            htmlContent = `
                <h3>Modern style with a budget of less than $20,000</h3>
                <ul>
                    <li><a href="https://sg.kavehome.com/sg/en/" target="_blank">Kave Home</a></li>
                    <li><a href="https://www.kingliving.com.sg/" target="_blank">King Living</a></li>
                    <li><a href="https://proof.com.sg/" target="_blank">Proof Living</a></li>
                </ul>`;
        } else if (selectedStyle === 'modern' && selectedBudget ==='no budget'){
            htmlContent = `
                <h3>Modern style without a budget</h3>
                <ul>
                    <li><a href="https://www.spacefurniture.com.sg/" target="_blank">Space Furniture</a></li>
                    <li><a href="https://www.minotti.com/en/minotti-singapore-by-marquis-interiors" target="_blank">Minotti</a></li>
                </ul>`;
        } else if (selectedStyle === 'designer' && selectedBudget === '<20000'){
            htmlContent = `
                <h3>Designer furniture with a budget of less than $20,000</h3>
                <ul>
                    <li><a href="https://www.grafunkt.com/" target="_blank">Grafunkt</a></li>
                    <li><a href="https://www.finnishdesignshop.com/en-sg/" target="_blank">Finnish Design Shop</a></li>
                </ul>`;
        } else if (selectedStyle === 'designer' && selectedBudget ==='no budget'){
            htmlContent = `
                <h3>Designer furniture without a budget</h3>
                <ul>
                    <li><a href="https://www.spacefurniture.com.sg/" target="_blank">Space Furniture</a></li>
                    <li><a href="https://www.minotti.com/en/minotti-singapore-by-marquis-interiors" target="_blank">Minotti</a></li>
                </ul>`;
        } else if (selectedStyle === 'second hand' && selectedBudget === '<10000') {
            htmlContent = `
                <h3>Second hand furniture</h3>
                <ul>
                    <li><a href="https://www.carousell.sg/" target="_blank">Carousell</a></li>
                    <li><a href="https://www.hocksiong.com.sg/" target="_blank">Hock Siong & Co</a></li>
                    <li><a href="https://www.facebook.com/lorgans/" target="_blank">Lorgan's The Retro Store</a></li>
                    <li><a href="https://www.instagram.com/treasure_at_home/" target="_blank">Treasure at Home</a></li>
                </ul>`;
        } else if (selectedStyle === 'no pref' && selectedBudget === '<10000') {
            htmlContent = `
                <h3>One stop furniture shops with a budget of less than $10,000</h3>
                <ul>
                    <li>
                        <a href="https://www.ikea.com/sg/en/" target="_blank">Ikea</a>
                        <div id="ikea-preview"></div>
                    </li>
                    <li><a href="https://www.fortytwo.sg/" target="_blank">FortyTwo</a></li>
                    <li><a href="https://www.facebook.com/lorgans/" target="_blank">Loft Home Furniture</a></li>
                </ul>`;

            displayFurniturePreview('./Cleaned_Ikea_Dining_Table.json', 'ikea-preview');

        } else if (selectedStyle === 'no pref' && selectedBudget === '<20000'){
            htmlContent = `
                <h3>One stop furniture shops with a budget of less than $20,000</h3>
                <ul>
                    <li><a href="https://www.prestige-affairs.com/" target="_blank">Prestige Affairs</a></li>
                    <li><a href="https://www.cozymatic.asia/" target="_blank">Cozymatic</a></li>
                </ul>`;
        }
        
        recommendationsContainer.innerHTML = htmlContent;

        }

    })