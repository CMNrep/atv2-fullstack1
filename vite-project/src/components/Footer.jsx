const FOOTER_STYLES = {
    backgroundColor: '#444',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',
    bottom: '0',
}

function Footer () {
    return (
        <footer style={FOOTER_STYLES}>
            <h3>Eu Sou O Footer :)</h3>
        </footer>
    );
}

export default Footer