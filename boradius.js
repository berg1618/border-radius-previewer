function calBor(){
    let topL = document.getElementById("topL").value; 
    let topR = document.getElementById("topR").value; 
    let botR = document.getElementById("botR").value;
    let botL = document.getElementById("botL").value;
    ans.innerHTML = `border-radius: ${topL}% ${topR}% ${botR}% ${botL}%;`;

    sampleBox.style.borderTopLeftRadius = topL +'%';
    sampleBox.style.borderTopRightRadius = topR +'%';
    sampleBox.style.borderBottomLeftRadius = botL +'%';
    sampleBox.style.borderBottomRightRadius = botR +'%';
}

function copI(){
    let text = document.getElementById('ans');
    text.select();
    document.execCommand("copy");
    tip.innerHTML = 'Press Ctrl + C';
}