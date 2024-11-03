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
            <h4 style={{margin: '0', padding: '10px'}}>Seletor de Filmes e Carregador de videos difentes</h4>
        </header>
    );
}

export default Header;