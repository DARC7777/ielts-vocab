# 🧠 Vocab Quiz — inglés para IELTS

App web (PWA) para practicar vocabulario, verbos, tiempos verbales y gramática en inglés con preguntas de opción múltiple estilo Duolingo. Funciona en el celular, se puede instalar como app y sirve sin conexión.

👉 **Web:** https://darc7777.github.io/ielts-vocab/

---

## Qué tiene

| | |
|---|---|
| 🎯 **Eliges qué practicar** | Marca una o varias categorías (solo gramática, solo vocabulario, solo tiempos verbales…). Dentro de Vocabulario y Académico puedes filtrar por **tipo de palabra** y en Funcionales por **subtipo** (pronombres, preposiciones…). |
| 🔁 **Verbos con sus 3 formas** | Practica el **significado**, las **3 formas** (pasado y participio) o ambas. Después de cada respuesta ves cada forma **con su traducción y cuándo se usa**: *write = escribir · wrote = escribí (yo) · written = escrito (I have written = he escrito)*. La guía incluye el tema *«Las 3 formas del verbo: cuándo usar cada una»* con 10 ejercicios. En el modo «3 formas» solo salen los irregulares y los regulares con cambio de ortografía (*stop → stopped, study → studied*); los que solo añaden -ed se practican por significado. Opciones: *solo irregulares* y *✍️ escribir las formas*. |
| ⏳ **Tiempos verbales** | Los 12 tiempos + *going to*. Tres tipos de pregunta: completar la frase, identificar el tiempo y elegir la estructura. |
| 📐 **Gramática** | 108 estructuras de **A1 a C1**, cada una con ejercicios para completar. Incluye todos los temas de gramática de tus libros de clase (*Interchange 3*, *Passages 1* y *Passages 2*). |
| 🎚️ **Nivel A1–C1** | Cada tiempo verbal y cada tema tiene su nivel MCER. En el inicio, el filtro **Nivel** deja practicar solo los niveles que elijas (por ejemplo, solo B2 y C1). |
| 📚 **Aprender** | Guía con cada tiempo y estructura: fórmula (afirmativa, negativa y pregunta), **cuándo se usa**, palabras clave, ejemplos traducidos y el error típico de los hispanohablantes. Pestañas: *Tiempos*, *Gramática* (por nivel) y **📘 Mis libros** (los temas de cada libro, unidad por unidad). Desde cualquier pregunta puedes abrir *📖 Ver explicación*. |
| 🔊 **Pronunciación** | Escucha cualquier palabra o frase con el botón 🔊 (la app elige sola la voz en inglés más natural de tu dispositivo). El botón 🔈/🔊 del quiz activa la lectura automática. |
| ❤️ **3 vidas, racha y racha de días** | Igual que antes. Las palabras que fallas se guardan, aparecen mezcladas en los turnos siguientes (hasta un 15 %) y puedes repasarlas aparte. |
| 📖 **Diccionario** | Buscador en inglés o español, filtros por categoría y tipo, formas de los verbos, traducción literal de las expresiones y acceso a las explicaciones. |
| ✕ **Salir del turno** | Puedes terminar un turno a la mitad y se guarda lo que llevas. |

---

## Distribución actual de los datos

**8.566 palabras/expresiones** en `vocab.js` + **902 ejercicios** en `grammar.js`.

| # | Categoría | Entradas | Qué contiene |
|---|---|---:|---|
| 4 | 📗 Vocabulario | 3.737 | Vocabulario general (lista tipo Cambridge PET, tus apuntes, adjetivos intensos, cognados, vocabulario de las unidades de tus libros) + **vocabulario IELTS por temas**: medio ambiente, tecnología, educación, salud, trabajo, delitos, ciudad, medios, viajes, sociedad y familia. Por tipo: 1.487 sustantivos · 458 verbos · 523 adjetivos · 95 adverbios · resto sin clasificar (frases, palabras con varios usos). |
| 6 | 🎓 Académico IELTS | 2.894 | Academic Word List (AWL) con sus familias de palabras + vocabulario académico frecuente + palabras para describir gráficos (*pie chart, upward trend, plateau*). Por tipo: 1.036 sustantivos · 378 verbos · 387 adjetivos · 198 adverbios. |
| 2 | 🔁 Verbos | 665 | Cada verbo con sus 3 formas; 203 son irregulares. Incluye los verbos para describir gráficos (*plummet, soar, fluctuate, level off*…), traducidos en tercera persona: *the price soared = se disparó*. |
| 8 | 🧩 Phrasal verbs | 250 | Los que ya tenías + ~95 frecuentes (incluye los típicos para describir gráficos del IELTS: *level off, account for, phase out*…) + los de *Passages 2 · U1* (*drift apart, hang on to, back down from, cut down on*…). |
| 5 | ⏳ Tiempos verbales | 13 temas · 130 ejercicios | Present / Past / Future × Simple / Continuous / Perfect / Perfect Continuous + *going to*, cada uno con su nivel (A1–B2). |
| 1 | 📐 Gramática | 108 temas · 772 ejercicios | A1 (5) · A2 (14) · B1 (41) · B2 (25) · C1 (23); cada tema tiene entre 6 y 10 ejercicios. La lista completa está más abajo. |
| 9 | 🤝 Collocations | 170 | Combinaciones naturales: *make a decision, heavy rain, sharp decline, raise awareness, make eye contact, bridge the gap, conduct research*… |
| 7 | 🔗 Conectores | 304 | Conectores y frases para Writing/Speaking: *however, in addition, on the other hand, in the event that, whereas, it could be argued that, to a large extent*… |
| 10 | 🔤 Palabras funcionales | 270 | Pronombres (41) · artículos (2) · determinantes (19) · cuantificadores (24) · preposiciones (49) · conjunciones (18) · interrogativos (17) · auxiliares (5) · modales (16) · interjecciones (18) · números (61). |
| 3 | 💬 Expresiones | 218 | Modismos (*a piece of cake, under the weather, cost an arm and a leg*), símiles (*as cool as a cucumber*) y refranes con su **equivalente en español** y la traducción literal aparte. |
| 11 | ✂️ Prefijos y sufijos | 58 | 30 prefijos y 28 sufijos con su significado y ejemplos (*un-, mis-, -ful, -less*…). |

### Cómo se reparte un turno

Cada categoría tiene un **peso** (`w` en `CATS`, dentro de `index.html`). Si eliges varias, las preguntas se reparten de forma proporcional **solo entre las elegidas**:

```
Vocabulario 22 · Académico 14 · Verbos 14 · Phrasal verbs 10 · Tiempos 10 · Gramática 8
Collocations 6 · Conectores 6 · Funcionales 5 · Expresiones 4 · Prefijos/sufijos 1
```

Con todas marcadas y 100 preguntas salen ~22 de vocabulario, ~14 académicas, ~14 verbos, etc. Si eliges solo una categoría, todo el turno es de esa categoría. Primero salen las palabras que todavía no has visto; cuando completas una categoría, su progreso vuelve a cero y empieza otra vuelta. El filtro **Nivel** solo afecta a Tiempos verbales y Gramática.

---

## Todos los temas de gramática (A1 → C1)

El nivel sigue el Marco Común Europeo (MCER). La columna **Libro** dice en qué libro y unidad de tus clases aparece el tema: **I3** = *Interchange 3* (B1–B2), **P1** = *Passages 1* (B2) y **P2** = *Passages 2* (C1). Los temas sin libro (sobre todo A1–A2) son de los niveles anteriores; las fotos de las páginas solo cubren *Interchange 3* y los dos *Passages*.

### ⏳ Tiempos verbales (13)

| Nivel | Tiempo | En español | Ejercicios | Libro |
|---|---|---|---:|---|
| A1 | Present Simple | Presente simple | 10 | — |
| A1 | Present Continuous | Presente continuo | 10 | — |
| A1 | Past Simple | Pasado simple | 10 | I3 U4, P1 U6 |
| A2 | Present Perfect Simple | Presente perfecto | 10 | P1 U6 |
| A2 | Past Continuous | Pasado continuo | 10 | I3 U4 |
| A2 | Future Simple (Will) | Futuro simple (will) | 10 | I3 U10 |
| A2 | Future Simple (Going to) | Futuro con going to | 10 | — |
| B1 | Present Perfect Continuous | Presente perfecto continuo | 10 | P1 U6 |
| B1 | Past Perfect Simple | Pasado perfecto | 10 | I3 U4, I3 U11 |
| B1 | Future Continuous | Futuro continuo | 10 | I3 U10 |
| B2 | Past Perfect Continuous | Pasado perfecto continuo | 10 | — |
| B2 | Future Perfect Simple | Futuro perfecto | 10 | I3 U10, I3 U16, P1 U12 |
| B2 | Future Perfect Continuous | Futuro perfecto continuo | 10 | P1 U12 |

### A1 · Principiante (5 temas)

| Tema | En español | Ejercicios | Libro |
|---|---|---:|---|
| Verb forms (base / past / participle) | Las 3 formas del verbo: cuándo usar cada una | 10 | — |
| Articles (a / an / the) | Artículos | 8 | — |
| There is / There are | Hay | 8 | — |
| Saxon Genitive ('s) | Genitivo sajón (posesión) | 8 | — |
| Can / Could | Poder (habilidad, permiso, peticiones) | 8 | — |

### A2 · Básico (14 temas)

| Tema | En español | Ejercicios | Libro |
|---|---|---:|---|
| Countable / Uncountable | Contables e incontables | 8 | — |
| Comparative adjectives | Comparativos | 8 | I3 U2 |
| Superlative adjectives | Superlativos | 8 | — |
| Equality (as... as) | Comparativo de igualdad | 8 | I3 U2 |
| Too / Enough | Demasiado / Suficiente | 8 | — |
| Must / Have to | Obligación | 8 | — |
| Should | Consejo (debería) | 8 | — |
| May / Might | Posibilidad (puede que) | 8 | — |
| Used to | Hábitos del pasado (solía) | 8 | P1 U9 |
| Verb + to + Infinitive | Verbo + to + infinitivo | 8 | P1 U1 |
| Verb + -ing | Verbo + gerundio (-ing) | 7 | P1 U1 |
| Adjective + Infinitive | Adjetivo + infinitivo | 8 | P1 U5 |
| Present Continuous (Future) | Presente continuo para el futuro | 8 | — |
| Zero Conditional | Condicional cero | 8 | — |

### B1 · Intermedio (41 temas)

| Tema | En español | Ejercicios | Libro |
|---|---|---:|---|
| Preposition + -ing | Preposición + gerundio | 8 | P1 U1 |
| Future Time Clauses | Oraciones temporales de futuro | 8 | — |
| Relative Pronouns | Pronombres relativos | 8 | I3 U1 |
| First Conditional | Primer condicional | 8 | — |
| Second Conditional | Segundo condicional | 8 | P1 U11 |
| Passive Voice | Voz pasiva | 8 | I3 U14, P2 U10 |
| Causative (Have / Get something done) | Causativa (que te hagan algo) | 8 | I3 U9 |
| Indirect Questions | Preguntas indirectas | 8 | P1 U10 |
| Question Tags | Preguntas coletilla (¿verdad?) | 7 | I3 U15, P1 U7 |
| Relative Clauses (defining / non-defining) | Oraciones de relativo | 8 | I3 U14, P1 U3 |
| Purpose (to / in order to) | Finalidad (para + infinitivo) | 8 | I3 U12 |
| Purpose (so that) | Finalidad (para que) | 8 | — |
| Concession (Despite / In spite of) | A pesar de | 8 | P1 U3 |
| Concession (Although / Even though) | Aunque | 8 | P1 U3 |
| Be used to | Estar acostumbrado a | 8 | — |
| Get used to | Acostumbrarse a | 8 | — |
| Wish (Present) | Deseos sobre el presente (ojalá) | 8 | P1 U11 |
| Would Rather | Preferir (would rather) | 7 | I3 U8 |
| Reported Speech | Estilo indirecto | 6 | P1 U5 |
| It clauses + when | Expresar sentimientos: I love it when... / It bothers me when... | 7 | I3 U1 |
| Gerund phrases (subject / object) | El gerundio como sujeto u objeto (Working... is...) | 7 | I3 U2 |
| Comparisons (nouns, verbs, past participles) | Comparaciones con sustantivos, verbos y participios | 6 | I3 U2 |
| Requests (modals, if clauses, gerunds) | Peticiones educadas: de informal a formal | 6 | I3 U3 |
| Indirect requests | Peticiones indirectas (pedir que le digas algo a alguien) | 7 | I3 U3 |
| Narrative tenses (past simple, continuous, perfect) | Contar historias en pasado | 7 | I3 U4 |
| Noun phrases with relative clauses | Lo que me preocupa / me molesta es... | 7 | I3 U5, P1 U10 |
| Expectations (be supposed to, be expected to...) | Costumbres y lo que se espera que hagas | 7 | I3 U5 |
| Describing problems (participles as adjectives) | Describir problemas: is torn / has a tear | 6 | I3 U6 |
| Need + gerund / passive infinitive · Keep + gerund | Necesita arreglo / Sigue fallando | 7 | I3 U6 |
| Infinitive clauses (One way to... is to...) | Proponer soluciones: La mejor manera de... es... | 7 | I3 U7 |
| By + gerund (how to do things) | By + gerundio: cómo se hace algo | 7 | I3 U8 |
| Making suggestions | Hacer sugerencias | 6 | I3 U9 |
| Referring to time in the past | Expresiones de tiempo: in, during, ago, for, since, from... to | 6 | I3 U10 |
| Time clauses (before, after, once, as soon as...) | Oraciones de tiempo en el pasado | 7 | I3 U11 |
| Past modals for judgments and suggestions | Debiste haber... / Podrías haber... / Yo habría... | 6 | I3 U11, I3 U13 |
| Giving reasons (because, since, due to...) | Dar razones: because, since, because of, due to | 7 | I3 U12 |
| Passive with modals (should be done, must be passed) | Pasiva con modales: debería hacerse, tiene que aprobarse | 6 | I3 U14, I3 U15 |
| Managed to / Was able to (accomplishments) | Logros: logré / pude / he podido | 7 | I3 U16 |
| Future goals (I hope I'll have... / I'd like to have...) | Metas futuras: espero haber... / me gustaría haber... | 7 | I3 U16 |
| Order of adjectives (modifiers) | Orden de los adjetivos | 7 | P1 U3 |
| Present perfect vs. simple past | Presente perfecto o pasado simple | 6 | P1 U6 |

### B2 · Intermedio alto (25 temas)

| Tema | En español | Ejercicios | Libro |
|---|---|---:|---|
| Third Conditional | Tercer condicional | 8 | I3 U11 |
| Mixed Conditionals | Condicionales mixtos | 8 | P1 U12 |
| Wish (Past) | Arrepentimientos sobre el pasado | 8 | P1 U11 |
| It's time | Ya es hora de que... | 8 | — |
| Emphatic Do | Do enfático (sí que...) | 8 | — |
| The... the... (Correlative) | Cuanto más..., más... | 8 | P2 U6 |
| Modals of deduction (past) | Deducciones sobre el pasado | 7 | I3 U13, P1 U2 |
| Gerund or infinitive (change of meaning) | Gerundio o infinitivo: cuando cambia el significado | 7 | P1 U1, P2 U1 |
| Noun clauses after be (The good thing about... is that...) | Lo bueno de... es que... | 6 | P1 U1 |
| Past modals of obligation (had to, was supposed to...) | Obligación en el pasado: tuve que, se suponía que, no hacía falta | 6 | P1 U2 |
| Connecting contrasting ideas (however, nevertheless...) | Conectar ideas opuestas: however, nevertheless, on the other hand | 6 | P1 U3 |
| Reduced time clauses (after finishing, while taking...) | Oraciones de tiempo reducidas (after + -ing) | 7 | P1 U4 |
| Conditions: unless, as long as, in case, even if, only if | Condiciones: a menos que, mientras, por si acaso, incluso si, solo si | 6 | P1 U4, P1 U11 |
| It's rude to... = ...ing is rude | Es de mala educación interrumpir = Interrumpir es de mala educación | 6 | P1 U5 |
| Present perfect vs. present perfect continuous | Presente perfecto o presente perfecto continuo | 6 | P1 U6 |
| Adverbs with the simple past and past perfect | Ordenar hechos: afterwards, as soon as, before that, until then | 6 | P1 U6 |
| Passive: continuous, perfect and future | Pasiva en presente continuo, presente perfecto y futuro | 6 | I3 U7, P1 U7 |
| Negative and tag questions for opinions | Dar opiniones con preguntas: Isn't it...? Don't you think...? | 6 | P1 U7, I3 U15 |
| Reduced relative clauses | Oraciones de relativo reducidas | 6 | P1 U8 |
| Which to comment on a whole sentence | ..., lo cual significa / por eso... | 7 | P1 U8 |
| Used to and would (past habits) | Used to y would para hábitos del pasado | 6 | P1 U9 |
| Contrast and exception (while, unlike, except for...) | Contraste y excepción: mientras que, a diferencia de, excepto | 6 | P1 U9 |
| Complex indirect questions | Preguntas indirectas complejas (My concern is whether...) | 6 | P1 U10 |
| Phrasal verbs (separable, inseparable, three-word) | Phrasal verbs: separables, inseparables y de tres palabras | 7 | P2 U1 |
| So... that / Such... that | Tan... que / Tal... que | 6 | P2 U5 |

### C1 · Avanzado (23 temas)

| Tema | En español | Ejercicios | Libro |
|---|---|---:|---|
| Passive Reporting | Pasiva impersonal (se dice que...) | 8 | P2 U4 |
| Inversion (Negative) | Inversión tras adverbio negativo | 8 | — |
| Cleft Sentences (It) | Oraciones enfáticas con It | 8 | — |
| Cleft Sentences (What) | Oraciones enfáticas con What | 7 | P2 U2 |
| Subjunctive Mood | Subjuntivo | 8 | P2 U8 |
| Participle Clauses (Active) | Oraciones de participio activo (-ing) | 8 | P2 U3 |
| Participle Clauses (Passive) | Oraciones de participio pasivo | 8 | — |
| Verb patterns (verb + object + infinitive / preposition + gerund) | Patrones verbales avanzados | 7 | P2 U2 |
| Articles (general vs. specific, place names) | Artículos avanzados: generalizaciones y nombres geográficos | 7 | P2 U3 |
| Reporting clauses (claim, admit, argue...) | Verbos para reportar: claim, admit, argue, explain to... | 6 | P2 U4 |
| Sentence adverbs (clearly, apparently, frankly...) | Adverbios de oración: evidentemente, al parecer, francamente | 6 | P2 U5 |
| Will and would for habits and general truths | Will y would para hábitos y verdades generales | 7 | P2 U6 |
| Required relative pronouns (whom, which, whose) | Pronombres relativos obligatorios: to whom, against which, whose | 7 | P2 U7 |
| As if, as though, as, the way, like | Como si..., igual que... | 6 | P2 U7 |
| Direct and indirect objects (give it to him) | Orden del objeto directo e indirecto | 6 | P2 U8 |
| Whenever / wherever vs. when / where | Siempre que / dondequiera que | 6 | P2 U9 |
| Whoever, whatever, whichever | Quien sea que, lo que sea, cualquiera que | 6 | P2 U9 |
| Passive with get and in short answers | Pasiva con get y pasiva en respuestas cortas | 7 | P2 U10 |
| Subject–verb agreement with quantifiers | Concordancia del verbo con cuantificadores | 6 | P2 U10 |
| Compound adjectives | Adjetivos compuestos (well-known, absent-minded) | 6 | P2 U11 |
| Superlative compound adjectives | Superlativo de adjetivos compuestos (the best-looking, the most easygoing) | 7 | P2 U11 |
| Inversion in conditionals (Had I known..., Should you...) | Inversión en condicionales (Had I known... = Si hubiera sabido...) | 6 | P2 U12 |
| Adverb clauses of condition (provided that, assuming...) | Condiciones avanzadas: siempre que, suponiendo que, en caso de que | 7 | P2 U12 |

---

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Toda la app: estilos, pantallas y lógica. |
| `vocab.js` | Palabras y expresiones (`const VOCAB = [...]`), **una entrada por línea**. |
| `grammar.js` | Tiempos verbales (`TENSES`) y gramática (`GRAMMAR`): explicaciones y ejercicios. |
| `sw.js` | Service worker: permite usar la app sin conexión. |
| `manifest.json`, `icon-*.png` | Datos de la PWA para instalarla en el celular. |
| `awl-check.html` | Herramienta para ver cuánta de la Academic Word List cubre `vocab.js`. |
| `Imagenes/` | Fotos de las páginas de tus libros (solo en tu computadora: están en `.gitignore` y **no se suben** a GitHub). |

---

## Cómo añadir elementos

### Palabras (`vocab.js`)

Añade una línea dentro de la sección de su categoría (el orden no importa; el diccionario ordena solo):

```js
{en:"Resilient",es:"Resiliente, que se recupera rápido",c:4,t:"adj"},
```

| Campo | Obligatorio | Valores |
|---|---|---|
| `en` | ✅ | Texto en inglés. **No se puede repetir** dentro de la misma categoría (es el identificador del progreso). |
| `es` | ✅ | Traducción. Separa varios significados con coma; usa `;` para usos distintos (*Banco; orilla*). |
| `c` | ✅ | `2` Verbos · `3` Expresiones · `4` Vocabulario · `6` Académico · `7` Conectores · `8` Phrasal verbs · `9` Collocations · `10` Funcionales · `11` Prefijos/sufijos |
| `t` | — | Tipo. En c4/c6: `n` `v` `adj` `adv`. En c10: `pron` `art` `det` `quant` `prep` `conj` `qw` `aux` `modal` `interj` `num`. En c11: `pref` `suf`. |
| `ex` | — | Ejemplo de uso; se muestra después de responder. |
| `lit` | — | Solo expresiones: la traducción literal. En `es` va el significado real o el refrán equivalente. |
| `v` | ✅ en verbos | `[base, pasado, participio]`. Si hay dos formas válidas, sepáralas con `/`. |

Ejemplos por categoría:

```js
{en:"write",es:"Escribir",c:2,v:["write","wrote","written"]},
{en:"learn",es:"Aprender",c:2,v:["learn","learned/learnt","learned/learnt"]},
{en:"As cool as a cucumber",es:"Extremadamente tranquilo",c:3,lit:"Tan frío como un pepino"},
{en:"Put up with",es:"Soportar, aguantar",c:8,ex:"I can't put up with the noise."},
{en:"Make a decision",es:"Tomar una decisión",c:9},
{en:"un-",es:"No, lo contrario",c:11,t:"pref",ex:"unhappy (infeliz), unfair (injusto)"},
```

> La app detecta sola si un verbo es regular o irregular a partir de sus formas, y conjuga en español el primer significado de `es` para mostrar *escribir → escribí → escrito* (incluye los irregulares del español: hice, dije, puse, tuve, vine, escrito, roto, vuelto…). Por eso conviene que el primer significado de un verbo sea un infinitivo («Escribir», «Estar de acuerdo»).
> Las etiquetas `t` de Vocabulario y Académico se asignaron automáticamente con reglas (sufijos en inglés + forma de la traducción) y solo cuando la regla era fiable. Si ves una mal puesta en el diccionario, cámbiala o bórrala en esa línea.

### Un ejercicio nuevo (`grammar.js`)

Busca el tema y añade un objeto a su lista `ex`:

```js
{ s: 'She ___ to Paris three times.', h: 'be', a: 'has been', o: ['was', 'is', 'had be'], es: 'Ha estado en París tres veces.' },
```

- `s`: la frase con `___` donde va la respuesta.
- `h`: pista que aparece entre paréntesis (opcional).
- `a`: la respuesta correcta.
- `o`: exactamente **3 opciones incorrectas**. Deben estar mal en ese contexto, no ser solo otra opción válida.
- `es`: la traducción.

### Un tema nuevo de gramática

Copia uno existente dentro de `GRAMMAR` (en la sección de su nivel) y cambia sus campos: `id` (único, sin espacios), `level` (`A1`, `A2`, `B1`, `B2` o `C1`), `src` (opcional: libro y unidad, p. ej. `['Passages 1 · U6']`), `name`, `es`, `form`, `uses`, `examples`, `tip` y `ex`. Aparece solo en la guía, en *Mis libros* (si tiene `src`) y en el quiz.

### Después de editar

Sube los cambios a GitHub (`git add . && git commit -m "..." && git push`). GitHub Pages publica en uno o dos minutos. El service worker ahora busca primero en la red, así que con conexión siempre ves la versión nueva y **ya no hace falta cambiar la versión en `sw.js`** en cada edición.

---

## Revisión del vocabulario (octubre 2026)

Se revisaron las ~9.000 entradas originales:

- **~700 traducciones corregidas**: errores (*Boring* = «Aburriente», *Bear bore born* = «Nacer»), **falsos amigos** marcados (*assist* ≠ asistir, *eventual* ≠ eventual, *sensible* ≠ sensible, *discrete*, *virtually*, *compromise*, *notice*, *petrol*…), typos (*Foreing, Gandmother, Thrirst, Throughtout*…), tildes y entradas que estaban al revés (*Corazón = Heart*). Se añadió el equivalente latinoamericano donde la traducción era de España (*carro, computadora, papa, jugo, celular, mesero…*).
- **Reclasificación**: 1.630 palabras académicas estaban por error en *Tiempos verbales* (por eso salía *lifelong* con opciones como «Sujeto + had + been + Verbo-ing»). Ahora están en Académico y *Tiempos verbales* contiene solo los tiempos.
- **Verbos**: las dos listas (*Present/Past/Participle* e *Infinitivo/Past/Participle*) se unieron en una, sin duplicados (745 → 622), con formas corregidas (*abhorred, abode, borne, strewn, shorn*…) y alternativas británicas/americanas (*learnt/learned, cancelled/canceled*). Se añadieron 21 irregulares frecuentes que faltaban.
- **Sin relleno**: se quitaron ~1.000 formas que no aportaban (*abandons* = «abandona», *abandoning* = «abandonando») cuando la palabra base ya estaba, y se unieron 82 parejas británico/americano (*categorise / categorize*).
- **Expresiones**: los refranes tenían solo la traducción literal; ahora tienen el refrán equivalente en español (*The early bird catches the worm* → «Al que madruga, Dios le ayuda»).

### Revisión con tus libros de clase (octubre 2026)

Se revisaron las 127 fotos de `Imagenes/`: las secciones *Grammar Focus* de *Interchange 3* (unidades 1–16) y *Grammar* / *Grammar Plus* de *Passages 1* y *Passages 2* (unidades 1–12 de cada uno), 40 unidades en total.

- **56 temas nuevos** (de 52 a 108), con explicación en español, ejemplos traducidos, error típico y ejercicios basados en los del libro: *tag questions* y preguntas negativas para opinar, pasiva con modales y en todos los tiempos, *used to / would*, oraciones reducidas, *whoever / whenever*, inversión en condicionales, adjetivos compuestos, concordancia con cuantificadores, adverbios de oración, subjuntivo…
- **23 temas existentes ampliados** con lo que trae el libro (por ejemplo *would prefer* en *would rather*, *if only* en *wish*, modales en *reported speech*, *what I did was…* en las *cleft sentences*), sin cambiar los ejercicios que ya tenías, así que tu progreso se conserva.
- **Niveles A1–C1** para todos los tiempos y temas (antes eran solo 3 grupos), y la unidad de tu libro en cada tema.
- **142 palabras nuevas** de las unidades: phrasal verbs (*drift apart, back down from*), adjetivos compuestos (*absent-minded, open-minded, thought-provoking*), problemas (*torn, chipped, dented*), conectores (*in the event that, with the exception of*), collocations (*make eye contact, take out a loan*) y expresiones (*make it big, pay your dues*).

### Más contenido (octubre 2026)

- **337 ejercicios nuevos** (de 565 a 902): ningún tema queda con menos de 6. Los temas que tenían 2–4 ejercicios ahora tienen 8, y cada tiempo verbal tiene 10. Los nuevos van al final de cada lista, así que el progreso guardado no cambia.
- **372 entradas nuevas** (de 8.194 a 8.566):
  - ~200 palabras IELTS por tema: medio ambiente (*deforestation, carbon footprint*), tecnología (*data breach, user-friendly*), educación (*tuition fees, rote learning*), salud (*life expectancy, sedentary*), trabajo (*job security, overtime*), delitos, ciudad (*urban sprawl, rush hour*), medios, viajes, sociedad y familia.
  - 61 modismos y refranes con su equivalente en español (*cost an arm and a leg* = costar un ojo de la cara).
  - 45 collocations, 35 conectores para Writing y Speaking, y 12 phrasal verbs.
  - 21 verbos para describir gráficos, que se muestran en tercera persona (*the price soared = se disparó*).

---

## Ideas para seguir mejorando (inspiradas en otras apps)

Lo que ya está hecho: elegir categorías (Duolingo «Practicar»), explicaciones *Tips* por tema (Duolingo), audio (Memrise/Duolingo), escribir la respuesta (Memrise), repaso mezclado de errores (Duolingo «Practicar errores»), panel de respuesta con «Continuar».

Ideas para después, de más a menos útiles:

1. **Repetición espaciada (Anki, Memrise, Quizlet)**: cada palabra sube de «caja» cuando aciertas y se repite cada vez menos (1 día → 3 → 7 → 21). Las difíciles aparecen más. Es lo que más ayuda a memorizar 8.000 palabras.
2. **Modo escucha (Duolingo)**: oyes la palabra o frase en inglés y eliges o escribes lo que dice. Entrena el *Listening* del IELTS.
3. **Frases de ejemplo para cada palabra (Memrise, Cambridge)**: añadir `ex` a las palabras más importantes, y preguntas de completar frases con vocabulario, no solo con gramática.
4. **Modo escritura para todo (Memrise)**: escribir la palabra en inglés, no solo elegirla. Recordar sin ayuda fija mucho mejor la palabra.
5. **Meta diaria y XP (Duolingo)**: por ejemplo «50 XP al día» además de la racha, con un pequeño gráfico semanal.
6. **Emparejar parejas (Duolingo/Quizlet «Match»)**: 5 palabras en inglés y 5 en español para unir contra reloj.
7. **Hablar (Duolingo, ELSA)**: reconocimiento de voz del navegador para practicar la pronunciación de una frase.
8. **Niveles CEFR también para el vocabulario y temas IELTS** (medio ambiente, tecnología, educación, salud…) como filtros extra. La gramática y los tiempos verbales ya tienen su nivel A1–C1.
9. **Palabras «difíciles» marcadas a mano (Memrise)**: botón ⭐ para guardar una palabra y practicar solo tus favoritas.
10. **Exportar e importar el progreso**: copia de seguridad en un archivo para no perderlo si cambias de celular.

---

## Desarrollo local

Cualquier servidor estático sirve, por ejemplo:

```bash
python -m http.server 8765
```

y abre `http://localhost:8765`. El progreso se guarda en el `localStorage` del navegador (claves `vq_*_v2`); el de la versión anterior se migra solo la primera vez que abres la nueva.
