const HEADER_STYLES = {
    backgroundColor: '#444',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    
}

function Header() {
    return (
        <header style={HEADER_STYLES}>
            <h3>Seletor de Filmes</h3>
        </header>
    );
}

export default Header;