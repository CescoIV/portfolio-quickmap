let headerTitles = ["About Me", "Skills", "Projects", "Contact"];

function generateHeaderMenu(){
    // alert('generating headers');
    let header = document.querySelector('.header-menu');
    console.log(header);

    headerTitles.forEach(title=>{
        let myDiv = document.createElement("div");
        myDiv.classList.add('headerBox');
        myDiv.innerHTML = `${title}`;

        header.appendChild(myDiv);
    });
}

generateHeaderMenu();