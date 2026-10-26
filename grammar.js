// ══════════════════════════════════════════════════════════════════════════
// GRAMMAR — Tiempos verbales (categoría 5) y Gramática (categoría 1).
// Cada tema tiene explicación + ejercicios. Ver README.md para añadir más.
//
// Campos de un tema:
//   id       identificador único (no cambiarlo: el progreso se guarda con él)
//   name     nombre en inglés · es: nombre en español
//   form     estructura: {aff, neg, q} (tiempos) o texto (gramática)
//   uses     lista de usos (¿cuándo se usa?)
//   signals  palabras clave que suelen acompañarlo (opcional)
//   examples [{en, es}]
//   tip      error típico o consejo (opcional)
//   ex       ejercicios: {s: frase con ___, h: pista (opcional), a: respuesta correcta,
//                         o: [3 opciones incorrectas], es: traducción}
// ══════════════════════════════════════════════════════════════════════════

const TENSES = [
  {
    id: 'present-simple', time: 'present', aspect: 'simple',
    name: 'Present Simple', es: 'Presente simple',
    form: {
      aff: ['Sujeto + verbo (+ -s / -es con he, she, it)', 'She works in a bank.'],
      neg: ["Sujeto + don't / doesn't + verbo", "She doesn't work on Sundays."],
      q: ['Do / Does + sujeto + verbo?', 'Does she work here?'],
    },
    uses: ['Hábitos y rutinas', 'Hechos y verdades generales', 'Horarios y programas fijos (trenes, clases, películas)', 'Estados y sentimientos (know, like, want, believe)'],
    signals: 'always, usually, often, sometimes, rarely, never, every day, on Mondays, once a week',
    examples: [
      { en: 'I drink coffee every morning.', es: 'Tomo café todas las mañanas.' },
      { en: 'Water boils at 100 °C.', es: 'El agua hierve a 100 °C.' },
      { en: 'The train leaves at 6:30.', es: 'El tren sale a las 6:30.' },
    ],
    tip: "Con he / she / it añade -s (works), -es (watches, goes) o -ies (studies). En negativas y preguntas la -s pasa al auxiliar: She doesn't work (no «doesn't works»).",
    ex: [
      { s: 'She ___ to work by bus every day.', h: 'go', a: 'goes', o: ['is going', 'went', 'has gone'], es: 'Ella va al trabajo en autobús todos los días.' },
      { s: 'Water ___ at 100 degrees Celsius.', h: 'boil', a: 'boils', o: ['is boiling', 'boiled', 'has boiled'], es: 'El agua hierve a 100 grados Celsius.' },
      { s: "My brother ___ meat. He's a vegetarian.", h: 'not / eat', a: "doesn't eat", o: ["isn't eating", "didn't eat", "hasn't eaten"], es: 'Mi hermano no come carne. Es vegetariano.' },
      { s: 'The film ___ at 8 pm tonight.', h: 'start', a: 'starts', o: ['started', 'has started', 'had started'], es: 'La película empieza a las 8 pm esta noche.' },
      { s: "I ___ the answer now: it's 42.", h: 'know', a: 'know', o: ['am knowing', 'knew', 'had known'], es: 'Ahora sé la respuesta: es 42.' },
      { s: 'How often ___ to the gym these days?', h: 'you / go', a: 'do you go', o: ['are you go', 'did you go', 'have you gone'], es: '¿Con qué frecuencia vas al gimnasio estos días?' },
    ],
  },
  {
    id: 'present-continuous', time: 'present', aspect: 'continuous',
    name: 'Present Continuous', es: 'Presente continuo',
    form: {
      aff: ['Sujeto + am / is / are + verbo-ing', 'They are playing football.'],
      neg: ["Sujeto + am not / isn't / aren't + verbo-ing", "They aren't playing now."],
      q: ['Am / Is / Are + sujeto + verbo-ing?', 'Are they playing?'],
    },
    uses: ['Acciones que ocurren ahora mismo', 'Situaciones temporales (this week, these days)', 'Planes futuros ya organizados', 'Cambios en progreso (it is getting better)'],
    signals: 'now, right now, at the moment, today, this week, currently, Look!, Listen!',
    examples: [
      { en: "Look! It's raining.", es: '¡Mira! Está lloviendo.' },
      { en: "I'm staying with friends this week.", es: 'Esta semana me estoy quedando con unos amigos.' },
      { en: "We're meeting Ana tomorrow at 5.", es: 'Mañana a las 5 vamos a ver a Ana.' },
    ],
    tip: "Los verbos de estado (know, like, want, believe, need, understand) normalmente NO van en continuo: I know (no «I'm knowing»).",
    ex: [
      { s: 'Be quiet! The baby ___.', h: 'sleep', a: 'is sleeping', o: ['sleeps', 'slept', 'has slept'], es: '¡Silencio! El bebé está durmiendo.' },
      { s: 'Look! It ___ outside.', h: 'snow', a: 'is snowing', o: ['snows', 'snowed', 'has snowed'], es: '¡Mira! Está nevando afuera.' },
      { s: 'I ___ with my cousins this week, until my flat is ready.', h: 'stay', a: 'am staying', o: ['stay', 'stayed', 'had stayed'], es: 'Esta semana me quedo con mis primos hasta que mi apartamento esté listo.' },
      { s: "We ___ dinner with Ana tomorrow. It's all arranged.", h: 'have', a: 'are having', o: ['have', 'had', 'have had'], es: 'Mañana cenamos con Ana: ya está todo organizado.' },
      { s: 'Prices ___ every month at the moment.', h: 'rise', a: 'are rising', o: ['rose', 'had risen', 'have rise'], es: 'En este momento los precios suben cada mes.' },
      { s: 'Why ___ at me like that? Stop it!', h: 'you / look', a: 'are you looking', o: ['do you looking', 'did you look', 'had you looked'], es: '¿Por qué me miras así? ¡Para ya!' },
    ],
  },
  {
    id: 'present-perfect', time: 'present', aspect: 'perfect',
    name: 'Present Perfect Simple', es: 'Presente perfecto',
    form: {
      aff: ['Sujeto + have / has + participio', 'I have visited Paris.'],
      neg: ["Sujeto + haven't / hasn't + participio", "She hasn't finished yet."],
      q: ['Have / Has + sujeto + participio?', 'Have you ever been to London?'],
    },
    uses: ['Experiencias de vida (sin decir cuándo)', 'Acciones pasadas con resultado en el presente', 'Situaciones que empezaron en el pasado y siguen ahora (for, since)', 'Acciones recientes (just, already, yet)'],
    signals: 'ever, never, already, yet, just, so far, recently, for, since, this year (aún no terminado)',
    examples: [
      { en: "I've been to Mexico twice.", es: 'He estado en México dos veces.' },
      { en: 'She has lost her keys.', es: 'Ha perdido sus llaves (y todavía no las tiene).' },
      { en: "We've lived here since 2018.", es: 'Vivimos aquí desde 2018.' },
    ],
    tip: 'Si dices CUÁNDO (yesterday, in 2019, last week) usa Past Simple: I saw him yesterday (no «I have seen him yesterday»). «Vivo aquí desde 2018» se traduce con Present Perfect: I have lived here since 2018.',
    ex: [
      { s: 'Have you ever ___ sushi?', h: 'eat', a: 'eaten', o: ['ate', 'eat', 'eating'], es: '¿Alguna vez has comido sushi?' },
      { s: 'We ___ here since 2018.', h: 'live', a: 'have lived', o: ['live', 'lived', 'are living'], es: 'Vivimos aquí desde 2018.' },
      { s: "I can't open the door. I ___ my keys.", h: 'lose', a: 'have lost', o: ['lose', 'was losing', 'am losing'], es: 'No puedo abrir la puerta. He perdido mis llaves.' },
      { s: 'She ___ her homework yet.', h: 'not / finish', a: "hasn't finished", o: ["doesn't finish", "isn't finishing", "hadn't finish"], es: 'Ella todavía no ha terminado sus deberes.' },
      { s: 'I ___ that film three times so far.', h: 'see', a: 'have seen', o: ['saw', 'see', 'had seen'], es: 'He visto esa película tres veces hasta ahora.' },
      { s: 'I ___ to Japan twice, and I want to go again.', h: 'be', a: 'have been', o: ['am', 'had been', 'have be'], es: 'He estado en Japón dos veces y quiero volver.' },
    ],
  },
  {
    id: 'present-perfect-continuous', time: 'present', aspect: 'perfect-continuous',
    name: 'Present Perfect Continuous', es: 'Presente perfecto continuo',
    form: {
      aff: ['Sujeto + have / has + been + verbo-ing', 'I have been studying for two hours.'],
      neg: ["Sujeto + haven't / hasn't + been + verbo-ing", "She hasn't been sleeping well."],
      q: ['Have / Has + sujeto + been + verbo-ing?', 'How long have you been waiting?'],
    },
    uses: ['Acciones que empezaron en el pasado y continúan ahora (énfasis en la duración)', 'Actividades recientes con efectos visibles (estás cansado porque has estado corriendo)'],
    signals: 'for, since, how long, all day, lately, recently',
    examples: [
      { en: "I've been studying English for three years.", es: 'Llevo tres años estudiando inglés.' },
      { en: 'It has been raining all morning.', es: 'Ha estado lloviendo toda la mañana.' },
      { en: "You're red. Have you been running?", es: 'Estás rojo. ¿Has estado corriendo?' },
    ],
    tip: "«Llevo X tiempo haciendo algo» = I have been doing something for X. No se usa con verbos de estado: I've known her for years (no «I've been knowing»).",
    ex: [
      { s: 'I ___ English for three years.', h: 'study', a: 'have been studying', o: ['am studying', 'study', 'was studying'], es: 'Llevo tres años estudiando inglés.' },
      { s: 'How long ___ for the bus?', h: 'you / wait', a: 'have you been waiting', o: ['are you waiting', 'do you wait', 'had you wait'], es: '¿Cuánto tiempo llevas esperando el autobús?' },
      { s: 'Your clothes are wet and muddy. ___ in the garden?', h: 'you / work', a: 'Have you been working', o: ['Do you work', 'Had you worked', 'Will you work'], es: 'Tu ropa está mojada y llena de barro. ¿Has estado trabajando en el jardín?' },
      { s: "It ___ since 6 am and it still hasn't stopped.", h: 'rain', a: 'has been raining', o: ['rains', 'rained', 'is raining'], es: 'Lleva lloviendo desde las 6 am y todavía no ha parado.' },
      { s: 'She ___ at this company since she graduated.', h: 'work', a: 'has been working', o: ['works', 'is working', 'worked'], es: 'Ella trabaja en esta empresa desde que se graduó.' },
      { s: "I'm exhausted because I ___ all day.", h: 'clean', a: 'have been cleaning', o: ['clean', 'am cleaning', 'will clean'], es: 'Estoy agotado porque he estado limpiando todo el día.' },
    ],
  },
  {
    id: 'past-simple', time: 'past', aspect: 'simple',
    name: 'Past Simple', es: 'Pasado simple',
    form: {
      aff: ['Sujeto + verbo en pasado (-ed o irregular)', 'I visited my grandparents.'],
      neg: ["Sujeto + didn't + verbo", "I didn't see him."],
      q: ['Did + sujeto + verbo?', 'Did you call her?'],
    },
    uses: ['Acciones terminadas en un momento concreto del pasado', 'Una serie de acciones pasadas en orden', 'Hábitos pasados (también con used to)'],
    signals: 'yesterday, last night / week / year, ago, in 2010, when I was a child',
    examples: [
      { en: 'I visited my grandparents last weekend.', es: 'Visité a mis abuelos el fin de semana pasado.' },
      { en: 'She left two hours ago.', es: 'Se fue hace dos horas.' },
      { en: 'He opened the door, looked around and went in.', es: 'Abrió la puerta, miró alrededor y entró.' },
    ],
    tip: "Con did / didn't el verbo vuelve a la forma base: Did you go? / I didn't go (no «didn't went»). Repasa los irregulares en la categoría Verbos.",
    ex: [
      { s: 'I ___ my grandparents last weekend.', h: 'visit', a: 'visited', o: ['have visited', 'visit', 'had visited'], es: 'Visité a mis abuelos el fin de semana pasado.' },
      { s: 'She ___ two hours ago.', h: 'leave', a: 'left', o: ['has left', 'leaves', 'leaved'], es: 'Ella se fue hace dos horas.' },
      { s: 'We ___ the film last night.', h: 'not / like', a: "didn't like", o: ["haven't liked", "don't like", "didn't liked"], es: 'No nos gustó la película anoche.' },
      { s: 'Where ___ on holiday last summer?', h: 'you / go', a: 'did you go', o: ['have you gone', 'do you go', 'did you went'], es: '¿A dónde fuiste de vacaciones el verano pasado?' },
      { s: 'Shakespeare ___ Hamlet around 1600.', h: 'write', a: 'wrote', o: ['has written', 'writes', 'writed'], es: 'Shakespeare escribió Hamlet hacia 1600.' },
      { s: 'When I was a child, I ___ in the countryside.', h: 'live', a: 'lived', o: ['have lived', 'live', 'am living'], es: 'Cuando era niño, vivía en el campo.' },
    ],
  },
  {
    id: 'past-continuous', time: 'past', aspect: 'continuous',
    name: 'Past Continuous', es: 'Pasado continuo',
    form: {
      aff: ['Sujeto + was / were + verbo-ing', 'I was reading when you called.'],
      neg: ["Sujeto + wasn't / weren't + verbo-ing", "They weren't listening."],
      q: ['Was / Were + sujeto + verbo-ing?', 'What were you doing at 8?'],
    },
    uses: ['Acción en progreso en un momento del pasado', 'Acción larga interrumpida por otra corta (en Past Simple)', 'Dos acciones simultáneas en el pasado (while)', 'Describir el escenario de una historia'],
    signals: "while, when, at 8 o'clock yesterday, all evening, at that moment",
    examples: [
      { en: 'I was reading when you called.', es: 'Estaba leyendo cuando llamaste.' },
      { en: 'At 9 pm we were having dinner.', es: 'A las 9 pm estábamos cenando.' },
      { en: 'While she was cooking, he was watching TV.', es: 'Mientras ella cocinaba, él veía la tele.' },
    ],
    tip: 'Acción larga (was / were + -ing) + acción corta que la interrumpe (Past Simple): I was sleeping when the phone rang.',
    ex: [
      { s: 'I ___ a shower when the phone rang.', h: 'have', a: 'was having', o: ['have had', 'am having', 'have'], es: 'Me estaba duchando cuando sonó el teléfono.' },
      { s: 'At 9 pm yesterday we ___ dinner.', h: 'have', a: 'were having', o: ['have', 'have had', 'are having'], es: 'Ayer a las 9 pm estábamos cenando.' },
      { s: 'While she ___, he was watching TV.', h: 'cook', a: 'was cooking', o: ['cooks', 'has cooked', 'is cooking'], es: 'Mientras ella cocinaba, él veía la tele.' },
      { s: 'The sun ___ and the birds were singing.', h: 'shine', a: 'was shining', o: ['shines', 'has shone', 'is shining'], es: 'Brillaba el sol y los pájaros cantaban.' },
      { s: "I called you at 8 last night, but you didn't answer. What ___?", h: 'you / do', a: 'were you doing', o: ['do you do', 'have you done', 'will you do'], es: 'Te llamé anoche a las 8 pero no contestaste. ¿Qué estabas haciendo?' },
      { s: 'They ___ when the teacher came in.', h: 'not / listen', a: "weren't listening", o: ["don't listen", "aren't listening", "haven't listened"], es: 'No estaban escuchando cuando entró el profesor.' },
    ],
  },
  {
    id: 'past-perfect', time: 'past', aspect: 'perfect',
    name: 'Past Perfect Simple', es: 'Pasado perfecto',
    form: {
      aff: ['Sujeto + had + participio', 'The film had started when we arrived.'],
      neg: ["Sujeto + hadn't + participio", "I hadn't seen it before."],
      q: ['Had + sujeto + participio?', 'Had you met him before?'],
    },
    uses: ['Una acción pasada anterior a otra acción pasada («el pasado del pasado»)', 'Explicar la causa de algo en el pasado', 'En el tercer condicional y con wish (I wish I had...)'],
    signals: 'before, already, by the time, after, when, never... before',
    examples: [
      { en: 'When we arrived, the film had already started.', es: 'Cuando llegamos, la película ya había empezado.' },
      { en: 'I had never seen snow before that trip.', es: 'Nunca había visto nieve antes de ese viaje.' },
      { en: 'She was tired because she had worked all night.', es: 'Estaba cansada porque había trabajado toda la noche.' },
    ],
    tip: 'Ordena los hechos: lo que pasó PRIMERO va en Past Perfect (had + participio); lo que pasó después, en Past Simple.',
    ex: [
      { s: 'When we arrived at the cinema, the film ___.', h: 'already / start', a: 'had already started', o: ['already starts', 'is already starting', 'already start'], es: 'Cuando llegamos al cine, la película ya había empezado.' },
      { s: 'I ___ snow before I went to Canada.', h: 'never / see', a: 'had never seen', o: ['never see', 'am never seeing', 'never seen'], es: 'Nunca había visto nieve antes de ir a Canadá.' },
      { s: 'She was tired because she ___ all night.', h: 'work', a: 'had worked', o: ['has worked', 'works', 'will work'], es: 'Estaba cansada porque había trabajado toda la noche.' },
      { s: 'By the time the police came, the thief ___.', h: 'escape', a: 'had escaped', o: ['has escaped', 'escapes', 'is escaping'], es: 'Para cuando llegó la policía, el ladrón ya había escapado.' },
      { s: "He couldn't pay because he ___ his wallet at home.", h: 'leave', a: 'had left', o: ['has left', 'leaves', 'is leaving'], es: 'No pudo pagar porque había dejado la billetera en casa.' },
      { s: 'After she ___ dinner, she went to bed.', h: 'finish', a: 'had finished', o: ['has finished', 'finishes', 'is finishing'], es: 'Después de terminar de cenar, se fue a la cama.' },
    ],
  },
  {
    id: 'past-perfect-continuous', time: 'past', aspect: 'perfect-continuous',
    name: 'Past Perfect Continuous', es: 'Pasado perfecto continuo',
    form: {
      aff: ['Sujeto + had + been + verbo-ing', 'I had been waiting for an hour.'],
      neg: ["Sujeto + hadn't + been + verbo-ing", "They hadn't been working long."],
      q: ['Had + sujeto + been + verbo-ing?', 'How long had you been living there?'],
    },
    uses: ['Duración de una acción hasta un momento del pasado', 'Causa de una situación pasada (estaba cansado porque había estado corriendo)'],
    signals: 'for, since, how long, before, by the time, all day',
    examples: [
      { en: 'I had been waiting for an hour when the bus finally came.', es: 'Llevaba una hora esperando cuando por fin llegó el autobús.' },
      { en: 'Her eyes were red because she had been crying.', es: 'Tenía los ojos rojos porque había estado llorando.' },
      { en: 'They had been living in Madrid for ten years before they moved.', es: 'Llevaban diez años viviendo en Madrid antes de mudarse.' },
    ],
    tip: '«Llevaba X tiempo haciendo algo» = I had been doing something for X.',
    ex: [
      { s: 'I ___ for an hour when the bus finally came.', h: 'wait', a: 'had been waiting', o: ['have been waiting', 'am waiting', 'wait'], es: 'Llevaba una hora esperando cuando por fin llegó el autobús.' },
      { s: 'The ground was wet because it ___ all night.', h: 'rain', a: 'had been raining', o: ['has been raining', 'rains', 'is raining'], es: 'El suelo estaba mojado porque había estado lloviendo toda la noche.' },
      { s: 'They ___ in Madrid for ten years before they moved to London.', h: 'live', a: 'had been living', o: ['have been living', 'are living', 'live'], es: 'Llevaban diez años viviendo en Madrid antes de mudarse a Londres.' },
      { s: 'He was out of breath because he ___.', h: 'run', a: 'had been running', o: ['has been running', 'runs', 'will run'], es: 'Le faltaba el aliento porque había estado corriendo.' },
      { s: 'How long ___ English before you took the IELTS?', h: 'you / study', a: 'had you been studying', o: ['have you been studying', 'are you studying', 'do you study'], es: '¿Cuánto tiempo llevabas estudiando inglés antes de presentar el IELTS?' },
      { s: 'She ___ well for weeks, so she finally saw a doctor.', h: 'not / feel', a: "hadn't been feeling", o: ["hasn't been feeling", "isn't feeling", "doesn't feel"], es: 'Llevaba semanas sin sentirse bien, así que por fin fue al médico.' },
    ],
  },
  {
    id: 'future-will', time: 'future', aspect: 'simple',
    name: 'Future Simple (Will)', es: 'Futuro simple (will)',
    form: {
      aff: ['Sujeto + will + verbo', "I'll help you."],
      neg: ["Sujeto + won't + verbo", "It won't rain tomorrow."],
      q: ['Will + sujeto + verbo?', 'Will you come to the party?'],
    },
    uses: ['Decisiones tomadas en el momento de hablar', 'Predicciones basadas en opinión (I think..., probably)', 'Promesas, ofrecimientos y peticiones', 'Hechos futuros'],
    signals: 'tomorrow, next week, in the future, I think, probably, I promise, soon',
    examples: [
      { en: "I'm thirsty. — I'll get you some water.", es: 'Tengo sed. — Te traigo agua.' },
      { en: 'I think it will rain tomorrow.', es: 'Creo que mañana lloverá.' },
      { en: "I promise I won't tell anyone.", es: 'Te prometo que no se lo diré a nadie.' },
    ],
    tip: "will no cambia con he / she / it: she will go (no «she wills go»). Contracciones: I'll, you'll, won't = will not.",
    ex: [
      { s: "It's cold in here. — OK, I ___ the window.", h: 'close', a: 'will close', o: ['closed', 'have closed', 'had closed'], es: 'Hace frío aquí. — Vale, cierro la ventana.' },
      { s: 'I think the Brazilian team ___ the match.', h: 'win', a: 'will win', o: ['won', 'has won', 'had won'], es: 'Creo que el equipo brasileño ganará el partido.' },
      { s: 'I promise I ___ anyone.', h: 'not / tell', a: "won't tell", o: ["didn't tell", "haven't told", "hadn't told"], es: 'Te prometo que no se lo diré a nadie.' },
      { s: '___ you help me with these bags, please?', a: 'Will', o: ['Are', 'Have', 'Had'], es: '¿Me ayudas con estas bolsas, por favor?' },
      { s: 'In 2050, most cars ___ electric.', h: 'be', a: 'will be', o: ['were', 'have been', 'had been'], es: 'En 2050 la mayoría de los coches serán eléctricos.' },
      { s: "Don't worry, I ___ you tomorrow.", h: 'call', a: 'will call', o: ['called', 'have called', 'had called'], es: 'No te preocupes, te llamo mañana.' },
    ],
  },
  {
    id: 'future-going-to', time: 'future', aspect: 'going-to',
    name: 'Future Simple (Going to)', es: 'Futuro con going to',
    form: {
      aff: ['Sujeto + am / is / are + going to + verbo', "I'm going to study medicine."],
      neg: ["Sujeto + am not / isn't / aren't + going to + verbo", "She isn't going to come."],
      q: ['Am / Is / Are + sujeto + going to + verbo?', 'Are you going to buy it?'],
    },
    uses: ['Planes e intenciones decididos antes de hablar', 'Predicciones basadas en una evidencia presente (Look at those clouds!)'],
    signals: "tonight, tomorrow, next year, Look!, soon, I've decided",
    examples: [
      { en: "I'm going to study medicine next year.", es: 'Voy a estudiar medicina el año que viene.' },
      { en: "Look at those clouds! It's going to rain.", es: '¡Mira esas nubes! Va a llover.' },
      { en: "We're going to paint the house this summer.", es: 'Vamos a pintar la casa este verano.' },
    ],
    tip: 'will = decisión en el momento · going to = plan ya decidido o evidencia. «Voy a...» en español casi siempre es going to.',
    ex: [
      { s: "Look at those black clouds! It ___.", h: 'rain', a: 'is going to rain', o: ['rains', 'rained', 'has rained'], es: '¡Mira esas nubes negras! Va a llover.' },
      { s: "I've decided: I ___ medicine at university.", h: 'study', a: 'am going to study', o: ['studied', 'have studied', 'had studied'], es: 'Ya lo he decidido: voy a estudiar medicina en la universidad.' },
      { s: 'Careful! You ___ that glass!', h: 'drop', a: 'are going to drop', o: ['drop', 'dropped', 'have dropped'], es: '¡Cuidado! ¡Se te va a caer ese vaso!' },
      { s: "We ___ the house this summer. We've already bought the paint.", h: 'paint', a: 'are going to paint', o: ['painted', 'paint', 'have painted'], es: 'Vamos a pintar la casa este verano. Ya compramos la pintura.' },
      { s: "She ___ to the party tonight. She told me she's too busy.", h: 'not / come', a: "isn't going to come", o: ["didn't come", "doesn't come", "hasn't come"], es: 'No va a venir a la fiesta esta noche. Me dijo que está muy ocupada.' },
      { s: "You've just won the lottery! What ___ with all that money?", h: 'you / do', a: 'are you going to do', o: ['did you do', 'do you do', 'had you done'], es: '¡Te acabas de ganar la lotería! ¿Qué vas a hacer con todo ese dinero?' },
    ],
  },
  {
    id: 'future-continuous', time: 'future', aspect: 'continuous',
    name: 'Future Continuous', es: 'Futuro continuo',
    form: {
      aff: ['Sujeto + will be + verbo-ing', 'This time tomorrow I will be flying to Rome.'],
      neg: ["Sujeto + won't be + verbo-ing", "I won't be working on Friday."],
      q: ['Will + sujeto + be + verbo-ing?', 'Will you be using the car tonight?'],
    },
    uses: ['Acción en progreso en un momento concreto del futuro', 'Preguntar educadamente por los planes de alguien (Will you be using...?)'],
    signals: 'this time tomorrow, at 8 tomorrow, this time next week, in two hours',
    examples: [
      { en: 'This time tomorrow I will be flying to Rome.', es: 'Mañana a esta hora estaré volando a Roma.' },
      { en: "Don't call at 9 — we'll be having dinner.", es: 'No llames a las 9: estaremos cenando.' },
      { en: 'Will you be using the car tonight?', es: '¿Vas a usar el carro esta noche?' },
    ],
    tip: 'Piensa en una «foto» del futuro: en ese momento la acción estará en progreso.',
    ex: [
      { s: 'This time tomorrow I ___ to Rome.', h: 'fly', a: 'will be flying', o: ['fly', 'flew', 'have flown'], es: 'Mañana a esta hora estaré volando a Roma.' },
      { s: "Don't call me at 9 — I ___ dinner.", h: 'have', a: 'will be having', o: ['had', 'have had', 'have'], es: 'No me llames a las 9: estaré cenando.' },
      { s: 'At 10 am on Monday, the students ___ their exam.', h: 'take', a: 'will be taking', o: ['took', 'have taken', 'had taken'], es: 'El lunes a las 10 am los estudiantes estarán haciendo su examen.' },
      { s: "___ the car tonight? I'd like to borrow it.", h: 'you / use', a: 'Will you be using', o: ['Did you use', 'Have you used', 'Had you used'], es: '¿Vas a usar el carro esta noche? Me gustaría que me lo prestaras.' },
      { s: 'According to some scientists, in fifty years we ___ on Mars.', h: 'live', a: 'will be living', o: ['lived', 'have lived', 'had lived'], es: 'Según algunos científicos, dentro de cincuenta años estaremos viviendo en Marte.' },
      { s: "I can't meet you at 3 — I ___.", h: 'work', a: 'will be working', o: ['worked', 'have worked', 'had worked'], es: 'No puedo verte a las 3: estaré trabajando.' },
    ],
  },
  {
    id: 'future-perfect', time: 'future', aspect: 'perfect',
    name: 'Future Perfect Simple', es: 'Futuro perfecto',
    form: {
      aff: ['Sujeto + will have + participio', 'I will have finished by 6.'],
      neg: ["Sujeto + won't have + participio", "They won't have arrived yet."],
      q: ['Will + sujeto + have + participio?', 'Will you have finished by Friday?'],
    },
    uses: ['Acción que estará terminada antes de un momento del futuro'],
    signals: 'by tomorrow, by 2030, by the time, by then, before, in two years',
    examples: [
      { en: 'I will have finished the report by 6 pm.', es: 'Habré terminado el informe para las 6 pm.' },
      { en: 'By 2030, scientists will have found a cure.', es: 'Para 2030 los científicos habrán encontrado una cura.' },
      { en: "By the time you arrive, we'll have eaten.", es: 'Para cuando llegues, ya habremos comido.' },
    ],
    tip: '«by + momento» (by Friday, by then) es la señal típica: significa «para / antes de».',
    ex: [
      { s: 'I ___ the report by 6 pm.', h: 'finish', a: 'will have finished', o: ['finished', 'have finished', 'had finished'], es: 'Habré terminado el informe para las 6 pm.' },
      { s: 'By the time you arrive, we ___.', h: 'eat', a: 'will have eaten', o: ['ate', 'have eaten', 'had eaten'], es: 'Para cuando llegues, ya habremos comido.' },
      { s: 'By 2030, scientists ___ a cure for this disease.', h: 'find', a: 'will have found', o: ['found', 'have found', 'had found'], es: 'Para 2030 los científicos habrán encontrado una cura para esta enfermedad.' },
      { s: 'Next month we ___ married for 25 years.', h: 'be', a: 'will have been', o: ['were', 'have been', 'had been'], es: 'El mes que viene cumpliremos 25 años de casados.' },
      { s: "Don't worry, the paint ___ by tomorrow.", h: 'dry', a: 'will have dried', o: ['dried', 'has dried', 'had dried'], es: 'No te preocupes, la pintura se habrá secado para mañana.' },
      { s: 'By the end of the course, you ___ more than 2,000 words.', h: 'learn', a: 'will have learned', o: ['learned', 'have learned', 'had learned'], es: 'Al final del curso habrás aprendido más de 2.000 palabras.' },
    ],
  },
  {
    id: 'future-perfect-continuous', time: 'future', aspect: 'perfect-continuous',
    name: 'Future Perfect Continuous', es: 'Futuro perfecto continuo',
    form: {
      aff: ['Sujeto + will have been + verbo-ing', 'By June I will have been working here for 5 years.'],
      neg: ["Sujeto + won't have been + verbo-ing", "He won't have been waiting long."],
      q: ['Will + sujeto + have been + verbo-ing?', 'How long will you have been studying by then?'],
    },
    uses: ['Duración de una acción hasta un momento del futuro («para entonces llevaré X tiempo haciendo algo»)'],
    signals: 'by + momento futuro + for + duración, by the time, by then',
    examples: [
      { en: 'By June, I will have been working here for five years.', es: 'En junio llevaré cinco años trabajando aquí.' },
      { en: 'By 8 pm, they will have been travelling for twelve hours.', es: 'A las 8 pm llevarán doce horas viajando.' },
      { en: 'Next year she will have been teaching for two decades.', es: 'El año que viene llevará dos décadas enseñando.' },
    ],
    tip: '«Para entonces llevaré X tiempo haciendo algo» = By then I will have been doing something for X.',
    ex: [
      { s: 'By June, I ___ here for five years.', h: 'work', a: 'will have been working', o: ['have been working', 'had been working', 'am working'], es: 'En junio llevaré cinco años trabajando aquí.' },
      { s: 'By 8 pm, they ___ for twelve hours.', h: 'travel', a: 'will have been travelling', o: ['have been travelling', 'had been travelling', 'are travelling'], es: 'A las 8 pm llevarán doce horas viajando.' },
      { s: 'Next year she ___ for two decades.', h: 'teach', a: 'will have been teaching', o: ['has been teaching', 'had been teaching', 'teaches'], es: 'El año que viene llevará dos décadas enseñando.' },
      { s: 'When you get home, I ___ for three hours.', h: 'cook', a: 'will have been cooking', o: ['have been cooking', 'had been cooking', 'cook'], es: 'Cuando llegues a casa, llevaré tres horas cocinando.' },
      { s: 'By the end of this month, we ___ this project for a year.', h: 'develop', a: 'will have been developing', o: ['have been developing', 'had been developing', 'develop'], es: 'A finales de este mes llevaremos un año desarrollando este proyecto.' },
      { s: 'How long ___ English by the time you take the exam?', h: 'you / study', a: 'will you have been studying', o: ['have you been studying', 'had you been studying', 'do you study'], es: '¿Cuánto tiempo llevarás estudiando inglés cuando presentes el examen?' },
    ],
  },
];

// level: A = básico (A1–A2) · B = intermedio (B1–B2) · C = avanzado (C1)
const GRAMMAR = [
  // ── Básico ──
  {
    id: 'articles', level: 'A', name: 'Articles (a / an / the)', es: 'Artículos',
    form: 'a / an + singular contable no específico · the + algo específico o único · sin artículo para hablar en general',
    uses: ['a / an la primera vez que mencionas algo; an delante de sonido vocálico (an hour, an umbrella)', 'the cuando ya se sabe de qué hablamos o es único (the sun, the president)', 'Sin artículo para generalizar con plurales o incontables: I love music. Dogs are loyal.'],
    examples: [
      { en: 'I saw a dog. The dog was huge.', es: 'Vi un perro. El perro era enorme.' },
      { en: 'Life is beautiful.', es: 'La vida es bella.' },
    ],
    tip: 'Error típico: «The life is beautiful» o «I like the music» (en general). En inglés las generalizaciones NO llevan the. Las profesiones llevan a: She is a doctor.',
    ex: [
      { s: "She's ___ engineer.", a: 'an', o: ['a', 'the', '— (sin artículo)'], es: 'Es ingeniera.' },
      { s: '___ is important for your health.', a: 'Exercise', o: ['The exercise', 'An exercise', 'A exercise'], es: 'El ejercicio es importante para la salud.' },
      { s: 'Can you close ___ door, please?', a: 'the', o: ['a', 'an', '— (sin artículo)'], es: '¿Puedes cerrar la puerta, por favor?' },
    ],
  },
  {
    id: 'there-is', level: 'A', name: 'There is / There are', es: 'Hay',
    form: 'There is + singular / incontable · There are + plural',
    uses: ['Decir que algo existe o está en un lugar (= hay)', 'Pasado: there was / there were · Futuro: there will be'],
    examples: [
      { en: 'There is a bank near here.', es: 'Hay un banco cerca de aquí.' },
      { en: 'There are two cats in the garden.', es: 'Hay dos gatos en el jardín.' },
    ],
    tip: 'Nunca «there have» para decir «hay». Pregunta: Is there...? / Are there...?',
    ex: [
      { s: 'There ___ a lot of people at the concert last night.', a: 'were', o: ['was', 'is', 'had'], es: 'Había mucha gente en el concierto anoche.' },
      { s: 'There ___ some milk in the fridge.', a: 'is', o: ['are', 'have', 'has'], es: 'Hay algo de leche en la nevera.' },
    ],
  },
  {
    id: 'saxon-genitive', level: 'A', name: "Saxon Genitive ('s)", es: 'Genitivo sajón (posesión)',
    form: "Poseedor + 's + cosa poseída · plural acabado en -s: poseedor + ' (the girls' room)",
    uses: ['Expresar posesión con personas y animales («el coche de María» = Maria\'s car)'],
    examples: [
      { en: "This is Maria's car.", es: 'Este es el coche de María.' },
      { en: "My parents' house is big.", es: 'La casa de mis padres es grande.' },
    ],
    tip: 'Con cosas se suele usar of: the end of the film.',
    ex: [
      { s: 'This is ___ bike.', a: "my brother's", o: ['the brother of me', 'my brothers', 'of my brother'], es: 'Esta es la bici de mi hermano.' },
      { s: 'The ___ toys are everywhere.', a: "children's", o: ["childrens'", 'children', "childs'"], es: 'Los juguetes de los niños están por todas partes.' },
    ],
  },
  {
    id: 'countable', level: 'A', name: 'Countable / Uncountable', es: 'Contables e incontables',
    form: 'Contables: many, a few, a / an · Incontables: much, a little · Ambos: some, any, a lot of',
    uses: ['Contables: se pueden contar (apple, car) y tienen plural', 'Incontables: no se cuentan (water, money, information, advice) y no llevan a / an ni plural'],
    examples: [
      { en: 'How many apples do you want?', es: '¿Cuántas manzanas quieres?' },
      { en: 'How much money do you have?', es: '¿Cuánto dinero tienes?' },
    ],
    tip: 'information, advice, news, furniture, luggage y homework son incontables en inglés: some advice (no «an advice»).',
    ex: [
      { s: 'How ___ sugar do you take in your coffee?', a: 'much', o: ['many', 'few', 'a few'], es: '¿Cuánta azúcar le pones al café?' },
      { s: 'Can you give me some ___?', a: 'advice', o: ['advices', 'an advice', 'a advice'], es: '¿Me puedes dar algún consejo?' },
      { s: 'There were only ___ people at the meeting.', a: 'a few', o: ['a little', 'much', 'little'], es: 'Solo había unas pocas personas en la reunión.' },
    ],
  },
  {
    id: 'comparatives', level: 'A', name: 'Comparative adjectives', es: 'Comparativos',
    form: 'Adjetivo corto + -er + than · more + adjetivo largo + than',
    uses: ['Comparar dos cosas o personas'],
    examples: [
      { en: 'My brother is taller than me.', es: 'Mi hermano es más alto que yo.' },
      { en: 'This book is more interesting than the film.', es: 'Este libro es más interesante que la película.' },
    ],
    tip: 'Irregulares: good → better, bad → worse, far → further. Una sílaba con consonante-vocal-consonante dobla: big → bigger. -y → -ier: easy → easier.',
    ex: [
      { s: 'This exam was ___ than the last one.', a: 'easier', o: ['more easy', 'easyer', 'easiest'], es: 'Este examen fue más fácil que el anterior.' },
      { s: 'Her new job is ___ than her old one.', a: 'better', o: ['gooder', 'more good', 'best'], es: 'Su nuevo trabajo es mejor que el anterior.' },
      { s: 'Madrid is ___ than my town.', a: 'more expensive', o: ['expensiver', 'most expensive', 'expensive'], es: 'Madrid es más cara que mi pueblo.' },
    ],
  },
  {
    id: 'superlatives', level: 'A', name: 'Superlative adjectives', es: 'Superlativos',
    form: 'the + adjetivo corto + -est · the most + adjetivo largo',
    uses: ['Destacar algo como el máximo de un grupo'],
    examples: [
      { en: 'Everest is the highest mountain in the world.', es: 'El Everest es la montaña más alta del mundo.' },
      { en: 'It was the most beautiful day of my life.', es: 'Fue el día más bonito de mi vida.' },
    ],
    tip: 'Irregulares: good → the best, bad → the worst, far → the furthest. Después del superlativo usa in para lugares (in the world, in my class).',
    ex: [
      { s: "It's the ___ film I've ever seen.", a: 'worst', o: ['baddest', 'most bad', 'worse'], es: 'Es la peor película que he visto.' },
      { s: 'She is the ___ student in the class.', a: 'most intelligent', o: ['intelligentest', 'more intelligent', 'much intelligent'], es: 'Es la estudiante más inteligente de la clase.' },
    ],
  },
  {
    id: 'equality', level: 'A', name: 'Equality (as... as)', es: 'Comparativo de igualdad',
    form: 'as + adjetivo / adverbio + as · not as + adjetivo + as',
    uses: ['Decir que dos cosas son iguales (o no) en algo'],
    examples: [
      { en: 'My sister is as tall as me.', es: 'Mi hermana es tan alta como yo.' },
      { en: "The film wasn't as good as the book.", es: 'La película no fue tan buena como el libro.' },
    ],
    ex: [
      { s: 'This phone is as cheap ___ that one.', a: 'as', o: ['than', 'like', 'that'], es: 'Este teléfono es tan barato como ese.' },
      { s: "Today isn't ___ hot as yesterday.", a: 'as', o: ['more', 'than', 'such'], es: 'Hoy no hace tanto calor como ayer.' },
    ],
  },
  {
    id: 'too-enough', level: 'A', name: 'Too / Enough', es: 'Demasiado / Suficiente',
    form: 'too + adjetivo (demasiado) · adjetivo + enough (suficiente) · enough + sustantivo',
    uses: ['too = más de lo necesario (es un problema)', 'enough = la cantidad necesaria'],
    examples: [
      { en: 'This coffee is too hot to drink.', es: 'Este café está demasiado caliente para tomárselo.' },
      { en: "He isn't old enough to drive.", es: 'No tiene edad suficiente para conducir.' },
    ],
    tip: 'enough va DESPUÉS del adjetivo (old enough) pero ANTES del sustantivo (enough money).',
    ex: [
      { s: "I can't buy it. It's ___.", a: 'too expensive', o: ['expensive enough', 'enough expensive', 'too much expensive'], es: 'No lo puedo comprar. Es demasiado caro.' },
      { s: "She isn't ___ to reach the shelf.", a: 'tall enough', o: ['enough tall', 'too tall', 'tall too'], es: 'No es lo bastante alta para alcanzar el estante.' },
      { s: "We don't have ___ for everyone.", a: 'enough chairs', o: ['chairs enough', 'too chairs', 'enough of chairs'], es: 'No tenemos suficientes sillas para todos.' },
    ],
  },
  {
    id: 'can-could', level: 'A', name: 'Can / Could', es: 'Poder (habilidad, permiso, peticiones)',
    form: 'can / could + verbo (sin to)',
    uses: ['Habilidad: I can swim', 'Permiso: Can I go out?', 'Peticiones: Could you help me? (más educado)', 'could = pasado de can y también posibilidad'],
    examples: [
      { en: 'I can speak three languages.', es: 'Sé hablar tres idiomas.' },
      { en: 'Could you open the window, please?', es: '¿Podría abrir la ventana, por favor?' },
    ],
    tip: 'Nunca lleva to ni -s: She can swim (no «she cans to swim»). Futuro: will be able to.',
    ex: [
      { s: 'When I was five, I ___ already read.', a: 'could', o: ['can', 'can to', 'could to'], es: 'Cuando tenía cinco años ya sabía leer.' },
      { s: '___ you pass me the salt, please?', a: 'Could', o: ['Must', 'Should', 'Ought'], es: '¿Me podrías pasar la sal, por favor?' },
    ],
  },
  {
    id: 'must-have-to', level: 'A', name: 'Must / Have to', es: 'Obligación',
    form: 'must + verbo · have to / has to + verbo',
    uses: ['must: obligación que siente quien habla, reglas escritas', 'have to: obligación externa (normas, otras personas)', "mustn't = está prohibido · don't have to = no es necesario"],
    examples: [
      { en: 'I must call my mother tonight.', es: 'Tengo que llamar a mi madre esta noche.' },
      { en: "You don't have to come if you don't want to.", es: 'No tienes que venir si no quieres.' },
    ],
    tip: "¡Cuidado! mustn't (prohibido) ≠ don't have to (no hace falta). Pasado de must y have to: had to.",
    ex: [
      { s: "You ___ smoke in the hospital. It's forbidden.", a: "mustn't", o: ["don't have to", 'have to', 'needn\'t to'], es: 'No debes fumar en el hospital. Está prohibido.' },
      { s: 'Tomorrow is Sunday, so I ___ get up early.', a: "don't have to", o: ["mustn't", 'must', "haven't"], es: 'Mañana es domingo, así que no tengo que madrugar.' },
      { s: 'Yesterday I ___ work late.', a: 'had to', o: ['must', 'musted', 'have to'], es: 'Ayer tuve que trabajar hasta tarde.' },
    ],
  },
  {
    id: 'should', level: 'A', name: 'Should', es: 'Consejo (debería)',
    form: "should / shouldn't + verbo",
    uses: ['Dar consejos y recomendaciones', 'Decir lo que es correcto (debería)'],
    examples: [
      { en: 'You should see a doctor.', es: 'Deberías ir al médico.' },
      { en: "You shouldn't eat so much sugar.", es: 'No deberías comer tanta azúcar.' },
    ],
    tip: 'Para el pasado (arrepentimiento o crítica): should have + participio → I should have studied more.',
    ex: [
      { s: 'You look tired. You ___ go to bed early.', a: 'should', o: ['must to', 'should to', 'ought'], es: 'Pareces cansado. Deberías acostarte temprano.' },
      { s: "You ___ drive so fast. It's dangerous.", a: "shouldn't", o: ["don't should", "mustn't to", 'not should'], es: 'No deberías conducir tan rápido. Es peligroso.' },
    ],
  },
  {
    id: 'may-might', level: 'A', name: 'May / Might', es: 'Posibilidad (puede que)',
    form: 'may / might + verbo',
    uses: ['Posibilidad (puede que, quizás)', 'may = permiso formal: May I come in?'],
    examples: [
      { en: 'It might rain later.', es: 'Puede que llueva más tarde.' },
      { en: 'I may not go to the party.', es: 'Puede que no vaya a la fiesta.' },
    ],
    tip: 'might suele expresar algo un poco menos probable que may. Ninguno lleva to ni -s.',
    ex: [
      { s: 'Take an umbrella. It ___ rain.', a: 'might', o: ['must', 'should to', 'can to'], es: 'Lleva paraguas. Puede que llueva.' },
      { s: '___ I come in? (formal)', a: 'May', o: ['Must', 'Do', 'Would'], es: '¿Puedo pasar? (formal)' },
    ],
  },
  {
    id: 'used-to', level: 'A', name: 'Used to', es: 'Hábitos del pasado (solía)',
    form: "used to + verbo · didn't use to + verbo · Did + sujeto + use to + verbo?",
    uses: ['Hábitos o estados del pasado que ya no ocurren'],
    examples: [
      { en: 'I used to play football every weekend.', es: 'Solía jugar al fútbol todos los fines de semana.' },
      { en: "She didn't use to like coffee.", es: 'Antes no le gustaba el café.' },
    ],
    tip: 'No confundir con be used to + -ing (estar acostumbrado). En negativa y pregunta se escribe use to (sin -d).',
    ex: [
      { s: 'When I was a child, I ___ climb trees.', a: 'used to', o: ['use to', 'was used to', 'am used to'], es: 'Cuando era niño, solía trepar árboles.' },
      { s: 'He ___ smoke, but he quit last year.', a: 'used to', o: ['is used to', 'uses to', 'was use to'], es: 'Antes fumaba, pero lo dejó el año pasado.' },
    ],
  },
  {
    id: 'verb-to-inf', level: 'A', name: 'Verb + to + Infinitive', es: 'Verbo + to + infinitivo',
    form: 'want / decide / hope / need / plan / promise / agree / refuse + to + verbo',
    uses: ['Algunos verbos van seguidos de to + infinitivo'],
    examples: [
      { en: 'I want to learn English.', es: 'Quiero aprender inglés.' },
      { en: 'She decided to study abroad.', es: 'Decidió estudiar en el extranjero.' },
    ],
    tip: 'Otros: would like, manage, afford, offer, expect, learn, seem.',
    ex: [
      { s: 'We decided ___ a new car.', a: 'to buy', o: ['buying', 'buy', 'bought'], es: 'Decidimos comprar un carro nuevo.' },
      { s: "I can't afford ___ on holiday this year.", a: 'to go', o: ['going', 'go', 'gone'], es: 'No me puedo permitir irme de vacaciones este año.' },
    ],
  },
  {
    id: 'verb-ing', level: 'A', name: 'Verb + -ing', es: 'Verbo + gerundio (-ing)',
    form: 'enjoy / mind / avoid / finish / suggest / keep / consider / practise + verbo-ing',
    uses: ['Algunos verbos van seguidos de gerundio (-ing)'],
    examples: [
      { en: 'I enjoy reading.', es: 'Disfruto leyendo.' },
      { en: 'Would you mind closing the door?', es: '¿Te importaría cerrar la puerta?' },
    ],
    tip: "Otros: can't stand, give up, look forward to, admit, deny, imagine, risk. like / love / hate admiten ambas formas.",
    ex: [
      { s: 'He avoided ___ my question.', a: 'answering', o: ['to answer', 'answer', 'answered'], es: 'Evitó responder mi pregunta.' },
      { s: 'Have you finished ___ the report?', a: 'writing', o: ['to write', 'write', 'written'], es: '¿Has terminado de escribir el informe?' },
      { s: 'She suggested ___ to the beach.', a: 'going', o: ['to go', 'go', 'went'], es: 'Sugirió ir a la playa.' },
    ],
  },
  {
    id: 'prep-ing', level: 'A', name: 'Preposition + -ing', es: 'Preposición + gerundio',
    form: 'preposición (about, of, at, in, before, after, without, by...) + verbo-ing',
    uses: ['Después de una preposición, el verbo va SIEMPRE en -ing'],
    examples: [
      { en: "I'm interested in learning Japanese.", es: 'Me interesa aprender japonés.' },
      { en: 'He left without saying goodbye.', es: 'Se fue sin despedirse.' },
    ],
    tip: 'look forward to, be used to y object to también van con -ing porque ese to es preposición: I look forward to hearing from you.',
    ex: [
      { s: "She's good at ___ problems.", a: 'solving', o: ['to solve', 'solve', 'solved'], es: 'Es buena resolviendo problemas.' },
      { s: "I'm looking forward to ___ you.", a: 'seeing', o: ['see', 'to see', 'saw'], es: 'Tengo muchas ganas de verte.' },
    ],
  },
  {
    id: 'adj-inf', level: 'A', name: 'Adjective + Infinitive', es: 'Adjetivo + infinitivo',
    form: 'It is / Sujeto + be + adjetivo + to + verbo',
    uses: ['Después de muchos adjetivos se usa to + infinitivo (easy to, happy to, difficult to)'],
    examples: [
      { en: "It's difficult to learn a new language.", es: 'Es difícil aprender un idioma nuevo.' },
      { en: "I'm happy to help you.", es: 'Estoy encantado de ayudarte.' },
    ],
    ex: [
      { s: "It's important ___ enough water.", a: 'to drink', o: ['drinking', 'drink', 'drank'], es: 'Es importante beber suficiente agua.' },
      { s: 'I was surprised ___ him there.', a: 'to see', o: ['seeing', 'see', 'saw'], es: 'Me sorprendió verlo allí.' },
    ],
  },
  {
    id: 'pres-cont-future', level: 'A', name: 'Present Continuous (Future)', es: 'Presente continuo para el futuro',
    form: 'am / is / are + verbo-ing + expresión de futuro',
    uses: ['Planes fijos ya organizados (con hora, lugar o personas acordadas)'],
    examples: [
      { en: "I'm meeting Juan at 6 tomorrow.", es: 'Mañana a las 6 quedé con Juan.' },
      { en: "We're flying to Cancún on Friday.", es: 'El viernes volamos a Cancún.' },
    ],
    tip: 'Muy parecido a going to; el presente continuo enfatiza que ya está organizado (cita, boleto, reserva).',
    ex: [
      { s: 'I ___ the dentist at 4 tomorrow. I have an appointment.', a: 'am seeing', o: ['see', 'saw', 'have seen'], es: 'Mañana a las 4 voy al dentista. Tengo cita.' },
      { s: 'What ___ next weekend?', h: 'you / do', a: 'are you doing', o: ['do you do', 'did you do', 'have you done'], es: '¿Qué vas a hacer el próximo fin de semana?' },
    ],
  },
  {
    id: 'future-time', level: 'A', name: 'Future Time Clauses', es: 'Oraciones temporales de futuro',
    form: 'when / as soon as / before / after / until + presente simple, ... will + verbo',
    uses: ['Después de when, as soon as, before, after y until se usa PRESENTE aunque hablemos del futuro'],
    examples: [
      { en: "I'll call you when I arrive.", es: 'Te llamaré cuando llegue.' },
      { en: "As soon as I finish, I'll help you.", es: 'En cuanto termine, te ayudo.' },
    ],
    tip: 'Error típico: «when I will arrive». En inglés es when I arrive (igual que «cuando llegue», sin futuro).',
    ex: [
      { s: "I'll text you as soon as I ___ home.", a: 'get', o: ['will get', 'got', 'am going to get'], es: 'Te escribo en cuanto llegue a casa.' },
      { s: "We won't start until everyone ___.", a: 'arrives', o: ['will arrive', 'arrived', 'arriving'], es: 'No empezaremos hasta que llegue todo el mundo.' },
    ],
  },
  {
    id: 'relative-pronouns', level: 'A', name: 'Relative Pronouns', es: 'Pronombres relativos',
    form: 'who (personas) · which (cosas) · that (personas o cosas) · where (lugares) · when (tiempo) · whose (posesión)',
    uses: ['Unir dos ideas sin repetir el sustantivo'],
    examples: [
      { en: 'The woman who lives next door is a doctor.', es: 'La mujer que vive al lado es médica.' },
      { en: "That's the house where I was born.", es: 'Esa es la casa donde nací.' },
    ],
    ex: [
      { s: 'The man ___ car was stolen called the police.', a: 'whose', o: ['who', 'which', 'where'], es: 'El hombre al que le robaron el carro llamó a la policía.' },
      { s: 'This is the restaurant ___ we had our first date.', a: 'where', o: ['which', 'who', 'whose'], es: 'Este es el restaurante donde tuvimos nuestra primera cita.' },
      { s: 'I have a friend ___ speaks five languages.', a: 'who', o: ['which', 'whose', 'where'], es: 'Tengo un amigo que habla cinco idiomas.' },
    ],
  },
  // ── Intermedio ──
  {
    id: 'zero-conditional', level: 'B', name: 'Zero Conditional', es: 'Condicional cero',
    form: 'If + presente simple, presente simple',
    uses: ['Verdades generales y hechos científicos (siempre que pasa A, pasa B)'],
    examples: [
      { en: 'If you heat ice, it melts.', es: 'Si calientas hielo, se derrite.' },
      { en: "If I drink coffee at night, I can't sleep.", es: 'Si tomo café por la noche, no puedo dormir.' },
    ],
    ex: [
      { s: 'If you mix red and white, you ___ pink.', a: 'get', o: ['would get', 'got', 'had got'], es: 'Si mezclas rojo y blanco, obtienes rosa.' },
      { s: 'If water ___ 0 °C, it freezes.', a: 'reaches', o: ['will reach', 'would reach', 'reached'], es: 'Si el agua llega a 0 °C, se congela.' },
    ],
  },
  {
    id: 'first-conditional', level: 'B', name: 'First Conditional', es: 'Primer condicional',
    form: 'If + presente simple, will + verbo',
    uses: ['Situaciones reales o probables en el futuro'],
    examples: [
      { en: 'If it rains, we will stay at home.', es: 'Si llueve, nos quedaremos en casa.' },
      { en: "If you study, you'll pass the exam.", es: 'Si estudias, aprobarás el examen.' },
    ],
    tip: 'Nunca will después de if: If it rains (no «if it will rain»). unless = if not (a menos que).',
    ex: [
      { s: 'If it ___ tomorrow, we will cancel the trip.', a: 'rains', o: ['will rain', 'rained', 'would rain'], es: 'Si llueve mañana, cancelaremos el viaje.' },
      { s: "If you don't hurry, you ___ the bus.", a: 'will miss', o: ['missed', 'would miss', 'had missed'], es: 'Si no te das prisa, perderás el autobús.' },
      { s: "___ you study, you won't pass.", a: 'Unless', o: ['If', 'When', 'As soon as'], es: 'A menos que estudies, no aprobarás.' },
    ],
  },
  {
    id: 'second-conditional', level: 'B', name: 'Second Conditional', es: 'Segundo condicional',
    form: 'If + pasado simple, would + verbo',
    uses: ['Situaciones imaginarias o poco probables en el presente o futuro', 'Dar consejos: If I were you, I would...'],
    examples: [
      { en: 'If I had more money, I would travel the world.', es: 'Si tuviera más dinero, viajaría por el mundo.' },
      { en: 'If I were you, I would accept the job.', es: 'Yo que tú, aceptaría el trabajo.' },
    ],
    tip: 'Con el verbo be se prefiere were para todas las personas: If I were, if she were.',
    ex: [
      { s: 'If I ___ the lottery, I would buy a house.', a: 'won', o: ['win', 'will win', 'had won'], es: 'Si ganara la lotería, me compraría una casa.' },
      { s: 'If I were you, I ___ to the doctor.', a: 'would go', o: ['will go', 'go', 'went'], es: 'Yo que tú, iría al médico.' },
      { s: 'What would you do if you ___ invisible?', a: 'were', o: ['are', 'will be', 'been'], es: '¿Qué harías si fueras invisible?' },
    ],
  },
  {
    id: 'third-conditional', level: 'B', name: 'Third Conditional', es: 'Tercer condicional',
    form: 'If + pasado perfecto, would have + participio',
    uses: ['Situaciones imaginarias en el pasado (lo que no pasó) y sus consecuencias', 'Arrepentimientos y críticas'],
    examples: [
      { en: 'If I had studied, I would have passed.', es: 'Si hubiera estudiado, habría aprobado.' },
      { en: "If we had left earlier, we wouldn't have missed the flight.", es: 'Si hubiéramos salido antes, no habríamos perdido el vuelo.' },
    ],
    ex: [
      { s: 'If I ___ about the party, I would have gone.', a: 'had known', o: ['knew', 'have known', 'would know'], es: 'Si hubiera sabido lo de la fiesta, habría ido.' },
      { s: 'If she had taken a taxi, she ___ late.', a: "wouldn't have been", o: ["won't be", "wasn't", "hadn't been"], es: 'Si hubiera tomado un taxi, no habría llegado tarde.' },
    ],
  },
  {
    id: 'mixed-conditionals', level: 'B', name: 'Mixed Conditionals', es: 'Condicionales mixtos',
    form: 'If + pasado perfecto, would + verbo (pasado → presente) · If + pasado simple, would have + participio (presente → pasado)',
    uses: ['Mezclar un pasado imaginario con un resultado presente, o al revés'],
    examples: [
      { en: 'If I had taken that job, I would be rich now.', es: 'Si hubiera aceptado ese trabajo, ahora sería rico.' },
      { en: "If I weren't so shy, I would have spoken to her.", es: 'Si no fuera tan tímido, le habría hablado.' },
    ],
    ex: [
      { s: 'If I had slept more last night, I ___ so tired now.', a: "wouldn't be", o: ["won't be", "wasn't", "hadn't been"], es: 'Si hubiera dormido más anoche, ahora no estaría tan cansado.' },
      { s: 'If she ___ afraid of flying, she would have come with us.', a: "weren't", o: ["isn't", "won't be", "hasn't been"], es: 'Si no le diera miedo volar, habría venido con nosotros.' },
    ],
  },
  {
    id: 'passive', level: 'B', name: 'Passive Voice', es: 'Voz pasiva',
    form: 'Objeto + be (en el tiempo que toque) + participio (+ by + quien lo hace)',
    uses: ['Cuando importa más la acción o el objeto que quién la hace', 'Muy común en textos académicos e informes (IELTS Writing Task 1: procesos)'],
    examples: [
      { en: 'The bridge was built in 1890.', es: 'El puente fue construido en 1890.' },
      { en: 'English is spoken all over the world.', es: 'El inglés se habla en todo el mundo.' },
    ],
    tip: 'Mira el tiempo del verbo be: is made (presente), was made (pasado), has been made (perfecto), will be made (futuro).',
    ex: [
      { s: 'This car ___ in Germany.', a: 'was made', o: ['made', 'was make', 'is making'], es: 'Este carro se fabricó en Alemania.' },
      { s: 'The results ___ next week.', a: 'will be published', o: ['will publish', 'are publishing', 'published'], es: 'Los resultados se publicarán la semana que viene.' },
      { s: 'The room ___ yet.', a: "hasn't been cleaned", o: ["hasn't cleaned", "isn't cleaning", "didn't clean"], es: 'Todavía no han limpiado la habitación.' },
    ],
  },
  {
    id: 'causative', level: 'B', name: 'Causative (Have / Get something done)', es: 'Causativa (que te hagan algo)',
    form: 'Sujeto + have / get + objeto + participio',
    uses: ['Cuando otra persona hace algo por ti (normalmente un servicio)'],
    examples: [
      { en: 'I had my hair cut yesterday.', es: 'Ayer me corté el pelo (me lo cortaron en la peluquería).' },
      { en: "We're getting the car repaired.", es: 'Nos están arreglando el carro.' },
    ],
    tip: 'I cut my hair = me lo corté yo mismo · I had my hair cut = me lo cortó otra persona.',
    ex: [
      { s: 'I need to have my eyes ___.', a: 'tested', o: ['test', 'testing', 'to test'], es: 'Necesito que me revisen la vista.' },
      { s: 'She ___ her house painted last month.', a: 'had', o: ['did', 'made', 'was'], es: 'El mes pasado le pintaron la casa.' },
    ],
  },
  {
    id: 'indirect-questions', level: 'B', name: 'Indirect Questions', es: 'Preguntas indirectas',
    form: 'Could you tell me / Do you know / I wonder + palabra interrogativa (o if) + sujeto + verbo',
    uses: ['Hacer preguntas de forma más educada', 'El orden es de oración afirmativa (sin do / does / did)'],
    examples: [
      { en: 'Could you tell me where the station is?', es: '¿Podría decirme dónde está la estación?' },
      { en: 'Do you know if the shop is open?', es: '¿Sabe si la tienda está abierta?' },
    ],
    ex: [
      { s: 'Can you tell me where ___?', a: 'the bank is', o: ['is the bank', 'does the bank', 'the bank does be'], es: '¿Me puede decir dónde está el banco?' },
      { s: 'Do you know what time ___?', a: 'the train leaves', o: ['does the train leave', 'leaves the train', 'the train does leave'], es: '¿Sabe a qué hora sale el tren?' },
    ],
  },
  {
    id: 'question-tags', level: 'B', name: 'Question Tags', es: 'Preguntas coletilla (¿verdad?)',
    form: 'Oración afirmativa + auxiliar negativo + pronombre? · Oración negativa + auxiliar afirmativo + pronombre?',
    uses: ['Confirmar información o buscar acuerdo (¿verdad?, ¿no?)'],
    examples: [
      { en: "You're Colombian, aren't you?", es: 'Eres colombiano, ¿verdad?' },
      { en: "She didn't call, did she?", es: 'No llamó, ¿verdad?' },
    ],
    tip: "Usa el mismo auxiliar de la oración; si no hay, usa do / does / did. Caso especial: I am..., aren't I?",
    ex: [
      { s: 'You like pizza, ___?', a: "don't you", o: ['do you', "aren't you", "isn't it"], es: 'Te gusta la pizza, ¿verdad?' },
      { s: "They haven't arrived yet, ___?", a: 'have they', o: ["haven't they", 'did they', 'are they'], es: 'Todavía no han llegado, ¿verdad?' },
      { s: 'She can swim, ___?', a: "can't she", o: ['can she', "doesn't she", "isn't she"], es: 'Sabe nadar, ¿verdad?' },
    ],
  },
  {
    id: 'relative-clauses', level: 'B', name: 'Relative Clauses (defining / non-defining)', es: 'Oraciones de relativo',
    form: 'Especificativas: sin comas, se puede usar that · Explicativas: entre comas, sin that',
    uses: ['Especificativas: identifican de quién o qué hablamos (información necesaria)', 'Explicativas: añaden información extra (entre comas)'],
    examples: [
      { en: 'The book that I bought is great.', es: 'El libro que compré es genial.' },
      { en: 'My father, who is 70, still works.', es: 'Mi padre, que tiene 70 años, todavía trabaja.' },
    ],
    tip: 'En las explicativas (con comas) NO se puede usar that: My car, which is red... (no «that is red»).',
    ex: [
      { s: 'Paris, ___ is the capital of France, is beautiful.', a: 'which', o: ['that', 'who', 'where'], es: 'París, que es la capital de Francia, es preciosa.' },
      { s: 'The students ___ passed the exam got a certificate.', a: 'who', o: ['which', 'whose', 'where'], es: 'Los estudiantes que aprobaron el examen recibieron un certificado.' },
    ],
  },
  {
    id: 'purpose-to', level: 'B', name: 'Purpose (to / in order to)', es: 'Finalidad (para + infinitivo)',
    form: 'Sujeto + verbo + (in order) to + verbo · in order not to',
    uses: ['Expresar el propósito cuando el sujeto es el mismo'],
    examples: [
      { en: 'I went to the shop to buy some bread.', es: 'Fui a la tienda a comprar pan.' },
      { en: 'She studies hard in order to get a scholarship.', es: 'Estudia mucho para conseguir una beca.' },
    ],
    tip: 'Nunca «for + infinitivo»: I came here to learn (no «for learn» ni «for to learn»).',
    ex: [
      { s: "I'm saving money ___ a car.", a: 'to buy', o: ['for buy', 'for to buy', 'for buying'], es: 'Estoy ahorrando dinero para comprar un carro.' },
      { s: 'He left early in order ___ the traffic.', a: 'to avoid', o: ['avoiding', 'for avoid', 'avoid'], es: 'Salió temprano para evitar el tráfico.' },
    ],
  },
  {
    id: 'purpose-so-that', level: 'B', name: 'Purpose (so that)', es: 'Finalidad (para que)',
    form: 'Sujeto + verbo + so that + sujeto + can / could / will / would + verbo',
    uses: ['Expresar finalidad, sobre todo cuando cambia el sujeto (para que...)'],
    examples: [
      { en: 'I spoke slowly so that everyone could understand.', es: 'Hablé despacio para que todos pudieran entender.' },
      { en: 'Leave the key here so that I can get in.', es: 'Deja la llave aquí para que pueda entrar.' },
    ],
    ex: [
      { s: 'She whispered so that the baby ___ wake up.', a: "wouldn't", o: ['not', "doesn't", 'to not'], es: 'Susurró para que el bebé no se despertara.' },
      { s: "I'll send you the file now ___ you can read it tonight.", a: 'so that', o: ['in order to', 'for', 'to'], es: 'Te envío el archivo ahora para que lo puedas leer esta noche.' },
    ],
  },
  {
    id: 'despite', level: 'B', name: 'Concession (Despite / In spite of)', es: 'A pesar de',
    form: 'Despite / In spite of + sustantivo / verbo-ing / the fact that + oración',
    uses: ['Contraste: algo ocurre aunque había un obstáculo'],
    examples: [
      { en: 'Despite the rain, we went out.', es: 'A pesar de la lluvia, salimos.' },
      { en: 'In spite of being tired, she kept working.', es: 'A pesar de estar cansada, siguió trabajando.' },
    ],
    tip: 'Nunca «despite of». Para usar una oración completa: despite the fact that + sujeto + verbo.',
    ex: [
      { s: '___ the traffic, we arrived on time.', a: 'Despite', o: ['Although', 'Despite of', 'Even though'], es: 'A pesar del tráfico, llegamos a tiempo.' },
      { s: 'In spite of ___ hard, he failed the exam.', a: 'studying', o: ['he studied', 'study', 'to study'], es: 'A pesar de estudiar mucho, reprobó el examen.' },
    ],
  },
  {
    id: 'although', level: 'B', name: 'Concession (Although / Even though)', es: 'Aunque',
    form: 'Although / Even though / Though + sujeto + verbo, ...',
    uses: ['Contraste entre dos ideas (aunque)', 'even though es más enfático'],
    examples: [
      { en: 'Although it was cold, we went swimming.', es: 'Aunque hacía frío, fuimos a nadar.' },
      { en: 'Even though he is rich, he is not happy.', es: 'Aunque es rico, no es feliz.' },
    ],
    tip: 'although va con oración (sujeto + verbo); despite va con sustantivo o -ing.',
    ex: [
      { s: '___ she was ill, she went to work.', a: 'Although', o: ['Despite', 'In spite of', 'However'], es: 'Aunque estaba enferma, fue a trabajar.' },
      { s: 'I like him, ___ he can be annoying.', a: 'even though', o: ['despite', 'in spite of', 'however'], es: 'Me cae bien, aunque a veces es pesado.' },
    ],
  },
  {
    id: 'be-used-to', level: 'B', name: 'Be used to', es: 'Estar acostumbrado a',
    form: 'Sujeto + be + used to + sustantivo / verbo-ing',
    uses: ['Estar acostumbrado a algo (ya no te resulta raro)'],
    examples: [
      { en: "I'm used to getting up early.", es: 'Estoy acostumbrado a madrugar.' },
      { en: "She isn't used to the cold.", es: 'No está acostumbrada al frío.' },
    ],
    tip: 'Aquí to es preposición → verbo en -ing: I am used to working (no «to work»).',
    ex: [
      { s: "I'm used to ___ in a big city.", a: 'living', o: ['live', 'lived', 'to live'], es: 'Estoy acostumbrado a vivir en una ciudad grande.' },
      { s: "He ___ used to the noise. It doesn't bother him.", a: 'is', o: ['uses', 'gets to', 'does'], es: 'Está acostumbrado al ruido. No le molesta.' },
    ],
  },
  {
    id: 'get-used-to', level: 'B', name: 'Get used to', es: 'Acostumbrarse a',
    form: 'Sujeto + get + used to + sustantivo / verbo-ing',
    uses: ['El proceso de acostumbrarse a algo nuevo'],
    examples: [
      { en: 'It took me months to get used to driving on the left.', es: 'Me costó meses acostumbrarme a conducir por la izquierda.' },
      { en: "You'll get used to it.", es: 'Te acostumbrarás.' },
    ],
    ex: [
      { s: "Don't worry, you'll soon ___ used to the new job.", a: 'get', o: ['use', 'got', 'getting'], es: 'No te preocupes, pronto te acostumbrarás al nuevo trabajo.' },
      { s: "I'm slowly getting used to ___ English food.", a: 'eating', o: ['eat', 'eaten', 'ate'], es: 'Poco a poco me estoy acostumbrando a la comida inglesa.' },
    ],
  },
  {
    id: 'wish-present', level: 'B', name: 'Wish (Present)', es: 'Deseos sobre el presente (ojalá)',
    form: 'Sujeto + wish + sujeto + pasado simple (were para be)',
    uses: ['Desear que una situación presente fuera diferente'],
    examples: [
      { en: 'I wish I had more time.', es: 'Ojalá tuviera más tiempo.' },
      { en: 'I wish I were taller.', es: 'Ojalá fuera más alto.' },
    ],
    tip: 'Para quejarte de lo que hace otra persona: I wish you would stop talking.',
    ex: [
      { s: 'I wish I ___ how to drive.', a: 'knew', o: ['know', 'will know', 'have known'], es: 'Ojalá supiera conducir.' },
      { s: 'I wish it ___ summer now.', a: 'were', o: ['is', 'will be', 'be'], es: 'Ojalá fuera verano ahora.' },
    ],
  },
  {
    id: 'wish-past', level: 'B', name: 'Wish (Past)', es: 'Arrepentimientos sobre el pasado',
    form: 'Sujeto + wish + sujeto + pasado perfecto (had + participio)',
    uses: ['Lamentar algo que pasó (o que no pasó) en el pasado'],
    examples: [
      { en: 'I wish I had studied harder.', es: 'Ojalá hubiera estudiado más.' },
      { en: "She wishes she hadn't said that.", es: 'Ella desearía no haber dicho eso.' },
    ],
    ex: [
      { s: 'I wish I ___ that email yesterday.', a: "hadn't sent", o: ["don't send", "haven't sent", "won't send"], es: 'Ojalá no hubiera enviado ese correo ayer.' },
      { s: 'He wishes he ___ the job when he had the chance.', a: 'had accepted', o: ['accepts', 'has accepted', 'will accept'], es: 'Él desearía haber aceptado el trabajo cuando tuvo la oportunidad.' },
    ],
  },
  {
    id: 'would-rather', level: 'B', name: 'Would Rather', es: 'Preferir (would rather)',
    form: 'would rather + verbo (mismo sujeto) · would rather + otro sujeto + pasado simple',
    uses: ['Expresar preferencias', 'Con otro sujeto se usa pasado aunque hablemos del presente o futuro'],
    examples: [
      { en: "I'd rather stay at home tonight.", es: 'Prefiero quedarme en casa esta noche.' },
      { en: "I'd rather you didn't smoke here.", es: 'Preferiría que no fumaras aquí.' },
    ],
    ex: [
      { s: "I'd rather you ___ me the truth.", a: 'told', o: ['tell', 'to tell', 'will tell'], es: 'Preferiría que me dijeras la verdad.' },
      { s: "I'd rather ___ by train than by plane.", a: 'travel', o: ['to travel', 'travelling', 'travelled'], es: 'Prefiero viajar en tren que en avión.' },
    ],
  },
  {
    id: 'its-time', level: 'B', name: "It's time", es: 'Ya es hora de que...',
    form: 'It is (high / about) time + sujeto + pasado simple · It is time + to + verbo',
    uses: ['Decir que algo debería estar pasando ya (a menudo como crítica)'],
    examples: [
      { en: "It's time we went home.", es: 'Ya es hora de que nos vayamos a casa.' },
      { en: "It's high time you found a job.", es: 'Ya va siendo hora de que encuentres trabajo.' },
    ],
    ex: [
      { s: "It's late. It's time the children ___ to bed.", a: 'went', o: ['go', 'will go', 'have gone'], es: 'Es tarde. Ya es hora de que los niños se acuesten.' },
      { s: "It's high time you ___ smoking.", a: 'stopped', o: ['stop', 'will stop', 'have stopped'], es: 'Ya va siendo hora de que dejes de fumar.' },
    ],
  },
  {
    id: 'reported-speech', level: 'B', name: 'Reported Speech', es: 'Estilo indirecto',
    form: 'say / tell (+ persona) + that + oración con el tiempo «un paso atrás»',
    uses: ['Contar lo que dijo otra persona', 'present → past · past / present perfect → past perfect · will → would · can → could'],
    examples: [
      { en: '"I am tired." → She said (that) she was tired.', es: 'Dijo que estaba cansada.' },
      { en: '"I will call you." → He told me he would call me.', es: 'Me dijo que me llamaría.' },
    ],
    tip: 'tell necesita persona (told me); say no (said that). Cambian también here → there, tomorrow → the next day.',
    ex: [
      { s: '"I saw the film." → She said she ___ the film.', a: 'had seen', o: ['sees', 'will see', 'seeing'], es: 'Dijo que había visto la película.' },
      { s: '"I will help you." → He said he ___ help me.', a: 'would', o: ['will be', 'shall to', 'wills'], es: 'Dijo que me ayudaría.' },
      { s: 'She ___ me that she was leaving.', a: 'told', o: ['said', 'spoke', 'talked'], es: 'Me dijo que se iba.' },
    ],
  },
  // ── Avanzado ──
  {
    id: 'passive-reporting', level: 'C', name: 'Passive Reporting', es: 'Pasiva impersonal (se dice que...)',
    form: 'It is said / believed / thought + that + oración · Sujeto + is said + to + verbo',
    uses: ['Presentar opiniones o información de forma impersonal y formal (muy útil en IELTS Writing)'],
    examples: [
      { en: 'It is believed that the painting is a fake.', es: 'Se cree que el cuadro es falso.' },
      { en: 'He is said to be the richest man in town.', es: 'Se dice que es el hombre más rico del pueblo.' },
    ],
    ex: [
      { s: 'It ___ that exercise improves memory.', a: 'is thought', o: ['thinks', 'is thinking', 'thought'], es: 'Se cree que el ejercicio mejora la memoria.' },
      { s: 'The company is said ___ millions last year.', a: 'to have lost', o: ['to lose', 'losing', 'that lost'], es: 'Se dice que la empresa perdió millones el año pasado.' },
    ],
  },
  {
    id: 'inversion', level: 'C', name: 'Inversion (Negative)', es: 'Inversión tras adverbio negativo',
    form: 'Adverbio negativo o restrictivo + auxiliar + sujeto + verbo',
    uses: ['Dar énfasis en un estilo formal (Never, Rarely, Not only, Hardly, Under no circumstances...)'],
    examples: [
      { en: 'Never have I seen such a beautiful place.', es: 'Nunca había visto un lugar tan bonito.' },
      { en: 'Not only did he lie, but he also stole.', es: 'No solo mintió, sino que además robó.' },
    ],
    tip: 'Funciona como una pregunta: Rarely do we eat out (no «rarely we eat out»).',
    ex: [
      { s: 'Never ___ such a delicious meal.', a: 'have I eaten', o: ['I have eaten', 'I ate', 'did I ate'], es: 'Nunca he comido algo tan delicioso.' },
      { s: 'Not only ___ late, but he also forgot the tickets.', a: 'did he arrive', o: ['he arrived', 'arrived he', 'he did arrive'], es: 'No solo llegó tarde, sino que además olvidó las entradas.' },
    ],
  },
  {
    id: 'cleft-it', level: 'C', name: 'Cleft Sentences (It)', es: 'Oraciones enfáticas con It',
    form: 'It is / was + parte enfatizada + that / who + resto',
    uses: ['Enfatizar una parte concreta de la oración (fue X quien / cuando / donde...)'],
    examples: [
      { en: 'It was John who broke the window.', es: 'Fue John quien rompió la ventana.' },
      { en: 'It is in summer that the city is busiest.', es: 'Es en verano cuando la ciudad está más llena.' },
    ],
    ex: [
      { s: '___ my sister who told me the news.', a: 'It was', o: ['There was', 'She was', 'That was'], es: 'Fue mi hermana quien me dio la noticia.' },
      { s: 'It was in 2015 ___ we first met.', a: 'that', o: ['who', 'which', 'what'], es: 'Fue en 2015 cuando nos conocimos.' },
    ],
  },
  {
    id: 'cleft-what', level: 'C', name: 'Cleft Sentences (What)', es: 'Oraciones enfáticas con What',
    form: 'What + sujeto + verbo + is / was + parte enfatizada',
    uses: ['Enfatizar una acción o idea («Lo que...»)'],
    examples: [
      { en: 'What I need is a holiday.', es: 'Lo que necesito son unas vacaciones.' },
      { en: 'What surprised me was his reaction.', es: 'Lo que me sorprendió fue su reacción.' },
    ],
    ex: [
      { s: '___ I love about this city is the food.', a: 'What', o: ['That', 'Which', 'It'], es: 'Lo que me encanta de esta ciudad es la comida.' },
      { s: 'What we need ___ more time.', a: 'is', o: ['are', 'it is', 'that'], es: 'Lo que necesitamos es más tiempo.' },
    ],
  },
  {
    id: 'subjunctive', level: 'C', name: 'Subjunctive Mood', es: 'Subjuntivo',
    form: 'suggest / recommend / insist / demand + that + sujeto + verbo base · It is essential / vital that + sujeto + verbo base',
    uses: ['Recomendaciones, exigencias y necesidad en estilo formal: el verbo queda en forma base para todas las personas'],
    examples: [
      { en: 'The doctor recommended that she rest for a week.', es: 'El médico recomendó que descansara una semana.' },
      { en: 'It is essential that everyone be on time.', es: 'Es imprescindible que todos lleguen puntuales.' },
    ],
    tip: 'Sin -s y sin to: I suggest that he take a taxi (no «takes»). En inglés británico también es correcto should + verbo: I suggest that he should take a taxi.',
    ex: [
      { s: 'The teacher insisted that he ___ the exam again.', a: 'take', o: ['takes', 'taking', 'to take'], es: 'El profesor insistió en que repitiera el examen.' },
      { s: 'I suggest that she ___ a lawyer.', a: 'consult', o: ['consults', 'to consult', 'consulting'], es: 'Sugiero que consulte a un abogado.' },
    ],
  },
  {
    id: 'participle-active', level: 'C', name: 'Participle Clauses (Active)', es: 'Oraciones de participio activo (-ing)',
    form: 'Verbo-ing + complemento, sujeto + verbo',
    uses: ['Acortar oraciones cuando el sujeto es el mismo (acción simultánea o causa)', 'Estilo escrito y formal'],
    examples: [
      { en: 'Walking home, I saw an accident.', es: 'Volviendo a casa, vi un accidente.' },
      { en: 'Feeling tired, she went to bed early.', es: 'Como se sentía cansada, se acostó temprano.' },
    ],
    ex: [
      { s: '___ the door, she saw a strange man.', a: 'Opening', o: ['Opened', 'She opened', 'Open'], es: 'Al abrir la puerta, vio a un hombre extraño.' },
      { s: "___ no money, he couldn't buy a ticket.", a: 'Having', o: ['Had', 'To have', 'Has'], es: 'Como no tenía dinero, no pudo comprar el boleto.' },
    ],
  },
  {
    id: 'participle-passive', level: 'C', name: 'Participle Clauses (Passive)', es: 'Oraciones de participio pasivo',
    form: 'Participio + complemento, sujeto + verbo',
    uses: ['Acortar oraciones pasivas (= which was / were...)'],
    examples: [
      { en: 'Built in 1900, the house needs repairs.', es: 'Construida en 1900, la casa necesita reparaciones.' },
      { en: 'Shocked by the news, he sat down.', es: 'Impactado por la noticia, se sentó.' },
    ],
    ex: [
      { s: '___ in simple English, the book is easy to read.', a: 'Written', o: ['Writing', 'Wrote', 'To write'], es: 'Escrito en inglés sencillo, el libro es fácil de leer.' },
      { s: '___ by the noise, the baby started crying.', a: 'Woken', o: ['Waking', 'Woke', 'To wake'], es: 'Despertado por el ruido, el bebé empezó a llorar.' },
    ],
  },
  {
    id: 'emphatic-do', level: 'C', name: 'Emphatic Do', es: 'Do enfático (sí que...)',
    form: 'Sujeto + do / does / did + verbo (en oración afirmativa)',
    uses: ['Dar énfasis o contradecir a alguien («sí que...», «de verdad»)'],
    examples: [
      { en: 'I do like your dress!', es: '¡De verdad que me gusta tu vestido!' },
      { en: "She did call you — you just didn't hear the phone.", es: 'Sí que te llamó; simplemente no oíste el teléfono.' },
    ],
    ex: [
      { s: "You think I didn't study, but I ___ study!", a: 'did', o: ['do', 'was', 'have'], es: 'Crees que no estudié, ¡pero sí que estudié!' },
      { s: 'He ___ look tired today.', a: 'does', o: ['is', 'do', 'has'], es: 'La verdad es que hoy se le ve cansado.' },
    ],
  },
  {
    id: 'the-the', level: 'C', name: 'The... the... (Correlative)', es: 'Cuanto más..., más...',
    form: 'The + comparativo (+ sujeto + verbo), the + comparativo (+ sujeto + verbo)',
    uses: ['Dos cosas que cambian a la vez (cuanto más..., más...)'],
    examples: [
      { en: 'The more you practise, the better you get.', es: 'Cuanto más practicas, mejor lo haces.' },
      { en: 'The sooner, the better.', es: 'Cuanto antes, mejor.' },
    ],
    ex: [
      { s: 'The more you read, ___ your vocabulary becomes.', a: 'the richer', o: ['richer', 'the richest', 'more rich'], es: 'Cuanto más lees, más rico se vuelve tu vocabulario.' },
      { s: '___ I get, the less I sleep.', a: 'The older', o: ['Older', 'The oldest', 'More old'], es: 'Cuanto mayor me hago, menos duermo.' },
    ],
  },
  {
    id: 'modal-perfect', level: 'C', name: 'Modals of deduction (past)', es: 'Deducciones sobre el pasado',
    form: "must have / might have / could have / can't have / should have + participio",
    uses: ['must have = seguro que sí', 'might / could have = quizás', "can't / couldn't have = seguro que no", 'should have = debería haber (crítica o arrepentimiento)'],
    examples: [
      { en: 'The streets are wet. It must have rained.', es: 'Las calles están mojadas. Debe de haber llovido.' },
      { en: "She can't have seen me — she didn't say hello.", es: 'No puede haberme visto: no me saludó.' },
    ],
    ex: [
      { s: "I can't find my keys. I ___ them at the office.", a: 'must have left', o: ['must leave', 'should leave', 'can have left'], es: 'No encuentro mis llaves. Debo de haberlas dejado en la oficina.' },
      { s: 'She ___ the exam — she never studied!', a: "can't have passed", o: ['must have passed', "mustn't pass", "can't pass"], es: '¡No puede haber aprobado el examen: nunca estudió!' },
      { s: 'You ___ me! I would have helped you.', a: 'should have told', o: ['must have told', 'should tell', 'might tell'], es: '¡Me lo deberías haber dicho! Te habría ayudado.' },
    ],
  },
];
