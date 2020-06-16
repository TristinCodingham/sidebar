const sidebarToggle = document.getElementById('sidebar-toggle');
const closeIcon = document.getElementById('close-icon');
const sidebar = document.querySelector('.sidebar');

const toggleSidebar = () => {
    sidebar.classList.toggle('sidebar-active');
}

sidebarToggle.onclick = toggleSidebar;
closeIcon.onclick = toggleSidebar;