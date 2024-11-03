import React, { Component } from "react";
import VideoLoader from "./VideoLoader";

const VIDEOS_INPUT_CONTAINER_STYLE = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0 10px 0",
};

const VIDEOS_INPUT_STYLE = {
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

const VIDEOS_EXAMPLES_STYLE = {
    fontSize: "12px",
    cursor: "pointer",
};

class VideosAleatorios extends Component {
    constructor(props) {
        super(props);
        // Inicializa o estado com um valor vazio para o input
        this.state = {
            inputValue: '',
            showVideo: false, // Novo estado para controlar a exibição do vídeo
        };
    }
    
    // Função chamada ao pressionar uma tecla
    handleKeyDown = (event) => {
        // Verifica se a tecla Enter foi pressionada
        if (event.key === 'Enter') {
            // Atualiza o estado para mostrar o vídeo
            this.setState({ showVideo: true });
        }
    };

    // Função para atualizar o estado conforme o usuário digita no input
    handleChange = (event) => {
        this.setState({ inputValue: event.target.value, showVideo: false });
    };
    
    render() {
        return (
            <div style={VIDEOS_INPUT_CONTAINER_STYLE}>
                <label htmlFor="VideosIds">Informe o ID do vídeo</label>
                <input
                    style={VIDEOS_INPUT_STYLE}
                    type="text"
                    name="VideosIds"
                    id="VideosIds"
                    value={this.state.inputValue}
                    onChange={this.handleChange} // Atualiza o valor do estado ao digitar
                    onKeyDown={this.handleKeyDown} // Captura as teclas pressionadas
                />
                <div style={VIDEOS_EXAMPLES_STYLE}>
                    Precione Enter para carregar o vídeo
                </div>
                <div style={VIDEOS_EXAMPLES_STYLE}>
                Honkai Impact 3rd x Honkai: Star Rail Crossover Concept Trailer — Confrontation id: <>vfJosv-jBWo</>
                </div>
                <div style={VIDEOS_EXAMPLES_STYLE}>
                Versão completa do curta-metragem animado de Genshin Impact - A Canção das Cinzas id: <>tN5JACOEJFM</>
                </div>
                {/* Exibe o vídeo apenas se showVideo for true */}
                {this.state.showVideo && (
                    <VideoLoader 
                        videoId={this.state.inputValue} 
                        height={480} 
                        width={720} 
                    />
                )}
            </div>
        );
    }
}

export default VideosAleatorios;
