# Overview do Código — Gerenciador de Mídias

Tour do código: onde cada um dos 15 requisitos está implementado, na ordem da
rubrica. Cada item indica o **arquivo**, a **linha** e **o que há naquele ponto**.

Projeto em TypeScript, arquitetura MVC, com persistência em arquivo JSON.

---

## Estrutura de pastas

```
src/
├── model/         Classes do domínio: Midia (abstrata), CD, DVD, Genero, Identificavel
├── enum/          StatusMidia (DISPONIVEL, EMPRESTADA, PERDIDA)
├── interfaces/    Contratos: IRepository<T>, IMidiaRepository
├── repository/    RepositorioEmMemoria<T> (base genérica) e MidiaRepository
├── controller/    MidiaController (camada C do MVC)
├── view/          MenuPrincipal (camada V do MVC)
├── exception/     AnoInvalidoError, MidiaNaoEncontradaError
├── tests.ts       Testes manuais
└── index.ts       Composition root (monta o sistema)
```

---

## 1. Classificação e Associação

- **Classificação** (é-um): CD e DVD são tipos de Mídia.
  - `model/CD.ts:4` — `class CD extends Midia`
  - `model/DVD.ts:4` — `class DVD extends Midia`
- **Associação** (tem-um): uma Mídia tem um Gênero.
  - `model/Midia.ts:15` — `private genero: Genero`

## 2. Herança

- `model/CD.ts:4` — `class CD extends Midia`
- `model/DVD.ts:4` — `class DVD extends Midia`
- `repository/MidiaRepository.ts:10` — `class MidiaRepository extends RepositorioEmMemoria<Midia>`

## 3. MVC (comunicação via Controller)

A View nunca acessa o Repository direto; sempre passa pelo Controller.

- `index.ts:5-7` — monta a cadeia `Repository → Controller → Menu`
- `view/MenuPrincipal.ts:139-140` — a View chama `this.controller.buscar(...)`

Fluxo: `MenuPrincipal (View) → MidiaController (Controller) → MidiaRepository → dados.json`

## 4. Injeção de Dependência

- `controller/MidiaController.ts:13` — `constructor(repository: IMidiaRepository)`
- `index.ts:6` — `new MidiaController(repository)` injeta a dependência

## 5. Enum

- `enum/StatusMidia.ts:1` — `export enum StatusMidia { DISPONIVEL, EMPRESTADA, PERDIDA }`

## 6. Classes Abstratas

- `model/Midia.ts:6` — `abstract class Midia` (com método abstrato `descrever()`)
- `repository/RepositorioEmMemoria.ts:4` — `abstract class RepositorioEmMemoria<T>`

## 7. Interfaces e Polimorfismo

- `interfaces/IRepository.ts:1` — `interface IRepository<T>`
- `interfaces/IMidiaRepository.ts:4` — `interface IMidiaRepository extends IRepository<Midia>`
- `model/Identificavel.ts:1-2` — `interface Identificavel { getId(): number }`
- `model/Midia.ts:29` — `public abstract descrever(): string` (resolvido de forma diferente em CD e DVD)

## 8. Sobrescrita (override)

- `model/CD.ts:13` — `descrever()` retorna `[CD] ...`
- `model/DVD.ts:13` — `descrever()` retorna `[DVD] ...`
- `repository/MidiaRepository.ts:25-26` — `buscarPorId` sobrescreve o da base (chama `super.buscarPorId` e lança exceção se não achar)

## 9. Sobrecarga (overload)

- `controller/MidiaController.ts:30` — `public buscar(id: number): Midia;`
- `controller/MidiaController.ts:31` — `public buscar(titulo: string): Midia;`
- `controller/MidiaController.ts:32` — `buscar(termo: number | string)` (implementação única)

## 10. try-catch + Exceção personalizada

- Classes de exceção:
  - `exception/AnoInvalidoError.ts:1` — `class AnoInvalidoError extends Error`
  - `exception/MidiaNaoEncontradaError.ts:1` — `class MidiaNaoEncontradaError extends Error`
- Lançadas (throw):
  - `model/Midia.ts:19` — `throw new AnoInvalidoError(ano)`
  - `repository/MidiaRepository.ts:28` e `:36` — `throw new MidiaNaoEncontradaError(...)`
- Capturadas (try-catch) na View:
  - `view/MenuPrincipal.ts` — cadastro de CD/DVD, busca e atualização de status

## 11. Testes

- `__tests__/midia.test.ts` — 7 testes automatizados (jest)
- `tests.ts` — 11 verificações manuais

## 12. Tipos Genéricos `<T>`

- `interfaces/IRepository.ts:1` — `interface IRepository<T>`
- `repository/RepositorioEmMemoria.ts:4` — `class RepositorioEmMemoria<T extends Identificavel>` (restrição: o T precisa ter `getId()`)
- `repository/RepositorioEmMemoria.ts:16` — `buscarPorId(id): T | undefined`
- `model/Identificavel.ts:1` — interface usada como restrição do T

## 13. Persistência + Busca + Ordenação

Em `repository/MidiaRepository.ts`:

- Persistência:
  - `:49` `persistir()` e `:61` `fs.writeFileSync(...)` (grava o JSON)
  - `:64` `carregar()` e `:68` `fs.readFileSync(...)` (lê o JSON)
  - `:74` `midia.restaurarId(o.id)` (preserva o id ao recarregar)
- Busca:
  - `:25` `buscarPorId`
  - `:33` `buscarPorTitulo`
- Ordenação:
  - `:41` `ordenarPorAno` (`.slice().sort`)
  - `:45` `ordenarPorTitulo` (`localeCompare`)

JSON não guarda a classe nem o id: por isso há um campo `tipo` (para reconstruir
CD ou DVD) e o `restaurarId` (para manter o mesmo id).

## 14. Inovações / Boas Práticas

- Persistência real em arquivo (os dados sobrevivem ao fechar o programa).
- Reúso via classe base genérica `RepositorioEmMemoria<T>` (DRY).
- Sobrecarga real do TypeScript em `buscar`.
- `Genero` injetado pelo construtor (`model/Midia.ts:17`).

## 15. Qualidade do Projeto

- Estrutura organizada por camadas (MVC).
- `README.md` e este `OVERVIEW.md` mapeiam cada requisito.
- Testes automatizados passando.
- Nomes consistentes em português.

---

## Como rodar

```bash
node dist/index.js     # menu interativo
npm test               # testes automatizados (jest)
node dist/tests.js     # verificações manuais
```
