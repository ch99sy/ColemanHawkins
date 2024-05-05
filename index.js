function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        content.style.marginLeft = '200px'; // Adjust this to the width of your sidebar
    }
}function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.toggle('visible');
    content.classList.toggle('visible');
}