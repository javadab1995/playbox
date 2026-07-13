

function HeaderFn() {
  return `
        <header class="header">
        <div class="logo">
        <h1>Classic Mini Games</h1>
        <p> Enjoy classic mini games in leisure </p>
        </div>
        <div class="search">
        <input type="text" placeholder="Search Games">
        <ul id="suggestions"></ul>
        </div>
        </header>
    `;
}

const Header = HeaderFn();
export default Header;