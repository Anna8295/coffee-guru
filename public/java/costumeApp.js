
const btnSum = document.getElementById('confirm');
btnSum.addEventListener("click", summary => {
    const selectedRadio = document.querySelectorAll("input[type=radio]:checked");
    const sum = document.getElementById('summary');
    for (let i = 0; i < selectedRadio.length; i++) {
        sum.innerHTML =
            `
            <div class="card border-0 bg-dark mb-3">
                <div class="card-body">
                    <p class="card-text"><small class="text-muted">ORDER SUMMARY</small></p>
                    <p class="card-text">"I drink my coffee as
                        <span>${selectedRadio[0].value}</span>, 
                        with a <span>${selectedRadio[1].value}</span> of
                        bean. <span>${selectedRadio[2].value}</span>
                        ground ala <span>${selectedRadio[3].value}</span>,
                        sent to me <span>${selectedRadio[4].value}</span>"
                    </p>        
                </div>
            </div>`
    }

});



