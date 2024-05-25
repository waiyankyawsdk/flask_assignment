function fetchBalance() {
    fetch('/balance')
        .then(response => response.text())
        .then(data => {
            document.getElementById('balance-display').innerText = data;
        });
}
