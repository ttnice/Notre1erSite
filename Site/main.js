
console.log("JavaScript Running on BackGround")

function printResult(result) {
    resultat.innerHTML = result
}

function analyse() {
    let tab = [Number(document.getElementById("1").value), Number(document.getElementById("2").value), Number(document.getElementById("3").value)];
    
    let define = true;
    let valid = true;
    let invalid_values = '';
    let message;
    for (let i=0; i<3; i++) {
        if (tab[i] === 0) {
            define = false;
            invalid_values += `${i+1} `
        } 
    }
    if (define) {
        if (tab[0] > tab[1]+tab[2]) {
            valid = false
            message = 'Wouaaawww le côté 1 est beaucoup trop grand';
        } else if (tab[1] > tab[0]+tab[2]) {
            valid = false
            message = 'Wouaaawww le côté 2 est beaucoup trop grand';
        } else if (tab[2] > tab[1]+tab[0]) {
            valid = false
            message = 'Wouaaawww le côté 3 est beaucoup trop grand';
        }
    }
    if (define && valid) {
        if (tab[0] == tab[1] && tab[1] == tab[2]) {
            printResult(`Un triangle équilatéral de côté ${tab[0]}`);
        } 
        else if (tab[0] == tab[1]) {
            printResult(`Un triangle isocèle de côté ${tab[0]} et de base ${tab[2]}`);
        } else if (tab[1] == tab[2]) {
            printResult(`Un triangle isocèle de côté ${tab[1]} et de base ${tab[0]}`);
        } else if (tab[2] == tab[0]) {
            printResult(`Un triangle isocèle de côté ${tab[2]} et de base ${tab[1]}`);
        } 
        else if (Math.max.apply(null, tab) == tab[0] && Math.pow(tab[0], 2) == Math.pow(tab[1], 2)+Math.pow(tab[2], 2)) {
            printResult(`Un triangle rectangle d'hypoténuse ${tab[0]}`);
        } else if (Math.max.apply(null, tab) == tab[1] && Math.pow(tab[1], 2) == Math.pow(tab[0], 2)+Math.pow(tab[2], 2)) {
            printResult(`Un triangle rectangle d'hypoténuse ${tab[1]}`);
        } else if (Math.max.apply(null, tab) == tab[2] && Math.pow(tab[2], 2) == Math.pow(tab[1], 2)+Math.pow(tab[0], 2)) {
            printResult(`Un triangle rectangle d'hypoténuse ${tab[2]}`);
        }
        
        else {
            printResult(`Un triangle quelconque, Nickel tu me fais perdre mon temps !`);
        }
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            const x = (Math.pow(tab[0], 2) + Math.pow(tab[1], 2) - Math.pow(tab[2], 2)) / (2*tab[0]);
            const y = Math.sqrt(Math.pow(tab[1], 2) - Math.pow(x, 2));
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log(color.value);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(50*tab[0], 0);
            ctx.lineTo(50*x, 50*y);
            console.log(x, y)
            ctx.fillStyle = color.value
            ctx.fill();
            console.log('Drawing');
        }
    } else if (!define) {
        alert(`Oups la case ${invalid_values}n'est pas encore définie`);
    } else {
        alert(message);
    }
}
