let count = localStorage.getItem("taskCount") 
    ? parseInt(localStorage.getItem("taskCount")) 
    : 0;

let savedText = localStorage.getItem("taskText") || "";

document.getElementById("countNumber").innerText = count;

function increaseCount(){
    count++;
    document.getElementById("countNumber").innerText = count;
    localStorage.setItem("taskCount", count);

    if(savedText !== ""){
        let text = document.createElement("div");
        text.className = "floating-text";
        text.innerText = savedText;
        document.getElementById("countBox").appendChild(text);

        setTimeout(()=>{
            text.remove();
        },1000);
    }
}

function resetCount(){
    count = 0;
    document.getElementById("countNumber").innerText = count;
    localStorage.setItem("taskCount", count);
}

function openSettings(){
    document.getElementById("settingsModal").style.display="flex";
    document.getElementById("customTextInput").value = savedText;
}

function saveText(){
    savedText = document.getElementById("customTextInput").value;
    localStorage.setItem("taskText", savedText);
    document.getElementById("settingsModal").style.display="none";
}


//Image slider

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;
const total = images.length;

function nextSlide(){
    index++;
    slides.style.transform = `translateX(-${index * 100}%)`;

    if(index === total){
        setTimeout(() => {
            slides.style.transition = "none";
            slides.style.transform = "translateX(0)";
            index = 0;

            setTimeout(() => {
                slides.style.transition = "transform 0.5s ease";
            }, 50);

        }, 500);
    }
}

setInterval(nextSlide, 3000);
