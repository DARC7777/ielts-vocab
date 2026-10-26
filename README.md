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
| 📐 **Gramática** | 52 estructuras en 3 niveles, cada una con ejercicios para completar. |
| 📚 **Aprender** | Guía con cada tiempo y estructura: fórmula (afirmativa, negativa y pregunta), **cuándo se usa**, palabras clave, ejemplos traducidos y el error típico de los hispanohablantes. Desde cualquier pregunta puedes abrir *📖 Ver explicación*. |
| 🔊 **Pronunciación** | Escucha cualquier palabra o frase. La app elige sola la voz en inglés que suena más natural (*Natural / Neural / Online / Google*), y en el inicio puedes cambiar la voz y la velocidad (lenta, normal o rápida). El botón 🔈/🔊 del quiz activa la lectura automática. |
| ❤️ **3 vidas, racha y racha de días** | Igual que antes. Las palabras que fallas se guardan, aparecen mezcladas en los turnos siguientes (hasta un 15 %) y puedes repasarlas aparte. |
| 📖 **Diccionario** | Buscador en inglés o español, filtros por categoría y tipo, formas de los verbos, traducción literal de las expresiones y acceso a las explicaciones. |
| ✕ **Salir del turno** | Puedes terminar un turno a la mitad y se guarda lo que llevas. |

---

## Distribución actual de los datos

**8.052 palabras/expresiones** en `vocab.js` + **203 ejercicios** en `grammar.js`.

| # | Categoría | Entradas | Qué contiene |
|---|---|---:|---|
| 4 | 📗 Vocabulario | 3.469 | Vocabulario general (lista tipo Cambridge PET, tus apuntes, adjetivos intensos, cognados). Por tipo: 1.289 sustantivos · 455 verbos · 456 adjetivos · 95 adverbios · resto sin clasificar (frases, palabras con varios usos). |
| 6 | 🎓 Académico IELTS | 2.882 | Academic Word List (AWL) con sus familias de palabras + vocabulario académico frecuente. Por tipo: 1.026 sustantivos · 378 verbos · 385 adjetivos · 198 adverbios. |
| 2 | 🔁 Verbos | 643 | Cada verbo con sus 3 formas; 203 son irregulares. |
| 8 | 🧩 Phrasal verbs | 217 | Los que ya tenías + ~95 frecuentes nuevos (incluye los típicos para describir gráficos del IELTS: *level off, account for, phase out*…). |
| 5 | ⏳ Tiempos verbales | 13 temas · 78 ejercicios | Present / Past / Future × Simple / Continuous / Perfect / Perfect Continuous + *going to*. |
| 1 | 📐 Gramática | 52 temas · 125 ejercicios | Básico (21), Intermedio (21) y Avanzado (10): las 3 formas del verbo, condicionales, pasiva, wish, used to, reported speech, inversión… |
| 9 | 🤝 Collocations | 114 | Combinaciones naturales: *make a decision, heavy rain, sharp decline, raise awareness*… |
| 7 | 🔗 Conectores | 251 | Conectores y frases para Writing/Speaking: *however, in addition, on the other hand*… |
| 10 | 🔤 Palabras funcionales | 270 | Pronombres (41) · artículos (2) · determinantes (19) · cuantificadores (24) · preposiciones (49) · conjunciones (18) · interrogativos (17) · auxiliares (5) · modales (16) · interjecciones (18) · números (61). |
| 3 | 💬 Expresiones | 148 | Modismos, símiles (*as cool as a cucumber*) y refranes con su **equivalente en español** y la traducción literal aparte. |
| 11 | ✂️ Prefijos y sufijos | 58 | 30 prefijos y 28 sufijos con su significado y ejemplos (*un-, mis-, -ful, -less*…). |

### Cómo se reparte un turno

Cada categoría tiene un **peso** (`w` en `CATS`, dentro de `index.html`). Si eliges varias, las preguntas se reparten de forma proporcional **solo entre las elegidas**:

```
Vocabulario 22 · Académico 14 · Verbos 14 · Phrasal verbs 10 · Tiempos 10 · Gramática 8
Collocations 6 · Conectores 6 · Funcionales 5 · Expresiones 4 · Prefijos/sufijos 1
```

Con todas marcadas y 100 preguntas salen ~22 de vocabulario, ~14 académicas, ~14 verbos, etc. Si eliges solo una categoría, todo el turno es de esa categoría. Primero salen las palabras que todavía no has visto; cuando completas una categoría, su progreso vuelve a cero y empieza otra vuelta.

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

Copia uno existente dentro de `GRAMMAR` y cambia sus campos: `id` (único, sin espacios), `level` (`A`, `B` o `C`), `name`, `es`, `form`, `uses`, `examples`, `tip` y `ex`. Aparece solo en la guía y en el quiz.

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
8. **Niveles CEFR (A1–C2) y temas IELTS** (medio ambiente, tecnología, educación, salud…) como filtros extra del vocabulario.
9. **Palabras «difíciles» marcadas a mano (Memrise)**: botón ⭐ para guardar una palabra y practicar solo tus favoritas.
10. **Exportar e importar el progreso**: copia de seguridad en un archivo para no perderlo si cambias de celular.

---

## Voz más natural

La voz la pone tu dispositivo, no la app. Para que suene menos robótica:

- **Android**: en Ajustes busca «Texto a voz» (en Samsung: *Administración general › Idioma › Texto a voz*). Elige **Servicios de voz de Google** como motor preferido, entra en su configuración › *Instalar datos de voz* › **Inglés (Reino Unido)** y elige una voz. Luego, en la app, selecciónala en *🔊 Voz en inglés*.
- **PC**: en **Microsoft Edge** aparecen voces «Microsoft … Online (Natural)», que suenan casi humanas. En Chrome, las mejores son «Google UK English Female / Male».
- **iPhone / iPad**: Ajustes › Accesibilidad › Contenido leído › Voces › Inglés: descarga una voz «Mejorada» o «Premium».

## Desarrollo local

Cualquier servidor estático sirve, por ejemplo:

```bash
python -m http.server 8765
```

y abre `http://localhost:8765`. El progreso se guarda en el `localStorage` del navegador (claves `vq_*_v2`); el de la versión anterior se migra solo la primera vez que abres la nueva.
