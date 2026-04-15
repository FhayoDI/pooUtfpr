# MediaVault

Sistema de gerenciamento de acervo de mídias desenvolvido como projeto de POO.

## O que é

Um armazém digital que cataloga qualquer tipo de mídia — física ou digital — com informações detalhadas sobre suporte e conteúdo.

## Hierarquia de classes

```
Media
├── PhysicalMedia
│   ├── VinylRecord       (rpm, diameter, sides)
│   ├── CompactDisc       (layers, isHDCD)
│   ├── DVD               (region, side, layers)
│   └── CassetteTape      (tapeType, playLength)
└── DigitalMedia
    ├── AudioFile         (sampleRate, channels)
    └── VideoFile         (resolution, fps, hdr)
```

O conteúdo de uma mídia é representado por **composição**, não herança:

```
ContentType
├── Music           (bpm, musicalKey, instruments)
│   └── MusicGenre  (name, era, subgenres[])
├── Film            (director, cast, rating)
│   └── FilmGenre   (name, subgenres[])
└── Documentary     (subject, narrator, isInteractive)
```

Uma `Media` **tem um** `ContentType` — um vinil pode ter música, um DVD pode ter um documentário.

## Conceitos de POO aplicados

- **Herança** — `VinylRecord` herda de `PhysicalMedia` que herda de `Media`
- **Composição** — `Media` contém um `ContentType`
- **Classes abstratas** — `Media`, `PhysicalMedia` e `DigitalMedia` não são instanciadas diretamente
- **Polimorfismo** — cada subclasse implementa seus próprios atributos e comportamentos
