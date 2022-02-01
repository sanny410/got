const Footer = {
    render : async () => {
        return `
      <div class="column">2021</div>
      <div class="column"><img src="../assets/svg/github.svg" alt="github"> <a href="https://github.com/sanny410">Visit My GitHub </a></div>
      <div class="column"><a href="https://rs.school/js/"> <img id="rs-icon" src="../assets/svg/rs_school_logo.svg" alt="rs-school-icon"></a></div>
        `
    },
    after_render: async () => {}
}

export default Footer;