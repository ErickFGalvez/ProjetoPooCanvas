# Nomes
Erick Felipe Mendes Galvez

# AtividadeMusica
Atividade passada pela orientadora Aline Firmino.Pesquisa, explicaçao e demonstraçao (utilizando Programação Orientada a Objetos de forma coerente) em uma cena canvas/js os seguintes conceitos/funções:
Translação 
Rotação 
Escala
Transform
Clipping Path

## Requisitos

1. Cronar o Repositorio
2.Abrir o Index.Html no navegador.

## Segue a Explicaçao e a Pesquisa dos Scripts

## CanvasObject ReadMe

Este é o arquivo README para a classe `CanvasObject`. A classe `CanvasObject` foi projetada para auxiliar na criação e transformação de objetos em um canvas HTML. Ela fornece métodos para desenhar formas, aplicar translações, rotações e escalas, bem como definir caminhos de recorte no canvas.

## Construtor da Classe

O construtor da classe `CanvasObject` aceita os seguintes parâmetros:

- `contexto`: O contexto de renderização 2D de um canvas HTML.
- `x`: A coordenada x inicial do objeto.
- `y`: A coordenada y inicial do objeto.
- `r`: O ângulo de rotação inicial (em radianos) do objeto.
- `s`: O fator de escala inicial do objeto.
- `c`: O raio inicial do caminho de recorte.

## Métodos

### `desenhar()`

Este método desenha uma forma retangular no canvas. Ele aplica translações, rotações e escalas à forma e define um caminho de recorte usando o raio especificado.

### `traduzir(vx, vy)`

Este método aplica uma translação ao objeto, modificando suas coordenadas `x` e `y`.

### `rotacionar(vr)`

Este método aplica uma rotação ao objeto, modificando seu ângulo de rotação. Se o ângulo de rotação exceder 6,2 radianos, ele retorna a 0 radianos.

### `escala(vs)`

Este método aplica uma escala ao objeto, modificando seu fator de escala. O fator de escala é restrito a valores entre 0,2 e 2.

### `caminhoDeRecorte(vc)`

Este método ajusta o raio do caminho de recorte, modificando a propriedade `c`. O raio é restrito a valores entre 50 e 500.

# Video o link do Canvas funcionado

https://youtu.be/Y-B3QEGZfc4

## Explicações

- **Translação**: A translação é o deslocamento de um objeto em um plano. No contexto deste código, a translação é aplicada usando o método `traduzir(vx, vy)`, onde `vx` e `vy` representam as quantidades pelas quais o objeto é deslocado nas direções x e y, respectivamente.

- **Rotação**: A rotação é a transformação que gira um objeto em torno de um ponto de origem. No código, a rotação é aplicada usando o método `rotacionar(vr)`, onde `vr` representa o ângulo de rotação em radianos. A rotação pode ser usada para girar o objeto.

- **Escala**: A escala é a transformação que altera o tamanho de um objeto. No código, a escala é aplicada usando o método `escala(vs)`, onde `vs` representa o fator de escala. Isso permite aumentar ou diminuir as dimensões do objeto.

- **Transformação**: A transformação é um processo que combina translação, rotação e escala para alterar a posição, orientação e tamanho de um objeto. Isso é feito por meio do método `setTransform(a, b, c, d, e, f)` e `transform(a, b, c, d, e, f)`.

- **Caminho de Recorte (Clipping Path)**: Um caminho de recorte define uma área no canvas onde o conteúdo será visível. Qualquer parte do desenho fora dessa área é ocultada. No código, o caminho de recorte é definido no método `desenhar()` usando o raio especificado em `caminhoDeRecorte(vc)`.

## Script Readme

Este é o arquivo README para o código de animação no canvas HTML. O código demonstra uma aplicação simples de animação e interação com objetos em um canvas.

## Funcionalidade Geral

Este código cria um canvas HTML5 e um objeto animado representado pela classe `CanvasObject`. O objeto é inicialmente posicionado em (200, 200), com uma rotação inicial de 0.1 radianos, uma escala inicial de 1 e um raio de recorte de 500.

A animação consiste em mover o objeto pelo canvas, permitir a rotação do objeto e interagir com ele usando as teclas do teclado.

## Componentes do Código

### Inicialização

- O código começa obtendo o elemento canvas com o ID 'myCanvas' e seu contexto 2D.
- Um objeto `CanvasObject` é criado com os parâmetros iniciais de posição, rotação, escala e raio de recorte.
- Velocidades `velox` e `veloy` são definidas para controlar o movimento do objeto.

### Função de Animação (`animar`)

- A função `animar` é responsável por limpar o canvas, desenhar o objeto, aplicar translações para movê-lo e verificar colisões com as bordas do canvas.
- Se o objeto atingir as bordas do canvas, as velocidades são invertidas para criar um efeito de rebote.
- A função também aplica uma rotação constante ao objeto.
- `requestAnimationFrame` é usado para chamar a função `animar` continuamente, criando uma animação suave.

### Event Listeners

- Event listeners são configurados para responder às teclas pressionadas.
- Ao pressionar a tecla 'A' ou 'a', o objeto é reduzido em escala.
- Ao pressionar a tecla 'D' ou 'd', o objeto é aumentado em escala.
- Ao pressionar a tecla 'W' ou 'w', a área de recorte do objeto é aumentada.
- Ao pressionar a tecla 'S' ou 's', a área de recorte do objeto é reduzida.

# Diagrama de Classes

![diagrma](https://github.com/ErickFGalvez/ProjetoPooCanvas/assets/128325280/57b121db-ee79-4fab-9017-1426125f9b2a)

# Codigos do Git 

![gitcomandos](https://github.com/ErickFGalvez/ProjetoPooCanvas/assets/128325280/53eeea56-309d-4dcd-bccb-1dd970ba31f5)




