# Projeto POO - Gerenciador de Midias

Sistema simples para cadastrar CDs e DVDs, em TypeScript com padrao MVC.
## Estrutura de pastas

```
src/
├── model/                       Classes do dominio
│   ├── Midia.ts                 (abstrata - mae de CD e DVD)
│   ├── CD.ts                    (extends Midia)
│   ├── DVD.ts                   (extends Midia)
│   └── Genero.ts                (associada a Midia)
├── enum/
│   └── StatusMidia.ts           (DISPONIVEL, EMPRESTADA, PERDIDA)
├── interfaces/
│   ├── IRepository.ts           (interface generica - usa <T>)
│   └── IMidiaRepository.ts      (interface especifica - estende a generica)
├── repository/
│   └── MidiaRepository.ts       (implementa IMidiaRepository)
├── controller/
│   └── MidiaController.ts       (camada C do MVC)
├── view/
│   └── MenuPrincipal.ts         (camada V do MVC, com prompt-sync)
├── exception/
│   └── MidiaNaoEncontradaError.ts  (excecao personalizada)
├── Database.ts                  (Singleton - simulador de SGBD)
├── tests.ts                     (testes manuais com console.assert)
└── index.ts                     (composition root - monta o sistema)
```

## Onde cada requisito foi atendido

| # | Requisito | Onde encontrar |
|---|-----------|----------------|
| 1 | Classificacao / Associacao entre classes | `Midia` classifica `CD` e `DVD` (heranca). `Genero` esta associado a `Midia`. |
| 2 | Heranca | `CD extends Midia`, `DVD extends Midia` (em `model/CD.ts` e `model/DVD.ts`) |
| 3 | Injecao de Dependencia | `MidiaController` recebe `IMidiaRepository` no construtor. Veja `controller/MidiaController.ts`. |
| 4 | Enum | `enum/StatusMidia.ts` |
| 5 | Classes Abstratas | `Midia` e abstrata e tem o metodo abstrato `descrever()`. Veja `model/Midia.ts`. |
| 6 | Interfaces / Polimorfismo | `IRepository<T>` e `IMidiaRepository`. `MidiaRepository implements IMidiaRepository`. Lista mista de Midias chama `descrever()` polimorficamente. |
| 7 | Sobrescrita | `descrever()` reescrito em `CD.ts` e `DVD.ts` |
| 8 | Sobrecarga | `MidiaController.buscar()` aceita `number` ou `string` (union type). `MidiaController.atualizarMidia()` usa parametros opcionais. |
| 9 | try-catch + Excecao Personalizada | `MidiaNaoEncontradaError extends Error`. Lancada no Repository, capturada na View (em `MenuPrincipal.buscarMidia()`). |
| 10 | Testes | `tests.ts` - 10 cenarios cobertos com `console.assert`. |
| 11 | MVC - comunicacao via Controller | View nunca acessa Repository direto. Sempre passa pelo Controller. |
| 12 | Persistencia + Busca/Ordenacao | `Database` (singleton) guarda os dados. `MidiaRepository` tem `buscarPorId`, `buscarPorTitulo`, `ordenarPorAno`, `ordenarPorTitulo`. |
| 13 | Tipos Genericos | `IRepository<T>` em `interfaces/IRepository.ts`. `IMidiaRepository extends IRepository<Midia>`. |
| 14 | Inovacoes / Boas Praticas | Padrao Singleton no `Database`. Nomeacao em portugues consistente. Comentarios indicando onde cada requisito esta. |
| 15 | Qualidade do Projeto | Estrutura de pastas organizada por camada, README explicativo, testes funcionais. |

## Fluxo do MVC

```
Usuario digita no menu
        v
  MenuPrincipal (View)
        v
  MidiaController       <- View nunca pula direto pro Model
        v
  MidiaRepository
        v
  Database (singleton)
```
