const MainPage = {
    render : async () => {
        return `
        <video id="trailer" controls src="../assets/video/Game_of_Thrones.mp4" 
        poster="../assets/video/poster.jpg" width="600px" height="450px">
        
        </video>`
    },
    after_render: async () => {}
}
export default MainPage;
