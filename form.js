// Body find a, if href is #, replace with javascript:void(0);
document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.href = 'javascript:void(0);';
});
// Add element sup{*} after label if input is required
document.querySelectorAll('input:not([type="checkbox"])[required]').forEach(function (input) {
    var label = document.querySelector('label[for="' + input.id + '"]');
    var sup = document.createElement('sup');
    sup.innerHTML = '*';
    if (label) {
        label.appendChild(sup);
        sup.style.color = 'red';
    }
});
// Toggle Password
document.querySelectorAll('.toggle-password').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        var input = toggle.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            toggle.classList.remove('bx-lock-alt');
            toggle.classList.add('bx-lock-open-alt');
        } else {
            input.type = 'password';
            toggle.classList.remove('bx-lock-open-alt');
            toggle.classList.add('bx-lock-alt');
        }
    });
});
// Form Validation bootstrap
document.querySelectorAll('.needs-validation').forEach(function (form) {
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});