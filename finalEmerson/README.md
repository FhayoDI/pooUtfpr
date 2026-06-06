# Projeto POO - Gerenciador de Midias

Sistema simples para cadastrar CDs e DVDs, em TypeScript com padrao MVC.
Os dados sao salvos em um arquivo JSON (`dados.json`), entao continuam
existindo mesmo depois de fechar o programa.

## Como rodar

```bash
npm install
npx tsc                # compila o TypeScript para a pasta dist/
node dist/index.js     # roda o menu interativo
npm test               # roda os testes automatizados (jest)
node dist/tests.js     # roda os testes manuais (console.assert)
```

## Estrutura de pastas

```
src/
├── model/                       Classes do dominio
│   ├── Midia.ts                 (abstrata - mae de CD e DVD, implementa Identificavel)
│   ├── CD.ts                    (extends Midia)
│   ├── DVD.ts                   (extends Midia)
│   ├── Genero.ts                (associada a Midia)
│   └── Identificavel.ts         (interface usada como restricao do generico <T>)
├── enum/
│   └── StatusMidia.ts           (DISPONIVEL, EMPRESTADA, PERDIDA)
├── interfaces/
│   ├── IRepository.ts           (interface generica - usa <T>)
│   └── IMidiaRepository.ts      (interface especifica - estende a generica)
├── repository/
│   ├── RepositorioEmMemoria.ts  (classe base GENERICA <T> - guarda em memoria)
│   └── MidiaRepository.ts       (estende a base; busca, ordenacao e persistencia em JSON)
├── controller/
│   └── MidiaController.ts       (camada C do MVC)
├── view/
│   └── MenuPrincipal.ts         (camada V do MVC, com prompt-sync)
├── exception/
│   ├── MidiaNaoEncontradaError.ts  (excecao personalizada)
│   └── AnoInvalidoError.ts         (excecao personalizada)
├── tests.ts                     (testes manuais com console.assert)
└── index.ts                     (composition root - monta o sistema)
```

## Onde cada requisito foi atendido

Para o detalhe linha a linha (arquivo e número da linha de cada item), veja
[`OVERVIEW.md`](OVERVIEW.md).

| # | Requisito | Onde encontrar |
|---|-----------|----------------|
| 1 | Classificacao / Associacao entre classes | `Midia` classifica `CD` e `DVD` (heranca). `Genero` esta associado a `Midia`. |
| 2 | Heranca | `CD extends Midia`, `DVD extends Midia`. `MidiaRepository extends RepositorioEmMemoria<Midia>`. |
| 3 | MVC - comunicacao via Controller | A View (`MenuPrincipal`) nunca acessa o Repository direto: sempre passa pelo `MidiaController`. |
| 4 | Injecao de Dependencia | `MidiaController` recebe um `IMidiaRepository` no construtor (`index.ts` monta tudo). |
| 5 | Enum | `enum/StatusMidia.ts` |
| 6 | Classes Abstratas | `Midia` (com metodo abstrato `descrever()`) e a classe base `RepositorioEmMemoria<T>`. |
| 7 | Interfaces / Polimorfismo | `IRepository<T>`, `IMidiaRepository`, `Identificavel`. Lista mista de Midias chama `descrever()` polimorficamente. |
| 8 | Sobrescrita (override) | `descrever()` reescrito em `CD` e `DVD`. `MidiaRepository.buscarPorId()` sobrescreve o da classe base para lancar a excecao. |
| 9 | Sobrecarga (overload) | `MidiaController.buscar()` tem assinaturas reais: `buscar(id: number)` e `buscar(titulo: string)`. |
| 10 | try-catch + Excecao Personalizada | `MidiaNaoEncontradaError` e `AnoInvalidoError` (ambas `extends Error`). Lancadas no Model/Repository e capturadas na View. |
| 11 | Testes | `__tests__/midia.test.ts` (7 testes jest) e `tests.ts` (11 cenarios com console.assert). |
| 12 | Tipos Genericos | `IRepository<T>` e a classe base `RepositorioEmMemoria<T extends Identificavel>`, reutilizada por `MidiaRepository`. |
| 13 | Persistencia + Busca/Ordenacao | `MidiaRepository` grava/le um arquivo JSON (`persistir`/`carregar`). Busca: `buscarPorId`, `buscarPorTitulo`. Ordenacao: `ordenarPorAno`, `ordenarPorTitulo`. |
| 14 | Inovacoes / Boas Praticas | Persistencia real em arquivo (dados sobrevivem ao fechar). Reuso via classe base generica (DRY). Sobrecarga real do TypeScript. Associacao `Genero` injetada pelo construtor. |
| 15 | Qualidade do Projeto | Estrutura por camadas, README com mapeamento, testes automatizados passando, nomes consistentes em portugues. |

## Fluxo do MVC

```
Usuario digita no menu
        v
  MenuPrincipal (View)
        v
  MidiaController        <- View nunca pula direto pro Model
        v
  MidiaRepository  ->  RepositorioEmMemoria<Midia>  ->  dados.json
```
