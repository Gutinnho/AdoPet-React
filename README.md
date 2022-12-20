[![Logo do projeto Adopet](https://user-images.githubusercontent.com/90591284/200937295-d2def551-d4e9-46fc-a6f1-e137c1f157c0.png)](https://gutinnho.github.io/AdoPet-React/)

![Status do projeto](https://img.shields.io/badge/in_progress-orange?label=Status&style=for-the-badge&labelColor=3772FF&color=FC7071)

## **Descrição**

O projeto é uma SPA para a **Adopet**, que é uma organização que faz a conexão entre possíveis adotantes e ONGS com foco em retirar animais da rua.

O projeto foi feito durante o **[Challenge Front-End 4ª Edição](https://www.alura.com.br/challenges/front-end-4?host=https://cursos.alura.com.br)** da escola **[Alura](https://www.alura.com.br)**, onde foi fornecido o projeto no **[Figma](https://www.figma.com/file/PDQ9unA2aZgbDqYyk6RClZ/Challenge---Adopet?node-id=518%3A11)** e um trello para orientação. Esse mesmo projeto já tinha sido feito por mim, usando apenas HTML e CSS, por isso achei interressante fazê-lo novamente, só que dessa ver usando React. O projeto só em HTML e CSS está neste [repositório](https://github.com/Gutinnho/AdoPet).

É possível acessar o projeto neste [link](https://gutinnho.github.io/AdoPet-React/).

## **Tecnologias e Técnicas Utilizadas**

O projeto foi feito em **React** com **Typescript**.

O projeto foi estilizado utilizando **_[SASS](https://github.com/sass/dart-sass)_**. Apenas um componente do projeto, foi estilzado usando o sass e o [**_styled components_**](https://github.com/styled-components/styled-components), por um motivo que explico [aqui](#experiências-e-problemas). Para evitar o conflitos entre as classes de estilo, foi utilizado a biblioteca **_[typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules)_** que aplica css modules no projeto. Também foi utilizado a biblioteca **_[classnames](https://github.com/JedWatson/classnames)_**, que permite o uso de mais de uma classe de estilo e também estilização condicional. Para retirar estilos colocados pelo navegar foi utilizado a biblioteca **_[normalize.css](https://github.com/necolas/normalize.css)._** Ainda falando sobre estilização, os ícones da aplicação foram aplicados com a biblioteca **_[phosphor icons](https://github.com/phosphor-icons/phosphor-react)._**

Todas as rotas foram criadas utilizando a biblioteca **_[react router](https://github.com/remix-run/react-router)._**

## **Experiências e problemas**

Esse projeto foi o primeiro que fiz sozinho. Colocar em prática a teoria, foi bem confuso de início, mas depois de um tempo peguei o jeito da coisa. De certo modo, a parte de organização do projeto foi o mais simples para mim, mas algumas escolhas mal pensadas, me custaram certo tempo.

Um dos desafios que enfrentei no projeto, foi achar uma maneira de colocar aquele svg que ficava na lateral das páginas do projeto. Ao analisar o figma, vi que o svg tinha 4 comportamentos entre todas as páginas. Uma das soluções que tentei que falharam, foi de usar o svg como background da página. Mas por causa dos diferentes comportamentos entre as páginas falhou.

Outra tentativa foi usar o useLocation do react router para definir o comportamento do svg de acordo com o pathname. Mas não funcionou também

Por fim, a solução que melhor funcionou foi criar um componente com o svg, e posicioná-lo com o position absolute. E usando expressões tenárias, fiz renderizações condicionais de acordo com a variação desejada.

Outro desafio que enfrentei foi o de estilizar o componente `Description` por meio das props. Cada página tinha um line-height diferente, então o meu componente tinha que saber qual seria o seu line-height. Primeiramente eu fiz variações do componente para cada line-height.

```tsx
interface Props{
	lhVariation: number | string
}

<p className={classNames({
	[styles.p2]: true,
	[styles.lh__20]: lhVariantion === '20',
	[styles.lh__21]: lhVariantion === '21',
	[styles.lhV__a]: lhVariantion === 'a',
	[styles.lhV__b]: lhVariantion === 'b',
	[styles.lhV__c]: lhVariantion === 'c'
})}>
```

Desse modo, ficou muito bruto, difícil de até mesmo eu que tinha escrito dar manutenção e saber qual variação utilizar. Então para deixar mais simples, eu tentei de alguma maneira, passar o line-height que vinha através do props, para o sass, mas não encontrei nada sobre. Aí que me lembrei do styled components. Foi meu primeiro contato com o styled components, por isso foi difícil. Mas consegui, o line-height estava finalmente sendo passado via props.

```tsx
interface Props {
  lhV_a: string;
  lhV_b: string;
}

const StyledDescription = styled.p`
  line-height: ${({ lhV_a }: Props) => lhV_a}rem;
  @media (min-width: 768px) {
    line-height: ${({ lhV_b }: Props) => lhV_b}rem;
  }
`;
```

Dessa maneira, o line-height inicial(`lhV_a`) e o final(`lhV_b`), é passado via props do componente e utilizado para estilizar o `StyledDescription`.
