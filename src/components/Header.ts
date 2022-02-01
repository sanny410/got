const Header = {
    render : async () => {
        return `
        <img id="logo-got" src="../assets/img/footer-got.jpg" alt="got-logo">
        <nav class="menu-container">
            <ul class="menu">
                <li class="menu_item">Main</li>
                <li class="menu_item">Books</li>
                <li class="menu_item">Characters</li>
                <li class="menu_item">Houses</li>
            </ul>
        </nav>
`

    },
    after_render: async () => {}
}

export default Header;