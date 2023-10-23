# ProjetoPooCanvas  

# CanvasObject ReadMe

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

## Explicações

- **Translação**: A translação é o deslocamento de um objeto em um plano. No contexto deste código, a translação é aplicada usando o método `traduzir(vx, vy)`, onde `vx` e `vy` representam as quantidades pelas quais o objeto é deslocado nas direções x e y, respectivamente.

- **Rotação**: A rotação é a transformação que gira um objeto em torno de um ponto de origem. No código, a rotação é aplicada usando o método `rotacionar(vr)`, onde `vr` representa o ângulo de rotação em radianos. A rotação pode ser usada para girar o objeto.

- **Escala**: A escala é a transformação que altera o tamanho de um objeto. No código, a escala é aplicada usando o método `escala(vs)`, onde `vs` representa o fator de escala. Isso permite aumentar ou diminuir as dimensões do objeto.

- **Transformação**: A transformação é um processo que combina translação, rotação e escala para alterar a posição, orientação e tamanho de um objeto. Isso é feito por meio do método `setTransform(a, b, c, d, e, f)` e `transform(a, b, c, d, e, f)`.

- **Caminho de Recorte (Clipping Path)**: Um caminho de recorte define uma área no canvas onde o conteúdo será visível. Qualquer parte do desenho fora dessa área é ocultada. No código, o caminho de recorte é definido no método `desenhar()` usando o raio especificado em `caminhoDeRecorte(vc)`.
