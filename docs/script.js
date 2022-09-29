const text = document.querySelectorAll('#text path');

for (let i = 0; i < text.length; i++) {
    console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
}
