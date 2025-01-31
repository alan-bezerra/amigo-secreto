# Amigo Secreto

## Descrição
Este projeto é uma aplicação web interativa que permite aos usuários adicionarem nomes de amigos a uma lista e, posteriormente, realizarem um sorteio aleatório para determinar quem será o "amigo secreto".

Este desafio foi proposto pelo curso **ALURA ONE (Oracle Next Education)**.

## Funcionalidades
- **Adicionar nomes**: O usuário pode inserir nomes de amigos em um campo de texto e adicioná-los à lista clicando no botão "Adicionar".
- **Validar entrada**: Caso o campo de entrada esteja vazio, um alerta será exibido solicitando um nome válido.
- **Visualizar a lista**: Todos os nomes adicionados serão exibidos em uma lista na página.
- **Sorteio aleatório**: O botão "Sortear Amigo" seleciona aleatoriamente um dos nomes da lista e exibe o resultado na tela.
- **Evitar nomes duplicados**: O sistema impede a adição de nomes repetidos.
- **Evitar sorteios com lista vazia**: Caso o usuário tente sortear sem adicionar nomes, um alerta será exibido.
- **Remover nomes após sorteio**: Cada nome sorteado é removido da lista, garantindo que ninguém seja sorteado mais de uma vez.

## Como Usar
1. Digite um nome no campo de entrada.
2. Clique no botão "Adicionar" para incluí-lo na lista.
3. Repita o processo para todos os participantes.
4. Clique no botão "Sortear Amigo" para escolher um nome aleatoriamente.
5. O nome sorteado será exibido na tela e removido da lista.

## Tecnologias Utilizadas
- **HTML** para a estrutura da página.
- **CSS** para estilização da interface.
- **JavaScript** para a lógica do sorteio e manipulação do DOM.

## Estrutura do Projeto
```
/ AmigoSecreto
├── index.html       # Estrutura principal da página
├── style.css        # Estilos da interface
├── app.js           # Lógica do sorteio e manipulação da lista
└── assets/          # Imagens e ícones do projeto
```

Desenvolvido com ❤️ para tornar seu Amigo Secreto mais divertido!

