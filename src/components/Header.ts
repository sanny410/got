const Header = {
    render : async () => {
        return `
        <img id="logo-got" src="../assets/img/footer-got.jpg" alt="got-logo">
        <nav class="menu-container">
            <ul class="menu">
                <a href="#/"><li class="menu_item">Main</li></a>
                <a href="#/books"><li class="menu_item">Books</li></a>
                <a href="#/characters"><li class="menu_item">Characters</li></a>
                <a href="#/houses"><li class="menu_item">Houses</li></a>
            </ul>
        </nav>
`

    },
    after_render: async () => {}
}

export default Header;