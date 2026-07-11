const VOCAB = [
  {
    "en": "Ability",
    "es": "Habilidad",
    "c": 4
  },
  {
    "en": "a.m.",
    "es": "Por la mañana, ante meridian",
    "c": 4
  },
  {
    "en": "Able",
    "es": "Capaz",
    "c": 4
  },
  {
    "en": "Above",
    "es": "Por encima de sin tocar",
    "c": 4
  },
  {
    "en": "Abroad",
    "es": "En el extranjero",
    "c": 4
  },
  {
    "en": "Accident",
    "es": "Accidente",
    "c": 4
  },
  {
    "en": "Across",
    "es": "A través de",
    "c": 4
  },
  {
    "en": "Act",
    "es": "Actuar",
    "c": 4
  },
  {
    "en": "Activity",
    "es": "Actividad",
    "c": 4
  },
  {
    "en": "Actor",
    "es": "Actor",
    "c": 4
  },
  {
    "en": "Actress",
    "es": "Actriz",
    "c": 4
  },
  {
    "en": "Actually",
    "es": "Realmente",
    "c": 4
  },
  {
    "en": "Add",
    "es": "Añadir, sumar",
    "c": 4
  },
  {
    "en": "Address",
    "es": "Dirección",
    "c": 4
  },
  {
    "en": "Adult",
    "es": "Adulto",
    "c": 4
  },
  {
    "en": "Advantage",
    "es": "Ventaja, superioridad",
    "c": 4
  },
  {
    "en": "Adventure",
    "es": "Aventura",
    "c": 4
  },
  {
    "en": "Advertisement",
    "es": "Anuncio",
    "c": 4
  },
  {
    "en": "Aeroplane",
    "es": "Avión",
    "c": 4
  },
  {
    "en": "Afraid",
    "es": "Asustado",
    "c": 4
  },
  {
    "en": "After",
    "es": "Después",
    "c": 4
  },
  {
    "en": "Afternoon",
    "es": "Tarde después de comer",
    "c": 4
  },
  {
    "en": "Afterwards",
    "es": "Después, luego",
    "c": 4
  },
  {
    "en": "Again",
    "es": "Otra vez",
    "c": 4
  },
  {
    "en": "Against",
    "es": "Contra",
    "c": 4
  },
  {
    "en": "Age",
    "es": "Edad, época, era",
    "c": 4
  },
  {
    "en": "Ago",
    "es": "Atrás",
    "c": 4
  },
  {
    "en": "Agree",
    "es": "Estar de acuerdo",
    "c": 4
  },
  {
    "en": "Air",
    "es": "Aire",
    "c": 4
  },
  {
    "en": "Airport",
    "es": "Aeropuerto",
    "c": 4
  },
  {
    "en": "All",
    "es": "Todos, todo",
    "c": 4
  },
  {
    "en": "Almost",
    "es": "Casi",
    "c": 4
  },
  {
    "en": "Alone",
    "es": "Solo",
    "c": 4
  },
  {
    "en": "Already",
    "es": "Ya",
    "c": 4
  },
  {
    "en": "Also",
    "es": "También",
    "c": 4
  },
  {
    "en": "Always",
    "es": "Siempre",
    "c": 4
  },
  {
    "en": "Ambulance",
    "es": "Ambulancia",
    "c": 4
  },
  {
    "en": "Among",
    "es": "Entre varios",
    "c": 4
  },
  {
    "en": "And",
    "es": "Y",
    "c": 4
  },
  {
    "en": "Angry",
    "es": "Enfadado",
    "c": 4
  },
  {
    "en": "Animal",
    "es": "Animal",
    "c": 4
  },
  {
    "en": "Another",
    "es": "Otro",
    "c": 4
  },
  {
    "en": "Answer",
    "es": "Respuesta, contestación",
    "c": 4
  },
  {
    "en": "Any",
    "es": "Alguno",
    "c": 4
  },
  {
    "en": "Anybody",
    "es": "Alguien",
    "c": 4
  },
  {
    "en": "Anyone",
    "es": "Alguien",
    "c": 4
  },
  {
    "en": "Anything",
    "es": "Alguna cosa",
    "c": 4
  },
  {
    "en": "Anyway",
    "es": "De cualquier modo",
    "c": 4
  },
  {
    "en": "Anywhere",
    "es": "En cualquier sitio",
    "c": 4
  },
  {
    "en": "Apartment",
    "es": "Apartamento",
    "c": 4
  },
  {
    "en": "Apple",
    "es": "Manzana",
    "c": 4
  },
  {
    "en": "Appointment",
    "es": "Una cita",
    "c": 4
  },
  {
    "en": "Area",
    "es": "Área",
    "c": 4
  },
  {
    "en": "Arm",
    "es": "Brazo",
    "c": 4
  },
  {
    "en": "Arrive",
    "es": "Llegar",
    "c": 4
  },
  {
    "en": "Art",
    "es": "Arte",
    "c": 4
  },
  {
    "en": "Artist",
    "es": "Artista",
    "c": 4
  },
  {
    "en": "As",
    "es": "Tan, según",
    "c": 4
  },
  {
    "en": "As well",
    "es": "Tan bien",
    "c": 4
  },
  {
    "en": "As well as",
    "es": "Así como",
    "c": 4
  },
  {
    "en": "Ask",
    "es": "Preguntar",
    "c": 4
  },
  {
    "en": "Assistant",
    "es": "Asistente",
    "c": 4
  },
  {
    "en": "At",
    "es": "A las, en",
    "c": 4
  },
  {
    "en": "At all",
    "es": "En absoluto",
    "c": 4
  },
  {
    "en": "Aunt",
    "es": "Tia",
    "c": 4
  },
  {
    "en": "Autumn",
    "es": "Otoño",
    "c": 4
  },
  {
    "en": "Away",
    "es": "Lejos",
    "c": 4
  },
  {
    "en": "Baby",
    "es": "Bebé",
    "c": 4
  },
  {
    "en": "Bad",
    "es": "Malo",
    "c": 4
  },
  {
    "en": "Bag",
    "es": "Bolsa",
    "c": 4
  },
  {
    "en": "Ball",
    "es": "pelota",
    "c": 4
  },
  {
    "en": "Banana",
    "es": "Plátano",
    "c": 4
  },
  {
    "en": "Band",
    "es": "Grupo musical, banda",
    "c": 4
  },
  {
    "en": "Bank",
    "es": "Banco, hucha. Orilla de rio.",
    "c": 4
  },
  {
    "en": "Barbecue",
    "es": "Barbacoa",
    "c": 4
  },
  {
    "en": "Baseball",
    "es": "Baseball",
    "c": 4
  },
  {
    "en": "Basketball",
    "es": "Baloncesto",
    "c": 4
  },
  {
    "en": "Bath",
    "es": "Bañera",
    "c": 4
  },
  {
    "en": "Bathroom",
    "es": "Baño",
    "c": 4
  },
  {
    "en": "Be",
    "es": "Ser, estar",
    "c": 4
  },
  {
    "en": "Beach",
    "es": "Playa",
    "c": 4
  },
  {
    "en": "Bear",
    "es": "Oso. Soportar",
    "c": 4
  },
  {
    "en": "Beautiful",
    "es": "Bonito, hermoso",
    "c": 4
  },
  {
    "en": "Because",
    "es": "Porque",
    "c": 4
  },
  {
    "en": "Because of",
    "es": "A causa de",
    "c": 4
  },
  {
    "en": "Become",
    "es": "Llegar a ser",
    "c": 4
  },
  {
    "en": "Bed",
    "es": "Cama",
    "c": 4
  },
  {
    "en": "Before",
    "es": "Antes",
    "c": 4
  },
  {
    "en": "Begin",
    "es": "Empezar",
    "c": 4
  },
  {
    "en": "Behind",
    "es": "Detrás",
    "c": 4
  },
  {
    "en": "Believe",
    "es": "Creer",
    "c": 4
  },
  {
    "en": "Belong",
    "es": "Pertenecer",
    "c": 4
  },
  {
    "en": "Below",
    "es": "Por debajo de",
    "c": 4
  },
  {
    "en": "Between",
    "es": "Entre dos",
    "c": 4
  },
  {
    "en": "Bicycle",
    "es": "Bicicleta",
    "c": 4
  },
  {
    "en": "Big",
    "es": "Grande",
    "c": 4
  },
  {
    "en": "Bike",
    "es": "Bici",
    "c": 4
  },
  {
    "en": "Bill",
    "es": "Cuenta, pico",
    "c": 4
  },
  {
    "en": "Bird",
    "es": "Pájaro",
    "c": 4
  },
  {
    "en": "Birthday",
    "es": "Cumpleaños",
    "c": 4
  },
  {
    "en": "Biscuit",
    "es": "Galleta",
    "c": 4
  },
  {
    "en": "Bit",
    "es": "Trocito",
    "c": 4
  },
  {
    "en": "Black",
    "es": "Negro",
    "c": 4
  },
  {
    "en": "Blanket",
    "es": "Manta",
    "c": 4
  },
  {
    "en": "Blond",
    "es": "Rubio",
    "c": 4
  },
  {
    "en": "Blood",
    "es": "Sangre",
    "c": 4
  },
  {
    "en": "Blouse",
    "es": "Blusa",
    "c": 4
  },
  {
    "en": "Blue",
    "es": "Azul, triste",
    "c": 4
  },
  {
    "en": "Board",
    "es": "Tabla",
    "c": 4
  },
  {
    "en": "Boat",
    "es": "Barco",
    "c": 4
  },
  {
    "en": "Body",
    "es": "Cuerpo",
    "c": 4
  },
  {
    "en": "Boil",
    "es": "Hervir",
    "c": 4
  },
  {
    "en": "Book",
    "es": "Libro, reservar",
    "c": 4
  },
  {
    "en": "Bookshelf",
    "es": "Estantería",
    "c": 4
  },
  {
    "en": "Bookshop",
    "es": "Librería",
    "c": 4
  },
  {
    "en": "Boot",
    "es": "Bota, maletero",
    "c": 4
  },
  {
    "en": "Boring",
    "es": "Aburriente",
    "c": 4
  },
  {
    "en": "Born",
    "es": "Parido, transportado",
    "c": 4
  },
  {
    "en": "Boss",
    "es": "Jefe",
    "c": 4
  },
  {
    "en": "Both",
    "es": "Ambos",
    "c": 4
  },
  {
    "en": "Bottle",
    "es": "Botella, embotellar",
    "c": 4
  },
  {
    "en": "Bottom",
    "es": "Trasero, fondo",
    "c": 4
  },
  {
    "en": "Bowl",
    "es": "Bol, casco de fútbol americano",
    "c": 4
  },
  {
    "en": "Box",
    "es": "Caja, boxear",
    "c": 4
  },
  {
    "en": "Boy",
    "es": "Chico",
    "c": 4
  },
  {
    "en": "Brake",
    "es": "Freno, frenar",
    "c": 4
  },
  {
    "en": "Bread",
    "es": "Pan",
    "c": 4
  },
  {
    "en": "Break",
    "es": "Romper",
    "c": 4
  },
  {
    "en": "Breakfast",
    "es": "Desayuno",
    "c": 4
  },
  {
    "en": "Bridge",
    "es": "Puente, abreviar",
    "c": 4
  },
  {
    "en": "Bring",
    "es": "Traer",
    "c": 4
  },
  {
    "en": "Brother",
    "es": "Hermano",
    "c": 4
  },
  {
    "en": "Brown",
    "es": "Marrón",
    "c": 4
  },
  {
    "en": "abandoning",
    "es": "abandonando",
    "c": 4
  },
  {
    "en": "abandonment",
    "es": "abandono",
    "c": 4
  },
  {
    "en": "abandons",
    "es": "abandona",
    "c": 4
  },
  {
    "en": "abnormal",
    "es": "anormal",
    "c": 4
  },
  {
    "en": "abnormally",
    "es": "anormalmente",
    "c": 4
  },
  {
    "en": "abstraction",
    "es": "abstracción",
    "c": 4
  },
  {
    "en": "abstractions",
    "es": "abstracciones",
    "c": 4
  },
  {
    "en": "abstractly",
    "es": "de manera abstracta",
    "c": 4
  },
  {
    "en": "academia",
    "es": "mundo académico",
    "c": 4
  },
  {
    "en": "academic",
    "es": "académico",
    "c": 4
  },
  {
    "en": "academically",
    "es": "académicamente",
    "c": 4
  },
  {
    "en": "academics",
    "es": "académicos",
    "c": 4
  },
  {
    "en": "academies",
    "es": "academias",
    "c": 4
  },
  {
    "en": "accessed",
    "es": "accedido",
    "c": 4
  },
  {
    "en": "accesses",
    "es": "accede",
    "c": 4
  },
  {
    "en": "accessing",
    "es": "accediendo",
    "c": 4
  },
  {
    "en": "accompanies",
    "es": "acompaña",
    "c": 4
  },
  {
    "en": "accompaniment",
    "es": "acompañamiento",
    "c": 4
  },
  {
    "en": "accompanying",
    "es": "acompañando",
    "c": 4
  },
  {
    "en": "accumulates",
    "es": "acumula",
    "c": 4
  },
  {
    "en": "accumulating",
    "es": "acumulando",
    "c": 4
  },
  {
    "en": "accurate",
    "es": "preciso",
    "c": 4
  },
  {
    "en": "achievable",
    "es": "lograble",
    "c": 4
  },
  {
    "en": "achieved",
    "es": "logrado",
    "c": 4
  },
  {
    "en": "achievement",
    "es": "logro",
    "c": 4
  },
  {
    "en": "achievements",
    "es": "logros",
    "c": 4
  },
  {
    "en": "achieves",
    "es": "logra",
    "c": 4
  },
  {
    "en": "achieving",
    "es": "logrando",
    "c": 4
  },
  {
    "en": "acknowledge",
    "es": "reconocer",
    "c": 4
  },
  {
    "en": "acknowledged",
    "es": "reconocido",
    "c": 4
  },
  {
    "en": "acknowledgement",
    "es": "reconocimiento",
    "c": 4
  },
  {
    "en": "acknowledges",
    "es": "reconoce",
    "c": 4
  },
  {
    "en": "acknowledging",
    "es": "reconociendo",
    "c": 4
  },
  {
    "en": "acquired",
    "es": "adquirido",
    "c": 4
  },
  {
    "en": "acquires",
    "es": "adquiere",
    "c": 4
  },
  {
    "en": "acquiring",
    "es": "adquiriendo",
    "c": 4
  },
  {
    "en": "acquisitions",
    "es": "adquisiciones",
    "c": 4
  },
  {
    "en": "adaptability",
    "es": "adaptabilidad",
    "c": 4
  },
  {
    "en": "adaptable",
    "es": "adaptable",
    "c": 4
  },
  {
    "en": "adaptations",
    "es": "adaptaciones",
    "c": 4
  },
  {
    "en": "adapting",
    "es": "adaptando",
    "c": 4
  },
  {
    "en": "adaptive",
    "es": "adaptativo",
    "c": 4
  },
  {
    "en": "adapts",
    "es": "adapta",
    "c": 4
  },
  {
    "en": "adequacy",
    "es": "adecuación",
    "c": 4
  },
  {
    "en": "adjusting",
    "es": "ajustando",
    "c": 4
  },
  {
    "en": "adjustments",
    "es": "ajustes",
    "c": 4
  },
  {
    "en": "adjusts",
    "es": "ajusta",
    "c": 4
  },
  {
    "en": "administrates",
    "es": "administra",
    "c": 4
  },
  {
    "en": "administration",
    "es": "administración",
    "c": 4
  },
  {
    "en": "administrations",
    "es": "administraciones",
    "c": 4
  },
  {
    "en": "administratively",
    "es": "administrativamente",
    "c": 4
  },
  {
    "en": "administrators",
    "es": "administradores",
    "c": 4
  },
  {
    "en": "adulthood",
    "es": "adultez",
    "c": 4
  },
  {
    "en": "adults",
    "es": "adultos",
    "c": 4
  },
  {
    "en": "advocated",
    "es": "defendido",
    "c": 4
  },
  {
    "en": "advocating",
    "es": "abogando",
    "c": 4
  },
  {
    "en": "affecting",
    "es": "afectando",
    "c": 4
  },
  {
    "en": "affective",
    "es": "afectivo",
    "c": 4
  },
  {
    "en": "affectively",
    "es": "afectivamente",
    "c": 4
  },
  {
    "en": "affects",
    "es": "afecta",
    "c": 4
  },
  {
    "en": "aggregate",
    "es": "agregado",
    "c": 4
  },
  {
    "en": "aggregated",
    "es": "agregado",
    "c": 4
  },
  {
    "en": "aggregates",
    "es": "agregados",
    "c": 4
  },
  {
    "en": "aggregating",
    "es": "agregando",
    "c": 4
  },
  {
    "en": "aggregation",
    "es": "agregación",
    "c": 4
  },
  {
    "en": "aided",
    "es": "ayudado",
    "c": 4
  },
  {
    "en": "aiding",
    "es": "ayudando",
    "c": 4
  },
  {
    "en": "albeit",
    "es": "aunque",
    "c": 4
  },
  {
    "en": "allocated",
    "es": "asignado",
    "c": 4
  },
  {
    "en": "allocates",
    "es": "asigna",
    "c": 4
  },
  {
    "en": "allocating",
    "es": "asignando",
    "c": 4
  },
  {
    "en": "allocations",
    "es": "asignaciones",
    "c": 4
  },
  {
    "en": "alterable",
    "es": "alterable",
    "c": 4
  },
  {
    "en": "alteration",
    "es": "alteración",
    "c": 4
  },
  {
    "en": "alterations",
    "es": "alteraciones",
    "c": 4
  },
  {
    "en": "altering",
    "es": "alterando",
    "c": 4
  },
  {
    "en": "alternating",
    "es": "alternando",
    "c": 4
  },
  {
    "en": "alternative",
    "es": "alternativa",
    "c": 4
  },
  {
    "en": "alternatively",
    "es": "alternativamente",
    "c": 4
  },
  {
    "en": "alternatives",
    "es": "alternativas",
    "c": 4
  },
  {
    "en": "alters",
    "es": "altera",
    "c": 4
  },
  {
    "en": "ambiguities",
    "es": "ambigüedades",
    "c": 4
  },
  {
    "en": "ambiguity",
    "es": "ambigüedad",
    "c": 4
  },
  {
    "en": "ambiguous",
    "es": "ambiguo",
    "c": 4
  },
  {
    "en": "amended",
    "es": "enmendado",
    "c": 4
  },
  {
    "en": "amending",
    "es": "enmendando",
    "c": 4
  },
  {
    "en": "amendments",
    "es": "enmiendas",
    "c": 4
  },
  {
    "en": "amends",
    "es": "enmienda",
    "c": 4
  },
  {
    "en": "analogies",
    "es": "analogías",
    "c": 4
  },
  {
    "en": "analogous",
    "es": "análogo",
    "c": 4
  },
  {
    "en": "analyser",
    "es": "analizador",
    "c": 4
  },
  {
    "en": "analysers",
    "es": "analizadores",
    "c": 4
  },
  {
    "en": "analyses",
    "es": "análisis (plural)",
    "c": 4
  },
  {
    "en": "analysing",
    "es": "analizando",
    "c": 4
  },
  {
    "en": "analysis",
    "es": "análisis",
    "c": 4
  },
  {
    "en": "analysts",
    "es": "analistas",
    "c": 4
  },
  {
    "en": "analytic",
    "es": "analítico",
    "c": 4
  },
  {
    "en": "analytical",
    "es": "analítico",
    "c": 4
  },
  {
    "en": "analytically",
    "es": "analíticamente",
    "c": 4
  },
  {
    "en": "analyze",
    "es": "analizar",
    "c": 4
  },
  {
    "en": "analyzed",
    "es": "analizado",
    "c": 4
  },
  {
    "en": "analyzes",
    "es": "analiza",
    "c": 4
  },
  {
    "en": "analyzing",
    "es": "analizando",
    "c": 4
  },
  {
    "en": "annual",
    "es": "anual",
    "c": 4
  },
  {
    "en": "anticipates",
    "es": "anticipa",
    "c": 4
  },
  {
    "en": "anticipating",
    "es": "anticipando",
    "c": 4
  },
  {
    "en": "anticipation",
    "es": "anticipación",
    "c": 4
  },
  {
    "en": "apparent",
    "es": "aparente",
    "c": 4
  },
  {
    "en": "apparently",
    "es": "aparentemente",
    "c": 4
  },
  {
    "en": "append",
    "es": "añadir",
    "c": 4
  },
  {
    "en": "appended",
    "es": "añadido",
    "c": 4
  },
  {
    "en": "appendices",
    "es": "apéndices",
    "c": 4
  },
  {
    "en": "appending",
    "es": "añadiendo",
    "c": 4
  },
  {
    "en": "appendix",
    "es": "apéndice",
    "c": 4
  },
  {
    "en": "appendixes",
    "es": "apéndices",
    "c": 4
  },
  {
    "en": "appends",
    "es": "añade",
    "c": 4
  },
  {
    "en": "appreciable",
    "es": "apreciable",
    "c": 4
  },
  {
    "en": "appreciably",
    "es": "apreciablemente",
    "c": 4
  },
  {
    "en": "appreciates",
    "es": "aprecia",
    "c": 4
  },
  {
    "en": "appreciating",
    "es": "apreciando",
    "c": 4
  },
  {
    "en": "approachable",
    "es": "accesible",
    "c": 4
  },
  {
    "en": "approaching",
    "es": "aproximándose",
    "c": 4
  },
  {
    "en": "appropriacy",
    "es": "adecuación",
    "c": 4
  },
  {
    "en": "appropriate",
    "es": "apropiado",
    "c": 4
  },
  {
    "en": "appropriateness",
    "es": "apropiación",
    "c": 4
  },
  {
    "en": "approximate",
    "es": "aproximado",
    "c": 4
  },
  {
    "en": "approximated",
    "es": "aproximado",
    "c": 4
  },
  {
    "en": "approximates",
    "es": "aproxima",
    "c": 4
  },
  {
    "en": "approximating",
    "es": "aproximando",
    "c": 4
  },
  {
    "en": "approximation",
    "es": "aproximación",
    "c": 4
  },
  {
    "en": "approximations",
    "es": "aproximaciones",
    "c": 4
  },
  {
    "en": "arbitrarily",
    "es": "arbitrariamente",
    "c": 4
  },
  {
    "en": "arbitrariness",
    "es": "arbitrariedad",
    "c": 4
  },
  {
    "en": "areas",
    "es": "áreas",
    "c": 4
  },
  {
    "en": "aspect",
    "es": "aspecto",
    "c": 4
  },
  {
    "en": "aspects",
    "es": "aspectos",
    "c": 4
  },
  {
    "en": "assemblies",
    "es": "asambleas",
    "c": 4
  },
  {
    "en": "assembling",
    "es": "ensamblando",
    "c": 4
  },
  {
    "en": "assess",
    "es": "evaluar",
    "c": 4
  },
  {
    "en": "assessable",
    "es": "evaluable",
    "c": 4
  },
  {
    "en": "assessed",
    "es": "evaluado",
    "c": 4
  },
  {
    "en": "assesses",
    "es": "evalúa",
    "c": 4
  },
  {
    "en": "assessing",
    "es": "evaluando",
    "c": 4
  },
  {
    "en": "assessment",
    "es": "evaluación",
    "c": 4
  },
  {
    "en": "assessments",
    "es": "evaluaciones",
    "c": 4
  },
  {
    "en": "assigned",
    "es": "asignado",
    "c": 4
  },
  {
    "en": "assigning",
    "es": "asignando",
    "c": 4
  },
  {
    "en": "assigns",
    "es": "asigna",
    "c": 4
  },
  {
    "en": "assistants",
    "es": "asistentes",
    "c": 4
  },
  {
    "en": "assisting",
    "es": "asistiendo",
    "c": 4
  },
  {
    "en": "assists",
    "es": "asiste",
    "c": 4
  },
  {
    "en": "assumes",
    "es": "asume",
    "c": 4
  },
  {
    "en": "assuming",
    "es": "asumiendo",
    "c": 4
  },
  {
    "en": "assumptions",
    "es": "suposiciones",
    "c": 4
  },
  {
    "en": "assurances",
    "es": "garantías",
    "c": 4
  },
  {
    "en": "assuredly",
    "es": "seguramente",
    "c": 4
  },
  {
    "en": "assures",
    "es": "asegura",
    "c": 4
  },
  {
    "en": "assuring",
    "es": "asegurando",
    "c": 4
  },
  {
    "en": "attaching",
    "es": "adjuntando",
    "c": 4
  },
  {
    "en": "attachments",
    "es": "archivos adjuntos",
    "c": 4
  },
  {
    "en": "attainable",
    "es": "alcanzable",
    "c": 4
  },
  {
    "en": "attained",
    "es": "alcanzado",
    "c": 4
  },
  {
    "en": "attaining",
    "es": "alcanzando",
    "c": 4
  },
  {
    "en": "attainments",
    "es": "logros",
    "c": 4
  },
  {
    "en": "attains",
    "es": "alcanza",
    "c": 4
  },
  {
    "en": "attitudes",
    "es": "actitudes",
    "c": 4
  },
  {
    "en": "attributable",
    "es": "atribuible",
    "c": 4
  },
  {
    "en": "attributing",
    "es": "atribuyendo",
    "c": 4
  },
  {
    "en": "attribution",
    "es": "atribución",
    "c": 4
  },
  {
    "en": "author",
    "es": "autor",
    "c": 4
  },
  {
    "en": "authored",
    "es": "escrito por",
    "c": 4
  },
  {
    "en": "authoring",
    "es": "escribiendo",
    "c": 4
  },
  {
    "en": "authorities",
    "es": "autoridades",
    "c": 4
  },
  {
    "en": "authority",
    "es": "autoridad",
    "c": 4
  },
  {
    "en": "authors",
    "es": "autores",
    "c": 4
  },
  {
    "en": "authorship",
    "es": "autoría",
    "c": 4
  },
  {
    "en": "automate",
    "es": "automatizar",
    "c": 4
  },
  {
    "en": "automated",
    "es": "automatizado",
    "c": 4
  },
  {
    "en": "automates",
    "es": "automatiza",
    "c": 4
  },
  {
    "en": "automatic",
    "es": "automático",
    "c": 4
  },
  {
    "en": "automatically",
    "es": "automáticamente",
    "c": 4
  },
  {
    "en": "automating",
    "es": "automatizando",
    "c": 4
  },
  {
    "en": "automation",
    "es": "automatización",
    "c": 4
  },
  {
    "en": "available",
    "es": "disponible",
    "c": 4
  },
  {
    "en": "aware",
    "es": "consciente",
    "c": 4
  },
  {
    "en": "beneficiaries",
    "es": "beneficiarios",
    "c": 4
  },
  {
    "en": "benefited",
    "es": "beneficiado",
    "c": 4
  },
  {
    "en": "benefiting",
    "es": "beneficiando",
    "c": 4
  },
  {
    "en": "benefits",
    "es": "beneficios",
    "c": 4
  },
  {
    "en": "biased",
    "es": "sesgado",
    "c": 4
  },
  {
    "en": "biases",
    "es": "sesgos",
    "c": 4
  },
  {
    "en": "biasing",
    "es": "sesgando",
    "c": 4
  },
  {
    "en": "bond",
    "es": "vínculo",
    "c": 4
  },
  {
    "en": "bonded",
    "es": "vinculado",
    "c": 4
  },
  {
    "en": "bonding",
    "es": "vinculando",
    "c": 4
  },
  {
    "en": "bonds",
    "es": "vínculos",
    "c": 4
  },
  {
    "en": "brevity",
    "es": "brevedad",
    "c": 4
  },
  {
    "en": "brief",
    "es": "breve",
    "c": 4
  },
  {
    "en": "briefed",
    "es": "informado",
    "c": 4
  },
  {
    "en": "briefing",
    "es": "reunión informativa",
    "c": 4
  },
  {
    "en": "bulky",
    "es": "voluminoso",
    "c": 4
  },
  {
    "en": "capabilities",
    "es": "capacidades",
    "c": 4
  },
  {
    "en": "capable",
    "es": "capaz",
    "c": 4
  },
  {
    "en": "capacities",
    "es": "capacidades",
    "c": 4
  },
  {
    "en": "categories",
    "es": "categorías",
    "c": 4
  },
  {
    "en": "categorisation",
    "es": "categorización",
    "c": 4
  },
  {
    "en": "categorise",
    "es": "categorizar",
    "c": 4
  },
  {
    "en": "categorised",
    "es": "categorizado",
    "c": 4
  },
  {
    "en": "categorises",
    "es": "categoriza",
    "c": 4
  },
  {
    "en": "categorising",
    "es": "categorizando",
    "c": 4
  },
  {
    "en": "categorization",
    "es": "categorización",
    "c": 4
  },
  {
    "en": "categorized",
    "es": "categorizado",
    "c": 4
  },
  {
    "en": "categorizes",
    "es": "categoriza",
    "c": 4
  },
  {
    "en": "categorizing",
    "es": "categorizando",
    "c": 4
  },
  {
    "en": "category",
    "es": "categoría",
    "c": 4
  },
  {
    "en": "ceased",
    "es": "cesado",
    "c": 4
  },
  {
    "en": "ceaseless",
    "es": "incesante",
    "c": 4
  },
  {
    "en": "ceases",
    "es": "cesa",
    "c": 4
  },
  {
    "en": "ceasing",
    "es": "cesando",
    "c": 4
  },
  {
    "en": "challenged",
    "es": "desafiado",
    "c": 4
  },
  {
    "en": "challenger",
    "es": "desafiante",
    "c": 4
  },
  {
    "en": "challengers",
    "es": "desafiantes",
    "c": 4
  },
  {
    "en": "challenges",
    "es": "desafíos",
    "c": 4
  },
  {
    "en": "channelled",
    "es": "canalizado",
    "c": 4
  },
  {
    "en": "channelling",
    "es": "canalizando",
    "c": 4
  },
  {
    "en": "channels",
    "es": "canales",
    "c": 4
  },
  {
    "en": "chapter",
    "es": "capítulo",
    "c": 4
  },
  {
    "en": "chapters",
    "es": "capítulos",
    "c": 4
  },
  {
    "en": "charting",
    "es": "trazando",
    "c": 4
  },
  {
    "en": "charts",
    "es": "gráficos",
    "c": 4
  },
  {
    "en": "chemical",
    "es": "químico",
    "c": 4
  },
  {
    "en": "chemically",
    "es": "químicamente",
    "c": 4
  },
  {
    "en": "chemicals",
    "es": "químicos",
    "c": 4
  },
  {
    "en": "circumstance",
    "es": "circunstancia",
    "c": 4
  },
  {
    "en": "circumstances",
    "es": "circunstancias",
    "c": 4
  },
  {
    "en": "citation",
    "es": "cita",
    "c": 4
  },
  {
    "en": "citations",
    "es": "citas",
    "c": 4
  },
  {
    "en": "cite",
    "es": "citar",
    "c": 4
  },
  {
    "en": "cited",
    "es": "citado",
    "c": 4
  },
  {
    "en": "cites",
    "es": "cita",
    "c": 4
  },
  {
    "en": "citing",
    "es": "citando",
    "c": 4
  },
  {
    "en": "civil",
    "es": "civil",
    "c": 4
  },
  {
    "en": "clarification",
    "es": "clarificación",
    "c": 4
  },
  {
    "en": "clarified",
    "es": "clarificado",
    "c": 4
  },
  {
    "en": "clarifies",
    "es": "clarifica",
    "c": 4
  },
  {
    "en": "clarifying",
    "es": "clarificando",
    "c": 4
  },
  {
    "en": "classic",
    "es": "clásico",
    "c": 4
  },
  {
    "en": "classics",
    "es": "clásicos",
    "c": 4
  },
  {
    "en": "clause",
    "es": "cláusula",
    "c": 4
  },
  {
    "en": "clauses",
    "es": "cláusulas",
    "c": 4
  },
  {
    "en": "coded",
    "es": "codificado",
    "c": 4
  },
  {
    "en": "codes",
    "es": "códigos",
    "c": 4
  },
  {
    "en": "coding",
    "es": "codificación",
    "c": 4
  },
  {
    "en": "coherence",
    "es": "coherencia",
    "c": 4
  },
  {
    "en": "coherent",
    "es": "coherente",
    "c": 4
  },
  {
    "en": "coherently",
    "es": "coherentemente",
    "c": 4
  },
  {
    "en": "coincided",
    "es": "coincidió",
    "c": 4
  },
  {
    "en": "coincidences",
    "es": "coincidencias",
    "c": 4
  },
  {
    "en": "coincident",
    "es": "coincidente",
    "c": 4
  },
  {
    "en": "coincidental",
    "es": "coincidental",
    "c": 4
  },
  {
    "en": "coincides",
    "es": "coincide",
    "c": 4
  },
  {
    "en": "coinciding",
    "es": "coincidiendo",
    "c": 4
  },
  {
    "en": "collapse",
    "es": "colapso",
    "c": 4
  },
  {
    "en": "collapsed",
    "es": "colapsado",
    "c": 4
  },
  {
    "en": "collapses",
    "es": "colapsa",
    "c": 4
  },
  {
    "en": "collapsible",
    "es": "plegable",
    "c": 4
  },
  {
    "en": "collapsing",
    "es": "colapsando",
    "c": 4
  },
  {
    "en": "colleague",
    "es": "colega",
    "c": 4
  },
  {
    "en": "commenced",
    "es": "comenzado",
    "c": 4
  },
  {
    "en": "commencement",
    "es": "comienzo",
    "c": 4
  },
  {
    "en": "commences",
    "es": "comienza",
    "c": 4
  },
  {
    "en": "commencing",
    "es": "comenzando",
    "c": 4
  },
  {
    "en": "comment",
    "es": "comentario",
    "c": 4
  },
  {
    "en": "commentaries",
    "es": "comentarios",
    "c": 4
  },
  {
    "en": "commentators",
    "es": "comentaristas",
    "c": 4
  },
  {
    "en": "commented",
    "es": "comentado",
    "c": 4
  },
  {
    "en": "commenting",
    "es": "comentando",
    "c": 4
  },
  {
    "en": "comments",
    "es": "comentarios",
    "c": 4
  },
  {
    "en": "commission",
    "es": "comisión",
    "c": 4
  },
  {
    "en": "commissioned",
    "es": "comisionado",
    "c": 4
  },
  {
    "en": "commissioners",
    "es": "comisionados",
    "c": 4
  },
  {
    "en": "commissioning",
    "es": "comisionando",
    "c": 4
  },
  {
    "en": "commissions",
    "es": "comisiones",
    "c": 4
  },
  {
    "en": "commitments",
    "es": "compromisos",
    "c": 4
  },
  {
    "en": "commits",
    "es": "comete",
    "c": 4
  },
  {
    "en": "committed",
    "es": "comprometido",
    "c": 4
  },
  {
    "en": "committing",
    "es": "cometiendo",
    "c": 4
  },
  {
    "en": "communicable",
    "es": "comunicable",
    "c": 4
  },
  {
    "en": "communicate",
    "es": "comunicar",
    "c": 4
  },
  {
    "en": "communicated",
    "es": "comunicado",
    "c": 4
  },
  {
    "en": "communicates",
    "es": "comunica",
    "c": 4
  },
  {
    "en": "communicating",
    "es": "comunicando",
    "c": 4
  },
  {
    "en": "communication",
    "es": "comunicación",
    "c": 4
  },
  {
    "en": "communications",
    "es": "comunicaciones",
    "c": 4
  },
  {
    "en": "communicative",
    "es": "comunicativo",
    "c": 4
  },
  {
    "en": "communicatively",
    "es": "comunicativamente",
    "c": 4
  },
  {
    "en": "communities",
    "es": "comunidades",
    "c": 4
  },
  {
    "en": "community",
    "es": "comunidad",
    "c": 4
  },
  {
    "en": "compatibility",
    "es": "compatibilidad",
    "c": 4
  },
  {
    "en": "compatible",
    "es": "compatible",
    "c": 4
  },
  {
    "en": "compensated",
    "es": "compensado",
    "c": 4
  },
  {
    "en": "compensates",
    "es": "compensa",
    "c": 4
  },
  {
    "en": "compensating",
    "es": "compensando",
    "c": 4
  },
  {
    "en": "compensations",
    "es": "compensaciones",
    "c": 4
  },
  {
    "en": "compensatory",
    "es": "compensatorio",
    "c": 4
  },
  {
    "en": "compilation",
    "es": "compilación",
    "c": 4
  },
  {
    "en": "compilations",
    "es": "compilaciones",
    "c": 4
  },
  {
    "en": "compiled",
    "es": "compilado",
    "c": 4
  },
  {
    "en": "compiles",
    "es": "compila",
    "c": 4
  },
  {
    "en": "compiling",
    "es": "compilando",
    "c": 4
  },
  {
    "en": "complementary",
    "es": "complementario",
    "c": 4
  },
  {
    "en": "complemented",
    "es": "complementado",
    "c": 4
  },
  {
    "en": "complementing",
    "es": "complementando",
    "c": 4
  },
  {
    "en": "complements",
    "es": "complementa",
    "c": 4
  },
  {
    "en": "complex",
    "es": "complejo",
    "c": 4
  },
  {
    "en": "complexities",
    "es": "complejidades",
    "c": 4
  },
  {
    "en": "component",
    "es": "componente",
    "c": 4
  },
  {
    "en": "componentry",
    "es": "componentes (conjunto)",
    "c": 4
  },
  {
    "en": "components",
    "es": "componentes",
    "c": 4
  },
  {
    "en": "compounded",
    "es": "compuesto",
    "c": 4
  },
  {
    "en": "compounding",
    "es": "componiendo",
    "c": 4
  },
  {
    "en": "compounds",
    "es": "compuestos",
    "c": 4
  },
  {
    "en": "comprehensively",
    "es": "exhaustivamente",
    "c": 4
  },
  {
    "en": "comprises",
    "es": "comprende",
    "c": 4
  },
  {
    "en": "comprising",
    "es": "comprendiendo",
    "c": 4
  },
  {
    "en": "computable",
    "es": "computable",
    "c": 4
  },
  {
    "en": "computation",
    "es": "computación",
    "c": 4
  },
  {
    "en": "computational",
    "es": "computacional",
    "c": 4
  },
  {
    "en": "computations",
    "es": "computaciones",
    "c": 4
  },
  {
    "en": "computed",
    "es": "computado",
    "c": 4
  },
  {
    "en": "computerised",
    "es": "informatizado",
    "c": 4
  },
  {
    "en": "computers",
    "es": "computadoras",
    "c": 4
  },
  {
    "en": "computing",
    "es": "computación",
    "c": 4
  },
  {
    "en": "conceivable",
    "es": "concebible",
    "c": 4
  },
  {
    "en": "conceivably",
    "es": "concebiblemente",
    "c": 4
  },
  {
    "en": "conceived",
    "es": "concebido",
    "c": 4
  },
  {
    "en": "conceives",
    "es": "concibe",
    "c": 4
  },
  {
    "en": "conceiving",
    "es": "concibiendo",
    "c": 4
  },
  {
    "en": "concentrates",
    "es": "concentra",
    "c": 4
  },
  {
    "en": "concentrating",
    "es": "concentrando",
    "c": 4
  },
  {
    "en": "concentration",
    "es": "concentración",
    "c": 4
  },
  {
    "en": "concept",
    "es": "concepto",
    "c": 4
  },
  {
    "en": "concepts",
    "es": "conceptos",
    "c": 4
  },
  {
    "en": "conceptual",
    "es": "conceptual",
    "c": 4
  },
  {
    "en": "conceptualisation",
    "es": "conceptualización",
    "c": 4
  },
  {
    "en": "conceptualise",
    "es": "conceptualizar",
    "c": 4
  },
  {
    "en": "conceptualised",
    "es": "conceptualizado",
    "c": 4
  },
  {
    "en": "conceptualises",
    "es": "conceptualiza",
    "c": 4
  },
  {
    "en": "conceptualising",
    "es": "conceptualizando",
    "c": 4
  },
  {
    "en": "conceptually",
    "es": "conceptualmente",
    "c": 4
  },
  {
    "en": "concludes",
    "es": "concluye",
    "c": 4
  },
  {
    "en": "concluding",
    "es": "concluyendo",
    "c": 4
  },
  {
    "en": "conclusion",
    "es": "conclusión",
    "c": 4
  },
  {
    "en": "conclusions",
    "es": "conclusiones",
    "c": 4
  },
  {
    "en": "conclusive",
    "es": "concluyente",
    "c": 4
  },
  {
    "en": "conclusively",
    "es": "concluyentemente",
    "c": 4
  },
  {
    "en": "concurrent",
    "es": "concurrente",
    "c": 4
  },
  {
    "en": "concurrently",
    "es": "concurrentemente",
    "c": 4
  },
  {
    "en": "conducted",
    "es": "conducido",
    "c": 4
  },
  {
    "en": "conducting",
    "es": "conduciendo",
    "c": 4
  },
  {
    "en": "conducts",
    "es": "conduce",
    "c": 4
  },
  {
    "en": "conference",
    "es": "conferencia",
    "c": 4
  },
  {
    "en": "conferences",
    "es": "conferencias",
    "c": 4
  },
  {
    "en": "conferred",
    "es": "conferido",
    "c": 4
  },
  {
    "en": "conferring",
    "es": "conferiendo",
    "c": 4
  },
  {
    "en": "confers",
    "es": "confiere",
    "c": 4
  },
  {
    "en": "confined",
    "es": "confinado",
    "c": 4
  },
  {
    "en": "confines",
    "es": "confina",
    "c": 4
  },
  {
    "en": "confining",
    "es": "confinando",
    "c": 4
  },
  {
    "en": "confirming",
    "es": "confirmando",
    "c": 4
  },
  {
    "en": "confirms",
    "es": "confirma",
    "c": 4
  },
  {
    "en": "conflicted",
    "es": "en conflicto",
    "c": 4
  },
  {
    "en": "conflicting",
    "es": "conflictivo",
    "c": 4
  },
  {
    "en": "conflicts",
    "es": "conflictos",
    "c": 4
  },
  {
    "en": "conform",
    "es": "conformar",
    "c": 4
  },
  {
    "en": "conformability",
    "es": "conformabilidad",
    "c": 4
  },
  {
    "en": "conformable",
    "es": "conforme",
    "c": 4
  },
  {
    "en": "conformance",
    "es": "conformidad",
    "c": 4
  },
  {
    "en": "conformation",
    "es": "conformación",
    "c": 4
  },
  {
    "en": "conformed",
    "es": "conformado",
    "c": 4
  },
  {
    "en": "conforming",
    "es": "conformando",
    "c": 4
  },
  {
    "en": "conformist",
    "es": "conformista",
    "c": 4
  },
  {
    "en": "conformists",
    "es": "conformistas",
    "c": 4
  },
  {
    "en": "conformity",
    "es": "conformidad",
    "c": 4
  },
  {
    "en": "conforms",
    "es": "conforma",
    "c": 4
  },
  {
    "en": "consented",
    "es": "consentido",
    "c": 4
  },
  {
    "en": "consenting",
    "es": "consintiendo",
    "c": 4
  },
  {
    "en": "consents",
    "es": "consiente",
    "c": 4
  },
  {
    "en": "consequence",
    "es": "consecuencia",
    "c": 4
  },
  {
    "en": "consequences",
    "es": "consecuencias",
    "c": 4
  },
  {
    "en": "consequent",
    "es": "consecuente",
    "c": 4
  },
  {
    "en": "consist",
    "es": "consistir",
    "c": 4
  },
  {
    "en": "consisted",
    "es": "consistió",
    "c": 4
  },
  {
    "en": "consistent",
    "es": "consistente",
    "c": 4
  },
  {
    "en": "consisting",
    "es": "consistiendo",
    "c": 4
  },
  {
    "en": "consists",
    "es": "consiste",
    "c": 4
  },
  {
    "en": "constancy",
    "es": "constancia",
    "c": 4
  },
  {
    "en": "constant",
    "es": "constante",
    "c": 4
  },
  {
    "en": "constantly",
    "es": "constantemente",
    "c": 4
  },
  {
    "en": "constants",
    "es": "constantes",
    "c": 4
  },
  {
    "en": "constituent",
    "es": "constituyente",
    "c": 4
  },
  {
    "en": "constituents",
    "es": "constituyentes",
    "c": 4
  },
  {
    "en": "constituted",
    "es": "constituido",
    "c": 4
  },
  {
    "en": "constitutes",
    "es": "constituye",
    "c": 4
  },
  {
    "en": "constituting",
    "es": "constituyendo",
    "c": 4
  },
  {
    "en": "constitutionally",
    "es": "constitucionalmente",
    "c": 4
  },
  {
    "en": "constitutions",
    "es": "constituciones",
    "c": 4
  },
  {
    "en": "constitutive",
    "es": "constitutivo",
    "c": 4
  },
  {
    "en": "constrain",
    "es": "restringir",
    "c": 4
  },
  {
    "en": "constrained",
    "es": "restringido",
    "c": 4
  },
  {
    "en": "constraining",
    "es": "restringiendo",
    "c": 4
  },
  {
    "en": "constrains",
    "es": "restringe",
    "c": 4
  },
  {
    "en": "constraints",
    "es": "restricciones",
    "c": 4
  },
  {
    "en": "constructing",
    "es": "construyendo",
    "c": 4
  },
  {
    "en": "constructions",
    "es": "construcciones",
    "c": 4
  },
  {
    "en": "constructive",
    "es": "constructivo",
    "c": 4
  },
  {
    "en": "constructs",
    "es": "construye",
    "c": 4
  },
  {
    "en": "consultancy",
    "es": "consultoría",
    "c": 4
  },
  {
    "en": "consultants",
    "es": "consultores",
    "c": 4
  },
  {
    "en": "consultations",
    "es": "consultas",
    "c": 4
  },
  {
    "en": "consultative",
    "es": "consultivo",
    "c": 4
  },
  {
    "en": "consulted",
    "es": "consultado",
    "c": 4
  },
  {
    "en": "consulting",
    "es": "consultando",
    "c": 4
  },
  {
    "en": "consults",
    "es": "consulta",
    "c": 4
  },
  {
    "en": "consumer",
    "es": "consumidor",
    "c": 4
  },
  {
    "en": "consumers",
    "es": "consumidores",
    "c": 4
  },
  {
    "en": "consumes",
    "es": "consume",
    "c": 4
  },
  {
    "en": "consuming",
    "es": "consumiendo",
    "c": 4
  },
  {
    "en": "contactable",
    "es": "contactable",
    "c": 4
  },
  {
    "en": "contacting",
    "es": "contactando",
    "c": 4
  },
  {
    "en": "contacts",
    "es": "contactos",
    "c": 4
  },
  {
    "en": "contemporaries",
    "es": "contemporáneos",
    "c": 4
  },
  {
    "en": "contemporary",
    "es": "contemporáneo",
    "c": 4
  },
  {
    "en": "context",
    "es": "contexto",
    "c": 4
  },
  {
    "en": "contexts",
    "es": "contextos",
    "c": 4
  },
  {
    "en": "contextual",
    "es": "contextual",
    "c": 4
  },
  {
    "en": "contextualise",
    "es": "contextualizar",
    "c": 4
  },
  {
    "en": "contextualised",
    "es": "contextualizado",
    "c": 4
  },
  {
    "en": "contextualising",
    "es": "contextualizando",
    "c": 4
  },
  {
    "en": "contextualize",
    "es": "contextualizar",
    "c": 4
  },
  {
    "en": "contextualized",
    "es": "contextualizado",
    "c": 4
  },
  {
    "en": "contextualizing",
    "es": "contextualizando",
    "c": 4
  },
  {
    "en": "contracted",
    "es": "contratado",
    "c": 4
  },
  {
    "en": "contracting",
    "es": "contratando",
    "c": 4
  },
  {
    "en": "contractors",
    "es": "contratistas",
    "c": 4
  },
  {
    "en": "contracts",
    "es": "contratos",
    "c": 4
  },
  {
    "en": "contradict",
    "es": "contradecir",
    "c": 4
  },
  {
    "en": "contradicted",
    "es": "contradicho",
    "c": 4
  },
  {
    "en": "contradicting",
    "es": "contradiciendo",
    "c": 4
  },
  {
    "en": "contradictions",
    "es": "contradicciones",
    "c": 4
  },
  {
    "en": "contradictory",
    "es": "contradictorio",
    "c": 4
  },
  {
    "en": "contradicts",
    "es": "contradice",
    "c": 4
  },
  {
    "en": "contrarily",
    "es": "contrariamente",
    "c": 4
  },
  {
    "en": "contrast",
    "es": "contraste",
    "c": 4
  },
  {
    "en": "contrasted",
    "es": "contrastado",
    "c": 4
  },
  {
    "en": "contrasting",
    "es": "contrastando",
    "c": 4
  },
  {
    "en": "contrastive",
    "es": "contrastivo",
    "c": 4
  },
  {
    "en": "contrasts",
    "es": "contrastes",
    "c": 4
  },
  {
    "en": "contribute",
    "es": "contribuir",
    "c": 4
  },
  {
    "en": "contributed",
    "es": "contribuido",
    "c": 4
  },
  {
    "en": "contributes",
    "es": "contribuye",
    "c": 4
  },
  {
    "en": "contributing",
    "es": "contribuyendo",
    "c": 4
  },
  {
    "en": "contributions",
    "es": "contribuciones",
    "c": 4
  },
  {
    "en": "contributors",
    "es": "colaboradores",
    "c": 4
  },
  {
    "en": "controversially",
    "es": "polémicamente",
    "c": 4
  },
  {
    "en": "controversies",
    "es": "controversias",
    "c": 4
  },
  {
    "en": "convene",
    "es": "convocar",
    "c": 4
  },
  {
    "en": "convened",
    "es": "convocado",
    "c": 4
  },
  {
    "en": "convenes",
    "es": "convoca",
    "c": 4
  },
  {
    "en": "convening",
    "es": "convocando",
    "c": 4
  },
  {
    "en": "conventionally",
    "es": "convencionalmente",
    "c": 4
  },
  {
    "en": "conventions",
    "es": "convenciones",
    "c": 4
  },
  {
    "en": "conversions",
    "es": "conversiones",
    "c": 4
  },
  {
    "en": "convert",
    "es": "convertir",
    "c": 4
  },
  {
    "en": "converted",
    "es": "convertido",
    "c": 4
  },
  {
    "en": "convertible",
    "es": "convertible",
    "c": 4
  },
  {
    "en": "converting",
    "es": "convirtiendo",
    "c": 4
  },
  {
    "en": "converts",
    "es": "convierte",
    "c": 4
  },
  {
    "en": "convinces",
    "es": "convence",
    "c": 4
  },
  {
    "en": "convincingly",
    "es": "convincentemente",
    "c": 4
  },
  {
    "en": "co-operate",
    "es": "cooperar",
    "c": 4
  },
  {
    "en": "cooperated",
    "es": "cooperado",
    "c": 4
  },
  {
    "en": "co-operated",
    "es": "cooperado",
    "c": 4
  },
  {
    "en": "cooperates",
    "es": "coopera",
    "c": 4
  },
  {
    "en": "co-operates",
    "es": "coopera",
    "c": 4
  },
  {
    "en": "cooperating",
    "es": "cooperando",
    "c": 4
  },
  {
    "en": "cooperation",
    "es": "cooperación",
    "c": 4
  },
  {
    "en": "co-operation",
    "es": "cooperación",
    "c": 4
  },
  {
    "en": "co-operative",
    "es": "cooperativo",
    "c": 4
  },
  {
    "en": "cooperatively",
    "es": "cooperativamente",
    "c": 4
  },
  {
    "en": "co-operatively",
    "es": "cooperativamente",
    "c": 4
  },
  {
    "en": "co-ordinate",
    "es": "coordinar",
    "c": 4
  },
  {
    "en": "coordinated",
    "es": "coordinado",
    "c": 4
  },
  {
    "en": "co-ordinated",
    "es": "coordinado",
    "c": 4
  },
  {
    "en": "coordinates",
    "es": "coordina",
    "c": 4
  },
  {
    "en": "co-ordinates",
    "es": "coordina",
    "c": 4
  },
  {
    "en": "coordinating",
    "es": "coordinando",
    "c": 4
  },
  {
    "en": "co-ordinating",
    "es": "coordinando",
    "c": 4
  },
  {
    "en": "co-ordination",
    "es": "coordinación",
    "c": 4
  },
  {
    "en": "co-ordinator",
    "es": "coordinador",
    "c": 4
  },
  {
    "en": "coordinators",
    "es": "coordinadores",
    "c": 4
  },
  {
    "en": "co-ordinators",
    "es": "coordinadores",
    "c": 4
  },
  {
    "en": "core",
    "es": "núcleo",
    "c": 4
  },
  {
    "en": "cored",
    "es": "extraído el núcleo",
    "c": 4
  },
  {
    "en": "cores",
    "es": "núcleos",
    "c": 4
  },
  {
    "en": "coring",
    "es": "extrayendo el núcleo",
    "c": 4
  },
  {
    "en": "corporate",
    "es": "corporativo",
    "c": 4
  },
  {
    "en": "corporates",
    "es": "corporaciones",
    "c": 4
  },
  {
    "en": "corporations",
    "es": "corporaciones",
    "c": 4
  },
  {
    "en": "corresponded",
    "es": "correspondido",
    "c": 4
  },
  {
    "en": "correspondingly",
    "es": "correspondientemente",
    "c": 4
  },
  {
    "en": "corresponds",
    "es": "corresponde",
    "c": 4
  },
  {
    "en": "couple",
    "es": "par",
    "c": 4
  },
  {
    "en": "coupled",
    "es": "acoplado",
    "c": 4
  },
  {
    "en": "couples",
    "es": "pares",
    "c": 4
  },
  {
    "en": "coupling",
    "es": "acoplando",
    "c": 4
  },
  {
    "en": "create",
    "es": "crear",
    "c": 4
  },
  {
    "en": "created",
    "es": "creado",
    "c": 4
  },
  {
    "en": "creates",
    "es": "crea",
    "c": 4
  },
  {
    "en": "creating",
    "es": "creando",
    "c": 4
  },
  {
    "en": "creations",
    "es": "creaciones",
    "c": 4
  },
  {
    "en": "creators",
    "es": "creadores",
    "c": 4
  },
  {
    "en": "credit",
    "es": "crédito",
    "c": 4
  },
  {
    "en": "credited",
    "es": "acreditado",
    "c": 4
  },
  {
    "en": "crediting",
    "es": "acreditando",
    "c": 4
  },
  {
    "en": "creditor",
    "es": "acreedor",
    "c": 4
  },
  {
    "en": "creditors",
    "es": "acreedores",
    "c": 4
  },
  {
    "en": "credits",
    "es": "créditos",
    "c": 4
  },
  {
    "en": "criteria",
    "es": "criterios",
    "c": 4
  },
  {
    "en": "criterion",
    "es": "criterio",
    "c": 4
  },
  {
    "en": "crucially",
    "es": "crucialmente",
    "c": 4
  },
  {
    "en": "cultural",
    "es": "cultural",
    "c": 4
  },
  {
    "en": "culturally",
    "es": "culturalmente",
    "c": 4
  },
  {
    "en": "culture",
    "es": "cultura",
    "c": 4
  },
  {
    "en": "cultured",
    "es": "cultivado",
    "c": 4
  },
  {
    "en": "cultures",
    "es": "culturas",
    "c": 4
  },
  {
    "en": "currencies",
    "es": "monedas",
    "c": 4
  },
  {
    "en": "currency",
    "es": "moneda",
    "c": 4
  },
  {
    "en": "cycled",
    "es": "ciclo completado",
    "c": 4
  },
  {
    "en": "cycles",
    "es": "ciclos",
    "c": 4
  },
  {
    "en": "cyclic",
    "es": "cíclico",
    "c": 4
  },
  {
    "en": "cyclical",
    "es": "cíclico",
    "c": 4
  },
  {
    "en": "data",
    "es": "datos",
    "c": 4
  },
  {
    "en": "debatable",
    "es": "debatible",
    "c": 4
  },
  {
    "en": "debates",
    "es": "debates",
    "c": 4
  },
  {
    "en": "debating",
    "es": "debatiendo",
    "c": 4
  },
  {
    "en": "decade",
    "es": "década",
    "c": 4
  },
  {
    "en": "decades",
    "es": "décadas",
    "c": 4
  },
  {
    "en": "declined",
    "es": "declinado",
    "c": 4
  },
  {
    "en": "declines",
    "es": "declina",
    "c": 4
  },
  {
    "en": "declining",
    "es": "declinando",
    "c": 4
  },
  {
    "en": "deduce",
    "es": "deducir",
    "c": 4
  },
  {
    "en": "deduced",
    "es": "deducido",
    "c": 4
  },
  {
    "en": "deduces",
    "es": "deduce",
    "c": 4
  },
  {
    "en": "deducing",
    "es": "deduciendo",
    "c": 4
  },
  {
    "en": "deduction",
    "es": "deducción",
    "c": 4
  },
  {
    "en": "deductions",
    "es": "deducciones",
    "c": 4
  },
  {
    "en": "definable",
    "es": "definible",
    "c": 4
  },
  {
    "en": "define",
    "es": "definir",
    "c": 4
  },
  {
    "en": "defined",
    "es": "definido",
    "c": 4
  },
  {
    "en": "defines",
    "es": "define",
    "c": 4
  },
  {
    "en": "defining",
    "es": "definiendo",
    "c": 4
  },
  {
    "en": "definite",
    "es": "definitivo",
    "c": 4
  },
  {
    "en": "definitely",
    "es": "definitivamente",
    "c": 4
  },
  {
    "en": "definition",
    "es": "definición",
    "c": 4
  },
  {
    "en": "definitions",
    "es": "definiciones",
    "c": 4
  },
  {
    "en": "definitive",
    "es": "definitivo",
    "c": 4
  },
  {
    "en": "demonstrable",
    "es": "demostrable",
    "c": 4
  },
  {
    "en": "demonstrably",
    "es": "demostrablemente",
    "c": 4
  },
  {
    "en": "demonstrate",
    "es": "demostrar",
    "c": 4
  },
  {
    "en": "demonstrated",
    "es": "demostrado",
    "c": 4
  },
  {
    "en": "demonstrates",
    "es": "demuestra",
    "c": 4
  },
  {
    "en": "demonstrating",
    "es": "demostrando",
    "c": 4
  },
  {
    "en": "demonstrations",
    "es": "demostraciones",
    "c": 4
  },
  {
    "en": "demonstrative",
    "es": "demostrativo",
    "c": 4
  },
  {
    "en": "demonstratively",
    "es": "demostrativamente",
    "c": 4
  },
  {
    "en": "demonstrator",
    "es": "manifestante",
    "c": 4
  },
  {
    "en": "demonstrators",
    "es": "manifestantes",
    "c": 4
  },
  {
    "en": "deniable",
    "es": "negable",
    "c": 4
  },
  {
    "en": "denials",
    "es": "negaciones",
    "c": 4
  },
  {
    "en": "denied",
    "es": "negado",
    "c": 4
  },
  {
    "en": "denies",
    "es": "niega",
    "c": 4
  },
  {
    "en": "denotation",
    "es": "denotación",
    "c": 4
  },
  {
    "en": "denotations",
    "es": "denotaciones",
    "c": 4
  },
  {
    "en": "denote",
    "es": "denotar",
    "c": 4
  },
  {
    "en": "denoted",
    "es": "denotado",
    "c": 4
  },
  {
    "en": "denotes",
    "es": "denota",
    "c": 4
  },
  {
    "en": "denoting",
    "es": "denotando",
    "c": 4
  },
  {
    "en": "deny",
    "es": "negar",
    "c": 4
  },
  {
    "en": "denying",
    "es": "negando",
    "c": 4
  },
  {
    "en": "depress",
    "es": "deprimir",
    "c": 4
  },
  {
    "en": "depressed",
    "es": "deprimido",
    "c": 4
  },
  {
    "en": "depresses",
    "es": "deprime",
    "c": 4
  },
  {
    "en": "depressing",
    "es": "deprimente",
    "c": 4
  },
  {
    "en": "deregister",
    "es": "dar de baja",
    "c": 4
  },
  {
    "en": "deregistered",
    "es": "dado de baja",
    "c": 4
  },
  {
    "en": "deregistering",
    "es": "dando de baja",
    "c": 4
  },
  {
    "en": "deregisters",
    "es": "da de baja",
    "c": 4
  },
  {
    "en": "deregistration",
    "es": "baja",
    "c": 4
  },
  {
    "en": "deregulated",
    "es": "desregulado",
    "c": 4
  },
  {
    "en": "deregulates",
    "es": "desregula",
    "c": 4
  },
  {
    "en": "deregulating",
    "es": "desregulando",
    "c": 4
  },
  {
    "en": "deregulation",
    "es": "desregulación",
    "c": 4
  },
  {
    "en": "derivation",
    "es": "derivación",
    "c": 4
  },
  {
    "en": "derivations",
    "es": "derivaciones",
    "c": 4
  },
  {
    "en": "derivative",
    "es": "derivado",
    "c": 4
  },
  {
    "en": "derivatives",
    "es": "derivados",
    "c": 4
  },
  {
    "en": "derived",
    "es": "derivado",
    "c": 4
  },
  {
    "en": "derives",
    "es": "deriva",
    "c": 4
  },
  {
    "en": "deriving",
    "es": "derivando",
    "c": 4
  },
  {
    "en": "designer",
    "es": "diseñador",
    "c": 4
  },
  {
    "en": "designers",
    "es": "diseñadores",
    "c": 4
  },
  {
    "en": "designing",
    "es": "diseñando",
    "c": 4
  },
  {
    "en": "designs",
    "es": "diseños",
    "c": 4
  },
  {
    "en": "detectable",
    "es": "detectable",
    "c": 4
  },
  {
    "en": "detecting",
    "es": "detectando",
    "c": 4
  },
  {
    "en": "detective",
    "es": "detective",
    "c": 4
  },
  {
    "en": "detectives",
    "es": "detectives",
    "c": 4
  },
  {
    "en": "detector",
    "es": "detector",
    "c": 4
  },
  {
    "en": "detectors",
    "es": "detectores",
    "c": 4
  },
  {
    "en": "detects",
    "es": "detecta",
    "c": 4
  },
  {
    "en": "deviate",
    "es": "desviarse",
    "c": 4
  },
  {
    "en": "deviated",
    "es": "desviado",
    "c": 4
  },
  {
    "en": "deviates",
    "es": "desvía",
    "c": 4
  },
  {
    "en": "deviating",
    "es": "desviando",
    "c": 4
  },
  {
    "en": "deviation",
    "es": "desviación",
    "c": 4
  },
  {
    "en": "deviations",
    "es": "desviaciones",
    "c": 4
  },
  {
    "en": "device",
    "es": "dispositivo",
    "c": 4
  },
  {
    "en": "devices",
    "es": "dispositivos",
    "c": 4
  },
  {
    "en": "devotedly",
    "es": "devotamente",
    "c": 4
  },
  {
    "en": "devotes",
    "es": "dedica",
    "c": 4
  },
  {
    "en": "devoting",
    "es": "dedicando",
    "c": 4
  },
  {
    "en": "devotion",
    "es": "devoción",
    "c": 4
  },
  {
    "en": "devotions",
    "es": "devociones",
    "c": 4
  },
  {
    "en": "differentiated",
    "es": "diferenciado",
    "c": 4
  },
  {
    "en": "differentiates",
    "es": "diferencia",
    "c": 4
  },
  {
    "en": "differentiating",
    "es": "diferenciando",
    "c": 4
  },
  {
    "en": "differentiation",
    "es": "diferenciación",
    "c": 4
  },
  {
    "en": "dimensional",
    "es": "dimensional",
    "c": 4
  },
  {
    "en": "dimensions",
    "es": "dimensiones",
    "c": 4
  },
  {
    "en": "diminished",
    "es": "disminuido",
    "c": 4
  },
  {
    "en": "diminishes",
    "es": "disminuye",
    "c": 4
  },
  {
    "en": "diminishing",
    "es": "disminuyendo",
    "c": 4
  },
  {
    "en": "diminution",
    "es": "disminución",
    "c": 4
  },
  {
    "en": "discrete",
    "es": "discreto",
    "c": 4
  },
  {
    "en": "discretely",
    "es": "discretamente",
    "c": 4
  },
  {
    "en": "discretionary",
    "es": "discrecional",
    "c": 4
  },
  {
    "en": "discriminate",
    "es": "discriminar",
    "c": 4
  },
  {
    "en": "discriminated",
    "es": "discriminado",
    "c": 4
  },
  {
    "en": "discriminates",
    "es": "discrimina",
    "c": 4
  },
  {
    "en": "discriminating",
    "es": "discriminando",
    "c": 4
  },
  {
    "en": "disestablish",
    "es": "desestablecer",
    "c": 4
  },
  {
    "en": "disestablished",
    "es": "desestablecido",
    "c": 4
  },
  {
    "en": "disestablishes",
    "es": "desestablece",
    "c": 4
  },
  {
    "en": "disestablishing",
    "es": "desestableciendo",
    "c": 4
  },
  {
    "en": "disestablishment",
    "es": "desestablecimiento",
    "c": 4
  },
  {
    "en": "displaced",
    "es": "desplazado",
    "c": 4
  },
  {
    "en": "displacement",
    "es": "desplazamiento",
    "c": 4
  },
  {
    "en": "displaces",
    "es": "desplaza",
    "c": 4
  },
  {
    "en": "displacing",
    "es": "desplazando",
    "c": 4
  },
  {
    "en": "displayed",
    "es": "mostrado",
    "c": 4
  },
  {
    "en": "displaying",
    "es": "mostrando",
    "c": 4
  },
  {
    "en": "disposable",
    "es": "desechable",
    "c": 4
  },
  {
    "en": "disposed",
    "es": "dispuesto",
    "c": 4
  },
  {
    "en": "disposes",
    "es": "dispone",
    "c": 4
  },
  {
    "en": "disposing",
    "es": "disponiendo",
    "c": 4
  },
  {
    "en": "disproportion",
    "es": "desproporción",
    "c": 4
  },
  {
    "en": "disproportionate",
    "es": "desproporcionado",
    "c": 4
  },
  {
    "en": "disproportionately",
    "es": "desproporcionadamente",
    "c": 4
  },
  {
    "en": "dissimilar",
    "es": "diferente",
    "c": 4
  },
  {
    "en": "distinctions",
    "es": "distinciones",
    "c": 4
  },
  {
    "en": "distinctively",
    "es": "distintivamente",
    "c": 4
  },
  {
    "en": "distinctly",
    "es": "claramente",
    "c": 4
  },
  {
    "en": "distorted",
    "es": "distorsionado",
    "c": 4
  },
  {
    "en": "distorting",
    "es": "distorsionando",
    "c": 4
  },
  {
    "en": "distortion",
    "es": "distorsión",
    "c": 4
  },
  {
    "en": "distortions",
    "es": "distorsiones",
    "c": 4
  },
  {
    "en": "distorts",
    "es": "distorsiona",
    "c": 4
  },
  {
    "en": "distributing",
    "es": "distribuyendo",
    "c": 4
  },
  {
    "en": "distribution",
    "es": "distribución",
    "c": 4
  },
  {
    "en": "distributional",
    "es": "distribucional",
    "c": 4
  },
  {
    "en": "distributions",
    "es": "distribuciones",
    "c": 4
  },
  {
    "en": "distributive",
    "es": "distributivo",
    "c": 4
  },
  {
    "en": "distributor",
    "es": "distribuidor",
    "c": 4
  },
  {
    "en": "distributors",
    "es": "distribuidores",
    "c": 4
  },
  {
    "en": "diversely",
    "es": "diversamente",
    "c": 4
  },
  {
    "en": "diversification",
    "es": "diversificación",
    "c": 4
  },
  {
    "en": "diversified",
    "es": "diversificado",
    "c": 4
  },
  {
    "en": "diversifies",
    "es": "diversifica",
    "c": 4
  },
  {
    "en": "diversify",
    "es": "diversificar",
    "c": 4
  },
  {
    "en": "diversifying",
    "es": "diversificando",
    "c": 4
  },
  {
    "en": "document",
    "es": "documento",
    "c": 4
  },
  {
    "en": "documented",
    "es": "documentado",
    "c": 4
  },
  {
    "en": "documenting",
    "es": "documentando",
    "c": 4
  },
  {
    "en": "documents",
    "es": "documentos",
    "c": 4
  },
  {
    "en": "domains",
    "es": "dominios",
    "c": 4
  },
  {
    "en": "domestic",
    "es": "doméstico",
    "c": 4
  },
  {
    "en": "domestically",
    "es": "domésticamente",
    "c": 4
  },
  {
    "en": "domesticate",
    "es": "domesticar",
    "c": 4
  },
  {
    "en": "domesticated",
    "es": "domesticado",
    "c": 4
  },
  {
    "en": "domesticating",
    "es": "domesticando",
    "c": 4
  },
  {
    "en": "domestics",
    "es": "empleados domésticos",
    "c": 4
  },
  {
    "en": "dominate",
    "es": "dominar",
    "c": 4
  },
  {
    "en": "dominated",
    "es": "dominado",
    "c": 4
  },
  {
    "en": "dominates",
    "es": "domina",
    "c": 4
  },
  {
    "en": "dominating",
    "es": "dominando",
    "c": 4
  },
  {
    "en": "domination",
    "es": "dominación",
    "c": 4
  },
  {
    "en": "drafted",
    "es": "redactado",
    "c": 4
  },
  {
    "en": "drafting",
    "es": "redactando",
    "c": 4
  },
  {
    "en": "drafts",
    "es": "borradores",
    "c": 4
  },
  {
    "en": "dramas",
    "es": "dramas",
    "c": 4
  },
  {
    "en": "dramatisation",
    "es": "dramatización",
    "c": 4
  },
  {
    "en": "dramatisations",
    "es": "dramatizaciones",
    "c": 4
  },
  {
    "en": "dramatise",
    "es": "dramatizar",
    "c": 4
  },
  {
    "en": "dramatised",
    "es": "dramatizado",
    "c": 4
  },
  {
    "en": "dramatises",
    "es": "dramatiza",
    "c": 4
  },
  {
    "en": "dramatising",
    "es": "dramatizando",
    "c": 4
  },
  {
    "en": "dramatist",
    "es": "dramaturgo",
    "c": 4
  },
  {
    "en": "dramatists",
    "es": "dramaturgos",
    "c": 4
  },
  {
    "en": "dramatization",
    "es": "dramatización",
    "c": 4
  },
  {
    "en": "dramatizations",
    "es": "dramatizaciones",
    "c": 4
  },
  {
    "en": "dramatize",
    "es": "dramatizar",
    "c": 4
  },
  {
    "en": "dramatized",
    "es": "dramatizado",
    "c": 4
  },
  {
    "en": "dramatizes",
    "es": "dramatiza",
    "c": 4
  },
  {
    "en": "dramatizing",
    "es": "dramatizando",
    "c": 4
  },
  {
    "en": "dynamically",
    "es": "dinámicamente",
    "c": 4
  },
  {
    "en": "dynamics",
    "es": "dinámicas",
    "c": 4
  },
  {
    "en": "economic",
    "es": "económico",
    "c": 4
  },
  {
    "en": "economical",
    "es": "económico",
    "c": 4
  },
  {
    "en": "economically",
    "es": "económicamente",
    "c": 4
  },
  {
    "en": "economies",
    "es": "economías",
    "c": 4
  },
  {
    "en": "economists",
    "es": "economistas",
    "c": 4
  },
  {
    "en": "economy",
    "es": "economía",
    "c": 4
  },
  {
    "en": "edit",
    "es": "editar",
    "c": 4
  },
  {
    "en": "edited",
    "es": "editado",
    "c": 4
  },
  {
    "en": "editing",
    "es": "edición",
    "c": 4
  },
  {
    "en": "edition",
    "es": "edición",
    "c": 4
  },
  {
    "en": "editions",
    "es": "ediciones",
    "c": 4
  },
  {
    "en": "editor",
    "es": "editor",
    "c": 4
  },
  {
    "en": "editorials",
    "es": "editoriales",
    "c": 4
  },
  {
    "en": "editors",
    "es": "editores",
    "c": 4
  },
  {
    "en": "edits",
    "es": "edita",
    "c": 4
  },
  {
    "en": "elements",
    "es": "elementos",
    "c": 4
  },
  {
    "en": "eliminated",
    "es": "eliminado",
    "c": 4
  },
  {
    "en": "eliminates",
    "es": "elimina",
    "c": 4
  },
  {
    "en": "eliminating",
    "es": "eliminando",
    "c": 4
  },
  {
    "en": "elimination",
    "es": "eliminación",
    "c": 4
  },
  {
    "en": "emerge",
    "es": "emerger",
    "c": 4
  },
  {
    "en": "emerged",
    "es": "emergido",
    "c": 4
  },
  {
    "en": "emergent",
    "es": "emergente",
    "c": 4
  },
  {
    "en": "emerges",
    "es": "emerge",
    "c": 4
  },
  {
    "en": "emerging",
    "es": "emergente",
    "c": 4
  },
  {
    "en": "emphasis",
    "es": "énfasis",
    "c": 4
  },
  {
    "en": "emphasise",
    "es": "enfatizar",
    "c": 4
  },
  {
    "en": "emphasised",
    "es": "enfatizado",
    "c": 4
  },
  {
    "en": "emphasising",
    "es": "enfatizando",
    "c": 4
  },
  {
    "en": "emphasize",
    "es": "enfatizar",
    "c": 4
  },
  {
    "en": "emphasized",
    "es": "enfatizado",
    "c": 4
  },
  {
    "en": "emphasizes",
    "es": "enfatiza",
    "c": 4
  },
  {
    "en": "emphasizing",
    "es": "enfatizando",
    "c": 4
  },
  {
    "en": "emphatic",
    "es": "enfático",
    "c": 4
  },
  {
    "en": "emphatically",
    "es": "enfáticamente",
    "c": 4
  },
  {
    "en": "empirically",
    "es": "empíricamente",
    "c": 4
  },
  {
    "en": "empiricism",
    "es": "empirismo",
    "c": 4
  },
  {
    "en": "enabled",
    "es": "habilitado",
    "c": 4
  },
  {
    "en": "enables",
    "es": "habilita",
    "c": 4
  },
  {
    "en": "enabling",
    "es": "habilitando",
    "c": 4
  },
  {
    "en": "encounter",
    "es": "encuentro",
    "c": 4
  },
  {
    "en": "encountered",
    "es": "encontrado",
    "c": 4
  },
  {
    "en": "encountering",
    "es": "encontrando",
    "c": 4
  },
  {
    "en": "encounters",
    "es": "encuentros",
    "c": 4
  },
  {
    "en": "energetic",
    "es": "energético",
    "c": 4
  },
  {
    "en": "energetically",
    "es": "energéticamente",
    "c": 4
  },
  {
    "en": "energies",
    "es": "energías",
    "c": 4
  },
  {
    "en": "energy",
    "es": "energía",
    "c": 4
  },
  {
    "en": "enhance",
    "es": "mejorar",
    "c": 4
  },
  {
    "en": "enhanced",
    "es": "mejorado",
    "c": 4
  },
  {
    "en": "enhancement",
    "es": "mejora",
    "c": 4
  },
  {
    "en": "enhances",
    "es": "mejora",
    "c": 4
  },
  {
    "en": "enhancing",
    "es": "mejorando",
    "c": 4
  },
  {
    "en": "enormity",
    "es": "enormidad",
    "c": 4
  },
  {
    "en": "enormously",
    "es": "enormemente",
    "c": 4
  },
  {
    "en": "ensure",
    "es": "asegurar",
    "c": 4
  },
  {
    "en": "ensured",
    "es": "asegurado",
    "c": 4
  },
  {
    "en": "ensures",
    "es": "asegura",
    "c": 4
  },
  {
    "en": "ensuring",
    "es": "asegurando",
    "c": 4
  },
  {
    "en": "entities",
    "es": "entidades",
    "c": 4
  },
  {
    "en": "environment",
    "es": "medio ambiente",
    "c": 4
  },
  {
    "en": "environmentalist",
    "es": "ambientalista",
    "c": 4
  },
  {
    "en": "environmentalists",
    "es": "ambientalistas",
    "c": 4
  },
  {
    "en": "environmentally",
    "es": "ambientalmente",
    "c": 4
  },
  {
    "en": "environments",
    "es": "entornos",
    "c": 4
  },
  {
    "en": "equate",
    "es": "equiparar",
    "c": 4
  },
  {
    "en": "equated",
    "es": "equiparado",
    "c": 4
  },
  {
    "en": "equates",
    "es": "equipara",
    "c": 4
  },
  {
    "en": "equating",
    "es": "equiparando",
    "c": 4
  },
  {
    "en": "equations",
    "es": "ecuaciones",
    "c": 4
  },
  {
    "en": "equipped",
    "es": "equipado",
    "c": 4
  },
  {
    "en": "equipping",
    "es": "equipando",
    "c": 4
  },
  {
    "en": "equips",
    "es": "equipa",
    "c": 4
  },
  {
    "en": "equivalence",
    "es": "equivalencia",
    "c": 4
  },
  {
    "en": "erode",
    "es": "erodir",
    "c": 4
  },
  {
    "en": "eroded",
    "es": "erodido",
    "c": 4
  },
  {
    "en": "erodes",
    "es": "erode",
    "c": 4
  },
  {
    "en": "eroding",
    "es": "erodiendo",
    "c": 4
  },
  {
    "en": "erosion",
    "es": "erosión",
    "c": 4
  },
  {
    "en": "erroneous",
    "es": "erróneo",
    "c": 4
  },
  {
    "en": "erroneously",
    "es": "erróneamente",
    "c": 4
  },
  {
    "en": "errors",
    "es": "errores",
    "c": 4
  },
  {
    "en": "establishes",
    "es": "establece",
    "c": 4
  },
  {
    "en": "establishing",
    "es": "estableciendo",
    "c": 4
  },
  {
    "en": "establishments",
    "es": "establecimientos",
    "c": 4
  },
  {
    "en": "estates",
    "es": "propiedades",
    "c": 4
  },
  {
    "en": "estimated",
    "es": "estimado",
    "c": 4
  },
  {
    "en": "estimates",
    "es": "estimaciones",
    "c": 4
  },
  {
    "en": "estimating",
    "es": "estimando",
    "c": 4
  },
  {
    "en": "estimations",
    "es": "estimaciones",
    "c": 4
  },
  {
    "en": "ethical",
    "es": "ético",
    "c": 4
  },
  {
    "en": "ethically",
    "es": "éticamente",
    "c": 4
  },
  {
    "en": "ethics",
    "es": "ética",
    "c": 4
  },
  {
    "en": "ethnicity",
    "es": "etnicidad",
    "c": 4
  },
  {
    "en": "evaluates",
    "es": "evalúa",
    "c": 4
  },
  {
    "en": "evaluating",
    "es": "evaluando",
    "c": 4
  },
  {
    "en": "evaluations",
    "es": "evaluaciones",
    "c": 4
  },
  {
    "en": "evaluative",
    "es": "evaluativo",
    "c": 4
  },
  {
    "en": "eventual",
    "es": "eventual",
    "c": 4
  },
  {
    "en": "eventuality",
    "es": "eventualidad",
    "c": 4
  },
  {
    "en": "evidence",
    "es": "evidencia",
    "c": 4
  },
  {
    "en": "evidenced",
    "es": "evidenciado",
    "c": 4
  },
  {
    "en": "evidential",
    "es": "evidencial",
    "c": 4
  },
  {
    "en": "evidently",
    "es": "evidentemente",
    "c": 4
  },
  {
    "en": "evolutionist",
    "es": "evolucionista",
    "c": 4
  },
  {
    "en": "evolutionists",
    "es": "evolucionistas",
    "c": 4
  },
  {
    "en": "evolved",
    "es": "evolucionado",
    "c": 4
  },
  {
    "en": "evolves",
    "es": "evoluciona",
    "c": 4
  },
  {
    "en": "evolving",
    "es": "evolucionando",
    "c": 4
  },
  {
    "en": "exceeded",
    "es": "excedido",
    "c": 4
  },
  {
    "en": "exceeding",
    "es": "excediendo",
    "c": 4
  },
  {
    "en": "exceeds",
    "es": "excede",
    "c": 4
  },
  {
    "en": "excluded",
    "es": "excluido",
    "c": 4
  },
  {
    "en": "excludes",
    "es": "excluye",
    "c": 4
  },
  {
    "en": "excluding",
    "es": "excluyendo",
    "c": 4
  },
  {
    "en": "exclusionary",
    "es": "excluyente",
    "c": 4
  },
  {
    "en": "exclusionist",
    "es": "exclucionista",
    "c": 4
  },
  {
    "en": "exclusions",
    "es": "exclusiones",
    "c": 4
  },
  {
    "en": "exhibit",
    "es": "exhibir",
    "c": 4
  },
  {
    "en": "exhibited",
    "es": "exhibido",
    "c": 4
  },
  {
    "en": "exhibiting",
    "es": "exhibiendo",
    "c": 4
  },
  {
    "en": "exhibitions",
    "es": "exhibiciones",
    "c": 4
  },
  {
    "en": "exhibits",
    "es": "exhibe",
    "c": 4
  },
  {
    "en": "expanding",
    "es": "expandiendo",
    "c": 4
  },
  {
    "en": "expands",
    "es": "expande",
    "c": 4
  },
  {
    "en": "expansionism",
    "es": "expansionismo",
    "c": 4
  },
  {
    "en": "expansive",
    "es": "expansivo",
    "c": 4
  },
  {
    "en": "experts",
    "es": "expertos",
    "c": 4
  },
  {
    "en": "exploited",
    "es": "explotado",
    "c": 4
  },
  {
    "en": "exploiting",
    "es": "explotando",
    "c": 4
  },
  {
    "en": "exporter",
    "es": "exportador",
    "c": 4
  },
  {
    "en": "exporters",
    "es": "exportadores",
    "c": 4
  },
  {
    "en": "exporting",
    "es": "exportando",
    "c": 4
  },
  {
    "en": "exports",
    "es": "exportaciones",
    "c": 4
  },
  {
    "en": "expose",
    "es": "exponer",
    "c": 4
  },
  {
    "en": "exposed",
    "es": "expuesto",
    "c": 4
  },
  {
    "en": "exposes",
    "es": "expone",
    "c": 4
  },
  {
    "en": "exposing",
    "es": "exponiendo",
    "c": 4
  },
  {
    "en": "exposures",
    "es": "exposiciones",
    "c": 4
  },
  {
    "en": "external",
    "es": "externo",
    "c": 4
  },
  {
    "en": "externalisation",
    "es": "externalización",
    "c": 4
  },
  {
    "en": "externalise",
    "es": "externalizar",
    "c": 4
  },
  {
    "en": "externalised",
    "es": "externalizado",
    "c": 4
  },
  {
    "en": "externalises",
    "es": "externaliza",
    "c": 4
  },
  {
    "en": "externalising",
    "es": "externalizando",
    "c": 4
  },
  {
    "en": "externality",
    "es": "externalidad",
    "c": 4
  },
  {
    "en": "externalization",
    "es": "externalización",
    "c": 4
  },
  {
    "en": "externalize",
    "es": "externalizar",
    "c": 4
  },
  {
    "en": "externalized",
    "es": "externalizado",
    "c": 4
  },
  {
    "en": "externalizes",
    "es": "externaliza",
    "c": 4
  },
  {
    "en": "externalizing",
    "es": "externalizando",
    "c": 4
  },
  {
    "en": "externally",
    "es": "externamente",
    "c": 4
  },
  {
    "en": "extracted",
    "es": "extraído",
    "c": 4
  },
  {
    "en": "extracting",
    "es": "extrayendo",
    "c": 4
  },
  {
    "en": "extraction",
    "es": "extracción",
    "c": 4
  },
  {
    "en": "extracts",
    "es": "extractos",
    "c": 4
  },
  {
    "en": "facilitated",
    "es": "facilitado",
    "c": 4
  },
  {
    "en": "facilitates",
    "es": "facilita",
    "c": 4
  },
  {
    "en": "facilitating",
    "es": "facilitando",
    "c": 4
  },
  {
    "en": "facilitation",
    "es": "facilitación",
    "c": 4
  },
  {
    "en": "facilitator",
    "es": "facilitador",
    "c": 4
  },
  {
    "en": "facilitators",
    "es": "facilitadores",
    "c": 4
  },
  {
    "en": "facilities",
    "es": "instalaciones",
    "c": 4
  },
  {
    "en": "factored",
    "es": "factorizado",
    "c": 4
  },
  {
    "en": "factoring",
    "es": "factorizando",
    "c": 4
  },
  {
    "en": "factors",
    "es": "factores",
    "c": 4
  },
  {
    "en": "feature",
    "es": "característica",
    "c": 4
  },
  {
    "en": "featured",
    "es": "presentado",
    "c": 4
  },
  {
    "en": "features",
    "es": "características",
    "c": 4
  },
  {
    "en": "featuring",
    "es": "presentando",
    "c": 4
  },
  {
    "en": "federal",
    "es": "federal",
    "c": 4
  },
  {
    "en": "federation",
    "es": "federación",
    "c": 4
  },
  {
    "en": "federations",
    "es": "federaciones",
    "c": 4
  },
  {
    "en": "files",
    "es": "archivos",
    "c": 4
  },
  {
    "en": "finalise",
    "es": "finalizar",
    "c": 4
  },
  {
    "en": "finalised",
    "es": "finalizado",
    "c": 4
  },
  {
    "en": "finalises",
    "es": "finaliza",
    "c": 4
  },
  {
    "en": "finalising",
    "es": "finalizando",
    "c": 4
  },
  {
    "en": "finality",
    "es": "finalidad",
    "c": 4
  },
  {
    "en": "finalize",
    "es": "finalizar",
    "c": 4
  },
  {
    "en": "finalized",
    "es": "finalizado",
    "c": 4
  },
  {
    "en": "finalizes",
    "es": "finaliza",
    "c": 4
  },
  {
    "en": "finalizing",
    "es": "finalizando",
    "c": 4
  },
  {
    "en": "finally",
    "es": "finalmente",
    "c": 4
  },
  {
    "en": "finals",
    "es": "finales",
    "c": 4
  },
  {
    "en": "finance",
    "es": "finanzas",
    "c": 4
  },
  {
    "en": "financed",
    "es": "financiado",
    "c": 4
  },
  {
    "en": "finances",
    "es": "finanzas",
    "c": 4
  },
  {
    "en": "financially",
    "es": "financieramente",
    "c": 4
  },
  {
    "en": "financier",
    "es": "financiero",
    "c": 4
  },
  {
    "en": "financiers",
    "es": "financieros",
    "c": 4
  },
  {
    "en": "financing",
    "es": "financiación",
    "c": 4
  },
  {
    "en": "finite",
    "es": "finito",
    "c": 4
  },
  {
    "en": "flexible",
    "es": "flexible",
    "c": 4
  },
  {
    "en": "fluctuate",
    "es": "fluctuar",
    "c": 4
  },
  {
    "en": "fluctuated",
    "es": "fluctuado",
    "c": 4
  },
  {
    "en": "fluctuates",
    "es": "fluctúa",
    "c": 4
  },
  {
    "en": "fluctuating",
    "es": "fluctuando",
    "c": 4
  },
  {
    "en": "fluctuation",
    "es": "fluctuación",
    "c": 4
  },
  {
    "en": "fluctuations",
    "es": "fluctuaciones",
    "c": 4
  },
  {
    "en": "focus",
    "es": "enfoque",
    "c": 4
  },
  {
    "en": "focused",
    "es": "enfocado",
    "c": 4
  },
  {
    "en": "focuses",
    "es": "enfoca",
    "c": 4
  },
  {
    "en": "focusing",
    "es": "enfocando",
    "c": 4
  },
  {
    "en": "focussed",
    "es": "enfocado",
    "c": 4
  },
  {
    "en": "focussing",
    "es": "enfocando",
    "c": 4
  },
  {
    "en": "formats",
    "es": "formatos",
    "c": 4
  },
  {
    "en": "formatted",
    "es": "formateado",
    "c": 4
  },
  {
    "en": "formatting",
    "es": "formateo",
    "c": 4
  },
  {
    "en": "formulae",
    "es": "fórmulas",
    "c": 4
  },
  {
    "en": "formulas",
    "es": "fórmulas",
    "c": 4
  },
  {
    "en": "formulated",
    "es": "formulado",
    "c": 4
  },
  {
    "en": "formulating",
    "es": "formulando",
    "c": 4
  },
  {
    "en": "formulation",
    "es": "formulación",
    "c": 4
  },
  {
    "en": "formulations",
    "es": "formulaciones",
    "c": 4
  },
  {
    "en": "foundations",
    "es": "fundaciones",
    "c": 4
  },
  {
    "en": "founded",
    "es": "fundado",
    "c": 4
  },
  {
    "en": "founders",
    "es": "fundadores",
    "c": 4
  },
  {
    "en": "founding",
    "es": "fundación",
    "c": 4
  },
  {
    "en": "frameworks",
    "es": "marcos de trabajo",
    "c": 4
  },
  {
    "en": "function",
    "es": "función",
    "c": 4
  },
  {
    "en": "functionally",
    "es": "funcionalmente",
    "c": 4
  },
  {
    "en": "functioned",
    "es": "funcionado",
    "c": 4
  },
  {
    "en": "functioning",
    "es": "funcionando",
    "c": 4
  },
  {
    "en": "functions",
    "es": "funciones",
    "c": 4
  },
  {
    "en": "fund",
    "es": "fondo",
    "c": 4
  },
  {
    "en": "fundamental",
    "es": "fundamental",
    "c": 4
  },
  {
    "en": "funded",
    "es": "financiado",
    "c": 4
  },
  {
    "en": "funder",
    "es": "financiador",
    "c": 4
  },
  {
    "en": "funders",
    "es": "financiadores",
    "c": 4
  },
  {
    "en": "funding",
    "es": "financiación",
    "c": 4
  },
  {
    "en": "funds",
    "es": "fondos",
    "c": 4
  },
  {
    "en": "genders",
    "es": "géneros",
    "c": 4
  },
  {
    "en": "generates",
    "es": "genera",
    "c": 4
  },
  {
    "en": "generating",
    "es": "generando",
    "c": 4
  },
  {
    "en": "generations",
    "es": "generaciones",
    "c": 4
  },
  {
    "en": "globalisation",
    "es": "globalización",
    "c": 4
  },
  {
    "en": "globally",
    "es": "globalmente",
    "c": 4
  },
  {
    "en": "goals",
    "es": "objetivos",
    "c": 4
  },
  {
    "en": "graded",
    "es": "graduado",
    "c": 4
  },
  {
    "en": "grades",
    "es": "grados",
    "c": 4
  },
  {
    "en": "grading",
    "es": "calificación",
    "c": 4
  },
  {
    "en": "granted",
    "es": "concedido",
    "c": 4
  },
  {
    "en": "granting",
    "es": "concediendo",
    "c": 4
  },
  {
    "en": "grants",
    "es": "subvenciones",
    "c": 4
  },
  {
    "en": "guaranteeing",
    "es": "garantizando",
    "c": 4
  },
  {
    "en": "guarantees",
    "es": "garantías",
    "c": 4
  },
  {
    "en": "guidelines",
    "es": "directrices",
    "c": 4
  },
  {
    "en": "hierarchical",
    "es": "jerárquico",
    "c": 4
  },
  {
    "en": "hierarchies",
    "es": "jerarquías",
    "c": 4
  },
  {
    "en": "highlight",
    "es": "resaltar",
    "c": 4
  },
  {
    "en": "highlighted",
    "es": "resaltado",
    "c": 4
  },
  {
    "en": "highlighting",
    "es": "resaltando",
    "c": 4
  },
  {
    "en": "highlights",
    "es": "resaltes",
    "c": 4
  },
  {
    "en": "hypotheses",
    "es": "hipótesis",
    "c": 4
  },
  {
    "en": "hypothesise",
    "es": "hipotetizar",
    "c": 4
  },
  {
    "en": "hypothesised",
    "es": "hipotetizado",
    "c": 4
  },
  {
    "en": "hypothesises",
    "es": "hipotetiza",
    "c": 4
  },
  {
    "en": "hypothesising",
    "es": "hipotetizando",
    "c": 4
  },
  {
    "en": "hypothesize",
    "es": "hipotetizar",
    "c": 4
  },
  {
    "en": "hypothesized",
    "es": "hipotetizado",
    "c": 4
  },
  {
    "en": "hypothesizes",
    "es": "hipotetiza",
    "c": 4
  },
  {
    "en": "hypothesizing",
    "es": "hipotetizando",
    "c": 4
  },
  {
    "en": "hypothetical",
    "es": "hipotético",
    "c": 4
  },
  {
    "en": "hypothetically",
    "es": "hipotéticamente",
    "c": 4
  },
  {
    "en": "identically",
    "es": "idénticamente",
    "c": 4
  },
  {
    "en": "identifiable",
    "es": "identificable",
    "c": 4
  },
  {
    "en": "identified",
    "es": "identificado",
    "c": 4
  },
  {
    "en": "identifies",
    "es": "identifica",
    "c": 4
  },
  {
    "en": "identify",
    "es": "identificar",
    "c": 4
  },
  {
    "en": "identifying",
    "es": "identificando",
    "c": 4
  },
  {
    "en": "identities",
    "es": "identidades",
    "c": 4
  },
  {
    "en": "ideologically",
    "es": "ideológicamente",
    "c": 4
  },
  {
    "en": "ideologies",
    "es": "ideologías",
    "c": 4
  },
  {
    "en": "ignore",
    "es": "ignorar",
    "c": 4
  },
  {
    "en": "ignored",
    "es": "ignorado",
    "c": 4
  },
  {
    "en": "ignores",
    "es": "ignora",
    "c": 4
  },
  {
    "en": "ignoring",
    "es": "ignorando",
    "c": 4
  },
  {
    "en": "illegal",
    "es": "ilegal",
    "c": 4
  },
  {
    "en": "illegality",
    "es": "ilegalidad",
    "c": 4
  },
  {
    "en": "illegally",
    "es": "ilegalmente",
    "c": 4
  },
  {
    "en": "illogically",
    "es": "ilógicamente",
    "c": 4
  },
  {
    "en": "illustrate",
    "es": "ilustrar",
    "c": 4
  },
  {
    "en": "illustrated",
    "es": "ilustrado",
    "c": 4
  },
  {
    "en": "illustrates",
    "es": "ilustra",
    "c": 4
  },
  {
    "en": "illustrating",
    "es": "ilustrando",
    "c": 4
  },
  {
    "en": "illustration",
    "es": "ilustración",
    "c": 4
  },
  {
    "en": "illustrations",
    "es": "ilustraciones",
    "c": 4
  },
  {
    "en": "illustrative",
    "es": "ilustrativo",
    "c": 4
  },
  {
    "en": "images",
    "es": "imágenes",
    "c": 4
  },
  {
    "en": "immature",
    "es": "inmaduro",
    "c": 4
  },
  {
    "en": "immaturity",
    "es": "inmadurez",
    "c": 4
  },
  {
    "en": "immigrant",
    "es": "inmigrante",
    "c": 4
  },
  {
    "en": "immigrants",
    "es": "inmigrantes",
    "c": 4
  },
  {
    "en": "immigrate",
    "es": "inmigrar",
    "c": 4
  },
  {
    "en": "immigrated",
    "es": "inmigrado",
    "c": 4
  },
  {
    "en": "immigrates",
    "es": "inmigra",
    "c": 4
  },
  {
    "en": "immigrating",
    "es": "inmigrando",
    "c": 4
  },
  {
    "en": "impact",
    "es": "impacto",
    "c": 4
  },
  {
    "en": "impacted",
    "es": "impactado",
    "c": 4
  },
  {
    "en": "impacting",
    "es": "impactando",
    "c": 4
  },
  {
    "en": "impacts",
    "es": "impactos",
    "c": 4
  },
  {
    "en": "implemented",
    "es": "implementado",
    "c": 4
  },
  {
    "en": "implementing",
    "es": "implementando",
    "c": 4
  },
  {
    "en": "implements",
    "es": "implementa",
    "c": 4
  },
  {
    "en": "implicate",
    "es": "implicar",
    "c": 4
  },
  {
    "en": "implicated",
    "es": "implicado",
    "c": 4
  },
  {
    "en": "implicates",
    "es": "implica",
    "c": 4
  },
  {
    "en": "implicating",
    "es": "implicando",
    "c": 4
  },
  {
    "en": "implications",
    "es": "implicaciones",
    "c": 4
  },
  {
    "en": "implicit",
    "es": "implícito",
    "c": 4
  },
  {
    "en": "implicitly",
    "es": "implícitamente",
    "c": 4
  },
  {
    "en": "implied",
    "es": "implícito",
    "c": 4
  },
  {
    "en": "implies",
    "es": "implica",
    "c": 4
  },
  {
    "en": "imply",
    "es": "implicar",
    "c": 4
  },
  {
    "en": "implying",
    "es": "implicando",
    "c": 4
  },
  {
    "en": "impose",
    "es": "imponer",
    "c": 4
  },
  {
    "en": "imposed",
    "es": "impuesto",
    "c": 4
  },
  {
    "en": "imposes",
    "es": "impone",
    "c": 4
  },
  {
    "en": "imposing",
    "es": "imponiendo",
    "c": 4
  },
  {
    "en": "imposition",
    "es": "imposición",
    "c": 4
  },
  {
    "en": "imprecise",
    "es": "impreciso",
    "c": 4
  },
  {
    "en": "inaccessible",
    "es": "inaccesible",
    "c": 4
  },
  {
    "en": "inaccuracies",
    "es": "inexactitudes",
    "c": 4
  },
  {
    "en": "inaccuracy",
    "es": "inexactitud",
    "c": 4
  },
  {
    "en": "inaccurate",
    "es": "inexacto",
    "c": 4
  },
  {
    "en": "inadequacies",
    "es": "inadecuaciones",
    "c": 4
  },
  {
    "en": "inadequacy",
    "es": "inadecuación",
    "c": 4
  },
  {
    "en": "inadequately",
    "es": "inadecuadamente",
    "c": 4
  },
  {
    "en": "inappropriacy",
    "es": "inadecuación",
    "c": 4
  },
  {
    "en": "inappropriately",
    "es": "inapropiadamente",
    "c": 4
  },
  {
    "en": "incapable",
    "es": "incapaz",
    "c": 4
  },
  {
    "en": "incapacitate",
    "es": "incapacitar",
    "c": 4
  },
  {
    "en": "incapacitated",
    "es": "incapacitado",
    "c": 4
  },
  {
    "en": "incentives",
    "es": "incentivos",
    "c": 4
  },
  {
    "en": "incident",
    "es": "incidente",
    "c": 4
  },
  {
    "en": "incidentally",
    "es": "incidentalmente",
    "c": 4
  },
  {
    "en": "incidents",
    "es": "incidentes",
    "c": 4
  },
  {
    "en": "inclination",
    "es": "inclinación",
    "c": 4
  },
  {
    "en": "inclinations",
    "es": "inclinaciones",
    "c": 4
  },
  {
    "en": "incline",
    "es": "inclinarse",
    "c": 4
  },
  {
    "en": "inclines",
    "es": "inclina",
    "c": 4
  },
  {
    "en": "inclining",
    "es": "inclinando",
    "c": 4
  },
  {
    "en": "incoherent",
    "es": "incoherente",
    "c": 4
  },
  {
    "en": "incoherently",
    "es": "incoherentemente",
    "c": 4
  },
  {
    "en": "incomes",
    "es": "ingresos",
    "c": 4
  },
  {
    "en": "incompatibility",
    "es": "incompatibilidad",
    "c": 4
  },
  {
    "en": "incompatible",
    "es": "incompatible",
    "c": 4
  },
  {
    "en": "inconceivable",
    "es": "inconcebible",
    "c": 4
  },
  {
    "en": "inconceivably",
    "es": "inconcebiblemente",
    "c": 4
  },
  {
    "en": "inconclusive",
    "es": "inconcluso",
    "c": 4
  },
  {
    "en": "inconclusively",
    "es": "inconclusivamente",
    "c": 4
  },
  {
    "en": "inconsistencies",
    "es": "inconsistencias",
    "c": 4
  },
  {
    "en": "inconsistency",
    "es": "inconsistencia",
    "c": 4
  },
  {
    "en": "inconsistent",
    "es": "inconsistente",
    "c": 4
  },
  {
    "en": "inconstancy",
    "es": "inconstancia",
    "c": 4
  },
  {
    "en": "inconstantly",
    "es": "inconstantemente",
    "c": 4
  },
  {
    "en": "incorporated",
    "es": "incorporado",
    "c": 4
  },
  {
    "en": "incorporates",
    "es": "incorpora",
    "c": 4
  },
  {
    "en": "incorporating",
    "es": "incorporando",
    "c": 4
  },
  {
    "en": "incorporation",
    "es": "incorporación",
    "c": 4
  },
  {
    "en": "indefinite",
    "es": "indefinido",
    "c": 4
  },
  {
    "en": "indefinitely",
    "es": "indefinidamente",
    "c": 4
  },
  {
    "en": "indexed",
    "es": "indexado",
    "c": 4
  },
  {
    "en": "indexes",
    "es": "índices",
    "c": 4
  },
  {
    "en": "indexing",
    "es": "indexación",
    "c": 4
  },
  {
    "en": "indicates",
    "es": "indica",
    "c": 4
  },
  {
    "en": "indicating",
    "es": "indicando",
    "c": 4
  },
  {
    "en": "indications",
    "es": "indicaciones",
    "c": 4
  },
  {
    "en": "indicative",
    "es": "indicativo",
    "c": 4
  },
  {
    "en": "indicators",
    "es": "indicadores",
    "c": 4
  },
  {
    "en": "indiscrete",
    "es": "indiscreto",
    "c": 4
  },
  {
    "en": "indiscretion",
    "es": "indiscreción",
    "c": 4
  },
  {
    "en": "indistinct",
    "es": "indistinto",
    "c": 4
  },
  {
    "en": "indistinctly",
    "es": "indistintamente",
    "c": 4
  },
  {
    "en": "individualised",
    "es": "individualizado",
    "c": 4
  },
  {
    "en": "individualism",
    "es": "individualismo",
    "c": 4
  },
  {
    "en": "individualist",
    "es": "individualista",
    "c": 4
  },
  {
    "en": "individualistic",
    "es": "individualista",
    "c": 4
  },
  {
    "en": "individualists",
    "es": "individualistas",
    "c": 4
  },
  {
    "en": "individuality",
    "es": "individualidad",
    "c": 4
  },
  {
    "en": "individually",
    "es": "individualmente",
    "c": 4
  },
  {
    "en": "individuals",
    "es": "individuos",
    "c": 4
  },
  {
    "en": "induced",
    "es": "inducido",
    "c": 4
  },
  {
    "en": "induces",
    "es": "induce",
    "c": 4
  },
  {
    "en": "inducing",
    "es": "induciendo",
    "c": 4
  },
  {
    "en": "induction",
    "es": "inducción",
    "c": 4
  },
  {
    "en": "inevitability",
    "es": "inevitabilidad",
    "c": 4
  },
  {
    "en": "inference",
    "es": "inferencia",
    "c": 4
  },
  {
    "en": "inferences",
    "es": "inferencias",
    "c": 4
  },
  {
    "en": "inferred",
    "es": "inferido",
    "c": 4
  },
  {
    "en": "inferring",
    "es": "infiriendo",
    "c": 4
  },
  {
    "en": "infers",
    "es": "infiere",
    "c": 4
  },
  {
    "en": "infinite",
    "es": "infinito",
    "c": 4
  },
  {
    "en": "infinitely",
    "es": "infinitamente",
    "c": 4
  },
  {
    "en": "inflexibility",
    "es": "inflexibilidad",
    "c": 4
  },
  {
    "en": "inflexible",
    "es": "inflexible",
    "c": 4
  },
  {
    "en": "infrastructures",
    "es": "infraestructuras",
    "c": 4
  },
  {
    "en": "inherently",
    "es": "inherentemente",
    "c": 4
  },
  {
    "en": "inhibited",
    "es": "inhibido",
    "c": 4
  },
  {
    "en": "inhibiting",
    "es": "inhibiendo",
    "c": 4
  },
  {
    "en": "inhibition",
    "es": "inhibición",
    "c": 4
  },
  {
    "en": "inhibitions",
    "es": "inhibiciones",
    "c": 4
  },
  {
    "en": "inhibits",
    "es": "inhibe",
    "c": 4
  },
  {
    "en": "initially",
    "es": "inicialmente",
    "c": 4
  },
  {
    "en": "initiated",
    "es": "iniciado",
    "c": 4
  },
  {
    "en": "initiates",
    "es": "inicia",
    "c": 4
  },
  {
    "en": "initiating",
    "es": "iniciando",
    "c": 4
  },
  {
    "en": "initiation",
    "es": "iniciación",
    "c": 4
  },
  {
    "en": "initiations",
    "es": "iniciaciones",
    "c": 4
  },
  {
    "en": "initiative",
    "es": "iniciativa",
    "c": 4
  },
  {
    "en": "initiatives",
    "es": "iniciativas",
    "c": 4
  },
  {
    "en": "initiator",
    "es": "iniciador",
    "c": 4
  },
  {
    "en": "initiators",
    "es": "iniciadores",
    "c": 4
  },
  {
    "en": "injured",
    "es": "herido",
    "c": 4
  },
  {
    "en": "injures",
    "es": "hiere",
    "c": 4
  },
  {
    "en": "injuries",
    "es": "lesiones",
    "c": 4
  },
  {
    "en": "injuring",
    "es": "hiriendo",
    "c": 4
  },
  {
    "en": "innovate",
    "es": "innovar",
    "c": 4
  },
  {
    "en": "innovated",
    "es": "innovado",
    "c": 4
  },
  {
    "en": "innovates",
    "es": "innova",
    "c": 4
  },
  {
    "en": "innovating",
    "es": "innovando",
    "c": 4
  },
  {
    "en": "innovations",
    "es": "innovaciones",
    "c": 4
  },
  {
    "en": "innovator",
    "es": "innovador",
    "c": 4
  },
  {
    "en": "innovators",
    "es": "innovadores",
    "c": 4
  },
  {
    "en": "insecure",
    "es": "inseguro",
    "c": 4
  },
  {
    "en": "insecurities",
    "es": "inseguridades",
    "c": 4
  },
  {
    "en": "insecurity",
    "es": "inseguridad",
    "c": 4
  },
  {
    "en": "inserted",
    "es": "insertado",
    "c": 4
  },
  {
    "en": "inserting",
    "es": "insertando",
    "c": 4
  },
  {
    "en": "inserts",
    "es": "inserciones",
    "c": 4
  },
  {
    "en": "insight",
    "es": "perspicacia",
    "c": 4
  },
  {
    "en": "insightful",
    "es": "perspicaz",
    "c": 4
  },
  {
    "en": "insignificantly",
    "es": "insignificativamente",
    "c": 4
  },
  {
    "en": "inspecting",
    "es": "inspeccionando",
    "c": 4
  },
  {
    "en": "inspections",
    "es": "inspecciones",
    "c": 4
  },
  {
    "en": "inspectors",
    "es": "inspectores",
    "c": 4
  },
  {
    "en": "inspects",
    "es": "inspecciona",
    "c": 4
  },
  {
    "en": "instability",
    "es": "inestabilidad",
    "c": 4
  },
  {
    "en": "instance",
    "es": "instancia",
    "c": 4
  },
  {
    "en": "instances",
    "es": "instancias",
    "c": 4
  },
  {
    "en": "institute",
    "es": "instituto",
    "c": 4
  },
  {
    "en": "instituted",
    "es": "instituido",
    "c": 4
  },
  {
    "en": "institutes",
    "es": "instituye",
    "c": 4
  },
  {
    "en": "instituting",
    "es": "instituyendo",
    "c": 4
  },
  {
    "en": "institution",
    "es": "institución",
    "c": 4
  },
  {
    "en": "institutionalise",
    "es": "institucionalizar",
    "c": 4
  },
  {
    "en": "institutionalised",
    "es": "institucionalizado",
    "c": 4
  },
  {
    "en": "institutionalises",
    "es": "institucionaliza",
    "c": 4
  },
  {
    "en": "institutionalising",
    "es": "institucionalizando",
    "c": 4
  },
  {
    "en": "institutionalized",
    "es": "institucionalizado",
    "c": 4
  },
  {
    "en": "institutionalizes",
    "es": "institucionaliza",
    "c": 4
  },
  {
    "en": "institutionalizing",
    "es": "institucionalizando",
    "c": 4
  },
  {
    "en": "institutionally",
    "es": "institucionalmente",
    "c": 4
  },
  {
    "en": "institutions",
    "es": "instituciones",
    "c": 4
  },
  {
    "en": "instructed",
    "es": "instruido",
    "c": 4
  },
  {
    "en": "instructing",
    "es": "instruyendo",
    "c": 4
  },
  {
    "en": "instruction",
    "es": "instrucción",
    "c": 4
  },
  {
    "en": "instructive",
    "es": "instructivo",
    "c": 4
  },
  {
    "en": "instructor",
    "es": "instructor",
    "c": 4
  },
  {
    "en": "instructors",
    "es": "instructores",
    "c": 4
  },
  {
    "en": "instructs",
    "es": "instruye",
    "c": 4
  },
  {
    "en": "insufficiently",
    "es": "insuficientemente",
    "c": 4
  },
  {
    "en": "integrates",
    "es": "integra",
    "c": 4
  },
  {
    "en": "integrating",
    "es": "integrando",
    "c": 4
  },
  {
    "en": "intelligence",
    "es": "inteligencia",
    "c": 4
  },
  {
    "en": "intelligently",
    "es": "inteligentemente",
    "c": 4
  },
  {
    "en": "intense",
    "es": "intenso",
    "c": 4
  },
  {
    "en": "intensely",
    "es": "intensamente",
    "c": 4
  },
  {
    "en": "intenseness",
    "es": "intensidad",
    "c": 4
  },
  {
    "en": "intensification",
    "es": "intensificación",
    "c": 4
  },
  {
    "en": "intensified",
    "es": "intensificado",
    "c": 4
  },
  {
    "en": "intensifies",
    "es": "intensifica",
    "c": 4
  },
  {
    "en": "intensifying",
    "es": "intensificando",
    "c": 4
  },
  {
    "en": "intension",
    "es": "intención",
    "c": 4
  },
  {
    "en": "intensively",
    "es": "intensivamente",
    "c": 4
  },
  {
    "en": "interacted",
    "es": "interactuado",
    "c": 4
  },
  {
    "en": "interacting",
    "es": "interactuando",
    "c": 4
  },
  {
    "en": "interactions",
    "es": "interacciones",
    "c": 4
  },
  {
    "en": "interactively",
    "es": "interactivamente",
    "c": 4
  },
  {
    "en": "interacts",
    "es": "interactúa",
    "c": 4
  },
  {
    "en": "internal",
    "es": "interno",
    "c": 4
  },
  {
    "en": "internalise",
    "es": "internalizar",
    "c": 4
  },
  {
    "en": "internalised",
    "es": "internalizado",
    "c": 4
  },
  {
    "en": "internalises",
    "es": "internaliza",
    "c": 4
  },
  {
    "en": "internalising",
    "es": "internalizando",
    "c": 4
  },
  {
    "en": "internalize",
    "es": "internalizar",
    "c": 4
  },
  {
    "en": "internalized",
    "es": "internalizado",
    "c": 4
  },
  {
    "en": "internalizes",
    "es": "internaliza",
    "c": 4
  },
  {
    "en": "internalizing",
    "es": "internalizando",
    "c": 4
  },
  {
    "en": "internally",
    "es": "internamente",
    "c": 4
  },
  {
    "en": "interpretations",
    "es": "interpretaciones",
    "c": 4
  },
  {
    "en": "interpretative",
    "es": "interpretativo",
    "c": 4
  },
  {
    "en": "interpreted",
    "es": "interpretado",
    "c": 4
  },
  {
    "en": "interpreting",
    "es": "interpretando",
    "c": 4
  },
  {
    "en": "interpretive",
    "es": "interpretativo",
    "c": 4
  },
  {
    "en": "interprets",
    "es": "interpreta",
    "c": 4
  },
  {
    "en": "intervals",
    "es": "intervalos",
    "c": 4
  },
  {
    "en": "intervened",
    "es": "intervenido",
    "c": 4
  },
  {
    "en": "intervenes",
    "es": "interviene",
    "c": 4
  },
  {
    "en": "intervening",
    "es": "interviniendo",
    "c": 4
  },
  {
    "en": "interventions",
    "es": "intervenciones",
    "c": 4
  },
  {
    "en": "intrinsic",
    "es": "intrínseco",
    "c": 4
  },
  {
    "en": "intrinsically",
    "es": "intrínsecamente",
    "c": 4
  },
  {
    "en": "invalidate",
    "es": "invalidar",
    "c": 4
  },
  {
    "en": "invalidity",
    "es": "invalidez",
    "c": 4
  },
  {
    "en": "invariable",
    "es": "invariable",
    "c": 4
  },
  {
    "en": "invariably",
    "es": "invariablemente",
    "c": 4
  },
  {
    "en": "investigate",
    "es": "investigar",
    "c": 4
  },
  {
    "en": "investigated",
    "es": "investigado",
    "c": 4
  },
  {
    "en": "investigates",
    "es": "investiga",
    "c": 4
  },
  {
    "en": "investigating",
    "es": "investigando",
    "c": 4
  },
  {
    "en": "investigation",
    "es": "investigación",
    "c": 4
  },
  {
    "en": "investigations",
    "es": "investigaciones",
    "c": 4
  },
  {
    "en": "investigative",
    "es": "investigativo",
    "c": 4
  },
  {
    "en": "investigators",
    "es": "investigadores",
    "c": 4
  },
  {
    "en": "investing",
    "es": "invirtiendo",
    "c": 4
  },
  {
    "en": "investment",
    "es": "inversión",
    "c": 4
  },
  {
    "en": "investments",
    "es": "inversiones",
    "c": 4
  },
  {
    "en": "investors",
    "es": "inversores",
    "c": 4
  },
  {
    "en": "invests",
    "es": "invierte",
    "c": 4
  },
  {
    "en": "invisibility",
    "es": "invisibilidad",
    "c": 4
  },
  {
    "en": "invoked",
    "es": "invocado",
    "c": 4
  },
  {
    "en": "invokes",
    "es": "invoca",
    "c": 4
  },
  {
    "en": "invoking",
    "es": "invocando",
    "c": 4
  },
  {
    "en": "involved",
    "es": "involucrado",
    "c": 4
  },
  {
    "en": "involves",
    "es": "involucra",
    "c": 4
  },
  {
    "en": "involving",
    "es": "involucrando",
    "c": 4
  },
  {
    "en": "irrational",
    "es": "irracional",
    "c": 4
  },
  {
    "en": "irrelevance",
    "es": "irrelevancia",
    "c": 4
  },
  {
    "en": "isolates",
    "es": "aisla",
    "c": 4
  },
  {
    "en": "isolating",
    "es": "aislando",
    "c": 4
  },
  {
    "en": "isolationism",
    "es": "aislacionismo",
    "c": 4
  },
  {
    "en": "issued",
    "es": "emitido",
    "c": 4
  },
  {
    "en": "issuing",
    "es": "emitiendo",
    "c": 4
  },
  {
    "en": "itemisation",
    "es": "desglose",
    "c": 4
  },
  {
    "en": "itemise",
    "es": "desglosar",
    "c": 4
  },
  {
    "en": "itemised",
    "es": "desglosado",
    "c": 4
  },
  {
    "en": "itemises",
    "es": "desglosa",
    "c": 4
  },
  {
    "en": "itemising",
    "es": "desglosando",
    "c": 4
  },
  {
    "en": "items",
    "es": "artículos",
    "c": 4
  },
  {
    "en": "jobs",
    "es": "trabajos",
    "c": 4
  },
  {
    "en": "justifiable",
    "es": "justificable",
    "c": 4
  },
  {
    "en": "justifiably",
    "es": "justificadamente",
    "c": 4
  },
  {
    "en": "justifications",
    "es": "justificaciones",
    "c": 4
  },
  {
    "en": "justified",
    "es": "justificado",
    "c": 4
  },
  {
    "en": "justifies",
    "es": "justifica",
    "c": 4
  },
  {
    "en": "justifying",
    "es": "justificando",
    "c": 4
  },
  {
    "en": "label",
    "es": "etiqueta",
    "c": 4
  },
  {
    "en": "labeled",
    "es": "etiquetado",
    "c": 4
  },
  {
    "en": "labeling",
    "es": "etiquetado",
    "c": 4
  },
  {
    "en": "labelled",
    "es": "etiquetado",
    "c": 4
  },
  {
    "en": "labelling",
    "es": "etiquetado",
    "c": 4
  },
  {
    "en": "labels",
    "es": "etiquetas",
    "c": 4
  },
  {
    "en": "labor",
    "es": "trabajo",
    "c": 4
  },
  {
    "en": "labored",
    "es": "trabajado",
    "c": 4
  },
  {
    "en": "labors",
    "es": "trabajos",
    "c": 4
  },
  {
    "en": "labour",
    "es": "trabajo",
    "c": 4
  },
  {
    "en": "laboured",
    "es": "trabajado",
    "c": 4
  },
  {
    "en": "labouring",
    "es": "trabajando",
    "c": 4
  },
  {
    "en": "labours",
    "es": "trabajos",
    "c": 4
  },
  {
    "en": "layer",
    "es": "capa",
    "c": 4
  },
  {
    "en": "layered",
    "es": "en capas",
    "c": 4
  },
  {
    "en": "layering",
    "es": "estratificación",
    "c": 4
  },
  {
    "en": "layers",
    "es": "capas",
    "c": 4
  },
  {
    "en": "lectured",
    "es": "dado una clase",
    "c": 4
  },
  {
    "en": "lecturer",
    "es": "conferenciante",
    "c": 4
  },
  {
    "en": "lecturers",
    "es": "conferenciantes",
    "c": 4
  },
  {
    "en": "lecturing",
    "es": "dando una clase",
    "c": 4
  },
  {
    "en": "legality",
    "es": "legalidad",
    "c": 4
  },
  {
    "en": "legally",
    "es": "legalmente",
    "c": 4
  },
  {
    "en": "legislate",
    "es": "legislar",
    "c": 4
  },
  {
    "en": "legislated",
    "es": "legislado",
    "c": 4
  },
  {
    "en": "legislates",
    "es": "legisla",
    "c": 4
  },
  {
    "en": "legislating",
    "es": "legislando",
    "c": 4
  },
  {
    "en": "legislators",
    "es": "legisladores",
    "c": 4
  },
  {
    "en": "levies",
    "es": "gravámenes",
    "c": 4
  },
  {
    "en": "levy",
    "es": "impuesto",
    "c": 4
  },
  {
    "en": "liberalisation",
    "es": "liberalización",
    "c": 4
  },
  {
    "en": "liberalise",
    "es": "liberalizar",
    "c": 4
  },
  {
    "en": "liberalised",
    "es": "liberalizado",
    "c": 4
  },
  {
    "en": "liberalises",
    "es": "liberaliza",
    "c": 4
  },
  {
    "en": "liberalising",
    "es": "liberalizando",
    "c": 4
  },
  {
    "en": "liberalism",
    "es": "liberalismo",
    "c": 4
  },
  {
    "en": "liberalization",
    "es": "liberalización",
    "c": 4
  },
  {
    "en": "liberalize",
    "es": "liberalizar",
    "c": 4
  },
  {
    "en": "liberalized",
    "es": "liberalizado",
    "c": 4
  },
  {
    "en": "liberalizes",
    "es": "liberaliza",
    "c": 4
  },
  {
    "en": "liberalizing",
    "es": "liberalizando",
    "c": 4
  },
  {
    "en": "liberally",
    "es": "liberalmente",
    "c": 4
  },
  {
    "en": "liberals",
    "es": "liberales",
    "c": 4
  },
  {
    "en": "liberate",
    "es": "liberar",
    "c": 4
  },
  {
    "en": "liberated",
    "es": "liberado",
    "c": 4
  },
  {
    "en": "liberates",
    "es": "libera",
    "c": 4
  },
  {
    "en": "liberating",
    "es": "liberando",
    "c": 4
  },
  {
    "en": "liberations",
    "es": "liberaciones",
    "c": 4
  },
  {
    "en": "liberator",
    "es": "libertador",
    "c": 4
  },
  {
    "en": "liberators",
    "es": "libertadores",
    "c": 4
  },
  {
    "en": "licences",
    "es": "licencias",
    "c": 4
  },
  {
    "en": "license",
    "es": "licencia",
    "c": 4
  },
  {
    "en": "licensed",
    "es": "con licencia",
    "c": 4
  },
  {
    "en": "licenses",
    "es": "licencias",
    "c": 4
  },
  {
    "en": "licensing",
    "es": "concesión de licencias",
    "c": 4
  },
  {
    "en": "linkage",
    "es": "vinculación",
    "c": 4
  },
  {
    "en": "linkages",
    "es": "vínculos",
    "c": 4
  },
  {
    "en": "linked",
    "es": "vinculado",
    "c": 4
  },
  {
    "en": "linking",
    "es": "vinculando",
    "c": 4
  },
  {
    "en": "links",
    "es": "enlaces",
    "c": 4
  },
  {
    "en": "locate",
    "es": "ubicar",
    "c": 4
  },
  {
    "en": "located",
    "es": "ubicado",
    "c": 4
  },
  {
    "en": "locating",
    "es": "ubicando",
    "c": 4
  },
  {
    "en": "locations",
    "es": "ubicaciones",
    "c": 4
  },
  {
    "en": "logical",
    "es": "lógico",
    "c": 4
  },
  {
    "en": "logically",
    "es": "lógicamente",
    "c": 4
  },
  {
    "en": "logician",
    "es": "lógico",
    "c": 4
  },
  {
    "en": "logicians",
    "es": "lógicos",
    "c": 4
  },
  {
    "en": "maintaining",
    "es": "manteniendo",
    "c": 4
  },
  {
    "en": "maintains",
    "es": "mantiene",
    "c": 4
  },
  {
    "en": "major",
    "es": "mayor",
    "c": 4
  },
  {
    "en": "majorities",
    "es": "mayorías",
    "c": 4
  },
  {
    "en": "manipulated",
    "es": "manipulado",
    "c": 4
  },
  {
    "en": "manipulates",
    "es": "manipula",
    "c": 4
  },
  {
    "en": "manipulating",
    "es": "manipulando",
    "c": 4
  },
  {
    "en": "manipulations",
    "es": "manipulaciones",
    "c": 4
  },
  {
    "en": "manipulative",
    "es": "manipulador",
    "c": 4
  },
  {
    "en": "manually",
    "es": "manualmente",
    "c": 4
  },
  {
    "en": "manuals",
    "es": "manuales",
    "c": 4
  },
  {
    "en": "marginally",
    "es": "marginalmente",
    "c": 4
  },
  {
    "en": "margins",
    "es": "márgenes",
    "c": 4
  },
  {
    "en": "maturation",
    "es": "maduración",
    "c": 4
  },
  {
    "en": "maturational",
    "es": "madurativo",
    "c": 4
  },
  {
    "en": "matured",
    "es": "madurado",
    "c": 4
  },
  {
    "en": "matures",
    "es": "madura",
    "c": 4
  },
  {
    "en": "maturing",
    "es": "madurando",
    "c": 4
  },
  {
    "en": "maturity",
    "es": "madurez",
    "c": 4
  },
  {
    "en": "max",
    "es": "máximo",
    "c": 4
  },
  {
    "en": "maximisation",
    "es": "maximización",
    "c": 4
  },
  {
    "en": "maximise",
    "es": "maximizar",
    "c": 4
  },
  {
    "en": "maximised",
    "es": "maximizado",
    "c": 4
  },
  {
    "en": "maximises",
    "es": "maximiza",
    "c": 4
  },
  {
    "en": "maximising",
    "es": "maximizando",
    "c": 4
  },
  {
    "en": "maximization",
    "es": "maximización",
    "c": 4
  },
  {
    "en": "maximized",
    "es": "maximizado",
    "c": 4
  },
  {
    "en": "maximizes",
    "es": "maximiza",
    "c": 4
  },
  {
    "en": "maximizing",
    "es": "maximizando",
    "c": 4
  },
  {
    "en": "mechanisms",
    "es": "mecanismos",
    "c": 4
  },
  {
    "en": "media",
    "es": "medios",
    "c": 4
  },
  {
    "en": "mediated",
    "es": "mediado",
    "c": 4
  },
  {
    "en": "mediates",
    "es": "media",
    "c": 4
  },
  {
    "en": "mediating",
    "es": "mediando",
    "c": 4
  },
  {
    "en": "mediation",
    "es": "mediación",
    "c": 4
  },
  {
    "en": "medical",
    "es": "médico",
    "c": 4
  },
  {
    "en": "medically",
    "es": "médicamente",
    "c": 4
  },
  {
    "en": "mental",
    "es": "mental",
    "c": 4
  },
  {
    "en": "mentality",
    "es": "mentalidad",
    "c": 4
  },
  {
    "en": "mentally",
    "es": "mentalmente",
    "c": 4
  },
  {
    "en": "methodical",
    "es": "metódico",
    "c": 4
  },
  {
    "en": "methodological",
    "es": "metodológico",
    "c": 4
  },
  {
    "en": "methodologies",
    "es": "metodologías",
    "c": 4
  },
  {
    "en": "methods",
    "es": "métodos",
    "c": 4
  },
  {
    "en": "migrant",
    "es": "migrante",
    "c": 4
  },
  {
    "en": "migrants",
    "es": "migrantes",
    "c": 4
  },
  {
    "en": "migrate",
    "es": "migrar",
    "c": 4
  },
  {
    "en": "migrated",
    "es": "migrado",
    "c": 4
  },
  {
    "en": "migrates",
    "es": "migra",
    "c": 4
  },
  {
    "en": "migrating",
    "es": "migrando",
    "c": 4
  },
  {
    "en": "migrations",
    "es": "migraciones",
    "c": 4
  },
  {
    "en": "migratory",
    "es": "migratorio",
    "c": 4
  },
  {
    "en": "military",
    "es": "militar",
    "c": 4
  },
  {
    "en": "minimalisation",
    "es": "minimalización",
    "c": 4
  },
  {
    "en": "minimalise",
    "es": "minimalizar",
    "c": 4
  },
  {
    "en": "minimalised",
    "es": "minimalizado",
    "c": 4
  },
  {
    "en": "minimalises",
    "es": "minimaliza",
    "c": 4
  },
  {
    "en": "minimalising",
    "es": "minimalizando",
    "c": 4
  },
  {
    "en": "minimalist",
    "es": "minimalista",
    "c": 4
  },
  {
    "en": "minimalistic",
    "es": "minimalista",
    "c": 4
  },
  {
    "en": "minimalists",
    "es": "minimalistas",
    "c": 4
  },
  {
    "en": "minimalization",
    "es": "minimalización",
    "c": 4
  },
  {
    "en": "minimalize",
    "es": "minimalizar",
    "c": 4
  },
  {
    "en": "minimalized",
    "es": "minimalizado",
    "c": 4
  },
  {
    "en": "minimalizes",
    "es": "minimaliza",
    "c": 4
  },
  {
    "en": "minimalizing",
    "es": "minimalizando",
    "c": 4
  },
  {
    "en": "minimally",
    "es": "mínimamente",
    "c": 4
  },
  {
    "en": "minimise",
    "es": "minimizar",
    "c": 4
  },
  {
    "en": "minimised",
    "es": "minimizado",
    "c": 4
  },
  {
    "en": "minimises",
    "es": "minimiza",
    "c": 4
  },
  {
    "en": "minimising",
    "es": "minimizando",
    "c": 4
  },
  {
    "en": "minimized",
    "es": "minimizado",
    "c": 4
  },
  {
    "en": "minimizes",
    "es": "minimiza",
    "c": 4
  },
  {
    "en": "minimizing",
    "es": "minimizando",
    "c": 4
  },
  {
    "en": "ministerial",
    "es": "ministerial",
    "c": 4
  },
  {
    "en": "ministries",
    "es": "ministerios",
    "c": 4
  },
  {
    "en": "minor",
    "es": "menor",
    "c": 4
  },
  {
    "en": "minorities",
    "es": "minorías",
    "c": 4
  },
  {
    "en": "minority",
    "es": "minoría",
    "c": 4
  },
  {
    "en": "minors",
    "es": "menores",
    "c": 4
  },
  {
    "en": "misinterpret",
    "es": "malinterpretar",
    "c": 4
  },
  {
    "en": "misinterpretation",
    "es": "malinterpretación",
    "c": 4
  },
  {
    "en": "misinterpretations",
    "es": "malinterpretaciones",
    "c": 4
  },
  {
    "en": "misinterpreted",
    "es": "malinterpretado",
    "c": 4
  },
  {
    "en": "misinterpreting",
    "es": "malinterpretando",
    "c": 4
  },
  {
    "en": "misinterprets",
    "es": "malinterpreta",
    "c": 4
  },
  {
    "en": "modes",
    "es": "modos",
    "c": 4
  },
  {
    "en": "modifications",
    "es": "modificaciones",
    "c": 4
  },
  {
    "en": "modified",
    "es": "modificado",
    "c": 4
  },
  {
    "en": "modifies",
    "es": "modifica",
    "c": 4
  },
  {
    "en": "modify",
    "es": "modificar",
    "c": 4
  },
  {
    "en": "modifying",
    "es": "modificando",
    "c": 4
  },
  {
    "en": "monitored",
    "es": "monitoreado",
    "c": 4
  },
  {
    "en": "monitoring",
    "es": "monitoreo",
    "c": 4
  },
  {
    "en": "monitors",
    "es": "monitores",
    "c": 4
  },
  {
    "en": "motivates",
    "es": "motiva",
    "c": 4
  },
  {
    "en": "motivating",
    "es": "motivando",
    "c": 4
  },
  {
    "en": "motivations",
    "es": "motivaciones",
    "c": 4
  },
  {
    "en": "motives",
    "es": "motivos",
    "c": 4
  },
  {
    "en": "multidimensional",
    "es": "multidimensional",
    "c": 4
  },
  {
    "en": "mutually",
    "es": "mutuamente",
    "c": 4
  },
  {
    "en": "negate",
    "es": "negar",
    "c": 4
  },
  {
    "en": "negated",
    "es": "negado",
    "c": 4
  },
  {
    "en": "negates",
    "es": "niega",
    "c": 4
  },
  {
    "en": "negating",
    "es": "negando",
    "c": 4
  },
  {
    "en": "negatively",
    "es": "negativamente",
    "c": 4
  },
  {
    "en": "negatives",
    "es": "negativos",
    "c": 4
  },
  {
    "en": "networked",
    "es": "en red",
    "c": 4
  },
  {
    "en": "networking",
    "es": "creación de redes",
    "c": 4
  },
  {
    "en": "networks",
    "es": "redes",
    "c": 4
  },
  {
    "en": "neutralisation",
    "es": "neutralización",
    "c": 4
  },
  {
    "en": "neutralise",
    "es": "neutralizar",
    "c": 4
  },
  {
    "en": "neutralised",
    "es": "neutralizado",
    "c": 4
  },
  {
    "en": "neutralises",
    "es": "neutraliza",
    "c": 4
  },
  {
    "en": "neutralising",
    "es": "neutralizando",
    "c": 4
  },
  {
    "en": "neutrality",
    "es": "neutralidad",
    "c": 4
  },
  {
    "en": "neutralization",
    "es": "neutralización",
    "c": 4
  },
  {
    "en": "neutralize",
    "es": "neutralizar",
    "c": 4
  },
  {
    "en": "neutralized",
    "es": "neutralizado",
    "c": 4
  },
  {
    "en": "neutralizes",
    "es": "neutraliza",
    "c": 4
  },
  {
    "en": "neutralizing",
    "es": "neutralizando",
    "c": 4
  },
  {
    "en": "nonconformist",
    "es": "no conformista",
    "c": 4
  },
  {
    "en": "non-conformist",
    "es": "no conformista",
    "c": 4
  },
  {
    "en": "nonconformists",
    "es": "no conformistas",
    "c": 4
  },
  {
    "en": "non-conformists",
    "es": "no conformistas",
    "c": 4
  },
  {
    "en": "nonconformity",
    "es": "no conformidad",
    "c": 4
  },
  {
    "en": "non-conformity",
    "es": "no conformidad",
    "c": 4
  },
  {
    "en": "non-traditional",
    "es": "no tradicional",
    "c": 4
  },
  {
    "en": "normalisation",
    "es": "normalización",
    "c": 4
  },
  {
    "en": "normalise",
    "es": "normalizar",
    "c": 4
  },
  {
    "en": "normalised",
    "es": "normalizado",
    "c": 4
  },
  {
    "en": "normalises",
    "es": "normaliza",
    "c": 4
  },
  {
    "en": "normalising",
    "es": "normalizando",
    "c": 4
  },
  {
    "en": "normality",
    "es": "normalidad",
    "c": 4
  },
  {
    "en": "normalization",
    "es": "normalización",
    "c": 4
  },
  {
    "en": "normalize",
    "es": "normalizar",
    "c": 4
  },
  {
    "en": "normalized",
    "es": "normalizado",
    "c": 4
  },
  {
    "en": "normalizes",
    "es": "normaliza",
    "c": 4
  },
  {
    "en": "normalizing",
    "es": "normalizando",
    "c": 4
  },
  {
    "en": "normally",
    "es": "normalmente",
    "c": 4
  },
  {
    "en": "norms",
    "es": "normas",
    "c": 4
  },
  {
    "en": "notion",
    "es": "noción",
    "c": 4
  },
  {
    "en": "notions",
    "es": "nociones",
    "c": 4
  },
  {
    "en": "notwithstanding",
    "es": "no obstante",
    "c": 4
  },
  {
    "en": "nuclear",
    "es": "nuclear",
    "c": 4
  },
  {
    "en": "objectively",
    "es": "objetivamente",
    "c": 4
  },
  {
    "en": "objectivity",
    "es": "objetividad",
    "c": 4
  },
  {
    "en": "obtainable",
    "es": "obtenible",
    "c": 4
  },
  {
    "en": "obtained",
    "es": "obtenido",
    "c": 4
  },
  {
    "en": "obtaining",
    "es": "obteniendo",
    "c": 4
  },
  {
    "en": "obtains",
    "es": "obtiene",
    "c": 4
  },
  {
    "en": "obviously",
    "es": "obviamente",
    "c": 4
  },
  {
    "en": "occupancy",
    "es": "ocupación",
    "c": 4
  },
  {
    "en": "occupant",
    "es": "ocupante",
    "c": 4
  },
  {
    "en": "occupants",
    "es": "ocupantes",
    "c": 4
  },
  {
    "en": "occupational",
    "es": "ocupacional",
    "c": 4
  },
  {
    "en": "occupations",
    "es": "ocupaciones",
    "c": 4
  },
  {
    "en": "occupied",
    "es": "ocupado",
    "c": 4
  },
  {
    "en": "occupier",
    "es": "ocupante",
    "c": 4
  },
  {
    "en": "occupiers",
    "es": "ocupantes",
    "c": 4
  },
  {
    "en": "occupies",
    "es": "ocupa",
    "c": 4
  },
  {
    "en": "occupying",
    "es": "ocupando",
    "c": 4
  },
  {
    "en": "occurred",
    "es": "ocurrido",
    "c": 4
  },
  {
    "en": "occurrences",
    "es": "ocurrencias",
    "c": 4
  },
  {
    "en": "occurring",
    "es": "ocurriendo",
    "c": 4
  },
  {
    "en": "occurs",
    "es": "ocurre",
    "c": 4
  },
  {
    "en": "offset",
    "es": "compensar",
    "c": 4
  },
  {
    "en": "offsets",
    "es": "compensa",
    "c": 4
  },
  {
    "en": "offsetting",
    "es": "compensando",
    "c": 4
  },
  {
    "en": "optional",
    "es": "opcional",
    "c": 4
  },
  {
    "en": "options",
    "es": "opciones",
    "c": 4
  },
  {
    "en": "orient",
    "es": "orientar",
    "c": 4
  },
  {
    "en": "orientate",
    "es": "orientar",
    "c": 4
  },
  {
    "en": "orientated",
    "es": "orientado",
    "c": 4
  },
  {
    "en": "orientates",
    "es": "orienta",
    "c": 4
  },
  {
    "en": "orientating",
    "es": "orientando",
    "c": 4
  },
  {
    "en": "oriented",
    "es": "orientado",
    "c": 4
  },
  {
    "en": "orienting",
    "es": "orientando",
    "c": 4
  },
  {
    "en": "orients",
    "es": "orienta",
    "c": 4
  },
  {
    "en": "outcome",
    "es": "resultado",
    "c": 4
  },
  {
    "en": "outcomes",
    "es": "resultados",
    "c": 4
  },
  {
    "en": "overall",
    "es": "en general",
    "c": 4
  },
  {
    "en": "overestimate",
    "es": "sobreestimar",
    "c": 4
  },
  {
    "en": "over-estimate",
    "es": "sobreestimar",
    "c": 4
  },
  {
    "en": "overestimated",
    "es": "sobreestimado",
    "c": 4
  },
  {
    "en": "overestimates",
    "es": "sobreestima",
    "c": 4
  },
  {
    "en": "overestimating",
    "es": "sobreestimando",
    "c": 4
  },
  {
    "en": "overlap",
    "es": "solapamiento",
    "c": 4
  },
  {
    "en": "overlapped",
    "es": "solapado",
    "c": 4
  },
  {
    "en": "overlapping",
    "es": "solapando",
    "c": 4
  },
  {
    "en": "overlaps",
    "es": "solapamientos",
    "c": 4
  },
  {
    "en": "overseas",
    "es": "en el extranjero",
    "c": 4
  },
  {
    "en": "panel",
    "es": "panel",
    "c": 4
  },
  {
    "en": "panelled",
    "es": "enpanelado",
    "c": 4
  },
  {
    "en": "panelling",
    "es": "paneles",
    "c": 4
  },
  {
    "en": "panels",
    "es": "paneles",
    "c": 4
  },
  {
    "en": "paradigm",
    "es": "paradigma",
    "c": 4
  },
  {
    "en": "paradigms",
    "es": "paradigmas",
    "c": 4
  },
  {
    "en": "paragraph",
    "es": "párrafo",
    "c": 4
  },
  {
    "en": "paragraphing",
    "es": "párrafos",
    "c": 4
  },
  {
    "en": "paragraphs",
    "es": "párrafos",
    "c": 4
  },
  {
    "en": "paralleled",
    "es": "paralelo",
    "c": 4
  },
  {
    "en": "parallelled",
    "es": "paralelo",
    "c": 4
  },
  {
    "en": "parallelling",
    "es": "paralelizando",
    "c": 4
  },
  {
    "en": "parallels",
    "es": "paralelos",
    "c": 4
  },
  {
    "en": "parameters",
    "es": "parámetros",
    "c": 4
  },
  {
    "en": "participant",
    "es": "participante",
    "c": 4
  },
  {
    "en": "participants",
    "es": "participantes",
    "c": 4
  },
  {
    "en": "participate",
    "es": "participar",
    "c": 4
  },
  {
    "en": "participated",
    "es": "participado",
    "c": 4
  },
  {
    "en": "participates",
    "es": "participa",
    "c": 4
  },
  {
    "en": "participating",
    "es": "participando",
    "c": 4
  },
  {
    "en": "participatory",
    "es": "participativo",
    "c": 4
  },
  {
    "en": "partners",
    "es": "socios",
    "c": 4
  },
  {
    "en": "partnerships",
    "es": "asociaciones",
    "c": 4
  },
  {
    "en": "passively",
    "es": "pasivamente",
    "c": 4
  },
  {
    "en": "passivity",
    "es": "pasividad",
    "c": 4
  },
  {
    "en": "perceived",
    "es": "percibido",
    "c": 4
  },
  {
    "en": "perceives",
    "es": "percibe",
    "c": 4
  },
  {
    "en": "perceiving",
    "es": "percibiendo",
    "c": 4
  },
  {
    "en": "percentages",
    "es": "porcentajes",
    "c": 4
  },
  {
    "en": "perceptions",
    "es": "percepciones",
    "c": 4
  },
  {
    "en": "periodic",
    "es": "periódico",
    "c": 4
  },
  {
    "en": "periodical",
    "es": "periódico",
    "c": 4
  },
  {
    "en": "periodically",
    "es": "periódicamente",
    "c": 4
  },
  {
    "en": "periodicals",
    "es": "periódicos",
    "c": 4
  },
  {
    "en": "periods",
    "es": "períodos",
    "c": 4
  },
  {
    "en": "persisted",
    "es": "persistido",
    "c": 4
  },
  {
    "en": "persistence",
    "es": "persistencia",
    "c": 4
  },
  {
    "en": "persistently",
    "es": "persistentemente",
    "c": 4
  },
  {
    "en": "persisting",
    "es": "persistiendo",
    "c": 4
  },
  {
    "en": "persists",
    "es": "persiste",
    "c": 4
  },
  {
    "en": "perspective",
    "es": "perspectiva",
    "c": 4
  },
  {
    "en": "perspectives",
    "es": "perspectivas",
    "c": 4
  },
  {
    "en": "phased",
    "es": "faseado",
    "c": 4
  },
  {
    "en": "phases",
    "es": "fases",
    "c": 4
  },
  {
    "en": "phasing",
    "es": "faseando",
    "c": 4
  },
  {
    "en": "phenomena",
    "es": "fenómenos",
    "c": 4
  },
  {
    "en": "phenomenon",
    "es": "fenómeno",
    "c": 4
  },
  {
    "en": "philosophers",
    "es": "filósofos",
    "c": 4
  },
  {
    "en": "philosophically",
    "es": "filosóficamente",
    "c": 4
  },
  {
    "en": "philosophies",
    "es": "filosofías",
    "c": 4
  },
  {
    "en": "philosophise",
    "es": "filosofar",
    "c": 4
  },
  {
    "en": "philosophised",
    "es": "filosofado",
    "c": 4
  },
  {
    "en": "philosophises",
    "es": "filosofa",
    "c": 4
  },
  {
    "en": "philosophising",
    "es": "filosofando",
    "c": 4
  },
  {
    "en": "philosophize",
    "es": "filosofar",
    "c": 4
  },
  {
    "en": "philosophized",
    "es": "filosofado",
    "c": 4
  },
  {
    "en": "philosophizes",
    "es": "filosofa",
    "c": 4
  },
  {
    "en": "philosophizing",
    "es": "filosofando",
    "c": 4
  },
  {
    "en": "philosophy",
    "es": "filosofía",
    "c": 4
  },
  {
    "en": "physical",
    "es": "físico",
    "c": 4
  },
  {
    "en": "physically",
    "es": "físicamente",
    "c": 4
  },
  {
    "en": "plus",
    "es": "más",
    "c": 4
  },
  {
    "en": "pluses",
    "es": "ventajas",
    "c": 4
  },
  {
    "en": "policies",
    "es": "políticas",
    "c": 4
  },
  {
    "en": "policy",
    "es": "política",
    "c": 4
  },
  {
    "en": "portions",
    "es": "porciones",
    "c": 4
  },
  {
    "en": "pose",
    "es": "plantear",
    "c": 4
  },
  {
    "en": "posed",
    "es": "planteado",
    "c": 4
  },
  {
    "en": "poses",
    "es": "plantea",
    "c": 4
  },
  {
    "en": "posing",
    "es": "planteando",
    "c": 4
  },
  {
    "en": "positively",
    "es": "positivamente",
    "c": 4
  },
  {
    "en": "potential",
    "es": "potencial",
    "c": 4
  },
  {
    "en": "practitioners",
    "es": "profesionales",
    "c": 4
  },
  {
    "en": "preceded",
    "es": "precedido",
    "c": 4
  },
  {
    "en": "precedence",
    "es": "precedencia",
    "c": 4
  },
  {
    "en": "precedes",
    "es": "precede",
    "c": 4
  },
  {
    "en": "preceding",
    "es": "precedente",
    "c": 4
  },
  {
    "en": "predictability",
    "es": "previsibilidad",
    "c": 4
  },
  {
    "en": "predictably",
    "es": "previsiblemente",
    "c": 4
  },
  {
    "en": "predicting",
    "es": "prediciendo",
    "c": 4
  },
  {
    "en": "prediction",
    "es": "predicción",
    "c": 4
  },
  {
    "en": "predictions",
    "es": "predicciones",
    "c": 4
  },
  {
    "en": "predicts",
    "es": "predice",
    "c": 4
  },
  {
    "en": "predominance",
    "es": "predominio",
    "c": 4
  },
  {
    "en": "predominant",
    "es": "predominante",
    "c": 4
  },
  {
    "en": "predominate",
    "es": "predominar",
    "c": 4
  },
  {
    "en": "predominated",
    "es": "predominado",
    "c": 4
  },
  {
    "en": "predominates",
    "es": "predomina",
    "c": 4
  },
  {
    "en": "predominating",
    "es": "predominando",
    "c": 4
  },
  {
    "en": "preliminaries",
    "es": "preliminares",
    "c": 4
  },
  {
    "en": "presumed",
    "es": "presumido",
    "c": 4
  },
  {
    "en": "presumes",
    "es": "presume",
    "c": 4
  },
  {
    "en": "presuming",
    "es": "presumiendo",
    "c": 4
  },
  {
    "en": "presumption",
    "es": "presunción",
    "c": 4
  },
  {
    "en": "presumptions",
    "es": "presunciones",
    "c": 4
  },
  {
    "en": "presumptuous",
    "es": "presuntuoso",
    "c": 4
  },
  {
    "en": "primacy",
    "es": "primacía",
    "c": 4
  },
  {
    "en": "prime",
    "es": "principal",
    "c": 4
  },
  {
    "en": "principally",
    "es": "principalmente",
    "c": 4
  },
  {
    "en": "principle",
    "es": "principio",
    "c": 4
  },
  {
    "en": "principled",
    "es": "con principios",
    "c": 4
  },
  {
    "en": "principles",
    "es": "principios",
    "c": 4
  },
  {
    "en": "priorities",
    "es": "prioridades",
    "c": 4
  },
  {
    "en": "prioritisation",
    "es": "priorización",
    "c": 4
  },
  {
    "en": "prioritise",
    "es": "priorizar",
    "c": 4
  },
  {
    "en": "prioritised",
    "es": "priorizado",
    "c": 4
  },
  {
    "en": "prioritises",
    "es": "prioriza",
    "c": 4
  },
  {
    "en": "prioritising",
    "es": "priorizando",
    "c": 4
  },
  {
    "en": "prioritization",
    "es": "priorización",
    "c": 4
  },
  {
    "en": "prioritize",
    "es": "priorizar",
    "c": 4
  },
  {
    "en": "prioritized",
    "es": "priorizado",
    "c": 4
  },
  {
    "en": "prioritizes",
    "es": "prioriza",
    "c": 4
  },
  {
    "en": "prioritizing",
    "es": "priorizando",
    "c": 4
  },
  {
    "en": "priority",
    "es": "prioridad",
    "c": 4
  },
  {
    "en": "procedural",
    "es": "procedimental",
    "c": 4
  },
  {
    "en": "procedure",
    "es": "procedimiento",
    "c": 4
  },
  {
    "en": "procedures",
    "es": "procedimientos",
    "c": 4
  },
  {
    "en": "proceeded",
    "es": "procedido",
    "c": 4
  },
  {
    "en": "proceedings",
    "es": "procedimientos",
    "c": 4
  },
  {
    "en": "process",
    "es": "proceso",
    "c": 4
  },
  {
    "en": "processed",
    "es": "procesado",
    "c": 4
  },
  {
    "en": "processes",
    "es": "procesos",
    "c": 4
  },
  {
    "en": "professionalism",
    "es": "profesionalismo",
    "c": 4
  },
  {
    "en": "professionally",
    "es": "profesionalmente",
    "c": 4
  },
  {
    "en": "professionals",
    "es": "profesionales",
    "c": 4
  },
  {
    "en": "prohibiting",
    "es": "prohibiendo",
    "c": 4
  },
  {
    "en": "prohibition",
    "es": "prohibición",
    "c": 4
  },
  {
    "en": "prohibitions",
    "es": "prohibiciones",
    "c": 4
  },
  {
    "en": "prohibitive",
    "es": "prohibitivo",
    "c": 4
  },
  {
    "en": "prohibits",
    "es": "prohíbe",
    "c": 4
  },
  {
    "en": "projected",
    "es": "proyectado",
    "c": 4
  },
  {
    "en": "projecting",
    "es": "proyectando",
    "c": 4
  },
  {
    "en": "projections",
    "es": "proyecciones",
    "c": 4
  },
  {
    "en": "projects",
    "es": "proyectos",
    "c": 4
  },
  {
    "en": "promote",
    "es": "promover",
    "c": 4
  },
  {
    "en": "promoted",
    "es": "promovido",
    "c": 4
  },
  {
    "en": "promoter",
    "es": "promotor",
    "c": 4
  },
  {
    "en": "promoters",
    "es": "promotores",
    "c": 4
  },
  {
    "en": "promotes",
    "es": "promueve",
    "c": 4
  },
  {
    "en": "promoting",
    "es": "promoviendo",
    "c": 4
  },
  {
    "en": "promotions",
    "es": "promociones",
    "c": 4
  },
  {
    "en": "proportional",
    "es": "proporcional",
    "c": 4
  },
  {
    "en": "proportionally",
    "es": "proporcionalmente",
    "c": 4
  },
  {
    "en": "proportionate",
    "es": "proporcionado",
    "c": 4
  },
  {
    "en": "proportionately",
    "es": "proporcionadamente",
    "c": 4
  },
  {
    "en": "proportions",
    "es": "proporciones",
    "c": 4
  },
  {
    "en": "prospect",
    "es": "perspectiva",
    "c": 4
  },
  {
    "en": "prospects",
    "es": "perspectivas",
    "c": 4
  },
  {
    "en": "protocols",
    "es": "protocolos",
    "c": 4
  },
  {
    "en": "psychologically",
    "es": "psicológicamente",
    "c": 4
  },
  {
    "en": "psychologist",
    "es": "psicólogo",
    "c": 4
  },
  {
    "en": "psychologists",
    "es": "psicólogos",
    "c": 4
  },
  {
    "en": "psychology",
    "es": "psicología",
    "c": 4
  },
  {
    "en": "publication",
    "es": "publicación",
    "c": 4
  },
  {
    "en": "publications",
    "es": "publicaciones",
    "c": 4
  },
  {
    "en": "published",
    "es": "publicado",
    "c": 4
  },
  {
    "en": "publisher",
    "es": "editor",
    "c": 4
  },
  {
    "en": "publishers",
    "es": "editores",
    "c": 4
  },
  {
    "en": "publishes",
    "es": "publica",
    "c": 4
  },
  {
    "en": "purchase",
    "es": "compra",
    "c": 4
  },
  {
    "en": "purchased",
    "es": "comprado",
    "c": 4
  },
  {
    "en": "purchaser",
    "es": "comprador",
    "c": 4
  },
  {
    "en": "purchasers",
    "es": "compradores",
    "c": 4
  },
  {
    "en": "purchases",
    "es": "compras",
    "c": 4
  },
  {
    "en": "purchasing",
    "es": "comprando",
    "c": 4
  },
  {
    "en": "pursue",
    "es": "perseguir",
    "c": 4
  },
  {
    "en": "pursued",
    "es": "perseguido",
    "c": 4
  },
  {
    "en": "pursues",
    "es": "persigue",
    "c": 4
  },
  {
    "en": "pursuing",
    "es": "persiguiendo",
    "c": 4
  },
  {
    "en": "pursuits",
    "es": "búsquedas",
    "c": 4
  },
  {
    "en": "qualitative",
    "es": "cualitativo",
    "c": 4
  },
  {
    "en": "qualitatively",
    "es": "cualitativamente",
    "c": 4
  },
  {
    "en": "quotation",
    "es": "cita",
    "c": 4
  },
  {
    "en": "quotations",
    "es": "citas",
    "c": 4
  },
  {
    "en": "quotes",
    "es": "citas",
    "c": 4
  },
  {
    "en": "quoting",
    "es": "citando",
    "c": 4
  },
  {
    "en": "radically",
    "es": "radicalmente",
    "c": 4
  },
  {
    "en": "radicals",
    "es": "radicales",
    "c": 4
  },
  {
    "en": "randomly",
    "es": "aleatoriamente",
    "c": 4
  },
  {
    "en": "randomness",
    "es": "aleatoriedad",
    "c": 4
  },
  {
    "en": "ranged",
    "es": "variado",
    "c": 4
  },
  {
    "en": "ranges",
    "es": "rangos",
    "c": 4
  },
  {
    "en": "ranging",
    "es": "variando",
    "c": 4
  },
  {
    "en": "rationalisation",
    "es": "racionalización",
    "c": 4
  },
  {
    "en": "rationalisations",
    "es": "racionalizaciones",
    "c": 4
  },
  {
    "en": "rationalise",
    "es": "racionalizar",
    "c": 4
  },
  {
    "en": "rationalised",
    "es": "racionalizado",
    "c": 4
  },
  {
    "en": "rationalises",
    "es": "racionaliza",
    "c": 4
  },
  {
    "en": "rationalising",
    "es": "racionalizando",
    "c": 4
  },
  {
    "en": "rationalism",
    "es": "racionalismo",
    "c": 4
  },
  {
    "en": "rationality",
    "es": "racionalidad",
    "c": 4
  },
  {
    "en": "rationalization",
    "es": "racionalización",
    "c": 4
  },
  {
    "en": "rationalizations",
    "es": "racionalizaciones",
    "c": 4
  },
  {
    "en": "rationalize",
    "es": "racionalizar",
    "c": 4
  },
  {
    "en": "rationalized",
    "es": "racionalizado",
    "c": 4
  },
  {
    "en": "rationalizes",
    "es": "racionaliza",
    "c": 4
  },
  {
    "en": "rationally",
    "es": "racionalmente",
    "c": 4
  },
  {
    "en": "ratios",
    "es": "ratios",
    "c": 4
  },
  {
    "en": "react",
    "es": "reaccionar",
    "c": 4
  },
  {
    "en": "reacted",
    "es": "reaccionado",
    "c": 4
  },
  {
    "en": "reacting",
    "es": "reaccionando",
    "c": 4
  },
  {
    "en": "reaction",
    "es": "reacción",
    "c": 4
  },
  {
    "en": "reactionaries",
    "es": "reaccionarios",
    "c": 4
  },
  {
    "en": "reactionary",
    "es": "reaccionario",
    "c": 4
  },
  {
    "en": "reactions",
    "es": "reacciones",
    "c": 4
  },
  {
    "en": "reactivate",
    "es": "reactivar",
    "c": 4
  },
  {
    "en": "reactivation",
    "es": "reactivación",
    "c": 4
  },
  {
    "en": "reactive",
    "es": "reactivo",
    "c": 4
  },
  {
    "en": "reactor",
    "es": "reactor",
    "c": 4
  },
  {
    "en": "reactors",
    "es": "reactores",
    "c": 4
  },
  {
    "en": "reacts",
    "es": "reacciona",
    "c": 4
  },
  {
    "en": "readjust",
    "es": "reajustar",
    "c": 4
  },
  {
    "en": "readjusted",
    "es": "reajustado",
    "c": 4
  },
  {
    "en": "readjusting",
    "es": "reajustando",
    "c": 4
  },
  {
    "en": "readjustment",
    "es": "reajuste",
    "c": 4
  },
  {
    "en": "readjustments",
    "es": "reajustes",
    "c": 4
  },
  {
    "en": "readjusts",
    "es": "reajusta",
    "c": 4
  },
  {
    "en": "reassess",
    "es": "revaluar",
    "c": 4
  },
  {
    "en": "reassessed",
    "es": "revaluado",
    "c": 4
  },
  {
    "en": "reassessing",
    "es": "revaluando",
    "c": 4
  },
  {
    "en": "reassessment",
    "es": "revaluación",
    "c": 4
  },
  {
    "en": "reassign",
    "es": "reasignar",
    "c": 4
  },
  {
    "en": "reassigned",
    "es": "reasignado",
    "c": 4
  },
  {
    "en": "reassigning",
    "es": "reasignando",
    "c": 4
  },
  {
    "en": "reassigns",
    "es": "reasigna",
    "c": 4
  },
  {
    "en": "recommenced",
    "es": "recomenzado",
    "c": 4
  },
  {
    "en": "recommences",
    "es": "recomienza",
    "c": 4
  },
  {
    "en": "recommencing",
    "es": "recomenzando",
    "c": 4
  },
  {
    "en": "reconstruct",
    "es": "reconstruir",
    "c": 4
  },
  {
    "en": "reconstructed",
    "es": "reconstruido",
    "c": 4
  },
  {
    "en": "reconstructing",
    "es": "reconstruyendo",
    "c": 4
  },
  {
    "en": "reconstructs",
    "es": "reconstruye",
    "c": 4
  },
  {
    "en": "recoverable",
    "es": "recuperable",
    "c": 4
  },
  {
    "en": "recovering",
    "es": "recuperando",
    "c": 4
  },
  {
    "en": "recovers",
    "es": "recupera",
    "c": 4
  },
  {
    "en": "recreate",
    "es": "recrear",
    "c": 4
  },
  {
    "en": "recreated",
    "es": "recreado",
    "c": 4
  },
  {
    "en": "recreates",
    "es": "recrea",
    "c": 4
  },
  {
    "en": "recreating",
    "es": "recreando",
    "c": 4
  },
  {
    "en": "redefine",
    "es": "redefinir",
    "c": 4
  },
  {
    "en": "redefined",
    "es": "redefinido",
    "c": 4
  },
  {
    "en": "redefines",
    "es": "redefine",
    "c": 4
  },
  {
    "en": "redefining",
    "es": "redefiniendo",
    "c": 4
  },
  {
    "en": "redistribute",
    "es": "redistribuir",
    "c": 4
  },
  {
    "en": "redistributed",
    "es": "redistribuido",
    "c": 4
  },
  {
    "en": "redistributes",
    "es": "redistribuye",
    "c": 4
  },
  {
    "en": "redistributing",
    "es": "redistribuyendo",
    "c": 4
  },
  {
    "en": "redistribution",
    "es": "redistribución",
    "c": 4
  },
  {
    "en": "redraft",
    "es": "redactar de nuevo",
    "c": 4
  },
  {
    "en": "redrafted",
    "es": "redactado de nuevo",
    "c": 4
  },
  {
    "en": "redrafting",
    "es": "redactando de nuevo",
    "c": 4
  },
  {
    "en": "redrafts",
    "es": "redacta de nuevo",
    "c": 4
  },
  {
    "en": "re-evaluate",
    "es": "revaluar",
    "c": 4
  },
  {
    "en": "re-evaluated",
    "es": "revaluado",
    "c": 4
  },
  {
    "en": "re-evaluates",
    "es": "revalúa",
    "c": 4
  },
  {
    "en": "re-evaluating",
    "es": "revaluando",
    "c": 4
  },
  {
    "en": "re-evaluation",
    "es": "revaluación",
    "c": 4
  },
  {
    "en": "refined",
    "es": "refinado",
    "c": 4
  },
  {
    "en": "refinement",
    "es": "refinamiento",
    "c": 4
  },
  {
    "en": "refinements",
    "es": "refinamientos",
    "c": 4
  },
  {
    "en": "refines",
    "es": "refina",
    "c": 4
  },
  {
    "en": "refining",
    "es": "refinando",
    "c": 4
  },
  {
    "en": "refocus",
    "es": "reenfocar",
    "c": 4
  },
  {
    "en": "refocused",
    "es": "reenfocado",
    "c": 4
  },
  {
    "en": "refocuses",
    "es": "reenfoca",
    "c": 4
  },
  {
    "en": "refocusing",
    "es": "reenfocando",
    "c": 4
  },
  {
    "en": "refocussed",
    "es": "reenfocado",
    "c": 4
  },
  {
    "en": "refocusses",
    "es": "reenfoca",
    "c": 4
  },
  {
    "en": "refocussing",
    "es": "reenfocando",
    "c": 4
  },
  {
    "en": "reformulate",
    "es": "reformular",
    "c": 4
  },
  {
    "en": "reformulated",
    "es": "reformulado",
    "c": 4
  },
  {
    "en": "reformulating",
    "es": "reformulando",
    "c": 4
  },
  {
    "en": "reformulation",
    "es": "reformulación",
    "c": 4
  },
  {
    "en": "reformulations",
    "es": "reformulaciones",
    "c": 4
  },
  {
    "en": "regimes",
    "es": "regímenes",
    "c": 4
  },
  {
    "en": "region",
    "es": "región",
    "c": 4
  },
  {
    "en": "regional",
    "es": "regional",
    "c": 4
  },
  {
    "en": "regionally",
    "es": "regionalmente",
    "c": 4
  },
  {
    "en": "regions",
    "es": "regiones",
    "c": 4
  },
  {
    "en": "registering",
    "es": "registrando",
    "c": 4
  },
  {
    "en": "registers",
    "es": "registros",
    "c": 4
  },
  {
    "en": "regulated",
    "es": "regulado",
    "c": 4
  },
  {
    "en": "regulates",
    "es": "regula",
    "c": 4
  },
  {
    "en": "regulating",
    "es": "regulando",
    "c": 4
  },
  {
    "en": "regulation",
    "es": "regulación",
    "c": 4
  },
  {
    "en": "regulations",
    "es": "regulaciones",
    "c": 4
  },
  {
    "en": "regulators",
    "es": "reguladores",
    "c": 4
  },
  {
    "en": "reinforced",
    "es": "reforzado",
    "c": 4
  },
  {
    "en": "reinforcement",
    "es": "refuerzo",
    "c": 4
  },
  {
    "en": "reinforcements",
    "es": "refuerzos",
    "c": 4
  },
  {
    "en": "reinforces",
    "es": "refuerza",
    "c": 4
  },
  {
    "en": "reinforcing",
    "es": "reforzando",
    "c": 4
  },
  {
    "en": "reinterpret",
    "es": "reinterpretación",
    "c": 4
  },
  {
    "en": "reinterpretation",
    "es": "reinterpretación",
    "c": 4
  },
  {
    "en": "reinterpretations",
    "es": "reinterpretaciones",
    "c": 4
  },
  {
    "en": "reinterpreted",
    "es": "reinterpretado",
    "c": 4
  },
  {
    "en": "reinterpreting",
    "es": "reinterpretando",
    "c": 4
  },
  {
    "en": "reinterprets",
    "es": "reinterpreta",
    "c": 4
  },
  {
    "en": "reinvest",
    "es": "reinvertir",
    "c": 4
  },
  {
    "en": "reinvested",
    "es": "reinvertido",
    "c": 4
  },
  {
    "en": "reinvesting",
    "es": "reinvertiendo",
    "c": 4
  },
  {
    "en": "reinvestment",
    "es": "reinversión",
    "c": 4
  },
  {
    "en": "reinvests",
    "es": "reinvierte",
    "c": 4
  },
  {
    "en": "rejecting",
    "es": "rechazando",
    "c": 4
  },
  {
    "en": "rejections",
    "es": "rechazos",
    "c": 4
  },
  {
    "en": "rejects",
    "es": "rechaza",
    "c": 4
  },
  {
    "en": "relaxes",
    "es": "relaja",
    "c": 4
  },
  {
    "en": "relaxing",
    "es": "relajando",
    "c": 4
  },
  {
    "en": "relevant",
    "es": "relevante",
    "c": 4
  },
  {
    "en": "reliably",
    "es": "fiablemente",
    "c": 4
  },
  {
    "en": "reliance",
    "es": "dependencia",
    "c": 4
  },
  {
    "en": "reliant",
    "es": "dependiente",
    "c": 4
  },
  {
    "en": "relied",
    "es": "confiado",
    "c": 4
  },
  {
    "en": "relies",
    "es": "depende",
    "c": 4
  },
  {
    "en": "relocate",
    "es": "reubicar",
    "c": 4
  },
  {
    "en": "relocated",
    "es": "reubicado",
    "c": 4
  },
  {
    "en": "relocates",
    "es": "reubica",
    "c": 4
  },
  {
    "en": "relocating",
    "es": "reubicando",
    "c": 4
  },
  {
    "en": "relocation",
    "es": "reubicación",
    "c": 4
  },
  {
    "en": "reluctance",
    "es": "renuencia",
    "c": 4
  },
  {
    "en": "reluctantly",
    "es": "renuentemente",
    "c": 4
  },
  {
    "en": "relying",
    "es": "dependiendo",
    "c": 4
  },
  {
    "en": "removable",
    "es": "extraíble",
    "c": 4
  },
  {
    "en": "removals",
    "es": "remociones",
    "c": 4
  },
  {
    "en": "removed",
    "es": "removido",
    "c": 4
  },
  {
    "en": "removes",
    "es": "remueve",
    "c": 4
  },
  {
    "en": "removing",
    "es": "removiendo",
    "c": 4
  },
  {
    "en": "reoccur",
    "es": "reocurrir",
    "c": 4
  },
  {
    "en": "reoccurred",
    "es": "reocurrido",
    "c": 4
  },
  {
    "en": "reoccurring",
    "es": "reocurriendo",
    "c": 4
  },
  {
    "en": "reoccurs",
    "es": "reocurre",
    "c": 4
  },
  {
    "en": "reorient",
    "es": "reorientar",
    "c": 4
  },
  {
    "en": "reorientation",
    "es": "reorientación",
    "c": 4
  },
  {
    "en": "required",
    "es": "requerido",
    "c": 4
  },
  {
    "en": "requirement",
    "es": "requisito",
    "c": 4
  },
  {
    "en": "requires",
    "es": "requiere",
    "c": 4
  },
  {
    "en": "requiring",
    "es": "requiriendo",
    "c": 4
  },
  {
    "en": "reschedule",
    "es": "reprogramar",
    "c": 4
  },
  {
    "en": "rescheduled",
    "es": "reprogramado",
    "c": 4
  },
  {
    "en": "reschedules",
    "es": "reprograma",
    "c": 4
  },
  {
    "en": "rescheduling",
    "es": "reprogramando",
    "c": 4
  },
  {
    "en": "researched",
    "es": "investigado",
    "c": 4
  },
  {
    "en": "researcher",
    "es": "investigador",
    "c": 4
  },
  {
    "en": "researchers",
    "es": "investigadores",
    "c": 4
  },
  {
    "en": "researches",
    "es": "investigaciones",
    "c": 4
  },
  {
    "en": "researching",
    "es": "investigando",
    "c": 4
  },
  {
    "en": "resided",
    "es": "residido",
    "c": 4
  },
  {
    "en": "resident",
    "es": "residente",
    "c": 4
  },
  {
    "en": "residents",
    "es": "residentes",
    "c": 4
  },
  {
    "en": "resides",
    "es": "reside",
    "c": 4
  },
  {
    "en": "residing",
    "es": "residiendo",
    "c": 4
  },
  {
    "en": "resolve",
    "es": "resolver",
    "c": 4
  },
  {
    "en": "resolved",
    "es": "resuelto",
    "c": 4
  },
  {
    "en": "resolves",
    "es": "resuelve",
    "c": 4
  },
  {
    "en": "resolving",
    "es": "resolviendo",
    "c": 4
  },
  {
    "en": "resourced",
    "es": "recursado",
    "c": 4
  },
  {
    "en": "resources",
    "es": "recursos",
    "c": 4
  },
  {
    "en": "resourcing",
    "es": "recursando",
    "c": 4
  },
  {
    "en": "respond",
    "es": "responder",
    "c": 4
  },
  {
    "en": "responded",
    "es": "respondido",
    "c": 4
  },
  {
    "en": "respondent",
    "es": "encuestado",
    "c": 4
  },
  {
    "en": "respondents",
    "es": "encuestados",
    "c": 4
  },
  {
    "en": "responding",
    "es": "respondiendo",
    "c": 4
  },
  {
    "en": "responds",
    "es": "responde",
    "c": 4
  },
  {
    "en": "responses",
    "es": "respuestas",
    "c": 4
  },
  {
    "en": "responsiveness",
    "es": "capacidad de respuesta",
    "c": 4
  },
  {
    "en": "restored",
    "es": "restaurado",
    "c": 4
  },
  {
    "en": "restores",
    "es": "restaura",
    "c": 4
  },
  {
    "en": "restoring",
    "es": "restaurando",
    "c": 4
  },
  {
    "en": "restrain",
    "es": "restringir",
    "c": 4
  },
  {
    "en": "restrained",
    "es": "restringido",
    "c": 4
  },
  {
    "en": "restraining",
    "es": "restringiendo",
    "c": 4
  },
  {
    "en": "restrains",
    "es": "restringe",
    "c": 4
  },
  {
    "en": "restraints",
    "es": "restricciones",
    "c": 4
  },
  {
    "en": "restricted",
    "es": "restringido",
    "c": 4
  },
  {
    "en": "restricting",
    "es": "restringiendo",
    "c": 4
  },
  {
    "en": "restrictions",
    "es": "restricciones",
    "c": 4
  },
  {
    "en": "restrictive",
    "es": "restrictivo",
    "c": 4
  },
  {
    "en": "restrictively",
    "es": "restrictivamente",
    "c": 4
  },
  {
    "en": "restricts",
    "es": "restringe",
    "c": 4
  },
  {
    "en": "restructure",
    "es": "reestructurar",
    "c": 4
  },
  {
    "en": "restructured",
    "es": "reestructurado",
    "c": 4
  },
  {
    "en": "restructures",
    "es": "reestructura",
    "c": 4
  },
  {
    "en": "restructuring",
    "es": "reestructurando",
    "c": 4
  },
  {
    "en": "retain",
    "es": "retener",
    "c": 4
  },
  {
    "en": "retained",
    "es": "retenido",
    "c": 4
  },
  {
    "en": "retainer",
    "es": "retén",
    "c": 4
  },
  {
    "en": "retainers",
    "es": "retenes",
    "c": 4
  },
  {
    "en": "retaining",
    "es": "reteniendo",
    "c": 4
  },
  {
    "en": "retains",
    "es": "retiene",
    "c": 4
  },
  {
    "en": "retention",
    "es": "retención",
    "c": 4
  },
  {
    "en": "retentive",
    "es": "retentivo",
    "c": 4
  },
  {
    "en": "revealing",
    "es": "revelando",
    "c": 4
  },
  {
    "en": "reveals",
    "es": "revela",
    "c": 4
  },
  {
    "en": "revelations",
    "es": "revelaciones",
    "c": 4
  },
  {
    "en": "revenues",
    "es": "ingresos",
    "c": 4
  },
  {
    "en": "reversal",
    "es": "inversión",
    "c": 4
  },
  {
    "en": "reversals",
    "es": "inversiones",
    "c": 4
  },
  {
    "en": "reversed",
    "es": "invertido",
    "c": 4
  },
  {
    "en": "reverses",
    "es": "invierte",
    "c": 4
  },
  {
    "en": "reversible",
    "es": "reversible",
    "c": 4
  },
  {
    "en": "reversing",
    "es": "invirtiendo",
    "c": 4
  },
  {
    "en": "revised",
    "es": "revisado",
    "c": 4
  },
  {
    "en": "revises",
    "es": "revisa",
    "c": 4
  },
  {
    "en": "revising",
    "es": "revisando",
    "c": 4
  },
  {
    "en": "revisions",
    "es": "revisiones",
    "c": 4
  },
  {
    "en": "revolution",
    "es": "revolución",
    "c": 4
  },
  {
    "en": "revolutionaries",
    "es": "revolucionarios",
    "c": 4
  },
  {
    "en": "revolutionise",
    "es": "revolucionar",
    "c": 4
  },
  {
    "en": "revolutionised",
    "es": "revolucionado",
    "c": 4
  },
  {
    "en": "revolutionises",
    "es": "revoluciona",
    "c": 4
  },
  {
    "en": "revolutionising",
    "es": "revolucionando",
    "c": 4
  },
  {
    "en": "revolutionist",
    "es": "revolucionista",
    "c": 4
  },
  {
    "en": "revolutionists",
    "es": "revolucionistas",
    "c": 4
  },
  {
    "en": "revolutionize",
    "es": "revolucionar",
    "c": 4
  },
  {
    "en": "revolutionized",
    "es": "revolucionado",
    "c": 4
  },
  {
    "en": "revolutionizes",
    "es": "revoluciona",
    "c": 4
  },
  {
    "en": "revolutionizing",
    "es": "revolucionando",
    "c": 4
  },
  {
    "en": "revolutions",
    "es": "revoluciones",
    "c": 4
  },
  {
    "en": "rigid",
    "es": "rígido",
    "c": 4
  },
  {
    "en": "rigidities",
    "es": "rigideces",
    "c": 4
  },
  {
    "en": "rigidity",
    "es": "rigidez",
    "c": 4
  },
  {
    "en": "rigidly",
    "es": "rígidamente",
    "c": 4
  },
  {
    "en": "roles",
    "es": "roles",
    "c": 4
  },
  {
    "en": "routed",
    "es": "enrutado",
    "c": 4
  },
  {
    "en": "routes",
    "es": "rutas",
    "c": 4
  },
  {
    "en": "routing",
    "es": "enrutamiento",
    "c": 4
  },
  {
    "en": "scenarios",
    "es": "escenarios",
    "c": 4
  },
  {
    "en": "schedule",
    "es": "programar",
    "c": 4
  },
  {
    "en": "scheduled",
    "es": "programado",
    "c": 4
  },
  {
    "en": "schedules",
    "es": "horarios",
    "c": 4
  },
  {
    "en": "scheduling",
    "es": "programación",
    "c": 4
  },
  {
    "en": "schematic",
    "es": "esquemático",
    "c": 4
  },
  {
    "en": "schematically",
    "es": "esquemáticamente",
    "c": 4
  },
  {
    "en": "scheme",
    "es": "esquema",
    "c": 4
  },
  {
    "en": "schemed",
    "es": "maquinado",
    "c": 4
  },
  {
    "en": "schemes",
    "es": "esquemas",
    "c": 4
  },
  {
    "en": "scheming",
    "es": "maquinando",
    "c": 4
  },
  {
    "en": "section",
    "es": "sección",
    "c": 4
  },
  {
    "en": "sectioned",
    "es": "seccionado",
    "c": 4
  },
  {
    "en": "sectioning",
    "es": "seccionando",
    "c": 4
  },
  {
    "en": "sections",
    "es": "secciones",
    "c": 4
  },
  {
    "en": "sector",
    "es": "sector",
    "c": 4
  },
  {
    "en": "sectors",
    "es": "sectores",
    "c": 4
  },
  {
    "en": "secure",
    "es": "seguro",
    "c": 4
  },
  {
    "en": "secured",
    "es": "asegurado",
    "c": 4
  },
  {
    "en": "securely",
    "es": "de forma segura",
    "c": 4
  },
  {
    "en": "secures",
    "es": "asegura",
    "c": 4
  },
  {
    "en": "securing",
    "es": "asegurando",
    "c": 4
  },
  {
    "en": "securities",
    "es": "valores",
    "c": 4
  },
  {
    "en": "seeking",
    "es": "buscando",
    "c": 4
  },
  {
    "en": "seeks",
    "es": "busca",
    "c": 4
  },
  {
    "en": "selecting",
    "es": "seleccionando",
    "c": 4
  },
  {
    "en": "selection",
    "es": "selección",
    "c": 4
  },
  {
    "en": "selections",
    "es": "selecciones",
    "c": 4
  },
  {
    "en": "selectively",
    "es": "selectivamente",
    "c": 4
  },
  {
    "en": "selector",
    "es": "selector",
    "c": 4
  },
  {
    "en": "selectors",
    "es": "selectores",
    "c": 4
  },
  {
    "en": "selects",
    "es": "selecciona",
    "c": 4
  },
  {
    "en": "sequence",
    "es": "secuencia",
    "c": 4
  },
  {
    "en": "sequenced",
    "es": "secuenciado",
    "c": 4
  },
  {
    "en": "sequences",
    "es": "secuencias",
    "c": 4
  },
  {
    "en": "sequencing",
    "es": "secuenciando",
    "c": 4
  },
  {
    "en": "sequential",
    "es": "secuencial",
    "c": 4
  },
  {
    "en": "sequentially",
    "es": "secuencialmente",
    "c": 4
  },
  {
    "en": "sex",
    "es": "sexo",
    "c": 4
  },
  {
    "en": "sexes",
    "es": "sexos",
    "c": 4
  },
  {
    "en": "sexism",
    "es": "sexismo",
    "c": 4
  },
  {
    "en": "sexual",
    "es": "sexual",
    "c": 4
  },
  {
    "en": "sexually",
    "es": "sexualmente",
    "c": 4
  },
  {
    "en": "shifted",
    "es": "desplazado",
    "c": 4
  },
  {
    "en": "shifting",
    "es": "desplazando",
    "c": 4
  },
  {
    "en": "shifts",
    "es": "desplazamientos",
    "c": 4
  },
  {
    "en": "significantly",
    "es": "significativamente",
    "c": 4
  },
  {
    "en": "signified",
    "es": "significado",
    "c": 4
  },
  {
    "en": "signifies",
    "es": "significa",
    "c": 4
  },
  {
    "en": "signifying",
    "es": "significando",
    "c": 4
  },
  {
    "en": "similarities",
    "es": "similitudes",
    "c": 4
  },
  {
    "en": "similarity",
    "es": "similitud",
    "c": 4
  },
  {
    "en": "similarly",
    "es": "similarmente",
    "c": 4
  },
  {
    "en": "simulated",
    "es": "simulado",
    "c": 4
  },
  {
    "en": "simulates",
    "es": "simula",
    "c": 4
  },
  {
    "en": "simulating",
    "es": "simulando",
    "c": 4
  },
  {
    "en": "sites",
    "es": "sitios",
    "c": 4
  },
  {
    "en": "somewhat",
    "es": "algo",
    "c": 4
  },
  {
    "en": "source",
    "es": "fuente",
    "c": 4
  },
  {
    "en": "sourced",
    "es": "obtenido de",
    "c": 4
  },
  {
    "en": "sources",
    "es": "fuentes",
    "c": 4
  },
  {
    "en": "sourcing",
    "es": "abastecimiento",
    "c": 4
  },
  {
    "en": "specifiable",
    "es": "especificable",
    "c": 4
  },
  {
    "en": "specific",
    "es": "específico",
    "c": 4
  },
  {
    "en": "specifically",
    "es": "específicamente",
    "c": 4
  },
  {
    "en": "specifications",
    "es": "especificaciones",
    "c": 4
  },
  {
    "en": "specificity",
    "es": "especificidad",
    "c": 4
  },
  {
    "en": "specifics",
    "es": "detalles",
    "c": 4
  },
  {
    "en": "specified",
    "es": "especificado",
    "c": 4
  },
  {
    "en": "specifies",
    "es": "especifica",
    "c": 4
  },
  {
    "en": "specifying",
    "es": "especificando",
    "c": 4
  },
  {
    "en": "spheres",
    "es": "esferas",
    "c": 4
  },
  {
    "en": "spherical",
    "es": "esférico",
    "c": 4
  },
  {
    "en": "spherically",
    "es": "esféricamente",
    "c": 4
  },
  {
    "en": "stabilisation",
    "es": "estabilización",
    "c": 4
  },
  {
    "en": "stabilise",
    "es": "estabilizar",
    "c": 4
  },
  {
    "en": "stabilised",
    "es": "estabilizado",
    "c": 4
  },
  {
    "en": "stabilises",
    "es": "estabiliza",
    "c": 4
  },
  {
    "en": "stabilising",
    "es": "estabilizando",
    "c": 4
  },
  {
    "en": "stabilization",
    "es": "estabilización",
    "c": 4
  },
  {
    "en": "stabilized",
    "es": "estabilizado",
    "c": 4
  },
  {
    "en": "stabilizes",
    "es": "estabiliza",
    "c": 4
  },
  {
    "en": "stabilizing",
    "es": "estabilizando",
    "c": 4
  },
  {
    "en": "stable",
    "es": "estable",
    "c": 4
  },
  {
    "en": "statistic",
    "es": "estadística",
    "c": 4
  },
  {
    "en": "statistically",
    "es": "estadísticamente",
    "c": 4
  },
  {
    "en": "statistician",
    "es": "estadístico",
    "c": 4
  },
  {
    "en": "statisticians",
    "es": "estadísticos",
    "c": 4
  },
  {
    "en": "statistics",
    "es": "estadísticas",
    "c": 4
  },
  {
    "en": "status",
    "es": "estado",
    "c": 4
  },
  {
    "en": "strategically",
    "es": "estratégicamente",
    "c": 4
  },
  {
    "en": "strategies",
    "es": "estrategias",
    "c": 4
  },
  {
    "en": "strategist",
    "es": "estratega",
    "c": 4
  },
  {
    "en": "strategists",
    "es": "estrategas",
    "c": 4
  },
  {
    "en": "strategy",
    "es": "estrategia",
    "c": 4
  },
  {
    "en": "stressful",
    "es": "estresante",
    "c": 4
  },
  {
    "en": "structurally",
    "es": "estructuralmente",
    "c": 4
  },
  {
    "en": "structure",
    "es": "estructura",
    "c": 4
  },
  {
    "en": "structured",
    "es": "estructurado",
    "c": 4
  },
  {
    "en": "structures",
    "es": "estructuras",
    "c": 4
  },
  {
    "en": "structuring",
    "es": "estructurando",
    "c": 4
  },
  {
    "en": "styled",
    "es": "estilizado",
    "c": 4
  },
  {
    "en": "styles",
    "es": "estilos",
    "c": 4
  },
  {
    "en": "styling",
    "es": "estilo",
    "c": 4
  },
  {
    "en": "stylise",
    "es": "estilizar",
    "c": 4
  },
  {
    "en": "stylised",
    "es": "estilizado",
    "c": 4
  },
  {
    "en": "stylises",
    "es": "estiliza",
    "c": 4
  },
  {
    "en": "stylish",
    "es": "elegante",
    "c": 4
  },
  {
    "en": "stylising",
    "es": "estilizando",
    "c": 4
  },
  {
    "en": "stylize",
    "es": "estilizar",
    "c": 4
  },
  {
    "en": "stylized",
    "es": "estilizado",
    "c": 4
  },
  {
    "en": "stylizes",
    "es": "estiliza",
    "c": 4
  },
  {
    "en": "stylizing",
    "es": "estilizando",
    "c": 4
  },
  {
    "en": "submissions",
    "es": "presentaciones",
    "c": 4
  },
  {
    "en": "submit",
    "es": "presentar",
    "c": 4
  },
  {
    "en": "submits",
    "es": "presenta",
    "c": 4
  },
  {
    "en": "submitted",
    "es": "presentado",
    "c": 4
  },
  {
    "en": "submitting",
    "es": "presentando",
    "c": 4
  },
  {
    "en": "subordinate",
    "es": "subordinado",
    "c": 4
  },
  {
    "en": "subordinates",
    "es": "subordinados",
    "c": 4
  },
  {
    "en": "subordination",
    "es": "subordinación",
    "c": 4
  },
  {
    "en": "subsidiary",
    "es": "subsidiario",
    "c": 4
  },
  {
    "en": "subsidies",
    "es": "subsidios",
    "c": 4
  },
  {
    "en": "subsidise",
    "es": "subsidiar",
    "c": 4
  },
  {
    "en": "subsidised",
    "es": "subsidiado",
    "c": 4
  },
  {
    "en": "subsidises",
    "es": "subsidia",
    "c": 4
  },
  {
    "en": "subsidising",
    "es": "subsidiando",
    "c": 4
  },
  {
    "en": "subsidize",
    "es": "subsidiar",
    "c": 4
  },
  {
    "en": "subsidized",
    "es": "subsidiado",
    "c": 4
  },
  {
    "en": "subsidizes",
    "es": "subsidia",
    "c": 4
  },
  {
    "en": "subsidizing",
    "es": "subsidiando",
    "c": 4
  },
  {
    "en": "substituted",
    "es": "sustituido",
    "c": 4
  },
  {
    "en": "substitutes",
    "es": "sustitutos",
    "c": 4
  },
  {
    "en": "substituting",
    "es": "sustituyendo",
    "c": 4
  },
  {
    "en": "successions",
    "es": "sucesiones",
    "c": 4
  },
  {
    "en": "successively",
    "es": "sucesivamente",
    "c": 4
  },
  {
    "en": "successors",
    "es": "sucesores",
    "c": 4
  },
  {
    "en": "sufficiency",
    "es": "suficiencia",
    "c": 4
  },
  {
    "en": "summaries",
    "es": "resúmenes",
    "c": 4
  },
  {
    "en": "summarisation",
    "es": "resumen",
    "c": 4
  },
  {
    "en": "summarisations",
    "es": "resúmenes",
    "c": 4
  },
  {
    "en": "summarised",
    "es": "resumido",
    "c": 4
  },
  {
    "en": "summarises",
    "es": "resume",
    "c": 4
  },
  {
    "en": "summarising",
    "es": "resumiendo",
    "c": 4
  },
  {
    "en": "summarization",
    "es": "resumen",
    "c": 4
  },
  {
    "en": "summarizations",
    "es": "resúmenes",
    "c": 4
  },
  {
    "en": "summarize",
    "es": "resumir",
    "c": 4
  },
  {
    "en": "summarized",
    "es": "resumido",
    "c": 4
  },
  {
    "en": "summarizes",
    "es": "resume",
    "c": 4
  },
  {
    "en": "summarizing",
    "es": "resumiendo",
    "c": 4
  },
  {
    "en": "summation",
    "es": "sumatoria",
    "c": 4
  },
  {
    "en": "summed",
    "es": "sumado",
    "c": 4
  },
  {
    "en": "summing",
    "es": "sumando",
    "c": 4
  },
  {
    "en": "sums",
    "es": "sumas",
    "c": 4
  },
  {
    "en": "supplementary",
    "es": "suplementario",
    "c": 4
  },
  {
    "en": "supplemented",
    "es": "suplementado",
    "c": 4
  },
  {
    "en": "supplementing",
    "es": "suplementando",
    "c": 4
  },
  {
    "en": "supplements",
    "es": "suplementos",
    "c": 4
  },
  {
    "en": "surveyed",
    "es": "encuestado",
    "c": 4
  },
  {
    "en": "surveying",
    "es": "encuestando",
    "c": 4
  },
  {
    "en": "surveys",
    "es": "encuestas",
    "c": 4
  },
  {
    "en": "survives",
    "es": "sobrevive",
    "c": 4
  },
  {
    "en": "surviving",
    "es": "sobreviviendo",
    "c": 4
  },
  {
    "en": "survivors",
    "es": "sobrevivientes",
    "c": 4
  },
  {
    "en": "suspending",
    "es": "suspendiendo",
    "c": 4
  },
  {
    "en": "suspends",
    "es": "suspende",
    "c": 4
  },
  {
    "en": "sustainability",
    "es": "sostenibilidad",
    "c": 4
  },
  {
    "en": "sustained",
    "es": "sostenido",
    "c": 4
  },
  {
    "en": "sustaining",
    "es": "sosteniendo",
    "c": 4
  },
  {
    "en": "sustains",
    "es": "sostiene",
    "c": 4
  },
  {
    "en": "sustenance",
    "es": "sustento",
    "c": 4
  },
  {
    "en": "symbol",
    "es": "símbolo",
    "c": 4
  },
  {
    "en": "symbolically",
    "es": "simbólicamente",
    "c": 4
  },
  {
    "en": "symbolise",
    "es": "simbolizar",
    "c": 4
  },
  {
    "en": "symbolised",
    "es": "simbolizado",
    "c": 4
  },
  {
    "en": "symbolises",
    "es": "simboliza",
    "c": 4
  },
  {
    "en": "symbolising",
    "es": "simbolizando",
    "c": 4
  },
  {
    "en": "symbolism",
    "es": "simbolismo",
    "c": 4
  },
  {
    "en": "symbolize",
    "es": "simbolizar",
    "c": 4
  },
  {
    "en": "symbolized",
    "es": "simbolizado",
    "c": 4
  },
  {
    "en": "symbolizes",
    "es": "simboliza",
    "c": 4
  },
  {
    "en": "symbolizing",
    "es": "simbolizando",
    "c": 4
  },
  {
    "en": "symbols",
    "es": "símbolos",
    "c": 4
  },
  {
    "en": "taped",
    "es": "grabado",
    "c": 4
  },
  {
    "en": "tapes",
    "es": "cintas",
    "c": 4
  },
  {
    "en": "taping",
    "es": "grabando",
    "c": 4
  },
  {
    "en": "targeted",
    "es": "dirigido",
    "c": 4
  },
  {
    "en": "targeting",
    "es": "dirigiendo",
    "c": 4
  },
  {
    "en": "targets",
    "es": "objetivos",
    "c": 4
  },
  {
    "en": "teamed",
    "es": "formado equipo",
    "c": 4
  },
  {
    "en": "teaming",
    "es": "formando equipo",
    "c": 4
  },
  {
    "en": "teams",
    "es": "equipos",
    "c": 4
  },
  {
    "en": "technical",
    "es": "técnico",
    "c": 4
  },
  {
    "en": "technically",
    "es": "técnicamente",
    "c": 4
  },
  {
    "en": "techniques",
    "es": "técnicas",
    "c": 4
  },
  {
    "en": "technologically",
    "es": "tecnológicamente",
    "c": 4
  },
  {
    "en": "tensely",
    "es": "tensamente",
    "c": 4
  },
  {
    "en": "tenser",
    "es": "más tenso",
    "c": 4
  },
  {
    "en": "tensest",
    "es": "más tenso",
    "c": 4
  },
  {
    "en": "tensions",
    "es": "tensiones",
    "c": 4
  },
  {
    "en": "terminals",
    "es": "terminales",
    "c": 4
  },
  {
    "en": "terminated",
    "es": "terminado",
    "c": 4
  },
  {
    "en": "terminates",
    "es": "termina",
    "c": 4
  },
  {
    "en": "terminating",
    "es": "terminando",
    "c": 4
  },
  {
    "en": "termination",
    "es": "terminación",
    "c": 4
  },
  {
    "en": "terminations",
    "es": "terminaciones",
    "c": 4
  },
  {
    "en": "texts",
    "es": "textos",
    "c": 4
  },
  {
    "en": "textual",
    "es": "textual",
    "c": 4
  },
  {
    "en": "thematic",
    "es": "temático",
    "c": 4
  },
  {
    "en": "thematically",
    "es": "temáticamente",
    "c": 4
  },
  {
    "en": "themes",
    "es": "temas",
    "c": 4
  },
  {
    "en": "theoretically",
    "es": "teóricamente",
    "c": 4
  },
  {
    "en": "theories",
    "es": "teorías",
    "c": 4
  },
  {
    "en": "theorist",
    "es": "teórico",
    "c": 4
  },
  {
    "en": "theorists",
    "es": "teóricos",
    "c": 4
  },
  {
    "en": "theory",
    "es": "teoría",
    "c": 4
  },
  {
    "en": "theses",
    "es": "tesis",
    "c": 4
  },
  {
    "en": "topical",
    "es": "tópico",
    "c": 4
  },
  {
    "en": "topics",
    "es": "temas",
    "c": 4
  },
  {
    "en": "traceable",
    "es": "rastreable",
    "c": 4
  },
  {
    "en": "traces",
    "es": "rastros",
    "c": 4
  },
  {
    "en": "tracing",
    "es": "rastreando",
    "c": 4
  },
  {
    "en": "tradition",
    "es": "tradición",
    "c": 4
  },
  {
    "en": "traditionalist",
    "es": "tradicionalista",
    "c": 4
  },
  {
    "en": "traditionally",
    "es": "tradicionalmente",
    "c": 4
  },
  {
    "en": "traditions",
    "es": "tradiciones",
    "c": 4
  },
  {
    "en": "transferable",
    "es": "transferible",
    "c": 4
  },
  {
    "en": "transference",
    "es": "transferencia",
    "c": 4
  },
  {
    "en": "transferring",
    "es": "transfiriendo",
    "c": 4
  },
  {
    "en": "transfers",
    "es": "transferencias",
    "c": 4
  },
  {
    "en": "transform",
    "es": "transformar",
    "c": 4
  },
  {
    "en": "transformations",
    "es": "transformaciones",
    "c": 4
  },
  {
    "en": "transformed",
    "es": "transformado",
    "c": 4
  },
  {
    "en": "transforming",
    "es": "transformando",
    "c": 4
  },
  {
    "en": "transforms",
    "es": "transforma",
    "c": 4
  },
  {
    "en": "transited",
    "es": "transitado",
    "c": 4
  },
  {
    "en": "transiting",
    "es": "transitando",
    "c": 4
  },
  {
    "en": "transition",
    "es": "transición",
    "c": 4
  },
  {
    "en": "transitional",
    "es": "transicional",
    "c": 4
  },
  {
    "en": "transitions",
    "es": "transiciones",
    "c": 4
  },
  {
    "en": "transitory",
    "es": "transitorio",
    "c": 4
  },
  {
    "en": "transits",
    "es": "tránsitos",
    "c": 4
  },
  {
    "en": "transmissions",
    "es": "transmisiones",
    "c": 4
  },
  {
    "en": "transmits",
    "es": "transmite",
    "c": 4
  },
  {
    "en": "transmitted",
    "es": "transmitido",
    "c": 4
  },
  {
    "en": "transmitting",
    "es": "transmitiendo",
    "c": 4
  },
  {
    "en": "transportation",
    "es": "transporte",
    "c": 4
  },
  {
    "en": "transported",
    "es": "transportado",
    "c": 4
  },
  {
    "en": "transporter",
    "es": "transportador",
    "c": 4
  },
  {
    "en": "transporters",
    "es": "transportadores",
    "c": 4
  },
  {
    "en": "transporting",
    "es": "transportando",
    "c": 4
  },
  {
    "en": "transports",
    "es": "transportes",
    "c": 4
  },
  {
    "en": "trends",
    "es": "tendencias",
    "c": 4
  },
  {
    "en": "triggered",
    "es": "activado",
    "c": 4
  },
  {
    "en": "triggering",
    "es": "activando",
    "c": 4
  },
  {
    "en": "triggers",
    "es": "activadores",
    "c": 4
  },
  {
    "en": "ultimately",
    "es": "finalmente",
    "c": 4
  },
  {
    "en": "unaccompanied",
    "es": "no acompañado",
    "c": 4
  },
  {
    "en": "unaffected",
    "es": "no afectado",
    "c": 4
  },
  {
    "en": "unaided",
    "es": "sin ayuda",
    "c": 4
  },
  {
    "en": "unalterable",
    "es": "inalterable",
    "c": 4
  },
  {
    "en": "unaltered",
    "es": "inalterado",
    "c": 4
  },
  {
    "en": "unambiguous",
    "es": "inequívoco",
    "c": 4
  },
  {
    "en": "unambiguously",
    "es": "inequívocamente",
    "c": 4
  },
  {
    "en": "unanticipated",
    "es": "no anticipado",
    "c": 4
  },
  {
    "en": "unappreciated",
    "es": "no apreciado",
    "c": 4
  },
  {
    "en": "unapproachable",
    "es": "inaccesible",
    "c": 4
  },
  {
    "en": "unassessed",
    "es": "no evaluado",
    "c": 4
  },
  {
    "en": "unassigned",
    "es": "no asignado",
    "c": 4
  },
  {
    "en": "unassisted",
    "es": "sin asistencia",
    "c": 4
  },
  {
    "en": "unattached",
    "es": "no adjunto",
    "c": 4
  },
  {
    "en": "unattainable",
    "es": "inalcanzable",
    "c": 4
  },
  {
    "en": "unbiased",
    "es": "imparcial",
    "c": 4
  },
  {
    "en": "uncharted",
    "es": "inexplorado",
    "c": 4
  },
  {
    "en": "uncommunicative",
    "es": "incomunicativo",
    "c": 4
  },
  {
    "en": "unconfined",
    "es": "no confinado",
    "c": 4
  },
  {
    "en": "unconstrained",
    "es": "sin restricciones",
    "c": 4
  },
  {
    "en": "uncontextualised",
    "es": "no contextualizado",
    "c": 4
  },
  {
    "en": "uncontextualized",
    "es": "no contextualizado",
    "c": 4
  },
  {
    "en": "uncontroversial",
    "es": "no controvertido",
    "c": 4
  },
  {
    "en": "unconventional",
    "es": "no convencional",
    "c": 4
  },
  {
    "en": "uncultured",
    "es": "inculto",
    "c": 4
  },
  {
    "en": "undefined",
    "es": "indefinido",
    "c": 4
  },
  {
    "en": "undeniable",
    "es": "innegable",
    "c": 4
  },
  {
    "en": "underestimated",
    "es": "subestimado",
    "c": 4
  },
  {
    "en": "underestimates",
    "es": "subestima",
    "c": 4
  },
  {
    "en": "underestimating",
    "es": "subestimando",
    "c": 4
  },
  {
    "en": "undergoes",
    "es": "se somete a",
    "c": 4
  },
  {
    "en": "undergoing",
    "es": "sometiéndose a",
    "c": 4
  },
  {
    "en": "undergone",
    "es": "sometido a",
    "c": 4
  },
  {
    "en": "underlay",
    "es": "subyacer",
    "c": 4
  },
  {
    "en": "underlie",
    "es": "subyacer",
    "c": 4
  },
  {
    "en": "underlies",
    "es": "subyace",
    "c": 4
  },
  {
    "en": "under-resourced",
    "es": "con pocos recursos",
    "c": 4
  },
  {
    "en": "undertakes",
    "es": "emprende",
    "c": 4
  },
  {
    "en": "undertaking",
    "es": "emprendimiento",
    "c": 4
  },
  {
    "en": "underwent",
    "es": "se sometió a",
    "c": 4
  },
  {
    "en": "undiminished",
    "es": "sin disminuir",
    "c": 4
  },
  {
    "en": "uneconomical",
    "es": "antieconómico",
    "c": 4
  },
  {
    "en": "unethical",
    "es": "poco ético",
    "c": 4
  },
  {
    "en": "unfounded",
    "es": "infundado",
    "c": 4
  },
  {
    "en": "unidentifiable",
    "es": "no identificable",
    "c": 4
  },
  {
    "en": "unification",
    "es": "unificación",
    "c": 4
  },
  {
    "en": "unified",
    "es": "unificado",
    "c": 4
  },
  {
    "en": "unifies",
    "es": "unifica",
    "c": 4
  },
  {
    "en": "uniformity",
    "es": "uniformidad",
    "c": 4
  },
  {
    "en": "uniformly",
    "es": "uniformemente",
    "c": 4
  },
  {
    "en": "unifying",
    "es": "unificando",
    "c": 4
  },
  {
    "en": "uninjured",
    "es": "ileso",
    "c": 4
  },
  {
    "en": "unintelligent",
    "es": "poco inteligente",
    "c": 4
  },
  {
    "en": "uninvolved",
    "es": "no involucrado",
    "c": 4
  },
  {
    "en": "unique",
    "es": "único",
    "c": 4
  },
  {
    "en": "uniquely",
    "es": "únicamente",
    "c": 4
  },
  {
    "en": "uniqueness",
    "es": "singularidad",
    "c": 4
  },
  {
    "en": "unjustified",
    "es": "injustificado",
    "c": 4
  },
  {
    "en": "unlicensed",
    "es": "sin licencia",
    "c": 4
  },
  {
    "en": "unmodified",
    "es": "no modificado",
    "c": 4
  },
  {
    "en": "unmonitored",
    "es": "no monitoreado",
    "c": 4
  },
  {
    "en": "unmotivated",
    "es": "desmotivado",
    "c": 4
  },
  {
    "en": "unobtainable",
    "es": "inalcanzable",
    "c": 4
  },
  {
    "en": "unparalleled",
    "es": "sin paralelo",
    "c": 4
  },
  {
    "en": "unpredictability",
    "es": "imprevisibilidad",
    "c": 4
  },
  {
    "en": "unpredictable",
    "es": "imprevisible",
    "c": 4
  },
  {
    "en": "unprincipled",
    "es": "sin principios",
    "c": 4
  },
  {
    "en": "unpublished",
    "es": "no publicado",
    "c": 4
  },
  {
    "en": "unregulated",
    "es": "no regulado",
    "c": 4
  },
  {
    "en": "unresolved",
    "es": "sin resolver",
    "c": 4
  },
  {
    "en": "unresourceful",
    "es": "sin recursos",
    "c": 4
  },
  {
    "en": "unresponsive",
    "es": "poco receptivo",
    "c": 4
  },
  {
    "en": "unrestrained",
    "es": "sin restricciones",
    "c": 4
  },
  {
    "en": "unrestricted",
    "es": "sin restricciones",
    "c": 4
  },
  {
    "en": "unrestrictive",
    "es": "no restrictivo",
    "c": 4
  },
  {
    "en": "unscheduled",
    "es": "no programado",
    "c": 4
  },
  {
    "en": "unspecified",
    "es": "no especificado",
    "c": 4
  },
  {
    "en": "unstressed",
    "es": "sin énfasis",
    "c": 4
  },
  {
    "en": "unstructured",
    "es": "no estructurado",
    "c": 4
  },
  {
    "en": "unsustainable",
    "es": "insostenible",
    "c": 4
  },
  {
    "en": "utilisation",
    "es": "utilización",
    "c": 4
  },
  {
    "en": "utilise",
    "es": "utilizar",
    "c": 4
  },
  {
    "en": "utilised",
    "es": "utilizado",
    "c": 4
  },
  {
    "en": "utiliser",
    "es": "utilizador",
    "c": 4
  },
  {
    "en": "utilisers",
    "es": "utilizadores",
    "c": 4
  },
  {
    "en": "utilises",
    "es": "utiliza",
    "c": 4
  },
  {
    "en": "utilising",
    "es": "utilizando",
    "c": 4
  },
  {
    "en": "utilities",
    "es": "utilidades",
    "c": 4
  },
  {
    "en": "utilization",
    "es": "utilización",
    "c": 4
  },
  {
    "en": "utilized",
    "es": "utilizado",
    "c": 4
  },
  {
    "en": "utilizes",
    "es": "utiliza",
    "c": 4
  },
  {
    "en": "utilizing",
    "es": "utilizando",
    "c": 4
  },
  {
    "en": "validate",
    "es": "validar",
    "c": 4
  },
  {
    "en": "validated",
    "es": "validado",
    "c": 4
  },
  {
    "en": "validating",
    "es": "validando",
    "c": 4
  },
  {
    "en": "validation",
    "es": "validación",
    "c": 4
  },
  {
    "en": "validly",
    "es": "válidamente",
    "c": 4
  },
  {
    "en": "variability",
    "es": "variabilidad",
    "c": 4
  },
  {
    "en": "variables",
    "es": "variables",
    "c": 4
  },
  {
    "en": "variably",
    "es": "variablemente",
    "c": 4
  },
  {
    "en": "variance",
    "es": "varianza",
    "c": 4
  },
  {
    "en": "variant",
    "es": "variante",
    "c": 4
  },
  {
    "en": "variants",
    "es": "variantes",
    "c": 4
  },
  {
    "en": "variations",
    "es": "variaciones",
    "c": 4
  },
  {
    "en": "varies",
    "es": "varía",
    "c": 4
  },
  {
    "en": "varying",
    "es": "variando",
    "c": 4
  },
  {
    "en": "vehicles",
    "es": "vehículos",
    "c": 4
  },
  {
    "en": "version",
    "es": "versión",
    "c": 4
  },
  {
    "en": "versions",
    "es": "versiones",
    "c": 4
  },
  {
    "en": "via",
    "es": "vía",
    "c": 4
  },
  {
    "en": "violates",
    "es": "viola",
    "c": 4
  },
  {
    "en": "violating",
    "es": "violando",
    "c": 4
  },
  {
    "en": "violations",
    "es": "violaciones",
    "c": 4
  },
  {
    "en": "virtual",
    "es": "virtual",
    "c": 4
  },
  {
    "en": "virtually",
    "es": "virtualmente",
    "c": 4
  },
  {
    "en": "visibility",
    "es": "visibilidad",
    "c": 4
  },
  {
    "en": "visibly",
    "es": "visiblemente",
    "c": 4
  },
  {
    "en": "vision",
    "es": "visión",
    "c": 4
  },
  {
    "en": "visions",
    "es": "visiones",
    "c": 4
  },
  {
    "en": "visual",
    "es": "visual",
    "c": 4
  },
  {
    "en": "visualisation",
    "es": "visualización",
    "c": 4
  },
  {
    "en": "visualise",
    "es": "visualizar",
    "c": 4
  },
  {
    "en": "visualised",
    "es": "visualizado",
    "c": 4
  },
  {
    "en": "visualising",
    "es": "visualizando",
    "c": 4
  },
  {
    "en": "visualization",
    "es": "visualización",
    "c": 4
  },
  {
    "en": "visualize",
    "es": "visualizar",
    "c": 4
  },
  {
    "en": "visualized",
    "es": "visualizado",
    "c": 4
  },
  {
    "en": "visualizing",
    "es": "visualizando",
    "c": 4
  },
  {
    "en": "visually",
    "es": "visualmente",
    "c": 4
  },
  {
    "en": "volume",
    "es": "volumen",
    "c": 4
  },
  {
    "en": "volumes",
    "es": "volúmenes",
    "c": 4
  },
  {
    "en": "voluntarily",
    "es": "voluntariamente",
    "c": 4
  },
  {
    "en": "volunteer",
    "es": "voluntario",
    "c": 4
  },
  {
    "en": "volunteered",
    "es": "ofrecido como voluntario",
    "c": 4
  },
  {
    "en": "volunteering",
    "es": "haciendo voluntariado",
    "c": 4
  },
  {
    "en": "volunteers",
    "es": "voluntarios",
    "c": 4
  },
  {
    "en": "About",
    "es": "Sobre/alrededor",
    "c": 4
  },
  {
    "en": "All right/alright",
    "es": "Bien, correcto, de acuerdo, vale",
    "c": 4
  },
  {
    "en": "Back",
    "es": "Espalda/apoyar/atrás",
    "c": 4
  },
  {
    "en": "Build",
    "es": "Construir",
    "c": 4
  },
  {
    "en": "Building",
    "es": "Construcción, edificio",
    "c": 4
  },
  {
    "en": "Burger",
    "es": "Hamburguesa",
    "c": 4
  },
  {
    "en": "Burn",
    "es": "Quemar, arder, quemadura",
    "c": 4
  },
  {
    "en": "Bus",
    "es": "Autobús",
    "c": 4
  },
  {
    "en": "Bus station",
    "es": "Estación de autobuses",
    "c": 4
  },
  {
    "en": "Bus stop",
    "es": "Parada de autobús",
    "c": 4
  },
  {
    "en": "Business",
    "es": "Negocios",
    "c": 4
  },
  {
    "en": "Busy",
    "es": "Ocupado",
    "c": 4
  },
  {
    "en": "But",
    "es": "Pero",
    "c": 4
  },
  {
    "en": "Butter",
    "es": "Mantequilla",
    "c": 4
  },
  {
    "en": "Buy",
    "es": "Comprar",
    "c": 4
  },
  {
    "en": "By",
    "es": "Por medio de, junto a",
    "c": 4
  },
  {
    "en": "Café",
    "es": "Café (lugar)",
    "c": 4
  },
  {
    "en": "Cake",
    "es": "Pastel",
    "c": 4
  },
  {
    "en": "Call",
    "es": "Llamar, llamada",
    "c": 4
  },
  {
    "en": "Camel",
    "es": "Camello",
    "c": 4
  },
  {
    "en": "Camera",
    "es": "Cámara",
    "c": 4
  },
  {
    "en": "Camp",
    "es": "Campamento, acampar",
    "c": 4
  },
  {
    "en": "Campsite",
    "es": "Un camping",
    "c": 4
  },
  {
    "en": "Can",
    "es": "Poder, ser capaz, lata, enlatar",
    "c": 4
  },
  {
    "en": "Canal",
    "es": "Canal",
    "c": 4
  },
  {
    "en": "Cap",
    "es": "Gorra, chapa de botella, limitar por arriba, rematar, coronar (figurado)",
    "c": 4
  },
  {
    "en": "Car",
    "es": "Coche",
    "c": 4
  },
  {
    "en": "Card",
    "es": "Tarjeta",
    "c": 4
  },
  {
    "en": "Career",
    "es": "Carrera profesional",
    "c": 4
  },
  {
    "en": "Careful",
    "es": "Cuidadoso",
    "c": 4
  },
  {
    "en": "Carpet",
    "es": "Alfombra",
    "c": 4
  },
  {
    "en": "Carrot",
    "es": "Zanahoria",
    "c": 4
  },
  {
    "en": "Carry",
    "es": "Transportar",
    "c": 4
  },
  {
    "en": "Cartoon",
    "es": "Caricatura, dibujos animados",
    "c": 4
  },
  {
    "en": "Cash",
    "es": "Dinero en efectivo, hacer efectivo",
    "c": 4
  },
  {
    "en": "Castle",
    "es": "Castillo",
    "c": 4
  },
  {
    "en": "Cat",
    "es": "Gato",
    "c": 4
  },
  {
    "en": "Catch",
    "es": "Coger al vuelo, atrapar",
    "c": 4
  },
  {
    "en": "Cathedral",
    "es": "Catedral",
    "c": 4
  },
  {
    "en": "Cent",
    "es": "Céntimo",
    "c": 4
  },
  {
    "en": "Centimetre",
    "es": "Centímetro",
    "c": 4
  },
  {
    "en": "Centre",
    "es": "Centro",
    "c": 4
  },
  {
    "en": "Century",
    "es": "Siglo",
    "c": 4
  },
  {
    "en": "Certain",
    "es": "Cierto, seguro",
    "c": 4
  },
  {
    "en": "Chair",
    "es": "Silla",
    "c": 4
  },
  {
    "en": "Change",
    "es": "Cambio",
    "c": 4
  },
  {
    "en": "Channel",
    "es": "Canal tv",
    "c": 4
  },
  {
    "en": "Chat",
    "es": "Conversación, parlotear",
    "c": 4
  },
  {
    "en": "Chatroom",
    "es": "Salón de chat",
    "c": 4
  },
  {
    "en": "Cheap",
    "es": "Barato",
    "c": 4
  },
  {
    "en": "Check",
    "es": "Revisar, comprobar",
    "c": 4
  },
  {
    "en": "Cheers!",
    "es": "¡Salud!",
    "c": 4
  },
  {
    "en": "Cheese",
    "es": "Queso",
    "c": 4
  },
  {
    "en": "Chemist",
    "es": "Farmacéutico",
    "c": 4
  },
  {
    "en": "Cheque",
    "es": "Talón bancario",
    "c": 4
  },
  {
    "en": "Chicken",
    "es": "Pollo",
    "c": 4
  },
  {
    "en": "Child",
    "es": "Niño, niña",
    "c": 4
  },
  {
    "en": "Chips",
    "es": "Patatas fritas",
    "c": 4
  },
  {
    "en": "Chocolate",
    "es": "Chocolate",
    "c": 4
  },
  {
    "en": "Choose",
    "es": "Elegir",
    "c": 4
  },
  {
    "en": "Church",
    "es": "Iglesia",
    "c": 4
  },
  {
    "en": "Cinema",
    "es": "Cine",
    "c": 4
  },
  {
    "en": "Circus",
    "es": "Circo, plaza redonda",
    "c": 4
  },
  {
    "en": "City",
    "es": "Ciudad",
    "c": 4
  },
  {
    "en": "Class",
    "es": "Clase",
    "c": 4
  },
  {
    "en": "Class member",
    "es": "Miembro de clase",
    "c": 4
  },
  {
    "en": "Classical",
    "es": "Clásico",
    "c": 4
  },
  {
    "en": "Classmate",
    "es": "Compañero de clase",
    "c": 4
  },
  {
    "en": "Classroom",
    "es": "Aula",
    "c": 4
  },
  {
    "en": "Clean",
    "es": "Limpio",
    "c": 4
  },
  {
    "en": "Clear",
    "es": "Claro",
    "c": 4
  },
  {
    "en": "Clever",
    "es": "Inteligente, listo",
    "c": 4
  },
  {
    "en": "Click",
    "es": "Hacer clic, disparar una cámara",
    "c": 4
  },
  {
    "en": "Climb",
    "es": "Escalar",
    "c": 4
  },
  {
    "en": "Clock",
    "es": "Reloj de pared",
    "c": 4
  },
  {
    "en": "Close",
    "es": "Cerrar, cercano",
    "c": 4
  },
  {
    "en": "Clothes",
    "es": "Ropas",
    "c": 4
  },
  {
    "en": "Cloud",
    "es": "Nube",
    "c": 4
  },
  {
    "en": "Cloudy",
    "es": "Nublado",
    "c": 4
  },
  {
    "en": "Clown",
    "es": "Payaso",
    "c": 4
  },
  {
    "en": "Club",
    "es": "Club, garrote",
    "c": 4
  },
  {
    "en": "Coach",
    "es": "Entrenador, diligencia, autobús interurbano, entrenar a otros",
    "c": 4
  },
  {
    "en": "Coat",
    "es": "Abrigo, capa de pintura",
    "c": 4
  },
  {
    "en": "Coffee",
    "es": "Café (que se bebe)",
    "c": 4
  },
  {
    "en": "Cold",
    "es": "Frio, resfriado",
    "c": 4
  },
  {
    "en": "Collect",
    "es": "Recolectar, coleccionar",
    "c": 4
  },
  {
    "en": "College",
    "es": "Facultad",
    "c": 4
  },
  {
    "en": "Colour",
    "es": "Color, colorear",
    "c": 4
  },
  {
    "en": "Comb",
    "es": "Peine, peinar",
    "c": 4
  },
  {
    "en": "Come",
    "es": "Venir",
    "c": 4
  },
  {
    "en": "Comfortable",
    "es": "Cómodo",
    "c": 4
  },
  {
    "en": "Company",
    "es": "Compañía",
    "c": 4
  },
  {
    "en": "Competition",
    "es": "Competición",
    "c": 4
  },
  {
    "en": "Computer",
    "es": "Ordenador",
    "c": 4
  },
  {
    "en": "Concert",
    "es": "Concierto",
    "c": 4
  },
  {
    "en": "Congratulations!",
    "es": "¡Felicidades!",
    "c": 4
  },
  {
    "en": "Conversation",
    "es": "Conversación",
    "c": 4
  },
  {
    "en": "Cook",
    "es": "Cocinar, cocinero",
    "c": 4
  },
  {
    "en": "Cooker",
    "es": "Aparato de cocina",
    "c": 4
  },
  {
    "en": "Corner",
    "es": "Esquina, rincón",
    "c": 4
  },
  {
    "en": "Correct",
    "es": "Correcto",
    "c": 4
  },
  {
    "en": "Cost",
    "es": "Costar, coste",
    "c": 4
  },
  {
    "en": "Could",
    "es": "Podría",
    "c": 4
  },
  {
    "en": "Country",
    "es": "País, territorio",
    "c": 4
  },
  {
    "en": "Countryside",
    "es": "El campo, la campiña",
    "c": 4
  },
  {
    "en": "Course",
    "es": "Rumbo, curso, trayectoria",
    "c": 4
  },
  {
    "en": "Cousin",
    "es": "Primo/a",
    "c": 4
  },
  {
    "en": "Cow",
    "es": "Vaca",
    "c": 4
  },
  {
    "en": "Cream",
    "es": "Nata, crema",
    "c": 4
  },
  {
    "en": "Credit card",
    "es": "Tarjeta de credito",
    "c": 4
  },
  {
    "en": "Cross",
    "es": "Cruz, cruce, cruzar, enojado",
    "c": 4
  },
  {
    "en": "Crossing",
    "es": "Travesía, cruce",
    "c": 4
  },
  {
    "en": "Crossroads",
    "es": "Cruce de caminos",
    "c": 4
  },
  {
    "en": "Crowd",
    "es": "Multitud",
    "c": 4
  },
  {
    "en": "Crowded",
    "es": "Abarrotado",
    "c": 4
  },
  {
    "en": "Cry",
    "es": "Llorar",
    "c": 4
  },
  {
    "en": "Cup",
    "es": "Taza, copa",
    "c": 4
  },
  {
    "en": "Cupboard",
    "es": "Armario",
    "c": 4
  },
  {
    "en": "Curtain",
    "es": "Cortina, telón, enmascarar, cubrir",
    "c": 4
  },
  {
    "en": "Customer",
    "es": "Cliente",
    "c": 4
  },
  {
    "en": "Cut",
    "es": "Cortar, corte",
    "c": 4
  },
  {
    "en": "Cycle",
    "es": "Bicicleta, pedalear",
    "c": 4
  },
  {
    "en": "Dad",
    "es": "Papá",
    "c": 4
  },
  {
    "en": "Daily",
    "es": "Diariamente",
    "c": 4
  },
  {
    "en": "Dance",
    "es": "Bailar, baile",
    "c": 4
  },
  {
    "en": "Dancing",
    "es": "El baile",
    "c": 4
  },
  {
    "en": "Danger",
    "es": "Peligro",
    "c": 4
  },
  {
    "en": "Dangerous",
    "es": "Peligroso",
    "c": 4
  },
  {
    "en": "Dark",
    "es": "Oscuro",
    "c": 4
  },
  {
    "en": "Date",
    "es": "Fecha, dátil, cita",
    "c": 4
  },
  {
    "en": "Daughter",
    "es": "Hija",
    "c": 4
  },
  {
    "en": "Day",
    "es": "Día",
    "c": 4
  },
  {
    "en": "Dead",
    "es": "Muerto",
    "c": 4
  },
  {
    "en": "Dear",
    "es": "Querido, caro",
    "c": 4
  },
  {
    "en": "Decide",
    "es": "Decidir",
    "c": 4
  },
  {
    "en": "Degree",
    "es": "Grado (de temperatura)",
    "c": 4
  },
  {
    "en": "Delay",
    "es": "Retrasar, retraso",
    "c": 4
  },
  {
    "en": "Dentist",
    "es": "Dentista",
    "c": 4
  },
  {
    "en": "Department",
    "es": "Departamento",
    "c": 4
  },
  {
    "en": "Describe",
    "es": "Describir",
    "c": 4
  },
  {
    "en": "Desk",
    "es": "Pupitre, mesa de despacho",
    "c": 4
  },
  {
    "en": "Dairy",
    "es": "Productos de granja diarios como leche y huevos",
    "c": 4
  },
  {
    "en": "Dictionary",
    "es": "Diccionario",
    "c": 4
  },
  {
    "en": "Die",
    "es": "Morir, dado",
    "c": 4
  },
  {
    "en": "Difference",
    "es": "Diferencia",
    "c": 4
  },
  {
    "en": "Different",
    "es": "Diferente",
    "c": 4
  },
  {
    "en": "Difficult",
    "es": "Difícil",
    "c": 4
  },
  {
    "en": "Digital",
    "es": "Digital",
    "c": 4
  },
  {
    "en": "Dining room",
    "es": "Comedor",
    "c": 4
  },
  {
    "en": "Dinner",
    "es": "Cena",
    "c": 4
  },
  {
    "en": "Dinosaur",
    "es": "Dinosaurio",
    "c": 4
  },
  {
    "en": "Diploma",
    "es": "Diploma",
    "c": 4
  },
  {
    "en": "Dirty",
    "es": "Sucio",
    "c": 4
  },
  {
    "en": "Disco",
    "es": "Discoteca",
    "c": 4
  },
  {
    "en": "Discount",
    "es": "Descuento, descontar",
    "c": 4
  },
  {
    "en": "Dish",
    "es": "Plato",
    "c": 4
  },
  {
    "en": "Do the washing up",
    "es": "Lavar los platos",
    "c": 4
  },
  {
    "en": "Do",
    "es": "Hacer",
    "c": 4
  },
  {
    "en": "Doctor/Dr",
    "es": "Doctor",
    "c": 4
  },
  {
    "en": "Dog",
    "es": "Perro",
    "c": 4
  },
  {
    "en": "Dollar",
    "es": "Dolar",
    "c": 4
  },
  {
    "en": "Dolphin",
    "es": "Delfín",
    "c": 4
  },
  {
    "en": "Door",
    "es": "Puerta",
    "c": 4
  },
  {
    "en": "Double",
    "es": "Doble",
    "c": 4
  },
  {
    "en": "Down",
    "es": "Abajo, pelusa",
    "c": 4
  },
  {
    "en": "Downstairs",
    "es": "Abajo, planta de abajo",
    "c": 4
  },
  {
    "en": "Dozen",
    "es": "Docena",
    "c": 4
  },
  {
    "en": "Drama",
    "es": "Drama",
    "c": 4
  },
  {
    "en": "Draw",
    "es": "Dibujar, atraer hacia sí",
    "c": 4
  },
  {
    "en": "Drawer",
    "es": "Dibujante, cajón",
    "c": 4
  },
  {
    "en": "Drawing",
    "es": "Dibujo",
    "c": 4
  },
  {
    "en": "Dream",
    "es": "Soñar",
    "c": 4
  },
  {
    "en": "Dress",
    "es": "Vestido",
    "c": 4
  },
  {
    "en": "Dressing",
    "es": "Vendaje, aliño",
    "c": 4
  },
  {
    "en": "Drink",
    "es": "Beber",
    "c": 4
  },
  {
    "en": "Drive",
    "es": "Conducir",
    "c": 4
  },
  {
    "en": "Driving licence",
    "es": "Carnet de conducir",
    "c": 4
  },
  {
    "en": "Drop",
    "es": "Dejar caer, gota",
    "c": 4
  },
  {
    "en": "Drugstore",
    "es": "Farmacia",
    "c": 4
  },
  {
    "en": "Drum",
    "es": "Tambor",
    "c": 4
  },
  {
    "en": "Dry",
    "es": "Seco, secar",
    "c": 4
  },
  {
    "en": "Dry cleaning",
    "es": "Limpieza en seco, tintorería",
    "c": 4
  },
  {
    "en": "Duck",
    "es": "Pato, agacharse",
    "c": 4
  },
  {
    "en": "Due",
    "es": "Debido",
    "c": 4
  },
  {
    "en": "Due to",
    "es": "Debido a, tener que",
    "c": 4
  },
  {
    "en": "Dull",
    "es": "Opaco, soso, romo, apagado",
    "c": 4
  },
  {
    "en": "During",
    "es": "Durante",
    "c": 4
  },
  {
    "en": "Dust",
    "es": "Polvo",
    "c": 4
  },
  {
    "en": "Dustbin",
    "es": "Cubo de basura",
    "c": 4
  },
  {
    "en": "Duty",
    "es": "Obligación",
    "c": 4
  },
  {
    "en": "Duty-free",
    "es": "Libre de obligaciones, impuestos",
    "c": 4
  },
  {
    "en": "Duvet",
    "es": "Edredón",
    "c": 4
  },
  {
    "en": "Each",
    "es": "Cada",
    "c": 4
  },
  {
    "en": "Ear",
    "es": "Oreja",
    "c": 4
  },
  {
    "en": "Earache",
    "es": "Dolor de orejas",
    "c": 4
  },
  {
    "en": "Early",
    "es": "Temprano",
    "c": 4
  },
  {
    "en": "Earn",
    "es": "Ganar (dinero, la vida)",
    "c": 4
  },
  {
    "en": "Earring",
    "es": "Pendiente",
    "c": 4
  },
  {
    "en": "Earth",
    "es": "Tierra",
    "c": 4
  },
  {
    "en": "East",
    "es": "Este",
    "c": 4
  },
  {
    "en": "Economics",
    "es": "Economía",
    "c": 4
  },
  {
    "en": "Edge",
    "es": "Borde",
    "c": 4
  },
  {
    "en": "Educate",
    "es": "Educar",
    "c": 4
  },
  {
    "en": "Education",
    "es": "Educación",
    "c": 4
  },
  {
    "en": "Effect",
    "es": "Efecto",
    "c": 4
  },
  {
    "en": "Efficient",
    "es": "Eficiente",
    "c": 4
  },
  {
    "en": "Effort",
    "es": "Esfuerzo",
    "c": 4
  },
  {
    "en": "Egg",
    "es": "Huevo",
    "c": 4
  },
  {
    "en": "Either",
    "es": "O",
    "c": 4
  },
  {
    "en": "Elderly",
    "es": "Anciano",
    "c": 4
  },
  {
    "en": "Elect",
    "es": "Elegir",
    "c": 4
  },
  {
    "en": "Election",
    "es": "Elección",
    "c": 4
  },
  {
    "en": "Electric",
    "es": "Eléctrico",
    "c": 4
  },
  {
    "en": "Electrical",
    "es": "Eléctrico (relativo a la electricidad)",
    "c": 4
  },
  {
    "en": "Electricity",
    "es": "Electricidad",
    "c": 4
  },
  {
    "en": "Electronic",
    "es": "Electrónico",
    "c": 4
  },
  {
    "en": "Elementary",
    "es": "Elemental",
    "c": 4
  },
  {
    "en": "Elephant",
    "es": "Elefante",
    "c": 4
  },
  {
    "en": "Else",
    "es": "Más (pero distinto)",
    "c": 4
  },
  {
    "en": "E-mail",
    "es": "E-mail",
    "c": 4
  },
  {
    "en": "Embarrassed",
    "es": "Avergonzado",
    "c": 4
  },
  {
    "en": "Embarrassing",
    "es": "Embarazoso. vergonzoso",
    "c": 4
  },
  {
    "en": "Embassy",
    "es": "Embajada",
    "c": 4
  },
  {
    "en": "Emergency",
    "es": "Emergencia",
    "c": 4
  },
  {
    "en": "Employ",
    "es": "Emplear",
    "c": 4
  },
  {
    "en": "Employee",
    "es": "Empleado",
    "c": 4
  },
  {
    "en": "Employment",
    "es": "Empleo",
    "c": 4
  },
  {
    "en": "Empty",
    "es": "Vacío",
    "c": 4
  },
  {
    "en": "Encourage",
    "es": "Fomentar, animar",
    "c": 4
  },
  {
    "en": "End",
    "es": "Fin",
    "c": 4
  },
  {
    "en": "End up",
    "es": "Terminar",
    "c": 4
  },
  {
    "en": "Enemy",
    "es": "Enemigo",
    "c": 4
  },
  {
    "en": "Engaged",
    "es": "Comprometido, ya ocupado",
    "c": 4
  },
  {
    "en": "Engine",
    "es": "Motor",
    "c": 4
  },
  {
    "en": "Engineer",
    "es": "Ingeniero",
    "c": 4
  },
  {
    "en": "Enjoy",
    "es": "Disfrutar",
    "c": 4
  },
  {
    "en": "Enlist",
    "es": "Alistarse",
    "c": 4
  },
  {
    "en": "Enormous",
    "es": "Enorme",
    "c": 4
  },
  {
    "en": "Enough",
    "es": "Suficiente",
    "c": 4
  },
  {
    "en": "Enquiry",
    "es": "Investigación",
    "c": 4
  },
  {
    "en": "Enter",
    "es": "Introducir, entrar",
    "c": 4
  },
  {
    "en": "Entertain",
    "es": "Entretener",
    "c": 4
  },
  {
    "en": "Entertaining",
    "es": "Entretenido",
    "c": 4
  },
  {
    "en": "Entertainment",
    "es": "Entretenimiento",
    "c": 4
  },
  {
    "en": "Entrance",
    "es": "Entrada (más bien física)",
    "c": 4
  },
  {
    "en": "Entry",
    "es": "Entrada, acceso",
    "c": 4
  },
  {
    "en": "Envelope",
    "es": "Sobre",
    "c": 4
  },
  {
    "en": "Enviroment",
    "es": "Medio ambiente",
    "c": 4
  },
  {
    "en": "Equal",
    "es": "Igual",
    "c": 4
  },
  {
    "en": "Equipment",
    "es": "Equipo",
    "c": 4
  },
  {
    "en": "Escalator",
    "es": "Escalera mecánica",
    "c": 4
  },
  {
    "en": "Escape",
    "es": "Escape",
    "c": 4
  },
  {
    "en": "Essential",
    "es": "Esencial",
    "c": 4
  },
  {
    "en": "Essay",
    "es": "Ensayo, redacción",
    "c": 4
  },
  {
    "en": "Euro",
    "es": "Euro",
    "c": 4
  },
  {
    "en": "Even",
    "es": "Incluso, empatados",
    "c": 4
  },
  {
    "en": "Evening",
    "es": "Tarde después cenar",
    "c": 4
  },
  {
    "en": "Event",
    "es": "Acontecimiento",
    "c": 4
  },
  {
    "en": "Ever",
    "es": "Alguna vez en el pasado",
    "c": 4
  },
  {
    "en": "Every",
    "es": "Cada",
    "c": 4
  },
  {
    "en": "Everybody",
    "es": "Todo el mundo (cada uno)",
    "c": 4
  },
  {
    "en": "Everyone",
    "es": "Todo el mundo (cada uno)",
    "c": 4
  },
  {
    "en": "Everything",
    "es": "Todo (cada cosa)",
    "c": 4
  },
  {
    "en": "Everywhere",
    "es": "En todas partes",
    "c": 4
  },
  {
    "en": "Exact",
    "es": "Exacto",
    "c": 4
  },
  {
    "en": "Examination",
    "es": "Examen",
    "c": 4
  },
  {
    "en": "Examine",
    "es": "Examinar",
    "c": 4
  },
  {
    "en": "Example",
    "es": "Ejemplo",
    "c": 4
  },
  {
    "en": "Excellent",
    "es": "Excelente",
    "c": 4
  },
  {
    "en": "Except",
    "es": "Excepto",
    "c": 4
  },
  {
    "en": "Exchange",
    "es": "Cambio",
    "c": 4
  },
  {
    "en": "Exchange rate",
    "es": "Tipo de cambio",
    "c": 4
  },
  {
    "en": "Excited",
    "es": "Emocionado",
    "c": 4
  },
  {
    "en": "Excitement",
    "es": "Emoción",
    "c": 4
  },
  {
    "en": "Exciting",
    "es": "Emocionante",
    "c": 4
  },
  {
    "en": "Excuse",
    "es": "Excusa, excusar",
    "c": 4
  },
  {
    "en": "Exercise",
    "es": "Ejercicio, ejercitarse",
    "c": 4
  },
  {
    "en": "Exhibition",
    "es": "Exhibición",
    "c": 4
  },
  {
    "en": "Exist",
    "es": "Existir",
    "c": 4
  },
  {
    "en": "Exit",
    "es": "Salida",
    "c": 4
  },
  {
    "en": "Expect",
    "es": "Esperar",
    "c": 4
  },
  {
    "en": "Expedition",
    "es": "Expedición",
    "c": 4
  },
  {
    "en": "Expensive",
    "es": "Caro",
    "c": 4
  },
  {
    "en": "Experience",
    "es": "Experiencia",
    "c": 4
  },
  {
    "en": "Experiment",
    "es": "Experimento",
    "c": 4
  },
  {
    "en": "Expert",
    "es": "Experto",
    "c": 4
  },
  {
    "en": "Explain",
    "es": "Explicar",
    "c": 4
  },
  {
    "en": "Explanation",
    "es": "Explicación",
    "c": 4
  },
  {
    "en": "Explode",
    "es": "Explotar",
    "c": 4
  },
  {
    "en": "Explore",
    "es": "Explorar",
    "c": 4
  },
  {
    "en": "Extra",
    "es": "Extra",
    "c": 4
  },
  {
    "en": "Extraordinary",
    "es": "Extraordinario",
    "c": 4
  },
  {
    "en": "Extremely",
    "es": "Extremadamente",
    "c": 4
  },
  {
    "en": "Eye",
    "es": "Ojo (de cara y aguja)",
    "c": 4
  },
  {
    "en": "Face",
    "es": "Cara, enfrentarse a",
    "c": 4
  },
  {
    "en": "Facility",
    "es": "Facilidad",
    "c": 4
  },
  {
    "en": "Fact",
    "es": "Hecho",
    "c": 4
  },
  {
    "en": "Factory",
    "es": "Fabrica",
    "c": 4
  },
  {
    "en": "Fail",
    "es": "Fallo, fracasar",
    "c": 4
  },
  {
    "en": "Failure",
    "es": "Fracaso",
    "c": 4
  },
  {
    "en": "Faint",
    "es": "Débil, tenue, desmayarse, desmayo",
    "c": 4
  },
  {
    "en": "Fair",
    "es": "Rubio, correcto, de tez clara, feria",
    "c": 4
  },
  {
    "en": "Fairly",
    "es": "Bastante",
    "c": 4
  },
  {
    "en": "Faithfully",
    "es": "Fielmente",
    "c": 4
  },
  {
    "en": "Fall",
    "es": "Caer, caída, otoño (USA)",
    "c": 4
  },
  {
    "en": "False",
    "es": "Falso",
    "c": 4
  },
  {
    "en": "Familiar",
    "es": "Familiar (adjetivo)",
    "c": 4
  },
  {
    "en": "Family",
    "es": "Familia",
    "c": 4
  },
  {
    "en": "Famous",
    "es": "Famoso",
    "c": 4
  },
  {
    "en": "Fan",
    "es": "Fan, ventilador, abanico",
    "c": 4
  },
  {
    "en": "Fantastic",
    "es": "Fantástico",
    "c": 4
  },
  {
    "en": "Far",
    "es": "Lejos",
    "c": 4
  },
  {
    "en": "Fare",
    "es": "Tarifa",
    "c": 4
  },
  {
    "en": "Farm",
    "es": "Granja",
    "c": 4
  },
  {
    "en": "Fascinated",
    "es": "Fascinado",
    "c": 4
  },
  {
    "en": "Fashion",
    "es": "Moda",
    "c": 4
  },
  {
    "en": "Fast",
    "es": "Rápido, sostenido",
    "c": 4
  },
  {
    "en": "Fasten",
    "es": "Abrocharse, asegurar",
    "c": 4
  },
  {
    "en": "Fat",
    "es": "Gordo, grasa",
    "c": 4
  },
  {
    "en": "Father",
    "es": "Padre",
    "c": 4
  },
  {
    "en": "Fault",
    "es": "Culpa, defecto",
    "c": 4
  },
  {
    "en": "Favour",
    "es": "Favor",
    "c": 4
  },
  {
    "en": "Favourite",
    "es": "Favorito",
    "c": 4
  },
  {
    "en": "Fax",
    "es": "Fax, mandar por fax",
    "c": 4
  },
  {
    "en": "Fear",
    "es": "Miedo, temer",
    "c": 4
  },
  {
    "en": "Fee",
    "es": "Cuota, honorarios, tasa",
    "c": 4
  },
  {
    "en": "Feed",
    "es": "Alimentar",
    "c": 4
  },
  {
    "en": "Feel like",
    "es": "Apetecer",
    "c": 4
  },
  {
    "en": "Feel nervous",
    "es": "Sentirse nervioso",
    "c": 4
  },
  {
    "en": "Feel",
    "es": "Sentir",
    "c": 4
  },
  {
    "en": "Female",
    "es": "Femenino, hembra",
    "c": 4
  },
  {
    "en": "Fence",
    "es": "Valla",
    "c": 4
  },
  {
    "en": "Ferry",
    "es": "Ferry",
    "c": 4
  },
  {
    "en": "Festival",
    "es": "Festival, día festivo",
    "c": 4
  },
  {
    "en": "Fetch",
    "es": "Ir a buscar",
    "c": 4
  },
  {
    "en": "Fever",
    "es": "Fiebre",
    "c": 4
  },
  {
    "en": "Few",
    "es": "Pocos",
    "c": 4
  },
  {
    "en": "Fiancé",
    "es": "Novio en la boda",
    "c": 4
  },
  {
    "en": "Fiction",
    "es": "Ficción",
    "c": 4
  },
  {
    "en": "Field",
    "es": "Campo",
    "c": 4
  },
  {
    "en": "Fight",
    "es": "Luchar, lucha",
    "c": 4
  },
  {
    "en": "Figure",
    "es": "Figura, figurarse, cifra",
    "c": 4
  },
  {
    "en": "Fill in",
    "es": "Rellenar formularios",
    "c": 4
  },
  {
    "en": "Fill up",
    "es": "Llenar hasta los topes",
    "c": 4
  },
  {
    "en": "Fill",
    "es": "Llenar",
    "c": 4
  },
  {
    "en": "Film",
    "es": "Película, grabar",
    "c": 4
  },
  {
    "en": "Filmmaker",
    "es": "Cineasta",
    "c": 4
  },
  {
    "en": "Film star",
    "es": "Estrella de cine",
    "c": 4
  },
  {
    "en": "Final",
    "es": "Final",
    "c": 4
  },
  {
    "en": "Financial",
    "es": "Financiero",
    "c": 4
  },
  {
    "en": "Find out",
    "es": "Averiguar",
    "c": 4
  },
  {
    "en": "Find",
    "es": "Encontrar",
    "c": 4
  },
  {
    "en": "Fine",
    "es": "Fino, en forma, multa",
    "c": 4
  },
  {
    "en": "Finger",
    "es": "Dedo",
    "c": 4
  },
  {
    "en": "Fingernail",
    "es": "Uña",
    "c": 4
  },
  {
    "en": "Finish",
    "es": "Acabar, meta",
    "c": 4
  },
  {
    "en": "Fire",
    "es": "Fuego",
    "c": 4
  },
  {
    "en": "Firefighter",
    "es": "Bombero",
    "c": 4
  },
  {
    "en": "Firm",
    "es": "Firma, empresa",
    "c": 4
  },
  {
    "en": "First",
    "es": "Primero",
    "c": 4
  },
  {
    "en": "Fish",
    "es": "Pez, peces, pescar",
    "c": 4
  },
  {
    "en": "Fit",
    "es": "En forma, encajar, acoplar",
    "c": 4
  },
  {
    "en": "Fitness",
    "es": "Buena forma física",
    "c": 4
  },
  {
    "en": "Fix",
    "es": "Fijar, arreglar",
    "c": 4
  },
  {
    "en": "Flag",
    "es": "Bandera, etiquetar, señalar",
    "c": 4
  },
  {
    "en": "Flat",
    "es": "Piso (vivienda), plano",
    "c": 4
  },
  {
    "en": "Flight",
    "es": "Vuelo, tramo de escaleras",
    "c": 4
  },
  {
    "en": "Flight attendant",
    "es": "Azafata, personal de cabina",
    "c": 4
  },
  {
    "en": "Float",
    "es": "Flotar",
    "c": 4
  },
  {
    "en": "Flood",
    "es": "Inundación, inundar",
    "c": 4
  },
  {
    "en": "Floor",
    "es": "Suelo, planta (de edificio)",
    "c": 4
  },
  {
    "en": "Flour",
    "es": "Harina",
    "c": 4
  },
  {
    "en": "Flow",
    "es": "Flujo, fluir",
    "c": 4
  },
  {
    "en": "Flower",
    "es": "Flor",
    "c": 4
  },
  {
    "en": "Flu",
    "es": "Gripe",
    "c": 4
  },
  {
    "en": "Flute",
    "es": "Flauta metálica",
    "c": 4
  },
  {
    "en": "Fly",
    "es": "Volar, mosca, bragueta",
    "c": 4
  },
  {
    "en": "Fog",
    "es": "Niebla",
    "c": 4
  },
  {
    "en": "Fold",
    "es": "Pliegue, plegar",
    "c": 4
  },
  {
    "en": "Folk",
    "es": "Popular (folklore)",
    "c": 4
  },
  {
    "en": "Follow",
    "es": "Seguir",
    "c": 4
  },
  {
    "en": "Following",
    "es": "Siguiente",
    "c": 4
  },
  {
    "en": "Fond of",
    "es": "Aficionado a, encariñado",
    "c": 4
  },
  {
    "en": "Food",
    "es": "Comida, alimentos",
    "c": 4
  },
  {
    "en": "Fool",
    "es": "Tonto",
    "c": 4
  },
  {
    "en": "Foot",
    "es": "Pie",
    "c": 4
  },
  {
    "en": "Football",
    "es": "Fútbol",
    "c": 4
  },
  {
    "en": "For",
    "es": "Para, por durante",
    "c": 4
  },
  {
    "en": "Forbid",
    "es": "Prohibir",
    "c": 4
  },
  {
    "en": "Force",
    "es": "Fuerza, forzar",
    "c": 4
  },
  {
    "en": "Forecast",
    "es": "Pronóstico",
    "c": 4
  },
  {
    "en": "Foreigner",
    "es": "Un extranjero",
    "c": 4
  },
  {
    "en": "Foreing",
    "es": "Extranjero (adjetivo)",
    "c": 4
  },
  {
    "en": "Forest",
    "es": "Bosque",
    "c": 4
  },
  {
    "en": "Forever",
    "es": "Para siempre",
    "c": 4
  },
  {
    "en": "Forget",
    "es": "Olvidar",
    "c": 4
  },
  {
    "en": "Forgive",
    "es": "Perdonar",
    "c": 4
  },
  {
    "en": "Fork",
    "es": "Tenedor, tridente, bifurcación",
    "c": 4
  },
  {
    "en": "Form",
    "es": "Forma, formulario",
    "c": 4
  },
  {
    "en": "Former",
    "es": "Ex, anterior, previo",
    "c": 4
  },
  {
    "en": "Fortnight",
    "es": "Quincena",
    "c": 4
  },
  {
    "en": "Fortunately",
    "es": "Afortunadamente",
    "c": 4
  },
  {
    "en": "Forward",
    "es": "Adelante",
    "c": 4
  },
  {
    "en": "Fountain",
    "es": "Fuente",
    "c": 4
  },
  {
    "en": "Free",
    "es": "Libre, liberar, gratis",
    "c": 4
  },
  {
    "en": "Freeze",
    "es": "Congelar",
    "c": 4
  },
  {
    "en": "Freezer",
    "es": "Congelador",
    "c": 4
  },
  {
    "en": "French fries",
    "es": "Patatas fritas (USA)",
    "c": 4
  },
  {
    "en": "Frequent",
    "es": "Frecuente",
    "c": 4
  },
  {
    "en": "Fresh",
    "es": "Fresco",
    "c": 4
  },
  {
    "en": "Fridge",
    "es": "Nevera",
    "c": 4
  },
  {
    "en": "Friend",
    "es": "Amigo",
    "c": 4
  },
  {
    "en": "Frighten",
    "es": "Asustar",
    "c": 4
  },
  {
    "en": "From",
    "es": "De, desde",
    "c": 4
  },
  {
    "en": "Front",
    "es": "Fachada, frente",
    "c": 4
  },
  {
    "en": "Frontier",
    "es": "Frontera",
    "c": 4
  },
  {
    "en": "Frost",
    "es": "Escarcha",
    "c": 4
  },
  {
    "en": "Fruit",
    "es": "Fruta",
    "c": 4
  },
  {
    "en": "Fry",
    "es": "Freír",
    "c": 4
  },
  {
    "en": "Frying pan",
    "es": "Sartén",
    "c": 4
  },
  {
    "en": "Fuel",
    "es": "Combustible",
    "c": 4
  },
  {
    "en": "Full",
    "es": "Lleno",
    "c": 4
  },
  {
    "en": "Full time",
    "es": "A tiempo completo",
    "c": 4
  },
  {
    "en": "Furnished",
    "es": "Amueblado",
    "c": 4
  },
  {
    "en": "Furniture",
    "es": "Mobiliario",
    "c": 4
  },
  {
    "en": "Further",
    "es": "Más lejos",
    "c": 4
  },
  {
    "en": "Future",
    "es": "Futuro",
    "c": 4
  },
  {
    "en": "Gain",
    "es": "Ganar, ganancia",
    "c": 4
  },
  {
    "en": "Gallery",
    "es": "Museo",
    "c": 4
  },
  {
    "en": "Game",
    "es": "Juego",
    "c": 4
  },
  {
    "en": "Gandmother",
    "es": "Abuela",
    "c": 4
  },
  {
    "en": "Gap",
    "es": "Espacio, hueco, retraso",
    "c": 4
  },
  {
    "en": "Garage",
    "es": "Garaje",
    "c": 4
  },
  {
    "en": "Garden",
    "es": "Jardín",
    "c": 4
  },
  {
    "en": "Gas",
    "es": "Gas, gasolina",
    "c": 4
  },
  {
    "en": "Gate",
    "es": "Portón",
    "c": 4
  },
  {
    "en": "General",
    "es": "General",
    "c": 4
  },
  {
    "en": "Generation",
    "es": "Generación",
    "c": 4
  },
  {
    "en": "Generous",
    "es": "Generoso",
    "c": 4
  },
  {
    "en": "Gentle",
    "es": "Suave, gentil",
    "c": 4
  },
  {
    "en": "Gentleman",
    "es": "Caballero",
    "c": 4
  },
  {
    "en": "Geography",
    "es": "Geografía",
    "c": 4
  },
  {
    "en": "Get back",
    "es": "Volver, regresar",
    "c": 4
  },
  {
    "en": "Get down",
    "es": "Bajar, ponerse manos a la obra",
    "c": 4
  },
  {
    "en": "Get in",
    "es": "Entrar, llegar",
    "c": 4
  },
  {
    "en": "Get off",
    "es": "Apearse, bajar",
    "c": 4
  },
  {
    "en": "Get on (with)",
    "es": "Llevarse bien con alguien",
    "c": 4
  },
  {
    "en": "Get on",
    "es": "Subir, montarse",
    "c": 4
  },
  {
    "en": "Get rid of",
    "es": "Deshacerse de",
    "c": 4
  },
  {
    "en": "Get up",
    "es": "Levantarse, despertar",
    "c": 4
  },
  {
    "en": "Get",
    "es": "Conseguir",
    "c": 4
  },
  {
    "en": "Gift",
    "es": "Regalo, obsequio",
    "c": 4
  },
  {
    "en": "Giraffe",
    "es": "Jirafa",
    "c": 4
  },
  {
    "en": "Girl",
    "es": "Chica",
    "c": 4
  },
  {
    "en": "Girlfriend",
    "es": "Novia",
    "c": 4
  },
  {
    "en": "Give back",
    "es": "Devolver",
    "c": 4
  },
  {
    "en": "Give in",
    "es": "Ceder, darse por vencido",
    "c": 4
  },
  {
    "en": "Give out",
    "es": "Distribuir",
    "c": 4
  },
  {
    "en": "Give up",
    "es": "Dejar, abandonar, rendirse",
    "c": 4
  },
  {
    "en": "Give way",
    "es": "Ceder el paso",
    "c": 4
  },
  {
    "en": "Give",
    "es": "Dar",
    "c": 4
  },
  {
    "en": "Glad",
    "es": "Alegre",
    "c": 4
  },
  {
    "en": "Glance",
    "es": "Mirada, echar una mirada",
    "c": 4
  },
  {
    "en": "Glass",
    "es": "Vidrio, vaso",
    "c": 4
  },
  {
    "en": "Glasses",
    "es": "Gafas",
    "c": 4
  },
  {
    "en": "Global",
    "es": "A escala mundial, global",
    "c": 4
  },
  {
    "en": "Glove",
    "es": "Guante",
    "c": 4
  },
  {
    "en": "Go for",
    "es": "Ir a buscar",
    "c": 4
  },
  {
    "en": "Go off",
    "es": "Marcharse, estallar, saltar (una alarma, el despertador, trampa)",
    "c": 4
  },
  {
    "en": "Go on",
    "es": "Continuar",
    "c": 4
  },
  {
    "en": "Go out",
    "es": "Salir",
    "c": 4
  },
  {
    "en": "Go with",
    "es": "Acompañar, pegar (ropas, colores)",
    "c": 4
  },
  {
    "en": "Go",
    "es": "Ir",
    "c": 4
  },
  {
    "en": "Goal",
    "es": "Portería, meta, objetivo",
    "c": 4
  },
  {
    "en": "Goat",
    "es": "Cabra",
    "c": 4
  },
  {
    "en": "Gold",
    "es": "Oro",
    "c": 4
  },
  {
    "en": "Golf",
    "es": "Golf",
    "c": 4
  },
  {
    "en": "Good",
    "es": "Bueno",
    "c": 4
  },
  {
    "en": "Goodbye",
    "es": "Adiós",
    "c": 4
  },
  {
    "en": "Good-looking",
    "es": "Guapo, guapa",
    "c": 4
  },
  {
    "en": "Goodnight",
    "es": "Buenas noches",
    "c": 4
  },
  {
    "en": "Goods",
    "es": "Bienes",
    "c": 4
  },
  {
    "en": "Govern",
    "es": "Gobernar",
    "c": 4
  },
  {
    "en": "Government",
    "es": "Gobierno",
    "c": 4
  },
  {
    "en": "Grade",
    "es": "Calidad, grado, curso",
    "c": 4
  },
  {
    "en": "Gram",
    "es": "Gramo",
    "c": 4
  },
  {
    "en": "Grammar",
    "es": "Gramática",
    "c": 4
  },
  {
    "en": "Granchild",
    "es": "Nieto",
    "c": 4
  },
  {
    "en": "Grandad",
    "es": "Abuelo",
    "c": 4
  },
  {
    "en": "Granddaugther",
    "es": "Nieta",
    "c": 4
  },
  {
    "en": "Grandfather",
    "es": "Abuelo",
    "c": 4
  },
  {
    "en": "Grandma",
    "es": "Abuelita",
    "c": 4
  },
  {
    "en": "Grandpa",
    "es": "Abuelito",
    "c": 4
  },
  {
    "en": "Grandparents",
    "es": "Abuelos (hombre y mujer)",
    "c": 4
  },
  {
    "en": "Grandson",
    "es": "Nieto",
    "c": 4
  },
  {
    "en": "Grant",
    "es": "Beca, conceder",
    "c": 4
  },
  {
    "en": "Grape",
    "es": "Uva",
    "c": 4
  },
  {
    "en": "Grass",
    "es": "Pasto, hierba",
    "c": 4
  },
  {
    "en": "Grateful",
    "es": "Agradecido",
    "c": 4
  },
  {
    "en": "Great",
    "es": "Estupendo, genial",
    "c": 4
  },
  {
    "en": "Green",
    "es": "Verde",
    "c": 4
  },
  {
    "en": "Greengrocer",
    "es": "Verdulero",
    "c": 4
  },
  {
    "en": "Grey",
    "es": "Gris",
    "c": 4
  },
  {
    "en": "Grill",
    "es": "Parrilla, rejilla",
    "c": 4
  },
  {
    "en": "Grocer",
    "es": "Tendero",
    "c": 4
  },
  {
    "en": "Ground",
    "es": "Terreno, derribar, castigar sin salir",
    "c": 4
  },
  {
    "en": "Group",
    "es": "Grupo, agrupar",
    "c": 4
  },
  {
    "en": "Grow up",
    "es": "Hacerse mayor",
    "c": 4
  },
  {
    "en": "Grow",
    "es": "Cultivar, crecer, dejarse barba",
    "c": 4
  },
  {
    "en": "Guard",
    "es": "Vigilar, guardar, guarda",
    "c": 4
  },
  {
    "en": "Guess",
    "es": "Adivinar, suposición",
    "c": 4
  },
  {
    "en": "Guest",
    "es": "Invitado",
    "c": 4
  },
  {
    "en": "Guesthouse",
    "es": "Casa de huéspedes",
    "c": 4
  },
  {
    "en": "Guide",
    "es": "Guiar, guía",
    "c": 4
  },
  {
    "en": "Guidebook",
    "es": "Guía (libro)",
    "c": 4
  },
  {
    "en": "Guilty",
    "es": "Culpable",
    "c": 4
  },
  {
    "en": "Guitar",
    "es": "Guitarra",
    "c": 4
  },
  {
    "en": "Gum",
    "es": "Goma",
    "c": 4
  },
  {
    "en": "Gums",
    "es": "Encías",
    "c": 4
  },
  {
    "en": "Gun",
    "es": "Arma de fuego, cañón",
    "c": 4
  },
  {
    "en": "Gym",
    "es": "Gimnasio",
    "c": 4
  },
  {
    "en": "Habit",
    "es": "Costumbre",
    "c": 4
  },
  {
    "en": "Hair",
    "es": "Pelo, cabello",
    "c": 4
  },
  {
    "en": "Haircut",
    "es": "Corte de pelo",
    "c": 4
  },
  {
    "en": "Hairdresser",
    "es": "Peluquero",
    "c": 4
  },
  {
    "en": "Hairdryer",
    "es": "Secador",
    "c": 4
  },
  {
    "en": "Hall",
    "es": "Vestíbulo",
    "c": 4
  },
  {
    "en": "Hallo",
    "es": "Hola",
    "c": 4
  },
  {
    "en": "Halve",
    "es": "La mitad, dividir a la mitad",
    "c": 4
  },
  {
    "en": "Hammer",
    "es": "Martillo, amartillar",
    "c": 4
  },
  {
    "en": "Hand",
    "es": "Mano",
    "c": 4
  },
  {
    "en": "Hand in",
    "es": "Entregar",
    "c": 4
  },
  {
    "en": "Hand out",
    "es": "Repartir",
    "c": 4
  },
  {
    "en": "Handbag",
    "es": "Bolso",
    "c": 4
  },
  {
    "en": "Hand-held",
    "es": "De mano",
    "c": 4
  },
  {
    "en": "Handkerchief",
    "es": "Pañuelo",
    "c": 4
  },
  {
    "en": "Handle",
    "es": "Manejar, manilla, pomo",
    "c": 4
  },
  {
    "en": "Handsome",
    "es": "Guapo (para chicos)",
    "c": 4
  },
  {
    "en": "Handwriting",
    "es": "Caligrafía, tu letra",
    "c": 4
  },
  {
    "en": "Hang up",
    "es": "Colgar el teléfono",
    "c": 4
  },
  {
    "en": "Hang",
    "es": "Colgar, ahorcar",
    "c": 4
  },
  {
    "en": "Happen",
    "es": "Suceder",
    "c": 4
  },
  {
    "en": "Happy",
    "es": "Feliz",
    "c": 4
  },
  {
    "en": "Harbour",
    "es": "Puerto",
    "c": 4
  },
  {
    "en": "Hard",
    "es": "Duro",
    "c": 4
  },
  {
    "en": "Hardly",
    "es": "Apenas",
    "c": 4
  },
  {
    "en": "Hat",
    "es": "Sombrero",
    "c": 4
  },
  {
    "en": "Hate",
    "es": "Odiar",
    "c": 4
  },
  {
    "en": "Have got",
    "es": "Haber conseguido (tener)",
    "c": 4
  },
  {
    "en": "Have",
    "es": "Tener, haber",
    "c": 4
  },
  {
    "en": "He",
    "es": "Él",
    "c": 4
  },
  {
    "en": "Head",
    "es": "Cabeza",
    "c": 4
  },
  {
    "en": "Head teacher",
    "es": "Director",
    "c": 4
  },
  {
    "en": "Headache",
    "es": "Dolor de cabeza",
    "c": 4
  },
  {
    "en": "Headline",
    "es": "Titular (periódico)",
    "c": 4
  },
  {
    "en": "Health",
    "es": "Salud",
    "c": 4
  },
  {
    "en": "Heart",
    "es": "Corazón",
    "c": 4
  },
  {
    "en": "Heat",
    "es": "Calor, calentar",
    "c": 4
  },
  {
    "en": "Heavy",
    "es": "Pesado",
    "c": 4
  },
  {
    "en": "Hedge",
    "es": "Seto",
    "c": 4
  },
  {
    "en": "Height",
    "es": "Altura",
    "c": 4
  },
  {
    "en": "Helicopter",
    "es": "Helicóptero",
    "c": 4
  },
  {
    "en": "Hello",
    "es": "Hola",
    "c": 4
  },
  {
    "en": "Helmet",
    "es": "Casco",
    "c": 4
  },
  {
    "en": "Help",
    "es": "Ayuda, ayudar",
    "c": 4
  },
  {
    "en": "Her",
    "es": "Su (de ella), a ella",
    "c": 4
  },
  {
    "en": "Here",
    "es": "Aquí",
    "c": 4
  },
  {
    "en": "Hero",
    "es": "Héroe",
    "c": 4
  },
  {
    "en": "Hers",
    "es": "Suyo (de ella)",
    "c": 4
  },
  {
    "en": "Herself",
    "es": "A ella misma",
    "c": 4
  },
  {
    "en": "Hide",
    "es": "Esconderse, pellejo",
    "c": 4
  },
  {
    "en": "High",
    "es": "Estar alto",
    "c": 4
  },
  {
    "en": "Hill",
    "es": "Colina",
    "c": 4
  },
  {
    "en": "Him",
    "es": "A él",
    "c": 4
  },
  {
    "en": "Himself",
    "es": "A él mismo",
    "c": 4
  },
  {
    "en": "Hire",
    "es": "Alquilar",
    "c": 4
  },
  {
    "en": "His",
    "es": "Su (de él)",
    "c": 4
  },
  {
    "en": "Historic",
    "es": "Histórico (relativo a la historia)",
    "c": 4
  },
  {
    "en": "Historical",
    "es": "Que hizo historia",
    "c": 4
  },
  {
    "en": "History",
    "es": "Historia",
    "c": 4
  },
  {
    "en": "Hit",
    "es": "Impactar, golpear",
    "c": 4
  },
  {
    "en": "Hitch-hike",
    "es": "Hacer autostop",
    "c": 4
  },
  {
    "en": "Hobby",
    "es": "Afición",
    "c": 4
  },
  {
    "en": "Hockey",
    "es": "Hockey",
    "c": 4
  },
  {
    "en": "Hold up",
    "es": "Secuestro, atraco",
    "c": 4
  },
  {
    "en": "Hold",
    "es": "Sostener, sujetar, contener",
    "c": 4
  },
  {
    "en": "Hole",
    "es": "Agujero, hoyo",
    "c": 4
  },
  {
    "en": "Holiday",
    "es": "Vacaciones",
    "c": 4
  },
  {
    "en": "Home",
    "es": "Hogar",
    "c": 4
  },
  {
    "en": "Homework",
    "es": "Deberes",
    "c": 4
  },
  {
    "en": "Honest",
    "es": "Honesto, sincero",
    "c": 4
  },
  {
    "en": "Honey",
    "es": "Miel, cariño (apelativo)",
    "c": 4
  },
  {
    "en": "Hope",
    "es": "Esperar, esperanza",
    "c": 4
  },
  {
    "en": "Horrible",
    "es": "Horrible",
    "c": 4
  },
  {
    "en": "Horse",
    "es": "Caballo",
    "c": 4
  },
  {
    "en": "Hospital",
    "es": "Hospital",
    "c": 4
  },
  {
    "en": "Hostel",
    "es": "Hostal",
    "c": 4
  },
  {
    "en": "Hot",
    "es": "Caliente, picante, rápido, molón",
    "c": 4
  },
  {
    "en": "Hotel",
    "es": "Hotel",
    "c": 4
  },
  {
    "en": "Hour",
    "es": "Hora",
    "c": 4
  },
  {
    "en": "House",
    "es": "Casa",
    "c": 4
  },
  {
    "en": "Housewife",
    "es": "Ama de casa",
    "c": 4
  },
  {
    "en": "Housework",
    "es": "Tareas de casa",
    "c": 4
  },
  {
    "en": "Hovercraft",
    "es": "Aerodeslizador",
    "c": 4
  },
  {
    "en": "How",
    "es": "¿Cómo?",
    "c": 4
  },
  {
    "en": "How much",
    "es": "¿Cuánto?",
    "c": 4
  },
  {
    "en": "However",
    "es": "Sin embargo",
    "c": 4
  },
  {
    "en": "Huge",
    "es": "Enorme",
    "c": 4
  },
  {
    "en": "Human",
    "es": "Humano",
    "c": 4
  },
  {
    "en": "Hunger",
    "es": "Hambre",
    "c": 4
  },
  {
    "en": "Hungry",
    "es": "Hambriento",
    "c": 4
  },
  {
    "en": "Hurry",
    "es": "Prisa, apuro, apresurarse",
    "c": 4
  },
  {
    "en": "Hurt",
    "es": "Hacer daño, lesionar, doler",
    "c": 4
  },
  {
    "en": "Husband",
    "es": "Marido",
    "c": 4
  },
  {
    "en": "Hut",
    "es": "Cabaña",
    "c": 4
  },
  {
    "en": "Hydrofoil",
    "es": "Hidroala, aliscafo",
    "c": 4
  },
  {
    "en": "Ice",
    "es": "Hielo",
    "c": 4
  },
  {
    "en": "Ice cream",
    "es": "Helado",
    "c": 4
  },
  {
    "en": "Ice hockey",
    "es": "Hockey sobre hielo",
    "c": 4
  },
  {
    "en": "Idea",
    "es": "Idea",
    "c": 4
  },
  {
    "en": "Identity",
    "es": "Identidad",
    "c": 4
  },
  {
    "en": "Identity card",
    "es": "D.N.I.",
    "c": 4
  },
  {
    "en": "If",
    "es": "Si...",
    "c": 4
  },
  {
    "en": "Ill",
    "es": "Enfermo",
    "c": 4
  },
  {
    "en": "Illness",
    "es": "Enfermedad",
    "c": 4
  },
  {
    "en": "Imagination",
    "es": "Imaginación",
    "c": 4
  },
  {
    "en": "Imagine",
    "es": "Imaginar",
    "c": 4
  },
  {
    "en": "Immediate",
    "es": "Inmediato",
    "c": 4
  },
  {
    "en": "Import",
    "es": "Importar",
    "c": 4
  },
  {
    "en": "Importance",
    "es": "Importancia",
    "c": 4
  },
  {
    "en": "Important",
    "es": "Importante",
    "c": 4
  },
  {
    "en": "Impossible",
    "es": "Imposible",
    "c": 4
  },
  {
    "en": "Improve",
    "es": "Mejorar",
    "c": 4
  },
  {
    "en": "In",
    "es": "En, dentro de",
    "c": 4
  },
  {
    "en": "In advance",
    "es": "Por adelantado",
    "c": 4
  },
  {
    "en": "In any case",
    "es": "En cualquier caso",
    "c": 4
  },
  {
    "en": "In case of",
    "es": "En caso de",
    "c": 4
  },
  {
    "en": "In case of delays",
    "es": "En caso de retraso",
    "c": 4
  },
  {
    "en": "In case of fire",
    "es": "En caso de fuego",
    "c": 4
  },
  {
    "en": "In danger",
    "es": "En peligro",
    "c": 4
  },
  {
    "en": "In fact",
    "es": "De hecho",
    "c": 4
  },
  {
    "en": "In front of",
    "es": "Delante de",
    "c": 4
  },
  {
    "en": "In half",
    "es": "Por la mitad",
    "c": 4
  },
  {
    "en": "In ink",
    "es": "A tinta",
    "c": 4
  },
  {
    "en": "In love",
    "es": "Enamorado",
    "c": 4
  },
  {
    "en": "In order",
    "es": "En orden",
    "c": 4
  },
  {
    "en": "In order to",
    "es": "Para",
    "c": 4
  },
  {
    "en": "In pencil",
    "es": "A lápiz",
    "c": 4
  },
  {
    "en": "In pieces",
    "es": "En piezas, desmontado",
    "c": 4
  },
  {
    "en": "In place",
    "es": "En su lugar, en el sitio",
    "c": 4
  },
  {
    "en": "In private",
    "es": "En privado",
    "c": 4
  },
  {
    "en": "In public",
    "es": "En publico",
    "c": 4
  },
  {
    "en": "In spite of",
    "es": "A pesar de",
    "c": 4
  },
  {
    "en": "In stock",
    "es": "En existencias",
    "c": 4
  },
  {
    "en": "In the end",
    "es": "Al final",
    "c": 4
  },
  {
    "en": "In time",
    "es": "A tiempo",
    "c": 4
  },
  {
    "en": "In turn",
    "es": "A su vez",
    "c": 4
  },
  {
    "en": "In two",
    "es": "En dos",
    "c": 4
  },
  {
    "en": "Include",
    "es": "Incluir",
    "c": 4
  },
  {
    "en": "Income",
    "es": "Ingresos, renta",
    "c": 4
  },
  {
    "en": "Incorrect",
    "es": "Incorrecto",
    "c": 4
  },
  {
    "en": "Increase",
    "es": "Aumentar",
    "c": 4
  },
  {
    "en": "Indeed",
    "es": "De hecho, efectivamente",
    "c": 4
  },
  {
    "en": "Independent",
    "es": "Independiente",
    "c": 4
  },
  {
    "en": "Index",
    "es": "Índice",
    "c": 4
  },
  {
    "en": "Individual",
    "es": "Individual",
    "c": 4
  },
  {
    "en": "Indoor",
    "es": "Interior",
    "c": 4
  },
  {
    "en": "Indoors",
    "es": "En el interior",
    "c": 4
  },
  {
    "en": "Industry",
    "es": "Industria",
    "c": 4
  },
  {
    "en": "Influence",
    "es": "Influencia",
    "c": 4
  },
  {
    "en": "Inform",
    "es": "Informar",
    "c": 4
  },
  {
    "en": "Information",
    "es": "Información",
    "c": 4
  },
  {
    "en": "Ingredients",
    "es": "Ingredientes",
    "c": 4
  },
  {
    "en": "Inhabitant",
    "es": "Habitante",
    "c": 4
  },
  {
    "en": "Initial",
    "es": "Al principio, inicial",
    "c": 4
  },
  {
    "en": "Injure",
    "es": "Herir, herida",
    "c": 4
  },
  {
    "en": "Ink",
    "es": "Tinta",
    "c": 4
  },
  {
    "en": "Inmigration",
    "es": "Inmigración",
    "c": 4
  },
  {
    "en": "Inn",
    "es": "Taberna",
    "c": 4
  },
  {
    "en": "Inquiry",
    "es": "Interrogante, pegunta, investigación",
    "c": 4
  },
  {
    "en": "Insect",
    "es": "Insecto",
    "c": 4
  },
  {
    "en": "Inside",
    "es": "Parte de dentro, interior",
    "c": 4
  },
  {
    "en": "Insist",
    "es": "Insistir",
    "c": 4
  },
  {
    "en": "Instance, for",
    "es": "Por ejemplo",
    "c": 4
  },
  {
    "en": "Instead",
    "es": "En su lugar",
    "c": 4
  },
  {
    "en": "Instead of",
    "es": "En lugar de",
    "c": 4
  },
  {
    "en": "Instructions",
    "es": "Instrucciones",
    "c": 4
  },
  {
    "en": "Instrument",
    "es": "Instrumento",
    "c": 4
  },
  {
    "en": "Insurance",
    "es": "Seguro",
    "c": 4
  },
  {
    "en": "Insure",
    "es": "Asegurar",
    "c": 4
  },
  {
    "en": "Intelligent",
    "es": "Inteligente",
    "c": 4
  },
  {
    "en": "Intend",
    "es": "Tener la intención de, pretender",
    "c": 4
  },
  {
    "en": "Interest",
    "es": "Interés",
    "c": 4
  },
  {
    "en": "Intermediate",
    "es": "Intermedio",
    "c": 4
  },
  {
    "en": "International",
    "es": "Internacional",
    "c": 4
  },
  {
    "en": "Internet",
    "es": "Internet",
    "c": 4
  },
  {
    "en": "Interpret",
    "es": "Interpretar",
    "c": 4
  },
  {
    "en": "Interrupt",
    "es": "Interrumpir",
    "c": 4
  },
  {
    "en": "Interval",
    "es": "Intervalo; descanso del teatro",
    "c": 4
  },
  {
    "en": "Interview",
    "es": "Entrevista",
    "c": 4
  },
  {
    "en": "Into",
    "es": "En, dentro de",
    "c": 4
  },
  {
    "en": "Introduce",
    "es": "Introducir",
    "c": 4
  },
  {
    "en": "Introduction",
    "es": "Introducción",
    "c": 4
  },
  {
    "en": "Invade",
    "es": "Invadir",
    "c": 4
  },
  {
    "en": "Invent",
    "es": "Inventar",
    "c": 4
  },
  {
    "en": "Invention",
    "es": "Invención, invento",
    "c": 4
  },
  {
    "en": "Invitation",
    "es": "Invitación",
    "c": 4
  },
  {
    "en": "Invite",
    "es": "Invitar",
    "c": 4
  },
  {
    "en": "Involve",
    "es": "Implicar, involucrar",
    "c": 4
  },
  {
    "en": "Iron",
    "es": "Hierro, planchar",
    "c": 4
  },
  {
    "en": "Island",
    "es": "Isla",
    "c": 4
  },
  {
    "en": "Issue",
    "es": "Asunto, tema, número de revista, emitir, publicar",
    "c": 4
  },
  {
    "en": "It",
    "es": "Ello",
    "c": 4
  },
  {
    "en": "IT (information technology)",
    "es": "Tecnología de la información",
    "c": 4
  },
  {
    "en": "Item",
    "es": "Artículo, asunto",
    "c": 4
  },
  {
    "en": "Its",
    "es": "Su, sus",
    "c": 4
  },
  {
    "en": "Itself",
    "es": "Se, sí mismo",
    "c": 4
  },
  {
    "en": "Jacket",
    "es": "Chaqueta",
    "c": 4
  },
  {
    "en": "Jail",
    "es": "Carcel",
    "c": 4
  },
  {
    "en": "Jam",
    "es": "Mermelada, apelotonarse, encasquillamiento",
    "c": 4
  },
  {
    "en": "Jar",
    "es": "Jarra",
    "c": 4
  },
  {
    "en": "Jazz",
    "es": "Jazz",
    "c": 4
  },
  {
    "en": "Jealous",
    "es": "Celoso",
    "c": 4
  },
  {
    "en": "Jeans",
    "es": "Vaqueros",
    "c": 4
  },
  {
    "en": "Jet",
    "es": "Chorro, avión a reacción",
    "c": 4
  },
  {
    "en": "Jewellery",
    "es": "Joyería",
    "c": 4
  },
  {
    "en": "Job",
    "es": "Trabajo",
    "c": 4
  },
  {
    "en": "Jog",
    "es": "Empujoncito, trotar",
    "c": 4
  },
  {
    "en": "Join",
    "es": "Unir, juntar, unirse",
    "c": 4
  },
  {
    "en": "Joke",
    "es": "Chiste, bromear",
    "c": 4
  },
  {
    "en": "Journalism",
    "es": "Periodismo",
    "c": 4
  },
  {
    "en": "Journalist",
    "es": "Periodista",
    "c": 4
  },
  {
    "en": "Journey",
    "es": "Viaje, expedición",
    "c": 4
  },
  {
    "en": "Judge",
    "es": "Juez, juzgar",
    "c": 4
  },
  {
    "en": "Jug",
    "es": "Jarro, jarra",
    "c": 4
  },
  {
    "en": "Juice",
    "es": "Zumo",
    "c": 4
  },
  {
    "en": "Jump",
    "es": "Saltar",
    "c": 4
  },
  {
    "en": "Jury",
    "es": "Jurado",
    "c": 4
  },
  {
    "en": "Just",
    "es": "Sólo",
    "c": 4
  },
  {
    "en": "Kangaroo",
    "es": "Canguro",
    "c": 4
  },
  {
    "en": "Keen",
    "es": "Entusiasta",
    "c": 4
  },
  {
    "en": "Keep in",
    "es": "Mantener guardado",
    "c": 4
  },
  {
    "en": "Keep on",
    "es": "Seguir",
    "c": 4
  },
  {
    "en": "Keep up",
    "es": "Sostener, mantener el tipo, estar a la altura",
    "c": 4
  },
  {
    "en": "Keep",
    "es": "Mantener",
    "c": 4
  },
  {
    "en": "Kettle",
    "es": "Tetera",
    "c": 4
  },
  {
    "en": "Key",
    "es": "Llave, tecla, clave",
    "c": 4
  },
  {
    "en": "Keyboard",
    "es": "Teclado",
    "c": 4
  },
  {
    "en": "Kick",
    "es": "Patada, dar una patada",
    "c": 4
  },
  {
    "en": "Kids",
    "es": "Niños",
    "c": 4
  },
  {
    "en": "Kill",
    "es": "Matar",
    "c": 4
  },
  {
    "en": "Kilo",
    "es": "Kilo",
    "c": 4
  },
  {
    "en": "Kilometre",
    "es": "Kilometro",
    "c": 4
  },
  {
    "en": "Kind",
    "es": "Tipo, amable",
    "c": 4
  },
  {
    "en": "King",
    "es": "Rey",
    "c": 4
  },
  {
    "en": "Kiosk",
    "es": "Quiosco",
    "c": 4
  },
  {
    "en": "Kiss",
    "es": "Beso, besar",
    "c": 4
  },
  {
    "en": "Kitchen",
    "es": "Cocina",
    "c": 4
  },
  {
    "en": "Kitten",
    "es": "Gatito",
    "c": 4
  },
  {
    "en": "Knee",
    "es": "Rodilla",
    "c": 4
  },
  {
    "en": "Kneel",
    "es": "Arrodillarse",
    "c": 4
  },
  {
    "en": "Knife",
    "es": "Cuchillo",
    "c": 4
  },
  {
    "en": "Knit",
    "es": "Tejer",
    "c": 4
  },
  {
    "en": "Knock down",
    "es": "Derribar",
    "c": 4
  },
  {
    "en": "Knock",
    "es": "Llamar con los nudillos",
    "c": 4
  },
  {
    "en": "Know",
    "es": "Saber, conocer",
    "c": 4
  },
  {
    "en": "Knowledge",
    "es": "Conocimiento",
    "c": 4
  },
  {
    "en": "Laboratory",
    "es": "Laboratorio",
    "c": 4
  },
  {
    "en": "Labourer",
    "es": "Trabajador, peón",
    "c": 4
  },
  {
    "en": "Lack",
    "es": "Carencia, falta",
    "c": 4
  },
  {
    "en": "Ladder",
    "es": "Escalera de mano, carrera en la media",
    "c": 4
  },
  {
    "en": "Lady",
    "es": "Señora",
    "c": 4
  },
  {
    "en": "Lake",
    "es": "Lago",
    "c": 4
  },
  {
    "en": "Lamb",
    "es": "Cordero",
    "c": 4
  },
  {
    "en": "Lamp",
    "es": "Lampara",
    "c": 4
  },
  {
    "en": "Land",
    "es": "Tierra, terreno agrícola, aterrizar",
    "c": 4
  },
  {
    "en": "Landlady",
    "es": "Propietaria, patrona, casera",
    "c": 4
  },
  {
    "en": "Landlord",
    "es": "Propietario, patron, casero",
    "c": 4
  },
  {
    "en": "Landscape",
    "es": "Paisaje",
    "c": 4
  },
  {
    "en": "Language",
    "es": "Idioma, lenguaje",
    "c": 4
  },
  {
    "en": "Laptop",
    "es": "Portátil (ordenador)",
    "c": 4
  },
  {
    "en": "Large",
    "es": "De tamaño grande",
    "c": 4
  },
  {
    "en": "Laser",
    "es": "Laser",
    "c": 4
  },
  {
    "en": "Last",
    "es": "Ultimo, durar",
    "c": 4
  },
  {
    "en": "Late",
    "es": "Tarde",
    "c": 4
  },
  {
    "en": "Lately",
    "es": "Últimamente",
    "c": 4
  },
  {
    "en": "Later",
    "es": "Más tarde",
    "c": 4
  },
  {
    "en": "Latest",
    "es": "Último, más reciente",
    "c": 4
  },
  {
    "en": "Laugh",
    "es": "Reír",
    "c": 4
  },
  {
    "en": "Laundry",
    "es": "Lavandería, colada",
    "c": 4
  },
  {
    "en": "Lavatory",
    "es": "Inodoro, aseos",
    "c": 4
  },
  {
    "en": "Law",
    "es": "Derecho, ley",
    "c": 4
  },
  {
    "en": "Lawn",
    "es": "Pasto, césped",
    "c": 4
  },
  {
    "en": "Lawyer",
    "es": "Abogado, jurista",
    "c": 4
  },
  {
    "en": "Lay",
    "es": "Poner, yacer, acostarse",
    "c": 4
  },
  {
    "en": "Lazy",
    "es": "Perezoso, vago",
    "c": 4
  },
  {
    "en": "Lead",
    "es": "Mina, plomo, dirigir",
    "c": 4
  },
  {
    "en": "Leaf",
    "es": "Hoja de árbol",
    "c": 4
  },
  {
    "en": "Learn",
    "es": "Aprender",
    "c": 4
  },
  {
    "en": "Least",
    "es": "Menor, más mínimo",
    "c": 4
  },
  {
    "en": "Leather",
    "es": "Cuero",
    "c": 4
  },
  {
    "en": "Leave out",
    "es": "Saltarse, dejar olvidado, excluir",
    "c": 4
  },
  {
    "en": "Leave",
    "es": "Abandonar, irse",
    "c": 4
  },
  {
    "en": "Lecture",
    "es": "Conferencia, conferenciar, leer la cartilla",
    "c": 4
  },
  {
    "en": "Left",
    "es": "Izquierda",
    "c": 4
  },
  {
    "en": "Leg",
    "es": "Pierna, pata",
    "c": 4
  },
  {
    "en": "Leisure",
    "es": "Ocio",
    "c": 4
  },
  {
    "en": "Lemon",
    "es": "Limón",
    "c": 4
  },
  {
    "en": "Lemonade",
    "es": "Limonada",
    "c": 4
  },
  {
    "en": "Lend",
    "es": "Prestar",
    "c": 4
  },
  {
    "en": "Length",
    "es": "Longitud",
    "c": 4
  },
  {
    "en": "Less",
    "es": "Menos",
    "c": 4
  },
  {
    "en": "Lesson",
    "es": "Lección",
    "c": 4
  },
  {
    "en": "Let",
    "es": "Dejar, permitir, soltar",
    "c": 4
  },
  {
    "en": "Letter",
    "es": "Carta, letra",
    "c": 4
  },
  {
    "en": "Letter-box",
    "es": "Buzón",
    "c": 4
  },
  {
    "en": "Lettuce",
    "es": "Lechuga",
    "c": 4
  },
  {
    "en": "Level",
    "es": "Nivel",
    "c": 4
  },
  {
    "en": "Library",
    "es": "Biblioteca",
    "c": 4
  },
  {
    "en": "Licence",
    "es": "Licencia",
    "c": 4
  },
  {
    "en": "Lie",
    "es": "Mentir, mentira",
    "c": 4
  },
  {
    "en": "Life",
    "es": "Vida",
    "c": 4
  },
  {
    "en": "Lift",
    "es": "Ascensor, un paseo en coche, elevar, alzar",
    "c": 4
  },
  {
    "en": "Light",
    "es": "Luz, encender",
    "c": 4
  },
  {
    "en": "Lighter",
    "es": "Encendedor",
    "c": 4
  },
  {
    "en": "Lightning",
    "es": "Relampago",
    "c": 4
  },
  {
    "en": "Like",
    "es": "Gusto, gustar, como",
    "c": 4
  },
  {
    "en": "Likely",
    "es": "Probable",
    "c": 4
  },
  {
    "en": "Limit",
    "es": "Limite",
    "c": 4
  },
  {
    "en": "Line",
    "es": "Línea",
    "c": 4
  },
  {
    "en": "Link",
    "es": "Vínculo, eslabón, enlace",
    "c": 4
  },
  {
    "en": "Lion",
    "es": "León",
    "c": 4
  },
  {
    "en": "Lip",
    "es": "Labio",
    "c": 4
  },
  {
    "en": "Lipstick",
    "es": "Pintalabios",
    "c": 4
  },
  {
    "en": "Liquid",
    "es": "Liquido",
    "c": 4
  },
  {
    "en": "List",
    "es": "Lista, listar",
    "c": 4
  },
  {
    "en": "Listen",
    "es": "Escuchar",
    "c": 4
  },
  {
    "en": "Litter",
    "es": "Basura esparcida",
    "c": 4
  },
  {
    "en": "Literature",
    "es": "Literatura",
    "c": 4
  },
  {
    "en": "Little",
    "es": "Pequeño, poco",
    "c": 4
  },
  {
    "en": "Live",
    "es": "En vivo",
    "c": 4
  },
  {
    "en": "Lively",
    "es": "Vital, animado",
    "c": 4
  },
  {
    "en": "Living",
    "es": "Viviente",
    "c": 4
  },
  {
    "en": "Living room",
    "es": "Salón",
    "c": 4
  },
  {
    "en": "Load",
    "es": "Carga, cargar",
    "c": 4
  },
  {
    "en": "Loaf",
    "es": "Hogaza de pan",
    "c": 4
  },
  {
    "en": "Loan",
    "es": "Préstamo, prestar",
    "c": 4
  },
  {
    "en": "Local",
    "es": "Local",
    "c": 4
  },
  {
    "en": "Location",
    "es": "Localización, lugar",
    "c": 4
  },
  {
    "en": "Lock",
    "es": "Cerradura, cerrar con llave",
    "c": 4
  },
  {
    "en": "Locker",
    "es": "Armario, taquilla",
    "c": 4
  },
  {
    "en": "Lonely",
    "es": "Solitario",
    "c": 4
  },
  {
    "en": "Long",
    "es": "Largo",
    "c": 4
  },
  {
    "en": "Look",
    "es": "Mirar, aspecto",
    "c": 4
  },
  {
    "en": "Look after",
    "es": "Cuidar",
    "c": 4
  },
  {
    "en": "Look forward to",
    "es": "Esperar con ganas, anticipar",
    "c": 4
  },
  {
    "en": "Look like",
    "es": "Parecerse a",
    "c": 4
  },
  {
    "en": "Look out",
    "es": "Vigilar, mirar al exterior",
    "c": 4
  },
  {
    "en": "Look up",
    "es": "Consultar",
    "c": 4
  },
  {
    "en": "Loose",
    "es": "Flojo, suelto",
    "c": 4
  },
  {
    "en": "Lorry",
    "es": "Camión",
    "c": 4
  },
  {
    "en": "Lose",
    "es": "Perder",
    "c": 4
  },
  {
    "en": "Lost property office",
    "es": "Oficina de objetos perdidos",
    "c": 4
  },
  {
    "en": "Lot",
    "es": "Montón, lote, solar",
    "c": 4
  },
  {
    "en": "Loud",
    "es": "Alto(sonido)",
    "c": 4
  },
  {
    "en": "Lounge",
    "es": "Salon",
    "c": 4
  },
  {
    "en": "Love",
    "es": "Amor, amar",
    "c": 4
  },
  {
    "en": "Lovely",
    "es": "Encantador",
    "c": 4
  },
  {
    "en": "Low",
    "es": "Bajo(sonido), estar bajo",
    "c": 4
  },
  {
    "en": "Lower",
    "es": "Inferior",
    "c": 4
  },
  {
    "en": "Luck",
    "es": "Suerte",
    "c": 4
  },
  {
    "en": "Luggage",
    "es": "Equipaje",
    "c": 4
  },
  {
    "en": "Lump",
    "es": "Bulto, chichón, terrón, grumo",
    "c": 4
  },
  {
    "en": "Lunch",
    "es": "Almuerzo",
    "c": 4
  },
  {
    "en": "Lunchtime",
    "es": "Hora del almuerzo",
    "c": 4
  },
  {
    "en": "Lung",
    "es": "Pulmón",
    "c": 4
  },
  {
    "en": "Luxury",
    "es": "Lujo",
    "c": 4
  },
  {
    "en": "Machine",
    "es": "Maquina",
    "c": 4
  },
  {
    "en": "Mad",
    "es": "Loco",
    "c": 4
  },
  {
    "en": "Madam",
    "es": "Señora",
    "c": 4
  },
  {
    "en": "Made of",
    "es": "Hecho de",
    "c": 4
  },
  {
    "en": "Magazine",
    "es": "Revista",
    "c": 4
  },
  {
    "en": "Magic",
    "es": "Magia",
    "c": 4
  },
  {
    "en": "Magnificent",
    "es": "Magnifico",
    "c": 4
  },
  {
    "en": "Mail",
    "es": "Correo",
    "c": 4
  },
  {
    "en": "Main",
    "es": "Principal",
    "c": 4
  },
  {
    "en": "Majority",
    "es": "Mayoría",
    "c": 4
  },
  {
    "en": "Make sure",
    "es": "Cerciorarse, asegurarse",
    "c": 4
  },
  {
    "en": "Make",
    "es": "Hacer, fabricar",
    "c": 4
  },
  {
    "en": "Make-up",
    "es": "Maquillar, maquillaje, compensar, inventarse",
    "c": 4
  },
  {
    "en": "Male",
    "es": "Macho, masculino",
    "c": 4
  },
  {
    "en": "Man",
    "es": "Hombre",
    "c": 4
  },
  {
    "en": "Manage",
    "es": "Gestionar",
    "c": 4
  },
  {
    "en": "Manner",
    "es": "Manera",
    "c": 4
  },
  {
    "en": "Many",
    "es": "Muchos",
    "c": 4
  },
  {
    "en": "Map",
    "es": "Mapa",
    "c": 4
  },
  {
    "en": "Mark",
    "es": "Nota, marca",
    "c": 4
  },
  {
    "en": "Market",
    "es": "Mercado",
    "c": 4
  },
  {
    "en": "Marriage",
    "es": "Matrimonio",
    "c": 4
  },
  {
    "en": "Marry",
    "es": "Boda",
    "c": 4
  },
  {
    "en": "Master",
    "es": "Maestro",
    "c": 4
  },
  {
    "en": "Match",
    "es": "Partido, emparejar, cerilla",
    "c": 4
  },
  {
    "en": "Mate",
    "es": "Compañero",
    "c": 4
  },
  {
    "en": "Material",
    "es": "Material",
    "c": 4
  },
  {
    "en": "Maths",
    "es": "Matemáticas",
    "c": 4
  },
  {
    "en": "Matinee",
    "es": "Sesión matinal",
    "c": 4
  },
  {
    "en": "Matter",
    "es": "Materia, asunto",
    "c": 4
  },
  {
    "en": "Maximum",
    "es": "Máximo",
    "c": 4
  },
  {
    "en": "Maybe",
    "es": "Puede ser",
    "c": 4
  },
  {
    "en": "Me",
    "es": "A mí, me",
    "c": 4
  },
  {
    "en": "Meal",
    "es": "Una comida (desayuno, comida, etc)",
    "c": 4
  },
  {
    "en": "Mean",
    "es": "Significado, significar, hablar en serio, malvado, avaro",
    "c": 4
  },
  {
    "en": "Means",
    "es": "Medios",
    "c": 4
  },
  {
    "en": "Measure",
    "es": "Medida, medir",
    "c": 4
  },
  {
    "en": "Meat",
    "es": "Carne (muerta)",
    "c": 4
  },
  {
    "en": "Mechanic",
    "es": "Mecánico",
    "c": 4
  },
  {
    "en": "Medicine",
    "es": "Medicina",
    "c": 4
  },
  {
    "en": "Medium",
    "es": "Medio",
    "c": 4
  },
  {
    "en": "Meet",
    "es": "Quedar, encontrarse",
    "c": 4
  },
  {
    "en": "Melon",
    "es": "Melón",
    "c": 4
  },
  {
    "en": "Melt",
    "es": "Fundir",
    "c": 4
  },
  {
    "en": "Member",
    "es": "Miembro",
    "c": 4
  },
  {
    "en": "Membership",
    "es": "Afiliación",
    "c": 4
  },
  {
    "en": "Memory",
    "es": "Memoria, recuerdo",
    "c": 4
  },
  {
    "en": "Mend",
    "es": "Arreglar, enmendar",
    "c": 4
  },
  {
    "en": "Mention",
    "es": "Mención, mencionar",
    "c": 4
  },
  {
    "en": "Menu",
    "es": "Menú",
    "c": 4
  },
  {
    "en": "Merry",
    "es": "Feliz",
    "c": 4
  },
  {
    "en": "Message",
    "es": "Mensaje",
    "c": 4
  },
  {
    "en": "Metal",
    "es": "Metal",
    "c": 4
  },
  {
    "en": "Method",
    "es": "Método",
    "c": 4
  },
  {
    "en": "Metre",
    "es": "Metro",
    "c": 4
  },
  {
    "en": "Microwave",
    "es": "Microondas",
    "c": 4
  },
  {
    "en": "Midday",
    "es": "Mediodía",
    "c": 4
  },
  {
    "en": "Middle",
    "es": "El medio, en el medio",
    "c": 4
  },
  {
    "en": "Midnight",
    "es": "Media noche",
    "c": 4
  },
  {
    "en": "Mild",
    "es": "Leve, suave",
    "c": 4
  },
  {
    "en": "Mile",
    "es": "Milla",
    "c": 4
  },
  {
    "en": "Milimetre",
    "es": "Milímetro",
    "c": 4
  },
  {
    "en": "Milk",
    "es": "Leche, ordeñar",
    "c": 4
  },
  {
    "en": "Mind",
    "es": "Mente, importar",
    "c": 4
  },
  {
    "en": "Mine",
    "es": "Mina, mío, lo mío",
    "c": 4
  },
  {
    "en": "Mineral",
    "es": "Mineral",
    "c": 4
  },
  {
    "en": "Mineral water",
    "es": "Agua mineral",
    "c": 4
  },
  {
    "en": "Minimum",
    "es": "Mínimo",
    "c": 4
  },
  {
    "en": "Minister",
    "es": "Ministro",
    "c": 4
  },
  {
    "en": "Minute",
    "es": "Minuto, diminuto",
    "c": 4
  },
  {
    "en": "Mirror",
    "es": "Espejo",
    "c": 4
  },
  {
    "en": "Miserable",
    "es": "Desgraciado",
    "c": 4
  },
  {
    "en": "Miss",
    "es": "Echar de menos, fallar, señorita",
    "c": 4
  },
  {
    "en": "Mist",
    "es": "Niebla",
    "c": 4
  },
  {
    "en": "Mistake",
    "es": "Error",
    "c": 4
  },
  {
    "en": "Mix",
    "es": "Mezcla, mezclar",
    "c": 4
  },
  {
    "en": "Mobile (phone)",
    "es": "Teléfono móvil",
    "c": 4
  },
  {
    "en": "Model",
    "es": "Maqueta",
    "c": 4
  },
  {
    "en": "Modern",
    "es": "Moderno",
    "c": 4
  },
  {
    "en": "Moment",
    "es": "Momento",
    "c": 4
  },
  {
    "en": "Money",
    "es": "Dinero",
    "c": 4
  },
  {
    "en": "Monkey",
    "es": "Mono",
    "c": 4
  },
  {
    "en": "Month",
    "es": "Mes",
    "c": 4
  },
  {
    "en": "Moon",
    "es": "Luna",
    "c": 4
  },
  {
    "en": "More",
    "es": "Más",
    "c": 4
  },
  {
    "en": "Morning",
    "es": "Mañana",
    "c": 4
  },
  {
    "en": "Mosque",
    "es": "Mezquita",
    "c": 4
  },
  {
    "en": "Most",
    "es": "Mayoría",
    "c": 4
  },
  {
    "en": "Mother",
    "es": "Madre",
    "c": 4
  },
  {
    "en": "Motor",
    "es": "Motor",
    "c": 4
  },
  {
    "en": "Motorbike",
    "es": "Moto",
    "c": 4
  },
  {
    "en": "Motorcycle",
    "es": "Moto",
    "c": 4
  },
  {
    "en": "Motor-racing",
    "es": "Carrera de coches",
    "c": 4
  },
  {
    "en": "Motorway",
    "es": "Autopista",
    "c": 4
  },
  {
    "en": "Mountain",
    "es": "Montaña",
    "c": 4
  },
  {
    "en": "Mouse",
    "es": "Ratón",
    "c": 4
  },
  {
    "en": "Moustache",
    "es": "Bigote",
    "c": 4
  },
  {
    "en": "Mouth",
    "es": "Boca",
    "c": 4
  },
  {
    "en": "Move",
    "es": "Moverse, movimiento, mudarse",
    "c": 4
  },
  {
    "en": "Movie",
    "es": "Película",
    "c": 4
  },
  {
    "en": "Movie star",
    "es": "Estrella de cine",
    "c": 4
  },
  {
    "en": "Movie theatre",
    "es": "Cine",
    "c": 4
  },
  {
    "en": "Mr",
    "es": "Sr.",
    "c": 4
  },
  {
    "en": "Mrs",
    "es": "Sra.",
    "c": 4
  },
  {
    "en": "Ms",
    "es": "Señorita",
    "c": 4
  },
  {
    "en": "Much",
    "es": "Mucho",
    "c": 4
  },
  {
    "en": "Mug",
    "es": "Jarra, atracar por la calle",
    "c": 4
  },
  {
    "en": "Multiply",
    "es": "Multiplicar",
    "c": 4
  },
  {
    "en": "Mum",
    "es": "Mamá",
    "c": 4
  },
  {
    "en": "Mummy",
    "es": "Mami",
    "c": 4
  },
  {
    "en": "Murder",
    "es": "Asesinato, asesinar",
    "c": 4
  },
  {
    "en": "Museum",
    "es": "Museo",
    "c": 4
  },
  {
    "en": "Mushroom",
    "es": "Champiñón",
    "c": 4
  },
  {
    "en": "Music",
    "es": "Música",
    "c": 4
  },
  {
    "en": "Musical",
    "es": "Musical",
    "c": 4
  },
  {
    "en": "Musician",
    "es": "Músico",
    "c": 4
  },
  {
    "en": "Mustard",
    "es": "Mostaza",
    "c": 4
  },
  {
    "en": "My",
    "es": "Mi",
    "c": 4
  },
  {
    "en": "Myself",
    "es": "Yo mismo, a mí mismo",
    "c": 4
  },
  {
    "en": "Mystery",
    "es": "Misterio",
    "c": 4
  },
  {
    "en": "Nail",
    "es": "Uña, clavo, clavar",
    "c": 4
  },
  {
    "en": "Name",
    "es": "Nombre, nombrar",
    "c": 4
  },
  {
    "en": "Narrow",
    "es": "Estrecho",
    "c": 4
  },
  {
    "en": "Nasty",
    "es": "Asqueroso",
    "c": 4
  },
  {
    "en": "National",
    "es": "Nacional",
    "c": 4
  },
  {
    "en": "Nationality",
    "es": "Nacionalidad",
    "c": 4
  },
  {
    "en": "Nature",
    "es": "Naturaleza",
    "c": 4
  },
  {
    "en": "Nature studies",
    "es": "Estudios sobre la naturaleza",
    "c": 4
  },
  {
    "en": "Near",
    "es": "Cerca de",
    "c": 4
  },
  {
    "en": "Nearby",
    "es": "Cerca, cercano",
    "c": 4
  },
  {
    "en": "Nearly",
    "es": "Casi",
    "c": 4
  },
  {
    "en": "Neat",
    "es": "Ordenado",
    "c": 4
  },
  {
    "en": "Necessary",
    "es": "Necesario",
    "c": 4
  },
  {
    "en": "Neck",
    "es": "Cuello",
    "c": 4
  },
  {
    "en": "Need",
    "es": "Necesitar",
    "c": 4
  },
  {
    "en": "Needle",
    "es": "Aguja",
    "c": 4
  },
  {
    "en": "Negative",
    "es": "Negativo",
    "c": 4
  },
  {
    "en": "Neighbour",
    "es": "Vecino",
    "c": 4
  },
  {
    "en": "Neighbourhood",
    "es": "Vecindario",
    "c": 4
  },
  {
    "en": "Neither",
    "es": "Tampoco, ni",
    "c": 4
  },
  {
    "en": "Nephew",
    "es": "Sobrino",
    "c": 4
  },
  {
    "en": "Nervous",
    "es": "Nervioso",
    "c": 4
  },
  {
    "en": "Net",
    "es": "Red",
    "c": 4
  },
  {
    "en": "Network",
    "es": "Red social, comercial",
    "c": 4
  },
  {
    "en": "Never",
    "es": "Nunca",
    "c": 4
  },
  {
    "en": "New",
    "es": "Nuevo",
    "c": 4
  },
  {
    "en": "Newsagent",
    "es": "Vendedor de periódicos",
    "c": 4
  },
  {
    "en": "Newspaper",
    "es": "Periódico",
    "c": 4
  },
  {
    "en": "Next",
    "es": "Siguiente, próximo",
    "c": 4
  },
  {
    "en": "Next to",
    "es": "Al lado de",
    "c": 4
  },
  {
    "en": "Nice",
    "es": "Simpático",
    "c": 4
  },
  {
    "en": "Niece",
    "es": "Sobrina",
    "c": 4
  },
  {
    "en": "Night",
    "es": "Noche",
    "c": 4
  },
  {
    "en": "No",
    "es": "No",
    "c": 4
  },
  {
    "en": "No one",
    "es": "Nadie, ninguno",
    "c": 4
  },
  {
    "en": "Nobody",
    "es": "Nadie, ninguno",
    "c": 4
  },
  {
    "en": "Noise",
    "es": "Ruido",
    "c": 4
  },
  {
    "en": "None",
    "es": "Ninguno, nadie",
    "c": 4
  },
  {
    "en": "Nonsense",
    "es": "Disparates, tonterías",
    "c": 4
  },
  {
    "en": "Noon",
    "es": "Mediodía",
    "c": 4
  },
  {
    "en": "Nor",
    "es": "Ni",
    "c": 4
  },
  {
    "en": "Normal",
    "es": "Normal",
    "c": 4
  },
  {
    "en": "North",
    "es": "Norte",
    "c": 4
  },
  {
    "en": "Northeast",
    "es": "Noreste",
    "c": 4
  },
  {
    "en": "Northwest",
    "es": "Noroeste",
    "c": 4
  },
  {
    "en": "Nose",
    "es": "Nariz",
    "c": 4
  },
  {
    "en": "Not",
    "es": "No",
    "c": 4
  },
  {
    "en": "Note",
    "es": "Nota",
    "c": 4
  },
  {
    "en": "Notebook",
    "es": "Cuaderno",
    "c": 4
  },
  {
    "en": "Notepaper",
    "es": "Papel de notas",
    "c": 4
  },
  {
    "en": "Nothing",
    "es": "Nada",
    "c": 4
  },
  {
    "en": "Notice",
    "es": "Noticia",
    "c": 4
  },
  {
    "en": "Novel",
    "es": "Novela",
    "c": 4
  },
  {
    "en": "Now",
    "es": "Ahora",
    "c": 4
  },
  {
    "en": "Nowadays",
    "es": "Hoy en día",
    "c": 4
  },
  {
    "en": "Nowhere",
    "es": "En ninguna parte",
    "c": 4
  },
  {
    "en": "Number",
    "es": "Numero",
    "c": 4
  },
  {
    "en": "Nurse",
    "es": "Enfermera",
    "c": 4
  },
  {
    "en": "Nut",
    "es": "Nuez",
    "c": 4
  },
  {
    "en": "O'clock",
    "es": "En punto",
    "c": 4
  },
  {
    "en": "Object",
    "es": "Objeto",
    "c": 4
  },
  {
    "en": "Obvious",
    "es": "Obvio",
    "c": 4
  },
  {
    "en": "Occasion",
    "es": "Ocasión",
    "c": 4
  },
  {
    "en": "Occasional",
    "es": "Ocasional",
    "c": 4
  },
  {
    "en": "Occupation",
    "es": "Ocupación",
    "c": 4
  },
  {
    "en": "Ocean",
    "es": "Océano",
    "c": 4
  },
  {
    "en": "Of",
    "es": "De",
    "c": 4
  },
  {
    "en": "Of course",
    "es": "Por supuesto",
    "c": 4
  },
  {
    "en": "Off",
    "es": "Apagado, fuera de",
    "c": 4
  },
  {
    "en": "Offer",
    "es": "Oferta, ofrecer",
    "c": 4
  },
  {
    "en": "Office",
    "es": "Oficina",
    "c": 4
  },
  {
    "en": "Officer",
    "es": "Oficial",
    "c": 4
  },
  {
    "en": "Often",
    "es": "Con frecuencia",
    "c": 4
  },
  {
    "en": "Oh dear!",
    "es": "¡Caramba!",
    "c": 4
  },
  {
    "en": "Oh!",
    "es": "¡Oh!",
    "c": 4
  },
  {
    "en": "Oil",
    "es": "Aceite",
    "c": 4
  },
  {
    "en": "Ok",
    "es": "Vale",
    "c": 4
  },
  {
    "en": "Old",
    "es": "Viejo",
    "c": 4
  },
  {
    "en": "Old-fashioned",
    "es": "Pasado de moda",
    "c": 4
  },
  {
    "en": "Omelette",
    "es": "Tortilla",
    "c": 4
  },
  {
    "en": "On",
    "es": "Encima de",
    "c": 4
  },
  {
    "en": "On board",
    "es": "A bordo",
    "c": 4
  },
  {
    "en": "On business",
    "es": "De negocios, en activo",
    "c": 4
  },
  {
    "en": "On fire",
    "es": "En llamas",
    "c": 4
  },
  {
    "en": "On foot",
    "es": "A pie",
    "c": 4
  },
  {
    "en": "On holiday",
    "es": "De vacaciones",
    "c": 4
  },
  {
    "en": "On loan",
    "es": "En préstamo",
    "c": 4
  },
  {
    "en": "On purpose",
    "es": "A propósito",
    "c": 4
  },
  {
    "en": "On request",
    "es": "A solicitud",
    "c": 4
  },
  {
    "en": "On sale",
    "es": "En venta",
    "c": 4
  },
  {
    "en": "On time",
    "es": "A tiempo (justo)",
    "c": 4
  },
  {
    "en": "Once",
    "es": "Una vez",
    "c": 4
  },
  {
    "en": "One",
    "es": "Uno",
    "c": 4
  },
  {
    "en": "Oneself",
    "es": "Uno mismo",
    "c": 4
  },
  {
    "en": "One-way",
    "es": "Un solo sentido",
    "c": 4
  },
  {
    "en": "Onion",
    "es": "Cebolla",
    "c": 4
  },
  {
    "en": "Online",
    "es": "En línea",
    "c": 4
  },
  {
    "en": "Only",
    "es": "Sólo, solamente",
    "c": 4
  },
  {
    "en": "Onto",
    "es": "Sobre",
    "c": 4
  },
  {
    "en": "Open",
    "es": "Abrir",
    "c": 4
  },
  {
    "en": "Opera",
    "es": "Opera",
    "c": 4
  },
  {
    "en": "Operate",
    "es": "Funcionar, operar",
    "c": 4
  },
  {
    "en": "Operation",
    "es": "Operación",
    "c": 4
  },
  {
    "en": "Operator",
    "es": "Operador",
    "c": 4
  },
  {
    "en": "Opinion",
    "es": "Opinión",
    "c": 4
  },
  {
    "en": "Opportunity",
    "es": "Oportunidad",
    "c": 4
  },
  {
    "en": "Opposite",
    "es": "En frente de",
    "c": 4
  },
  {
    "en": "Option",
    "es": "Opción",
    "c": 4
  },
  {
    "en": "Or",
    "es": "O",
    "c": 4
  },
  {
    "en": "Orange",
    "es": "Naranja",
    "c": 4
  },
  {
    "en": "Orchestra",
    "es": "Orquesta",
    "c": 4
  },
  {
    "en": "Order",
    "es": "Orden, pedido, pedir, encargar",
    "c": 4
  },
  {
    "en": "Ordinary",
    "es": "Ordinario, corriente",
    "c": 4
  },
  {
    "en": "Organise",
    "es": "Organizar",
    "c": 4
  },
  {
    "en": "Organization",
    "es": "Organización",
    "c": 4
  },
  {
    "en": "Original",
    "es": "Original, auténtico",
    "c": 4
  },
  {
    "en": "Other",
    "es": "Otro",
    "c": 4
  },
  {
    "en": "Our",
    "es": "Nuestro",
    "c": 4
  },
  {
    "en": "Ours",
    "es": "Lo nuestro",
    "c": 4
  },
  {
    "en": "Ourselves",
    "es": "Nosotros mismos, a nosotros mismos",
    "c": 4
  },
  {
    "en": "Out",
    "es": "Fuera",
    "c": 4
  },
  {
    "en": "Out of",
    "es": "Fuera de",
    "c": 4
  },
  {
    "en": "Outdoor",
    "es": "Al aire libre (adjetivo)",
    "c": 4
  },
  {
    "en": "Outdoors",
    "es": "Al aire libre (adverbio)",
    "c": 4
  },
  {
    "en": "Outside",
    "es": "Afuera",
    "c": 4
  },
  {
    "en": "Oven",
    "es": "Horno",
    "c": 4
  },
  {
    "en": "Over",
    "es": "Encima",
    "c": 4
  },
  {
    "en": "Overnight",
    "es": "De un día para otro",
    "c": 4
  },
  {
    "en": "Overtake",
    "es": "Adelantar, sobrepasar",
    "c": 4
  },
  {
    "en": "Owe",
    "es": "Deber (dinero, cosas)",
    "c": 4
  },
  {
    "en": "Own",
    "es": "Poseer",
    "c": 4
  },
  {
    "en": "Owner",
    "es": "Propietario",
    "c": 4
  },
  {
    "en": "p.m.",
    "es": "Después del mediodía (post meridian)",
    "c": 4
  },
  {
    "en": "Pack",
    "es": "Lote, empaquetar, envasar",
    "c": 4
  },
  {
    "en": "Packet",
    "es": "Paquete",
    "c": 4
  },
  {
    "en": "Page",
    "es": "Página",
    "c": 4
  },
  {
    "en": "Pain",
    "es": "Dolor",
    "c": 4
  },
  {
    "en": "Paint",
    "es": "Pintar",
    "c": 4
  },
  {
    "en": "Pair",
    "es": "Par",
    "c": 4
  },
  {
    "en": "Palace",
    "es": "Palacio",
    "c": 4
  },
  {
    "en": "Pale",
    "es": "Pálido",
    "c": 4
  },
  {
    "en": "Pan",
    "es": "Sartén",
    "c": 4
  },
  {
    "en": "Pants",
    "es": "Pantalones",
    "c": 4
  },
  {
    "en": "Paper",
    "es": "Papel",
    "c": 4
  },
  {
    "en": "Parcel",
    "es": "Paquete, bulto",
    "c": 4
  },
  {
    "en": "Pardon",
    "es": "Perdón",
    "c": 4
  },
  {
    "en": "Parent",
    "es": "Padre o madre, progenitor",
    "c": 4
  },
  {
    "en": "Park",
    "es": "Parque, aparcar",
    "c": 4
  },
  {
    "en": "Parliament",
    "es": "Parlamento",
    "c": 4
  },
  {
    "en": "Part",
    "es": "Parte, la raya del pelo",
    "c": 4
  },
  {
    "en": "Part time",
    "es": "A tiempo parcial",
    "c": 4
  },
  {
    "en": "Particular",
    "es": "Particular",
    "c": 4
  },
  {
    "en": "Partly",
    "es": "En parte, parcialmente",
    "c": 4
  },
  {
    "en": "Partner",
    "es": "Socio",
    "c": 4
  },
  {
    "en": "Part-time",
    "es": "Por horas, a tiempo parcial",
    "c": 4
  },
  {
    "en": "Party",
    "es": "Fiesta",
    "c": 4
  },
  {
    "en": "Pass",
    "es": "Paso, aprobar, pasar",
    "c": 4
  },
  {
    "en": "Passenger",
    "es": "Pasajero",
    "c": 4
  },
  {
    "en": "Passport",
    "es": "Pasaporte",
    "c": 4
  },
  {
    "en": "Password",
    "es": "Contraseña",
    "c": 4
  },
  {
    "en": "Past",
    "es": "Pasado, más allá de",
    "c": 4
  },
  {
    "en": "Pasta",
    "es": "Pasta",
    "c": 4
  },
  {
    "en": "Pastry",
    "es": "Bollería",
    "c": 4
  },
  {
    "en": "Path",
    "es": "Trayectoria, senda",
    "c": 4
  },
  {
    "en": "Patient",
    "es": "Paciente, un paciente",
    "c": 4
  },
  {
    "en": "Pattern",
    "es": "Patrón, estampado, falsilla, plantilla",
    "c": 4
  },
  {
    "en": "Pause",
    "es": "Pausa, pausar",
    "c": 4
  },
  {
    "en": "Pavement",
    "es": "Acera, pavimento",
    "c": 4
  },
  {
    "en": "Pay",
    "es": "Pagar, paga",
    "c": 4
  },
  {
    "en": "Pea",
    "es": "Guisante",
    "c": 4
  },
  {
    "en": "Peace",
    "es": "Paz",
    "c": 4
  },
  {
    "en": "Peanut",
    "es": "Cacahuete",
    "c": 4
  },
  {
    "en": "Pear",
    "es": "Pera",
    "c": 4
  },
  {
    "en": "Pedestrian",
    "es": "Peatón",
    "c": 4
  },
  {
    "en": "Peel",
    "es": "Cascara, pelar, exfoliar",
    "c": 4
  },
  {
    "en": "Pen",
    "es": "Pluma, bolígrafo",
    "c": 4
  },
  {
    "en": "Pence",
    "es": "Peniques",
    "c": 4
  },
  {
    "en": "Pencil",
    "es": "Lápiz",
    "c": 4
  },
  {
    "en": "Pen-friend",
    "es": "Amigo por correo",
    "c": 4
  },
  {
    "en": "Penknife",
    "es": "Navaja",
    "c": 4
  },
  {
    "en": "Penny",
    "es": "Penique",
    "c": 4
  },
  {
    "en": "Pension",
    "es": "Pensión",
    "c": 4
  },
  {
    "en": "People",
    "es": "Gente, personas",
    "c": 4
  },
  {
    "en": "Pepper",
    "es": "Pimienta, pimiento, pimentar",
    "c": 4
  },
  {
    "en": "Per",
    "es": "Por",
    "c": 4
  },
  {
    "en": "Per cent",
    "es": "Por ciento",
    "c": 4
  },
  {
    "en": "Perfect",
    "es": "Perfecto",
    "c": 4
  },
  {
    "en": "Perform",
    "es": "Actuar, rendir",
    "c": 4
  },
  {
    "en": "Performance",
    "es": "Actuación, ejecución, rendimiento",
    "c": 4
  },
  {
    "en": "Perfume",
    "es": "Colonia, perfume",
    "c": 4
  },
  {
    "en": "Perhaps",
    "es": "Quizás",
    "c": 4
  },
  {
    "en": "Period",
    "es": "Periodo",
    "c": 4
  },
  {
    "en": "Permanent",
    "es": "Permanente",
    "c": 4
  },
  {
    "en": "Permission",
    "es": "Permiso/autorización",
    "c": 4
  },
  {
    "en": "Permitted",
    "es": "Permitido",
    "c": 4
  },
  {
    "en": "Person",
    "es": "Persona",
    "c": 4
  },
  {
    "en": "Personal",
    "es": "Personal",
    "c": 4
  },
  {
    "en": "Persuade",
    "es": "Persuadir",
    "c": 4
  },
  {
    "en": "Pet",
    "es": "Mascota",
    "c": 4
  },
  {
    "en": "Petrol",
    "es": "Petróleo, gasolina",
    "c": 4
  },
  {
    "en": "Petrol station",
    "es": "Gasolinera",
    "c": 4
  },
  {
    "en": "Pharmacy",
    "es": "Farmacia",
    "c": 4
  },
  {
    "en": "Phone",
    "es": "Teléfono",
    "c": 4
  },
  {
    "en": "Photo",
    "es": "Foto",
    "c": 4
  },
  {
    "en": "Photocopy",
    "es": "Fotocopia",
    "c": 4
  },
  {
    "en": "Photograph",
    "es": "Una fotografía",
    "c": 4
  },
  {
    "en": "Photography",
    "es": "La fotografía",
    "c": 4
  },
  {
    "en": "Physician",
    "es": "Médico",
    "c": 4
  },
  {
    "en": "Physics",
    "es": "La física",
    "c": 4
  },
  {
    "en": "Piano",
    "es": "Piano",
    "c": 4
  },
  {
    "en": "Pick up",
    "es": "Recoger del suelo",
    "c": 4
  },
  {
    "en": "Pick",
    "es": "Coger, escoger, hurgarse la nariz",
    "c": 4
  },
  {
    "en": "Picnic",
    "es": "Picnic",
    "c": 4
  },
  {
    "en": "Picture",
    "es": "Dibujo, cuadro, imagen, hacerse una idea, representarse",
    "c": 4
  },
  {
    "en": "Pie",
    "es": "Tarta cerrada, pastel",
    "c": 4
  },
  {
    "en": "Piece",
    "es": "Pedazo, trozo",
    "c": 4
  },
  {
    "en": "Pig",
    "es": "Cerdo",
    "c": 4
  },
  {
    "en": "Pile",
    "es": "Pila, apilar",
    "c": 4
  },
  {
    "en": "Pill",
    "es": "Pildora, pastilla",
    "c": 4
  },
  {
    "en": "Pilot",
    "es": "Piloto, pilotar",
    "c": 4
  },
  {
    "en": "Pin",
    "es": "Alfiler, chincheta, coger con alfileres, dejar clavado en el sitio",
    "c": 4
  },
  {
    "en": "Pink",
    "es": "Rosa",
    "c": 4
  },
  {
    "en": "Pipe",
    "es": "Pipa, tubería, canalizar",
    "c": 4
  },
  {
    "en": "Pity",
    "es": "Piedad, pena",
    "c": 4
  },
  {
    "en": "Pizza",
    "es": "Pizza",
    "c": 4
  },
  {
    "en": "Place",
    "es": "Sitio, lugar",
    "c": 4
  },
  {
    "en": "Plain",
    "es": "Plano, sencillo, liso (sin estampado), de incognito (ropas)",
    "c": 4
  },
  {
    "en": "Plan",
    "es": "Planear, plan",
    "c": 4
  },
  {
    "en": "Plane",
    "es": "Plano, avión",
    "c": 4
  },
  {
    "en": "Planet",
    "es": "Planeta",
    "c": 4
  },
  {
    "en": "Plant",
    "es": "Planta (vegetal e industrial), plantar",
    "c": 4
  },
  {
    "en": "Plastic",
    "es": "plástico, de plástico",
    "c": 4
  },
  {
    "en": "Plate",
    "es": "Plato, matrícula, fuente, chapa, lamina, chapar",
    "c": 4
  },
  {
    "en": "Platform",
    "es": "Plataforma, andén",
    "c": 4
  },
  {
    "en": "Play",
    "es": "Jugar, reproducir",
    "c": 4
  },
  {
    "en": "Player",
    "es": "Jugador",
    "c": 4
  },
  {
    "en": "Playground",
    "es": "Patio de recreo",
    "c": 4
  },
  {
    "en": "Playing card",
    "es": "Naipe",
    "c": 4
  },
  {
    "en": "Pleasant",
    "es": "Agradable",
    "c": 4
  },
  {
    "en": "Please",
    "es": "Por favor",
    "c": 4
  },
  {
    "en": "Please, note",
    "es": "Tenga en cuenta",
    "c": 4
  },
  {
    "en": "Pleasure",
    "es": "Placer",
    "c": 4
  },
  {
    "en": "Plenty",
    "es": "De sobra",
    "c": 4
  },
  {
    "en": "Plug",
    "es": "Tapón, enchufe macho",
    "c": 4
  },
  {
    "en": "Plug in",
    "es": "Taponar, enchufar",
    "c": 4
  },
  {
    "en": "Pocket",
    "es": "Bolsillo, de bolsillo",
    "c": 4
  },
  {
    "en": "Pocket money",
    "es": "La paga que te dan los padres, dinero para gastos",
    "c": 4
  },
  {
    "en": "Poem",
    "es": "Poema",
    "c": 4
  },
  {
    "en": "Poet",
    "es": "Poeta",
    "c": 4
  },
  {
    "en": "Poetry",
    "es": "Poesía",
    "c": 4
  },
  {
    "en": "Point",
    "es": "Punto, apuntar, el meollo, la cuestión",
    "c": 4
  },
  {
    "en": "Police",
    "es": "La policía",
    "c": 4
  },
  {
    "en": "Police office",
    "es": "Oficina de policía",
    "c": 4
  },
  {
    "en": "Police station",
    "es": "Comisaría",
    "c": 4
  },
  {
    "en": "Policeman",
    "es": "Policía(hombre)",
    "c": 4
  },
  {
    "en": "Policewoman",
    "es": "Policía(mujer)",
    "c": 4
  },
  {
    "en": "Polite",
    "es": "Cortés, educado",
    "c": 4
  },
  {
    "en": "Political",
    "es": "Político",
    "c": 4
  },
  {
    "en": "Politician",
    "es": "Un político",
    "c": 4
  },
  {
    "en": "Politics",
    "es": "La política",
    "c": 4
  },
  {
    "en": "Pollution",
    "es": "Contaminación",
    "c": 4
  },
  {
    "en": "Pool",
    "es": "Piscina, fondos, reservas, caudales",
    "c": 4
  },
  {
    "en": "Poor",
    "es": "Pobre",
    "c": 4
  },
  {
    "en": "Pop",
    "es": "Estallido, surgir, saltar, saltón",
    "c": 4
  },
  {
    "en": "Popular",
    "es": "Popular",
    "c": 4
  },
  {
    "en": "Population",
    "es": "Población",
    "c": 4
  },
  {
    "en": "Port",
    "es": "Puerto",
    "c": 4
  },
  {
    "en": "Porter",
    "es": "Portero",
    "c": 4
  },
  {
    "en": "Position",
    "es": "Posición",
    "c": 4
  },
  {
    "en": "Positive",
    "es": "Positivo",
    "c": 4
  },
  {
    "en": "Possibility",
    "es": "Posibilidad",
    "c": 4
  },
  {
    "en": "Possible",
    "es": "Posible",
    "c": 4
  },
  {
    "en": "Post",
    "es": "Puesto, correo",
    "c": 4
  },
  {
    "en": "Post office",
    "es": "Oficina de correos",
    "c": 4
  },
  {
    "en": "Postage",
    "es": "Franqueo",
    "c": 4
  },
  {
    "en": "Postcard",
    "es": "Postal",
    "c": 4
  },
  {
    "en": "Poster",
    "es": "Poster, cartel",
    "c": 4
  },
  {
    "en": "Postman",
    "es": "Cartero",
    "c": 4
  },
  {
    "en": "Pot",
    "es": "Olla",
    "c": 4
  },
  {
    "en": "Potato",
    "es": "Patata",
    "c": 4
  },
  {
    "en": "Pound",
    "es": "Libra",
    "c": 4
  },
  {
    "en": "Pour",
    "es": "Verter",
    "c": 4
  },
  {
    "en": "Poverty",
    "es": "Pobreza",
    "c": 4
  },
  {
    "en": "Powder",
    "es": "Polvo",
    "c": 4
  },
  {
    "en": "Power",
    "es": "Poder, potencia, electricidad",
    "c": 4
  },
  {
    "en": "Practice",
    "es": "Práctica",
    "c": 4
  },
  {
    "en": "Practise",
    "es": "Practicar",
    "c": 4
  },
  {
    "en": "Pray",
    "es": "Rogar, rezar",
    "c": 4
  },
  {
    "en": "Prayer",
    "es": "Oración",
    "c": 4
  },
  {
    "en": "Prefer",
    "es": "Preferir",
    "c": 4
  },
  {
    "en": "Preparation",
    "es": "Preparación",
    "c": 4
  },
  {
    "en": "Prepare",
    "es": "Preparar",
    "c": 4
  },
  {
    "en": "Prescription",
    "es": "Receta médica",
    "c": 4
  },
  {
    "en": "Present",
    "es": "Regalo, actual",
    "c": 4
  },
  {
    "en": "Presenter",
    "es": "Presentador",
    "c": 4
  },
  {
    "en": "Presents",
    "es": "Regalos",
    "c": 4
  },
  {
    "en": "President",
    "es": "Presidente",
    "c": 4
  },
  {
    "en": "Press",
    "es": "Prensa, prensar, apretar",
    "c": 4
  },
  {
    "en": "Pretty",
    "es": "Bastante, bonita",
    "c": 4
  },
  {
    "en": "Prevent",
    "es": "Prevenir, impedir",
    "c": 4
  },
  {
    "en": "Previous",
    "es": "Anterior, previo",
    "c": 4
  },
  {
    "en": "Price",
    "es": "Precio",
    "c": 4
  },
  {
    "en": "Priest",
    "es": "Sacerdote",
    "c": 4
  },
  {
    "en": "Primary",
    "es": "Primario",
    "c": 4
  },
  {
    "en": "Prime minister",
    "es": "Primer ministro",
    "c": 4
  },
  {
    "en": "Prince",
    "es": "Principe",
    "c": 4
  },
  {
    "en": "Princess",
    "es": "Princesa",
    "c": 4
  },
  {
    "en": "Principal",
    "es": "Principal, director",
    "c": 4
  },
  {
    "en": "Print",
    "es": "Imprimir",
    "c": 4
  },
  {
    "en": "Prison",
    "es": "Prision",
    "c": 4
  },
  {
    "en": "Prisoner",
    "es": "Prisionero",
    "c": 4
  },
  {
    "en": "Private",
    "es": "Privado",
    "c": 4
  },
  {
    "en": "Prize",
    "es": "Premio",
    "c": 4
  },
  {
    "en": "Probable",
    "es": "Probable",
    "c": 4
  },
  {
    "en": "Probably",
    "es": "Probablemente",
    "c": 4
  },
  {
    "en": "Problem",
    "es": "Problema",
    "c": 4
  },
  {
    "en": "Produce",
    "es": "Producir",
    "c": 4
  },
  {
    "en": "Product",
    "es": "Producto",
    "c": 4
  },
  {
    "en": "Profession",
    "es": "Profesion",
    "c": 4
  },
  {
    "en": "Professional",
    "es": "Professional",
    "c": 4
  },
  {
    "en": "Professor",
    "es": "Profesor de universidad",
    "c": 4
  },
  {
    "en": "Program(me)",
    "es": "Programa",
    "c": 4
  },
  {
    "en": "Progress",
    "es": "Progreso, progresar",
    "c": 4
  },
  {
    "en": "Project",
    "es": "Proyecto, proyectar",
    "c": 4
  },
  {
    "en": "Promise",
    "es": "Promesa, prometer",
    "c": 4
  },
  {
    "en": "Pronounce",
    "es": "Pronunciar, pronunciarse",
    "c": 4
  },
  {
    "en": "Pronunciation",
    "es": "Pronunciación",
    "c": 4
  },
  {
    "en": "Proper",
    "es": "Apropiado, como debe ser, decente",
    "c": 4
  },
  {
    "en": "Property",
    "es": "Característica, propiedad",
    "c": 4
  },
  {
    "en": "Protect",
    "es": "Proteger",
    "c": 4
  },
  {
    "en": "Proud",
    "es": "orgulloso",
    "c": 4
  },
  {
    "en": "Prove",
    "es": "Probar",
    "c": 4
  },
  {
    "en": "Provide",
    "es": "Proporcionar, suministrar",
    "c": 4
  },
  {
    "en": "Public",
    "es": "Publico",
    "c": 4
  },
  {
    "en": "Publish",
    "es": "Publicar",
    "c": 4
  },
  {
    "en": "Pull",
    "es": "Tirar",
    "c": 4
  },
  {
    "en": "Pullover",
    "es": "Suéter",
    "c": 4
  },
  {
    "en": "Pump",
    "es": "Bomba, bombear",
    "c": 4
  },
  {
    "en": "Punctual",
    "es": "Puntual",
    "c": 4
  },
  {
    "en": "Punish",
    "es": "Castigar",
    "c": 4
  },
  {
    "en": "Punishment",
    "es": "Castigo",
    "c": 4
  },
  {
    "en": "Pupil",
    "es": "Alumno",
    "c": 4
  },
  {
    "en": "Pure",
    "es": "Puro",
    "c": 4
  },
  {
    "en": "Purple",
    "es": "Morado",
    "c": 4
  },
  {
    "en": "Purpose",
    "es": "Propósito",
    "c": 4
  },
  {
    "en": "Purse",
    "es": "Monedero",
    "c": 4
  },
  {
    "en": "Push",
    "es": "Pulsar, empujar",
    "c": 4
  },
  {
    "en": "Put away",
    "es": "Guardar",
    "c": 4
  },
  {
    "en": "Put down",
    "es": "Poner en el suelo",
    "c": 4
  },
  {
    "en": "Put off",
    "es": "Postponer, echar para atrás, disuadir",
    "c": 4
  },
  {
    "en": "Put on",
    "es": "Ponerse",
    "c": 4
  },
  {
    "en": "Put out",
    "es": "Poner hacia afuera, sacar, tirar, apagar, extinguir",
    "c": 4
  },
  {
    "en": "Put up",
    "es": "Subir, alojarse, acomodar, montar",
    "c": 4
  },
  {
    "en": "Put",
    "es": "Poner",
    "c": 4
  },
  {
    "en": "Pyjamas",
    "es": "Pijama",
    "c": 4
  },
  {
    "en": "Qualification",
    "es": "Calificación, cualificación",
    "c": 4
  },
  {
    "en": "Qualify",
    "es": "Calificarse",
    "c": 4
  },
  {
    "en": "Quality",
    "es": "Calidad",
    "c": 4
  },
  {
    "en": "Quantity",
    "es": "Cantidad",
    "c": 4
  },
  {
    "en": "Quarter",
    "es": "Cuarto",
    "c": 4
  },
  {
    "en": "Quay",
    "es": "Muelle",
    "c": 4
  },
  {
    "en": "Queen",
    "es": "Reina",
    "c": 4
  },
  {
    "en": "Question",
    "es": "Pregunta, preguntar",
    "c": 4
  },
  {
    "en": "Questionnaire",
    "es": "Cuestionario",
    "c": 4
  },
  {
    "en": "Queue",
    "es": "Cola (fila de personas)",
    "c": 4
  },
  {
    "en": "Quick",
    "es": "Deprisa, ligero",
    "c": 4
  },
  {
    "en": "Quiet",
    "es": "Tranquilo, callado y quieto",
    "c": 4
  },
  {
    "en": "Quit",
    "es": "Renunciar, absolver",
    "c": 4
  },
  {
    "en": "Quite",
    "es": "Bastante",
    "c": 4
  },
  {
    "en": "Quiz",
    "es": "Concurso de preguntas",
    "c": 4
  },
  {
    "en": "Rabbit",
    "es": "Conejo",
    "c": 4
  },
  {
    "en": "Race",
    "es": "Carrera, raza",
    "c": 4
  },
  {
    "en": "Racket",
    "es": "Raqueta",
    "c": 4
  },
  {
    "en": "Radio",
    "es": "Radio, radiar",
    "c": 4
  },
  {
    "en": "Rail",
    "es": "Carril",
    "c": 4
  },
  {
    "en": "Rain",
    "es": "Llover, lluvia",
    "c": 4
  },
  {
    "en": "Raincoat",
    "es": "Chubasquero",
    "c": 4
  },
  {
    "en": "Rainfoest",
    "es": "Selva",
    "c": 4
  },
  {
    "en": "Raise",
    "es": "Elevar",
    "c": 4
  },
  {
    "en": "Range",
    "es": "Serie, muestrario, espectro, alcance, escalafón",
    "c": 4
  },
  {
    "en": "Rank",
    "es": "Rango",
    "c": 4
  },
  {
    "en": "Rare",
    "es": "Raro, poco hecho, infrecuente",
    "c": 4
  },
  {
    "en": "Rarely",
    "es": "Raramente",
    "c": 4
  },
  {
    "en": "Rather",
    "es": "Bastante",
    "c": 4
  },
  {
    "en": "Raw",
    "es": "Crudo",
    "c": 4
  },
  {
    "en": "Razor",
    "es": "Navaja",
    "c": 4
  },
  {
    "en": "Reach",
    "es": "Alcanzar",
    "c": 4
  },
  {
    "en": "Read a notice",
    "es": "Leer un aviso",
    "c": 4
  },
  {
    "en": "Read",
    "es": "Leer",
    "c": 4
  },
  {
    "en": "Ready",
    "es": "Preparado, listo",
    "c": 4
  },
  {
    "en": "Real",
    "es": "Real",
    "c": 4
  },
  {
    "en": "Realise",
    "es": "Darse cuenta de",
    "c": 4
  },
  {
    "en": "Realistic",
    "es": "Realista",
    "c": 4
  },
  {
    "en": "Really",
    "es": "Realmente",
    "c": 4
  },
  {
    "en": "Reason",
    "es": "Razón",
    "c": 4
  },
  {
    "en": "Reasonable",
    "es": "Razonable",
    "c": 4
  },
  {
    "en": "Receipt",
    "es": "Recibo",
    "c": 4
  },
  {
    "en": "Receive",
    "es": "Recibir",
    "c": 4
  },
  {
    "en": "Recent",
    "es": "Reciente",
    "c": 4
  },
  {
    "en": "Reception",
    "es": "Recepción",
    "c": 4
  },
  {
    "en": "Recipe",
    "es": "Receta culinaria",
    "c": 4
  },
  {
    "en": "Recommend",
    "es": "Recomendar",
    "c": 4
  },
  {
    "en": "Record",
    "es": "Grabar, un registro",
    "c": 4
  },
  {
    "en": "Recording",
    "es": "Grabación",
    "c": 4
  },
  {
    "en": "Recover",
    "es": "Recuperar, recobrarse",
    "c": 4
  },
  {
    "en": "Red",
    "es": "Rojo",
    "c": 4
  },
  {
    "en": "Reduce",
    "es": "Reducir",
    "c": 4
  },
  {
    "en": "Refreshments",
    "es": "Refrescos",
    "c": 4
  },
  {
    "en": "Refrigerator",
    "es": "Nevera",
    "c": 4
  },
  {
    "en": "Refund",
    "es": "Reembolso, reembolsar",
    "c": 4
  },
  {
    "en": "Refuse",
    "es": "Rechazar, negarse",
    "c": 4
  },
  {
    "en": "Regarding to",
    "es": "Con respecto a",
    "c": 4
  },
  {
    "en": "Register",
    "es": "Registro",
    "c": 4
  },
  {
    "en": "Registration",
    "es": "Inscripción",
    "c": 4
  },
  {
    "en": "Regret",
    "es": "Pesar, lamentar",
    "c": 4
  },
  {
    "en": "Regular",
    "es": "Regular, habitual",
    "c": 4
  },
  {
    "en": "Relation",
    "es": "Relación",
    "c": 4
  },
  {
    "en": "Relationship",
    "es": "Relación personal",
    "c": 4
  },
  {
    "en": "Relative",
    "es": "Relativo, pariente",
    "c": 4
  },
  {
    "en": "Relax",
    "es": "Relajación",
    "c": 4
  },
  {
    "en": "Relaxation",
    "es": "Relajación",
    "c": 4
  },
  {
    "en": "Reliable",
    "es": "De fiar",
    "c": 4
  },
  {
    "en": "Religion",
    "es": "Religión",
    "c": 4
  },
  {
    "en": "Remain",
    "es": "Permanecer, restar, quedar",
    "c": 4
  },
  {
    "en": "Remember",
    "es": "Recordar (acordarse)",
    "c": 4
  },
  {
    "en": "Remind",
    "es": "Recordar a alguien",
    "c": 4
  },
  {
    "en": "Remove",
    "es": "Retirar, remover",
    "c": 4
  },
  {
    "en": "Rent",
    "es": "Alquilar, el alquiler",
    "c": 4
  },
  {
    "en": "Repair",
    "es": "Reparar, una reparación",
    "c": 4
  },
  {
    "en": "Repeat",
    "es": "Repetir",
    "c": 4
  },
  {
    "en": "Replace",
    "es": "Reemplazar",
    "c": 4
  },
  {
    "en": "Reply",
    "es": "Respuesta, responder",
    "c": 4
  },
  {
    "en": "Report",
    "es": "Informe, informar",
    "c": 4
  },
  {
    "en": "Request",
    "es": "Solicitud, solicitar",
    "c": 4
  },
  {
    "en": "Require",
    "es": "Exigir, requerir",
    "c": 4
  },
  {
    "en": "Rescue",
    "es": "Rescate, rescatar",
    "c": 4
  },
  {
    "en": "Research",
    "es": "Investigación, investigar",
    "c": 4
  },
  {
    "en": "Reservation",
    "es": "Reserva",
    "c": 4
  },
  {
    "en": "Reserve",
    "es": "Reserva",
    "c": 4
  },
  {
    "en": "Respect",
    "es": "Respeto, respetar",
    "c": 4
  },
  {
    "en": "Responsible",
    "es": "Responsable",
    "c": 4
  },
  {
    "en": "Rest",
    "es": "Resto",
    "c": 4
  },
  {
    "en": "Restaurant",
    "es": "Restaurante",
    "c": 4
  },
  {
    "en": "Result",
    "es": "Resultado, resultar",
    "c": 4
  },
  {
    "en": "Retire",
    "es": "Retirarse",
    "c": 4
  },
  {
    "en": "Return",
    "es": "Volver, devolver, de ida y vuelta, el regreso",
    "c": 4
  },
  {
    "en": "Review",
    "es": "Revisión, revisar, pasar, revista",
    "c": 4
  },
  {
    "en": "Revise",
    "es": "Revisar",
    "c": 4
  },
  {
    "en": "Reward",
    "es": "Recompensa, recompensar",
    "c": 4
  },
  {
    "en": "Rice",
    "es": "Arroz",
    "c": 4
  },
  {
    "en": "Ride",
    "es": "Montar, un paseo, una vuelta, atracción de feria, un viaje",
    "c": 4
  },
  {
    "en": "Right",
    "es": "Correcto, derecha",
    "c": 4
  },
  {
    "en": "Ring",
    "es": "Anillo",
    "c": 4
  },
  {
    "en": "Ring back",
    "es": "Devolver la llamada",
    "c": 4
  },
  {
    "en": "Ring off",
    "es": "Colgar",
    "c": 4
  },
  {
    "en": "Ripe",
    "es": "Maduro, madurar",
    "c": 4
  },
  {
    "en": "Rise",
    "es": "Aumento, aumentar, surgimiento, surgir",
    "c": 4
  },
  {
    "en": "River",
    "es": "Rio",
    "c": 4
  },
  {
    "en": "Road",
    "es": "Carretera",
    "c": 4
  },
  {
    "en": "Rob",
    "es": "Robar (a personas e instituciones)",
    "c": 4
  },
  {
    "en": "Robbery",
    "es": "Robo",
    "c": 4
  },
  {
    "en": "Rock",
    "es": "Rock, roca, balancearse, estremecerse",
    "c": 4
  },
  {
    "en": "Role",
    "es": "Papel en una obra teatral",
    "c": 4
  },
  {
    "en": "Roll",
    "es": "Pergamino",
    "c": 4
  },
  {
    "en": "Roof",
    "es": "Techo, techar",
    "c": 4
  },
  {
    "en": "Room",
    "es": "Habitación, espacio",
    "c": 4
  },
  {
    "en": "Rose",
    "es": "Rosa",
    "c": 4
  },
  {
    "en": "Rough",
    "es": "Áspero, duro, rústico, esquemático, en borrador, escarpado, picado (mar)",
    "c": 4
  },
  {
    "en": "Round",
    "es": "Alrededor",
    "c": 4
  },
  {
    "en": "Roundabout",
    "es": "Rotonda",
    "c": 4
  },
  {
    "en": "Route",
    "es": "Ruta",
    "c": 4
  },
  {
    "en": "Row",
    "es": "Remar, hilera, pelea",
    "c": 4
  },
  {
    "en": "Rubber",
    "es": "Goma",
    "c": 4
  },
  {
    "en": "Rubbish",
    "es": "Basura",
    "c": 4
  },
  {
    "en": "Rude",
    "es": "Maleducado",
    "c": 4
  },
  {
    "en": "Rugby",
    "es": "Rugby",
    "c": 4
  },
  {
    "en": "Ruin",
    "es": "Ruina, arruinar",
    "c": 4
  },
  {
    "en": "Rule",
    "es": "Mandar, gobernar",
    "c": 4
  },
  {
    "en": "Ruler",
    "es": "Gobernante, regla",
    "c": 4
  },
  {
    "en": "Run",
    "es": "Correr, llevar a cuenta, administrar, ejecutar, recorrido",
    "c": 4
  },
  {
    "en": "Run out of",
    "es": "Quedarse sin",
    "c": 4
  },
  {
    "en": "Sad",
    "es": "Triste",
    "c": 4
  },
  {
    "en": "Safe",
    "es": "Seguro",
    "c": 4
  },
  {
    "en": "Safety",
    "es": "Seguridad",
    "c": 4
  },
  {
    "en": "Sail",
    "es": "Navegar, vela",
    "c": 4
  },
  {
    "en": "Salad",
    "es": "Ensalada",
    "c": 4
  },
  {
    "en": "Salary",
    "es": "Salario",
    "c": 4
  },
  {
    "en": "Sale",
    "es": "Venta, liquidación",
    "c": 4
  },
  {
    "en": "Salesman",
    "es": "Vendedor",
    "c": 4
  },
  {
    "en": "Salt",
    "es": "Sal",
    "c": 4
  },
  {
    "en": "Same",
    "es": "Mismo, igual",
    "c": 4
  },
  {
    "en": "Sand",
    "es": "Arena",
    "c": 4
  },
  {
    "en": "Sandwich",
    "es": "Bocadillo",
    "c": 4
  },
  {
    "en": "Satisfactory",
    "es": "Satisfactorio",
    "c": 4
  },
  {
    "en": "Satisfied",
    "es": "Satisfecho",
    "c": 4
  },
  {
    "en": "Saucer",
    "es": "Platillo, plato de postre",
    "c": 4
  },
  {
    "en": "Sausage",
    "es": "Salchicha",
    "c": 4
  },
  {
    "en": "Save",
    "es": "Salvar, ahorrar, partida guardada",
    "c": 4
  },
  {
    "en": "Say",
    "es": "Decir, oye",
    "c": 4
  },
  {
    "en": "Scene",
    "es": "Escena",
    "c": 4
  },
  {
    "en": "Scenery",
    "es": "Escenario",
    "c": 4
  },
  {
    "en": "School",
    "es": "Colegio, banco de peces",
    "c": 4
  },
  {
    "en": "Science",
    "es": "Ciencia",
    "c": 4
  },
  {
    "en": "Science fiction",
    "es": "Ciencia ficción",
    "c": 4
  },
  {
    "en": "Scientific",
    "es": "Científico",
    "c": 4
  },
  {
    "en": "Scientist",
    "es": "Científico",
    "c": 4
  },
  {
    "en": "Scissors",
    "es": "Tijeras",
    "c": 4
  },
  {
    "en": "Scooter",
    "es": "Ciclomotor",
    "c": 4
  },
  {
    "en": "Score",
    "es": "Puntuación, puntuar, partitura, veintena",
    "c": 4
  },
  {
    "en": "Screen",
    "es": "Pantalla",
    "c": 4
  },
  {
    "en": "Sculpture",
    "es": "Escultura",
    "c": 4
  },
  {
    "en": "Sea",
    "es": "Mar",
    "c": 4
  },
  {
    "en": "Search",
    "es": "Buscar, búsqueda",
    "c": 4
  },
  {
    "en": "Seaside",
    "es": "Orilla del mar",
    "c": 4
  },
  {
    "en": "Season",
    "es": "Estación, temporada",
    "c": 4
  },
  {
    "en": "Seat",
    "es": "Asiento",
    "c": 4
  },
  {
    "en": "Seat belt",
    "es": "Cinturón de seguridad",
    "c": 4
  },
  {
    "en": "Second",
    "es": "Segundo, secundar",
    "c": 4
  },
  {
    "en": "Secondary",
    "es": "Secundario",
    "c": 4
  },
  {
    "en": "Secret",
    "es": "Secreto",
    "c": 4
  },
  {
    "en": "Secretary",
    "es": "Secretaria",
    "c": 4
  },
  {
    "en": "Security",
    "es": "Seguridad",
    "c": 4
  },
  {
    "en": "See",
    "es": "Ver",
    "c": 4
  },
  {
    "en": "Sell",
    "es": "Vender",
    "c": 4
  },
  {
    "en": "Seem",
    "es": "Parecer",
    "c": 4
  },
  {
    "en": "Seldom",
    "es": "Rara vez",
    "c": 4
  },
  {
    "en": "Select",
    "es": "Seleccionar",
    "c": 4
  },
  {
    "en": "Self-service",
    "es": "Autoservicio",
    "c": 4
  },
  {
    "en": "Send",
    "es": "Enviar",
    "c": 4
  },
  {
    "en": "Sensible",
    "es": "Sensato",
    "c": 4
  },
  {
    "en": "Sentence",
    "es": "Oración, sentencia",
    "c": 4
  },
  {
    "en": "Separate",
    "es": "Separar, separado",
    "c": 4
  },
  {
    "en": "Series",
    "es": "Serie",
    "c": 4
  },
  {
    "en": "Serious",
    "es": "Serio",
    "c": 4
  },
  {
    "en": "Servant",
    "es": "Criado",
    "c": 4
  },
  {
    "en": "Serve",
    "es": "Servir",
    "c": 4
  },
  {
    "en": "Service",
    "es": "Servicio, hacer el mantenimiento",
    "c": 4
  },
  {
    "en": "Set",
    "es": "Colocar, disponer",
    "c": 4
  },
  {
    "en": "Set free",
    "es": "Liberar",
    "c": 4
  },
  {
    "en": "Set off",
    "es": "Saltar un alarma o trampa",
    "c": 4
  },
  {
    "en": "Set out",
    "es": "Ponerse en amino",
    "c": 4
  },
  {
    "en": "Set up",
    "es": "Colocar, disponer, montar",
    "c": 4
  },
  {
    "en": "Several",
    "es": "Varios",
    "c": 4
  },
  {
    "en": "Sew",
    "es": "Coser",
    "c": 4
  },
  {
    "en": "Shade",
    "es": "Cortina, sombrío, las sombras",
    "c": 4
  },
  {
    "en": "Shadow",
    "es": "Sombra proyectada",
    "c": 4
  },
  {
    "en": "Shake",
    "es": "Agitar",
    "c": 4
  },
  {
    "en": "Shallow",
    "es": "Poco profundo",
    "c": 4
  },
  {
    "en": "Shame",
    "es": "Vergüenza",
    "c": 4
  },
  {
    "en": "Shampoo",
    "es": "Champú",
    "c": 4
  },
  {
    "en": "Shape",
    "es": "Forma",
    "c": 4
  },
  {
    "en": "Shark",
    "es": "tiburón",
    "c": 4
  },
  {
    "en": "Sharp",
    "es": "Afilado, agudo",
    "c": 4
  },
  {
    "en": "Shave",
    "es": "Afeitarse, afeitado",
    "c": 4
  },
  {
    "en": "Sheep",
    "es": "Oveja, ovejas",
    "c": 4
  },
  {
    "en": "Sheet",
    "es": "Hoja, lamina, sábana",
    "c": 4
  },
  {
    "en": "Shelf",
    "es": "Estante, balda",
    "c": 4
  },
  {
    "en": "Shine",
    "es": "Brillo, brillar",
    "c": 4
  },
  {
    "en": "Ship",
    "es": "Barco, nave, enviar",
    "c": 4
  },
  {
    "en": "Shirt",
    "es": "Camisa",
    "c": 4
  },
  {
    "en": "Shock",
    "es": "Choque, conmoción, conmocionar",
    "c": 4
  },
  {
    "en": "Shoe",
    "es": "Zapato",
    "c": 4
  },
  {
    "en": "Shoot",
    "es": "Disparar, chutar, filmar",
    "c": 4
  },
  {
    "en": "Shop",
    "es": "Tienda",
    "c": 4
  },
  {
    "en": "Shop assistant",
    "es": "Dependiente",
    "c": 4
  },
  {
    "en": "Shopkeeper",
    "es": "Tendero",
    "c": 4
  },
  {
    "en": "Shore",
    "es": "Orilla del mar",
    "c": 4
  },
  {
    "en": "Short",
    "es": "Corto",
    "c": 4
  },
  {
    "en": "Shorts",
    "es": "Pantalones cortos",
    "c": 4
  },
  {
    "en": "Shoulder",
    "es": "Hombro",
    "c": 4
  },
  {
    "en": "Shout",
    "es": "Grito, gritar",
    "c": 4
  },
  {
    "en": "Show",
    "es": "Mostrar, espectáculo",
    "c": 4
  },
  {
    "en": "Shower",
    "es": "Ducha, chaparrón",
    "c": 4
  },
  {
    "en": "Shut",
    "es": "Cerrar",
    "c": 4
  },
  {
    "en": "Shy",
    "es": "Tímido",
    "c": 4
  },
  {
    "en": "Sick",
    "es": "Enfermo, mareado",
    "c": 4
  },
  {
    "en": "Side",
    "es": "Lado",
    "c": 4
  },
  {
    "en": "Sight",
    "es": "Vista",
    "c": 4
  },
  {
    "en": "Sightseeing",
    "es": "Ver monumentos, paisajes por turismo",
    "c": 4
  },
  {
    "en": "Signal",
    "es": "Señal, señalar",
    "c": 4
  },
  {
    "en": "Signature",
    "es": "Firma",
    "c": 4
  },
  {
    "en": "Silence",
    "es": "Silencio",
    "c": 4
  },
  {
    "en": "Silent",
    "es": "Silencioso",
    "c": 4
  },
  {
    "en": "Silk",
    "es": "Seda",
    "c": 4
  },
  {
    "en": "Silly",
    "es": "Tonto",
    "c": 4
  },
  {
    "en": "Silver",
    "es": "Plata",
    "c": 4
  },
  {
    "en": "Similar",
    "es": "Similar",
    "c": 4
  },
  {
    "en": "Simple",
    "es": "Simple",
    "c": 4
  },
  {
    "en": "Sincerely",
    "es": "Sinceramente",
    "c": 4
  },
  {
    "en": "Sing",
    "es": "Cantar",
    "c": 4
  },
  {
    "en": "Single",
    "es": "Sencillo, soltero",
    "c": 4
  },
  {
    "en": "Singpost",
    "es": "Poste indicador",
    "c": 4
  },
  {
    "en": "Sink",
    "es": "Fregadero, hundirse",
    "c": 4
  },
  {
    "en": "Sir",
    "es": "Señor",
    "c": 4
  },
  {
    "en": "Sister",
    "es": "Hermana",
    "c": 4
  },
  {
    "en": "Sit",
    "es": "Estar sentado",
    "c": 4
  },
  {
    "en": "Site",
    "es": "Sitio, sede",
    "c": 4
  },
  {
    "en": "Sitting room",
    "es": "Salón",
    "c": 4
  },
  {
    "en": "Situated",
    "es": "Situado",
    "c": 4
  },
  {
    "en": "Situation",
    "es": "Situación",
    "c": 4
  },
  {
    "en": "Size",
    "es": "Talla, tamaño",
    "c": 4
  },
  {
    "en": "Skateboard",
    "es": "Monopatín",
    "c": 4
  },
  {
    "en": "Ski",
    "es": "Esquí",
    "c": 4
  },
  {
    "en": "Skill",
    "es": "Habilidad",
    "c": 4
  },
  {
    "en": "Skilled",
    "es": "Habilidoso, cualificado",
    "c": 4
  },
  {
    "en": "Skin",
    "es": "Piel, despellejar",
    "c": 4
  },
  {
    "en": "Skirt",
    "es": "Falda",
    "c": 4
  },
  {
    "en": "Sky",
    "es": "Cielo",
    "c": 4
  },
  {
    "en": "Sleep",
    "es": "Dormir, sueño",
    "c": 4
  },
  {
    "en": "Sleeve",
    "es": "Manga, funda",
    "c": 4
  },
  {
    "en": "Slice",
    "es": "Rebanada, rebanar",
    "c": 4
  },
  {
    "en": "Slim",
    "es": "Delgado, esbelto",
    "c": 4
  },
  {
    "en": "Slip",
    "es": "Resbalón, resbalarse, resbalar, deslizarse, papelito",
    "c": 4
  },
  {
    "en": "Slope",
    "es": "Pendiente, cuesta",
    "c": 4
  },
  {
    "en": "Slow",
    "es": "Despacio",
    "c": 4
  },
  {
    "en": "Small",
    "es": "Pequeño",
    "c": 4
  },
  {
    "en": "Smart",
    "es": "Inteligente, elegante",
    "c": 4
  },
  {
    "en": "Smell",
    "es": "Oler, olor",
    "c": 4
  },
  {
    "en": "Smile",
    "es": "Sonrisa, sonreír",
    "c": 4
  },
  {
    "en": "Smoke",
    "es": "Fumar, humo",
    "c": 4
  },
  {
    "en": "Smooth",
    "es": "Liso, suave",
    "c": 4
  },
  {
    "en": "Snack",
    "es": "Tentempié",
    "c": 4
  },
  {
    "en": "Snake",
    "es": "Serpiente",
    "c": 4
  },
  {
    "en": "Snow",
    "es": "Nieve, nevar",
    "c": 4
  },
  {
    "en": "Snowball",
    "es": "Bola de nieve",
    "c": 4
  },
  {
    "en": "Snowboard",
    "es": "Tabla de snow",
    "c": 4
  },
  {
    "en": "Snowman",
    "es": "Muñeco de nieve",
    "c": 4
  },
  {
    "en": "Snowstorm",
    "es": "Tormenta de nieve",
    "c": 4
  },
  {
    "en": "So",
    "es": "Así qué, tan",
    "c": 4
  },
  {
    "en": "Soap",
    "es": "Jabón",
    "c": 4
  },
  {
    "en": "Social",
    "es": "Social",
    "c": 4
  },
  {
    "en": "Society",
    "es": "Sociedad",
    "c": 4
  },
  {
    "en": "Sock",
    "es": "Calcetín",
    "c": 4
  },
  {
    "en": "Sofa",
    "es": "Sofá",
    "c": 4
  },
  {
    "en": "Soft",
    "es": "Suave, blando",
    "c": 4
  },
  {
    "en": "Software",
    "es": "Software, programas",
    "c": 4
  },
  {
    "en": "Soil",
    "es": "Suelo, terreno, terruño",
    "c": 4
  },
  {
    "en": "Soldier",
    "es": "Soldado",
    "c": 4
  },
  {
    "en": "Solid",
    "es": "Sólido",
    "c": 4
  },
  {
    "en": "Some",
    "es": "Algo de, unos, algunos",
    "c": 4
  },
  {
    "en": "Somebody",
    "es": "Alguien",
    "c": 4
  },
  {
    "en": "Someone",
    "es": "Alguien",
    "c": 4
  },
  {
    "en": "Something",
    "es": "Algo",
    "c": 4
  },
  {
    "en": "Sometimes",
    "es": "A veces",
    "c": 4
  },
  {
    "en": "Somewhere",
    "es": "En alguna parte",
    "c": 4
  },
  {
    "en": "Son",
    "es": "Hijo",
    "c": 4
  },
  {
    "en": "Song",
    "es": "Canción",
    "c": 4
  },
  {
    "en": "Soon",
    "es": "Pronto",
    "c": 4
  },
  {
    "en": "Sore",
    "es": "Llaga, dolorido",
    "c": 4
  },
  {
    "en": "Sorry",
    "es": "Lo siento",
    "c": 4
  },
  {
    "en": "Sort",
    "es": "Tipo, clase, diferenciar, separar",
    "c": 4
  },
  {
    "en": "Sort of",
    "es": "Más o menos",
    "c": 4
  },
  {
    "en": "So-so",
    "es": "Así, así",
    "c": 4
  },
  {
    "en": "Sound",
    "es": "Sonido",
    "c": 4
  },
  {
    "en": "Soup",
    "es": "Sopa",
    "c": 4
  },
  {
    "en": "Sour",
    "es": "Agrio",
    "c": 4
  },
  {
    "en": "South",
    "es": "Sur",
    "c": 4
  },
  {
    "en": "Southeast",
    "es": "Sureste",
    "c": 4
  },
  {
    "en": "Southwest",
    "es": "Suroeste",
    "c": 4
  },
  {
    "en": "Souvenir",
    "es": "Souvenir, recuerdo",
    "c": 4
  },
  {
    "en": "Space",
    "es": "Espacio",
    "c": 4
  },
  {
    "en": "Spade",
    "es": "Pala",
    "c": 4
  },
  {
    "en": "Spare",
    "es": "De repuesto, de sobra",
    "c": 4
  },
  {
    "en": "Speak",
    "es": "Hablar",
    "c": 4
  },
  {
    "en": "Special",
    "es": "Especial",
    "c": 4
  },
  {
    "en": "Specially",
    "es": "Especialmente",
    "c": 4
  },
  {
    "en": "Speech",
    "es": "Discurso",
    "c": 4
  },
  {
    "en": "Speed",
    "es": "Velocidad",
    "c": 4
  },
  {
    "en": "Spell",
    "es": "Deletrear, hechizo, hechizar",
    "c": 4
  },
  {
    "en": "Spend",
    "es": "Pasar tiempo, gastar dinero",
    "c": 4
  },
  {
    "en": "Spill",
    "es": "Vertido, verter, derramar",
    "c": 4
  },
  {
    "en": "Spinach",
    "es": "Espinaca",
    "c": 4
  },
  {
    "en": "Spoil",
    "es": "Echar a perder, mimar",
    "c": 4
  },
  {
    "en": "Spoon",
    "es": "Cuchara",
    "c": 4
  },
  {
    "en": "Sport",
    "es": "Deporte",
    "c": 4
  },
  {
    "en": "Spot",
    "es": "Lugar, punto, anuncio televisivo",
    "c": 4
  },
  {
    "en": "Spy",
    "es": "Espía, espiar",
    "c": 4
  },
  {
    "en": "Square",
    "es": "Cuadrado",
    "c": 4
  },
  {
    "en": "Squash",
    "es": "Squash",
    "c": 4
  },
  {
    "en": "Stadium",
    "es": "Estadio",
    "c": 4
  },
  {
    "en": "Staff",
    "es": "Personal, báculo",
    "c": 4
  },
  {
    "en": "Stage",
    "es": "Etapa, escenario",
    "c": 4
  },
  {
    "en": "Stain",
    "es": "Mancha, manchar",
    "c": 4
  },
  {
    "en": "Stairs",
    "es": "Escaleras",
    "c": 4
  },
  {
    "en": "Stall",
    "es": "Puesto, calarse",
    "c": 4
  },
  {
    "en": "Stamp",
    "es": "Sello, sellar",
    "c": 4
  },
  {
    "en": "Standar",
    "es": "Estándar, estandarte",
    "c": 4
  },
  {
    "en": "Star",
    "es": "Estrella",
    "c": 4
  },
  {
    "en": "Start",
    "es": "Empezar, arrancar, comienzo",
    "c": 4
  },
  {
    "en": "State",
    "es": "Estado, afirmar",
    "c": 4
  },
  {
    "en": "Statement",
    "es": "Declaración, afirmación",
    "c": 4
  },
  {
    "en": "Station",
    "es": "Estación, puesto",
    "c": 4
  },
  {
    "en": "Statue",
    "es": "Estatua",
    "c": 4
  },
  {
    "en": "Stay",
    "es": "Estancia, alojarse, permanecer",
    "c": 4
  },
  {
    "en": "Stay behind",
    "es": "Quedarse atrás, rezagarse",
    "c": 4
  },
  {
    "en": "Steak",
    "es": "Filete",
    "c": 4
  },
  {
    "en": "Steal",
    "es": "Robar cosas",
    "c": 4
  },
  {
    "en": "Steam",
    "es": "Vapor, soltar vapor",
    "c": 4
  },
  {
    "en": "Steel",
    "es": "Acero",
    "c": 4
  },
  {
    "en": "Steep",
    "es": "Empinado",
    "c": 4
  },
  {
    "en": "Step",
    "es": "Paso, escalón, dar un paso",
    "c": 4
  },
  {
    "en": "Stick",
    "es": "Palo, pegar, adherirse",
    "c": 4
  },
  {
    "en": "Sticky",
    "es": "Pegajoso",
    "c": 4
  },
  {
    "en": "Stiff",
    "es": "Rigido",
    "c": 4
  },
  {
    "en": "Still",
    "es": "Todavía, aún, quieto, sin gas",
    "c": 4
  },
  {
    "en": "Stir",
    "es": "Revolver",
    "c": 4
  },
  {
    "en": "Stomach",
    "es": "Estómago",
    "c": 4
  },
  {
    "en": "Stone",
    "es": "Piedra",
    "c": 4
  },
  {
    "en": "Stop",
    "es": "Parar, parada",
    "c": 4
  },
  {
    "en": "Storm",
    "es": "Tormenta tomar al asalto",
    "c": 4
  },
  {
    "en": "Story",
    "es": "Relato, cuento",
    "c": 4
  },
  {
    "en": "Straight",
    "es": "Derecho, recto, liso",
    "c": 4
  },
  {
    "en": "Strange",
    "es": "Extraño",
    "c": 4
  },
  {
    "en": "Stranger",
    "es": "Extranjero",
    "c": 4
  },
  {
    "en": "Strawberry",
    "es": "Fresa",
    "c": 4
  },
  {
    "en": "Stream",
    "es": "Arroyo, corriente",
    "c": 4
  },
  {
    "en": "Street",
    "es": "Calle",
    "c": 4
  },
  {
    "en": "Stress",
    "es": "Tensión, enfatizar",
    "c": 4
  },
  {
    "en": "Strict",
    "es": "Estricto",
    "c": 4
  },
  {
    "en": "Strike",
    "es": "Huelga, golpear",
    "c": 4
  },
  {
    "en": "Strong",
    "es": "Fuerte",
    "c": 4
  },
  {
    "en": "Student",
    "es": "Estudiante",
    "c": 4
  },
  {
    "en": "Studio",
    "es": "Estudio",
    "c": 4
  },
  {
    "en": "Study",
    "es": "Estudiar",
    "c": 4
  },
  {
    "en": "Stupid",
    "es": "Estúpido",
    "c": 4
  },
  {
    "en": "Style",
    "es": "Estilo",
    "c": 4
  },
  {
    "en": "Subject",
    "es": "Asignatura",
    "c": 4
  },
  {
    "en": "Subtract",
    "es": "Sustraer",
    "c": 4
  },
  {
    "en": "Subway",
    "es": "Metro",
    "c": 4
  },
  {
    "en": "Succeed",
    "es": "Tener éxito",
    "c": 4
  },
  {
    "en": "Success",
    "es": "Éxito",
    "c": 4
  },
  {
    "en": "Such (a)",
    "es": "Tal, tan",
    "c": 4
  },
  {
    "en": "Sudden",
    "es": "Repentino",
    "c": 4
  },
  {
    "en": "Sugar",
    "es": "Azúcar",
    "c": 4
  },
  {
    "en": "Suggest",
    "es": "Preguntar",
    "c": 4
  },
  {
    "en": "Suit",
    "es": "Traje, sentar bien",
    "c": 4
  },
  {
    "en": "Suitable",
    "es": "Adecuado",
    "c": 4
  },
  {
    "en": "Suitcase",
    "es": "Maleta",
    "c": 4
  },
  {
    "en": "Sum",
    "es": "Suma",
    "c": 4
  },
  {
    "en": "Sum up",
    "es": "Resumir",
    "c": 4
  },
  {
    "en": "Sun",
    "es": "Sol",
    "c": 4
  },
  {
    "en": "Sunbathe",
    "es": "Tomar el sol",
    "c": 4
  },
  {
    "en": "Sunlight",
    "es": "Luz del sol",
    "c": 4
  },
  {
    "en": "Sunrise",
    "es": "Salida del sol, amanecer",
    "c": 4
  },
  {
    "en": "Sunset",
    "es": "Puesta del sol, ocaso",
    "c": 4
  },
  {
    "en": "Sunshine",
    "es": "Luz solar, resol",
    "c": 4
  },
  {
    "en": "Supermarket",
    "es": "Supermercado",
    "c": 4
  },
  {
    "en": "Supply",
    "es": "Suministro, suministrar",
    "c": 4
  },
  {
    "en": "Support",
    "es": "Apoyo, apoyar",
    "c": 4
  },
  {
    "en": "Suppose",
    "es": "Suponer",
    "c": 4
  },
  {
    "en": "Surfing",
    "es": "Surf",
    "c": 4
  },
  {
    "en": "Surname",
    "es": "Apellido",
    "c": 4
  },
  {
    "en": "Surprise",
    "es": "Sorpresa, sorprender",
    "c": 4
  },
  {
    "en": "Sweater",
    "es": "Jersey",
    "c": 4
  },
  {
    "en": "Sweatshirt",
    "es": "Sudadera",
    "c": 4
  },
  {
    "en": "Sweep",
    "es": "Barrer, un barrido",
    "c": 4
  },
  {
    "en": "Sweet",
    "es": "Caramelo, dulce, endulzar",
    "c": 4
  },
  {
    "en": "Swim",
    "es": "Nadar",
    "c": 4
  },
  {
    "en": "Swimming costume",
    "es": "Bañador",
    "c": 4
  },
  {
    "en": "Swing",
    "es": "Columpio, balancearse, contornearse",
    "c": 4
  },
  {
    "en": "Switch",
    "es": "Interruptor, turno de trabajo, Conmutador, conmutar",
    "c": 4
  },
  {
    "en": "System",
    "es": "Sistema",
    "c": 4
  },
  {
    "en": "Table",
    "es": "Mesa",
    "c": 4
  },
  {
    "en": "Table-cloth",
    "es": "Mantel",
    "c": 4
  },
  {
    "en": "Tablet",
    "es": "Tableta",
    "c": 4
  },
  {
    "en": "Table-tennis",
    "es": "Mesa de ping-pong",
    "c": 4
  },
  {
    "en": "Take away",
    "es": "Llevar, comida para llevar",
    "c": 4
  },
  {
    "en": "Take care of someone",
    "es": "Tomar cuidado de alguien",
    "c": 4
  },
  {
    "en": "Take off",
    "es": "Despegar, quitarse ropa",
    "c": 4
  },
  {
    "en": "Take part in",
    "es": "Tomar parte",
    "c": 4
  },
  {
    "en": "Take place",
    "es": "Tomar sitio, tener lugar",
    "c": 4
  },
  {
    "en": "Take up to",
    "es": "Aficionarte a algo",
    "c": 4
  },
  {
    "en": "Take",
    "es": "Tomar",
    "c": 4
  },
  {
    "en": "Talent",
    "es": "Talento",
    "c": 4
  },
  {
    "en": "Talk",
    "es": "Conversar",
    "c": 4
  },
  {
    "en": "Tall",
    "es": "Alto",
    "c": 4
  },
  {
    "en": "Tap",
    "es": "Grifo",
    "c": 4
  },
  {
    "en": "Tape",
    "es": "Cinta",
    "c": 4
  },
  {
    "en": "Taste",
    "es": "Sabor, saborear",
    "c": 4
  },
  {
    "en": "Tax",
    "es": "Impuesto, imponer",
    "c": 4
  },
  {
    "en": "Taxi",
    "es": "Taxi",
    "c": 4
  },
  {
    "en": "Tea",
    "es": "Té",
    "c": 4
  },
  {
    "en": "Teach",
    "es": "Enseñar",
    "c": 4
  },
  {
    "en": "Team",
    "es": "Equipo",
    "c": 4
  },
  {
    "en": "Tear",
    "es": "Lagrima, desgarrar",
    "c": 4
  },
  {
    "en": "Technique",
    "es": "Técnica",
    "c": 4
  },
  {
    "en": "Technology",
    "es": "Tecnología",
    "c": 4
  },
  {
    "en": "Teenage",
    "es": "Adolescente",
    "c": 4
  },
  {
    "en": "Telephone",
    "es": "Teléfono, telefonear",
    "c": 4
  },
  {
    "en": "Television",
    "es": "Televisión",
    "c": 4
  },
  {
    "en": "Tell",
    "es": "Contar, decir",
    "c": 4
  },
  {
    "en": "Temperature",
    "es": "Temperatura",
    "c": 4
  },
  {
    "en": "Temporary",
    "es": "Temporal",
    "c": 4
  },
  {
    "en": "Tennis",
    "es": "Tenis",
    "c": 4
  },
  {
    "en": "Tennis racket",
    "es": "Raqueta de tenis",
    "c": 4
  },
  {
    "en": "Tent",
    "es": "Tienda de campaña",
    "c": 4
  },
  {
    "en": "Term",
    "es": "Plazo, trimestre",
    "c": 4
  },
  {
    "en": "Terminal",
    "es": "Terminal",
    "c": 4
  },
  {
    "en": "Terrible",
    "es": "Terrible",
    "c": 4
  },
  {
    "en": "Test",
    "es": "Examen, prueba",
    "c": 4
  },
  {
    "en": "Text",
    "es": "Mandar un SMS, texto",
    "c": 4
  },
  {
    "en": "Than",
    "es": "Que (comparativo)",
    "c": 4
  },
  {
    "en": "Thank",
    "es": "Agradecer",
    "c": 4
  },
  {
    "en": "Thank you",
    "es": "Gracias",
    "c": 4
  },
  {
    "en": "Thanks",
    "es": "Gracias",
    "c": 4
  },
  {
    "en": "Theft",
    "es": "Robo",
    "c": 4
  },
  {
    "en": "Their",
    "es": "Su (ellos)",
    "c": 4
  },
  {
    "en": "Theirs",
    "es": "Suyo (ellos)",
    "c": 4
  },
  {
    "en": "Them",
    "es": "A ellos",
    "c": 4
  },
  {
    "en": "Themselves",
    "es": "A ellos mismos",
    "c": 4
  },
  {
    "en": "Then",
    "es": "Entonces, luego",
    "c": 4
  },
  {
    "en": "There",
    "es": "Allí",
    "c": 4
  },
  {
    "en": "Therefore",
    "es": "Por lo tanto",
    "c": 4
  },
  {
    "en": "Thermometer",
    "es": "Termómetro",
    "c": 4
  },
  {
    "en": "These",
    "es": "Estos",
    "c": 4
  },
  {
    "en": "They",
    "es": "Ellos",
    "c": 4
  },
  {
    "en": "Thick",
    "es": "Espeso",
    "c": 4
  },
  {
    "en": "Thief",
    "es": "Ladrón",
    "c": 4
  },
  {
    "en": "Thin",
    "es": "Delgado",
    "c": 4
  },
  {
    "en": "Thing",
    "es": "Cosa, objeto",
    "c": 4
  },
  {
    "en": "Think",
    "es": "Pensar, creer",
    "c": 4
  },
  {
    "en": "This",
    "es": "Esto",
    "c": 4
  },
  {
    "en": "Those",
    "es": "Aquellos, esos",
    "c": 4
  },
  {
    "en": "Though",
    "es": "Aunque",
    "c": 4
  },
  {
    "en": "Thought",
    "es": "Pensamiento",
    "c": 4
  },
  {
    "en": "Thriller",
    "es": "Novela/película de suspense",
    "c": 4
  },
  {
    "en": "Thrirst",
    "es": "Sed",
    "c": 4
  },
  {
    "en": "Throat",
    "es": "Garganta",
    "c": 4
  },
  {
    "en": "Throughtout",
    "es": "A lo largo de",
    "c": 4
  },
  {
    "en": "Throw away",
    "es": "Tirar a la basura",
    "c": 4
  },
  {
    "en": "Throw",
    "es": "Lanzar",
    "c": 4
  },
  {
    "en": "Thumb",
    "es": "Pulgar",
    "c": 4
  },
  {
    "en": "Thunder",
    "es": "Trueno",
    "c": 4
  },
  {
    "en": "Thunderstorm",
    "es": "Tormenta eléctrica",
    "c": 4
  },
  {
    "en": "Tick",
    "es": "Garrapata, marcar con un tick",
    "c": 4
  },
  {
    "en": "Ticket",
    "es": "Entrada, boleto, billete, recibo",
    "c": 4
  },
  {
    "en": "Tidy",
    "es": "Ordenado",
    "c": 4
  },
  {
    "en": "Tidy up",
    "es": "Poner en orden",
    "c": 4
  },
  {
    "en": "Tiger",
    "es": "Tigre",
    "c": 4
  },
  {
    "en": "Tight",
    "es": "Apretado",
    "c": 4
  },
  {
    "en": "Tin-opener",
    "es": "Abrelatas",
    "c": 4
  },
  {
    "en": "Tiny",
    "es": "Diminuto",
    "c": 4
  },
  {
    "en": "Tip",
    "es": "Punta, boquilla, propina, pista",
    "c": 4
  },
  {
    "en": "Tired",
    "es": "Cansado",
    "c": 4
  },
  {
    "en": "Tittle",
    "es": "Titulo",
    "c": 4
  },
  {
    "en": "To",
    "es": "A",
    "c": 4
  },
  {
    "en": "To care (about/for)",
    "es": "Cuidar",
    "c": 4
  },
  {
    "en": "Toast",
    "es": "Tostada, brindis",
    "c": 4
  },
  {
    "en": "Today",
    "es": "Hoy",
    "c": 4
  },
  {
    "en": "Toe",
    "es": "Dedo del pie",
    "c": 4
  },
  {
    "en": "Together",
    "es": "Juntos",
    "c": 4
  },
  {
    "en": "Toilet",
    "es": "Aseo",
    "c": 4
  },
  {
    "en": "Tomato",
    "es": "Tomate",
    "c": 4
  },
  {
    "en": "Tomorrow",
    "es": "Mañana",
    "c": 4
  },
  {
    "en": "Ton(ne)",
    "es": "Tonelada",
    "c": 4
  },
  {
    "en": "Tongue",
    "es": "Lengua",
    "c": 4
  },
  {
    "en": "Tonight",
    "es": "Esta noche",
    "c": 4
  },
  {
    "en": "Too",
    "es": "También, demasiado",
    "c": 4
  },
  {
    "en": "Tool",
    "es": "Herramienta",
    "c": 4
  },
  {
    "en": "Tooth",
    "es": "Diente",
    "c": 4
  },
  {
    "en": "Toothache",
    "es": "Dolor de muelas",
    "c": 4
  },
  {
    "en": "Toothbrush",
    "es": "Cepillo de dientes",
    "c": 4
  },
  {
    "en": "Toothpaste",
    "es": "Pasta de dientes",
    "c": 4
  },
  {
    "en": "Top",
    "es": "Superior, lo más alto",
    "c": 4
  },
  {
    "en": "Topic",
    "es": "Tópico, tema",
    "c": 4
  },
  {
    "en": "Total",
    "es": "Total",
    "c": 4
  },
  {
    "en": "Touch",
    "es": "Tocar",
    "c": 4
  },
  {
    "en": "Tour",
    "es": "Vuelta, recorrido",
    "c": 4
  },
  {
    "en": "Tourism",
    "es": "Turismo",
    "c": 4
  },
  {
    "en": "Tourist",
    "es": "Turista",
    "c": 4
  },
  {
    "en": "Toward(s)",
    "es": "Hacia",
    "c": 4
  },
  {
    "en": "Towel",
    "es": "Toalla",
    "c": 4
  },
  {
    "en": "Tower",
    "es": "Torre",
    "c": 4
  },
  {
    "en": "Town",
    "es": "Ciudad, pueblo",
    "c": 4
  },
  {
    "en": "Toy",
    "es": "Juguete",
    "c": 4
  },
  {
    "en": "Track",
    "es": "Pista, rastrear",
    "c": 4
  },
  {
    "en": "Track suit",
    "es": "Chandal",
    "c": 4
  },
  {
    "en": "Trade",
    "es": "Comercio",
    "c": 4
  },
  {
    "en": "Traditional",
    "es": "Tradicional",
    "c": 4
  },
  {
    "en": "Traffic",
    "es": "Trafico",
    "c": 4
  },
  {
    "en": "Traffic jam",
    "es": "Atasco",
    "c": 4
  },
  {
    "en": "Traffic light(s)",
    "es": "Semáforo",
    "c": 4
  },
  {
    "en": "Train",
    "es": "Tren, entrenar",
    "c": 4
  },
  {
    "en": "Trainers",
    "es": "Playeras",
    "c": 4
  },
  {
    "en": "Tram",
    "es": "Tranvia",
    "c": 4
  },
  {
    "en": "Transfer",
    "es": "Transferencia, transbordo, transferir",
    "c": 4
  },
  {
    "en": "Translate",
    "es": "Traducir",
    "c": 4
  },
  {
    "en": "Translation",
    "es": "Traducción",
    "c": 4
  },
  {
    "en": "Transport",
    "es": "Transporte, transportar",
    "c": 4
  },
  {
    "en": "Travel",
    "es": "Viajar",
    "c": 4
  },
  {
    "en": "Travel agent",
    "es": "Agente de viajes",
    "c": 4
  },
  {
    "en": "Tree",
    "es": "Árbol",
    "c": 4
  },
  {
    "en": "Trip",
    "es": "Viaje, excursión, salida, escapada, tropezar",
    "c": 4
  },
  {
    "en": "Trouble",
    "es": "Problema, follón",
    "c": 4
  },
  {
    "en": "Trousers",
    "es": "Pantalones",
    "c": 4
  },
  {
    "en": "Truck",
    "es": "Camión",
    "c": 4
  },
  {
    "en": "True",
    "es": "Verdadero",
    "c": 4
  },
  {
    "en": "Trumpet",
    "es": "Trompeta",
    "c": 4
  },
  {
    "en": "Trust",
    "es": "Confianza, confiar",
    "c": 4
  },
  {
    "en": "Truth",
    "es": "Verdad",
    "c": 4
  },
  {
    "en": "Try on",
    "es": "Probarse",
    "c": 4
  },
  {
    "en": "Try",
    "es": "Intentar, probar",
    "c": 4
  },
  {
    "en": "T-shirt",
    "es": "Camiseta",
    "c": 4
  },
  {
    "en": "Tube",
    "es": "Tubo, televisión, metro (solo en América)",
    "c": 4
  },
  {
    "en": "Tune",
    "es": "Melodía, sintonizar",
    "c": 4
  },
  {
    "en": "Tunnel",
    "es": "Túnel",
    "c": 4
  },
  {
    "en": "Turkey",
    "es": "Pavo, Turquía",
    "c": 4
  },
  {
    "en": "Turn",
    "es": "Vez, vuelta, turno, bocacalle, girar, volverse",
    "c": 4
  },
  {
    "en": "Turn down",
    "es": "Rechazar",
    "c": 4
  },
  {
    "en": "Turn into",
    "es": "Convertirse en, resultar ser",
    "c": 4
  },
  {
    "en": "Turn off",
    "es": "Apagar",
    "c": 4
  },
  {
    "en": "Turn on",
    "es": "Encender",
    "c": 4
  },
  {
    "en": "Turn out",
    "es": "Resultar ser",
    "c": 4
  },
  {
    "en": "Turn up",
    "es": "Aparecer",
    "c": 4
  },
  {
    "en": "Turning",
    "es": "Vuelta, giro",
    "c": 4
  },
  {
    "en": "Twice",
    "es": "Dos veces",
    "c": 4
  },
  {
    "en": "Twin",
    "es": "Gemelo",
    "c": 4
  },
  {
    "en": "Type",
    "es": "Tipo, teclear",
    "c": 4
  },
  {
    "en": "Typical",
    "es": "Típico",
    "c": 4
  },
  {
    "en": "Tyre",
    "es": "Neumático",
    "c": 4
  },
  {
    "en": "Ugly",
    "es": "Feo",
    "c": 4
  },
  {
    "en": "Umbrella",
    "es": "Paraguas, sombrilla",
    "c": 4
  },
  {
    "en": "Unable",
    "es": "Incapaz",
    "c": 4
  },
  {
    "en": "Uncle",
    "es": "Tío",
    "c": 4
  },
  {
    "en": "Under",
    "es": "Debajo de",
    "c": 4
  },
  {
    "en": "Underground",
    "es": "Bajo tierra, subterráneo",
    "c": 4
  },
  {
    "en": "Underpants",
    "es": "Calzoncillos",
    "c": 4
  },
  {
    "en": "Understand",
    "es": "Entender",
    "c": 4
  },
  {
    "en": "Uniform",
    "es": "Uniforme",
    "c": 4
  },
  {
    "en": "Universe",
    "es": "Universo",
    "c": 4
  },
  {
    "en": "University",
    "es": "Universidad",
    "c": 4
  },
  {
    "en": "Unleaded",
    "es": "Sin plomo",
    "c": 4
  },
  {
    "en": "Unless",
    "es": "A no ser que",
    "c": 4
  },
  {
    "en": "Until",
    "es": "Hasta",
    "c": 4
  },
  {
    "en": "Until further notice",
    "es": "Hasta nuevo aviso",
    "c": 4
  },
  {
    "en": "Up",
    "es": "Encima de, arriba",
    "c": 4
  },
  {
    "en": "Up to",
    "es": "Hasta",
    "c": 4
  },
  {
    "en": "Update",
    "es": "Actualización, actualizar",
    "c": 4
  },
  {
    "en": "Upon",
    "es": "A la, ante",
    "c": 4
  },
  {
    "en": "Upset",
    "es": "Trastorno, trastornar, disgustar",
    "c": 4
  },
  {
    "en": "Upstairs",
    "es": "Arriba de las escaleras",
    "c": 4
  },
  {
    "en": "Urgent",
    "es": "Urgente",
    "c": 4
  },
  {
    "en": "Us",
    "es": "A nosotros, nos",
    "c": 4
  },
  {
    "en": "Use",
    "es": "Usar, soler (solo en pasado)",
    "c": 4
  },
  {
    "en": "Used to",
    "es": "Solía",
    "c": 4
  },
  {
    "en": "Usual",
    "es": "Usual",
    "c": 4
  },
  {
    "en": "Valley",
    "es": "Valle",
    "c": 4
  },
  {
    "en": "Value",
    "es": "Valor",
    "c": 4
  },
  {
    "en": "Van",
    "es": "Camioneta",
    "c": 4
  },
  {
    "en": "Vanilla",
    "es": "Vainilla",
    "c": 4
  },
  {
    "en": "Variety",
    "es": "Variedad",
    "c": 4
  },
  {
    "en": "Various",
    "es": "Varios",
    "c": 4
  },
  {
    "en": "Vase",
    "es": "Florero",
    "c": 4
  },
  {
    "en": "Veal",
    "es": "Ternera",
    "c": 4
  },
  {
    "en": "Vegetable",
    "es": "Vegetal",
    "c": 4
  },
  {
    "en": "Vegetarian",
    "es": "Vegetariano",
    "c": 4
  },
  {
    "en": "Vehicle",
    "es": "Vehiculo",
    "c": 4
  },
  {
    "en": "Venue",
    "es": "Lugar, destino",
    "c": 4
  },
  {
    "en": "Very",
    "es": "Muy",
    "c": 4
  },
  {
    "en": "Victim",
    "es": "Victima",
    "c": 4
  },
  {
    "en": "Victory",
    "es": "Victoria",
    "c": 4
  },
  {
    "en": "Video",
    "es": "Video",
    "c": 4
  },
  {
    "en": "Video recorder",
    "es": "Grabadora de video",
    "c": 4
  },
  {
    "en": "Videotape",
    "es": "Cinta de video",
    "c": 4
  },
  {
    "en": "View",
    "es": "Ver",
    "c": 4
  },
  {
    "en": "Village",
    "es": "Pueblo",
    "c": 4
  },
  {
    "en": "Violin",
    "es": "Violín",
    "c": 4
  },
  {
    "en": "Visa",
    "es": "Visado, visa",
    "c": 4
  },
  {
    "en": "Visit",
    "es": "Visita, visitar",
    "c": 4
  },
  {
    "en": "Visitor",
    "es": "Visitante",
    "c": 4
  },
  {
    "en": "Vocabulary",
    "es": "Vocabulario",
    "c": 4
  },
  {
    "en": "Voice",
    "es": "Voz, poner voz",
    "c": 4
  },
  {
    "en": "Volleyball",
    "es": "Voleibol",
    "c": 4
  },
  {
    "en": "Vote",
    "es": "Voto",
    "c": 4
  },
  {
    "en": "Voyage",
    "es": "Viaje",
    "c": 4
  },
  {
    "en": "Wages",
    "es": "Salario",
    "c": 4
  },
  {
    "en": "Wait",
    "es": "Esperar",
    "c": 4
  },
  {
    "en": "Waiter",
    "es": "Camarero",
    "c": 4
  },
  {
    "en": "Waiting-room",
    "es": "Sala de espera",
    "c": 4
  },
  {
    "en": "Waitress",
    "es": "Camarera",
    "c": 4
  },
  {
    "en": "Wake up",
    "es": "Despertarse",
    "c": 4
  },
  {
    "en": "Walk",
    "es": "Andar, paseo, sacar a pasear",
    "c": 4
  },
  {
    "en": "Wall",
    "es": "Pared, muro",
    "c": 4
  },
  {
    "en": "Wallet",
    "es": "Cartera",
    "c": 4
  },
  {
    "en": "Want",
    "es": "Querer",
    "c": 4
  },
  {
    "en": "War",
    "es": "Guerra",
    "c": 4
  },
  {
    "en": "Ward",
    "es": "Sala, ala (de edificio)",
    "c": 4
  },
  {
    "en": "Warm",
    "es": "Cálido",
    "c": 4
  },
  {
    "en": "Warn",
    "es": "Advertir",
    "c": 4
  },
  {
    "en": "Wash",
    "es": "Lavar, lavado",
    "c": 4
  },
  {
    "en": "Wash up",
    "es": "Lavarse, asearse",
    "c": 4
  },
  {
    "en": "Wash-basin",
    "es": "Lavabo",
    "c": 4
  },
  {
    "en": "Washing machine",
    "es": "Lavadora",
    "c": 4
  },
  {
    "en": "Waste",
    "es": "Residuos, malgastar",
    "c": 4
  },
  {
    "en": "Waste paper bin",
    "es": "Papelera",
    "c": 4
  },
  {
    "en": "Watch",
    "es": "Ver, contemplar, reloj de pulsera",
    "c": 4
  },
  {
    "en": "Water",
    "es": "Agua, regar",
    "c": 4
  },
  {
    "en": "Waterfall",
    "es": "Cascada",
    "c": 4
  },
  {
    "en": "Wave",
    "es": "Ola, onda, saludar con la mano",
    "c": 4
  },
  {
    "en": "Way",
    "es": "Manera, modo, camino",
    "c": 4
  },
  {
    "en": "WC",
    "es": "Baño",
    "c": 4
  },
  {
    "en": "We",
    "es": "Nosotros",
    "c": 4
  },
  {
    "en": "Weak",
    "es": "Débil",
    "c": 4
  },
  {
    "en": "Wear",
    "es": "Desgaste, desgastar, usar",
    "c": 4
  },
  {
    "en": "Wear off",
    "es": "Desaparecer, extinguirse, gastarse",
    "c": 4
  },
  {
    "en": "Wear out",
    "es": "Desgastar, agotarse, pasarse el efecto",
    "c": 4
  },
  {
    "en": "Web",
    "es": "Web, tela de araña",
    "c": 4
  },
  {
    "en": "Website",
    "es": "Sitio web",
    "c": 4
  },
  {
    "en": "Wedding",
    "es": "Boda",
    "c": 4
  },
  {
    "en": "Week",
    "es": "Semana",
    "c": 4
  },
  {
    "en": "Weekday",
    "es": "Dia laborable",
    "c": 4
  },
  {
    "en": "Weekend",
    "es": "Fin de semana",
    "c": 4
  },
  {
    "en": "Weekly",
    "es": "Semanal",
    "c": 4
  },
  {
    "en": "Weigh",
    "es": "Pesar",
    "c": 4
  },
  {
    "en": "Weight",
    "es": "Peso",
    "c": 4
  },
  {
    "en": "Welcome",
    "es": "Bienvenido",
    "c": 4
  },
  {
    "en": "Welfare",
    "es": "Bienestar",
    "c": 4
  },
  {
    "en": "Well",
    "es": "Bien, pozo",
    "c": 4
  },
  {
    "en": "Well done!",
    "es": "¡Bien hecho!",
    "c": 4
  },
  {
    "en": "Well known",
    "es": "Bien sabido, conocido",
    "c": 4
  },
  {
    "en": "Well-made",
    "es": "Bien hecho",
    "c": 4
  },
  {
    "en": "West",
    "es": "Oeste",
    "c": 4
  },
  {
    "en": "Wet",
    "es": "Húmedo, humedecer",
    "c": 4
  },
  {
    "en": "Whale",
    "es": "Ballena",
    "c": 4
  },
  {
    "en": "What",
    "es": "¿Que?",
    "c": 4
  },
  {
    "en": "Whatever",
    "es": "Loque sea, cualquier cosa",
    "c": 4
  },
  {
    "en": "Wheel",
    "es": "Rueda, timón",
    "c": 4
  },
  {
    "en": "Wheelchair",
    "es": "Silla de ruedas",
    "c": 4
  },
  {
    "en": "When",
    "es": "¿Cuándo?",
    "c": 4
  },
  {
    "en": "Whenever",
    "es": "Cuando quiera que",
    "c": 4
  },
  {
    "en": "Where",
    "es": "¿Donde?",
    "c": 4
  },
  {
    "en": "Wherever",
    "es": "Donde quiera que",
    "c": 4
  },
  {
    "en": "Whether",
    "es": "Si",
    "c": 4
  },
  {
    "en": "Which",
    "es": "Que, el cual",
    "c": 4
  },
  {
    "en": "Whichever",
    "es": "Cualquiera que",
    "c": 4
  },
  {
    "en": "While",
    "es": "Mientras",
    "c": 4
  },
  {
    "en": "White",
    "es": "Blanco",
    "c": 4
  },
  {
    "en": "Who/whom",
    "es": "¿Quién/a quién?",
    "c": 4
  },
  {
    "en": "Whoever",
    "es": "Quien quiera que",
    "c": 4
  },
  {
    "en": "Whole",
    "es": "Conjunto do, entero, integral",
    "c": 4
  },
  {
    "en": "Whose",
    "es": "De quién, cuyo",
    "c": 4
  },
  {
    "en": "Why",
    "es": "¿Por qué?",
    "c": 4
  },
  {
    "en": "Wide",
    "es": "Ancho",
    "c": 4
  },
  {
    "en": "Width",
    "es": "Anchura",
    "c": 4
  },
  {
    "en": "Wife",
    "es": "Esposa",
    "c": 4
  },
  {
    "en": "Wild",
    "es": "Salvaje, imprevisible",
    "c": 4
  },
  {
    "en": "Wildlife",
    "es": "El mundo natural",
    "c": 4
  },
  {
    "en": "Win",
    "es": "Ganar",
    "c": 4
  },
  {
    "en": "Wind",
    "es": "Viento, dar cuerda",
    "c": 4
  },
  {
    "en": "Window",
    "es": "Ventana",
    "c": 4
  },
  {
    "en": "Windscreen",
    "es": "Parabrisas",
    "c": 4
  },
  {
    "en": "Windsurfing",
    "es": "Windsurf",
    "c": 4
  },
  {
    "en": "Wood",
    "es": "Madera",
    "c": 4
  },
  {
    "en": "Wooden",
    "es": "De madera",
    "c": 4
  },
  {
    "en": "Wool",
    "es": "Lana",
    "c": 4
  },
  {
    "en": "Word",
    "es": "Palabra",
    "c": 4
  },
  {
    "en": "Work",
    "es": "Trabajar",
    "c": 4
  },
  {
    "en": "Working hours",
    "es": "Horas de trabajo, jornada laboral",
    "c": 4
  },
  {
    "en": "World",
    "es": "Mundo",
    "c": 4
  },
  {
    "en": "Worry",
    "es": "Preocuparse",
    "c": 4
  },
  {
    "en": "Worse",
    "es": "Peor que",
    "c": 4
  },
  {
    "en": "Worst",
    "es": "Lo peor",
    "c": 4
  },
  {
    "en": "Worth",
    "es": "Valioso",
    "c": 4
  },
  {
    "en": "Wound",
    "es": "Herida, herir",
    "c": 4
  },
  {
    "en": "Wrap",
    "es": "Envolver",
    "c": 4
  },
  {
    "en": "Write a note",
    "es": "Escribir una nota",
    "c": 4
  },
  {
    "en": "Write",
    "es": "Escribir",
    "c": 4
  },
  {
    "en": "Wrong",
    "es": "Mal, erróneo",
    "c": 4
  },
  {
    "en": "Year",
    "es": "Año",
    "c": 4
  },
  {
    "en": "Yearly",
    "es": "Anual",
    "c": 4
  },
  {
    "en": "Yellow",
    "es": "Amarillo",
    "c": 4
  },
  {
    "en": "Yes",
    "es": "Si",
    "c": 4
  },
  {
    "en": "Yesterday",
    "es": "Ayer",
    "c": 4
  },
  {
    "en": "Yet",
    "es": "Aún, todavía",
    "c": 4
  },
  {
    "en": "You",
    "es": "Usted, tú, vosotros, ustedes",
    "c": 4
  },
  {
    "en": "You know",
    "es": "Ya sabes",
    "c": 4
  },
  {
    "en": "Young",
    "es": "Joven",
    "c": 4
  },
  {
    "en": "Your",
    "es": "Su, tu, vuestro",
    "c": 4
  },
  {
    "en": "Yours",
    "es": "Suyo, lo suyo, lo vuestro",
    "c": 4
  },
  {
    "en": "Yourself",
    "es": "Tú mismo, vosotros mismos, ustedes mismos",
    "c": 4
  },
  {
    "en": "Youth",
    "es": "Juventud",
    "c": 4
  },
  {
    "en": "Zebra",
    "es": "Cebra",
    "c": 4
  },
  {
    "en": "Zero",
    "es": "Cero",
    "c": 4
  },
  {
    "en": "Zone",
    "es": "Zona",
    "c": 4
  },
  {
    "en": "Zoo",
    "es": "Zoo",
    "c": 4
  },
  {
    "en": "24 gears",
    "es": "24 cambios",
    "c": 4
  },
  {
    "en": "Through",
    "es": "A lo largo de, a través de (3D)",
    "c": 4
  },
  {
    "en": "On horseback",
    "es": "A lomos de un caballo",
    "c": 4
  },
  {
    "en": "In spite of/despite",
    "es": "A pesar de",
    "c": 4
  },
  {
    "en": "At first sight",
    "es": "A primera vista",
    "c": 4
  },
  {
    "en": "Sink or swim",
    "es": "A su suerte",
    "c": 4
  },
  {
    "en": "Full-time",
    "es": "A tiempo completo",
    "c": 4
  },
  {
    "en": "Throughout",
    "es": "A todo lo largo de (3d)",
    "c": 4
  },
  {
    "en": "Attorney, lawyer, solicitor",
    "es": "Abogado",
    "c": 4
  },
  {
    "en": "Abolish",
    "es": "Abolir",
    "c": 4
  },
  {
    "en": "Abhor",
    "es": "Aborrecer",
    "c": 4
  },
  {
    "en": "Bored with",
    "es": "Aburrido de",
    "c": 4
  },
  {
    "en": "Take advise",
    "es": "Aceptar un consejo",
    "c": 4
  },
  {
    "en": "Sidewalks, pavements",
    "es": "Aceras",
    "c": 4
  },
  {
    "en": "Approach",
    "es": "Acercamiento",
    "c": 4
  },
  {
    "en": "Put someone up",
    "es": "Acoger en casa",
    "c": 4
  },
  {
    "en": "Advisable",
    "es": "Aconsejable",
    "c": 4
  },
  {
    "en": "Advise",
    "es": "Aconsejar",
    "c": 4
  },
  {
    "en": "Attitude",
    "es": "Actitud",
    "c": 4
  },
  {
    "en": "Currently",
    "es": "Actualmente",
    "c": 4
  },
  {
    "en": "Snuggle up",
    "es": "Acurrucarse",
    "c": 4
  },
  {
    "en": "Charge with",
    "es": "Acusar de",
    "c": 4
  },
  {
    "en": "Furthermore",
    "es": "Además",
    "c": 4
  },
  {
    "en": "Look up to, admire",
    "es": "Admirar",
    "c": 4
  },
  {
    "en": "Teenager",
    "es": "Adolescente",
    "c": 4
  },
  {
    "en": "Worship",
    "es": "Adorar",
    "c": 4
  },
  {
    "en": "Garnish",
    "es": "Adornar, aderezar, guarnición (culinario)",
    "c": 4
  },
  {
    "en": "Customs",
    "es": "Aduana",
    "c": 4
  },
  {
    "en": "Compliment",
    "es": "Adular, piropo",
    "c": 4
  },
  {
    "en": "Warn, to",
    "es": "Advertir",
    "c": 4
  },
  {
    "en": "Affect",
    "es": "Afectar",
    "c": 4
  },
  {
    "en": "Easy-going",
    "es": "Afable, extrovertido",
    "c": 4
  },
  {
    "en": "Take up",
    "es": "Aficionarte, darte por",
    "c": 4
  },
  {
    "en": "Lucky",
    "es": "Afortunado",
    "c": 4
  },
  {
    "en": "Grip",
    "es": "Agarrar",
    "c": 4
  },
  {
    "en": "Agitator",
    "es": "Agitador",
    "c": 4
  },
  {
    "en": "Shake shook shaken",
    "es": "Agitar",
    "c": 4
  },
  {
    "en": "Exhausted",
    "es": "Agotado",
    "c": 4
  },
  {
    "en": "Sold out",
    "es": "Agotado, vendido",
    "c": 4
  },
  {
    "en": "Knacker",
    "es": "Agotador",
    "c": 4
  },
  {
    "en": "Thankful",
    "es": "Agradecida",
    "c": 4
  },
  {
    "en": "Avocado",
    "es": "Aguacate",
    "c": 4
  },
  {
    "en": "Slush",
    "es": "Aguanieve",
    "c": 4
  },
  {
    "en": "Presently",
    "es": "Ahora, en este momento",
    "c": 4
  },
  {
    "en": "Hangman",
    "es": "Ahorcado",
    "c": 4
  },
  {
    "en": "Savings",
    "es": "Ahorros",
    "c": 4
  },
  {
    "en": "Garlic",
    "es": "Ajo",
    "c": 4
  },
  {
    "en": "Overboard",
    "es": "Al agua, por encima de la borda",
    "c": 4
  },
  {
    "en": "Haphazardly",
    "es": "Al azar",
    "c": 4
  },
  {
    "en": "Upside down",
    "es": "Al revés",
    "c": 4
  },
  {
    "en": "praise",
    "es": "Alabar",
    "c": 4
  },
  {
    "en": "Wings",
    "es": "Alas",
    "c": 4
  },
  {
    "en": "Youth hostel",
    "es": "Albergue",
    "c": 4
  },
  {
    "en": "Artichoke",
    "es": "Alcachofa",
    "c": 4
  },
  {
    "en": "Booze (colloquial)",
    "es": "Bebida alcoholica",
    "c": 4
  },
  {
    "en": "Rug",
    "es": "Alfombra",
    "c": 4
  },
  {
    "en": "Todo/s",
    "es": "All",
    "c": 4
  },
  {
    "en": "Pad",
    "es": "Almohadilla, botonera",
    "c": 4
  },
  {
    "en": "Bean",
    "es": "Alubia/grano",
    "c": 4
  },
  {
    "en": "Baked beans",
    "es": "Alubias con tomate",
    "c": 4
  },
  {
    "en": "Uproar",
    "es": "Alzamiento, subidón, agitación, jaleo",
    "c": 4
  },
  {
    "en": "Ambition",
    "es": "Ambición",
    "c": 4
  },
  {
    "en": "Ambitious",
    "es": "Ambicioso",
    "c": 4
  },
  {
    "en": "Threaten",
    "es": "Amenazar",
    "c": 4
  },
  {
    "en": "Househusband",
    "es": "Amo de casa",
    "c": 4
  },
  {
    "en": "Illiterate",
    "es": "Analfabeto",
    "c": 4
  },
  {
    "en": "Tiptoe",
    "es": "Andar de puntillas",
    "c": 4
  },
  {
    "en": "Host",
    "es": "Anfitrión",
    "c": 4
  },
  {
    "en": "Indigo",
    "es": "Añil",
    "c": 4
  },
  {
    "en": "Encourage, to",
    "es": "Animar",
    "c": 4
  },
  {
    "en": "Take heart",
    "es": "Animarse",
    "c": 4
  },
  {
    "en": "Leap year",
    "es": "Año bisiesto",
    "c": 4
  },
  {
    "en": "Gap year",
    "es": "Año sabático",
    "c": 4
  },
  {
    "en": "Satellite dish",
    "es": "Antena parabólica",
    "c": 4
  },
  {
    "en": "Ancient",
    "es": "Antiguo",
    "c": 4
  },
  {
    "en": "Antonyms",
    "es": "Antónimos",
    "c": 4
  },
  {
    "en": "Advertised",
    "es": "Anunciado",
    "c": 4
  },
  {
    "en": "Turn off; switch off",
    "es": "Apagar",
    "c": 4
  },
  {
    "en": "Gadget",
    "es": "Aparato",
    "c": 4
  },
  {
    "en": "Electrical appliances",
    "es": "Aparatos eléctricos",
    "c": 4
  },
  {
    "en": "Turn up; appear",
    "es": "Aparecer",
    "c": 4
  },
  {
    "en": "Appearance",
    "es": "Apariencia física",
    "c": 4
  },
  {
    "en": "Celery",
    "es": "Apio",
    "c": 4
  },
  {
    "en": "Flatten",
    "es": "Aplanar",
    "c": 4
  },
  {
    "en": "Crush",
    "es": "Aplastar",
    "c": 4
  },
  {
    "en": "Clap",
    "es": "Aplaudir",
    "c": 4
  },
  {
    "en": "Apply",
    "es": "Aplicar",
    "c": 4
  },
  {
    "en": "Bet",
    "es": "Apostar",
    "c": 4
  },
  {
    "en": "Support, to give support",
    "es": "Apoyar",
    "c": 4
  },
  {
    "en": "Lean",
    "es": "Apoyarse",
    "c": 4
  },
  {
    "en": "Prompt",
    "es": "Apoyo, dar pie",
    "c": 4
  },
  {
    "en": "Learn by heart",
    "es": "Aprender de memoria",
    "c": 4
  },
  {
    "en": "Learner, apprentice",
    "es": "Aprendiz",
    "c": 4
  },
  {
    "en": "Tighten belts",
    "es": "Apretarse el cinturón",
    "c": 4
  },
  {
    "en": "Approval",
    "es": "Aprobacion",
    "c": 4
  },
  {
    "en": "Take advantage of",
    "es": "Aprovecharse de",
    "c": 4
  },
  {
    "en": "Stab",
    "es": "Apuñalar",
    "c": 4
  },
  {
    "en": "Prompter",
    "es": "Apuntador del teatro",
    "c": 4
  },
  {
    "en": "Scratch",
    "es": "Arañar, arañazo",
    "c": 4
  },
  {
    "en": "Arduous",
    "es": "Arduo",
    "c": 4
  },
  {
    "en": "Argue, to",
    "es": "Argumentar",
    "c": 4
  },
  {
    "en": "Plot",
    "es": "Argumento",
    "c": 4
  },
  {
    "en": "Manage, to",
    "es": "Arreglarse para/conseguir",
    "c": 4
  },
  {
    "en": "Get along",
    "es": "Arreglarselas, progesar, llevarse bien",
    "c": 4
  },
  {
    "en": "Up and down",
    "es": "Arriba y abajo",
    "c": 4
  },
  {
    "en": "Risky",
    "es": "Arriesgado",
    "c": 4
  },
  {
    "en": "Haul",
    "es": "Arrojar, hacer mudanza",
    "c": 4
  },
  {
    "en": "Streams",
    "es": "Arroyos",
    "c": 4
  },
  {
    "en": "Wrinkle",
    "es": "Arruga",
    "c": 4
  },
  {
    "en": "Roast, to",
    "es": "Asar",
    "c": 4
  },
  {
    "en": "Lift, elevator",
    "es": "Ascensor",
    "c": 4
  },
  {
    "en": "Ensure, assure",
    "es": "Asegurar",
    "c": 4
  },
  {
    "en": "Attend",
    "es": "Asistir",
    "c": 4
  },
  {
    "en": "Lean out of",
    "es": "Asomarse por",
    "c": 4
  },
  {
    "en": "Amazed at",
    "es": "Asombrado por",
    "c": 4
  },
  {
    "en": "Applicants",
    "es": "Aspirantes",
    "c": 4
  },
  {
    "en": "Disgusting",
    "es": "Asqueroso",
    "c": 4
  },
  {
    "en": "Assume",
    "es": "Asumir",
    "c": 4
  },
  {
    "en": "Scared; frightened",
    "es": "Asustado",
    "c": 4
  },
  {
    "en": "Heart attack",
    "es": "Ataque al corazón",
    "c": 4
  },
  {
    "en": "Tie",
    "es": "Atar, ligadura, corbata",
    "c": 4
  },
  {
    "en": "Astonished",
    "es": "Atónito",
    "c": 4
  },
  {
    "en": "Attractive",
    "es": "Atractivo",
    "c": 4
  },
  {
    "en": "Attract",
    "es": "Atraer",
    "c": 4
  },
  {
    "en": "Attracted by",
    "es": "Atraido por",
    "c": 4
  },
  {
    "en": "Daring",
    "es": "Atrevido",
    "c": 4
  },
  {
    "en": "Assist",
    "es": "Ayudar",
    "c": 4
  },
  {
    "en": "Audience",
    "es": "Audiencia",
    "c": 4
  },
  {
    "en": "Commercial",
    "es": "Anuncio comercial",
    "c": 4
  },
  {
    "en": "Although",
    "es": "Aunque",
    "c": 4
  },
  {
    "en": "Absences",
    "es": "Ausencias",
    "c": 4
  },
  {
    "en": "Genuine",
    "es": "Auténtico",
    "c": 4
  },
  {
    "en": "Self-indulgent",
    "es": "Autoindulgente",
    "c": 4
  },
  {
    "en": "Self-employed",
    "es": "Autónomo",
    "c": 4
  },
  {
    "en": "Avalanche",
    "es": "Avalancha",
    "c": 4
  },
  {
    "en": "Venture into",
    "es": "Aventurarse",
    "c": 4
  },
  {
    "en": "Alert",
    "es": "Avisar",
    "c": 4
  },
  {
    "en": "Warning",
    "es": "Aviso",
    "c": 4
  },
  {
    "en": "Aid",
    "es": "Ayuda",
    "c": 4
  },
  {
    "en": "Hair-hostess",
    "es": "Azafata",
    "c": 4
  },
  {
    "en": "Wade",
    "es": "Vadear",
    "c": 4
  },
  {
    "en": "Bankrupt",
    "es": "Bancarrota, quiebra",
    "c": 4
  },
  {
    "en": "Tray",
    "es": "Bandeja",
    "c": 4
  },
  {
    "en": "Bar",
    "es": "Bar, barra, barrote",
    "c": 4
  },
  {
    "en": "Chin up",
    "es": "Barbilla alta, creido",
    "c": 4
  },
  {
    "en": "Barrel",
    "es": "Barril, tubo de cañón",
    "c": 4
  },
  {
    "en": "Quite, fairly, rather, pretty",
    "es": "Bastante",
    "c": 4
  },
  {
    "en": "Rubbish, garbage, trash",
    "es": "Basura",
    "c": 4
  },
  {
    "en": "Beat",
    "es": "Batir, vencer, llevar el ritmo, latir",
    "c": 4
  },
  {
    "en": "Toddler",
    "es": "Bebe que ya anda",
    "c": 4
  },
  {
    "en": "Benign",
    "es": "Benigno",
    "c": 4
  },
  {
    "en": "Feeding bottle",
    "es": "Biberón",
    "c": 4
  },
  {
    "en": "Well-dressed",
    "es": "Bien vestido",
    "c": 4
  },
  {
    "en": "Well-being",
    "es": "Bienestar",
    "c": 4
  },
  {
    "en": "Block out",
    "es": "Bloquear",
    "c": 4
  },
  {
    "en": "Pump, to",
    "es": "Bombear",
    "c": 4
  },
  {
    "en": "Draft",
    "es": "Borrador",
    "c": 4
  },
  {
    "en": "Button",
    "es": "Botón",
    "c": 4
  },
  {
    "en": "Shiny",
    "es": "Brillante",
    "c": 4
  },
  {
    "en": "Leap",
    "es": "Brincar",
    "c": 4
  },
  {
    "en": "Buffet",
    "es": "Buffet libre, cantina, cafeteria",
    "c": 4
  },
  {
    "en": "Jeer",
    "es": "Burlarse, abuchear",
    "c": 4
  },
  {
    "en": "Look for",
    "es": "Buscar",
    "c": 4
  },
  {
    "en": "Puppy",
    "es": "Cachorro de perro",
    "c": 4
  },
  {
    "en": "Drop dead",
    "es": "Caerse muerto",
    "c": 4
  },
  {
    "en": "Dungeon",
    "es": "Calabozo",
    "c": 4
  },
  {
    "en": "Reverse charge phone",
    "es": "Llamada a cobro revertido",
    "c": 4
  },
  {
    "en": "Campaign",
    "es": "Campaña (publicitaria)",
    "c": 4
  },
  {
    "en": "Cancel",
    "es": "Cancelar",
    "c": 4
  },
  {
    "en": "Tennis court",
    "es": "Cancha de tennis",
    "c": 4
  },
  {
    "en": "Tired of",
    "es": "Cansado de",
    "c": 4
  },
  {
    "en": "Amount",
    "es": "Cantidad",
    "c": 4
  },
  {
    "en": "Canteen",
    "es": "Cantina, cantimplora",
    "c": 4
  },
  {
    "en": "Eligible",
    "es": "Capacitado",
    "c": 4
  },
  {
    "en": "Capable of",
    "es": "Capaz de",
    "c": 4
  },
  {
    "en": "Character",
    "es": "Carácter, personaje",
    "c": 4
  },
  {
    "en": "Homelessness",
    "es": "Carencia de hogar",
    "c": 4
  },
  {
    "en": "Married to",
    "es": "Casado con",
    "c": 4
  },
  {
    "en": "Near-miss",
    "es": "Falló por poco",
    "c": 4
  },
  {
    "en": "Brown-haired",
    "es": "Castaño (color)",
    "c": 4
  },
  {
    "en": "Bring about",
    "es": "Causar, provocar",
    "c": 4
  },
  {
    "en": "Captive",
    "es": "Cautivo",
    "c": 4
  },
  {
    "en": "Hunt",
    "es": "Caza, cazar",
    "c": 4
  },
  {
    "en": "Lure",
    "es": "Cebo, engañifa",
    "c": 4
  },
  {
    "en": "Relinquish",
    "es": "Ceder, renunciar a",
    "c": 4
  },
  {
    "en": "Ashtray",
    "es": "Cenicero",
    "c": 4
  },
  {
    "en": "Cereal",
    "es": "Cereal",
    "c": 4
  },
  {
    "en": "Beer",
    "es": "Cerveza",
    "c": 4
  },
  {
    "en": "Lager",
    "es": "Cerveza fuerte",
    "c": 4
  },
  {
    "en": "Shell suit, tracksuit",
    "es": "Chandal",
    "c": 4
  },
  {
    "en": "Badge",
    "es": "Chapa, insignia, broche",
    "c": 4
  },
  {
    "en": "Check-up",
    "es": "Chequeo",
    "c": 4
  },
  {
    "en": "Traveller's cheques",
    "es": "Cheques de viajero",
    "c": 4
  },
  {
    "en": "Craze",
    "es": "Chifladura",
    "c": 4
  },
  {
    "en": "Tell on",
    "es": "Chivarse",
    "c": 4
  },
  {
    "en": "Snitch on",
    "es": "Chivarse de",
    "c": 4
  },
  {
    "en": "Shocking",
    "es": "Chocante",
    "c": 4
  },
  {
    "en": "Collide",
    "es": "Chocar",
    "c": 4
  },
  {
    "en": "Collide with",
    "es": "Chocar con",
    "c": 4
  },
  {
    "en": "Crash",
    "es": "Choque",
    "c": 4
  },
  {
    "en": "Chop",
    "es": "Chuleta",
    "c": 4
  },
  {
    "en": "Belt",
    "es": "Cinturón",
    "c": 4
  },
  {
    "en": "Seatbelts",
    "es": "Cinturones de seguridad",
    "c": 4
  },
  {
    "en": "Surgery",
    "es": "Cirugía",
    "c": 4
  },
  {
    "en": "Faint-hearted",
    "es": "Cobarde, apocado",
    "c": 4
  },
  {
    "en": "Copper",
    "es": "Cobre",
    "c": 4
  },
  {
    "en": "Hearse",
    "es": "Coche fúnebre",
    "c": 4
  },
  {
    "en": "Code",
    "es": "Codificar",
    "c": 4
  },
  {
    "en": "Knack",
    "es": "Coger el tranquillo",
    "c": 4
  },
  {
    "en": "Consistency",
    "es": "Coherencia",
    "c": 4
  },
  {
    "en": "Cushion",
    "es": "Cojín",
    "c": 4
  },
  {
    "en": "Slip by",
    "es": "Colarse",
    "c": 4
  },
  {
    "en": "Stamp-collecting",
    "es": "Coleccionar sellos",
    "c": 4
  },
  {
    "en": "Colleagues",
    "es": "Colegas",
    "c": 4
  },
  {
    "en": "Cling- clung - clung",
    "es": "Colgar, colgarse",
    "c": 4
  },
  {
    "en": "Get high",
    "es": "Colocarse",
    "c": 4
  },
  {
    "en": "Colourful",
    "es": "Colorido",
    "c": 4
  },
  {
    "en": "Dealer",
    "es": "Comerciante",
    "c": 4
  },
  {
    "en": "Fast food",
    "es": "Comida rápida",
    "c": 4
  },
  {
    "en": "Home, away from home",
    "es": "Como en tu casa",
    "c": 4
  },
  {
    "en": "Convenience",
    "es": "Comodidad",
    "c": 4
  },
  {
    "en": "Partner, mate",
    "es": "Compañero",
    "c": 4
  },
  {
    "en": "Roommate",
    "es": "Compañero de habitación",
    "c": 4
  },
  {
    "en": "Share",
    "es": "Compartir",
    "c": 4
  },
  {
    "en": "Compassion",
    "es": "Compasión",
    "c": 4
  },
  {
    "en": "Compete in",
    "es": "Competir en",
    "c": 4
  },
  {
    "en": "Accomplice",
    "es": "Cómplice",
    "c": 4
  },
  {
    "en": "Misbehave",
    "es": "Comportarse mal",
    "c": 4
  },
  {
    "en": "Take in",
    "es": "Comprender, asimilar",
    "c": 4
  },
  {
    "en": "Commit",
    "es": "Comprometerse, perpetrar",
    "c": 4
  },
  {
    "en": "Starchy",
    "es": "Con almidón",
    "c": 4
  },
  {
    "en": "Heart-broken",
    "es": "Con el corazón roto",
    "c": 4
  },
  {
    "en": "Tightly",
    "es": "Con fuerza, apretadamente",
    "c": 4
  },
  {
    "en": "Safely",
    "es": "Con seguridad",
    "c": 4
  },
  {
    "en": "Suspicious",
    "es": "Con sospecha",
    "c": 4
  },
  {
    "en": "Thatched",
    "es": "Con techo de paja",
    "c": 4
  },
  {
    "en": "Awareness",
    "es": "Conciencia, concienciación",
    "c": 4
  },
  {
    "en": "Conclude",
    "es": "Concluir",
    "c": 4
  },
  {
    "en": "Contestant",
    "es": "Concursante",
    "c": 4
  },
  {
    "en": "Game show",
    "es": "Concurso con pruebas físicas",
    "c": 4
  },
  {
    "en": "Conduct",
    "es": "Conducir programa, orquesta",
    "c": 4
  },
  {
    "en": "Demeanour",
    "es": "Conducta",
    "c": 4
  },
  {
    "en": "Put someone through to",
    "es": "Conectar con",
    "c": 4
  },
  {
    "en": "Confidence",
    "es": "Confianza en si",
    "c": 4
  },
  {
    "en": "Frozen",
    "es": "Congelado",
    "c": 4
  },
  {
    "en": "Ensemble",
    "es": "Conjunto",
    "c": 4
  },
  {
    "en": "Conquer",
    "es": "Conquistar",
    "c": 4
  },
  {
    "en": "Implication",
    "es": "Consecuencia, implicación",
    "c": 4
  },
  {
    "en": "Adviser",
    "es": "Consejero",
    "c": 4
  },
  {
    "en": "Advice",
    "es": "Consejo",
    "c": 4
  },
  {
    "en": "Council of war",
    "es": "Consejo de guerra",
    "c": 4
  },
  {
    "en": "Dismay",
    "es": "Consternación",
    "c": 4
  },
  {
    "en": "Consolation",
    "es": "Consuelo",
    "c": 4
  },
  {
    "en": "Tell tales",
    "es": "Contar cuentos",
    "c": 4
  },
  {
    "en": "Answering machine",
    "es": "Contestador automático",
    "c": 4
  },
  {
    "en": "Go along with",
    "es": "Continuar",
    "c": 4
  },
  {
    "en": "Continuity",
    "es": "Continuidad",
    "c": 4
  },
  {
    "en": "Ongoing",
    "es": "Continuo",
    "c": 4
  },
  {
    "en": "Contract",
    "es": "Contrato",
    "c": 4
  },
  {
    "en": "World cup",
    "es": "Copa mundial",
    "c": 4
  },
  {
    "en": "Flirt",
    "es": "Coquetear",
    "c": 4
  },
  {
    "en": "Stud",
    "es": "Corchete, semental",
    "c": 4
  },
  {
    "en": "Correspondence",
    "es": "Corespondencia",
    "c": 4
  },
  {
    "en": "Properly",
    "es": "Correctamente",
    "c": 4
  },
  {
    "en": "Drapes",
    "es": "Cortinas",
    "c": 4
  },
  {
    "en": "Soft stuff",
    "es": "Cosas blandas",
    "c": 4
  },
  {
    "en": "Costly",
    "es": "Costoso",
    "c": 4
  },
  {
    "en": "Creation",
    "es": "Creación",
    "c": 4
  },
  {
    "en": "Creative",
    "es": "Creativo",
    "c": 4
  },
  {
    "en": "Beliefs",
    "es": "Creencias",
    "c": 4
  },
  {
    "en": "Breed",
    "es": "Criar",
    "c": 4
  },
  {
    "en": "Chronological",
    "es": "Cronológico",
    "c": 4
  },
  {
    "en": "Cruise",
    "es": "Crucero",
    "c": 4
  },
  {
    "en": "Overcast",
    "es": "Cubierto, nublado",
    "c": 4
  },
  {
    "en": "Bank account",
    "es": "Cuenta bancaria",
    "c": 4
  },
  {
    "en": "Rope",
    "es": "Cuerda",
    "c": 4
  },
  {
    "en": "Childminding, babysitting",
    "es": "Cuidado de niños",
    "c": 4
  },
  {
    "en": "Take care of; look after",
    "es": "Cuidar",
    "c": 4
  },
  {
    "en": "Soap opera",
    "es": "Culebrón",
    "c": 4
  },
  {
    "en": "Fulfilment",
    "es": "Culminación",
    "c": 4
  },
  {
    "en": "Guilt",
    "es": "Culpabilidad",
    "c": 4
  },
  {
    "en": "Guilty of",
    "es": "Culpable de",
    "c": 4
  },
  {
    "en": "Meet in full",
    "es": "Cumplir totalmente",
    "c": 4
  },
  {
    "en": "Cure",
    "es": "Cura (medicina)",
    "c": 4
  },
  {
    "en": "Harm",
    "es": "Dañar",
    "c": 4
  },
  {
    "en": "Hinting",
    "es": "Dando pistas",
    "c": 4
  },
  {
    "en": "Damage",
    "es": "Daño",
    "c": 4
  },
  {
    "en": "Close down",
    "es": "Dar el cerrojazo, clausurar",
    "c": 4
  },
  {
    "en": "Take for granted",
    "es": "Dar por hecho",
    "c": 4
  },
  {
    "en": "Slap",
    "es": "Dar una palmada",
    "c": 4
  },
  {
    "en": "Realise, notice",
    "es": "Darse cuenta",
    "c": 4
  },
  {
    "en": "This way",
    "es": "De esta manera",
    "c": 4
  },
  {
    "en": "Far-reaching",
    "es": "De largo alcance",
    "c": 4
  },
  {
    "en": "Scary",
    "es": "De miedo",
    "c": 4
  },
  {
    "en": "Curly-haired",
    "es": "De pelo rizado",
    "c": 4
  },
  {
    "en": "On duty",
    "es": "De servicio, de guardia",
    "c": 4
  },
  {
    "en": "Plenty of",
    "es": "De sobra de",
    "c": 4
  },
  {
    "en": "Invaluable",
    "es": "De valor incalculable",
    "c": 4
  },
  {
    "en": "Now and then",
    "es": "De vez en cuando",
    "c": 4
  },
  {
    "en": "Short-lived",
    "es": "De vida breve",
    "c": 4
  },
  {
    "en": "Nod",
    "es": "Asentir con la cabeza",
    "c": 4
  },
  {
    "en": "Apron",
    "es": "Delantal",
    "c": 4
  },
  {
    "en": "Spell/spelt/spelt",
    "es": "Deletrear",
    "c": 4
  },
  {
    "en": "Crime",
    "es": "Delito",
    "c": 4
  },
  {
    "en": "Be dependent on",
    "es": "Depender de",
    "c": 4
  },
  {
    "en": "Dependent on",
    "es": "Dependiente de",
    "c": 4
  },
  {
    "en": "Winter sports",
    "es": "Deportes de invierno",
    "c": 4
  },
  {
    "en": "Get down, depress",
    "es": "Deprimir",
    "c": 4
  },
  {
    "en": "Rights",
    "es": "Derechos",
    "c": 4
  },
  {
    "en": "Human rights",
    "es": "Derechos humanos",
    "c": 4
  },
  {
    "en": "Spill – spilt - spilt",
    "es": "Derramar",
    "c": 4
  },
  {
    "en": "Challenge",
    "es": "Desafío",
    "c": 4
  },
  {
    "en": "Unpleasant",
    "es": "Desagradable",
    "c": 4
  },
  {
    "en": "Missing",
    "es": "Desaparecido",
    "c": 4
  },
  {
    "en": "Developed",
    "es": "Desarrollado",
    "c": 4
  },
  {
    "en": "Development",
    "es": "Desarrollo",
    "c": 4
  },
  {
    "en": "Rest, break",
    "es": "Descansar",
    "c": 4
  },
  {
    "en": "Mistrust",
    "es": "Desconfiar",
    "c": 4
  },
  {
    "en": "Uncaring",
    "es": "Desconsiderado",
    "c": 4
  },
  {
    "en": "Take out",
    "es": "Descontar",
    "c": 4
  },
  {
    "en": "Careless",
    "es": "Descuidado",
    "c": 4
  },
  {
    "en": "Ever since",
    "es": "Desde entonces sin parar",
    "c": 4
  },
  {
    "en": "Unemployment",
    "es": "Desempleo",
    "c": 4
  },
  {
    "en": "Trigger",
    "es": "Desencadenar, poner en marcha, gatillo",
    "c": 4
  },
  {
    "en": "Desire; wish",
    "es": "Deseo",
    "c": 4
  },
  {
    "en": "Hopeless",
    "es": "Desesperada",
    "c": 4
  },
  {
    "en": "Thaw",
    "es": "Deshielo",
    "c": 4
  },
  {
    "en": "Dishonest",
    "es": "Deshonesto",
    "c": 4
  },
  {
    "en": "Disillusion",
    "es": "Desilusionar",
    "c": 4
  },
  {
    "en": "Uninterested",
    "es": "Desinteresado",
    "c": 4
  },
  {
    "en": "Sneak",
    "es": "Deslizarse sigilosamente",
    "c": 4
  },
  {
    "en": "Glide",
    "es": "Deslizarse, planear",
    "c": 4
  },
  {
    "en": "Dazzling",
    "es": "Deslumbrante",
    "c": 4
  },
  {
    "en": "Mess",
    "es": "Desorden",
    "c": 4
  },
  {
    "en": "Untidy",
    "es": "Desordenado",
    "c": 4
  },
  {
    "en": "Stunning",
    "es": "Despampanante, asombroso",
    "c": 4
  },
  {
    "en": "Axe",
    "es": "Despedir, cancelar",
    "c": 4
  },
  {
    "en": "Alarm clock",
    "es": "Despertador",
    "c": 4
  },
  {
    "en": "Wake",
    "es": "Despertar",
    "c": 4
  },
  {
    "en": "Awake",
    "es": "Despierto",
    "c": 4
  },
  {
    "en": "Despise/look down on",
    "es": "Despreciar",
    "c": 4
  },
  {
    "en": "Fate",
    "es": "Destino",
    "c": 4
  },
  {
    "en": "Screwdriver",
    "es": "Destornillador",
    "c": 4
  },
  {
    "en": "Dialogue",
    "es": "Diálogo",
    "c": 4
  },
  {
    "en": "Target",
    "es": "Diana",
    "c": 4
  },
  {
    "en": "Draw up",
    "es": "Dibujar",
    "c": 4
  },
  {
    "en": "Deluge",
    "es": "Diluvio",
    "c": 4
  },
  {
    "en": "Tactful",
    "es": "Diplomatico, con tacto",
    "c": 4
  },
  {
    "en": "Steer",
    "es": "Dirigir, llevar el timón, moverse entre la multitud",
    "c": 4
  },
  {
    "en": "Dart to",
    "es": "Dirigirse como una flecha",
    "c": 4
  },
  {
    "en": "Crippled",
    "es": "Discapacitado",
    "c": 4
  },
  {
    "en": "Disagree",
    "es": "Discrepar",
    "c": 4
  },
  {
    "en": "Apologise",
    "es": "Disculparse",
    "c": 4
  },
  {
    "en": "Apologise for",
    "es": "Disculparse por",
    "c": 4
  },
  {
    "en": "Stuffed",
    "es": "Disecado, de ideas rígidas",
    "c": 4
  },
  {
    "en": "Graphic design",
    "es": "Diseño gráfico",
    "c": 4
  },
  {
    "en": "Costume",
    "es": "Disfraz",
    "c": 4
  },
  {
    "en": "Dislocation",
    "es": "Dislocación, luxación, alteración grave",
    "c": 4
  },
  {
    "en": "Amusing",
    "es": "Divertido (divirtiente)",
    "c": 4
  },
  {
    "en": "Documentary",
    "es": "Documental",
    "c": 4
  },
  {
    "en": "Dose",
    "es": "Dosificar",
    "c": 4
  },
  {
    "en": "Drag",
    "es": "Dragar, una calada llevar a rastras, arrastrar, hacerse pesado",
    "c": 4
  },
  {
    "en": "Hesitation, doubt",
    "es": "Duda",
    "c": 4
  },
  {
    "en": "Hesitate",
    "es": "Dudar",
    "c": 4
  },
  {
    "en": "Self-denial",
    "es": "Abnegació, sacrificio",
    "c": 4
  },
  {
    "en": "Blame",
    "es": "Echar la culpa a",
    "c": 4
  },
  {
    "en": "Doze",
    "es": "Echar una cabezada, dormirse",
    "c": 4
  },
  {
    "en": "Efficiency",
    "es": "Eficacia",
    "c": 4
  },
  {
    "en": "Ephemeral",
    "es": "Efímero",
    "c": 4
  },
  {
    "en": "Self-centred",
    "es": "Egocéntrico",
    "c": 4
  },
  {
    "en": "Selfishness",
    "es": "Egoismo",
    "c": 4
  },
  {
    "en": "Example of",
    "es": "Ejemplo de",
    "c": 4
  },
  {
    "en": "Boredom",
    "es": "Aburrimiento",
    "c": 4
  },
  {
    "en": "The outside lane",
    "es": "El carril rápido, de la izquierda",
    "c": 4
  },
  {
    "en": "The full extent",
    "es": "El completo alcance",
    "c": 4
  },
  {
    "en": "The buzz",
    "es": "Cosquilleo, zumbido, rumor",
    "c": 4
  },
  {
    "en": "The mourning",
    "es": "El luto",
    "c": 4
  },
  {
    "en": "Foremost",
    "es": "El más puntero, el más",
    "c": 4
  },
  {
    "en": "The dole",
    "es": "El paro",
    "c": 4
  },
  {
    "en": "Jackpot",
    "es": "El premio gordo",
    "c": 4
  },
  {
    "en": "Souk",
    "es": "El suk (mercado árabe)",
    "c": 4
  },
  {
    "en": "Choice",
    "es": "Elección, opción",
    "c": 4
  },
  {
    "en": "Sort out",
    "es": "Elegir, discernir",
    "c": 4
  },
  {
    "en": "Pregnant",
    "es": "Embarazada",
    "c": 4
  },
  {
    "en": "Not at all",
    "es": "En absoluto",
    "c": 4
  },
  {
    "en": "On tv",
    "es": "En la tv",
    "c": 4
  },
  {
    "en": "Trainee",
    "es": "En prácticas, entrenamiento, recluta",
    "c": 4
  },
  {
    "en": "Behind the scenes",
    "es": "En privado, de tapadillo",
    "c": 4
  },
  {
    "en": "At risk",
    "es": "En riesgo",
    "c": 4
  },
  {
    "en": "In his teens",
    "es": "En su adolescencia",
    "c": 4
  },
  {
    "en": "Here and there",
    "es": "En todas partes",
    "c": 4
  },
  {
    "en": "Fall in love with",
    "es": "Enamorarse",
    "c": 4
  },
  {
    "en": "White-washed",
    "es": "Encalado, blanqueado",
    "c": 4
  },
  {
    "en": "Delighted",
    "es": "Encantado",
    "c": 4
  },
  {
    "en": "Turn on; switch on",
    "es": "Encender",
    "c": 4
  },
  {
    "en": "Socket",
    "es": "Enchufe hembra interruptor",
    "c": 4
  },
  {
    "en": "Shrink/shrank/shrunk",
    "es": "Encoger",
    "c": 4
  },
  {
    "en": "Survey",
    "es": "Encuesta",
    "c": 4
  },
  {
    "en": "Steel yourself",
    "es": "Endurecerte",
    "c": 4
  },
  {
    "en": "Angry at",
    "es": "Enfadado con alguien",
    "c": 4
  },
  {
    "en": "Deceive",
    "es": "Engañar, enmascarar, camuflar",
    "c": 4
  },
  {
    "en": "Put on weight, fatten",
    "es": "Engordar",
    "c": 4
  },
  {
    "en": "Smugmess",
    "es": "Engreimiento",
    "c": 4
  },
  {
    "en": "Bloody",
    "es": "Ensangrentado",
    "c": 4
  },
  {
    "en": "Bury",
    "es": "Enterrar",
    "c": 4
  },
  {
    "en": "Get tipsy",
    "es": "Entonarse",
    "c": 4
  },
  {
    "en": "Deliver",
    "es": "Entregar, comunicar",
    "c": 4
  },
  {
    "en": "Train in",
    "es": "Entrenar un deporte",
    "c": 4
  },
  {
    "en": "Interviews",
    "es": "Entrevistas",
    "c": 4
  },
  {
    "en": "Get someone down",
    "es": "Entristecer, deprimir",
    "c": 4
  },
  {
    "en": "Poisoning",
    "es": "Envenenamiento",
    "c": 4
  },
  {
    "en": "Septicaemia",
    "es": "Envenenamiento de la sangre, septicemia",
    "c": 4
  },
  {
    "en": "Wrapping",
    "es": "Envoltorio",
    "c": 4
  },
  {
    "en": "Luggage, baggage",
    "es": "Equipaje",
    "c": 4
  },
  {
    "en": "Outrageous",
    "es": "Escandaloso, excesivo",
    "c": 4
  },
  {
    "en": "Shot",
    "es": "Escena, toma",
    "c": 4
  },
  {
    "en": "Scenes",
    "es": "Escenas",
    "c": 4
  },
  {
    "en": "Brush",
    "es": "Escoba",
    "c": 4
  },
  {
    "en": "Carving",
    "es": "Escultura de madera",
    "c": 4
  },
  {
    "en": "Effort, endeavour",
    "es": "Esfuerzo",
    "c": 4
  },
  {
    "en": "Sword",
    "es": "Espada",
    "c": 4
  },
  {
    "en": "Appalled",
    "es": "Espantado",
    "c": 4
  },
  {
    "en": "Strew–strewedstrewn; scatter",
    "es": "Esparcir",
    "c": 4
  },
  {
    "en": "Spices",
    "es": "Especias",
    "c": 4
  },
  {
    "en": "Viewer, onlooker",
    "es": "Espectador",
    "c": 4
  },
  {
    "en": "Obituary",
    "es": "Esquela",
    "c": 4
  },
  {
    "en": "Settle",
    "es": "Establecerse",
    "c": 4
  },
  {
    "en": "Live up to",
    "es": "Estar a la altura",
    "c": 4
  },
  {
    "en": "Approve of",
    "es": "Estar de acuerdo con",
    "c": 4
  },
  {
    "en": "Be willing",
    "es": "Estar dispuesto",
    "c": 4
  },
  {
    "en": "Be on the lead",
    "es": "Estar en cabeza",
    "c": 4
  },
  {
    "en": "Be fed up with",
    "es": "Estar harto de",
    "c": 4
  },
  {
    "en": "Be involved in",
    "es": "Estar involucrado",
    "c": 4
  },
  {
    "en": "Take pride in",
    "es": "Estar orgulloso de",
    "c": 4
  },
  {
    "en": "Be concerned about",
    "es": "Estar preocupado por",
    "c": 4
  },
  {
    "en": "Stick together",
    "es": "Estar unidos",
    "c": 4
  },
  {
    "en": "Sterile",
    "es": "Esteril",
    "c": 4
  },
  {
    "en": "Sterilise",
    "es": "Esterilizar",
    "c": 4
  },
  {
    "en": "Stretch",
    "es": "Estirar",
    "c": 4
  },
  {
    "en": "Make a mess of",
    "es": "Estropear, hacer un desastre",
    "c": 4
  },
  {
    "en": "Go sour",
    "es": "Estropearse (comida)",
    "c": 4
  },
  {
    "en": "Carbon frame",
    "es": "Estructura de carbono",
    "c": 4
  },
  {
    "en": "Avoid",
    "es": "Evitar",
    "c": 4
  },
  {
    "en": "Evolve",
    "es": "Evolucionar",
    "c": 4
  },
  {
    "en": "Go through",
    "es": "Examinar",
    "c": 4
  },
  {
    "en": "Comprehensive",
    "es": "Exaustivo",
    "c": 4
  },
  {
    "en": "Excellence",
    "es": "Excelencia",
    "c": 4
  },
  {
    "en": "Overpriced",
    "es": "Excesivamente caro",
    "c": 4
  },
  {
    "en": "Overweight",
    "es": "Exceso de peso",
    "c": 4
  },
  {
    "en": "A runaway success",
    "es": "Éxito aplastante",
    "c": 4
  },
  {
    "en": "Successful",
    "es": "Exitoso",
    "c": 4
  },
  {
    "en": "Expectations",
    "es": "Expectativas",
    "c": 4
  },
  {
    "en": "Expert at/in",
    "es": "Experto en",
    "c": 4
  },
  {
    "en": "Display",
    "es": "Exposición, despliegue",
    "c": 4
  },
  {
    "en": "Squeeze",
    "es": "Exprimir, apretujar",
    "c": 4
  },
  {
    "en": "Spread",
    "es": "Extender, extenderse",
    "c": 4
  },
  {
    "en": "Strenuous",
    "es": "Extenuante",
    "c": 4
  },
  {
    "en": "Outward",
    "es": "Exteriormente, de puertas afuera",
    "c": 4
  },
  {
    "en": "Draw from",
    "es": "Extraer, sacar",
    "c": 4
  },
  {
    "en": "Weird",
    "es": "Extraño",
    "c": 4
  },
  {
    "en": "Freaky",
    "es": "Extraño, extravagante",
    "c": 4
  },
  {
    "en": "Odd",
    "es": "Extraño, impar",
    "c": 4
  },
  {
    "en": "Manufacturer",
    "es": "Fabricante",
    "c": 4
  },
  {
    "en": "Check-in",
    "es": "Facturar",
    "c": 4
  },
  {
    "en": "Bug",
    "es": "Fallo informatico, bicho",
    "c": 4
  },
  {
    "en": "Fake",
    "es": "Falsificación",
    "c": 4
  },
  {
    "en": "Two faced",
    "es": "Falso, traicionero",
    "c": 4
  },
  {
    "en": "Insincere",
    "es": "Falso, mentiroso",
    "c": 4
  },
  {
    "en": "In-laws",
    "es": "Familia política",
    "c": 4
  },
  {
    "en": "Self-righteousness",
    "es": "Fanatismo, creer intolerantemente que se tiene la verdad",
    "c": 4
  },
  {
    "en": "Grumble",
    "es": "Farfullar",
    "c": 4
  },
  {
    "en": "Phase",
    "es": "Fase",
    "c": 4
  },
  {
    "en": "Congratulate",
    "es": "Felicitar",
    "c": 4
  },
  {
    "en": "Earnestly",
    "es": "Fervientemente",
    "c": 4
  },
  {
    "en": "Dependable",
    "es": "Fiable",
    "c": 4
  },
  {
    "en": "Housewarming party",
    "es": "Fiesta por una casa nueva",
    "c": 4
  },
  {
    "en": "Act up",
    "es": "Fingir",
    "c": 4
  },
  {
    "en": "Pretend",
    "es": "Fingir, pretender",
    "c": 4
  },
  {
    "en": "Skinny",
    "es": "Flacucho",
    "c": 4
  },
  {
    "en": "Flourish",
    "es": "Florecer",
    "c": 4
  },
  {
    "en": "Floating",
    "es": "Flotante",
    "c": 4
  },
  {
    "en": "Brochure",
    "es": "Folleto",
    "c": 4
  },
  {
    "en": "Background",
    "es": "Fondo, parte del fondo tu pasado, tu trasfondo, tus orígenes",
    "c": 4
  },
  {
    "en": "Fossil",
    "es": "Fosil",
    "c": 4
  },
  {
    "en": "Flop",
    "es": "Fracaso",
    "c": 4
  },
  {
    "en": "Boundary",
    "es": "Frontera",
    "c": 4
  },
  {
    "en": "Frustrations",
    "es": "Frustraciones",
    "c": 4
  },
  {
    "en": "Firework",
    "es": "Fuegos artificiales",
    "c": 4
  },
  {
    "en": "Leak",
    "es": "Fuga",
    "c": 4
  },
  {
    "en": "Civil servant",
    "es": "Funcionario",
    "c": 4
  },
  {
    "en": "Galvanise",
    "es": "Galvanizar, encender los ánimos",
    "c": 4
  },
  {
    "en": "Cattle",
    "es": "Ganado",
    "c": 4
  },
  {
    "en": "Beat/defeat",
    "es": "Ganar, derrotar",
    "c": 4
  },
  {
    "en": "Live on",
    "es": "Ganarse la vida con, vivir de",
    "c": 4
  },
  {
    "en": "Bargain",
    "es": "Ganga, regatear",
    "c": 4
  },
  {
    "en": "Chewing-gum",
    "es": "Goma de mascar",
    "c": 4
  },
  {
    "en": "Podgy",
    "es": "Gordinflón, mofletudo",
    "c": 4
  },
  {
    "en": "Flab",
    "es": "Gordura, michelines",
    "c": 4
  },
  {
    "en": "Department stores",
    "es": "Grandes almacenes",
    "c": 4
  },
  {
    "en": "Whacking",
    "es": "Grandote",
    "c": 4
  },
  {
    "en": "Staple",
    "es": "Grapa",
    "c": 4
  },
  {
    "en": "Severe",
    "es": "Grave, severo",
    "c": 4
  },
  {
    "en": "Faucet, tap",
    "es": "Grifo",
    "c": 4
  },
  {
    "en": "Grumpy",
    "es": "Gruñón",
    "c": 4
  },
  {
    "en": "Guidance",
    "es": "Guía, asesoramiento",
    "c": 4
  },
  {
    "en": "Mislead",
    "es": "Guiar mal",
    "c": 4
  },
  {
    "en": "Script",
    "es": "Guión",
    "c": 4
  },
  {
    "en": "Snap",
    "es": "Hablar cortante; interrumpir bruscamente; romper, quebrar (si hace el sonido snap)",
    "c": 4
  },
  {
    "en": "Remark",
    "es": "Hacer notar, comentar",
    "c": 4
  },
  {
    "en": "Take apart",
    "es": "Hacer pedazos",
    "c": 4
  },
  {
    "en": "Tuck",
    "es": "Hacer un ovillo, remeterse la ropa, arremangarse, recogerse el pelo",
    "c": 4
  },
  {
    "en": "Monitor",
    "es": "Hacer un seguimiento",
    "c": 4
  },
  {
    "en": "Trick",
    "es": "Hacer un truco, timar",
    "c": 4
  },
  {
    "en": "Hold a competition",
    "es": "Hacer una competición",
    "c": 4
  },
  {
    "en": "Make a fuss",
    "es": "Hacer una escena, montar un número, dar la tabarra",
    "c": 4
  },
  {
    "en": "Struck it rich",
    "es": "Hacerse rico",
    "c": 4
  },
  {
    "en": "Corazón",
    "es": "Heart",
    "c": 4
  },
  {
    "en": "Casco",
    "es": "Helmet",
    "c": 4
  },
  {
    "en": "Bleeding",
    "es": "Hemorragia",
    "c": 4
  },
  {
    "en": "Inherit",
    "es": "Heredar",
    "c": 4
  },
  {
    "en": "Injury",
    "es": "Herida, herir",
    "c": 4
  },
  {
    "en": "Stepbrothers",
    "es": "Hermanastros",
    "c": 4
  },
  {
    "en": "Hygiene",
    "es": "Higiene",
    "c": 4
  },
  {
    "en": "Thread",
    "es": "Hilo",
    "c": 4
  },
  {
    "en": "Mortgage",
    "es": "Hipoteca",
    "c": 4
  },
  {
    "en": "Hysterically",
    "es": "Histéricamente",
    "c": 4
  },
  {
    "en": "Flick",
    "es": "Hojear",
    "c": 4
  },
  {
    "en": "Weatherman, weather forecaster",
    "es": "Persona del tiempo",
    "c": 4
  },
  {
    "en": "Awful",
    "es": "Horrible",
    "c": 4
  },
  {
    "en": "Fingerprints",
    "es": "Huellas dactilares",
    "c": 4
  },
  {
    "en": "Mankind",
    "es": "Humanidad",
    "c": 4
  },
  {
    "en": "Damp",
    "es": "Húmedo, mojado",
    "c": 4
  },
  {
    "en": "Humiliate; put down",
    "es": "Humillar",
    "c": 4
  },
  {
    "en": "Icon",
    "es": "Icono",
    "c": 4
  },
  {
    "en": "Rueda de reconocimiento",
    "es": "Identity parade",
    "c": 4
  },
  {
    "en": "Unlimited",
    "es": "Ilimitado",
    "c": 4
  },
  {
    "en": "Illogical",
    "es": "Ilógico",
    "c": 4
  },
  {
    "en": "Picture yourself",
    "es": "Imagínate a ti mismo",
    "c": 4
  },
  {
    "en": "Impatient",
    "es": "Impaciente",
    "c": 4
  },
  {
    "en": "Prevent from",
    "es": "Impedir, evitar",
    "c": 4
  },
  {
    "en": "Unforgivable",
    "es": "Imperdonable",
    "c": 4
  },
  {
    "en": "Imperfect",
    "es": "Imperfecto",
    "c": 4
  },
  {
    "en": "Waterproof",
    "es": "Impermeable",
    "c": 4
  },
  {
    "en": "Impressive",
    "es": "Impresionante",
    "c": 4
  },
  {
    "en": "Application form",
    "es": "Impreso de solicitud",
    "c": 4
  },
  {
    "en": "Unlikely",
    "es": "Improbable",
    "c": 4
  },
  {
    "en": "Misfit",
    "es": "Inadaptado",
    "c": 4
  },
  {
    "en": "Even though",
    "es": "Incluso si",
    "c": 4
  },
  {
    "en": "Uncomfortable",
    "es": "Incómodo",
    "c": 4
  },
  {
    "en": "Unmistakable",
    "es": "Inconfundible",
    "c": 4
  },
  {
    "en": "Unaware",
    "es": "Inconsciente",
    "c": 4
  },
  {
    "en": "Unaware of",
    "es": "Inconsciente de",
    "c": 4
  },
  {
    "en": "Inconvenient",
    "es": "Inconveniente",
    "c": 4
  },
  {
    "en": "Bolt out",
    "es": "Incorporarse o levantarse como un rayo",
    "c": 4
  },
  {
    "en": "Amazing",
    "es": "Increible",
    "c": 4
  },
  {
    "en": "Embedded",
    "es": "Incrustrado, empotrado",
    "c": 4
  },
  {
    "en": "Helpless",
    "es": "Indefenso",
    "c": 4
  },
  {
    "en": "Indication",
    "es": "Indicio",
    "c": 4
  },
  {
    "en": "Indulgent",
    "es": "Indulgente",
    "c": 4
  },
  {
    "en": "Outfit",
    "es": "Indumentaria",
    "c": 4
  },
  {
    "en": "Infer",
    "es": "Inferir",
    "c": 4
  },
  {
    "en": "Influential",
    "es": "Influyente",
    "c": 4
  },
  {
    "en": "Casually",
    "es": "Informalmente",
    "c": 4
  },
  {
    "en": "Reports",
    "es": "Informes",
    "c": 4
  },
  {
    "en": "Undeniably",
    "es": "Innegablemente",
    "c": 4
  },
  {
    "en": "Harmless",
    "es": "Inofensivo",
    "c": 4
  },
  {
    "en": "Restless",
    "es": "Inquieto",
    "c": 4
  },
  {
    "en": "Unsure",
    "es": "Inseguro",
    "c": 4
  },
  {
    "en": "Insensible",
    "es": "Insensible",
    "c": 4
  },
  {
    "en": "Nag on",
    "es": "Insistir, dar la paliza, agotar",
    "c": 4
  },
  {
    "en": "Ensconce",
    "es": "Instalarse, arrellanarse, apoltronarse",
    "c": 4
  },
  {
    "en": "Instant",
    "es": "Instantaneo, instante",
    "c": 4
  },
  {
    "en": "Wholemeal",
    "es": "Integral",
    "c": 4
  },
  {
    "en": "Attempt",
    "es": "Intentar, intento, atentado, atentar",
    "c": 4
  },
  {
    "en": "Swap",
    "es": "Intercambiar",
    "c": 4
  },
  {
    "en": "Shift",
    "es": "Intercambiar, cambiar de marcha, conmutar, turno laboral",
    "c": 4
  },
  {
    "en": "Interest in",
    "es": "Interes en",
    "c": 4
  },
  {
    "en": "Interested in",
    "es": "Interesado en",
    "c": 4
  },
  {
    "en": "Middleman",
    "es": "Intermediario",
    "c": 4
  },
  {
    "en": "Inquire",
    "es": "Interrogar",
    "c": 4
  },
  {
    "en": "Invest",
    "es": "Invertir",
    "c": 4
  },
  {
    "en": "Look into",
    "es": "Investigar",
    "c": 4
  },
  {
    "en": "Ask out",
    "es": "Invitar a salir",
    "c": 4
  },
  {
    "en": "Be in full swing",
    "es": "Ir a velocidad de Crucero, a tope",
    "c": 4
  },
  {
    "en": "Go + gerund",
    "es": "Ir de + infinitivo",
    "c": 4
  },
  {
    "en": "Get about",
    "es": "Ir por ahí",
    "c": 4
  },
  {
    "en": "Commute",
    "es": "Ir y volver al trabajo",
    "c": 4
  },
  {
    "en": "Irrelevant",
    "es": "Irrelevante",
    "c": 4
  },
  {
    "en": "Irreversible",
    "es": "Irreversible",
    "c": 4
  },
  {
    "en": "Maddening",
    "es": "Irritante",
    "c": 4
  },
  {
    "en": "Go away",
    "es": "Irse",
    "c": 4
  },
  {
    "en": "Gardener",
    "es": "Jardinero",
    "c": 4
  },
  {
    "en": "Chief",
    "es": "Jefe",
    "c": 4
  },
  {
    "en": "Cheerful",
    "es": "Jovial",
    "c": 4
  },
  {
    "en": "Trial",
    "es": "Juicio",
    "c": 4
  },
  {
    "en": "Gathering",
    "es": "Juntando",
    "c": 4
  },
  {
    "en": "Together with",
    "es": "Junto con",
    "c": 4
  },
  {
    "en": "Swear/swore/sworn",
    "es": "Jurar",
    "c": 4
  },
  {
    "en": "The main drag",
    "es": "La calle principal, vía de entrada principal",
    "c": 4
  },
  {
    "en": "Call of duty",
    "es": "La llamada del deber",
    "c": 4
  },
  {
    "en": "Average",
    "es": "La media",
    "c": 4
  },
  {
    "en": "Launch",
    "es": "Lanzar, botar",
    "c": 4
  },
  {
    "en": "Tombstone",
    "es": "Lápida",
    "c": 4
  },
  {
    "en": "The odds",
    "es": "Las proporciones",
    "c": 4
  },
  {
    "en": "Brass",
    "es": "Latón",
    "c": 4
  },
  {
    "en": "Laudable",
    "es": "Laudable, laudatorio",
    "c": 4
  },
  {
    "en": "Loyal",
    "es": "Leal",
    "c": 4
  },
  {
    "en": "Loyalty",
    "es": "Lealtad",
    "c": 4
  },
  {
    "en": "Cuero",
    "es": "Leather",
    "c": 4
  },
  {
    "en": "Cot",
    "es": "Lecho, cuna",
    "c": 4
  },
  {
    "en": "Lense",
    "es": "Lente",
    "c": 4
  },
  {
    "en": "Ripple",
    "es": "Hacer ondas en el agua, propagarse",
    "c": 4
  },
  {
    "en": "Raise the voice",
    "es": "Levantar la voz",
    "c": 4
  },
  {
    "en": "Slight",
    "es": "Leve",
    "c": 4
  },
  {
    "en": "Slightly",
    "es": "Levemente",
    "c": 4
  },
  {
    "en": "Law and order",
    "es": "Ley y orden",
    "c": 4
  },
  {
    "en": "Released",
    "es": "Liberado, estrenado, publicado",
    "c": 4
  },
  {
    "en": "Quid",
    "es": "Libra (informal, moneda)",
    "c": 4
  },
  {
    "en": "Portfolio",
    "es": "Libro de imágenes",
    "c": 4
  },
  {
    "en": "Rota",
    "es": "Lista de tareas",
    "c": 4
  },
  {
    "en": "Arrive at",
    "es": "Llegar a",
    "c": 4
  },
  {
    "en": "Reached",
    "es": "Llegué",
    "c": 4
  },
  {
    "en": "Resourceful",
    "es": "Lleno de recursos",
    "c": 4
  },
  {
    "en": "Lead to",
    "es": "Llevar a",
    "c": 4
  },
  {
    "en": "Carry out",
    "es": "Llevar a cabo, realizar",
    "c": 4
  },
  {
    "en": "Get on with",
    "es": "Llevarse con",
    "c": 4
  },
  {
    "en": "Earlobe",
    "es": "Lóbulo",
    "c": 4
  },
  {
    "en": "Trace",
    "es": "Localizar",
    "c": 4
  },
  {
    "en": "Crazy; mad",
    "es": "Loco",
    "c": 4
  },
  {
    "en": "Achieve",
    "es": "Lograr",
    "c": 4
  },
  {
    "en": "Best wishes",
    "es": "Los mejores deseos",
    "c": 4
  },
  {
    "en": "Tile",
    "es": "Losa, azulejo",
    "c": 4
  },
  {
    "en": "Resort",
    "es": "Lugar de recreo",
    "c": 4
  },
  {
    "en": "Timber",
    "es": "Madera en bruto",
    "c": 4
  },
  {
    "en": "Log",
    "es": "Madero, viga, leño, cuaderno de bitácora",
    "c": 4
  },
  {
    "en": "Misguide",
    "es": "Malaconsejar",
    "c": 4
  },
  {
    "en": "Trunk",
    "es": "Maletero, baúl, trompa, tronco",
    "c": 4
  },
  {
    "en": "Bad-tempered; morose",
    "es": "Malhumorado",
    "c": 4
  },
  {
    "en": "Demonstration",
    "es": "Manifestación",
    "c": 4
  },
  {
    "en": "Protester",
    "es": "Manifestante",
    "c": 4
  },
  {
    "en": "Wonderful",
    "es": "Maravilloso",
    "c": 4
  },
  {
    "en": "Brand",
    "es": "Marca",
    "c": 4
  },
  {
    "en": "Daisy",
    "es": "Margarita",
    "c": 4
  },
  {
    "en": "Beyond",
    "es": "Más allá de",
    "c": 4
  },
  {
    "en": "Rounder",
    "es": "Más redondo",
    "c": 4
  },
  {
    "en": "Commodity",
    "es": "Materia prima",
    "c": 4
  },
  {
    "en": "I can't wait to",
    "es": "Me muero de ganas de",
    "c": 4
  },
  {
    "en": "Practitioner",
    "es": "Médico",
    "c": 4
  },
  {
    "en": "Environmental",
    "es": "Medioambiental",
    "c": 4
  },
  {
    "en": "Confidence building",
    "es": "Mejora de la confianza en no mismo",
    "c": 4
  },
  {
    "en": "Improve; look up (situación)",
    "es": "Mejorar",
    "c": 4
  },
  {
    "en": "Bring up",
    "es": "Mencionar un tema",
    "c": 4
  },
  {
    "en": "Deprived",
    "es": "Menesteroso, pobre",
    "c": 4
  },
  {
    "en": "Petty",
    "es": "Menor, insignificante",
    "c": 4
  },
  {
    "en": "Fewer",
    "es": "Menos",
    "c": 4
  },
  {
    "en": "Fewer/less",
    "es": "Menos (más poco)",
    "c": 4
  },
  {
    "en": "Merciful lie",
    "es": "Mentira piadosa",
    "c": 4
  },
  {
    "en": "Barely",
    "es": "Meramente, apenas",
    "c": 4
  },
  {
    "en": "Be worth",
    "es": "Merecer la pena",
    "c": 4
  },
  {
    "en": "Flaten your belly",
    "es": "Meter barriga",
    "c": 4
  },
  {
    "en": "Daunt",
    "es": "Miedo",
    "c": 4
  },
  {
    "en": "Stage fright",
    "es": "Miedo escénico",
    "c": 4
  },
  {
    "en": "Whilst/while",
    "es": "Mientras",
    "c": 4
  },
  {
    "en": "Whereas",
    "es": "Mientrás que",
    "c": 4
  },
  {
    "en": "Spoiled",
    "es": "Mimado",
    "c": 4
  },
  {
    "en": "Peer into",
    "es": "Mirar de hito en hito",
    "c": 4
  },
  {
    "en": "Same as you",
    "es": "Mismo que tú.",
    "c": 4
  },
  {
    "en": "Half",
    "es": "Mitad",
    "c": 4
  },
  {
    "en": "Craze; fashion",
    "es": "Moda",
    "c": 4
  },
  {
    "en": "Passing fashion",
    "es": "Moda pasajera",
    "c": 4
  },
  {
    "en": "Fad",
    "es": "Moda pasajera, locura pasajera de masas",
    "c": 4
  },
  {
    "en": "Modest",
    "es": "Modesto",
    "c": 4
  },
  {
    "en": "Annoyance; disturbance",
    "es": "Molestia",
    "c": 4
  },
  {
    "en": "Annoying",
    "es": "Molesto",
    "c": 4
  },
  {
    "en": "Coin",
    "es": "Moneda",
    "c": 4
  },
  {
    "en": "Fitted",
    "es": "Montado, instalado",
    "c": 4
  },
  {
    "en": "Black pudding",
    "es": "Morcilla",
    "c": 4
  },
  {
    "en": "Sun-tanned",
    "es": "Moreno",
    "c": 4
  },
  {
    "en": "Defaulter, bad debtor, slow payer",
    "es": "Moroso",
    "c": 4
  },
  {
    "en": "Deadly",
    "es": "Mortal",
    "c": 4
  },
  {
    "en": "Get around",
    "es": "Moverse por",
    "c": 4
  },
  {
    "en": "Death",
    "es": "Muerte",
    "c": 4
  },
  {
    "en": "Starving",
    "es": "Muriéndose de hambre",
    "c": 4
  },
  {
    "en": "Worldwide",
    "es": "Mundialmente",
    "c": 4
  },
  {
    "en": "Wrist",
    "es": "Muñeca, del cuerpo",
    "c": 4
  },
  {
    "en": "Hideous",
    "es": "Muy feo",
    "c": 4
  },
  {
    "en": "Spaceship",
    "es": "Nave espacial",
    "c": 4
  },
  {
    "en": "Necessitate",
    "es": "Necesitar",
    "c": 4
  },
  {
    "en": "Deny +ing",
    "es": "Negar",
    "c": 4
  },
  {
    "en": "Nest",
    "es": "Nido",
    "c": 4
  },
  {
    "en": "Nanny",
    "es": "Niñera",
    "c": 4
  },
  {
    "en": "Kid",
    "es": "Niño, niña, cabritillo",
    "c": 4
  },
  {
    "en": "Neglected children",
    "es": "Niños abandonados",
    "c": 4
  },
  {
    "en": "Unconvinced",
    "es": "No convencido",
    "c": 4
  },
  {
    "en": "Unavailable",
    "es": "No disponible",
    "c": 4
  },
  {
    "en": "No matter",
    "es": "No importa",
    "c": 4
  },
  {
    "en": "Uninteresting",
    "es": "No interesante",
    "c": 4
  },
  {
    "en": "Fail to",
    "es": "No lograr/fracasar en",
    "c": 4
  },
  {
    "en": "Homesick",
    "es": "Nostalgico",
    "c": 4
  },
  {
    "en": "News",
    "es": "Noticias",
    "c": 4
  },
  {
    "en": "Knot",
    "es": "Nudo",
    "c": 4
  },
  {
    "en": "Either... or",
    "es": "O... o",
    "c": 4
  },
  {
    "en": "Obey",
    "es": "Obedecer",
    "c": 4
  },
  {
    "en": "Factual",
    "es": "Objetivo, es un hecho",
    "c": 4
  },
  {
    "en": "Duties",
    "es": "Obligaciones",
    "c": 4
  },
  {
    "en": "Concealed",
    "es": "Oculto",
    "c": 4
  },
  {
    "en": "Occupy",
    "es": "Ocupar",
    "c": 4
  },
  {
    "en": "Offence",
    "es": "Ofensa",
    "c": 4
  },
  {
    "en": "Porthole",
    "es": "Ojo de buey",
    "c": 4
  },
  {
    "en": "Sniff",
    "es": "Olfatear, aspirar por la nariz, olisquear, olorcillo",
    "c": 4
  },
  {
    "en": "Belly button, navel",
    "es": "Ombligo",
    "c": 4
  },
  {
    "en": "Arrange",
    "es": "Organizar, disponer",
    "c": 4
  },
  {
    "en": "Birdwatching",
    "es": "Ornitología",
    "c": 4
  },
  {
    "en": "Others",
    "es": "Otros",
    "c": 4
  },
  {
    "en": "Pay the price",
    "es": "Pagar el precio",
    "c": 4
  },
  {
    "en": "Websites",
    "es": "Páginas web",
    "c": 4
  },
  {
    "en": "Keywords",
    "es": "Palabras clave",
    "c": 4
  },
  {
    "en": "Mumbo jumbo",
    "es": "Palabrería, lenguaje técnico ininteligible",
    "c": 4
  },
  {
    "en": "Handlebar",
    "es": "Palanca, manillar",
    "c": 4
  },
  {
    "en": "Bakery",
    "es": "Panadería",
    "c": 4
  },
  {
    "en": "Baker",
    "es": "Panadero",
    "c": 4
  },
  {
    "en": "Nappy",
    "es": "Pañal",
    "c": 4
  },
  {
    "en": "Sum up (to)",
    "es": "Para resumir",
    "c": 4
  },
  {
    "en": "Bumper",
    "es": "Parachoques",
    "c": 4
  },
  {
    "en": "Allotment",
    "es": "Parcela",
    "c": 4
  },
  {
    "en": "Parka",
    "es": "Parka, trenka",
    "c": 4
  },
  {
    "en": "Insole",
    "es": "Parte interior de la suela",
    "c": 4
  },
  {
    "en": "Five-a-side",
    "es": "Partido de cinco por equipo",
    "c": 4
  },
  {
    "en": "Graze",
    "es": "Pastar",
    "c": 4
  },
  {
    "en": "Pills",
    "es": "Pastillas",
    "c": 4
  },
  {
    "en": "Ice-skating",
    "es": "Patinaje sobre hielo",
    "c": 4
  },
  {
    "en": "Antics",
    "es": "Payasadas, chorradas",
    "c": 4
  },
  {
    "en": "Peace and quiet",
    "es": "Paz y tranquilidad",
    "c": 4
  },
  {
    "en": "Toll",
    "es": "Peaje",
    "c": 4
  },
  {
    "en": "Glued to the box",
    "es": "Pegado a la tele",
    "c": 4
  },
  {
    "en": "Sticker",
    "es": "Pegatina",
    "c": 4
  },
  {
    "en": "Fur",
    "es": "Pelaje, piel con pelo",
    "c": 4
  },
  {
    "en": "Film, movie",
    "es": "Película",
    "c": 4
  },
  {
    "en": "Danger; hazard",
    "es": "Peligro, riesgo",
    "c": 4
  },
  {
    "en": "Death penalty",
    "es": "Pena de muerte",
    "c": 4
  },
  {
    "en": "Reckon",
    "es": "Pensar",
    "c": 4
  },
  {
    "en": "Cucumber",
    "es": "Pepino",
    "c": 4
  },
  {
    "en": "Roost",
    "es": "Percha de gallinas",
    "c": 4
  },
  {
    "en": "Lose his/her temper",
    "es": "Perder los nervios, enfadarse",
    "c": 4
  },
  {
    "en": "Lose weight",
    "es": "Perder peso",
    "c": 4
  },
  {
    "en": "Get lost",
    "es": "Perderse",
    "c": 4
  },
  {
    "en": "Loss",
    "es": "Pérdida",
    "c": 4
  },
  {
    "en": "Beravement",
    "es": "Pérdida de un ser querido",
    "c": 4
  },
  {
    "en": "Parsley",
    "es": "Perejil",
    "c": 4
  },
  {
    "en": "Enable",
    "es": "Permitar",
    "c": 4
  },
  {
    "en": "Afford",
    "es": "Permitirse el lujo de",
    "c": 4
  },
  {
    "en": "Bolt",
    "es": "Perno, tornillo de cabeza plana; rayo",
    "c": 4
  },
  {
    "en": "The cleaner",
    "es": "Persona de la limpieza",
    "c": 4
  },
  {
    "en": "Outlook",
    "es": "Perspectiva, punto de vista",
    "c": 4
  },
  {
    "en": "Fisherman",
    "es": "Pescador",
    "c": 4
  },
  {
    "en": "Angler",
    "es": "Pescador de caña",
    "c": 4
  },
  {
    "en": "Pigeon",
    "es": "Pichón",
    "c": 4
  },
  {
    "en": "Spare part",
    "es": "Pieza de repuesto",
    "c": 4
  },
  {
    "en": "Building bricks",
    "es": "Piezas de arquitectura, lego",
    "c": 4
  },
  {
    "en": "Puncture",
    "es": "Pinchazo",
    "c": 4
  },
  {
    "en": "Tread/trod/trodden",
    "es": "Pisar",
    "c": 4
  },
  {
    "en": "Clue",
    "es": "Pista",
    "c": 4
  },
  {
    "en": "Courses",
    "es": "Platos (primero, segundo)",
    "c": 4
  },
  {
    "en": "Endanger",
    "es": "Poner en peligro",
    "c": 4
  },
  {
    "en": "Overhaul",
    "es": "Poner todo patas arriba, rehacer",
    "c": 4
  },
  {
    "en": "Issue a summon",
    "es": "Emitir una citación",
    "c": 4
  },
  {
    "en": "Get down to",
    "es": "Ponerse a hacer algo",
    "c": 4
  },
  {
    "en": "Get in touch with",
    "es": "Ponerse en contacto con",
    "c": 4
  },
  {
    "en": "Get a piercing",
    "es": "Ponerse un piercing",
    "c": 4
  },
  {
    "en": "Get on your nerves",
    "es": "Ponerte de los nervios",
    "c": 4
  },
  {
    "en": "For heaven's sake",
    "es": "Por amor del cielo",
    "c": 4
  },
  {
    "en": "Exgratia",
    "es": "Por buena voluntad, sin obligación legal",
    "c": 4
  },
  {
    "en": "Alike",
    "es": "Por igual, similar",
    "c": 4
  },
  {
    "en": "Hipster",
    "es": "Por la cadera",
    "c": 4
  },
  {
    "en": "Out of concern",
    "es": "Por la preocupación",
    "c": 4
  },
  {
    "en": "So/therefore",
    "es": "Por lo tanto",
    "c": 4
  },
  {
    "en": "By means of",
    "es": "Por medio de",
    "c": 4
  },
  {
    "en": "Percentage",
    "es": "Porcentaje",
    "c": 4
  },
  {
    "en": "Cover",
    "es": "Portada, primera página de un periódico, cobertura",
    "c": 4
  },
  {
    "en": "Put something off",
    "es": "Postponer",
    "c": 4
  },
  {
    "en": "Dessert",
    "es": "Postre",
    "c": 4
  },
  {
    "en": "Handy",
    "es": "Práctico",
    "c": 4
  },
  {
    "en": "Cut prices",
    "es": "Precios rebajados",
    "c": 4
  },
  {
    "en": "Accuracy",
    "es": "Precisión",
    "c": 4
  },
  {
    "en": "Predict",
    "es": "Predecir",
    "c": 4
  },
  {
    "en": "Weather forecast",
    "es": "Predicción metereológica",
    "c": 4
  },
  {
    "en": "Preference",
    "es": "Preferencia",
    "c": 4
  },
  {
    "en": "Wonder",
    "es": "Preguntarse, maravilla",
    "c": 4
  },
  {
    "en": "Garment",
    "es": "Prenda",
    "c": 4
  },
  {
    "en": "Concern",
    "es": "Preocupación",
    "c": 4
  },
  {
    "en": "Worries",
    "es": "Preocupaciones",
    "c": 4
  },
  {
    "en": "Put forward",
    "es": "Presentar",
    "c": 4
  },
  {
    "en": "Dole money",
    "es": "Prestación por desmpleo",
    "c": 4
  },
  {
    "en": "Pay attention to",
    "es": "Prestar atención",
    "c": 4
  },
  {
    "en": "Budget",
    "es": "Presupuesto",
    "c": 4
  },
  {
    "en": "Main; foremost",
    "es": "Principal",
    "c": 4
  },
  {
    "en": "Prístine",
    "es": "Prístino, primitivo",
    "c": 4
  },
  {
    "en": "Data processing",
    "es": "Proceso de datos",
    "c": 4
  },
  {
    "en": "Sport programme",
    "es": "Programa deportivo",
    "c": 4
  },
  {
    "en": "Ban, forbid",
    "es": "Prohibir",
    "c": 4
  },
  {
    "en": "Fiancée",
    "es": "Prometida",
    "c": 4
  },
  {
    "en": "Engaged to",
    "es": "Prometido a",
    "c": 4
  },
  {
    "en": "Promote, foster, sponsor",
    "es": "Promocionar",
    "c": 4
  },
  {
    "en": "Promote, foster",
    "es": "Promover",
    "c": 4
  },
  {
    "en": "Proposal",
    "es": "Proposición",
    "c": 4
  },
  {
    "en": "Psychiatrist",
    "es": "Psiquiatra",
    "c": 4
  },
  {
    "en": "Gazette",
    "es": "Publicación oficial, boe",
    "c": 4
  },
  {
    "en": "Release",
    "es": "Publicar, lanzar al público",
    "c": 4
  },
  {
    "en": "Redundancy",
    "es": "Puesto de trabajo que se pierde, redundancia",
    "c": 4
  },
  {
    "en": "Spike",
    "es": "Punta, escarpia",
    "c": 4
  },
  {
    "en": "Leading",
    "es": "Puntero, a la cabeza",
    "c": 4
  },
  {
    "en": "Sheer",
    "es": "Puro",
    "c": 4
  },
  {
    "en": "Supportive",
    "es": "Que apoya, comprensivo",
    "c": 4
  },
  {
    "en": "What on earth?",
    "es": "¿Qué demonios?",
    "c": 4
  },
  {
    "en": "Alive",
    "es": "Que está vivo",
    "c": 4
  },
  {
    "en": "Unsuspecting",
    "es": "Que no sospecha",
    "c": 4
  },
  {
    "en": "Breathtaking",
    "es": "Que te deja sin aliento",
    "c": 4
  },
  {
    "en": "Fall short",
    "es": "Quedarse corto",
    "c": 4
  },
  {
    "en": "Go into the red",
    "es": "Quedarse en números rojos",
    "c": 4
  },
  {
    "en": "Complaint",
    "es": "Queja",
    "c": 4
  },
  {
    "en": "Complain, to",
    "es": "Quejarse",
    "c": 4
  },
  {
    "en": "Whine",
    "es": "Quejarse, gimotear, gañar",
    "c": 4
  },
  {
    "en": "Agony aunt",
    "es": "Quien se encarga de un consultorio sentimental",
    "c": 4
  },
  {
    "en": "Quiet (cuaiet)",
    "es": "Quieto, silencioso",
    "c": 4
  },
  {
    "en": "Take the skin off",
    "es": "Quitar la piel",
    "c": 4
  },
  {
    "en": "Root",
    "es": "Raiz",
    "c": 4
  },
  {
    "en": "Quickly",
    "es": "Rápidamente",
    "c": 4
  },
  {
    "en": "Skyscraper",
    "es": "Rascacielos",
    "c": 4
  },
  {
    "en": "Scrap",
    "es": "Rascar, quitar la superficie rascando",
    "c": 4
  },
  {
    "en": "Tear; tore; torn",
    "es": "Rasgar",
    "c": 4
  },
  {
    "en": "Odd moments",
    "es": "Ratos muertos",
    "c": 4
  },
  {
    "en": "Restate",
    "es": "Reafirmar",
    "c": 4
  },
  {
    "en": "Bounce",
    "es": "Rebotar, rebote",
    "c": 4
  },
  {
    "en": "Reject; turn down",
    "es": "Rechazar",
    "c": 4
  },
  {
    "en": "Refusal",
    "es": "Rechazo",
    "c": 4
  },
  {
    "en": "Claim",
    "es": "Reclamar, afirmar",
    "c": 4
  },
  {
    "en": "Regards",
    "es": "Recuerdos (saludo)",
    "c": 4
  },
  {
    "en": "Get over",
    "es": "Recuperarse",
    "c": 4
  },
  {
    "en": "Recover from",
    "es": "Recuperarse de",
    "c": 4
  },
  {
    "en": "Resource",
    "es": "Recurso",
    "c": 4
  },
  {
    "en": "Cut down on",
    "es": "Reducir, recortar gastos",
    "c": 4
  },
  {
    "en": "Muse on",
    "es": "Reflexionar, fantasear sobre",
    "c": 4
  },
  {
    "en": "Haggle",
    "es": "Regatear (precios)",
    "c": 4
  },
  {
    "en": "Relate",
    "es": "Relacionar",
    "c": 4
  },
  {
    "en": "Chill out",
    "es": "Relejarse",
    "c": 4
  },
  {
    "en": "Filling",
    "es": "Relleno",
    "c": 4
  },
  {
    "en": "Packed",
    "es": "Repleto",
    "c": 4
  },
  {
    "en": "Requirements",
    "es": "Requisitos",
    "c": 4
  },
  {
    "en": "Salvage",
    "es": "Rescatar maquinaria, metal",
    "c": 4
  },
  {
    "en": "Resent",
    "es": "Resentirse de",
    "c": 4
  },
  {
    "en": "Tough",
    "es": "Resistente",
    "c": 4
  },
  {
    "en": "Solve",
    "es": "Resolver, disolver",
    "c": 4
  },
  {
    "en": "Endorsement",
    "es": "Respaldo, aprobación, endorso",
    "c": 4
  },
  {
    "en": "Respectable",
    "es": "Respetable",
    "c": 4
  },
  {
    "en": "Respectful",
    "es": "Respetuoso",
    "c": 4
  },
  {
    "en": "Glow",
    "es": "Resplandor; resplandecer",
    "c": 4
  },
  {
    "en": "Responsible for",
    "es": "Responsable de",
    "c": 4
  },
  {
    "en": "Response",
    "es": "Respuesta",
    "c": 4
  },
  {
    "en": "Summary",
    "es": "Resumen",
    "c": 4
  },
  {
    "en": "Summarise",
    "es": "Resumir",
    "c": 4
  },
  {
    "en": "Portrait",
    "es": "Retrato",
    "c": 4
  },
  {
    "en": "Family-gathering",
    "es": "Reunión familiar",
    "c": 4
  },
  {
    "en": "Revive",
    "es": "Revivir",
    "c": 4
  },
  {
    "en": "Wealthy",
    "es": "Rico",
    "c": 4
  },
  {
    "en": "Ridiculous",
    "es": "Ridículo",
    "c": 4
  },
  {
    "en": "Risk",
    "es": "Riesgo",
    "c": 4
  },
  {
    "en": "Upriver",
    "es": "Rio arriba",
    "c": 4
  },
  {
    "en": "Laughter",
    "es": "Risa",
    "c": 4
  },
  {
    "en": "Surround",
    "es": "Rodear",
    "c": 4
  },
  {
    "en": "Burst out laughing",
    "es": "Romper a carcajadas",
    "c": 4
  },
  {
    "en": "Underwear",
    "es": "Ropa interior",
    "c": 4
  },
  {
    "en": "Rotate",
    "es": "Rotar",
    "c": 4
  },
  {
    "en": "Sizzle",
    "es": "Ruido que hacen las salchichas al escapársele; el aire cuando se fríen, chisporrotear",
    "c": 4
  },
  {
    "en": "Noisy",
    "es": "Ruidoso",
    "c": 4
  },
  {
    "en": "Know for a fact",
    "es": "Saber con seguridad",
    "c": 4
  },
  {
    "en": "Flavour",
    "es": "Sabor, aroma",
    "c": 4
  },
  {
    "en": "Tasty",
    "es": "Sabroso",
    "c": 4
  },
  {
    "en": "Salt and pepper",
    "es": "Sal y pimienta",
    "c": 4
  },
  {
    "en": "Work out",
    "es": "Salir bien, funcionar",
    "c": 4
  },
  {
    "en": "Hang out with",
    "es": "Salir con alguien",
    "c": 4
  },
  {
    "en": "Generation gap",
    "es": "Salto generacional",
    "c": 4
  },
  {
    "en": "Healthy",
    "es": "Saludable",
    "c": 4
  },
  {
    "en": "Greet",
    "es": "Saludar",
    "c": 4
  },
  {
    "en": "Safe and sound",
    "es": "Sano y salvo",
    "c": 4
  },
  {
    "en": "Pan.",
    "es": "Sartén",
    "c": 4
  },
  {
    "en": "Satisfied with",
    "es": "Satisfecho de",
    "c": 4
  },
  {
    "en": "Clog",
    "es": "Saturar",
    "c": 4
  },
  {
    "en": "Undercover",
    "es": "Secreto, infiltrado",
    "c": 4
  },
  {
    "en": "Follow; go on",
    "es": "Seguir",
    "c": 4
  },
  {
    "en": "Keep on doing",
    "es": "Seguir haciendo",
    "c": 4
  },
  {
    "en": "According to …",
    "es": "Según …",
    "c": 4
  },
  {
    "en": "Safe; certain",
    "es": "Seguro",
    "c": 4
  },
  {
    "en": "Self-assured",
    "es": "Seguro de si",
    "c": 4
  },
  {
    "en": "Confident",
    "es": "Seguro de sí mismo",
    "c": 4
  },
  {
    "en": "Traffic lights",
    "es": "Semáforo",
    "c": 4
  },
  {
    "en": "Sentidos",
    "es": "Senses",
    "c": 4
  },
  {
    "en": "Perceptive",
    "es": "Sensible",
    "c": 4
  },
  {
    "en": "Touch-sensitive",
    "es": "Sensible al tacto",
    "c": 4
  },
  {
    "en": "Feelings",
    "es": "Sentimientos",
    "c": 4
  },
  {
    "en": "Split up",
    "es": "Separarse",
    "c": 4
  },
  {
    "en": "Be suited to",
    "es": "Ser apropiado",
    "c": 4
  },
  {
    "en": "Be aware of",
    "es": "Ser consciente",
    "c": 4
  },
  {
    "en": "Become aware of",
    "es": "Hacerse consciente de",
    "c": 4
  },
  {
    "en": "Be keen on",
    "es": "Ser muy aficcionado",
    "c": 4
  },
  {
    "en": "Make a point of",
    "es": "Tomarse algo muy en serio",
    "c": 4
  },
  {
    "en": "Be likely to",
    "es": "Ser probable que",
    "c": 4
  },
  {
    "en": "Streamer",
    "es": "Serpentina",
    "c": 4
  },
  {
    "en": "Funeral services",
    "es": "Servicios funerarios",
    "c": 4
  },
  {
    "en": "As long as",
    "es": "Siempre que",
    "c": 4
  },
  {
    "en": "Vista",
    "es": "Sight",
    "c": 4
  },
  {
    "en": "Mean, to",
    "es": "Significar",
    "c": 4
  },
  {
    "en": "Whistle",
    "es": "Silbar",
    "c": 4
  },
  {
    "en": "Hiss",
    "es": "Silbar las serpientes de cascabel. Ruido de fritura, también verbo",
    "c": 4
  },
  {
    "en": "Saddle",
    "es": "Silla de montar, sillín de bicicleta",
    "c": 4
  },
  {
    "en": "Likeable",
    "es": "Simpático",
    "c": 4
  },
  {
    "en": "Without",
    "es": "Sin",
    "c": 4
  },
  {
    "en": "Breathless",
    "es": "Sin aliento",
    "c": 4
  },
  {
    "en": "Sugar-free",
    "es": "Sin azucar",
    "c": 4
  },
  {
    "en": "Defenceless",
    "es": "Sin defensa",
    "c": 4
  },
  {
    "en": "Penniless",
    "es": "Sin dinero",
    "c": 4
  },
  {
    "en": "However, nevertheless",
    "es": "Sin embargo",
    "c": 4
  },
  {
    "en": "Endless",
    "es": "Sin fin",
    "c": 4
  },
  {
    "en": "Speechless; gobsmacked",
    "es": "Sin habla",
    "c": 4
  },
  {
    "en": "Dauntless, undaunted",
    "es": "Sin miedo",
    "c": 4
  },
  {
    "en": "Needlessly",
    "es": "Sin necesidad",
    "c": 4
  },
  {
    "en": "Pointless",
    "es": "Sin ningún sentido, inútil",
    "c": 4
  },
  {
    "en": "Carefree",
    "es": "Sin preocupación",
    "c": 4
  },
  {
    "en": "Meaningless",
    "es": "Sin significado",
    "c": 4
  },
  {
    "en": "Worthless",
    "es": "Sin valor",
    "c": 4
  },
  {
    "en": "Yours sincerely",
    "es": "Sinceramente suyo",
    "c": 4
  },
  {
    "en": "Survive",
    "es": "Sobrevivir",
    "c": 4
  },
  {
    "en": "Sober",
    "es": "Sóbrio",
    "c": 4
  },
  {
    "en": "Apply for, to",
    "es": "Solicitar",
    "c": 4
  },
  {
    "en": "Loner",
    "es": "Solitario, voluntariamente",
    "c": 4
  },
  {
    "en": "On its own; alone",
    "es": "Solo",
    "c": 4
  },
  {
    "en": "Solo",
    "es": "Que trabaja solo, solo de un instrumento",
    "c": 4
  },
  {
    "en": "Single; bachelor",
    "es": "Soltera, soltero",
    "c": 4
  },
  {
    "en": "Solution to",
    "es": "Solución a",
    "c": 4
  },
  {
    "en": "Bleak",
    "es": "Sombrío",
    "c": 4
  },
  {
    "en": "Undergo",
    "es": "Someterse a, soportar",
    "c": 4
  },
  {
    "en": "Chilled soup",
    "es": "Sopa helada",
    "c": 4
  },
  {
    "en": "Blowtorch",
    "es": "Soplete",
    "c": 4
  },
  {
    "en": "Tip-off",
    "es": "Soplo",
    "c": 4
  },
  {
    "en": "Stand; put up with",
    "es": "Soportar, tolerar",
    "c": 4
  },
  {
    "en": "Sip",
    "es": "Sorber",
    "c": 4
  },
  {
    "en": "Amazed",
    "es": "Sorprendido",
    "c": 4
  },
  {
    "en": "Surprised at",
    "es": "Sorprendido por",
    "c": 4
  },
  {
    "en": "Suspect",
    "es": "Sospechar",
    "c": 4
  },
  {
    "en": "Sustainable",
    "es": "Sostenible",
    "c": 4
  },
  {
    "en": "Subside",
    "es": "Subsidiar, subvencionar",
    "c": 4
  },
  {
    "en": "Suffer from",
    "es": "Sufrir de",
    "c": 4
  },
  {
    "en": "Overwhelmed",
    "es": "Superado (por el número, los problemas, etc)",
    "c": 4
  },
  {
    "en": "Supertitious",
    "es": "Supersticioso",
    "c": 4
  },
  {
    "en": "Attachment",
    "es": "Suplemento, pieza extra unida al principal",
    "c": 4
  },
  {
    "en": "Pledge",
    "es": "Súplica",
    "c": 4
  },
  {
    "en": "Beg",
    "es": "Suplicar",
    "c": 4
  },
  {
    "en": "Supposedly",
    "es": "Supuestamente",
    "c": 4
  },
  {
    "en": "Suspended",
    "es": "Suspendido (acto, espectáculo)",
    "c": 4
  },
  {
    "en": "Whisper",
    "es": "Susurrar",
    "c": 4
  },
  {
    "en": "Chart",
    "es": "Tabla, carta naútica",
    "c": 4
  },
  {
    "en": "Taboo",
    "es": "Tabú",
    "c": 4
  },
  {
    "en": "Tight fisted",
    "es": "Tacaño",
    "c": 4
  },
  {
    "en": "Heel",
    "es": "Tacón, talón",
    "c": 4
  },
  {
    "en": "Tact",
    "es": "Tacto",
    "c": 4
  },
  {
    "en": "Sharply",
    "es": "Tajantemente",
    "c": 4
  },
  {
    "en": "Such as",
    "es": "Tal y como",
    "c": 4
  },
  {
    "en": "Sooner or later",
    "es": "Tarde o temprano",
    "c": 4
  },
  {
    "en": "Task",
    "es": "Tarea",
    "c": 4
  },
  {
    "en": "Chore",
    "es": "Tarea del hogar, repetitiva",
    "c": 4
  },
  {
    "en": "Assignment",
    "es": "Tarea, encargo",
    "c": 4
  },
  {
    "en": "Tasks",
    "es": "Tareas",
    "c": 4
  },
  {
    "en": "Greeting card",
    "es": "Tarjeta de felicitación",
    "c": 4
  },
  {
    "en": "Tub",
    "es": "Tarrina",
    "c": 4
  },
  {
    "en": "Rate; fee",
    "es": "Tasa, tipo, ritmo",
    "c": 4
  },
  {
    "en": "Get tatooed",
    "es": "Tatuarse",
    "c": 4
  },
  {
    "en": "Cab",
    "es": "Taxi",
    "c": 4
  },
  {
    "en": "Cloth",
    "es": "Tela",
    "c": 4
  },
  {
    "en": "Trend",
    "es": "Tendencia, moda",
    "c": 4
  },
  {
    "en": "Tend",
    "es": "Tender, cuidar",
    "c": 4
  },
  {
    "en": "Be fond of",
    "es": "Tener cariño o afición a",
    "c": 4
  },
  {
    "en": "Set in",
    "es": "Tener lugar en",
    "c": 4
  },
  {
    "en": "Rolling in it",
    "es": "Tener mucho dinero",
    "c": 4
  },
  {
    "en": "Aim at",
    "es": "Tener por objetivo",
    "c": 4
  },
  {
    "en": "Have the knack for",
    "es": "Tener un don para algo",
    "c": 4
  },
  {
    "en": "Be on a budget",
    "es": "Tener un presupuesto limitado",
    "c": 4
  },
  {
    "en": "Stand a chance",
    "es": "Tener una oportunidad",
    "c": 4
  },
  {
    "en": "Dye",
    "es": "Teñir",
    "c": 4
  },
  {
    "en": "Temptation",
    "es": "Tentación",
    "c": 4
  },
  {
    "en": "Tempt",
    "es": "Tentar",
    "c": 4
  },
  {
    "en": "Chat show",
    "es": "Tertulia",
    "c": 4
  },
  {
    "en": "Texture",
    "es": "Textura",
    "c": 4
  },
  {
    "en": "Spare time",
    "es": "Tiempo libre",
    "c": 4
  },
  {
    "en": "Time to spare",
    "es": "Tiempo para gastar",
    "c": 4
  },
  {
    "en": "Tense",
    "es": "Tiempo verbal",
    "c": 4
  },
  {
    "en": "Wilderness",
    "es": "Tierra salvaje, la naturaleza",
    "c": 4
  },
  {
    "en": "Flush",
    "es": "Tirar de la cadena del bater; precipitarse al exterior una masa de cosas o gente; ruborizarse",
    "c": 4
  },
  {
    "en": "Plaster",
    "es": "Tirita, escayola",
    "c": 4
  },
  {
    "en": "Chalk",
    "es": "Tiza",
    "c": 4
  },
  {
    "en": "All the best",
    "es": "Todo lo bueno",
    "c": 4
  },
  {
    "en": "All or nothing",
    "es": "Todo o nada",
    "c": 4
  },
  {
    "en": "Take note",
    "es": "Tomar nota",
    "c": 4
  },
  {
    "en": "Seize",
    "es": "Tomar, agarrar",
    "c": 4
  },
  {
    "en": "Stormy",
    "es": "Tormentoso",
    "c": 4
  },
  {
    "en": "Cough",
    "es": "Toser",
    "c": 4
  },
  {
    "en": "Hard-working",
    "es": "Trabajador",
    "c": 4
  },
  {
    "en": "Redundant",
    "es": "Trabajador que va a perder o ha perdido su empleo. Redundante",
    "c": 4
  },
  {
    "en": "Betray",
    "es": "Traicionar",
    "c": 4
  },
  {
    "en": "Traitor",
    "es": "Traidor",
    "c": 4
  },
  {
    "en": "Reassure",
    "es": "Tranquilizar, consolar, dar confianza",
    "c": 4
  },
  {
    "en": "Broadcast",
    "es": "Transmision (comunicación)",
    "c": 4
  },
  {
    "en": "Triple",
    "es": "Triplicarse",
    "c": 4
  },
  {
    "en": "Mentor",
    "es": "Tutor, consejero",
    "c": 4
  },
  {
    "en": "A bore",
    "es": "Un aburrimiento",
    "c": 4
  },
  {
    "en": "A would-be something",
    "es": "Un algo en ciernes",
    "c": 4
  },
  {
    "en": "An acquaintance",
    "es": "Un conocido",
    "c": 4
  },
  {
    "en": "A finding",
    "es": "Un hallazgo",
    "c": 4
  },
  {
    "en": "A flat tyre",
    "es": "Un neumático pinchado",
    "c": 4
  },
  {
    "en": "A suspect",
    "es": "Un sospechoso",
    "c": 4
  },
  {
    "en": "A search",
    "es": "Una búsqueda",
    "c": 4
  },
  {
    "en": "A rip-off",
    "es": "Una clavada (nombre y verbo)",
    "c": 4
  },
  {
    "en": "A sneaking suspicion",
    "es": "Una creciente sospecha",
    "c": 4
  },
  {
    "en": "A forgery",
    "es": "Una falsificación",
    "c": 4
  },
  {
    "en": "A drag",
    "es": "Una lata, un tostón",
    "c": 4
  },
  {
    "en": "A lame duck, a lamer",
    "es": "Una nulidad (un pato cojo)",
    "c": 4
  },
  {
    "en": "A hopeful (something)",
    "es": "Uno que espera ser ese algo",
    "c": 4
  },
  {
    "en": "Couch potato",
    "es": "Uno que se pasa el día delante la tele en el sofá",
    "c": 4
  },
  {
    "en": "Useful",
    "es": "Útil",
    "c": 4
  },
  {
    "en": "Tramp",
    "es": "Vagabundo",
    "c": 4
  },
  {
    "en": "Lazyness",
    "es": "Vagancia, dejadez",
    "c": 4
  },
  {
    "en": "Carriage",
    "es": "Vagón, carruaje",
    "c": 4
  },
  {
    "en": "Get by",
    "es": "Valérselas",
    "c": 4
  },
  {
    "en": "Valuable",
    "es": "Valioso",
    "c": 4
  },
  {
    "en": "Assesment",
    "es": "Valoración",
    "c": 4
  },
  {
    "en": "Vary",
    "es": "Variar",
    "c": 4
  },
  {
    "en": "Moped",
    "es": "Velomotor",
    "c": 4
  },
  {
    "en": "Take revenge on; get back at",
    "es": "Vengarse de",
    "c": 4
  },
  {
    "en": "Asset",
    "es": "Ventaja, bienes, cosas a tu favor",
    "c": 4
  },
  {
    "en": "Blizzard",
    "es": "Ventisca",
    "c": 4
  },
  {
    "en": "Vegetables",
    "es": "Verduras",
    "c": 4
  },
  {
    "en": "Embarrassment",
    "es": "Vergüenza, corte",
    "c": 4
  },
  {
    "en": "Cope with",
    "es": "Verselas, arreglarselas",
    "c": 4
  },
  {
    "en": "In drag",
    "es": "Vestido de mujer, travestido",
    "c": 4
  },
  {
    "en": "Package holiday",
    "es": "Viaje organizado",
    "c": 4
  },
  {
    "en": "Eyesight",
    "es": "Vista",
    "c": 4
  },
  {
    "en": "Sights",
    "es": "Vistas",
    "c": 4
  },
  {
    "en": "Snazzy",
    "es": "Vistoso",
    "c": 4
  },
  {
    "en": "Widow",
    "es": "Viuda",
    "c": 4
  },
  {
    "en": "Bring back",
    "es": "Volver a traer",
    "c": 4
  },
  {
    "en": "Yolk",
    "es": "Yema de huevo",
    "c": 4
  },
  {
    "en": "Dive",
    "es": "Zambullirse, tirarse del trampolín; hacer un picado un avión",
    "c": 4
  },
  {
    "en": "According to",
    "es": "Según",
    "c": 4
  },
  {
    "en": "According to current events",
    "es": "Según los actuales acontecimientos",
    "c": 4
  },
  {
    "en": "According to the book",
    "es": "Según las reglas",
    "c": 4
  },
  {
    "en": "After all",
    "es": "Después de todo",
    "c": 4
  },
  {
    "en": "Again and again",
    "es": "Una y otra vez",
    "c": 4
  },
  {
    "en": "Against my will",
    "es": "En contra de mi voluntad",
    "c": 4
  },
  {
    "en": "All day long",
    "es": "Todo el día",
    "c": 4
  },
  {
    "en": "All of a sudden",
    "es": "De repente",
    "c": 4
  },
  {
    "en": "All told",
    "es": "En total",
    "c": 4
  },
  {
    "en": "Approximately",
    "es": "Aproximadamente",
    "c": 4
  },
  {
    "en": "As a last resort",
    "es": "Como último recurso",
    "c": 4
  },
  {
    "en": "As a matter of fact",
    "es": "De hecho",
    "c": 4
  },
  {
    "en": "As a rule",
    "es": "Como regla general",
    "c": 4
  },
  {
    "en": "As an illustration",
    "es": "Como ejemplo",
    "c": 4
  },
  {
    "en": "As circumstances may require",
    "es": "Según lo requieran las circunstancias",
    "c": 4
  },
  {
    "en": "As far as I know",
    "es": "Hasta donde sé",
    "c": 4
  },
  {
    "en": "As far as it can be recalled",
    "es": "Hasta donde se puede recordar",
    "c": 4
  },
  {
    "en": "As I explained",
    "es": "Como expliqué",
    "c": 4
  },
  {
    "en": "As I have already said",
    "es": "Como ya he dicho",
    "c": 4
  },
  {
    "en": "As I pointed out in",
    "es": "Como señalé en",
    "c": 4
  },
  {
    "en": "As if by magic",
    "es": "Como por arte de magia",
    "c": 4
  },
  {
    "en": "As it has been shown many times",
    "es": "Como se ha demostrado muchas veces",
    "c": 4
  },
  {
    "en": "As late as",
    "es": "Tan tarde como",
    "c": 4
  },
  {
    "en": "As matters now stand",
    "es": "Tal como están las cosas",
    "c": 4
  },
  {
    "en": "As the case may be",
    "es": "Según sea el caso",
    "c": 4
  },
  {
    "en": "As the years go by",
    "es": "A medida que pasan los años",
    "c": 4
  },
  {
    "en": "As things now stand",
    "es": "Tal como están las cosas",
    "c": 4
  },
  {
    "en": "As usual",
    "es": "Como siempre",
    "c": 4
  },
  {
    "en": "Aside from this",
    "es": "Aparte de esto",
    "c": 4
  },
  {
    "en": "At a glance",
    "es": "A simple vista",
    "c": 4
  },
  {
    "en": "At a suitable time",
    "es": "En el momento adecuado",
    "c": 4
  },
  {
    "en": "At all costs",
    "es": "A toda costa",
    "c": 4
  },
  {
    "en": "At all events",
    "es": "En todo caso",
    "c": 4
  },
  {
    "en": "At an early date",
    "es": "En una fecha temprana",
    "c": 4
  },
  {
    "en": "At random",
    "es": "Al azar",
    "c": 4
  },
  {
    "en": "At stake",
    "es": "En juego",
    "c": 4
  },
  {
    "en": "At start",
    "es": "Al comienzo",
    "c": 4
  },
  {
    "en": "At the mercy of elements",
    "es": "A merced de los elementos",
    "c": 4
  },
  {
    "en": "At the outset",
    "es": "Al principio",
    "c": 4
  },
  {
    "en": "At the right time",
    "es": "En el momento adecuado",
    "c": 4
  },
  {
    "en": "At the very least",
    "es": "Como mínimo",
    "c": 4
  },
  {
    "en": "At the wrong time",
    "es": "En el momento equivocado",
    "c": 4
  },
  {
    "en": "At this stage",
    "es": "En esta etapa",
    "c": 4
  },
  {
    "en": "At this time and hour",
    "es": "En este momento y hora",
    "c": 4
  },
  {
    "en": "At your convenience",
    "es": "A su conveniencia",
    "c": 4
  },
  {
    "en": "Backwards",
    "es": "Hacia atrás",
    "c": 4
  },
  {
    "en": "Bar none",
    "es": "Sin excepción",
    "c": 4
  },
  {
    "en": "Basically",
    "es": "Básicamente",
    "c": 4
  },
  {
    "en": "Be that as it may",
    "es": "Sea como sea",
    "c": 4
  },
  {
    "en": "Before all else",
    "es": "Antes que nada",
    "c": 4
  },
  {
    "en": "Before long",
    "es": "Pronto",
    "c": 4
  },
  {
    "en": "Besides",
    "es": "Además",
    "c": 4
  },
  {
    "en": "Broadly speaking",
    "es": "En términos generales",
    "c": 4
  },
  {
    "en": "By a long way",
    "es": "Con diferencia",
    "c": 4
  },
  {
    "en": "By all means",
    "es": "Por supuesto",
    "c": 4
  },
  {
    "en": "By book",
    "es": "Según el libro",
    "c": 4
  },
  {
    "en": "By chance",
    "es": "Por casualidad",
    "c": 4
  },
  {
    "en": "By comparison",
    "es": "En comparación",
    "c": 4
  },
  {
    "en": "By degree",
    "es": "Poco a poco",
    "c": 4
  },
  {
    "en": "By design",
    "es": "A propósito",
    "c": 4
  },
  {
    "en": "By dint of hard work",
    "es": "A base de trabajo duro",
    "c": 4
  },
  {
    "en": "By error",
    "es": "Por error",
    "c": 4
  },
  {
    "en": "By fair or foul",
    "es": "De buena o mala manera",
    "c": 4
  },
  {
    "en": "By heart",
    "es": "De memoria",
    "c": 4
  },
  {
    "en": "By nature",
    "es": "Por naturaleza",
    "c": 4
  },
  {
    "en": "By no means",
    "es": "De ninguna manera",
    "c": 4
  },
  {
    "en": "By that time",
    "es": "Para entonces",
    "c": 4
  },
  {
    "en": "By the way",
    "es": "Por cierto, a propósito",
    "c": 4
  },
  {
    "en": "Come to think of it",
    "es": "Ahora que lo pienso",
    "c": 4
  },
  {
    "en": "Compared to",
    "es": "Comparado con",
    "c": 4
  },
  {
    "en": "Considering that",
    "es": "Considerando que",
    "c": 4
  },
  {
    "en": "Conversely",
    "es": "A la inversa",
    "c": 4
  },
  {
    "en": "Curiously enough",
    "es": "Curiosamente",
    "c": 4
  },
  {
    "en": "Day after day",
    "es": "Día tras día",
    "c": 4
  },
  {
    "en": "Day by day",
    "es": "Día a día",
    "c": 4
  },
  {
    "en": "Decidedly",
    "es": "Decididamente",
    "c": 4
  },
  {
    "en": "Deep down",
    "es": "En el fondo",
    "c": 4
  },
  {
    "en": "Despite everything",
    "es": "A pesar de todo",
    "c": 4
  },
  {
    "en": "Equally important",
    "es": "Igualmente importante",
    "c": 4
  },
  {
    "en": "Eternally",
    "es": "Eternamente",
    "c": 4
  },
  {
    "en": "Even more",
    "es": "Aún más",
    "c": 4
  },
  {
    "en": "Even so",
    "es": "Aun así",
    "c": 4
  },
  {
    "en": "Eventually",
    "es": "Finalmente",
    "c": 4
  },
  {
    "en": "Far from it",
    "es": "Lejos de eso",
    "c": 4
  },
  {
    "en": "For a change",
    "es": "Para variar",
    "c": 4
  },
  {
    "en": "For a variety of reasons",
    "es": "Por una variedad de razones",
    "c": 4
  },
  {
    "en": "For all I know",
    "es": "Que yo sepa",
    "c": 4
  },
  {
    "en": "For brevity's sake",
    "es": "Por razones de brevedad",
    "c": 4
  },
  {
    "en": "For fear of",
    "es": "Por miedo a",
    "c": 4
  },
  {
    "en": "For good",
    "es": "Para siempre",
    "c": 4
  },
  {
    "en": "For good reasons",
    "es": "Por buenas razones",
    "c": 4
  },
  {
    "en": "For instance",
    "es": "Por ejemplo",
    "c": 4
  },
  {
    "en": "For life",
    "es": "De por vida",
    "c": 4
  },
  {
    "en": "For long",
    "es": "Durante mucho tiempo",
    "c": 4
  },
  {
    "en": "For short",
    "es": "En resumen",
    "c": 4
  },
  {
    "en": "For some time now",
    "es": "Desde hace algún tiempo",
    "c": 4
  },
  {
    "en": "For sure",
    "es": "De seguro",
    "c": 4
  },
  {
    "en": "For that matter",
    "es": "En ese sentido",
    "c": 4
  },
  {
    "en": "For the most part",
    "es": "En su mayoría",
    "c": 4
  },
  {
    "en": "For the record",
    "es": "Para que conste",
    "c": 4
  },
  {
    "en": "For the time being",
    "es": "Por el momento",
    "c": 4
  },
  {
    "en": "For their part",
    "es": "Por su parte",
    "c": 4
  },
  {
    "en": "For these reasons I think",
    "es": "Por estas razones, creo",
    "c": 4
  },
  {
    "en": "For this purpose",
    "es": "Con este propósito",
    "c": 4
  },
  {
    "en": "For this reason",
    "es": "Por esta razón",
    "c": 4
  },
  {
    "en": "For what it is worth",
    "es": "Por lo que pueda ser útil",
    "c": 4
  },
  {
    "en": "Formerly",
    "es": "Anteriormente",
    "c": 4
  },
  {
    "en": "Forthwith",
    "es": "Inmediatamente",
    "c": 4
  },
  {
    "en": "From every point of view",
    "es": "Desde todos los puntos de vista",
    "c": 4
  },
  {
    "en": "From now on",
    "es": "De ahora en adelante",
    "c": 4
  },
  {
    "en": "From the outset",
    "es": "Desde el principio",
    "c": 4
  },
  {
    "en": "From this point of view",
    "es": "Desde este punto de vista",
    "c": 4
  },
  {
    "en": "From what I see",
    "es": "Desde mi perspectiva",
    "c": 4
  },
  {
    "en": "Generally speaking",
    "es": "En términos generales",
    "c": 4
  },
  {
    "en": "Gladly",
    "es": "Con gusto",
    "c": 4
  },
  {
    "en": "Gradually",
    "es": "Gradualmente",
    "c": 4
  },
  {
    "en": "Hastily",
    "es": "A la ligera",
    "c": 4
  },
  {
    "en": "Hence",
    "es": "De ahí, por lo tanto",
    "c": 4
  },
  {
    "en": "Henceforth",
    "es": "De aquí en adelante",
    "c": 4
  },
  {
    "en": "Hereinafter",
    "es": "En adelante",
    "c": 4
  },
  {
    "en": "Hurriedly",
    "es": "Apresuradamente",
    "c": 4
  },
  {
    "en": "I am in favour of",
    "es": "Estoy a favor de",
    "c": 4
  },
  {
    "en": "I am referring to",
    "es": "Me refiero a",
    "c": 4
  },
  {
    "en": "Identical to",
    "es": "Idéntico a",
    "c": 4
  },
  {
    "en": "If applicable",
    "es": "Si es de aplicación",
    "c": 4
  },
  {
    "en": "If appropriate",
    "es": "Si es apropiado",
    "c": 4
  },
  {
    "en": "If I remember correctly",
    "es": "Si recuerdo bien",
    "c": 4
  },
  {
    "en": "If need be",
    "es": "Si fuera necesario",
    "c": 4
  },
  {
    "en": "If not",
    "es": "Si no",
    "c": 4
  },
  {
    "en": "If proper",
    "es": "Si corresponde, si es apropiado",
    "c": 4
  },
  {
    "en": "If the need arises",
    "es": "Si surge la necesidad",
    "c": 4
  },
  {
    "en": "Immediately",
    "es": "Inmediatamente",
    "c": 4
  },
  {
    "en": "In a broad sense",
    "es": "En un sentido amplio",
    "c": 4
  },
  {
    "en": "In a nutshell",
    "es": "En pocas palabras",
    "c": 4
  },
  {
    "en": "In a sense",
    "es": "En cierto sentido",
    "c": 4
  },
  {
    "en": "In addition",
    "es": "Además",
    "c": 4
  },
  {
    "en": "In another sense",
    "es": "En otro sentido",
    "c": 4
  },
  {
    "en": "In any event",
    "es": "En cualquier circunstancia",
    "c": 4
  },
  {
    "en": "In brief",
    "es": "En resumen",
    "c": 4
  },
  {
    "en": "In case",
    "es": "En caso de",
    "c": 4
  },
  {
    "en": "In conclusion",
    "es": "En conclusión",
    "c": 4
  },
  {
    "en": "In my book",
    "es": "Según yo sé, como a mí me enseñaron",
    "c": 4
  },
  {
    "en": "In short",
    "es": "En resumen",
    "c": 4
  },
  {
    "en": "In the final analysis",
    "es": "En el análisis final",
    "c": 4
  },
  {
    "en": "In the meantime",
    "es": "Mientras tanto",
    "c": 4
  },
  {
    "en": "In this respect",
    "es": "A este respecto",
    "c": 4
  },
  {
    "en": "It can be seen that",
    "es": "Se puede ver que",
    "c": 4
  },
  {
    "en": "It is believed that",
    "es": "Se cree que",
    "c": 4
  },
  {
    "en": "It is desirable that",
    "es": "Es deseable que",
    "c": 4
  },
  {
    "en": "It is evident that",
    "es": "Es evidente que",
    "c": 4
  },
  {
    "en": "It is natural that",
    "es": "Es natural que",
    "c": 4
  },
  {
    "en": "It is necessary that",
    "es": "Es necesario que",
    "c": 4
  },
  {
    "en": "It is obvious that",
    "es": "Es obvio que",
    "c": 4
  },
  {
    "en": "It is said that",
    "es": "Se dice que",
    "c": 4
  },
  {
    "en": "It is strange that",
    "es": "Es extraño que",
    "c": 4
  },
  {
    "en": "It is time that",
    "es": "Es hora de que",
    "c": 4
  },
  {
    "en": "It is true that",
    "es": "Es cierto que",
    "c": 4
  },
  {
    "en": "It seems to me that",
    "es": "Me parece que",
    "c": 4
  },
  {
    "en": "It so happens that",
    "es": "Resulta que",
    "c": 4
  },
  {
    "en": "It turns out that",
    "es": "Resulta que",
    "c": 4
  },
  {
    "en": "It's only fair",
    "es": "Es justo",
    "c": 4
  },
  {
    "en": "Meanwhile",
    "es": "Mientras tanto",
    "c": 4
  },
  {
    "en": "Now that",
    "es": "Ahora que",
    "c": 4
  },
  {
    "en": "On a second thought",
    "es": "Pensándolo bien",
    "c": 4
  },
  {
    "en": "On the contrary",
    "es": "Por el contrario",
    "c": 4
  },
  {
    "en": "On the whole",
    "es": "En general",
    "c": 4
  },
  {
    "en": "On top of that",
    "es": "Además de eso",
    "c": 4
  },
  {
    "en": "Otherwise",
    "es": "De lo contrario",
    "c": 4
  },
  {
    "en": "Previously",
    "es": "Anteriormente, previamente",
    "c": 4
  },
  {
    "en": "Provided that",
    "es": "Siempre que",
    "c": 4
  },
  {
    "en": "Since",
    "es": "Desde, ya que",
    "c": 4
  },
  {
    "en": "Step by step",
    "es": "Paso a paso",
    "c": 4
  },
  {
    "en": "That is to say",
    "es": "Es decir",
    "c": 4
  },
  {
    "en": "The main feature",
    "es": "La característica principal",
    "c": 4
  },
  {
    "en": "The usual thing is that",
    "es": "Lo habitual es que",
    "c": 4
  },
  {
    "en": "The way I see it",
    "es": "Como yo lo veo",
    "c": 4
  },
  {
    "en": "There is no objection to",
    "es": "No hay objeción a",
    "c": 4
  },
  {
    "en": "To put it in another way",
    "es": "En otras palabras / Para decirlo con otras palabras",
    "c": 4
  },
  {
    "en": "To sum up",
    "es": "Para resumir",
    "c": 4
  },
  {
    "en": "Until then",
    "es": "Hasta entonces",
    "c": 4
  },
  {
    "en": "We can conclude that",
    "es": "Podemos concluir que",
    "c": 4
  },
  {
    "en": "We have just seen that",
    "es": "Acabamos de ver que",
    "c": 4
  },
  {
    "en": "Whatsoever",
    "es": "En absoluto",
    "c": 4
  },
  {
    "en": "At long last",
    "es": "¡Por fin!",
    "c": 4
  },
  {
    "en": "At most",
    "es": "A lo sumo",
    "c": 4
  },
  {
    "en": "For its part",
    "es": "A su vez",
    "c": 4
  },
  {
    "en": "At last",
    "es": "Al fin",
    "c": 4
  },
  {
    "en": "At least",
    "es": "Al menos",
    "c": 4
  },
  {
    "en": "At the start / At the outset",
    "es": "Al principio",
    "c": 4
  },
  {
    "en": "Apart from that",
    "es": "Aparte de eso",
    "c": 4
  },
  {
    "en": "It's early days yet but…",
    "es": "Aún es pronto para decirlo, pero…",
    "c": 4
  },
  {
    "en": "As I have shown",
    "es": "Como he mostrado",
    "c": 4
  },
  {
    "en": "As a result",
    "es": "Como resultado",
    "c": 4
  },
  {
    "en": "At length",
    "es": "Con detenimiento",
    "c": 4
  },
  {
    "en": "Consequently",
    "es": "Consecuentemente",
    "c": 4
  },
  {
    "en": "Somehow",
    "es": "De algun modo",
    "c": 4
  },
  {
    "en": "On balance",
    "es": "En conjunto",
    "c": 4
  },
  {
    "en": "In contrast",
    "es": "En contraste",
    "c": 4
  },
  {
    "en": "At once",
    "es": "En el acto",
    "c": 4
  },
  {
    "en": "At heart",
    "es": "En el fondo",
    "c": 4
  },
  {
    "en": "As early as",
    "es": "En fecha tan temprana como",
    "c": 4
  },
  {
    "en": "In another word",
    "es": "En otras palabras",
    "c": 4
  },
  {
    "en": "First, firstly",
    "es": "En primer lugar",
    "c": 4
  },
  {
    "en": "In principle",
    "es": "En principio",
    "c": 4
  },
  {
    "en": "Briefly",
    "es": "En resumen",
    "c": 4
  },
  {
    "en": "Second, secondly",
    "es": "En segundo lugar",
    "c": 4
  },
  {
    "en": "To a certain extent",
    "es": "Hasta cierto punto",
    "c": 4
  },
  {
    "en": "As far as we can recall",
    "es": "Hasta donde alcanza la memoria",
    "c": 4
  },
  {
    "en": "For example / For instance",
    "es": "Por ejemplo",
    "c": 4
  },
  {
    "en": "As far as I am concerned",
    "es": "Por lo que a mí respecta",
    "c": 4
  },
  {
    "en": "On the other hand",
    "es": "Por otro lado",
    "c": 4
  },
  {
    "en": "And on top of that",
    "es": "Por si fuera poco",
    "c": 4
  },
  {
    "en": "On the one hand",
    "es": "Por un lado",
    "c": 4
  },
  {
    "en": "All in all",
    "es": "Resumiendo",
    "c": 4
  },
  {
    "en": "According to…",
    "es": "Según …",
    "c": 4
  },
  {
    "en": "However / Nevertheless",
    "es": "Sin embargo",
    "c": 4
  },
  {
    "en": "Above all",
    "es": "Sobre todo",
    "c": 4
  },
  {
    "en": "Providing that",
    "es": "Suponiendo que",
    "c": 4
  },
  {
    "en": "As soon as",
    "es": "Tan pronto como",
    "c": 4
  },
  {
    "en": "As late as in",
    "es": "Tan tarde como en",
    "c": 4
  },
  {
    "en": "Sin embargo",
    "es": "Nevertheless",
    "c": 4
  },
  {
    "en": "En conjunto",
    "es": "Altogether, on the whole",
    "c": 4
  },
  {
    "en": "With",
    "es": "Con",
    "c": 4
  },
  {
    "en": "Asumiendo que",
    "es": "Assuming that",
    "c": 4
  },
  {
    "en": "(Present / Past / Participle) - ABASE / ABASED / ABASED",
    "es": "Humillar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABASH / ABASHED / ABASHED",
    "es": "Avergonzar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABANDON / ABANDONED / ABANDONED",
    "es": "Abandonar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABBREVIATE / ABBREVIATED / ABBREVIATED",
    "es": "Abreviar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABDICATE / ABDICATED / ABDICATED",
    "es": "Abdicar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABOLISH / ABOLISHED / ABOLISHED",
    "es": "Abolir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABRADE / ABRADED / ABRADED",
    "es": "Raspar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABHOR / ABHORED / ABHORED",
    "es": "Aborrecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABORT / ABORTED / ABORTED",
    "es": "Abortar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABOMINATE / ABOMINATED / ABOMINATED",
    "es": "Aborrecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABOUND / ABOUNDED / ABOUNDED",
    "es": "Abundar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABSOLVE / ABSOLVED / ABSOLVED",
    "es": "Absolver",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABSORB / ABSORBED / ABSORBED",
    "es": "Absorber",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABSTAIN / ABSTAINED / ABSTAINED",
    "es": "Abstenerse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABUSE / ABUSED / ABUSED",
    "es": "Abusar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACCEPT / ACCEPTED / ACCEPTED",
    "es": "Aceptar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACCLAIM / ACCLAIMED / ACCLAIMED",
    "es": "Aclamar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACCLIMATIZE / ACCLIMATIZED / ACCLIMATIZED",
    "es": "Aclimatarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACCOMPANY / ACCOMPANIED / ACCOMPANIED",
    "es": "Acompañar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACCUMULATE / ACCUMULATED / ACCUMULATED",
    "es": "Acumular",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACCUSE / ACCUSED / ACCUSED",
    "es": "Acusar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACQUAINT / ACQUAINTED / ACQUAINTED",
    "es": "Familiarizarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACT / ACTED / ACTED",
    "es": "Actuar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ACTIVATE / ACTIVATED / ACTIVATED",
    "es": "Activar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADAPT / ADAPTED / ADAPTED",
    "es": "Adaptar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADD / ADDED / ADDED",
    "es": "Sumar, añadir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADDRESS / ADDRESSED / ADDRESSED",
    "es": "Dirigir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADJUST / ADJUSTED / ADJUSTED",
    "es": "Ajustar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADMINISTER / ADMINISTERED / ADMINISTERED",
    "es": "Administrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADMIRE / ADMIRED / ADMIRED",
    "es": "Admirar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADMIT / ADMITTED / ADMITTED",
    "es": "Admitir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADOPT / ADOPTED / ADOPTED",
    "es": "Adoptar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADORE / ADORED / ADORED",
    "es": "Adorar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADORN / ADORNED / ADORNED",
    "es": "Adornar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADULATE / ADULATED / ADULATED",
    "es": "Adular",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADULTERATE / ADULTERATED / ADULTERATED",
    "es": "Adulterar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADVERTISE / ADVERTISED / ADVERTISED",
    "es": "Anunciar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ADVISE / ADVISED / ADVISED",
    "es": "Aconsejar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AFFECT / AFFECTED / AFFECTED",
    "es": "Afectar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AFFORD / AFFORDED / AFFORDED",
    "es": "Costear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AGGRAVATE / AGGRAVATED / AGGRAVATED",
    "es": "Agravar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AGREE / AGREED / AGREED",
    "es": "Acordar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AIM / AIMED / AIMED",
    "es": "Apuntar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ALARM / ALARMED / ALARMED",
    "es": "Alarmar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ALLOW / ALLOWED / ALLOWED",
    "es": "Permitir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ALLOY / ALLOYED / ALLOYED",
    "es": "Mezclar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ALLUDE / ALLUDED / ALLUDED",
    "es": "Aludir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ALTER / ALTERED / ALTERED",
    "es": "Alterar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ALTERNATE / ALTERNATED / ALTERNATED",
    "es": "Alternar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AMORTIZE / AMORTIZED / AMORTIZED",
    "es": "Amortizar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AMPUTATE / AMPUTATED / AMPUTATED",
    "es": "Amputar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AMUSE / AMUSED / AMUSED",
    "es": "Entretener",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ANALYSE / ANALYSED / ANALYSED",
    "es": "Analizar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ANIMATE / ANIMATED / ANIMATED",
    "es": "Animar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ANNOUNCE / ANNOUNCED / ANNOUNCED",
    "es": "Anunciar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ANNOY / ANNOYED / ANNOYED",
    "es": "Fastidiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ANSWER / ANSWERED / ANSWERED",
    "es": "Contestar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ANTICIPATE / ANTICIPATED / ANTICIPATED",
    "es": "Anticipar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APOLOGIZE / APOLOGIZED / APOLOGIZED",
    "es": "Disculparse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPALL / APPALLED / APPALLED",
    "es": "Aterrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPEAL / APPEALED / APPEALED",
    "es": "Apelar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPEAR / APPEARED / APPEARED",
    "es": "Aparecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPLAUD / APPLAUDED / APPLAUDED",
    "es": "Aplaudir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPLY / APPLIED / APPLIED",
    "es": "Aplicar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPRECIATE / APPRECIATED / APPRECIATED",
    "es": "Agradecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPROACH / APPROACHED / APPROACHED",
    "es": "Acercarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - APPROVE / APPROVED / APPROVED",
    "es": "Aprobar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ARGUE / ARGUED / ARGUED",
    "es": "Discutir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ARM / ARMED / ARMED",
    "es": "Armarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ARRANGE / ARRANGED / ARRANGED",
    "es": "Arreglar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ARREST / ARRESTED / ARRESTED",
    "es": "Arrestar/Detener",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ARTICULATE / ARTICULATED / ARTICULATED",
    "es": "Articular",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASCEND / ASCENDED / ASCENDED",
    "es": "Ascender",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASCRIBE / ASCRIBED / ASCRIBED",
    "es": "Atribuir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASK / ASKED / ASKED",
    "es": "Preguntar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASPIRE / ASPIRED / ASPIRED",
    "es": "Aspirar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASSAULT / ASSAULTED / ASSAULTED",
    "es": "Asaltar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASSIST / ASSISTED / ASSISTED",
    "es": "Asistir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASSOCIATE / ASSOCIATED / ASSOCIATED",
    "es": "Asociar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASSUME / ASSUMED / ASSUMED",
    "es": "Asumir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASSURE / ASSURED / ASSURED",
    "es": "Asegurar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ASTONISH / ASTONISHED / ASTONISHED",
    "es": "Asombrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ATTACH / ATTACHED / ATTACHED",
    "es": "Pegar/Adherir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ATTACK / ATTACKED / ATTACKED",
    "es": "Atacar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ATTEMPT / ATTEMPTED / ATTEMPTED",
    "es": "Intentar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ATTRACT / ATTRACTED / ATTRACTED",
    "es": "Atraer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ATTRIBUTE / ATTRIBUTED / ATTRIBUTED",
    "es": "Atribuir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AVOID / AVOIDED / AVOIDED",
    "es": "Evitar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AWAIT / AWAITED / AWAITED",
    "es": "Esperar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AWARD / AWARDED / AWARDED",
    "es": "Premiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ABIDE / ABODE/ABIDED / ABODE",
    "es": "Soportar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ARISE / AROSE / ARISEN",
    "es": "Levantarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - AWAKE / AWOKE / AWOKEN",
    "es": "Despertar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BAKE / BAKED / BAKED",
    "es": "Hornear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BALANCE / BALANCED / BALANCED",
    "es": "Nivelar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BANDAGE / BANDAGED / BANDAGED",
    "es": "Vendar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BANISH / BANISHED / BANISHED",
    "es": "Ahuyentar/Desterrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BAPTIZE / BAPTIZED / BAPTIZED",
    "es": "Bautizar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BARGAIN / BARGAINED / BARGAINED",
    "es": "Regatear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BATTLE / BATTLED / BATTLED",
    "es": "Batallar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BATTER / BATTERED / BATTERED",
    "es": "Golpear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEG / BEGGED / BEGGED",
    "es": "Rogar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEHAVE / BEHAVED / BEHAVED",
    "es": "Comportarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEHEAD / BEHEADED / BEHEADED",
    "es": "Decapitar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BELONG / BELONGED / BELONGED",
    "es": "Pertenecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BIKE / BIKED / BIKED",
    "es": "Montar bici",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BILK / BILKED / BILKED",
    "es": "Estafar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BILL / BILLED / BILLED",
    "es": "Facturar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLAME / BLAMED / BLAMED",
    "es": "Culpar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLAST / BLASTED / BLASTED",
    "es": "Explotar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLEACH / BLEACHED / BLEACHED",
    "es": "Blanquear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLEND / BLENDED / BLENDED",
    "es": "Mezclar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLESS / BLESSED / BLESSED",
    "es": "Bendecir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLIND / BLINDED / BLINDED",
    "es": "Cegar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLINK / BLINKED / BLINKED",
    "es": "Parpadear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLOCK / BLOCKED / BLOCKED",
    "es": "Bloquear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLOOM / BLOOMED / BLOOMED",
    "es": "Florecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLOT / BLOTTED / BLOTTED",
    "es": "Manchar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BOARD / BOARDED / BOARDED",
    "es": "Embarcar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BORROW / BORROWED / BORROWED",
    "es": "Pedir prestado",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BOTHER / BOTHERED / BOTHERED",
    "es": "Molestar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BOTTLE / BOTTLED / BOTTLED",
    "es": "Embotellar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BOUNCE / BOUNCED / BOUNCED",
    "es": "Rebotar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BRACE / BRACED / BRACED",
    "es": "Reforzar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BRAKE / BRAKED / BRAKED",
    "es": "Frenar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BRIBE / BRIBED / BRIBED",
    "es": "Sobornar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BROADCAST / BROADCASTED / BROADCASTED",
    "es": "Transmitir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BRUSH / BRUSHED / BRUSHED",
    "es": "Cepillar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BURN / BURNT/BURNED / BURNT/BURNED",
    "es": "Quemar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BE / WAS/WERE / BEEN",
    "es": "Ser/Estar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEAR / BORE / BORN",
    "es": "Nacer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEAT / BEAT / BEATEN",
    "es": "Palpitar/Derrotar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BECOME / BECAME / BECOME",
    "es": "Convertirse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEGIN / BEGAN / BEGUN",
    "es": "Empezar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEHOLD / BEHELD / BEHELD",
    "es": "Contemplar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BEND / BENT / BENT",
    "es": "Doblar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BESEECH / BESOUGHT / BESOUGHT",
    "es": "Suplicar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BET / BET / BET",
    "es": "Apostar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BIND / BOUND / BOUND",
    "es": "Atar/Amarrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BITE / BIT / BITTEN",
    "es": "Morder/Picar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLEED / BLED / BLED",
    "es": "Sangrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BLOW / BLEW / BLOWN",
    "es": "Soplar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BREAK / BROKE / BROKEN",
    "es": "Quebrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BREED / BRED / BRED",
    "es": "Criar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BRING / BROUGHT / BROUGHT",
    "es": "Traer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BUILD / BUILT / BUILT",
    "es": "Construir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BURST / BURST / BURST",
    "es": "Estallar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - BUY / BOUGHT / BOUGHT",
    "es": "Comprar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CALL / CALLED / CALLED",
    "es": "Llamar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CALM / CALMED / CALMED",
    "es": "Calmar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CAMP / CAMPED / CAMPED",
    "es": "Acampar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CANCEL / CANCELED / CANCELED",
    "es": "Cancelar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CARRY / CARRIED / CARRIED",
    "es": "Cargar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CASH / CASHED / CASHED",
    "es": "Hacer efectivo",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CELEBRATE / CELEBRATED / CELEBRATED",
    "es": "Celebrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHAIN / CHAINED / CHAINED",
    "es": "Encadenar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHANGE / CHANGED / CHANGED",
    "es": "Cambiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHARGE / CHARGED / CHARGED",
    "es": "Cargar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHASE / CHASED / CHASED",
    "es": "Perseguir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHEAT / CHEATED / CHEATED",
    "es": "Hacer trampa",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHECK / CHECKED / CHECKED",
    "es": "Chequear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHOP / CHOPPED / CHOPPED",
    "es": "Tajar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CLAIM / CLAIMED / CLAIMED",
    "es": "Reclamar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CLAP / CLAPPED / CLAPPED",
    "es": "Aplaudir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CLEAN / CLEANED / CLEANED",
    "es": "Limpiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CLIMB / CLIMBED / CLIMBED",
    "es": "Trepar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CLOSE / CLOSED / CLOSED",
    "es": "Cerrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COMBINE / COMBINED / COMBINED",
    "es": "Combinar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COMPARE / COMPARED / COMPARED",
    "es": "Comparar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COMPLAIN / COMPLAINED / COMPLAINED",
    "es": "Quejarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONCENTRATE / CONCENTRATED / CONCENTRATED",
    "es": "Concentrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONCLUDE / CONCLUDED / CONCLUDED",
    "es": "Concluir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONFIRM / CONFIRMED / CONFIRMED",
    "es": "Confirmar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONNECT / CONNECTED / CONNECTED",
    "es": "Conectar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONSIDER / CONSIDERED / CONSIDERED",
    "es": "Considerar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONSTRUCT / CONSTRUCTED / CONSTRUCTED",
    "es": "Construir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONSUME / CONSUMED / CONSUMED",
    "es": "Consumir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONTACT / CONTACTED / CONTACTED",
    "es": "Contactar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONTINUE / CONTINUED / CONTINUED",
    "es": "Continuar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONTROL / CONTROLLED / CONTROLLED",
    "es": "Controlar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CONVINCE / CONVINCED / CONVINCED",
    "es": "Convencer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COOK / COOKED / COOKED",
    "es": "Cocinar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COPY / COPIED / COPIED",
    "es": "Copiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COUNT / COUNTED / COUNTED",
    "es": "Contar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CRASH / CRASHED / CRASHED",
    "es": "Estrellarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CRY / CRIED / CRIED",
    "es": "Llorar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CURE / CURED / CURED",
    "es": "Curar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CATCH / CAUGHT / CAUGHT",
    "es": "Atajar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CHOOSE / CHOSE / CHOSEN",
    "es": "Escoger",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CLING / CLUNG / CLUNG",
    "es": "Trepar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COME / CAME / COME",
    "es": "Venir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - COST / COST / COST",
    "es": "Costar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CREEP / CREPT / CREPT",
    "es": "Gatear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - CUT / CUT / CUT",
    "es": "Cortar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DAMAGE / DAMAGED / DAMAGED",
    "es": "Dañar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DANCE / DANCED / DANCED",
    "es": "Bailar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DATE / DATED / DATED",
    "es": "Fechar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEBATE / DEBATED / DEBATED",
    "es": "Debatir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DECIDE / DECIDED / DECIDED",
    "es": "Decidir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DECREASE / DECREASED / DECREASED",
    "es": "Disminuir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEDICATE / DEDICATED / DEDICATED",
    "es": "Dedicar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEFEAT / DEFEATED / DEFEATED",
    "es": "Derrotar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DELETE / DELETED / DELETED",
    "es": "Tachar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DELIVER / DELIVERED / DELIVERED",
    "es": "Repartir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEMOLISH / DEMOLISHED / DEMOLISHED",
    "es": "Demoler",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEPEND / DEPENDED / DEPENDED",
    "es": "Depender",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEPORT / DEPORTED / DEPORTED",
    "es": "Deportar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DESCRIBE / DESCRIBED / DESCRIBED",
    "es": "Describir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DESIGN / DESIGNED / DESIGNED",
    "es": "Diseñar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DESTROY / DESTROYED / DESTROYED",
    "es": "Destruir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DETECT / DETECTED / DETECTED",
    "es": "Detectar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEVELOP / DEVELOPED / DEVELOPED",
    "es": "Revelar/Desarrollar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DIE / DIED / DIED",
    "es": "Morir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DISAGREE / DISAGREED / DISAGREED",
    "es": "Estar en desacuerdo",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DISAPPEAR / DISAPPEARED / DISAPPEARED",
    "es": "Desaparecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DISTRIBUTE / DISTRIBUTED / DISTRIBUTED",
    "es": "Distribuir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DIVIDE / DIVIDED / DIVIDED",
    "es": "Dividir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DRAG / DRAGGED / DRAGGED",
    "es": "Dragar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DROWN / DROWNED / DROWNED",
    "es": "Ahogar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DRY / DRIED / DRIED",
    "es": "Secar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DYE / DYED / DYED",
    "es": "Teñir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DEAL / DEALT / DEALT",
    "es": "Negociar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DIG / DUG / DUG",
    "es": "Excavar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DO / DID / DONE",
    "es": "Hacer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DRAW / DREW / DRAWN",
    "es": "Dibujar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DREAM / DREAMT/DREAMED / DREAMT/DREAMED",
    "es": "Soñar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DRINK / DRANK / DRUNK",
    "es": "Beber",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DRIVE / DROVE / DRIVEN",
    "es": "Manejar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - DWELL / DWELT / DWELT",
    "es": "Residir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EARN / EARNED / EARNED",
    "es": "Ganar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EJECT / EJECTED / EJECTED",
    "es": "Expulsar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ELEVATE / ELEVATED / ELEVATED",
    "es": "Elevar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EMBARK / EMBARKED / EMBARKED",
    "es": "Embarcar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EMPLOY / EMPLOYED / EMPLOYED",
    "es": "Emplear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - END / ENDED / ENDED",
    "es": "Finalizar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ENCOURAGE / ENCOURAGED / ENCOURAGED",
    "es": "Animar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ERASE / ERASED / ERASED",
    "es": "Borrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ESTABLISH / ESTABLISHED / ESTABLISHED",
    "es": "Establecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EVALUATE / EVALUATED / EVALUATED",
    "es": "Evaluar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EXAMINE / EXAMINED / EXAMINED",
    "es": "Examinar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EXERCISE / EXERCISED / EXERCISED",
    "es": "Ejercitar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EXPAND / EXPANDED / EXPANDED",
    "es": "Expanderse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EXPORT / EXPORTED / EXPORTED",
    "es": "Exportar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - EAT / ATE / EATEN",
    "es": "Comer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FACE / FACED / FACED",
    "es": "Enfrentar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FAIL / FAILED / FAILED",
    "es": "Fallar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FAINT / FAINTED / FAINTED",
    "es": "Desmayarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FILE / FILED / FILED",
    "es": "Archivar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FILL / FILLED / FILLED",
    "es": "Llenar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FILM / FILMED / FILMED",
    "es": "Filmar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FINISH / FINISHED / FINISHED",
    "es": "Finalizar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FISH / FISHED / FISHED",
    "es": "Pescar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FIX / FIXED / FIXED",
    "es": "Fijar/Reparar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FLOAT / FLOATED / FLOATED",
    "es": "Flotar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FLOOD / FLOODED / FLOODED",
    "es": "Inundar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FOLLOW / FOLLOWED / FOLLOWED",
    "es": "Seguir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FREE / FREED / FREED",
    "es": "Liberar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FRY / FRIED / FRIED",
    "es": "Freír",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FRUSTRATE / FRUSTRATED / FRUSTRATED",
    "es": "Frustrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FALL / FELL / FALLEN",
    "es": "Caer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FEED / FED / FED",
    "es": "Alimentar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FEEL / FELT / FELT",
    "es": "Sentir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FIGHT / FOUGHT / FOUGHT",
    "es": "Pelear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FIND / FOUND / FOUND",
    "es": "Encontrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FLEE / FLED / FLED",
    "es": "Huir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FLY / FLEW / FLOWN",
    "es": "Volar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FORBID / FORBADE / FORBIDDEN",
    "es": "Prohibir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FORGET / FORGOT / FORGOTTEN",
    "es": "Olvidar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FORGIVE / FORGAVE / FORGIVEN",
    "es": "Perdonar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - FREEZE / FROZE / FROZEN",
    "es": "Congelar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GAIN / GAINED / GAINED",
    "es": "Ganar peso",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GATHER / GATHERED / GATHERED",
    "es": "Reunirse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GENERATE / GENERATED / GENERATED",
    "es": "Generar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GLANCE / GLANCED / GLANCED",
    "es": "Echar un vistazo",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GLIDE / GLIDED / GLIDED",
    "es": "Deslizarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GLUE / GLUED / GLUED",
    "es": "Pegar/Encolar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GOSSIP / GOSSIPED / GOSSIPED",
    "es": "Charlar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GRAB / GRABBED / GRABBED",
    "es": "Agarrar/Arrebatar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GREET / GREETED / GREETED",
    "es": "Saludar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GRILL / GRILLED / GRILLED",
    "es": "Asar a la parrilla",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GUARANTEE / GUARANTEED / GUARANTEED",
    "es": "Garantizar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GUESS / GUESSED / GUESSED",
    "es": "Adivinar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GET / GOT / GOT/GOTTEN",
    "es": "Obtener",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GIVE / GAVE / GIVEN",
    "es": "Dar/Entregar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GO / WENT / GONE",
    "es": "Ir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - GROW / GREW / GROWN",
    "es": "Crecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HALT / HALTED / HALTED",
    "es": "Detener/Parar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HAMMER / HAMMERED / HAMMERED",
    "es": "Martillar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HANDLE / HANDLED / HANDLED",
    "es": "Manipular",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HAPPEN / HAPPENED / HAPPENED",
    "es": "Suceder/Pasar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HELP / HELPED / HELPED",
    "es": "Ayudar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HESITATE / HESITATED / HESITATED",
    "es": "Titubear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HIRE / HIRED / HIRED",
    "es": "Contratar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HUG / HUGGED / HUGGED",
    "es": "Abrazar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HANG / HUNG/HANGED / HUNG/HANGED",
    "es": "Colgar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HAVE / HAD / HAD",
    "es": "Tener/Haber",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HEAR / HEARD / HEARD",
    "es": "Oír",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HIDE / HID / HIDDEN",
    "es": "Ocultar/Esconder",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HIT / HIT / HIT",
    "es": "Golpear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HOLD / HELD / HELD",
    "es": "Aguantar/Tener",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - HURT / HURT / HURT",
    "es": "Herir/Perjudicar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ILLUMINATE / ILLUMINATED / ILLUMINATED",
    "es": "Iluminar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - IMAGINE / IMAGINED / IMAGINED",
    "es": "Imaginar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - IMITATE / IMITATED / IMITATED",
    "es": "Imitar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - IMPORT / IMPORTED / IMPORTED",
    "es": "Importar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INDICATE / INDICATED / INDICATED",
    "es": "Indicar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INFECT / INFECTED / INFECTED",
    "es": "Infectar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INFORM / INFORMED / INFORMED",
    "es": "Informar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INSPECT / INSPECTED / INSPECTED",
    "es": "Inspeccionar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INSPIRE / INSPIRED / INSPIRED",
    "es": "Inspirar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INSTALL / INSTALLED / INSTALLED",
    "es": "Instalar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INTERRUPT / INTERRUPTED / INTERRUPTED",
    "es": "Interrumpir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INTERVIEW / INTERVIEWED / INTERVIEWED",
    "es": "Entrevistar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INTIMIDATE / INTIMIDATED / INTIMIDATED",
    "es": "Intimidar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INVADE / INVADED / INVADED",
    "es": "Invadir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INVENT / INVENTED / INVENTED",
    "es": "Inventar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INVEST / INVESTED / INVESTED",
    "es": "Invertir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - INVITE / INVITED / INVITED",
    "es": "Invitar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - IRON / IRONED / IRONED",
    "es": "Planchar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - JAIL / JAILED / JAILED",
    "es": "Encarcelar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - JOKE / JOKED / JOKED",
    "es": "Bromear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - JUMP / JUMPED / JUMPED",
    "es": "Saltar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KICK / KICKED / KICKED",
    "es": "Patear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KIDNAP / KIDNAPPED / KIDNAPPED",
    "es": "Secuestrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KILL / KILLED / KILLED",
    "es": "Matar/Aniquilar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KISS / KISSED / KISSED",
    "es": "Besar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KNOCK / KNOCKED / KNOCKED",
    "es": "Tocar/llamar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KEEP / KEPT / KEPT",
    "es": "Mantener/Dejar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KNEEL / KNELT / KNELT",
    "es": "Arrodillarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - KNOW / KNEW / KNOWN",
    "es": "Saber/Conocer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LACK / LACKED / LACKED",
    "es": "Carecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LAUGH / LAUGHED / LAUGHED",
    "es": "Reír",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LAUNCH / LAUNCHED / LAUNCHED",
    "es": "Lanzar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LEARN / LEARNED / LEARNED",
    "es": "Aprender",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LEASE / LEASED / LEASED",
    "es": "Arrendar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LIFT / LIFTED / LIFTED",
    "es": "Levantar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LIKE / LIKED / LIKED",
    "es": "Querer/Gustar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LISTEN / LISTENED / LISTENED",
    "es": "Oír/Escuchar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LIVE / LIVED / LIVED",
    "es": "Vivir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LOAD / LOADED / LOADED",
    "es": "Cargar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LOCK / LOCKED / LOCKED",
    "es": "Cerrar con llave",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LOOK / LOOKED / LOOKED",
    "es": "Mirar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LOVE / LOVED / LOVED",
    "es": "Amar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LAY / LAID / LAID",
    "es": "Posar/Dejar algo",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LEAD / LED / LED",
    "es": "Dirigir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LEAVE / LEFT / LEFT",
    "es": "Salir/Dejar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LEND / LENT / LENT",
    "es": "Prestar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LET / LET / LET",
    "es": "Permitir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - LOSE / LOST / LOST",
    "es": "Perder",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MAIL / MAILED / MAILED",
    "es": "Enviar por correo",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MAINTAIN / MAINTAINED / MAINTAINED",
    "es": "Mantener",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MANAGE / MANAGED / MANAGED",
    "es": "Dirigir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MARK / MARKED / MARKED",
    "es": "Marcar/Señalar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MARRY / MARRIED / MARRIED",
    "es": "Casarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MEASURE / MEASURED / MEASURED",
    "es": "Medir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MEND / MENDED / MENDED",
    "es": "Remendar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MENTION / MENTIONED / MENTIONED",
    "es": "Mencionar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MIX / MIXED / MIXED",
    "es": "Mezclar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MOTIVATE / MOTIVATED / MOTIVATED",
    "es": "Motivar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MOVE / MOVED / MOVED",
    "es": "Mover",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MURDER / MURDERED / MURDERED",
    "es": "Asesinar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MAKE / MADE / MADE",
    "es": "Hacer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MEAN / MEANT / MEANT",
    "es": "Significar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MEET / MET / MET",
    "es": "Conocer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - MISTAKE / MISTOOK / MISTAKEN",
    "es": "Errar/Equivocar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - NAIL / NAILED / NAILED",
    "es": "Clavar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - NAME / NAMED / NAMED",
    "es": "Nombrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - NEED / NEEDED / NEEDED",
    "es": "Necesitar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - NEGOTIATE / NEGOTIATED / NEGOTIATED",
    "es": "Negociar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - OBEY / OBEYED / OBEYED",
    "es": "Obedecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - OBSERVE / OBSERVED / OBSERVED",
    "es": "Observar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - OFFER / OFFERED / OFFERED",
    "es": "Ofrecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ORDER / ORDERED / ORDERED",
    "es": "Ordenar/Pedir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - OWN / OWNED / OWNED",
    "es": "Poseer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PACK / PACKED / PACKED",
    "es": "Empacar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PAINT / PAINTED / PAINTED",
    "es": "Pintar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PARK / PARKED / PARKED",
    "es": "Estacionar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PAUSE / PAUSED / PAUSED",
    "es": "Pausar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PERFORM / PERFORMED / PERFORMED",
    "es": "Realizar/Actuar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PERSUADE / PERSUADED / PERSUADED",
    "es": "Persuadir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PHONE / PHONED / PHONED",
    "es": "Llamar por teléfono",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PICK / PICKED / PICKED",
    "es": "Escoger",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PLACE / PLACED / PLACED",
    "es": "Colocar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PLAN / PLANNED / PLANNED",
    "es": "Planear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PLANT / PLANTED / PLANTED",
    "es": "Plantar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PLAY / PLAYED / PLAYED",
    "es": "Jugar/Tocar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PLEASE / PLEASED / PLEASED",
    "es": "Complacer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - POLLUTE / POLLUTED / POLLUTED",
    "es": "Contaminar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - POUR / POURED / POURED",
    "es": "Vertir/Echar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PRAISE / PRAISED / PRAISED",
    "es": "Elogiar/Alabar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PRAY / PRAYED / PRAYED",
    "es": "Rezar/Suplicar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PREDICT / PREDICTED / PREDICTED",
    "es": "Predecir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PREFER / PREFERRED / PREFERRED",
    "es": "Preferir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PREPARE / PREPARED / PREPARED",
    "es": "Preparar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PRESS / PRESSED / PRESSED",
    "es": "Apretar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PREVENT / PREVENTED / PREVENTED",
    "es": "Prevenir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PRODUCE / PRODUCED / PRODUCED",
    "es": "Producir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PROHIBIT / PROHIBITED / PROHIBITED",
    "es": "Prohibir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PROMISE / PROMISED / PROMISED",
    "es": "Prometer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PROTECT / PROTECTED / PROTECTED",
    "es": "Proteger",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PROVE / PROVED / PROVED",
    "es": "Comprobar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PROVIDE / PROVIDED / PROVIDED",
    "es": "Suministrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PULL / PULLED / PULLED",
    "es": "Halar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PUMP / PUMPED / PUMPED",
    "es": "Bombear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PUNCH / PUNCHED / PUNCHED",
    "es": "Dar puñetazos",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PUSH / PUSHED / PUSHED",
    "es": "Empujar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PAY / PAID / PAID",
    "es": "Pagar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - PUT / PUT / PUT",
    "es": "Poner",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - QUALIFY / QUALIFIED / QUALIFIED",
    "es": "Calificar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - QUESTION / QUESTIONED / QUESTIONED",
    "es": "Interrogar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - QUOTE / QUOTED / QUOTED",
    "es": "Citar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - QUIT / QUIT / QUIT",
    "es": "Desistir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RAIN / RAINED / RAINED",
    "es": "Llover",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RAISE / RAISED / RAISED",
    "es": "Levantar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REACH / REACHED / REACHED",
    "es": "Alcanzar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REALIZE / REALIZED / REALIZED",
    "es": "Darse cuenta de",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RECALL / RECALLED / RECALLED",
    "es": "Recordar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RECOGNIZE / RECOGNIZED / RECOGNIZED",
    "es": "Reconocer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RECOMMEND / RECOMMENDED / RECOMMENDED",
    "es": "Recomendar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RECORD / RECORDED / RECORDED",
    "es": "Grabar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RECOVER / RECOVERED / RECOVERED",
    "es": "Recobrarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RECYCLE / RECYCLED / RECYCLED",
    "es": "Reciclar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REDUCE / REDUCED / REDUCED",
    "es": "Reducir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REFORM / REFORMED / REFORMED",
    "es": "Reformar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REFUSE / REFUSED / REFUSED",
    "es": "Rehusar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REGISTER / REGISTERED / REGISTERED",
    "es": "Inscribirse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REJECT / REJECTED / REJECTED",
    "es": "Rehusar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RELAX / RELAXED / RELAXED",
    "es": "Relajarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RELEASE / RELEASED / RELEASED",
    "es": "Soltar/Liberar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REMEMBER / REMEMBERED / REMEMBERED",
    "es": "Recordar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RENAME / RENAMED / RENAMED",
    "es": "Renombrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RENEW / RENEWED / RENEWED",
    "es": "Renovar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RENT / RENTED / RENTED",
    "es": "Alquilar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REPAIR / REPAIRED / REPAIRED",
    "es": "Reparar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REPEAT / REPEATED / REPEATED",
    "es": "Repetir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REPLACE / REPLACED / REPLACED",
    "es": "Reemplazar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REPORT / REPORTED / REPORTED",
    "es": "Reportar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REST / RESTED / RESTED",
    "es": "Descansar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RETURN / RETURNED / RETURNED",
    "es": "Regresar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REVEAL / REVEALED / REVEALED",
    "es": "Revelar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - REVIEW / REVIEWED / REVIEWED",
    "es": "Revisar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ROLL / ROLLED / ROLLED",
    "es": "Rodar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RULE / RULED / RULED",
    "es": "Gobernar/Mandar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RUSH / RUSHED / RUSHED",
    "es": "Apresurarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - READ / READ / READ",
    "es": "Leer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RIDE / RODE / RIDDEN",
    "es": "Montar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RING / RANG / RUNG",
    "es": "Timbrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RISE / ROSE / RISEN",
    "es": "Levantar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - RUN / RAN / RUN",
    "es": "Correr",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SAVE / SAVED / SAVED",
    "es": "Salvar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SCAN / SCANNED / SCANNED",
    "es": "Explorar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SCREAM / SCREAMED / SCREAMED",
    "es": "Gritar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SEAL / SEALED / SEALED",
    "es": "Sellar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SELECT / SELECTED / SELECTED",
    "es": "Seleccionar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SEPARATE / SEPARATED / SEPARATED",
    "es": "Separar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SERVE / SERVED / SERVED",
    "es": "Servir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SHARE / SHARED / SHARED",
    "es": "Compartir/Partir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SHOUT / SHOUTED / SHOUTED",
    "es": "Gritar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SIGN / SIGNED / SIGNED",
    "es": "Firmar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SKATE / SKATED / SKATED",
    "es": "Patinar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SKI / SKIED / SKIED",
    "es": "Esquiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SLAM / SLAMMED / SLAMMED",
    "es": "Tirar/Golpear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SLIP / SLIPPED / SLIPPED",
    "es": "Resbalar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SMILE / SMILED / SMILED",
    "es": "Sonreír",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SOLVE / SOLVED / SOLVED",
    "es": "Resolver",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SPRAY / SPRAYED / SPRAYED",
    "es": "Rociar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - START / STARTED / STARTED",
    "es": "Empezar/Comenzar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STAY / STAYED / STAYED",
    "es": "Quedarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STOP / STOPPED / STOPPED",
    "es": "Parar/Detener",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STUDY / STUDIED / STUDIED",
    "es": "Estudiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SUBSCRIBE / SUBSCRIBED / SUBSCRIBED",
    "es": "Suscribir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SUCCEED / SUCCEEDED / SUCCEEDED",
    "es": "Tener éxito",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SUFFER / SUFFERED / SUFFERED",
    "es": "Sufrir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SUGGEST / SUGGESTED / SUGGESTED",
    "es": "Sugerir/Proponer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SUPPORT / SUPPORTED / SUPPORTED",
    "es": "Apoyar/Sostener",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SURPRISE / SURPRISED / SURPRISED",
    "es": "Sorprender",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SURRENDER / SURRENDERED / SURRENDERED",
    "es": "Rendirse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SURROUND / SURROUNDED / SURROUNDED",
    "es": "Rodear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SURVIVE / SURVIVED / SURVIVED",
    "es": "Sobrevivir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SWALLOW / SWALLOWED / SWALLOWED",
    "es": "Tragar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SAY / SAID / SAID",
    "es": "Decir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SEE / SAW / SEEN",
    "es": "Ver",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SEEK / SOUGHT / SOUGHT",
    "es": "Buscar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SELL / SOLD / SOLD",
    "es": "Vender",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SEND / SENT / SENT",
    "es": "Enviar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SET / SET / SET",
    "es": "Colocar/Poner",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SHAKE / SHOOK / SHAKEN",
    "es": "Batir/Sacudir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SHOOT / SHOT / SHOT",
    "es": "Disparar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SHOW / SHOWED / SHOWN",
    "es": "Presentar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SHUT / SHUT / SHUT",
    "es": "Cerrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SING / SANG / SUNG",
    "es": "Cantar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SINK / SANK / SUNK",
    "es": "Hundir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SIT / SAT / SAT",
    "es": "Sentarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SLEEP / SLEPT / SLEPT",
    "es": "Dormir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SPEAK / SPOKE / SPOKEN",
    "es": "Hablar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SPEND / SPENT / SPENT",
    "es": "Gastar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SPLIT / SPLIT / SPLIT",
    "es": "Separar/Partir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SPREAD / SPREAD / SPREAD",
    "es": "Regar/Extender",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SPRING / SPRANG / SPRUNG",
    "es": "Brincar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STAND / STOOD / STOOD",
    "es": "Pararse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STEAL / STOLE / STOLEN",
    "es": "Robar/Hurtar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STICK / STUCK / STUCK",
    "es": "Pegar/Adherir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STING / STUNG / STUNG",
    "es": "Pinchar/Picar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - STRIKE / STRUCK / STRUCK",
    "es": "Golpear/Pegar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SWEAR / SWORE / SWORN",
    "es": "Jurar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SWEEP / SWEPT / SWEPT",
    "es": "Barrer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SWIM / SWAM / SWUM",
    "es": "Nadar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - SWING / SWUNG / SWUNG",
    "es": "Balancear/Mecer",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TAG / TAGGED / TAGGED",
    "es": "Etiquetar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TALK / TALKED / TALKED",
    "es": "Hablar/Conversar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TAME / TAMED / TAMED",
    "es": "Domar/Domesticar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TEST / TESTED / TESTED",
    "es": "Poner a prueba",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TIE / TIED / TIED",
    "es": "Atar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TIP / TIPPED / TIPPED",
    "es": "Dar propina",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TOAST / TOASTED / TOASTED",
    "es": "Brindar/Tostar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TORTURE / TORTURED / TORTURED",
    "es": "Torturar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TRACE / TRACED / TRACED",
    "es": "Seguir el rastro",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TRANSFER / TRANSFERRED / TRANSFERRED",
    "es": "Transferir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TRANSLATE / TRANSLATED / TRANSLATED",
    "es": "Traducir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TRAVEL / TRAVELLED / TRAVELLED",
    "es": "Viajar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TRICK / TRICKED / TRICKED",
    "es": "Engañar/Burlarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TRUST / TRUSTED / TRUSTED",
    "es": "Confiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TRY / TRIED / TRIED",
    "es": "Tratar/Intentar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TURN / TURNED / TURNED",
    "es": "Girar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TYPE / TYPED / TYPED",
    "es": "Tipiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TAKE / TOOK / TAKEN",
    "es": "Tomar/Agarrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TEACH / TAUGHT / TAUGHT",
    "es": "Enseñar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TEAR / TORE / TORN",
    "es": "Romper/Rasgar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TELL / TOLD / TOLD",
    "es": "Contar/Decir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - THINK / THOUGHT / THOUGHT",
    "es": "Pensar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - THROW / THREW / THROWN",
    "es": "Lanzar/Tirar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - TREAD / TROD / TRODDEN",
    "es": "Pisar/Pisotear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - UNITE / UNITED / UNITED",
    "es": "Unir/Juntar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - USE / USED / USED",
    "es": "Usar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - UNDERSTAND / UNDERSTOOD / UNDERSTOOD",
    "es": "Entender",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - UNDERTAKE / UNDERTOOK / UNDERTAKEN",
    "es": "Comprometerse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - UNDO / UNDID / UNDONE",
    "es": "Desatar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - VACCINATE / VACCINATED / VACCINATED",
    "es": "Vacunar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - VALUE / VALUED / VALUED",
    "es": "Valorar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - VANISH / VANISHED / VANISHED",
    "es": "Esfumarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - VARY / VARIED / VARIED",
    "es": "Variar/Cambiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - VIBRATE / VIBRATED / VIBRATED",
    "es": "Vibrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - VIOLATE / VIOLATED / VIOLATED",
    "es": "Violar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WAIT / WAITED / WAITED",
    "es": "Esperar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WALK / WALKED / WALKED",
    "es": "Caminar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WANT / WANTED / WANTED",
    "es": "Querer/Desear",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WARN / WARNED / WARNED",
    "es": "Prevenir/Avisar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WASH / WASHED / WASHED",
    "es": "Lavar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WATCH / WATCHED / WATCHED",
    "es": "Observar/Mirar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WELCOME / WELCOMED / WELCOMED",
    "es": "Dar la bienvenida",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WHISPER / WHISPERED / WHISPERED",
    "es": "Susurrar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WHISTLE / WHISTLED / WHISTLED",
    "es": "Silbar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WISH / WISHED / WISHED",
    "es": "Desear/Anhelar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WONDER / WONDERED / WONDERED",
    "es": "Sentir curiosidad",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WORK / WORKED / WORKED",
    "es": "Trabajar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WORRY / WORRIED / WORRIED",
    "es": "Preocuparse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WRAP / WRAPPED / WRAPPED",
    "es": "Envolver/Enrollar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WAKE / WOKE / WOKEN",
    "es": "Levantarse",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WEAR / WORE / WORN",
    "es": "Usar ropa/Desgastar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WEEP / WEPT / WEPT",
    "es": "Llorar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WIN / WON / WON",
    "es": "Ganar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WIND / WOUND / WOUND",
    "es": "Enrollar/Ovillar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WITHDRAW / WITHDREW / WITHDRAWN",
    "es": "Sacar dinero",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - WRITE / WROTE / WRITTEN",
    "es": "Escribir",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - X-RAY / X-RAYED / X-RAYED",
    "es": "Radiografiar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - YELL / YELLED / YELLED",
    "es": "Gritar",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - YIELD / YIELDED / YIELDED",
    "es": "Ceder el paso",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ZIP / ZIPPED / ZIPPED",
    "es": "Cerrar con cierre",
    "c": 2
  },
  {
    "en": "(Present / Past / Participle) - ZOOM / ZOOMED / ZOOMED",
    "es": "Zumbar/Dispararse",
    "c": 2
  },
  {
    "en": "Accessibility",
    "es": "Accesibilidad",
    "c": 4
  },
  {
    "en": "Accessible",
    "es": "Accesible, alcanzable",
    "c": 4
  },
  {
    "en": "Accessory",
    "es": "Accesorio, ítem extra",
    "c": 4
  },
  {
    "en": "Accompany",
    "es": "Acompañar",
    "c": 4
  },
  {
    "en": "Addition",
    "es": "Suma, incorporación",
    "c": 4
  },
  {
    "en": "Additional",
    "es": "Adicional",
    "c": 4
  },
  {
    "en": "Additionally",
    "es": "Adicionalmente",
    "c": 4
  },
  {
    "en": "Additive",
    "es": "Aditivo",
    "c": 4
  },
  {
    "en": "Benefactor",
    "es": "Benefactor",
    "c": 4
  },
  {
    "en": "Beneficial",
    "es": "Beneficioso",
    "c": 4
  },
  {
    "en": "Beneficiary",
    "es": "Beneficiario",
    "c": 4
  },
  {
    "en": "Benefit",
    "es": "Beneficio",
    "c": 4
  },
  {
    "en": "Choosy",
    "es": "Exigente, quisquilloso",
    "c": 4
  },
  {
    "en": "Commitment",
    "es": "Compromiso, internamiento",
    "c": 4
  },
  {
    "en": "Committee",
    "es": "Comité",
    "c": 4
  },
  {
    "en": "Companion",
    "es": "Compañero",
    "c": 4
  },
  {
    "en": "Comparable",
    "es": "Comparable",
    "c": 4
  },
  {
    "en": "Comparably",
    "es": "Similarmente, análogamente",
    "c": 4
  },
  {
    "en": "Comparatively",
    "es": "Comparativamente",
    "c": 4
  },
  {
    "en": "Compare",
    "es": "Comparar",
    "c": 4
  },
  {
    "en": "Comparison",
    "es": "Comparación",
    "c": 4
  },
  {
    "en": "Consider",
    "es": "Considerar",
    "c": 4
  },
  {
    "en": "Considerable",
    "es": "Considerable",
    "c": 4
  },
  {
    "en": "Considerably",
    "es": "Considerablemente",
    "c": 4
  },
  {
    "en": "Considerate",
    "es": "Considerado",
    "c": 4
  },
  {
    "en": "Consideration",
    "es": "Consideración",
    "c": 4
  },
  {
    "en": "Creatively",
    "es": "Creativamente",
    "c": 4
  },
  {
    "en": "Creativity",
    "es": "Creatividad",
    "c": 4
  },
  {
    "en": "Creature",
    "es": "Criatura",
    "c": 4
  },
  {
    "en": "Depend",
    "es": "Depender",
    "c": 4
  },
  {
    "en": "Dependability",
    "es": "Fiabilidad, confiabilidad",
    "c": 4
  },
  {
    "en": "Dependency",
    "es": "Dependencia",
    "c": 4
  },
  {
    "en": "Develop",
    "es": "Desarrollar",
    "c": 4
  },
  {
    "en": "Developer",
    "es": "Desarrollador",
    "c": 4
  },
  {
    "en": "Discover",
    "es": "Descubrir",
    "c": 4
  },
  {
    "en": "Discovery",
    "es": "Descubrimiento",
    "c": 4
  },
  {
    "en": "Doubt",
    "es": "Duda",
    "c": 4
  },
  {
    "en": "Doubter",
    "es": "Escéptico, incrédulo",
    "c": 4
  },
  {
    "en": "Doubtful",
    "es": "Dudoso, indeciso",
    "c": 4
  },
  {
    "en": "Doubtfully",
    "es": "Sin convicción, dudosamente",
    "c": 4
  },
  {
    "en": "Doubtless",
    "es": "Seguro, indudable, sin duda",
    "c": 4
  },
  {
    "en": "Dramatic",
    "es": "Dramático",
    "c": 4
  },
  {
    "en": "Dramatically",
    "es": "Dramáticamente",
    "c": 4
  },
  {
    "en": "Effective",
    "es": "Efectivo",
    "c": 4
  },
  {
    "en": "Effectively",
    "es": "Efectivamente",
    "c": 4
  },
  {
    "en": "Effectiveness",
    "es": "Efectividad",
    "c": 4
  },
  {
    "en": "Enthuse",
    "es": "Entusiasmar",
    "c": 4
  },
  {
    "en": "Enthusiasm",
    "es": "Entusiasmo",
    "c": 4
  },
  {
    "en": "Enthusiast",
    "es": "Entusiasta",
    "c": 4
  },
  {
    "en": "Enthusiastic",
    "es": "Entusiasta, entusiasmado",
    "c": 4
  },
  {
    "en": "Essence",
    "es": "Esencia, lo principal",
    "c": 4
  },
  {
    "en": "Essentially",
    "es": "Esencialmente",
    "c": 4
  },
  {
    "en": "Estimate",
    "es": "Estimar",
    "c": 4
  },
  {
    "en": "Estimation",
    "es": "Estimación",
    "c": 4
  },
  {
    "en": "Expectancy / Expectation",
    "es": "Expectativa, expectación",
    "c": 4
  },
  {
    "en": "Expectant",
    "es": "Expectante",
    "c": 4
  },
  {
    "en": "Expertise",
    "es": "Experiencia, pericia",
    "c": 4
  },
  {
    "en": "Expertly",
    "es": "Con destreza",
    "c": 4
  },
  {
    "en": "Historian",
    "es": "Historiador",
    "c": 4
  },
  {
    "en": "Historically",
    "es": "Históricamente",
    "c": 4
  },
  {
    "en": "Imaginable",
    "es": "Imaginable",
    "c": 4
  },
  {
    "en": "Imaginary",
    "es": "Imaginario",
    "c": 4
  },
  {
    "en": "Imaginative",
    "es": "Imaginativo",
    "c": 4
  },
  {
    "en": "Impress",
    "es": "Impresionar",
    "c": 4
  },
  {
    "en": "Impression",
    "es": "Impresión",
    "c": 4
  },
  {
    "en": "Impressively",
    "es": "Impresionantemente",
    "c": 4
  },
  {
    "en": "Incomparable",
    "es": "Incomparable",
    "c": 4
  },
  {
    "en": "Increasingly",
    "es": "Cada vez más, incrementalmente",
    "c": 4
  },
  {
    "en": "Ineffective",
    "es": "Inefectivo",
    "c": 4
  },
  {
    "en": "Insignificant",
    "es": "Insignificante",
    "c": 4
  },
  {
    "en": "Knowledgeable",
    "es": "Culto, conocedor, versado, leído",
    "c": 4
  },
  {
    "en": "Known",
    "es": "Conocido",
    "c": 4
  },
  {
    "en": "Likelihood",
    "es": "Probabilidad",
    "c": 4
  },
  {
    "en": "Likewise",
    "es": "Igualmente, del mismo modo",
    "c": 4
  },
  {
    "en": "Meaning",
    "es": "Significado, importancia",
    "c": 4
  },
  {
    "en": "Meaningful",
    "es": "Significativo",
    "c": 4
  },
  {
    "en": "Origen",
    "es": "Origen",
    "c": 4
  },
  {
    "en": "Originally",
    "es": "Originalmente",
    "c": 4
  },
  {
    "en": "Originated",
    "es": "Originado",
    "c": 4
  },
  {
    "en": "Pleasantly",
    "es": "Agradablemente",
    "c": 4
  },
  {
    "en": "Pleasing",
    "es": "Agradable, gratificante",
    "c": 4
  },
  {
    "en": "Practical",
    "es": "Práctico",
    "c": 4
  },
  {
    "en": "Practically",
    "es": "Prácticamente",
    "c": 4
  },
  {
    "en": "Recognisable",
    "es": "Reconocible",
    "c": 4
  },
  {
    "en": "Recognise",
    "es": "Reconocer",
    "c": 4
  },
  {
    "en": "Recognition",
    "es": "Reconocimiento, comprensión",
    "c": 4
  },
  {
    "en": "Rely",
    "es": "Depender, confiar",
    "c": 4
  },
  {
    "en": "Requisite",
    "es": "Requisito",
    "c": 4
  },
  {
    "en": "Significance",
    "es": "Significado, importancia",
    "c": 4
  },
  {
    "en": "Significant",
    "es": "Significativo",
    "c": 4
  },
  {
    "en": "Signify",
    "es": "Significar, significarse",
    "c": 4
  },
  {
    "en": "Standard",
    "es": "Estándar, referencia",
    "c": 4
  },
  {
    "en": "Standardisation",
    "es": "Estandarización",
    "c": 4
  },
  {
    "en": "Standardise",
    "es": "Estandarizar",
    "c": 4
  },
  {
    "en": "Surprisingly",
    "es": "Sorprendentemente",
    "c": 4
  },
  {
    "en": "To Access",
    "es": "Acceder",
    "c": 4
  },
  {
    "en": "To Choose",
    "es": "Elegir",
    "c": 4
  },
  {
    "en": "To Create",
    "es": "Crear",
    "c": 4
  },
  {
    "en": "To Enable",
    "es": "Habilitar",
    "c": 4
  },
  {
    "en": "To Imagine",
    "es": "Imaginar",
    "c": 4
  },
  {
    "en": "To mean",
    "es": "Significar, querer decir, hablar en serio",
    "c": 4
  },
  {
    "en": "To See",
    "es": "Ver",
    "c": 4
  },
  {
    "en": "To Surprise",
    "es": "Sorprender",
    "c": 4
  },
  {
    "en": "Unconsidered",
    "es": "Desconsiderado",
    "c": 4
  },
  {
    "en": "Underestimate",
    "es": "Subestimar",
    "c": 4
  },
  {
    "en": "Undeveloped",
    "es": "Retrasado, subdesarrollado",
    "c": 4
  },
  {
    "en": "Undiscovered",
    "es": "Desconocido, sin descubrir",
    "c": 4
  },
  {
    "en": "Undoubtedly",
    "es": "Indudablemente",
    "c": 4
  },
  {
    "en": "Unessential",
    "es": "Superfluo, no esencial",
    "c": 4
  },
  {
    "en": "Unexpectedly",
    "es": "Inesperadamente",
    "c": 4
  },
  {
    "en": "Unimaginable",
    "es": "Inimaginable",
    "c": 4
  },
  {
    "en": "Unimpressed",
    "es": "No impresionado",
    "c": 4
  },
  {
    "en": "Unlike",
    "es": "A diferencia de",
    "c": 4
  },
  {
    "en": "Unpleasing",
    "es": "Desagradable",
    "c": 4
  },
  {
    "en": "Unrecognisable",
    "es": "Irreconocible",
    "c": 4
  },
  {
    "en": "Unreliable",
    "es": "Poco fiable",
    "c": 4
  },
  {
    "en": "Unvaried",
    "es": "Invariable (sin variedad)",
    "c": 4
  },
  {
    "en": "Unvarying",
    "es": "Invariable (consistente)",
    "c": 4
  },
  {
    "en": "Variable",
    "es": "Variable",
    "c": 4
  },
  {
    "en": "Variation",
    "es": "Variación",
    "c": 4
  },
  {
    "en": "Varied",
    "es": "Variado",
    "c": 4
  },
  {
    "en": "abandon",
    "es": "abandonar",
    "c": 4
  },
  {
    "en": "abdicate",
    "es": "abdicar",
    "c": 4
  },
  {
    "en": "abound",
    "es": "abundar",
    "c": 4
  },
  {
    "en": "abrupt",
    "es": "abrupto",
    "c": 4
  },
  {
    "en": "absolute",
    "es": "absoluto",
    "c": 4
  },
  {
    "en": "absorb",
    "es": "absorber",
    "c": 4
  },
  {
    "en": "abundance",
    "es": "abundancia",
    "c": 4
  },
  {
    "en": "abundant",
    "es": "abundante",
    "c": 4
  },
  {
    "en": "abuse (n)",
    "es": "abuso",
    "c": 4
  },
  {
    "en": "abuse (v)",
    "es": "abusar",
    "c": 4
  },
  {
    "en": "academy",
    "es": "academia",
    "c": 4
  },
  {
    "en": "accelerate",
    "es": "acelerar",
    "c": 4
  },
  {
    "en": "accent",
    "es": "acento",
    "c": 4
  },
  {
    "en": "accentuate",
    "es": "acentuar",
    "c": 4
  },
  {
    "en": "access",
    "es": "acceso",
    "c": 4
  },
  {
    "en": "accord (n)",
    "es": "acuerdo",
    "c": 4
  },
  {
    "en": "accuse",
    "es": "acusar",
    "c": 4
  },
  {
    "en": "acquire",
    "es": "adquirir",
    "c": 4
  },
  {
    "en": "acrobatic",
    "es": "acrobático",
    "c": 4
  },
  {
    "en": "active",
    "es": "activo",
    "c": 4
  },
  {
    "en": "activities",
    "es": "actividades",
    "c": 4
  },
  {
    "en": "actuary",
    "es": "actuario",
    "c": 4
  },
  {
    "en": "adapt",
    "es": "adaptar",
    "c": 4
  },
  {
    "en": "adhere",
    "es": "adherir",
    "c": 4
  },
  {
    "en": "adherent",
    "es": "adherente",
    "c": 4
  },
  {
    "en": "adjust",
    "es": "ajustar",
    "c": 4
  },
  {
    "en": "administrate",
    "es": "administrar",
    "c": 4
  },
  {
    "en": "admire",
    "es": "admirar",
    "c": 4
  },
  {
    "en": "admit",
    "es": "admitir",
    "c": 4
  },
  {
    "en": "adolescence",
    "es": "adolescencia",
    "c": 4
  },
  {
    "en": "adopt",
    "es": "adoptar",
    "c": 4
  },
  {
    "en": "adore",
    "es": "adorar",
    "c": 4
  },
  {
    "en": "African",
    "es": "africano",
    "c": 4
  },
  {
    "en": "agent",
    "es": "agente",
    "c": 4
  },
  {
    "en": "alarm",
    "es": "alarma",
    "c": 4
  },
  {
    "en": "allergic",
    "es": "alérgico",
    "c": 4
  },
  {
    "en": "altar",
    "es": "altar",
    "c": 4
  },
  {
    "en": "angular",
    "es": "angular",
    "c": 4
  },
  {
    "en": "announce",
    "es": "anunciar",
    "c": 4
  },
  {
    "en": "antioxidant",
    "es": "antioxidante",
    "c": 4
  },
  {
    "en": "appear",
    "es": "aparecer",
    "c": 4
  },
  {
    "en": "appetite",
    "es": "apetito",
    "c": 4
  },
  {
    "en": "arrogance",
    "es": "arrogancia",
    "c": 4
  },
  {
    "en": "arrogant",
    "es": "arrogante",
    "c": 4
  },
  {
    "en": "aspirant",
    "es": "aspirante",
    "c": 4
  },
  {
    "en": "assailant",
    "es": "asaltante",
    "c": 4
  },
  {
    "en": "assistance",
    "es": "asistencia",
    "c": 4
  },
  {
    "en": "associate (v)",
    "es": "asociar",
    "c": 4
  },
  {
    "en": "association",
    "es": "asociación",
    "c": 4
  },
  {
    "en": "athlete",
    "es": "atleta",
    "c": 4
  },
  {
    "en": "atmosphere",
    "es": "atmósfera",
    "c": 4
  },
  {
    "en": "atrocity",
    "es": "atrocidad",
    "c": 4
  },
  {
    "en": "attack (n)",
    "es": "ataque",
    "c": 4
  },
  {
    "en": "attack (v)",
    "es": "atacar",
    "c": 4
  },
  {
    "en": "attention",
    "es": "atención",
    "c": 4
  },
  {
    "en": "attentive",
    "es": "atento",
    "c": 4
  },
  {
    "en": "audacious",
    "es": "audaz",
    "c": 4
  },
  {
    "en": "augment",
    "es": "aumentar",
    "c": 4
  },
  {
    "en": "August",
    "es": "agosto",
    "c": 4
  },
  {
    "en": "autograph",
    "es": "autógrafo",
    "c": 4
  },
  {
    "en": "automobile",
    "es": "automóvil",
    "c": 4
  },
  {
    "en": "balance (n)",
    "es": "balance",
    "c": 4
  },
  {
    "en": "balance (v)",
    "es": "balancear",
    "c": 4
  },
  {
    "en": "bandit",
    "es": "bandido",
    "c": 4
  },
  {
    "en": "banker",
    "es": "banquero",
    "c": 4
  },
  {
    "en": "barber",
    "es": "barbero",
    "c": 4
  },
  {
    "en": "bat",
    "es": "bate",
    "c": 4
  },
  {
    "en": "battle",
    "es": "batalla",
    "c": 4
  },
  {
    "en": "biography",
    "es": "biografía",
    "c": 4
  },
  {
    "en": "cabin",
    "es": "cabina",
    "c": 4
  },
  {
    "en": "cable",
    "es": "cable",
    "c": 4
  },
  {
    "en": "cafeteria",
    "es": "cafetería",
    "c": 4
  },
  {
    "en": "calculate",
    "es": "calcular",
    "c": 4
  },
  {
    "en": "calendar",
    "es": "calendario",
    "c": 4
  },
  {
    "en": "calm (v)",
    "es": "calmar",
    "c": 4
  },
  {
    "en": "camouflage",
    "es": "camuflaje",
    "c": 4
  },
  {
    "en": "canary",
    "es": "canario",
    "c": 4
  },
  {
    "en": "candidate",
    "es": "candidato",
    "c": 4
  },
  {
    "en": "capacity",
    "es": "capacidad",
    "c": 4
  },
  {
    "en": "capital",
    "es": "capital",
    "c": 4
  },
  {
    "en": "captain",
    "es": "capitán",
    "c": 4
  },
  {
    "en": "capture",
    "es": "capturar",
    "c": 4
  },
  {
    "en": "catastrophe",
    "es": "catástrofe",
    "c": 4
  },
  {
    "en": "cause",
    "es": "causa",
    "c": 4
  },
  {
    "en": "celebrate",
    "es": "celebrar",
    "c": 4
  },
  {
    "en": "cement",
    "es": "cemento",
    "c": 4
  },
  {
    "en": "ceramic",
    "es": "cerámica",
    "c": 4
  },
  {
    "en": "ceremony",
    "es": "ceremonia",
    "c": 4
  },
  {
    "en": "chimney",
    "es": "chimenea",
    "c": 4
  },
  {
    "en": "circle",
    "es": "círculo",
    "c": 4
  },
  {
    "en": "coast",
    "es": "costa",
    "c": 4
  },
  {
    "en": "colony",
    "es": "colonia",
    "c": 4
  },
  {
    "en": "common",
    "es": "común",
    "c": 4
  },
  {
    "en": "commotion",
    "es": "conmoción",
    "c": 4
  },
  {
    "en": "complete",
    "es": "completo",
    "c": 4
  },
  {
    "en": "conflict",
    "es": "conflicto",
    "c": 4
  },
  {
    "en": "confusing",
    "es": "confuso",
    "c": 4
  },
  {
    "en": "confusion",
    "es": "confusión",
    "c": 4
  },
  {
    "en": "constellation",
    "es": "constelación",
    "c": 4
  },
  {
    "en": "construction",
    "es": "construcción",
    "c": 4
  },
  {
    "en": "contact",
    "es": "contacto",
    "c": 4
  },
  {
    "en": "contagious",
    "es": "contagioso",
    "c": 4
  },
  {
    "en": "continent",
    "es": "continente",
    "c": 4
  },
  {
    "en": "continue",
    "es": "continuar",
    "c": 4
  },
  {
    "en": "contribution",
    "es": "contribución",
    "c": 4
  },
  {
    "en": "convict",
    "es": "convicto",
    "c": 4
  },
  {
    "en": "coyote",
    "es": "coyote",
    "c": 4
  },
  {
    "en": "crocodile",
    "es": "cocodrilo",
    "c": 4
  },
  {
    "en": "curable",
    "es": "curable",
    "c": 4
  },
  {
    "en": "curious",
    "es": "curioso",
    "c": 4
  },
  {
    "en": "dance (n)",
    "es": "danza",
    "c": 4
  },
  {
    "en": "dance (v)",
    "es": "danzar",
    "c": 4
  },
  {
    "en": "debate",
    "es": "debate / debatir",
    "c": 4
  },
  {
    "en": "debilitate",
    "es": "debilitar",
    "c": 4
  },
  {
    "en": "debut",
    "es": "debut",
    "c": 4
  },
  {
    "en": "decadence",
    "es": "decadencia",
    "c": 4
  },
  {
    "en": "decent",
    "es": "decente",
    "c": 4
  },
  {
    "en": "decisive",
    "es": "decisivo",
    "c": 4
  },
  {
    "en": "declare",
    "es": "declarar",
    "c": 4
  },
  {
    "en": "decline",
    "es": "declinar",
    "c": 4
  },
  {
    "en": "decorate",
    "es": "decorar",
    "c": 4
  },
  {
    "en": "decree",
    "es": "decreto",
    "c": 4
  },
  {
    "en": "dedicate",
    "es": "dedicar",
    "c": 4
  },
  {
    "en": "defect",
    "es": "defecto",
    "c": 4
  },
  {
    "en": "defunct",
    "es": "difunto",
    "c": 4
  },
  {
    "en": "dialect",
    "es": "dialecto",
    "c": 4
  },
  {
    "en": "direct",
    "es": "directo",
    "c": 4
  },
  {
    "en": "distinct",
    "es": "distinto",
    "c": 4
  },
  {
    "en": "district",
    "es": "distrito",
    "c": 4
  },
  {
    "en": "eccentricity",
    "es": "excentricidad",
    "c": 4
  },
  {
    "en": "echo",
    "es": "eco",
    "c": 4
  },
  {
    "en": "edict",
    "es": "edicto",
    "c": 4
  },
  {
    "en": "edifice",
    "es": "edificio",
    "c": 4
  },
  {
    "en": "efficacy",
    "es": "eficacia",
    "c": 4
  },
  {
    "en": "elector",
    "es": "elector",
    "c": 4
  },
  {
    "en": "elegance",
    "es": "elegancia",
    "c": 4
  },
  {
    "en": "elegant",
    "es": "elegante",
    "c": 4
  },
  {
    "en": "element",
    "es": "elemento",
    "c": 4
  },
  {
    "en": "emigrant",
    "es": "emigrante",
    "c": 4
  },
  {
    "en": "empire",
    "es": "imperio",
    "c": 4
  },
  {
    "en": "enigma",
    "es": "enigma",
    "c": 4
  },
  {
    "en": "envy",
    "es": "envidia",
    "c": 4
  },
  {
    "en": "episode",
    "es": "episodio",
    "c": 4
  },
  {
    "en": "error",
    "es": "error",
    "c": 4
  },
  {
    "en": "establish",
    "es": "establecer",
    "c": 4
  },
  {
    "en": "eternal",
    "es": "eterno",
    "c": 4
  },
  {
    "en": "eternity",
    "es": "eternidad",
    "c": 4
  },
  {
    "en": "evacuate",
    "es": "evacuar",
    "c": 4
  },
  {
    "en": "fabricate",
    "es": "fabricar",
    "c": 4
  },
  {
    "en": "fabulous",
    "es": "fabuloso",
    "c": 4
  },
  {
    "en": "facilitate",
    "es": "facilitar",
    "c": 4
  },
  {
    "en": "factor",
    "es": "factor",
    "c": 4
  },
  {
    "en": "faculty",
    "es": "facultad",
    "c": 4
  },
  {
    "en": "fame",
    "es": "fama",
    "c": 4
  },
  {
    "en": "fascinate",
    "es": "fascinar",
    "c": 4
  },
  {
    "en": "fatality",
    "es": "fatalidad",
    "c": 4
  },
  {
    "en": "fatigue",
    "es": "fatiga",
    "c": 4
  },
  {
    "en": "favourable",
    "es": "favorable",
    "c": 4
  },
  {
    "en": "gallant",
    "es": "galante",
    "c": 4
  },
  {
    "en": "gallop",
    "es": "galope",
    "c": 4
  },
  {
    "en": "gasoline",
    "es": "gasolina",
    "c": 4
  },
  {
    "en": "general (adj.)",
    "es": "general",
    "c": 4
  },
  {
    "en": "generosity",
    "es": "generosidad",
    "c": 4
  },
  {
    "en": "germ",
    "es": "germen",
    "c": 4
  },
  {
    "en": "gesture",
    "es": "gesto",
    "c": 4
  },
  {
    "en": "giant",
    "es": "gigante",
    "c": 4
  },
  {
    "en": "glacial",
    "es": "glacial",
    "c": 4
  },
  {
    "en": "globe",
    "es": "globo",
    "c": 4
  },
  {
    "en": "glorious",
    "es": "glorioso",
    "c": 4
  },
  {
    "en": "glory",
    "es": "gloria",
    "c": 4
  },
  {
    "en": "gradual",
    "es": "gradual",
    "c": 4
  },
  {
    "en": "gratitude",
    "es": "gratitud",
    "c": 4
  },
  {
    "en": "grotesque",
    "es": "grotesco",
    "c": 4
  },
  {
    "en": "habitual",
    "es": "habitual",
    "c": 4
  },
  {
    "en": "harmonious",
    "es": "armonioso",
    "c": 4
  },
  {
    "en": "hemisphere",
    "es": "hemisferio",
    "c": 4
  },
  {
    "en": "herb",
    "es": "hierba",
    "c": 4
  },
  {
    "en": "hereditary",
    "es": "hereditario",
    "c": 4
  },
  {
    "en": "honour",
    "es": "honor",
    "c": 4
  },
  {
    "en": "horizontal",
    "es": "horizontal",
    "c": 4
  },
  {
    "en": "horrendous",
    "es": "horrendo",
    "c": 4
  },
  {
    "en": "horror",
    "es": "horror",
    "c": 4
  },
  {
    "en": "hospitality",
    "es": "hospitalidad",
    "c": 4
  },
  {
    "en": "hostile",
    "es": "hostil",
    "c": 4
  },
  {
    "en": "ideal",
    "es": "ideal",
    "c": 4
  },
  {
    "en": "idiot",
    "es": "idiota",
    "c": 4
  },
  {
    "en": "ignorant",
    "es": "ignorante",
    "c": 4
  },
  {
    "en": "illuminate",
    "es": "iluminar",
    "c": 4
  },
  {
    "en": "image",
    "es": "imagen",
    "c": 4
  },
  {
    "en": "immense",
    "es": "inmenso",
    "c": 4
  },
  {
    "en": "immortal",
    "es": "inmortal",
    "c": 4
  },
  {
    "en": "impartial",
    "es": "imparcial",
    "c": 4
  },
  {
    "en": "imperial",
    "es": "imperial",
    "c": 4
  },
  {
    "en": "jargon",
    "es": "jerga",
    "c": 4
  },
  {
    "en": "judicial",
    "es": "judicial",
    "c": 4
  },
  {
    "en": "justice",
    "es": "justicia",
    "c": 4
  },
  {
    "en": "justify",
    "es": "justificar",
    "c": 4
  },
  {
    "en": "kilogram",
    "es": "kilogramo",
    "c": 4
  },
  {
    "en": "labour (n)",
    "es": "labor",
    "c": 4
  },
  {
    "en": "labour (v)",
    "es": "laborar",
    "c": 4
  },
  {
    "en": "laborious",
    "es": "laborioso",
    "c": 4
  },
  {
    "en": "lament",
    "es": "lamentar",
    "c": 4
  },
  {
    "en": "latitude",
    "es": "latitud",
    "c": 4
  },
  {
    "en": "legal",
    "es": "legal",
    "c": 4
  },
  {
    "en": "legislator",
    "es": "legislador",
    "c": 4
  },
  {
    "en": "legumes",
    "es": "legumbres",
    "c": 4
  },
  {
    "en": "liberal",
    "es": "liberal",
    "c": 4
  },
  {
    "en": "liberty",
    "es": "libertad",
    "c": 4
  },
  {
    "en": "liquidate",
    "es": "liquidar",
    "c": 4
  },
  {
    "en": "liquor",
    "es": "licor",
    "c": 4
  },
  {
    "en": "locality",
    "es": "localidad",
    "c": 4
  },
  {
    "en": "magistrate",
    "es": "magistrado",
    "c": 4
  },
  {
    "en": "magnitude",
    "es": "magnitud",
    "c": 4
  },
  {
    "en": "majesty",
    "es": "majestad",
    "c": 4
  },
  {
    "en": "malice",
    "es": "malicia",
    "c": 4
  },
  {
    "en": "malignant",
    "es": "maligno",
    "c": 4
  },
  {
    "en": "mandate",
    "es": "mandato",
    "c": 4
  },
  {
    "en": "manual",
    "es": "manual",
    "c": 4
  },
  {
    "en": "manuscript",
    "es": "manuscrito",
    "c": 4
  },
  {
    "en": "march (v)",
    "es": "marchar",
    "c": 4
  },
  {
    "en": "margin",
    "es": "margen",
    "c": 4
  },
  {
    "en": "marine",
    "es": "marino",
    "c": 4
  },
  {
    "en": "mark (n)",
    "es": "marca",
    "c": 4
  },
  {
    "en": "mark (v)",
    "es": "marcar",
    "c": 4
  },
  {
    "en": "marvel",
    "es": "maravilla",
    "c": 4
  },
  {
    "en": "marvelous",
    "es": "marvilloso",
    "c": 4
  },
  {
    "en": "matrimony",
    "es": "matrimonio",
    "c": 4
  },
  {
    "en": "medal",
    "es": "medalla",
    "c": 4
  },
  {
    "en": "mediate",
    "es": "mediar",
    "c": 4
  },
  {
    "en": "narrate",
    "es": "narrar",
    "c": 4
  },
  {
    "en": "natal",
    "es": "natal",
    "c": 4
  },
  {
    "en": "native",
    "es": "nativo",
    "c": 4
  },
  {
    "en": "natural",
    "es": "natural",
    "c": 4
  },
  {
    "en": "naturally",
    "es": "naturalmente",
    "c": 4
  },
  {
    "en": "naval",
    "es": "naval",
    "c": 4
  },
  {
    "en": "navigable",
    "es": "navegable",
    "c": 4
  },
  {
    "en": "necessity",
    "es": "necesidad",
    "c": 4
  },
  {
    "en": "nerve",
    "es": "nervio",
    "c": 4
  },
  {
    "en": "neutral",
    "es": "neutro",
    "c": 4
  },
  {
    "en": "noble (adj)",
    "es": "noble",
    "c": 4
  },
  {
    "en": "oasis",
    "es": "oasis",
    "c": 4
  },
  {
    "en": "obedience",
    "es": "obediencia",
    "c": 4
  },
  {
    "en": "obedient",
    "es": "obediente",
    "c": 4
  },
  {
    "en": "objective",
    "es": "objetivo",
    "c": 4
  },
  {
    "en": "oblige",
    "es": "obligar",
    "c": 4
  },
  {
    "en": "obscure",
    "es": "obscuro",
    "c": 4
  },
  {
    "en": "observe",
    "es": "observar",
    "c": 4
  },
  {
    "en": "obstruct",
    "es": "obstruir",
    "c": 4
  },
  {
    "en": "obtain",
    "es": "obtener",
    "c": 4
  },
  {
    "en": "occur",
    "es": "ocurrir",
    "c": 4
  },
  {
    "en": "odious",
    "es": "odioso",
    "c": 4
  },
  {
    "en": "offend",
    "es": "offender",
    "c": 4
  },
  {
    "en": "offensive",
    "es": "ofensivo",
    "c": 4
  },
  {
    "en": "pacific",
    "es": "pacífico",
    "c": 4
  },
  {
    "en": "pact",
    "es": "pacto",
    "c": 4
  },
  {
    "en": "palm",
    "es": "palma",
    "c": 4
  },
  {
    "en": "passive",
    "es": "pasivo",
    "c": 4
  },
  {
    "en": "paste",
    "es": "pasta",
    "c": 4
  },
  {
    "en": "pastor",
    "es": "pastor",
    "c": 4
  },
  {
    "en": "paternal",
    "es": "paterno",
    "c": 4
  },
  {
    "en": "patience",
    "es": "paciencia",
    "c": 4
  },
  {
    "en": "patio",
    "es": "patio",
    "c": 4
  },
  {
    "en": "patriarch",
    "es": "patriarca",
    "c": 4
  },
  {
    "en": "race (n)",
    "es": "raza / carrera",
    "c": 4
  },
  {
    "en": "radiant",
    "es": "radiante",
    "c": 4
  },
  {
    "en": "radiator",
    "es": "radiador",
    "c": 4
  },
  {
    "en": "radical",
    "es": "radical",
    "c": 4
  },
  {
    "en": "ranch",
    "es": "rancho",
    "c": 4
  },
  {
    "en": "rapidity",
    "es": "rapidez",
    "c": 4
  },
  {
    "en": "ray",
    "es": "rayo",
    "c": 4
  },
  {
    "en": "realist",
    "es": "realista",
    "c": 4
  },
  {
    "en": "reality",
    "es": "realidad",
    "c": 4
  },
  {
    "en": "reason (v)",
    "es": "razonar",
    "c": 4
  },
  {
    "en": "rebel",
    "es": "rebelde",
    "c": 4
  },
  {
    "en": "recently",
    "es": "recientemente",
    "c": 4
  },
  {
    "en": "recite",
    "es": "recitar",
    "c": 4
  },
  {
    "en": "reference",
    "es": "referencia",
    "c": 4
  },
  {
    "en": "refine",
    "es": "refinar",
    "c": 4
  },
  {
    "en": "reflect",
    "es": "reflejar",
    "c": 4
  },
  {
    "en": "sanctity",
    "es": "santidad",
    "c": 4
  },
  {
    "en": "sane",
    "es": "sano",
    "c": 4
  },
  {
    "en": "secret (n)",
    "es": "secreto",
    "c": 4
  },
  {
    "en": "secretly",
    "es": "secretamente",
    "c": 4
  },
  {
    "en": "sect",
    "es": "secta",
    "c": 4
  },
  {
    "en": "secular",
    "es": "secular",
    "c": 4
  },
  {
    "en": "seduce",
    "es": "seducir",
    "c": 4
  },
  {
    "en": "senate",
    "es": "senado",
    "c": 4
  },
  {
    "en": "sensual",
    "es": "sensual",
    "c": 4
  },
  {
    "en": "serene",
    "es": "sereno",
    "c": 4
  },
  {
    "en": "tardy",
    "es": "tardo",
    "c": 4
  },
  {
    "en": "tariff",
    "es": "tarifa",
    "c": 4
  },
  {
    "en": "telescope",
    "es": "telescopio",
    "c": 4
  },
  {
    "en": "temple",
    "es": "templo",
    "c": 4
  },
  {
    "en": "terminate",
    "es": "terminar",
    "c": 4
  },
  {
    "en": "terrace",
    "es": "terraza",
    "c": 4
  },
  {
    "en": "theme",
    "es": "tema",
    "c": 4
  },
  {
    "en": "theology",
    "es": "teología",
    "c": 4
  },
  {
    "en": "thesis",
    "es": "tesis",
    "c": 4
  },
  {
    "en": "timidity",
    "es": "timidez",
    "c": 4
  },
  {
    "en": "tint",
    "es": "tinte",
    "c": 4
  },
  {
    "en": "tobacco",
    "es": "tabaco",
    "c": 4
  },
  {
    "en": "tolerance",
    "es": "tolerancia",
    "c": 4
  },
  {
    "en": "tone",
    "es": "tono",
    "c": 4
  },
  {
    "en": "tragedy",
    "es": "tragedia",
    "c": 4
  },
  {
    "en": "ulterior",
    "es": "ulterior",
    "c": 4
  },
  {
    "en": "ultimate",
    "es": "último",
    "c": 4
  },
  {
    "en": "united",
    "es": "unido",
    "c": 4
  },
  {
    "en": "unity",
    "es": "unidad",
    "c": 4
  },
  {
    "en": "universal",
    "es": "universal",
    "c": 4
  },
  {
    "en": "unjust",
    "es": "injusto",
    "c": 4
  },
  {
    "en": "unstable",
    "es": "instable",
    "c": 4
  },
  {
    "en": "urban",
    "es": "urbano",
    "c": 4
  },
  {
    "en": "urgency",
    "es": "urgencia",
    "c": 4
  },
  {
    "en": "use (n)",
    "es": "uso",
    "c": 4
  },
  {
    "en": "use (v)",
    "es": "usar",
    "c": 4
  },
  {
    "en": "utility",
    "es": "utilidad",
    "c": 4
  },
  {
    "en": "utilize",
    "es": "utilizar",
    "c": 4
  },
  {
    "en": "vacant",
    "es": "vacante",
    "c": 4
  },
  {
    "en": "vacation",
    "es": "vacaciones",
    "c": 4
  },
  {
    "en": "vacillate",
    "es": "vacilar",
    "c": 4
  },
  {
    "en": "vague",
    "es": "vago",
    "c": 4
  },
  {
    "en": "valor",
    "es": "valor",
    "c": 4
  },
  {
    "en": "vanity",
    "es": "vanidad",
    "c": 4
  },
  {
    "en": "vast",
    "es": "vasto",
    "c": 4
  },
  {
    "en": "vein",
    "es": "vena",
    "c": 4
  },
  {
    "en": "velocity",
    "es": "velocidad",
    "c": 4
  },
  {
    "en": "verb",
    "es": "verbo",
    "c": 4
  },
  {
    "en": "violence",
    "es": "violencia",
    "c": 4
  },
  {
    "en": "violent",
    "es": "violento",
    "c": 4
  },
  {
    "en": "virgin",
    "es": "virgen",
    "c": 4
  },
  {
    "en": "Fuming",
    "es": "Echando humo",
    "c": 4
  },
  {
    "en": "Furious",
    "es": "Furioso",
    "c": 4
  },
  {
    "en": "Livid",
    "es": "Lívido de ira",
    "c": 4
  },
  {
    "en": "Horrific",
    "es": "Espantoso",
    "c": 4
  },
  {
    "en": "Ruthless",
    "es": "Despiadado",
    "c": 4
  },
  {
    "en": "Appalling",
    "es": "Penoso, consternante",
    "c": 4
  },
  {
    "en": "Pathetic",
    "es": "Patético",
    "c": 4
  },
  {
    "en": "Dreadful",
    "es": "Espantoso",
    "c": 4
  },
  {
    "en": "Atrocious",
    "es": "Atroz",
    "c": 4
  },
  {
    "en": "Brutal",
    "es": "Brutal",
    "c": 4
  },
  {
    "en": "Fearless",
    "es": "Intrépido",
    "c": 4
  },
  {
    "en": "Spotless",
    "es": "Impoluto",
    "c": 4
  },
  {
    "en": "Freezing",
    "es": "Congelante",
    "c": 4
  },
  {
    "en": "Imperative",
    "es": "Imperativo",
    "c": 4
  },
  {
    "en": "Mind-boggling",
    "es": "Complicado",
    "c": 4
  },
  {
    "en": "Filthy",
    "es": "Mugriento",
    "c": 4
  },
  {
    "en": "Slovenly",
    "es": "Desaliñado, desarreglado",
    "c": 4
  },
  {
    "en": "Parched",
    "es": "Reseco, sediento",
    "c": 4
  },
  {
    "en": "Thrilling",
    "es": "Electrizante",
    "c": 4
  },
  {
    "en": "Phenomenal",
    "es": "Fenomenal",
    "c": 4
  },
  {
    "en": "Hilarious",
    "es": "Hilarante",
    "c": 4
  },
  {
    "en": "Brilliant",
    "es": "Brillante",
    "c": 4
  },
  {
    "en": "Tempting / alluring",
    "es": "Tentador",
    "c": 4
  },
  {
    "en": "Terrific",
    "es": "Descomunal, genial",
    "c": 4
  },
  {
    "en": "Spectacular",
    "es": "Espectacular",
    "c": 4
  },
  {
    "en": "Exquisite",
    "es": "Exquisito",
    "c": 4
  },
  {
    "en": "Leaden",
    "es": "Plomizo",
    "c": 4
  },
  {
    "en": "Thrilled",
    "es": "Entusiasmado, alborozado",
    "c": 4
  },
  {
    "en": "Boiling",
    "es": "Hirviente",
    "c": 4
  },
  {
    "en": "Sweltering",
    "es": "Sofocante",
    "c": 4
  },
  {
    "en": "Remarkable",
    "es": "Notable",
    "c": 4
  },
  {
    "en": "Clueless",
    "es": "Incapaz, no tiene ni idea",
    "c": 4
  },
  {
    "en": "Indolent",
    "es": "Indolente",
    "c": 4
  },
  {
    "en": "Captivating",
    "es": "Cautivador",
    "c": 4
  },
  {
    "en": "Enthralling",
    "es": "Hechizante",
    "c": 4
  },
  {
    "en": "Fascinating",
    "es": "Fascinante",
    "c": 4
  },
  {
    "en": "Mesmerizing",
    "es": "Hipnótico",
    "c": 4
  },
  {
    "en": "Mind-blowing",
    "es": "Alucinante",
    "c": 4
  },
  {
    "en": "Extensive",
    "es": "Extenso",
    "c": 4
  },
  {
    "en": "Slack",
    "es": "Vago",
    "c": 4
  },
  {
    "en": "Insane",
    "es": "Demente",
    "c": 4
  },
  {
    "en": "Overwhelming",
    "es": "Abrumador",
    "c": 4
  },
  {
    "en": "Adorable",
    "es": "Adorable",
    "c": 4
  },
  {
    "en": "Cute",
    "es": "Mono",
    "c": 4
  },
  {
    "en": "Charming",
    "es": "Encantador",
    "c": 4
  },
  {
    "en": "Gorgeous",
    "es": "Agraciado",
    "c": 4
  },
  {
    "en": "Battered",
    "es": "Maltrecho, decrépito",
    "c": 4
  },
  {
    "en": "Excruciating",
    "es": "Atroz, lacerante",
    "c": 4
  },
  {
    "en": "Enduring",
    "es": "Perdurable, imperecedero",
    "c": 4
  },
  {
    "en": "Delightful",
    "es": "Delicioso",
    "c": 4
  },
  {
    "en": "Plausible",
    "es": "Plausible",
    "c": 4
  },
  {
    "en": "Devastated",
    "es": "Desolado",
    "c": 4
  },
  {
    "en": "Heartbreaking",
    "es": "Que te parte el corazón",
    "c": 4
  },
  {
    "en": "Devastating",
    "es": "Devastador, desolador",
    "c": 4
  },
  {
    "en": "Petrified",
    "es": "Paralizado por el miedo",
    "c": 4
  },
  {
    "en": "Terrified",
    "es": "Aterrorizado",
    "c": 4
  },
  {
    "en": "Terrifying",
    "es": "Aterrorizante",
    "c": 4
  },
  {
    "en": "Dumbfounded",
    "es": "Perplejo, patidifuso",
    "c": 4
  },
  {
    "en": "Motionless",
    "es": "Inmóvil, inerte",
    "c": 4
  },
  {
    "en": "Bizarre",
    "es": "Estrambótico",
    "c": 4
  },
  {
    "en": "Absurd",
    "es": "Absurdo",
    "c": 4
  },
  {
    "en": "Ludicrous",
    "es": "Disparatado",
    "c": 4
  },
  {
    "en": "Soaring",
    "es": "Ascendente, desorbitado",
    "c": 4
  },
  {
    "en": "Inevitable",
    "es": "Inevitable",
    "c": 4
  },
  {
    "en": "Stunned",
    "es": "Anonadado",
    "c": 4
  },
  {
    "en": "Flabbergasted",
    "es": "Boquiabierto",
    "c": 4
  },
  {
    "en": "Astounding",
    "es": "Epatante, alucinante",
    "c": 4
  },
  {
    "en": "Scrumptious",
    "es": "Sabroso",
    "c": 4
  },
  {
    "en": "Delicious",
    "es": "Delicioso",
    "c": 4
  },
  {
    "en": "Identical",
    "es": "Idéntico",
    "c": 4
  },
  {
    "en": "Slim / gracile",
    "es": "Esbelto, grácil",
    "c": 4
  },
  {
    "en": "Colossal",
    "es": "Colosal",
    "c": 4
  },
  {
    "en": "Lethal",
    "es": "Letal",
    "c": 4
  },
  {
    "en": "Almost impossible",
    "es": "Casi imposible",
    "c": 4
  },
  {
    "en": "Almost perfect",
    "es": "Casi perfecto",
    "c": 4
  },
  {
    "en": "Outstanding",
    "es": "Sobresaliente",
    "c": 4
  },
  {
    "en": "Incredible",
    "es": "Increíble",
    "c": 4
  },
  {
    "en": "Priceless / valuable",
    "es": "Valioso, inestimable",
    "c": 4
  },
  {
    "en": "Superb",
    "es": "Estupendo",
    "c": 4
  },
  {
    "en": "Ecstatic",
    "es": "Extasiado",
    "c": 4
  },
  {
    "en": "Critical",
    "es": "Crítico",
    "c": 4
  },
  {
    "en": "Crucial",
    "es": "Crucial",
    "c": 4
  },
  {
    "en": "Vital",
    "es": "Vital",
    "c": 4
  },
  {
    "en": "Deafening",
    "es": "Ensordecedor",
    "c": 4
  },
  {
    "en": "Splendid",
    "es": "Espléndido",
    "c": 4
  },
  {
    "en": "Thunderous",
    "es": "Estruendoso",
    "c": 4
  },
  {
    "en": "Shattered",
    "es": "Hecho polvo",
    "c": 4
  },
  {
    "en": "Indispensable",
    "es": "Indispensable",
    "c": 4
  },
  {
    "en": "Soaked",
    "es": "Empapado",
    "c": 4
  },
  {
    "en": "A big shot",
    "es": "Un disparo gordo-Persona importante, pez gordo",
    "c": 3
  },
  {
    "en": "A bigwig",
    "es": "Un peluca grande-Un pez gordo",
    "c": 3
  },
  {
    "en": "A bit out of sorts",
    "es": "Un poco fuera de orden-No sentirse bien",
    "c": 3
  },
  {
    "en": "A burst of speed",
    "es": "Una explosión de velocidad-Acelerón",
    "c": 3
  },
  {
    "en": "A dark horse",
    "es": "Un caballo oscuro-Un tapado / caballo inesperado",
    "c": 3
  },
  {
    "en": "A grass widow",
    "es": "Una viuda de hierba-Mujer cuyo marido se va por largas temporadas",
    "c": 3
  },
  {
    "en": "A guinea pig",
    "es": "—-Alguien usado para experimentos / Cobayo",
    "c": 3
  },
  {
    "en": "A soft touch",
    "es": "Un toque suave-Bonachón; fácil de aprovechar",
    "c": 3
  },
  {
    "en": "All hell is going to break loose",
    "es": "Todo el infierno va a salir suelto-Se va a armar la gorda",
    "c": 3
  },
  {
    "en": "As blind as a bat",
    "es": "Tan ciego como un murciélago-Tan ciego como un topo",
    "c": 3
  },
  {
    "en": "As bold as brass",
    "es": "Tan atrevido como el latón-Con más cara que espalda",
    "c": 3
  },
  {
    "en": "As brave as a lion",
    "es": "Tan valiente como un león-Más fiero que un león",
    "c": 3
  },
  {
    "en": "As bright as a button",
    "es": "Tan brillante como un botón-Más listo que el hambre",
    "c": 3
  },
  {
    "en": "As brown as a berry",
    "es": "Tan marrón como una baya-Estar pasado de bronceado",
    "c": 3
  },
  {
    "en": "As busy as a bee",
    "es": "Tan ocupado como una abeja-Muy ocupado",
    "c": 3
  },
  {
    "en": "As changeable as the weather",
    "es": "—-Tan cambiante como el tiempo",
    "c": 3
  },
  {
    "en": "As clear as a bell",
    "es": "Tan claro como una campana-Muy claro",
    "c": 3
  },
  {
    "en": "As cool as a cucumber",
    "es": "Tan frío como un pepino-Extremadamente tranquilo",
    "c": 3
  },
  {
    "en": "As cunning as a fox",
    "es": "—-Tan inteligente como un zorro",
    "c": 3
  },
  {
    "en": "As dark/black as pitch",
    "es": "Tan negro como el alquitrán-Tan oscuro como la boca de lobo",
    "c": 3
  },
  {
    "en": "As dead as a doornail/dodo",
    "es": "Tan muerto como un clavo de la puerta-Indiscutiblemente muerto",
    "c": 3
  },
  {
    "en": "As deaf as a post",
    "es": "Tan sordo como un poste-Sordo como una tapia",
    "c": 3
  },
  {
    "en": "As different as chalk and cheese",
    "es": "Tan diferentes como tiza y queso-Completamente diferente el uno del otro",
    "c": 3
  },
  {
    "en": "As drunk as a lord",
    "es": "Tan borracho como un noble-Inmensamente borracho",
    "c": 3
  },
  {
    "en": "As dry as a bone",
    "es": "Tan seco como un hueso-Más seco que una pasa",
    "c": 3
  },
  {
    "en": "As dull as ditchwater",
    "es": "Tan soso como agua de fregar-Terriblemente aburrido",
    "c": 3
  },
  {
    "en": "As easy as pie",
    "es": "Tan fácil como una tarta-Es pan comido",
    "c": 3
  },
  {
    "en": "As fit as a fiddle",
    "es": "Tan en forma como un violín-Tan fresco como una lechuga",
    "c": 3
  },
  {
    "en": "As flat as a pancake",
    "es": "Tan plano como un crepe-Plano",
    "c": 3
  },
  {
    "en": "As fresh as a daisy",
    "es": "Tan fresco como una margarita-Tan fresco como una lechuga",
    "c": 3
  },
  {
    "en": "As gentle as a lamb",
    "es": "Tan gentil como un cordero-Más bueno que el pan",
    "c": 3
  },
  {
    "en": "As good as gold",
    "es": "Tan bueno como el oro-Tan bueno como el oro",
    "c": 3
  },
  {
    "en": "As happy as a clam",
    "es": "Tan feliz como una almeja-Contento como un niño con zapatos nuevos",
    "c": 3
  },
  {
    "en": "As hard as nails",
    "es": "—-Tan duro como clavos",
    "c": 3
  },
  {
    "en": "As heavy as lead",
    "es": "—-Tan pesado como el plomo",
    "c": 3
  },
  {
    "en": "As keen as mustard",
    "es": "Tan entusiasta como la mostaza-Estar muy ansioso, con muchas ganas",
    "c": 3
  },
  {
    "en": "As large as life",
    "es": "Tan grande como la vida-En carne y hueso",
    "c": 3
  },
  {
    "en": "As light as a feather",
    "es": "—-Tan ligero como una pluma",
    "c": 3
  },
  {
    "en": "As mad as a hatter",
    "es": "Tan loco como un sombrerero-Loco; enloquecido",
    "c": 3
  },
  {
    "en": "As old as the hills",
    "es": "Tan viejo como las colinas-Tan viejo como la pana",
    "c": 3
  },
  {
    "en": "As plain as the nose on your face",
    "es": "—-Tan obvio como la nariz de tu cara",
    "c": 3
  },
  {
    "en": "As pleased as punch",
    "es": "Tan complacido como el ponche-Estar como unas pascuas",
    "c": 3
  },
  {
    "en": "As poor as a church mouse",
    "es": "—-Tan pobre como un ratón de iglesia",
    "c": 3
  },
  {
    "en": "As pretty as a picture",
    "es": "Tan bonito como un cuadro-Muy bonito",
    "c": 3
  },
  {
    "en": "As proud as a peacock",
    "es": "—-Orgulloso como un pavo real",
    "c": 3
  },
  {
    "en": "As quick as a flash",
    "es": "—-Tan rápido como el rayo",
    "c": 3
  },
  {
    "en": "As quiet as a mouse",
    "es": "—-Tan silencioso como un ratón",
    "c": 3
  },
  {
    "en": "As red as a beetroot",
    "es": "Rojo como una remolacha-Rojo como un tomate",
    "c": 3
  },
  {
    "en": "As regular as clockwork",
    "es": "—-Tan regular como un reloj",
    "c": 3
  },
  {
    "en": "As right as rain",
    "es": "Tan correcto como la lluvia-Perfectamente bien",
    "c": 3
  },
  {
    "en": "As safe as houses",
    "es": "Tan seguro como las casas-Completamente seguro",
    "c": 3
  },
  {
    "en": "As sick as a dog",
    "es": "Tan enfermo como un perro-Echando las tripas",
    "c": 3
  },
  {
    "en": "As silent as the grave",
    "es": "—-Tan silencioso como la tumba",
    "c": 3
  },
  {
    "en": "As slippery as an eel",
    "es": "—-Tan escurridizo como una anguila",
    "c": 3
  },
  {
    "en": "As smooth as a baby's bottom",
    "es": "—-Tan suave como el culito de un niño",
    "c": 3
  },
  {
    "en": "As smooth as velvet",
    "es": "—-Suave como el terciopelo",
    "c": 3
  },
  {
    "en": "As sober as a judge",
    "es": "Tan sobrio como un juez-Estar perfectamente sobrio",
    "c": 3
  },
  {
    "en": "As soft as putty",
    "es": "Tan blando como masilla-Blando como plastilina",
    "c": 3
  },
  {
    "en": "As steady as a rock",
    "es": "Tan firme como una roca-Tan firme como una roca",
    "c": 3
  },
  {
    "en": "As stiff as a poker",
    "es": "Tan rígido como un atizador-Tan rígido como un palo",
    "c": 3
  },
  {
    "en": "As stubborn as a mule",
    "es": "—-Terco como una mula",
    "c": 3
  },
  {
    "en": "As thick as thieves",
    "es": "Tan compacto como los ladrones-Como uña y carne",
    "c": 3
  },
  {
    "en": "As thin as a rake",
    "es": "Tan delgado como un rastrillo-Estar en los huesos",
    "c": 3
  },
  {
    "en": "As tough as old boots",
    "es": "Tan recio como botas viejas-Fuerte como un roble",
    "c": 3
  },
  {
    "en": "As warm as toast",
    "es": "Tan cálido como un brindis-Muy cálido y acogedor",
    "c": 3
  },
  {
    "en": "As weak as a kitten",
    "es": "—-Débil como un gatito",
    "c": 3
  },
  {
    "en": "As wet as a drowned rat",
    "es": "—-Mojado como una rata ahogada",
    "c": 3
  },
  {
    "en": "As white as a sheet",
    "es": "Pálida como una hoja de papel-Pálido como el papel",
    "c": 3
  },
  {
    "en": "As wise as an owl",
    "es": "—-Tan sabio como un búho",
    "c": 3
  },
  {
    "en": "As drunk as a skunk",
    "es": "Tan borracho como una mofeta-Más pedo que Alfredo",
    "c": 3
  },
  {
    "en": "Lie down with dogs, wake up with fleas",
    "es": "Acuéstate con perros, levántate con pulgas",
    "c": 3
  },
  {
    "en": "Every cloud has a silver lining",
    "es": "Cada nube tiene un forro plateado",
    "c": 3
  },
  {
    "en": "You reap what you sow",
    "es": "Cosechas lo que siembras",
    "c": 3
  },
  {
    "en": "When the going gets tough, the tough get going",
    "es": "Cuando el ir se pone difícil, los duros se ponen en marcha",
    "c": 3
  },
  {
    "en": "When in Rome, do as the Romans do",
    "es": "Cuando en Roma, haz como los romanos hacen",
    "c": 3
  },
  {
    "en": "Give a man a fish, he eats for a day. Teach a man how to fish, he eats for a lifetime",
    "es": "Dale a un hombre un pez, come un día. Enseña a un hombre a pescar y come toda la vida",
    "c": 3
  },
  {
    "en": "Where there's smoke, there's fire",
    "es": "Donde hay humo, hay fuego",
    "c": 3
  },
  {
    "en": "Two wrongs don't make a right",
    "es": "Dos males no hacen un bien",
    "c": 3
  },
  {
    "en": "The early bird catches the worm",
    "es": "El ave temprana atrapa el gusano",
    "c": 3
  },
  {
    "en": "The customer is always right",
    "es": "El cliente siempre está correcto",
    "c": 3
  },
  {
    "en": "Time is money",
    "es": "El tiempo es dinero",
    "c": 3
  },
  {
    "en": "Better late than never",
    "es": "Es mejor tarde que nunca",
    "c": 3
  },
  {
    "en": "Hope for the best, but prepare for the worst",
    "es": "Espera lo mejor, pero prepárate para lo peor",
    "c": 3
  },
  {
    "en": "Out of sight, out of mind",
    "es": "Fuera de la vista, fuera de la mente",
    "c": 3
  },
  {
    "en": "Strike while the iron is hot",
    "es": "Golpea mientras el hierro está caliente",
    "c": 3
  },
  {
    "en": "Absence makes the heart grow fonder",
    "es": "La ausencia hace el corazón más entusiasta",
    "c": 3
  },
  {
    "en": "One man's trash is another man's treasure",
    "es": "La basura de un hombre es el tesoro de otro",
    "c": 3
  },
  {
    "en": "The road to hell is paved with good intentions",
    "es": "La carretera al infierno está pavimentada con buenas intenciones",
    "c": 3
  },
  {
    "en": "Good things come to those who wait",
    "es": "Las cosas buenas llegan a aquellos que esperan",
    "c": 3
  },
  {
    "en": "Familiarity breeds contempt",
    "es": "La familiaridad cría el desprecio",
    "c": 3
  },
  {
    "en": "Fortune favours the brave",
    "es": "La fortuna favorece a los valientes",
    "c": 3
  },
  {
    "en": "People who live in glass houses should not throw stones",
    "es": "La gente que vive en casas de cristal no debería arrojar piedras",
    "c": 3
  },
  {
    "en": "The grass is always greener on the other side",
    "es": "La hierba es siempre más verde al otro lado",
    "c": 3
  },
  {
    "en": "The apple doesn't fall far from the tree",
    "es": "La manzana no cae lejos del árbol",
    "c": 3
  },
  {
    "en": "Necessity is the mother of invention",
    "es": "La necesidad es la madre de la invención",
    "c": 3
  },
  {
    "en": "The pen is mightier than the sword",
    "es": "La pluma es más poderosa que la espada",
    "c": 3
  },
  {
    "en": "Practice makes perfect",
    "es": "La práctica hace perfecto",
    "c": 3
  },
  {
    "en": "Haste makes waste",
    "es": "La prisa hace desperdicio",
    "c": 3
  },
  {
    "en": "Hindsight is 20/20",
    "es": "La retrospectiva es 20 sobre 20",
    "c": 3
  },
  {
    "en": "The squeaky wheel gets the grease",
    "es": "La rueda chirriante consigue la grasa",
    "c": 3
  },
  {
    "en": "Actions speak louder than words",
    "es": "Las acciones hablan más que las palabras",
    "c": 3
  },
  {
    "en": "Great minds think alike",
    "es": "Las grandes mentes piensan parecido",
    "c": 3
  },
  {
    "en": "Slow and steady wins the race",
    "es": "Lento y continuo gana la carrera",
    "c": 3
  },
  {
    "en": "Easy come, easy go",
    "es": "Lo que fácil viene, fácil se va",
    "c": 3
  },
  {
    "en": "What goes around comes around",
    "es": "Lo que va alrededor de aquí vuelve alrededor de aquí",
    "c": 3
  },
  {
    "en": "What goes up must come down",
    "es": "Lo que sube debe bajar",
    "c": 3
  },
  {
    "en": "Beggars can't be choosers",
    "es": "Los mendigos no pueden ser escogedores",
    "c": 3
  },
  {
    "en": "Birds of a feather flock together",
    "es": "Los pájaros de una pluma forman bandada juntos",
    "c": 3
  },
  {
    "en": "Better the devil you know than the one you don't",
    "es": "Mejor el diablo que tú conoces que el que no",
    "c": 3
  },
  {
    "en": "Better safe than sorry",
    "es": "Mejor seguro que apenado",
    "c": 3
  },
  {
    "en": "Measure twice, cut once",
    "es": "Mide dos veces, corta una",
    "c": 3
  },
  {
    "en": "No man is an island",
    "es": "Ningún hombre es una isla",
    "c": 3
  },
  {
    "en": "Don't talk the talk if you can't walk the walk",
    "es": "No converses la conversación si no puedes caminar el camino",
    "c": 3
  },
  {
    "en": "Don't count your chickens before they hatch",
    "es": "No cuentes tus pollos antes de que rompan el cascarón",
    "c": 3
  },
  {
    "en": "There's no such thing as bad publicity",
    "es": "No existe algo como mala publicidad",
    "c": 3
  },
  {
    "en": "There's no such thing as a free lunch",
    "es": "No existe algo como una comida gratis",
    "c": 3
  },
  {
    "en": "There's no place like home",
    "es": "No hay ningún lugar como el hogar",
    "c": 3
  },
  {
    "en": "Don't judge a man until you have walked a mile in his shoes",
    "es": "No juzgues un hombre hasta que hayas caminado una milla en sus zapatos",
    "c": 3
  },
  {
    "en": "Don't cry over spilled milk",
    "es": "No llores por la leche derramada",
    "c": 3
  },
  {
    "en": "Don't look a gift horse in the mouth",
    "es": "No mires el diente del caballo regalado",
    "c": 3
  },
  {
    "en": "Don't bite the hand that feeds you",
    "es": "No muerdas la mano que te alimenta",
    "c": 3
  },
  {
    "en": "Don't put the cart before the horse",
    "es": "No pongas el carro delante del caballo",
    "c": 3
  },
  {
    "en": "Don't put all your eggs in one basket",
    "es": "No pongas todos tus huevos en una cesta",
    "c": 3
  },
  {
    "en": "You can't teach an old dog new tricks",
    "es": "No puedes enseñar nuevos trucos a un perro viejo",
    "c": 3
  },
  {
    "en": "You can't judge a book by its cover",
    "es": "No puedes juzgar un libro por sus tapas",
    "c": 3
  },
  {
    "en": "You can't have your cake and eat it too",
    "es": "No puedes tener tu pastel y comértelo también",
    "c": 3
  },
  {
    "en": "It's not over 'till the fat lady sings",
    "es": "No se ha acabado hasta que la señora gorda canta",
    "c": 3
  },
  {
    "en": "You can't make an omelet without breaking the eggs",
    "es": "No se puede hacer una tortilla sin romper los huevos",
    "c": 3
  },
  {
    "en": "All that glitters is not gold",
    "es": "No todo lo que reluce es oro",
    "c": 3
  },
  {
    "en": "Never put off until tomorrow what you can do today",
    "es": "Nunca dejes para mañana lo que puedas hacer hoy",
    "c": 3
  },
  {
    "en": "You can catch more flies with honey than with vinegar",
    "es": "Puedes atrapar más moscas con miel que con vinagre",
    "c": 3
  },
  {
    "en": "Rome wasn't built in a day",
    "es": "Roma no fue construida en un día",
    "c": 3
  },
  {
    "en": "If you're not part of the solution, you're part of the problem",
    "es": "Si no eres parte de la solución, eres parte del problema",
    "c": 3
  },
  {
    "en": "If it isn't broke, don't fix it",
    "es": "Si no está roto, no lo arregles",
    "c": 3
  },
  {
    "en": "If you can't beat them, join them",
    "es": "Si no puedes vencerlos, únete a ellos",
    "c": 3
  },
  {
    "en": "If you don't have anything nice to say, don't say anything at all",
    "es": "Si no tienes nada bonito que decir, no digas nada en absoluto",
    "c": 3
  },
  {
    "en": "If you snooze, you lose",
    "es": "Si te duermes, pierdes",
    "c": 3
  },
  {
    "en": "All good things come to an end",
    "es": "Todas las cosas buenas llegan a su fin",
    "c": 3
  },
  {
    "en": "All work and no play makes Jack a dull boy",
    "es": "Todo trabajo y ningún juego hacen de Jack un niño aburrido",
    "c": 3
  },
  {
    "en": "Too many cooks spoil the broth",
    "es": "Demasiados cocineros estropean el caldo",
    "c": 3
  },
  {
    "en": "A friend in need is a friend indeed",
    "es": "Un amigo en necesidad es efectivamente un amigo",
    "c": 3
  },
  {
    "en": "A rolling stone gathers no moss",
    "es": "Un canto rodado no cría musgo",
    "c": 3
  },
  {
    "en": "A penny for your thoughts",
    "es": "Un penique por tus pensamientos",
    "c": 3
  },
  {
    "en": "A broken clock is right twice a day",
    "es": "Un reloj roto está correcto dos veces al día",
    "c": 3
  },
  {
    "en": "A journey of a thousand miles begins with a single step",
    "es": "Un viaje de mil millas comienza con un solo paso",
    "c": 3
  },
  {
    "en": "A picture is worth a thousand words",
    "es": "Una imagen vale 1000 palabras",
    "c": 3
  },
  {
    "en": "A watched pot never boils",
    "es": "Una olla vigilada nunca hierve",
    "c": 3
  },
  {
    "en": "A stitch in time saves nine",
    "es": "Una puntada a tiempo ahorra nueve",
    "c": 3
  },
  {
    "en": "(Infinitivo / Past / Participle) - to be/was/were/been",
    "es": "ser, estar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bear/bore/borne/born",
    "es": "soportar, transportar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to beat/beat/beaten",
    "es": "golpear",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to become/became/become",
    "es": "convertirse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to begin/began/begun",
    "es": "empezar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bend/bent/bent",
    "es": "forzar, doblar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bite/bit/bitten",
    "es": "morder",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bleed/bled/bled",
    "es": "sangrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to blow/blew/blown",
    "es": "soplar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to break/broke/broken",
    "es": "romper, partir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bring/brought/brought",
    "es": "traer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to build/built/built",
    "es": "construir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to burn/burnt/burnt",
    "es": "quemar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to burst/burst/burst",
    "es": "estallar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to buy/bought/bought",
    "es": "comprar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bet/bet/betted/bet/betted",
    "es": "apostar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to catch/caught/caught",
    "es": "coger",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to choose/chose/chosen",
    "es": "escoger",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to cling/clung/clung",
    "es": "colgarse, asirse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to come/came/come",
    "es": "venir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to cost/cost/cost",
    "es": "costar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to creep/crept/crept",
    "es": "arrastrarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to cut/cut/cut",
    "es": "cortar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to deal/dealt/dealt",
    "es": "repartir, negociar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to dig/dug/dug",
    "es": "cavar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to do/did/done",
    "es": "hacer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to draw/drew/drawn",
    "es": "correr, dibujar, tirar, sacar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to dream/dreamt/dreamed/dreamt/dreamed",
    "es": "soñar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to drink/drank/drunk",
    "es": "beber",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to drive/drove/driven",
    "es": "conducir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to eat/ate/eaten",
    "es": "comer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to fall/fell/fallen",
    "es": "caer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to feed/fed/fed",
    "es": "alimentar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to feel/felt/felt",
    "es": "sentir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to fight/fought/fought",
    "es": "luchar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to find/found/found",
    "es": "encontrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to fly/flew/flown",
    "es": "volar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to forbid/forbade/forbidden",
    "es": "prohibir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to forgive/forgave/forgiven",
    "es": "perdonar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to freeze/froze/frozen",
    "es": "helar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to forget/forgot/forgotten",
    "es": "olvidar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to get/got/got",
    "es": "conseguir, obtener",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to give/gave/given",
    "es": "dar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to go/went/gone",
    "es": "ir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to grow/grew/grown",
    "es": "crecer, cultivar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to hang/hung/hanged/hung/hanged",
    "es": "colgar, ahorcar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to have/had/had",
    "es": "haber, tener",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to hear/heard/heard",
    "es": "oír",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to hide/hid/hidden",
    "es": "esconder",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to hit/hit/hit",
    "es": "golpear, pegar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to hold/held/held",
    "es": "sostener",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to hurt/hurt/hurt",
    "es": "herir, dañar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to keep/kept/kept",
    "es": "conservar, mantener",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to kneel/knelt/knelt",
    "es": "arrodillarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to know/knew/known",
    "es": "saber, conocer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to lay/laid/laid",
    "es": "extender, disponer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to lead/led/led",
    "es": "conducir, guiar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to lean/leant/leaned/leant/leaned",
    "es": "apoyarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to leap/leapt/leaped/leapt/leaped",
    "es": "saltar, brincar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to learn/learnt/learned/learnt/learned",
    "es": "aprender",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to leave/left/left",
    "es": "dejar, abandonar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to lend/lent/lent",
    "es": "prestar, dejar prestado",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to let/let/let",
    "es": "dejar, permitir, alquilar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to lie/lay/lain",
    "es": "echarse, tenderse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to light/lit/lighted/lit/lighted",
    "es": "encender",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to lose/lost/lost",
    "es": "perder",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to make/made/made",
    "es": "hacer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to mean/meant/meant",
    "es": "significar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to meet/met/met",
    "es": "encontrarse, reunirse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to pay/paid/paid",
    "es": "pagar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to put/put/put",
    "es": "poner",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to read/read/read",
    "es": "leer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to ride/rode/ridden",
    "es": "montar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to ring/rang/rung",
    "es": "llamar teléfono/timbre",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to rise/rose/risen",
    "es": "surgir, subir, alzarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to run/ran/run",
    "es": "correr",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to saw/sawed/sawed/sawn",
    "es": "serrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to say/said/said",
    "es": "decir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to see/saw/seen",
    "es": "ver",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to seek/sought/sought",
    "es": "buscar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sell/sold/sold",
    "es": "vender",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to send/sent/sent",
    "es": "enviar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to set/set/set",
    "es": "colocar, disponer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sew/sewed/sewed/sewn",
    "es": "coser",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shake/shook/shaken",
    "es": "agitar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shine/shone/shone",
    "es": "brillar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shoot/shot/shot",
    "es": "disparar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to show/showed/showed/shown",
    "es": "enseñar, mostrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shrink/shrank/shrunk",
    "es": "encogerse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shut/shut/shut",
    "es": "cerrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sing/sang/sung",
    "es": "cantar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sink/sank/sunk",
    "es": "hundirse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sit/sat/sat",
    "es": "sentarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sleep/slept/slept",
    "es": "dormir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to slide/slid/slid",
    "es": "deslizarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to smell/smelt/smelt",
    "es": "oler",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sow/sowed/sown",
    "es": "sembrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to speak/spoke/spoken",
    "es": "hablar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to spell/spelt/spelled/spelt/spelled",
    "es": "deletrear",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to spend/spent/spent",
    "es": "gastar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to spill/spilt/spilled/spilt/spilled",
    "es": "derramar, verter",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to spread/spread/spread",
    "es": "extender",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to stand/stood/stood",
    "es": "estar de pie",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to steal/stole/stolen",
    "es": "robar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to stick/stuck/stuck",
    "es": "pegar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sting/stung/stung",
    "es": "picar, pinchar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to strike/struck/struck",
    "es": "golpear, pegar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to swear/swore/sworn",
    "es": "jurar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sweep/swept/swept",
    "es": "barrer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to swell/swelled/swelled/swollen",
    "es": "hincharse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to swim/swam/swum",
    "es": "nadar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to swing/swung/swung",
    "es": "balancearse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to spin/spun/spun",
    "es": "girar, hilar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to take/took/taken",
    "es": "tomar, coger",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to teach/taught/taught",
    "es": "enseñar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to tear/tore/torn",
    "es": "rasgar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to tell/told/told",
    "es": "decir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to think/thought/thought",
    "es": "pensar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to throw/threw/thrown",
    "es": "arrojar, tirar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to tread/trod/trodden",
    "es": "pisar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to understand/understood/understood",
    "es": "entender",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to wake/woke/woken",
    "es": "despertar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to wear/wore/worn",
    "es": "llevar puesto",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to weep/wept/wept",
    "es": "llorar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to wet/wetted/wet/wetted/wet",
    "es": "mojar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to win/won/won",
    "es": "ganar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to wind/wound/wound",
    "es": "dar cuerda, enroscarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to write/wrote/written",
    "es": "escribir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to abide/abade/abode",
    "es": "Quedarse, permanecer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to arise/arose/arisen",
    "es": "Surgir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to awake/awoke/awaked/awoken/awaked",
    "es": "Despertarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to befall/befell/befallen",
    "es": "Suceder",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to beget/begot/begotten",
    "es": "Engendrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to behold/beheld/beheld",
    "es": "Observar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bereave/bereaved/bereaved/bereft",
    "es": "Despojar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to beseech/besought/besought",
    "es": "Rogar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bet/betted/bet/betted/bet",
    "es": "Apostar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bid/bade/bid/bidden/bid",
    "es": "Hacer una oferta",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to bind/bound/bound",
    "es": "Amarrar, encuadernar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to chide/chid/chidden",
    "es": "Reprender",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to clothe/clothed/clad/clothed/clad",
    "es": "Vestir, cubrir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to cleave/clove/cleft/cloven/cleft",
    "es": "Unirse, hendir, partir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to crow/crowed/crew/crowed",
    "es": "Cacarear",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to dare/dared/durst/dared/durst",
    "es": "Atreverse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to fling/flung/flung",
    "es": "Tirar, lanzar al aire",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to forbear/forbore/forborne",
    "es": "Contenerse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to forsake/forsook/forsaken",
    "es": "Abandonar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to gild/gilded/gilt/gilded/gilt",
    "es": "Chapar en oro, dorar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to gird/girded/girt/girded/girt",
    "es": "Ceñir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to hew/hewed/hewed/hewn",
    "es": "Tallar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to mow/mowed/mowed/mown",
    "es": "Cortar el césped, segar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to rend/rent/rent",
    "es": "Rasgar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to rid/rid/rid",
    "es": "Librarse de",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shear/sheared/shore/sheared/shore",
    "es": "Esquilar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shed/shed/shed",
    "es": "Mudar (piel)",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to shoe/shoed/shod/shoed/shod",
    "es": "Herrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to slay/slew/slain",
    "es": "Matar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sling/slung/slung",
    "es": "Arrojar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to slink/slunk/slunk",
    "es": "Escabullirse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to slit/slit/slit",
    "es": "Rajar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to smite/smote/smitten",
    "es": "Destruir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to sow/sowed/sowed/sown",
    "es": "Sembrar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to speed/speeded/sped/speeded/sped",
    "es": "Exceder de velocidad",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to spit/spat/spat",
    "es": "Escupir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to split/split/split",
    "es": "Dividir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to stink/stank/stunk/stunk",
    "es": "Apestar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to strew/strewed/strewed/stewn",
    "es": "Esparcir",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to stride/strode/stridden",
    "es": "Dar zancadas",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to string/strung/strung",
    "es": "Encordar, ensartar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to strive/strove/striven",
    "es": "Luchar, esforzarse",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to thrive/thrived/throve/thrived/thriven",
    "es": "Prosperar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to thrust/thrust/thrust",
    "es": "Empujar, impulsar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to tread/trod/trodden/trod",
    "es": "Pisar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to wake/waked/woke/waked/woken",
    "es": "Despertar",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to weave/wove/woven",
    "es": "Tejer",
    "c": 2
  },
  {
    "en": "(Infinitivo / Past / Participle) - to wring/wrung/wrung",
    "es": "Escurrir",
    "c": 2
  },
  {
    "en": "Present Simple",
    "es": "Sujeto + Verbo (-(e)s en 3ª persona)",
    "c": 5
  },
  {
    "en": "Present Continuous",
    "es": "Sujeto + am/is/are + Verbo-ing",
    "c": 5
  },
  {
    "en": "Present Perfect Simple",
    "es": "Sujeto + have/has + Verbo-participio",
    "c": 5
  },
  {
    "en": "Present Perfect Continuous",
    "es": "Sujeto + have/has + been + Verbo-ing",
    "c": 5
  },
  {
    "en": "Past Simple",
    "es": "Sujeto + Verbo en pasado (ed/irregular)",
    "c": 5
  },
  {
    "en": "Past Continuous",
    "es": "Sujeto + was/were + Verbo-ing",
    "c": 5
  },
  {
    "en": "Past Perfect Simple",
    "es": "Sujeto + had + Verbo-participio",
    "c": 5
  },
  {
    "en": "Past Perfect Continuous",
    "es": "Sujeto + had + been + Verbo-ing",
    "c": 5
  },
  {
    "en": "Future Simple (Will)",
    "es": "Sujeto + will + Verbo-infinitivo",
    "c": 5
  },
  {
    "en": "Future Simple (Going to)",
    "es": "Sujeto + am/is/are + going to + Verbo-infinitivo",
    "c": 5
  },
  {
    "en": "Future Continuous",
    "es": "Sujeto + will be + Verbo-ing",
    "c": 5
  },
  {
    "en": "Future Perfect Simple",
    "es": "Sujeto + will have + Verbo-participio",
    "c": 5
  },
  {
    "en": "Future Perfect Continuous",
    "es": "Sujeto + will have been + Verbo-ing",
    "c": 5
  },
  {
    "en": "Zero Conditional",
    "es": "If + Present Simple, ... Present Simple",
    "c": 1
  },
  {
    "en": "First Conditional",
    "es": "If + Present Simple, ... Will + Infinitivo",
    "c": 1
  },
  {
    "en": "Second Conditional",
    "es": "If + Past Simple, ... Would + Infinitivo",
    "c": 1
  },
  {
    "en": "Third Conditional",
    "es": "If + Past Perfect, ... Would have + Participio",
    "c": 1
  },
  {
    "en": "Mixed Conditionals",
    "es": "If + Past Perfect, ... Would + Infinitivo (o viceversa)",
    "c": 1
  },
  {
    "en": "Passive Voice (General)",
    "es": "Objeto + Verbo to be (conjugado) + Verbo-participio",
    "c": 1
  },
  {
    "en": "Passive Reporting",
    "es": "It + is/was + said/believed/thought + that + cláusula",
    "c": 1
  },
  {
    "en": "Inversion (Negative)",
    "es": "Adverbio negativo + Auxiliar + Sujeto + Verbo",
    "c": 1
  },
  {
    "en": "Cleft Sentences (It)",
    "es": "It + is/was + [Énfasis] + that/who",
    "c": 1
  },
  {
    "en": "Cleft Sentences (What)",
    "es": "What + cláusula + is/was + [Énfasis]",
    "c": 1
  },
  {
    "en": "Wish (Present)",
    "es": "Sujeto + wish + Sujeto + Past Simple",
    "c": 1
  },
  {
    "en": "Wish (Past)",
    "es": "Sujeto + wish + Sujeto + Past Perfect",
    "c": 1
  },
  {
    "en": "Would Rather (Different Subject)",
    "es": "Sujeto + would rather + Sujeto + Past Simple",
    "c": 1
  },
  {
    "en": "It's time",
    "es": "It is (high) time + Sujeto + Past Simple",
    "c": 1
  },
  {
    "en": "Subjunctive Mood",
    "es": "Sujeto + Verbo sugerencia + that + Sujeto + Verbo base",
    "c": 1
  },
  {
    "en": "Be used to",
    "es": "Sujeto + be + used to + V-ing/Sustantivo",
    "c": 1
  },
  {
    "en": "Get used to",
    "es": "Sujeto + get + used to + V-ing/Sustantivo",
    "c": 1
  },
  {
    "en": "Purpose (In order to)",
    "es": "Sujeto + Verbo + in order to + Verbo-infinitivo",
    "c": 1
  },
  {
    "en": "Purpose (So that)",
    "es": "Sujeto + Verbo + so that + Sujeto + modal + Verbo",
    "c": 1
  },
  {
    "en": "Concession (Despite)",
    "es": "Despite / In spite of + V-ing / Sustantivo",
    "c": 1
  },
  {
    "en": "Concession (Although)",
    "es": "Although / Even though + Sujeto + Verbo",
    "c": 1
  },
  {
    "en": "Participle Clauses (Active)",
    "es": "V-ing + complemento + Sujeto + Verbo",
    "c": 1
  },
  {
    "en": "Participle Clauses (Passive)",
    "es": "V-participio + complemento + Sujeto + Verbo",
    "c": 1
  },
  {
    "en": "Causative (Have/Get)",
    "es": "Sujeto + have/get + Objeto + V-participio",
    "c": 1
  },
  {
    "en": "Indirect Questions",
    "es": "Frase cortesía + Sujeto + Verbo (orden afirmativo)",
    "c": 1
  },
  {
    "en": "Question Tags",
    "es": "Sentencia afirmativa/negativa + Auxiliar opuesto + Sujeto",
    "c": 1
  },
  {
    "en": "Relative Clauses",
    "es": "Sujeto + [who/which/that/whose] + información",
    "c": 1
  },
  {
    "en": "Emphatic Do",
    "es": "Do + Verbo en infinitivo",
    "c": 1
  },
  {
    "en": "The... the... (Correlative)",
    "es": "The + comparativo + the + comparativo",
    "c": 1
  },
  {
    "en": "There is / There are",
    "es": "There is (singular) / There are (plural)",
    "c": 1
  },
  {
    "en": "Saxon Genitive",
    "es": "Poseedor + 's + lo poseído",
    "c": 1
  },
  {
    "en": "Can / Could",
    "es": "Habilidad o permiso",
    "c": 1
  },
  {
    "en": "Must / Have to",
    "es": "Obligación o necesidad",
    "c": 1
  },
  {
    "en": "Should",
    "es": "Consejo o recomendación",
    "c": 1
  },
  {
    "en": "May / Might",
    "es": "Posibilidad",
    "c": 1
  },
  {
    "en": "Comparative adjectives",
    "es": "Adj-er + than / More + adj + than",
    "c": 1
  },
  {
    "en": "Superlative adjectives",
    "es": "The + adj-est / The most + adj",
    "c": 1
  },
  {
    "en": "Equality (As... as)",
    "es": "As + adjetivo + as",
    "c": 1
  },
  {
    "en": "Countable/Uncountable",
    "es": "Some / Any / Much / Many / A lot of",
    "c": 1
  },
  {
    "en": "Too / Enough",
    "es": "Too + adj / Adj + enough",
    "c": 1
  },
  {
    "en": "Present Continuous (Future)",
    "es": "Be + V-ing (Planes fijos)",
    "c": 1
  },
  {
    "en": "Future Time Clauses",
    "es": "When/As soon as + Present Simple",
    "c": 1
  },
  {
    "en": "Relative Pronouns",
    "es": "Who / Which / That / Where / When",
    "c": 1
  },
  {
    "en": "Verb + to + Infinitive",
    "es": "Want / Decide / Hope / Need + to-inf",
    "c": 1
  },
  {
    "en": "Verb + -ing",
    "es": "Enjoy / Mind / Avoid / Finish + V-ing",
    "c": 1
  },
  {
    "en": "Adjective + Infinitive",
    "es": "Adjetivo + to-inf",
    "c": 1
  },
  {
    "en": "Preposition + -ing",
    "es": "Preposición + V-ing",
    "c": 1
  },
  {
    "en": "abortion",
    "es": "aborto",
    "c": 5
  },
  {
    "en": "absence",
    "es": "ausencia",
    "c": 5
  },
  {
    "en": "absent",
    "es": "ausente",
    "c": 5
  },
  {
    "en": "abstract",
    "es": "abstracto",
    "c": 5
  },
  {
    "en": "abuse",
    "es": "abuso",
    "c": 5
  },
  {
    "en": "acceptance",
    "es": "aceptación",
    "c": 5
  },
  {
    "en": "accidentally",
    "es": "accidentalmente",
    "c": 5
  },
  {
    "en": "accommodate",
    "es": "acomodar",
    "c": 5
  },
  {
    "en": "accommodation",
    "es": "alojamiento",
    "c": 5
  },
  {
    "en": "accomplish",
    "es": "lograr",
    "c": 5
  },
  {
    "en": "accomplishment",
    "es": "logro",
    "c": 5
  },
  {
    "en": "accordingly",
    "es": "en consecuencia",
    "c": 5
  },
  {
    "en": "accountability",
    "es": "responsabilidad",
    "c": 5
  },
  {
    "en": "accountable",
    "es": "responsable",
    "c": 5
  },
  {
    "en": "accountant",
    "es": "contador",
    "c": 5
  },
  {
    "en": "accumulate",
    "es": "acumular",
    "c": 5
  },
  {
    "en": "accumulation",
    "es": "acumulación",
    "c": 5
  },
  {
    "en": "accurately",
    "es": "con precisión",
    "c": 5
  },
  {
    "en": "accusation",
    "es": "acusación",
    "c": 5
  },
  {
    "en": "accused",
    "es": "acusado",
    "c": 5
  },
  {
    "en": "acid",
    "es": "ácido",
    "c": 5
  },
  {
    "en": "acquisition",
    "es": "adquisición",
    "c": 5
  },
  {
    "en": "acre",
    "es": "acre",
    "c": 5
  },
  {
    "en": "activate",
    "es": "activar",
    "c": 5
  },
  {
    "en": "activation",
    "es": "activación",
    "c": 5
  },
  {
    "en": "activist",
    "es": "activista",
    "c": 5
  },
  {
    "en": "acute",
    "es": "agudo",
    "c": 5
  },
  {
    "en": "adaptation",
    "es": "adaptación",
    "c": 5
  },
  {
    "en": "addiction",
    "es": "adicción",
    "c": 5
  },
  {
    "en": "adequate",
    "es": "adecuado",
    "c": 5
  },
  {
    "en": "adequately",
    "es": "adecuadamente",
    "c": 5
  },
  {
    "en": "adjacent",
    "es": "adyacente",
    "c": 5
  },
  {
    "en": "adjustment",
    "es": "ajuste",
    "c": 5
  },
  {
    "en": "administer",
    "es": "administrar",
    "c": 5
  },
  {
    "en": "administrative",
    "es": "administrativo",
    "c": 5
  },
  {
    "en": "administrator",
    "es": "administrador",
    "c": 5
  },
  {
    "en": "admission",
    "es": "admisión",
    "c": 5
  },
  {
    "en": "adolescent",
    "es": "adolescente",
    "c": 5
  },
  {
    "en": "adoption",
    "es": "adopción",
    "c": 5
  },
  {
    "en": "adverse",
    "es": "adverso",
    "c": 5
  },
  {
    "en": "advocate",
    "es": "defensor / abogar",
    "c": 5
  },
  {
    "en": "aesthetic",
    "es": "estético",
    "c": 5
  },
  {
    "en": "affection",
    "es": "afecto",
    "c": 5
  },
  {
    "en": "affordable",
    "es": "asequible",
    "c": 5
  },
  {
    "en": "aftermath",
    "es": "secuelas",
    "c": 5
  },
  {
    "en": "aged",
    "es": "de edad avanzada",
    "c": 5
  },
  {
    "en": "aggression",
    "es": "agresión",
    "c": 5
  },
  {
    "en": "agricultural",
    "es": "agrícola",
    "c": 5
  },
  {
    "en": "agriculture",
    "es": "agricultura",
    "c": 5
  },
  {
    "en": "aide",
    "es": "ayudante",
    "c": 5
  },
  {
    "en": "AIDS",
    "es": "SIDA",
    "c": 5
  },
  {
    "en": "alien",
    "es": "extranjero / alienígena",
    "c": 5
  },
  {
    "en": "align",
    "es": "alinear",
    "c": 5
  },
  {
    "en": "alignment",
    "es": "alineación",
    "c": 5
  },
  {
    "en": "allegation",
    "es": "alegación",
    "c": 5
  },
  {
    "en": "allege",
    "es": "alegar",
    "c": 5
  },
  {
    "en": "allegedly",
    "es": "supuestamente",
    "c": 5
  },
  {
    "en": "alliance",
    "es": "alianza",
    "c": 5
  },
  {
    "en": "allocate",
    "es": "asignar",
    "c": 5
  },
  {
    "en": "allocation",
    "es": "asignación",
    "c": 5
  },
  {
    "en": "allowance",
    "es": "asignación / subsidio",
    "c": 5
  },
  {
    "en": "ally",
    "es": "aliado",
    "c": 5
  },
  {
    "en": "alongside",
    "es": "junto a",
    "c": 5
  },
  {
    "en": "altogether",
    "es": "en total / completamente",
    "c": 5
  },
  {
    "en": "aluminum",
    "es": "aluminio",
    "c": 5
  },
  {
    "en": "amateur",
    "es": "amateur / aficionado",
    "c": 5
  },
  {
    "en": "ambassador",
    "es": "embajador",
    "c": 5
  },
  {
    "en": "amend",
    "es": "enmendar",
    "c": 5
  },
  {
    "en": "amendment",
    "es": "enmienda",
    "c": 5
  },
  {
    "en": "amid",
    "es": "en medio de",
    "c": 5
  },
  {
    "en": "analogy",
    "es": "analogía",
    "c": 5
  },
  {
    "en": "analyst",
    "es": "analista",
    "c": 5
  },
  {
    "en": "ancestor",
    "es": "antepasado",
    "c": 5
  },
  {
    "en": "anchor",
    "es": "ancla",
    "c": 5
  },
  {
    "en": "angel",
    "es": "ángel",
    "c": 5
  },
  {
    "en": "animation",
    "es": "animación",
    "c": 5
  },
  {
    "en": "annually",
    "es": "anualmente",
    "c": 5
  },
  {
    "en": "anonymous",
    "es": "anónimo",
    "c": 5
  },
  {
    "en": "anticipate",
    "es": "anticipar",
    "c": 5
  },
  {
    "en": "anxiety",
    "es": "ansiedad",
    "c": 5
  },
  {
    "en": "apology",
    "es": "disculpa",
    "c": 5
  },
  {
    "en": "apparatus",
    "es": "aparato",
    "c": 5
  },
  {
    "en": "apparel",
    "es": "ropa",
    "c": 5
  },
  {
    "en": "appealing",
    "es": "atractivo",
    "c": 5
  },
  {
    "en": "applaud",
    "es": "aplaudir",
    "c": 5
  },
  {
    "en": "applicable",
    "es": "aplicable",
    "c": 5
  },
  {
    "en": "applicant",
    "es": "solicitante",
    "c": 5
  },
  {
    "en": "appoint",
    "es": "nombrar",
    "c": 5
  },
  {
    "en": "appreciation",
    "es": "apreciación",
    "c": 5
  },
  {
    "en": "appropriately",
    "es": "apropiadamente",
    "c": 5
  },
  {
    "en": "arbitrary",
    "es": "arbitrario",
    "c": 5
  },
  {
    "en": "architectural",
    "es": "arquitectónico",
    "c": 5
  },
  {
    "en": "archive",
    "es": "archivo",
    "c": 5
  },
  {
    "en": "arena",
    "es": "arena / estadio",
    "c": 5
  },
  {
    "en": "array",
    "es": "conjunto",
    "c": 5
  },
  {
    "en": "arrow",
    "es": "flecha",
    "c": 5
  },
  {
    "en": "articulate",
    "es": "articular",
    "c": 5
  },
  {
    "en": "artwork",
    "es": "obra de arte",
    "c": 5
  },
  {
    "en": "ash",
    "es": "ceniza",
    "c": 5
  },
  {
    "en": "aspiration",
    "es": "aspiración",
    "c": 5
  },
  {
    "en": "aspire",
    "es": "aspirar",
    "c": 5
  },
  {
    "en": "assassination",
    "es": "asesinato",
    "c": 5
  },
  {
    "en": "assault",
    "es": "agresión / atacar",
    "c": 5
  },
  {
    "en": "assemble",
    "es": "ensamblar",
    "c": 5
  },
  {
    "en": "assembly",
    "es": "asamblea",
    "c": 5
  },
  {
    "en": "assert",
    "es": "afirmar",
    "c": 5
  },
  {
    "en": "assertion",
    "es": "afirmación",
    "c": 5
  },
  {
    "en": "assign",
    "es": "asignar",
    "c": 5
  },
  {
    "en": "assumption",
    "es": "suposición",
    "c": 5
  },
  {
    "en": "assurance",
    "es": "garantía",
    "c": 5
  },
  {
    "en": "assure",
    "es": "asegurar",
    "c": 5
  },
  {
    "en": "astonishing",
    "es": "asombroso",
    "c": 5
  },
  {
    "en": "asylum",
    "es": "asilo",
    "c": 5
  },
  {
    "en": "athletic",
    "es": "atlético",
    "c": 5
  },
  {
    "en": "attain",
    "es": "lograr",
    "c": 5
  },
  {
    "en": "attendance",
    "es": "asistencia",
    "c": 5
  },
  {
    "en": "attribute",
    "es": "atribuir / atributo",
    "c": 5
  },
  {
    "en": "auction",
    "es": "subasta",
    "c": 5
  },
  {
    "en": "audio",
    "es": "audio",
    "c": 5
  },
  {
    "en": "audit",
    "es": "auditoría",
    "c": 5
  },
  {
    "en": "authentic",
    "es": "auténtico",
    "c": 5
  },
  {
    "en": "authorize",
    "es": "autorizar",
    "c": 5
  },
  {
    "en": "auto",
    "es": "auto",
    "c": 5
  },
  {
    "en": "autonomy",
    "es": "autonomía",
    "c": 5
  },
  {
    "en": "availability",
    "es": "disponibilidad",
    "c": 5
  },
  {
    "en": "await",
    "es": "esperar",
    "c": 5
  },
  {
    "en": "awkward",
    "es": "incómodo",
    "c": 5
  },
  {
    "en": "backdrop",
    "es": "telón de fondo",
    "c": 5
  },
  {
    "en": "backing",
    "es": "apoyo",
    "c": 5
  },
  {
    "en": "backup",
    "es": "respaldo",
    "c": 5
  },
  {
    "en": "bail",
    "es": "fianza",
    "c": 5
  },
  {
    "en": "balanced",
    "es": "equilibrado",
    "c": 5
  },
  {
    "en": "ballet",
    "es": "ballet",
    "c": 5
  },
  {
    "en": "balloon",
    "es": "globo",
    "c": 5
  },
  {
    "en": "ballot",
    "es": "papeleta",
    "c": 5
  },
  {
    "en": "bankruptcy",
    "es": "quiebra",
    "c": 5
  },
  {
    "en": "banner",
    "es": "pancarta",
    "c": 5
  },
  {
    "en": "bare",
    "es": "desnudo / apenas",
    "c": 5
  },
  {
    "en": "basement",
    "es": "sótano",
    "c": 5
  },
  {
    "en": "basket",
    "es": "canasta",
    "c": 5
  },
  {
    "en": "bass",
    "es": "bajo",
    "c": 5
  },
  {
    "en": "battlefield",
    "es": "campo de batalla",
    "c": 5
  },
  {
    "en": "bay",
    "es": "bahía",
    "c": 5
  },
  {
    "en": "beam",
    "es": "rayo / viga",
    "c": 5
  },
  {
    "en": "beast",
    "es": "bestia",
    "c": 5
  },
  {
    "en": "behalf",
    "es": "nombre / en nombre de",
    "c": 5
  },
  {
    "en": "behavioral",
    "es": "conductual",
    "c": 5
  },
  {
    "en": "beloved",
    "es": "amado",
    "c": 5
  },
  {
    "en": "bench",
    "es": "banca",
    "c": 5
  },
  {
    "en": "benchmark",
    "es": "punto de referencia",
    "c": 5
  },
  {
    "en": "beneath",
    "es": "debajo de",
    "c": 5
  },
  {
    "en": "beside",
    "es": "al lado de",
    "c": 5
  },
  {
    "en": "beverage",
    "es": "bebida",
    "c": 5
  },
  {
    "en": "bias",
    "es": "sesgo",
    "c": 5
  },
  {
    "en": "bid",
    "es": "oferta / pujar",
    "c": 5
  },
  {
    "en": "bind",
    "es": "atar",
    "c": 5
  },
  {
    "en": "biological",
    "es": "biológico",
    "c": 5
  },
  {
    "en": "bishop",
    "es": "obispo",
    "c": 5
  },
  {
    "en": "blade",
    "es": "cuchilla",
    "c": 5
  },
  {
    "en": "blast",
    "es": "explosión / explotar",
    "c": 5
  },
  {
    "en": "bleed",
    "es": "sangrar",
    "c": 5
  },
  {
    "en": "blend",
    "es": "mezcla / mezclar",
    "c": 5
  },
  {
    "en": "bless",
    "es": "bendecir",
    "c": 5
  },
  {
    "en": "blessing",
    "es": "bendición",
    "c": 5
  },
  {
    "en": "blow",
    "es": "golpe",
    "c": 5
  },
  {
    "en": "boast",
    "es": "presumir",
    "c": 5
  },
  {
    "en": "bold",
    "es": "audaz",
    "c": 5
  },
  {
    "en": "bombing",
    "es": "bombardeo",
    "c": 5
  },
  {
    "en": "bonus",
    "es": "bono",
    "c": 5
  },
  {
    "en": "booking",
    "es": "reserva",
    "c": 5
  },
  {
    "en": "boom",
    "es": "auge",
    "c": 5
  },
  {
    "en": "boost",
    "es": "impulso / impulsar",
    "c": 5
  },
  {
    "en": "bound",
    "es": "destinado a",
    "c": 5
  },
  {
    "en": "bow",
    "es": "inclinarse / arco",
    "c": 5
  },
  {
    "en": "breach",
    "es": "incumplimiento",
    "c": 5
  },
  {
    "en": "breakdown",
    "es": "avería / colapso",
    "c": 5
  },
  {
    "en": "breakthrough",
    "es": "avance",
    "c": 5
  },
  {
    "en": "brick",
    "es": "ladrillo",
    "c": 5
  },
  {
    "en": "broadband",
    "es": "banda ancha",
    "c": 5
  },
  {
    "en": "broadcaster",
    "es": "emisora",
    "c": 5
  },
  {
    "en": "broadly",
    "es": "en términos generales",
    "c": 5
  },
  {
    "en": "browser",
    "es": "navegador",
    "c": 5
  },
  {
    "en": "buck",
    "es": "dólar",
    "c": 5
  },
  {
    "en": "buddy",
    "es": "amigo",
    "c": 5
  },
  {
    "en": "buffer",
    "es": "amortiguador",
    "c": 5
  },
  {
    "en": "bulk",
    "es": "masa / a granel",
    "c": 5
  },
  {
    "en": "burden",
    "es": "carga",
    "c": 5
  },
  {
    "en": "bureaucracy",
    "es": "burocracia",
    "c": 5
  },
  {
    "en": "burial",
    "es": "entierro",
    "c": 5
  },
  {
    "en": "burst",
    "es": "estallar",
    "c": 5
  },
  {
    "en": "cabinet",
    "es": "gabinete",
    "c": 5
  },
  {
    "en": "calculation",
    "es": "cálculo",
    "c": 5
  },
  {
    "en": "candle",
    "es": "vela",
    "c": 5
  },
  {
    "en": "canvas",
    "es": "lienzo",
    "c": 5
  },
  {
    "en": "capability",
    "es": "capacidad",
    "c": 5
  },
  {
    "en": "capitalism",
    "es": "capitalismo",
    "c": 5
  },
  {
    "en": "capitalist",
    "es": "capitalista",
    "c": 5
  },
  {
    "en": "carbon",
    "es": "carbono",
    "c": 5
  },
  {
    "en": "cargo",
    "es": "carga",
    "c": 5
  },
  {
    "en": "carve",
    "es": "tallar",
    "c": 5
  },
  {
    "en": "casino",
    "es": "casino",
    "c": 5
  },
  {
    "en": "casual",
    "es": "casual",
    "c": 5
  },
  {
    "en": "casualty",
    "es": "víctima",
    "c": 5
  },
  {
    "en": "catalog",
    "es": "catálogo",
    "c": 5
  },
  {
    "en": "cater",
    "es": "abastecer",
    "c": 5
  },
  {
    "en": "caution",
    "es": "precaución",
    "c": 5
  },
  {
    "en": "cautious",
    "es": "cauteloso",
    "c": 5
  },
  {
    "en": "cave",
    "es": "cueva",
    "c": 5
  },
  {
    "en": "cease",
    "es": "cesar",
    "c": 5
  },
  {
    "en": "cemetery",
    "es": "cementerio",
    "c": 5
  },
  {
    "en": "certainty",
    "es": "certeza",
    "c": 5
  },
  {
    "en": "certificate",
    "es": "certificado",
    "c": 5
  },
  {
    "en": "challenging",
    "es": "desafiante",
    "c": 5
  },
  {
    "en": "chamber",
    "es": "cámara",
    "c": 5
  },
  {
    "en": "championship",
    "es": "campeonato",
    "c": 5
  },
  {
    "en": "chaos",
    "es": "caos",
    "c": 5
  },
  {
    "en": "characterize",
    "es": "caracterizar",
    "c": 5
  },
  {
    "en": "charm",
    "es": "encanto",
    "c": 5
  },
  {
    "en": "charter",
    "es": "carta / estatuto",
    "c": 5
  },
  {
    "en": "chase",
    "es": "perseguir",
    "c": 5
  },
  {
    "en": "cheek",
    "es": "mejilla",
    "c": 5
  },
  {
    "en": "cheer",
    "es": "animar",
    "c": 5
  },
  {
    "en": "choir",
    "es": "coro",
    "c": 5
  },
  {
    "en": "chronic",
    "es": "crónico",
    "c": 5
  },
  {
    "en": "chunk",
    "es": "trozo",
    "c": 5
  },
  {
    "en": "circuit",
    "es": "circuito",
    "c": 5
  },
  {
    "en": "circulate",
    "es": "circular",
    "c": 5
  },
  {
    "en": "circulation",
    "es": "circulación",
    "c": 5
  },
  {
    "en": "citizenship",
    "es": "ciudadanía",
    "c": 5
  },
  {
    "en": "civic",
    "es": "cívico",
    "c": 5
  },
  {
    "en": "civilian",
    "es": "civil / civil",
    "c": 5
  },
  {
    "en": "civilization",
    "es": "civilización",
    "c": 5
  },
  {
    "en": "clarify",
    "es": "aclarar",
    "c": 5
  },
  {
    "en": "clarity",
    "es": "claridad",
    "c": 5
  },
  {
    "en": "clash",
    "es": "choque",
    "c": 5
  },
  {
    "en": "classification",
    "es": "clasificación",
    "c": 5
  },
  {
    "en": "classify",
    "es": "clasificar",
    "c": 5
  },
  {
    "en": "cliff",
    "es": "acantilado",
    "c": 5
  },
  {
    "en": "cling",
    "es": "aferrarse",
    "c": 5
  },
  {
    "en": "clinic",
    "es": "clínica",
    "c": 5
  },
  {
    "en": "clinical",
    "es": "clínico",
    "c": 5
  },
  {
    "en": "clip",
    "es": "clip",
    "c": 5
  },
  {
    "en": "closure",
    "es": "cierre",
    "c": 5
  },
  {
    "en": "cluster",
    "es": "grupo",
    "c": 5
  },
  {
    "en": "coalition",
    "es": "coalición",
    "c": 5
  },
  {
    "en": "coastal",
    "es": "costero",
    "c": 5
  },
  {
    "en": "cocktail",
    "es": "cóctel",
    "c": 5
  },
  {
    "en": "cognitive",
    "es": "cognitivo",
    "c": 5
  },
  {
    "en": "coincide",
    "es": "coincidir",
    "c": 5
  },
  {
    "en": "coincidence",
    "es": "coincidencia",
    "c": 5
  },
  {
    "en": "collaborate",
    "es": "colaborar",
    "c": 5
  },
  {
    "en": "collaboration",
    "es": "colaboración",
    "c": 5
  },
  {
    "en": "collective",
    "es": "colectivo",
    "c": 5
  },
  {
    "en": "collector",
    "es": "coleccionista",
    "c": 5
  },
  {
    "en": "collision",
    "es": "colisión",
    "c": 5
  },
  {
    "en": "colonial",
    "es": "colonial",
    "c": 5
  },
  {
    "en": "colorful",
    "es": "colorido",
    "c": 5
  },
  {
    "en": "columnist",
    "es": "columnista",
    "c": 5
  },
  {
    "en": "combat",
    "es": "combate / combatir",
    "c": 5
  },
  {
    "en": "comic",
    "es": "cómico",
    "c": 5
  },
  {
    "en": "commander",
    "es": "comandante",
    "c": 5
  },
  {
    "en": "commence",
    "es": "comenzar",
    "c": 5
  },
  {
    "en": "commentary",
    "es": "comentario",
    "c": 5
  },
  {
    "en": "commentator",
    "es": "comentarista",
    "c": 5
  },
  {
    "en": "commerce",
    "es": "comercio",
    "c": 5
  },
  {
    "en": "commissioner",
    "es": "comisionado",
    "c": 5
  },
  {
    "en": "communist",
    "es": "comunista",
    "c": 5
  },
  {
    "en": "comparative",
    "es": "comparativo",
    "c": 5
  },
  {
    "en": "compel",
    "es": "obligar",
    "c": 5
  },
  {
    "en": "compelling",
    "es": "convincente",
    "c": 5
  },
  {
    "en": "compensate",
    "es": "compensar",
    "c": 5
  },
  {
    "en": "compensation",
    "es": "compensación",
    "c": 5
  },
  {
    "en": "competence",
    "es": "competencia",
    "c": 5
  },
  {
    "en": "competent",
    "es": "competente",
    "c": 5
  },
  {
    "en": "compile",
    "es": "compilar",
    "c": 5
  },
  {
    "en": "complement",
    "es": "complementar",
    "c": 5
  },
  {
    "en": "completion",
    "es": "finalización",
    "c": 5
  },
  {
    "en": "complexity",
    "es": "complejidad",
    "c": 5
  },
  {
    "en": "compliance",
    "es": "cumplimiento",
    "c": 5
  },
  {
    "en": "complication",
    "es": "complicación",
    "c": 5
  },
  {
    "en": "comply",
    "es": "cumplir",
    "c": 5
  },
  {
    "en": "compose",
    "es": "componer",
    "c": 5
  },
  {
    "en": "composer",
    "es": "compositor",
    "c": 5
  },
  {
    "en": "composition",
    "es": "composición",
    "c": 5
  },
  {
    "en": "compound",
    "es": "compuesto",
    "c": 5
  },
  {
    "en": "comprise",
    "es": "comprender",
    "c": 5
  },
  {
    "en": "compromise",
    "es": "compromiso / comprometer",
    "c": 5
  },
  {
    "en": "compulsory",
    "es": "obligatorio",
    "c": 5
  },
  {
    "en": "compute",
    "es": "calcular",
    "c": 5
  },
  {
    "en": "conceal",
    "es": "ocultar",
    "c": 5
  },
  {
    "en": "concede",
    "es": "conceder",
    "c": 5
  },
  {
    "en": "conceive",
    "es": "concebir",
    "c": 5
  },
  {
    "en": "conception",
    "es": "concepción",
    "c": 5
  },
  {
    "en": "concession",
    "es": "concesión",
    "c": 5
  },
  {
    "en": "concrete",
    "es": "concreto",
    "c": 5
  },
  {
    "en": "condemn",
    "es": "condenar",
    "c": 5
  },
  {
    "en": "confer",
    "es": "conferir",
    "c": 5
  },
  {
    "en": "confess",
    "es": "confesar",
    "c": 5
  },
  {
    "en": "confession",
    "es": "confesión",
    "c": 5
  },
  {
    "en": "configuration",
    "es": "configuración",
    "c": 5
  },
  {
    "en": "confine",
    "es": "confinar",
    "c": 5
  },
  {
    "en": "confirmation",
    "es": "confirmación",
    "c": 5
  },
  {
    "en": "confront",
    "es": "confrontar",
    "c": 5
  },
  {
    "en": "confrontation",
    "es": "confrontación",
    "c": 5
  },
  {
    "en": "congregation",
    "es": "congregación",
    "c": 5
  },
  {
    "en": "congressional",
    "es": "congressional",
    "c": 5
  },
  {
    "en": "conscience",
    "es": "conciencia",
    "c": 5
  },
  {
    "en": "consciousness",
    "es": "consciencia",
    "c": 5
  },
  {
    "en": "consecutive",
    "es": "consecutivo",
    "c": 5
  },
  {
    "en": "consensus",
    "es": "consenso",
    "c": 5
  },
  {
    "en": "consent",
    "es": "consentimiento",
    "c": 5
  },
  {
    "en": "conservation",
    "es": "conservación",
    "c": 5
  },
  {
    "en": "conserve",
    "es": "conservar",
    "c": 5
  },
  {
    "en": "consistently",
    "es": "consistentemente",
    "c": 5
  },
  {
    "en": "consolidate",
    "es": "consolidar",
    "c": 5
  },
  {
    "en": "conspiracy",
    "es": "conspiración",
    "c": 5
  },
  {
    "en": "constitute",
    "es": "constituir",
    "c": 5
  },
  {
    "en": "constitution",
    "es": "constitución",
    "c": 5
  },
  {
    "en": "constitutional",
    "es": "constitucional",
    "c": 5
  },
  {
    "en": "constraint",
    "es": "restricción",
    "c": 5
  },
  {
    "en": "consult",
    "es": "consultar",
    "c": 5
  },
  {
    "en": "consultant",
    "es": "consultor",
    "c": 5
  },
  {
    "en": "consultation",
    "es": "consulta",
    "c": 5
  },
  {
    "en": "consumption",
    "es": "consumo",
    "c": 5
  },
  {
    "en": "contemplate",
    "es": "contemplar",
    "c": 5
  },
  {
    "en": "contempt",
    "es": "desprecio",
    "c": 5
  },
  {
    "en": "contend",
    "es": "sostener",
    "c": 5
  },
  {
    "en": "contender",
    "es": "contendiente",
    "c": 5
  },
  {
    "en": "content",
    "es": "contento",
    "c": 5
  },
  {
    "en": "contention",
    "es": "disputa",
    "c": 5
  },
  {
    "en": "continually",
    "es": "continuamente",
    "c": 5
  },
  {
    "en": "contractor",
    "es": "contratista",
    "c": 5
  },
  {
    "en": "contradiction",
    "es": "contradicción",
    "c": 5
  },
  {
    "en": "contrary",
    "es": "contrario",
    "c": 5
  },
  {
    "en": "contributor",
    "es": "contribuyente",
    "c": 5
  },
  {
    "en": "controversial",
    "es": "controvertido",
    "c": 5
  },
  {
    "en": "controversy",
    "es": "controversia",
    "c": 5
  },
  {
    "en": "convention",
    "es": "convención",
    "c": 5
  },
  {
    "en": "conventional",
    "es": "convencional",
    "c": 5
  },
  {
    "en": "conversion",
    "es": "conversión",
    "c": 5
  },
  {
    "en": "convey",
    "es": "transmitir",
    "c": 5
  },
  {
    "en": "conviction",
    "es": "convicción",
    "c": 5
  },
  {
    "en": "convincing",
    "es": "convincente",
    "c": 5
  },
  {
    "en": "cooperate",
    "es": "cooperar",
    "c": 5
  },
  {
    "en": "cooperative",
    "es": "cooperativo",
    "c": 5
  },
  {
    "en": "coordinate",
    "es": "coordinar",
    "c": 5
  },
  {
    "en": "coordination",
    "es": "coordinación",
    "c": 5
  },
  {
    "en": "coordinator",
    "es": "coordinador",
    "c": 5
  },
  {
    "en": "cop",
    "es": "policía",
    "c": 5
  },
  {
    "en": "cope",
    "es": "afrontar",
    "c": 5
  },
  {
    "en": "copyright",
    "es": "derechos de autor",
    "c": 5
  },
  {
    "en": "corporation",
    "es": "corporación",
    "c": 5
  },
  {
    "en": "correction",
    "es": "corrección",
    "c": 5
  },
  {
    "en": "correlate",
    "es": "correlacionar",
    "c": 5
  },
  {
    "en": "correlation",
    "es": "correlación",
    "c": 5
  },
  {
    "en": "correspond",
    "es": "corresponder",
    "c": 5
  },
  {
    "en": "correspondent",
    "es": "corresponsal",
    "c": 5
  },
  {
    "en": "corresponding",
    "es": "correspondiente",
    "c": 5
  },
  {
    "en": "corridor",
    "es": "pasillo",
    "c": 5
  },
  {
    "en": "corrupt",
    "es": "corrupto",
    "c": 5
  },
  {
    "en": "corruption",
    "es": "corrupción",
    "c": 5
  },
  {
    "en": "councilor",
    "es": "concejal",
    "c": 5
  },
  {
    "en": "counseling",
    "es": "asesoramiento",
    "c": 5
  },
  {
    "en": "counselor",
    "es": "asesor",
    "c": 5
  },
  {
    "en": "counter",
    "es": "contador / rebatir",
    "c": 5
  },
  {
    "en": "counterpart",
    "es": "homólogo",
    "c": 5
  },
  {
    "en": "countless",
    "es": "innumerables",
    "c": 5
  },
  {
    "en": "coup",
    "es": "golpe de estado",
    "c": 5
  },
  {
    "en": "courtesy",
    "es": "cortesía",
    "c": 5
  },
  {
    "en": "coverage",
    "es": "cobertura",
    "c": 5
  },
  {
    "en": "cowboy",
    "es": "vaquero",
    "c": 5
  },
  {
    "en": "crack",
    "es": "grieta / romper",
    "c": 5
  },
  {
    "en": "craft",
    "es": "oficio / elaborar",
    "c": 5
  },
  {
    "en": "crawl",
    "es": "arrastrarse",
    "c": 5
  },
  {
    "en": "creator",
    "es": "creador",
    "c": 5
  },
  {
    "en": "credibility",
    "es": "credibilidad",
    "c": 5
  },
  {
    "en": "credible",
    "es": "creíble",
    "c": 5
  },
  {
    "en": "creep",
    "es": "arrastrarse",
    "c": 5
  },
  {
    "en": "critically",
    "es": "críticamente",
    "c": 5
  },
  {
    "en": "critique",
    "es": "crítica",
    "c": 5
  },
  {
    "en": "crown",
    "es": "corona",
    "c": 5
  },
  {
    "en": "crude",
    "es": "crudo",
    "c": 5
  },
  {
    "en": "crystal",
    "es": "cristal",
    "c": 5
  },
  {
    "en": "cue",
    "es": "señal",
    "c": 5
  },
  {
    "en": "cult",
    "es": "culto",
    "c": 5
  },
  {
    "en": "cultivate",
    "es": "cultivar",
    "c": 5
  },
  {
    "en": "curiosity",
    "es": "curiosidad",
    "c": 5
  },
  {
    "en": "curriculum",
    "es": "currículo",
    "c": 5
  },
  {
    "en": "custody",
    "es": "custodia",
    "c": 5
  },
  {
    "en": "cutting",
    "es": "corte",
    "c": 5
  },
  {
    "en": "cynical",
    "es": "cínico",
    "c": 5
  },
  {
    "en": "dam",
    "es": "represa",
    "c": 5
  },
  {
    "en": "damaging",
    "es": "dañino",
    "c": 5
  },
  {
    "en": "dare",
    "es": "atreverse",
    "c": 5
  },
  {
    "en": "darkness",
    "es": "oscuridad",
    "c": 5
  },
  {
    "en": "database",
    "es": "base de datos",
    "c": 5
  },
  {
    "en": "dawn",
    "es": "amanecer",
    "c": 5
  },
  {
    "en": "deadline",
    "es": "plazo",
    "c": 5
  },
  {
    "en": "debris",
    "es": "escombros",
    "c": 5
  },
  {
    "en": "decision-making",
    "es": "toma de decisiones",
    "c": 5
  },
  {
    "en": "deck",
    "es": "cubierta",
    "c": 5
  },
  {
    "en": "declaration",
    "es": "declaración",
    "c": 5
  },
  {
    "en": "dedicated",
    "es": "dedicado",
    "c": 5
  },
  {
    "en": "dedication",
    "es": "dedicación",
    "c": 5
  },
  {
    "en": "deed",
    "es": "acto / escritura",
    "c": 5
  },
  {
    "en": "deem",
    "es": "considerar",
    "c": 5
  },
  {
    "en": "default",
    "es": "incumplimiento",
    "c": 5
  },
  {
    "en": "defender",
    "es": "defensor",
    "c": 5
  },
  {
    "en": "defensive",
    "es": "defensivo",
    "c": 5
  },
  {
    "en": "deficiency",
    "es": "deficiencia",
    "c": 5
  },
  {
    "en": "deficit",
    "es": "déficit",
    "c": 5
  },
  {
    "en": "defy",
    "es": "desafiar",
    "c": 5
  },
  {
    "en": "delegate",
    "es": "delegado",
    "c": 5
  },
  {
    "en": "delegation",
    "es": "delegación",
    "c": 5
  },
  {
    "en": "delete",
    "es": "eliminar",
    "c": 5
  },
  {
    "en": "delicate",
    "es": "delicado",
    "c": 5
  },
  {
    "en": "democracy",
    "es": "democracia",
    "c": 5
  },
  {
    "en": "democratic",
    "es": "democrático",
    "c": 5
  },
  {
    "en": "demon",
    "es": "demonio",
    "c": 5
  },
  {
    "en": "denial",
    "es": "negación",
    "c": 5
  },
  {
    "en": "denounce",
    "es": "denunciar",
    "c": 5
  },
  {
    "en": "dense",
    "es": "denso",
    "c": 5
  },
  {
    "en": "density",
    "es": "densidad",
    "c": 5
  },
  {
    "en": "depart",
    "es": "partir",
    "c": 5
  },
  {
    "en": "dependence",
    "es": "dependencia",
    "c": 5
  },
  {
    "en": "dependent",
    "es": "dependiente",
    "c": 5
  },
  {
    "en": "depict",
    "es": "representar",
    "c": 5
  },
  {
    "en": "deploy",
    "es": "desplegar",
    "c": 5
  },
  {
    "en": "deployment",
    "es": "despliegue",
    "c": 5
  },
  {
    "en": "deposit",
    "es": "depósito",
    "c": 5
  },
  {
    "en": "depression",
    "es": "depresión",
    "c": 5
  },
  {
    "en": "deprive",
    "es": "privar",
    "c": 5
  },
  {
    "en": "deputy",
    "es": "diputado",
    "c": 5
  },
  {
    "en": "derive",
    "es": "derivar",
    "c": 5
  },
  {
    "en": "descend",
    "es": "descender",
    "c": 5
  },
  {
    "en": "descent",
    "es": "descenso",
    "c": 5
  },
  {
    "en": "designate",
    "es": "designar",
    "c": 5
  },
  {
    "en": "desirable",
    "es": "deseable",
    "c": 5
  },
  {
    "en": "desktop",
    "es": "escritorio",
    "c": 5
  },
  {
    "en": "desperately",
    "es": "desesperadamente",
    "c": 5
  },
  {
    "en": "destruction",
    "es": "destrucción",
    "c": 5
  },
  {
    "en": "destructive",
    "es": "destructivo",
    "c": 5
  },
  {
    "en": "detain",
    "es": "detener",
    "c": 5
  },
  {
    "en": "detection",
    "es": "detección",
    "c": 5
  },
  {
    "en": "detention",
    "es": "detención",
    "c": 5
  },
  {
    "en": "deteriorate",
    "es": "deteriorarse",
    "c": 5
  },
  {
    "en": "determination",
    "es": "determinación",
    "c": 5
  },
  {
    "en": "devastate",
    "es": "devastar",
    "c": 5
  },
  {
    "en": "devil",
    "es": "diablo",
    "c": 5
  },
  {
    "en": "devise",
    "es": "idear",
    "c": 5
  },
  {
    "en": "devote",
    "es": "dedicar",
    "c": 5
  },
  {
    "en": "diagnose",
    "es": "diagnosticar",
    "c": 5
  },
  {
    "en": "diagnosis",
    "es": "diagnóstico",
    "c": 5
  },
  {
    "en": "dictate",
    "es": "dictar",
    "c": 5
  },
  {
    "en": "dictator",
    "es": "dictador",
    "c": 5
  },
  {
    "en": "differ",
    "es": "diferir",
    "c": 5
  },
  {
    "en": "differentiate",
    "es": "diferenciar",
    "c": 5
  },
  {
    "en": "dignity",
    "es": "dignidad",
    "c": 5
  },
  {
    "en": "dilemma",
    "es": "dilema",
    "c": 5
  },
  {
    "en": "dime",
    "es": "moneda de diez centavos",
    "c": 5
  },
  {
    "en": "dimension",
    "es": "dimensión",
    "c": 5
  },
  {
    "en": "diminish",
    "es": "disminuir",
    "c": 5
  },
  {
    "en": "dip",
    "es": "sumergir",
    "c": 5
  },
  {
    "en": "diplomat",
    "es": "diplomático",
    "c": 5
  },
  {
    "en": "diplomatic",
    "es": "diplomático",
    "c": 5
  },
  {
    "en": "directory",
    "es": "directorio",
    "c": 5
  },
  {
    "en": "disability",
    "es": "discapacidad",
    "c": 5
  },
  {
    "en": "disabled",
    "es": "discapacitado",
    "c": 5
  },
  {
    "en": "disagreement",
    "es": "desacuerdo",
    "c": 5
  },
  {
    "en": "disappoint",
    "es": "decepcionar",
    "c": 5
  },
  {
    "en": "disappointment",
    "es": "decepción",
    "c": 5
  },
  {
    "en": "disastrous",
    "es": "desastroso",
    "c": 5
  },
  {
    "en": "discard",
    "es": "descartar",
    "c": 5
  },
  {
    "en": "discharge",
    "es": "descarga / liberar",
    "c": 5
  },
  {
    "en": "disclose",
    "es": "revelar",
    "c": 5
  },
  {
    "en": "disclosure",
    "es": "divulgación",
    "c": 5
  },
  {
    "en": "discourage",
    "es": "desalentar",
    "c": 5
  },
  {
    "en": "discourse",
    "es": "discurso",
    "c": 5
  },
  {
    "en": "discretion",
    "es": "discreción",
    "c": 5
  },
  {
    "en": "discrimination",
    "es": "discriminación",
    "c": 5
  },
  {
    "en": "dismissal",
    "es": "despido",
    "c": 5
  },
  {
    "en": "disorder",
    "es": "desorden",
    "c": 5
  },
  {
    "en": "displace",
    "es": "desplazar",
    "c": 5
  },
  {
    "en": "disposal",
    "es": "eliminación",
    "c": 5
  },
  {
    "en": "dispose",
    "es": "deshacerse",
    "c": 5
  },
  {
    "en": "dispute",
    "es": "disputa",
    "c": 5
  },
  {
    "en": "disrupt",
    "es": "interrumpir",
    "c": 5
  },
  {
    "en": "disruption",
    "es": "interrupción",
    "c": 5
  },
  {
    "en": "dissolve",
    "es": "disolver",
    "c": 5
  },
  {
    "en": "distant",
    "es": "distante",
    "c": 5
  },
  {
    "en": "distinction",
    "es": "distinción",
    "c": 5
  },
  {
    "en": "distinctive",
    "es": "distintivo",
    "c": 5
  },
  {
    "en": "distinguish",
    "es": "distinguir",
    "c": 5
  },
  {
    "en": "distort",
    "es": "distorsionar",
    "c": 5
  },
  {
    "en": "distract",
    "es": "distraer",
    "c": 5
  },
  {
    "en": "distress",
    "es": "angustia",
    "c": 5
  },
  {
    "en": "disturb",
    "es": "perturbar",
    "c": 5
  },
  {
    "en": "disturbing",
    "es": "perturbador",
    "c": 5
  },
  {
    "en": "diverse",
    "es": "diverso",
    "c": 5
  },
  {
    "en": "diversity",
    "es": "diversidad",
    "c": 5
  },
  {
    "en": "divert",
    "es": "desviar",
    "c": 5
  },
  {
    "en": "divine",
    "es": "divino",
    "c": 5
  },
  {
    "en": "divorce",
    "es": "divorcio",
    "c": 5
  },
  {
    "en": "doctrine",
    "es": "doctrina",
    "c": 5
  },
  {
    "en": "documentation",
    "es": "documentación",
    "c": 5
  },
  {
    "en": "domain",
    "es": "dominio",
    "c": 5
  },
  {
    "en": "dominance",
    "es": "dominancia",
    "c": 5
  },
  {
    "en": "dominant",
    "es": "dominante",
    "c": 5
  },
  {
    "en": "donation",
    "es": "donación",
    "c": 5
  },
  {
    "en": "donor",
    "es": "donante",
    "c": 5
  },
  {
    "en": "dot",
    "es": "punto",
    "c": 5
  },
  {
    "en": "drain",
    "es": "drenar",
    "c": 5
  },
  {
    "en": "drift",
    "es": "derivar",
    "c": 5
  },
  {
    "en": "driving",
    "es": "impulsador",
    "c": 5
  },
  {
    "en": "drought",
    "es": "sequía",
    "c": 5
  },
  {
    "en": "drown",
    "es": "ahogar",
    "c": 5
  },
  {
    "en": "dual",
    "es": "dual",
    "c": 5
  },
  {
    "en": "dub",
    "es": "apodar",
    "c": 5
  },
  {
    "en": "dumb",
    "es": "mudo / tonto",
    "c": 5
  },
  {
    "en": "dump",
    "es": "volcar",
    "c": 5
  },
  {
    "en": "duo",
    "es": "dúo",
    "c": 5
  },
  {
    "en": "duration",
    "es": "duración",
    "c": 5
  },
  {
    "en": "dynamic",
    "es": "dinámico",
    "c": 5
  },
  {
    "en": "eager",
    "es": "ansioso",
    "c": 5
  },
  {
    "en": "earnings",
    "es": "ganancias",
    "c": 5
  },
  {
    "en": "ease",
    "es": "facilidad / aliviar",
    "c": 5
  },
  {
    "en": "ecological",
    "es": "ecológico",
    "c": 5
  },
  {
    "en": "economist",
    "es": "economista",
    "c": 5
  },
  {
    "en": "editorial",
    "es": "editorial",
    "c": 5
  },
  {
    "en": "educator",
    "es": "educador",
    "c": 5
  },
  {
    "en": "efficiently",
    "es": "eficientemente",
    "c": 5
  },
  {
    "en": "ego",
    "es": "ego",
    "c": 5
  },
  {
    "en": "elaborate",
    "es": "elaborado",
    "c": 5
  },
  {
    "en": "elbow",
    "es": "codo",
    "c": 5
  },
  {
    "en": "electoral",
    "es": "electoral",
    "c": 5
  },
  {
    "en": "electronics",
    "es": "electrónica",
    "c": 5
  },
  {
    "en": "elevate",
    "es": "elevar",
    "c": 5
  },
  {
    "en": "eliminate",
    "es": "eliminar",
    "c": 5
  },
  {
    "en": "elite",
    "es": "élite",
    "c": 5
  },
  {
    "en": "embark",
    "es": "embarcarse",
    "c": 5
  },
  {
    "en": "embed",
    "es": "incrustar",
    "c": 5
  },
  {
    "en": "embody",
    "es": "encarnar",
    "c": 5
  },
  {
    "en": "embrace",
    "es": "abrazar",
    "c": 5
  },
  {
    "en": "emergence",
    "es": "surgimiento",
    "c": 5
  },
  {
    "en": "emission",
    "es": "emisión",
    "c": 5
  },
  {
    "en": "emotionally",
    "es": "emocionalmente",
    "c": 5
  },
  {
    "en": "empirical",
    "es": "empírico",
    "c": 5
  },
  {
    "en": "empower",
    "es": "empoderar",
    "c": 5
  },
  {
    "en": "enact",
    "es": "promulgar",
    "c": 5
  },
  {
    "en": "encompass",
    "es": "abarcar",
    "c": 5
  },
  {
    "en": "encouragement",
    "es": "aliento",
    "c": 5
  },
  {
    "en": "encouraging",
    "es": "alentador",
    "c": 5
  },
  {
    "en": "endeavor",
    "es": "esfuerzo",
    "c": 5
  },
  {
    "en": "endorse",
    "es": "respaldar",
    "c": 5
  },
  {
    "en": "endure",
    "es": "soportar",
    "c": 5
  },
  {
    "en": "enforce",
    "es": "aplicar",
    "c": 5
  },
  {
    "en": "enforcement",
    "es": "aplicación",
    "c": 5
  },
  {
    "en": "engagement",
    "es": "compromiso",
    "c": 5
  },
  {
    "en": "engaging",
    "es": "atractivo",
    "c": 5
  },
  {
    "en": "enjoyable",
    "es": "agradable",
    "c": 5
  },
  {
    "en": "enrich",
    "es": "enriquecer",
    "c": 5
  },
  {
    "en": "enroll",
    "es": "inscribirse",
    "c": 5
  },
  {
    "en": "ensue",
    "es": "seguir",
    "c": 5
  },
  {
    "en": "enterprise",
    "es": "empresa",
    "c": 5
  },
  {
    "en": "entitle",
    "es": "otorgar el derecho",
    "c": 5
  },
  {
    "en": "entity",
    "es": "entidad",
    "c": 5
  },
  {
    "en": "entrepreneur",
    "es": "emprendedor",
    "c": 5
  },
  {
    "en": "epidemic",
    "es": "epidemia",
    "c": 5
  },
  {
    "en": "equality",
    "es": "igualdad",
    "c": 5
  },
  {
    "en": "equation",
    "es": "ecuación",
    "c": 5
  },
  {
    "en": "equip",
    "es": "equipar",
    "c": 5
  },
  {
    "en": "equivalent",
    "es": "equivalente",
    "c": 5
  },
  {
    "en": "era",
    "es": "era",
    "c": 5
  },
  {
    "en": "erect",
    "es": "erigir",
    "c": 5
  },
  {
    "en": "erupt",
    "es": "entrar en erupción",
    "c": 5
  },
  {
    "en": "escalate",
    "es": "escalar",
    "c": 5
  },
  {
    "en": "establishment",
    "es": "establecimiento",
    "c": 5
  },
  {
    "en": "ethic",
    "es": "ética",
    "c": 5
  },
  {
    "en": "ethnic",
    "es": "étnico",
    "c": 5
  },
  {
    "en": "evaluation",
    "es": "evaluación",
    "c": 5
  },
  {
    "en": "evident",
    "es": "evidente",
    "c": 5
  },
  {
    "en": "evoke",
    "es": "evocar",
    "c": 5
  },
  {
    "en": "evolution",
    "es": "evolución",
    "c": 5
  },
  {
    "en": "evolutionary",
    "es": "evolutivo",
    "c": 5
  },
  {
    "en": "exaggerate",
    "es": "exagerar",
    "c": 5
  },
  {
    "en": "exceed",
    "es": "superar",
    "c": 5
  },
  {
    "en": "exception",
    "es": "excepción",
    "c": 5
  },
  {
    "en": "exceptional",
    "es": "excepcional",
    "c": 5
  },
  {
    "en": "excess",
    "es": "exceso",
    "c": 5
  },
  {
    "en": "excessive",
    "es": "excesivo",
    "c": 5
  },
  {
    "en": "exclude",
    "es": "excluir",
    "c": 5
  },
  {
    "en": "exclusion",
    "es": "exclusión",
    "c": 5
  },
  {
    "en": "exclusive",
    "es": "exclusivo",
    "c": 5
  },
  {
    "en": "exclusively",
    "es": "exclusivamente",
    "c": 5
  },
  {
    "en": "execute",
    "es": "ejecutar",
    "c": 5
  },
  {
    "en": "execution",
    "es": "ejecución",
    "c": 5
  },
  {
    "en": "exert",
    "es": "ejercer",
    "c": 5
  },
  {
    "en": "exile",
    "es": "exilio",
    "c": 5
  },
  {
    "en": "exotic",
    "es": "exótico",
    "c": 5
  },
  {
    "en": "expansion",
    "es": "expansión",
    "c": 5
  },
  {
    "en": "expenditure",
    "es": "gasto",
    "c": 5
  },
  {
    "en": "experimental",
    "es": "experimental",
    "c": 5
  },
  {
    "en": "expire",
    "es": "vencer",
    "c": 5
  },
  {
    "en": "explicit",
    "es": "explícito",
    "c": 5
  },
  {
    "en": "explicitly",
    "es": "explícitamente",
    "c": 5
  },
  {
    "en": "exploit",
    "es": "explotar",
    "c": 5
  },
  {
    "en": "exploitation",
    "es": "explotación",
    "c": 5
  },
  {
    "en": "explosive",
    "es": "explosivo",
    "c": 5
  },
  {
    "en": "exposure",
    "es": "exposición",
    "c": 5
  },
  {
    "en": "extension",
    "es": "extensión",
    "c": 5
  },
  {
    "en": "extensively",
    "es": "extensamente",
    "c": 5
  },
  {
    "en": "extract",
    "es": "extracto / extraer",
    "c": 5
  },
  {
    "en": "extremist",
    "es": "extremista",
    "c": 5
  },
  {
    "en": "fabric",
    "es": "tela",
    "c": 5
  },
  {
    "en": "faction",
    "es": "facción",
    "c": 5
  },
  {
    "en": "fade",
    "es": "desvanecerse",
    "c": 5
  },
  {
    "en": "failed",
    "es": "fallido",
    "c": 5
  },
  {
    "en": "fairness",
    "es": "justicia",
    "c": 5
  },
  {
    "en": "fantasy",
    "es": "fantasía",
    "c": 5
  },
  {
    "en": "fatal",
    "es": "fatal",
    "c": 5
  },
  {
    "en": "favorable",
    "es": "favorable",
    "c": 5
  },
  {
    "en": "feat",
    "es": "hazaña",
    "c": 5
  },
  {
    "en": "felony",
    "es": "delito grave",
    "c": 5
  },
  {
    "en": "feminist",
    "es": "feminista",
    "c": 5
  },
  {
    "en": "fiber",
    "es": "fibra",
    "c": 5
  },
  {
    "en": "fierce",
    "es": "feroz",
    "c": 5
  },
  {
    "en": "filter",
    "es": "filtro / filtrar",
    "c": 5
  },
  {
    "en": "firearm",
    "es": "arma de fuego",
    "c": 5
  },
  {
    "en": "firmly",
    "es": "firmemente",
    "c": 5
  },
  {
    "en": "fiscal",
    "es": "fiscal",
    "c": 5
  },
  {
    "en": "flavor",
    "es": "sabor",
    "c": 5
  },
  {
    "en": "flaw",
    "es": "defecto",
    "c": 5
  },
  {
    "en": "flawed",
    "es": "defectuoso",
    "c": 5
  },
  {
    "en": "flee",
    "es": "huir",
    "c": 5
  },
  {
    "en": "fleet",
    "es": "flota",
    "c": 5
  },
  {
    "en": "flesh",
    "es": "carne",
    "c": 5
  },
  {
    "en": "flexibility",
    "es": "flexibilidad",
    "c": 5
  },
  {
    "en": "fluid",
    "es": "fluido",
    "c": 5
  },
  {
    "en": "fond",
    "es": "aficionado a",
    "c": 5
  },
  {
    "en": "footage",
    "es": "metraje",
    "c": 5
  },
  {
    "en": "forge",
    "es": "forjar",
    "c": 5
  },
  {
    "en": "format",
    "es": "formato",
    "c": 5
  },
  {
    "en": "formation",
    "es": "formación",
    "c": 5
  },
  {
    "en": "formula",
    "es": "fórmula",
    "c": 5
  },
  {
    "en": "formulate",
    "es": "formular",
    "c": 5
  },
  {
    "en": "forth",
    "es": "adelante",
    "c": 5
  },
  {
    "en": "forthcoming",
    "es": "próximo",
    "c": 5
  },
  {
    "en": "fortunate",
    "es": "afortunado",
    "c": 5
  },
  {
    "en": "forum",
    "es": "foro",
    "c": 5
  },
  {
    "en": "foster",
    "es": "fomentar",
    "c": 5
  },
  {
    "en": "foundation",
    "es": "fundación",
    "c": 5
  },
  {
    "en": "founder",
    "es": "fundador",
    "c": 5
  },
  {
    "en": "fraction",
    "es": "fracción",
    "c": 5
  },
  {
    "en": "fragile",
    "es": "frágil",
    "c": 5
  },
  {
    "en": "fragment",
    "es": "fragmento",
    "c": 5
  },
  {
    "en": "framework",
    "es": "marco",
    "c": 5
  },
  {
    "en": "franchise",
    "es": "franquicia",
    "c": 5
  },
  {
    "en": "frankly",
    "es": "francamente",
    "c": 5
  },
  {
    "en": "fraud",
    "es": "fraude",
    "c": 5
  },
  {
    "en": "freely",
    "es": "libremente",
    "c": 5
  },
  {
    "en": "freshman",
    "es": "estudiante de primer año",
    "c": 5
  },
  {
    "en": "frustrated",
    "es": "frustrado",
    "c": 5
  },
  {
    "en": "frustrating",
    "es": "frustrante",
    "c": 5
  },
  {
    "en": "frustration",
    "es": "frustración",
    "c": 5
  },
  {
    "en": "fulfill",
    "es": "cumplir",
    "c": 5
  },
  {
    "en": "functional",
    "es": "funcional",
    "c": 5
  },
  {
    "en": "fundamentally",
    "es": "fundamentalmente",
    "c": 5
  },
  {
    "en": "fundraising",
    "es": "recaudación de fondos",
    "c": 5
  },
  {
    "en": "funeral",
    "es": "funeral",
    "c": 5
  },
  {
    "en": "gallon",
    "es": "galón",
    "c": 5
  },
  {
    "en": "gambling",
    "es": "juego de azar",
    "c": 5
  },
  {
    "en": "gaming",
    "es": "videojuegos",
    "c": 5
  },
  {
    "en": "gay",
    "es": "gay",
    "c": 5
  },
  {
    "en": "gaze",
    "es": "mirada / mirar",
    "c": 5
  },
  {
    "en": "gear",
    "es": "engranaje",
    "c": 5
  },
  {
    "en": "gender",
    "es": "género",
    "c": 5
  },
  {
    "en": "gene",
    "es": "gen",
    "c": 5
  },
  {
    "en": "generic",
    "es": "genérico",
    "c": 5
  },
  {
    "en": "genetic",
    "es": "genético",
    "c": 5
  },
  {
    "en": "genius",
    "es": "genio",
    "c": 5
  },
  {
    "en": "genocide",
    "es": "genocidio",
    "c": 5
  },
  {
    "en": "genuinely",
    "es": "genuinamente",
    "c": 5
  },
  {
    "en": "gig",
    "es": "concierto / trabajo temporal",
    "c": 5
  },
  {
    "en": "glimpse",
    "es": "vislumbre",
    "c": 5
  },
  {
    "en": "globalization",
    "es": "globalización",
    "c": 5
  },
  {
    "en": "golden",
    "es": "dorado",
    "c": 5
  },
  {
    "en": "goodness",
    "es": "bondad",
    "c": 5
  },
  {
    "en": "governance",
    "es": "gobernanza",
    "c": 5
  },
  {
    "en": "grace",
    "es": "gracia",
    "c": 5
  },
  {
    "en": "graphic",
    "es": "gráfico",
    "c": 5
  },
  {
    "en": "graphics",
    "es": "gráficos",
    "c": 5
  },
  {
    "en": "grasp",
    "es": "aferrar / comprensión",
    "c": 5
  },
  {
    "en": "grave",
    "es": "tumba / grave",
    "c": 5
  },
  {
    "en": "gravity",
    "es": "gravedad",
    "c": 5
  },
  {
    "en": "greatly",
    "es": "enormemente",
    "c": 5
  },
  {
    "en": "greenhouse",
    "es": "invernadero",
    "c": 5
  },
  {
    "en": "grid",
    "es": "cuadrícula",
    "c": 5
  },
  {
    "en": "grief",
    "es": "duelo",
    "c": 5
  },
  {
    "en": "grin",
    "es": "sonreír / sonrisa",
    "c": 5
  },
  {
    "en": "grind",
    "es": "moler",
    "c": 5
  },
  {
    "en": "gross",
    "es": "bruto / asqueroso",
    "c": 5
  },
  {
    "en": "guerrilla",
    "es": "guerrilla",
    "c": 5
  },
  {
    "en": "guideline",
    "es": "directriz",
    "c": 5
  },
  {
    "en": "gut",
    "es": "intestino / instinto",
    "c": 5
  },
  {
    "en": "habitat",
    "es": "hábitat",
    "c": 5
  },
  {
    "en": "hail",
    "es": "aclamar",
    "c": 5
  },
  {
    "en": "halfway",
    "es": "a mitad de camino",
    "c": 5
  },
  {
    "en": "halt",
    "es": "detener / parar",
    "c": 5
  },
  {
    "en": "handful",
    "es": "puñado",
    "c": 5
  },
  {
    "en": "handling",
    "es": "manejo",
    "c": 5
  },
  {
    "en": "harassment",
    "es": "acoso",
    "c": 5
  },
  {
    "en": "harbor",
    "es": "puerto",
    "c": 5
  },
  {
    "en": "hardware",
    "es": "hardware",
    "c": 5
  },
  {
    "en": "harmony",
    "es": "armonía",
    "c": 5
  },
  {
    "en": "harsh",
    "es": "severo",
    "c": 5
  },
  {
    "en": "harvest",
    "es": "cosecha",
    "c": 5
  },
  {
    "en": "hatred",
    "es": "odio",
    "c": 5
  },
  {
    "en": "haunt",
    "es": "acechar",
    "c": 5
  },
  {
    "en": "hazard",
    "es": "peligro",
    "c": 5
  },
  {
    "en": "headquarters",
    "es": "sede",
    "c": 5
  },
  {
    "en": "heal",
    "es": "sanar",
    "c": 5
  },
  {
    "en": "healthcare",
    "es": "atención médica",
    "c": 5
  },
  {
    "en": "heighten",
    "es": "intensificar",
    "c": 5
  },
  {
    "en": "heritage",
    "es": "patrimonio",
    "c": 5
  },
  {
    "en": "hidden",
    "es": "oculto",
    "c": 5
  },
  {
    "en": "hierarchy",
    "es": "jerarquía",
    "c": 5
  },
  {
    "en": "high-profile",
    "es": "de alto perfil",
    "c": 5
  },
  {
    "en": "hint",
    "es": "indicio / insinuar",
    "c": 5
  },
  {
    "en": "hip",
    "es": "cadera",
    "c": 5
  },
  {
    "en": "homeland",
    "es": "patria",
    "c": 5
  },
  {
    "en": "homeless",
    "es": "sin hogar",
    "c": 5
  },
  {
    "en": "honesty",
    "es": "honestidad",
    "c": 5
  },
  {
    "en": "hook",
    "es": "gancho",
    "c": 5
  },
  {
    "en": "hopeful",
    "es": "esperanzador",
    "c": 5
  },
  {
    "en": "hopefully",
    "es": "con suerte",
    "c": 5
  },
  {
    "en": "horizon",
    "es": "horizonte",
    "c": 5
  },
  {
    "en": "horn",
    "es": "cuerno",
    "c": 5
  },
  {
    "en": "hostage",
    "es": "rehén",
    "c": 5
  },
  {
    "en": "hostility",
    "es": "hostilidad",
    "c": 5
  },
  {
    "en": "humanitarian",
    "es": "humanitario",
    "c": 5
  },
  {
    "en": "humanity",
    "es": "humanidad",
    "c": 5
  },
  {
    "en": "humble",
    "es": "humilde",
    "c": 5
  },
  {
    "en": "hydrogen",
    "es": "hidrógeno",
    "c": 5
  },
  {
    "en": "hypothesis",
    "es": "hipótesis",
    "c": 5
  },
  {
    "en": "ID",
    "es": "identificación",
    "c": 5
  },
  {
    "en": "identification",
    "es": "identificación",
    "c": 5
  },
  {
    "en": "ideological",
    "es": "ideológico",
    "c": 5
  },
  {
    "en": "ideology",
    "es": "ideología",
    "c": 5
  },
  {
    "en": "ignorance",
    "es": "ignorancia",
    "c": 5
  },
  {
    "en": "illusion",
    "es": "ilusión",
    "c": 5
  },
  {
    "en": "imagery",
    "es": "imágenes",
    "c": 5
  },
  {
    "en": "immigration",
    "es": "inmigración",
    "c": 5
  },
  {
    "en": "imminent",
    "es": "inminente",
    "c": 5
  },
  {
    "en": "immune",
    "es": "inmune",
    "c": 5
  },
  {
    "en": "implement",
    "es": "implementar",
    "c": 5
  },
  {
    "en": "implementation",
    "es": "implementación",
    "c": 5
  },
  {
    "en": "imprison",
    "es": "encarcelar",
    "c": 5
  },
  {
    "en": "inability",
    "es": "incapacidad",
    "c": 5
  },
  {
    "en": "inadequate",
    "es": "inadecuado",
    "c": 5
  },
  {
    "en": "inappropriate",
    "es": "inapropiado",
    "c": 5
  },
  {
    "en": "incarcerate",
    "es": "encarcelar",
    "c": 5
  },
  {
    "en": "incarceration",
    "es": "encarcelamiento",
    "c": 5
  },
  {
    "en": "incentive",
    "es": "incentivo",
    "c": 5
  },
  {
    "en": "incidence",
    "es": "incidencia",
    "c": 5
  },
  {
    "en": "inclined",
    "es": "inclinado",
    "c": 5
  },
  {
    "en": "inclusion",
    "es": "inclusión",
    "c": 5
  },
  {
    "en": "incorporate",
    "es": "incorporar",
    "c": 5
  },
  {
    "en": "incur",
    "es": "incurrir",
    "c": 5
  },
  {
    "en": "independence",
    "es": "independencia",
    "c": 5
  },
  {
    "en": "indicator",
    "es": "indicador",
    "c": 5
  },
  {
    "en": "indictment",
    "es": "acusación formal",
    "c": 5
  },
  {
    "en": "indigenous",
    "es": "indígena",
    "c": 5
  },
  {
    "en": "induce",
    "es": "inducir",
    "c": 5
  },
  {
    "en": "indulge",
    "es": "darse el lujo",
    "c": 5
  },
  {
    "en": "inequality",
    "es": "desigualdad",
    "c": 5
  },
  {
    "en": "inevitably",
    "es": "inevitablemente",
    "c": 5
  },
  {
    "en": "infamous",
    "es": "infame",
    "c": 5
  },
  {
    "en": "infant",
    "es": "infante",
    "c": 5
  },
  {
    "en": "infect",
    "es": "infectar",
    "c": 5
  },
  {
    "en": "inflation",
    "es": "inflación",
    "c": 5
  },
  {
    "en": "inflict",
    "es": "infligir",
    "c": 5
  },
  {
    "en": "info",
    "es": "información",
    "c": 5
  },
  {
    "en": "infrastructure",
    "es": "infraestructura",
    "c": 5
  },
  {
    "en": "inherent",
    "es": "inherente",
    "c": 5
  },
  {
    "en": "inhibit",
    "es": "inhibir",
    "c": 5
  },
  {
    "en": "initiate",
    "es": "iniciar",
    "c": 5
  },
  {
    "en": "inject",
    "es": "inyectar",
    "c": 5
  },
  {
    "en": "injection",
    "es": "inyección",
    "c": 5
  },
  {
    "en": "injustice",
    "es": "injusticia",
    "c": 5
  },
  {
    "en": "inmate",
    "es": "recluso",
    "c": 5
  },
  {
    "en": "innovation",
    "es": "innovación",
    "c": 5
  },
  {
    "en": "innovative",
    "es": "innovador",
    "c": 5
  },
  {
    "en": "input",
    "es": "entrada",
    "c": 5
  },
  {
    "en": "insert",
    "es": "insertar",
    "c": 5
  },
  {
    "en": "insertion",
    "es": "inserción",
    "c": 5
  },
  {
    "en": "insider",
    "es": "persona interna",
    "c": 5
  },
  {
    "en": "inspect",
    "es": "inspeccionar",
    "c": 5
  },
  {
    "en": "inspection",
    "es": "inspección",
    "c": 5
  },
  {
    "en": "inspector",
    "es": "inspector",
    "c": 5
  },
  {
    "en": "inspiration",
    "es": "inspiración",
    "c": 5
  },
  {
    "en": "installation",
    "es": "instalación",
    "c": 5
  },
  {
    "en": "instantly",
    "es": "instantáneamente",
    "c": 5
  },
  {
    "en": "instinct",
    "es": "instinto",
    "c": 5
  },
  {
    "en": "institutional",
    "es": "institucional",
    "c": 5
  },
  {
    "en": "instruct",
    "es": "instruir",
    "c": 5
  },
  {
    "en": "instrumental",
    "es": "instrumental",
    "c": 5
  },
  {
    "en": "insufficient",
    "es": "insuficiente",
    "c": 5
  },
  {
    "en": "insult",
    "es": "insulto",
    "c": 5
  },
  {
    "en": "intact",
    "es": "intacto",
    "c": 5
  },
  {
    "en": "intake",
    "es": "ingesta",
    "c": 5
  },
  {
    "en": "integral",
    "es": "integral",
    "c": 5
  },
  {
    "en": "integrate",
    "es": "integrar",
    "c": 5
  },
  {
    "en": "integrated",
    "es": "integrado",
    "c": 5
  },
  {
    "en": "integration",
    "es": "integración",
    "c": 5
  },
  {
    "en": "integrity",
    "es": "integridad",
    "c": 5
  },
  {
    "en": "intellectual",
    "es": "intelectual",
    "c": 5
  },
  {
    "en": "intensify",
    "es": "intensificar",
    "c": 5
  },
  {
    "en": "intensity",
    "es": "intensidad",
    "c": 5
  },
  {
    "en": "intensive",
    "es": "intensivo",
    "c": 5
  },
  {
    "en": "intent",
    "es": "intención",
    "c": 5
  },
  {
    "en": "interact",
    "es": "interactuar",
    "c": 5
  },
  {
    "en": "interaction",
    "es": "interacción",
    "c": 5
  },
  {
    "en": "interactive",
    "es": "interactivo",
    "c": 5
  },
  {
    "en": "interface",
    "es": "interfaz",
    "c": 5
  },
  {
    "en": "interfere",
    "es": "interferir",
    "c": 5
  },
  {
    "en": "interference",
    "es": "interferencia",
    "c": 5
  },
  {
    "en": "interim",
    "es": "interino",
    "c": 5
  },
  {
    "en": "interior",
    "es": "interior",
    "c": 5
  },
  {
    "en": "interpretation",
    "es": "interpretación",
    "c": 5
  },
  {
    "en": "intersection",
    "es": "intersección",
    "c": 5
  },
  {
    "en": "intervene",
    "es": "intervenir",
    "c": 5
  },
  {
    "en": "intervention",
    "es": "intervención",
    "c": 5
  },
  {
    "en": "intimate",
    "es": "íntimo",
    "c": 5
  },
  {
    "en": "intriguing",
    "es": "intrigante",
    "c": 5
  },
  {
    "en": "invasion",
    "es": "invasión",
    "c": 5
  },
  {
    "en": "inventory",
    "es": "inventario",
    "c": 5
  },
  {
    "en": "investigator",
    "es": "investigador",
    "c": 5
  },
  {
    "en": "investor",
    "es": "inversor",
    "c": 5
  },
  {
    "en": "invisible",
    "es": "invisible",
    "c": 5
  },
  {
    "en": "invoke",
    "es": "invocar",
    "c": 5
  },
  {
    "en": "involvement",
    "es": "participación",
    "c": 5
  },
  {
    "en": "ironic",
    "es": "irónico",
    "c": 5
  },
  {
    "en": "ironically",
    "es": "irónicamente",
    "c": 5
  },
  {
    "en": "irony",
    "es": "ironía",
    "c": 5
  },
  {
    "en": "isolate",
    "es": "aislar",
    "c": 5
  },
  {
    "en": "isolated",
    "es": "aislado",
    "c": 5
  },
  {
    "en": "isolation",
    "es": "aislamiento",
    "c": 5
  },
  {
    "en": "joint",
    "es": "conjunto / articulación",
    "c": 5
  },
  {
    "en": "jurisdiction",
    "es": "jurisdicción",
    "c": 5
  },
  {
    "en": "justification",
    "es": "justificación",
    "c": 5
  },
  {
    "en": "kidnap",
    "es": "secuestrar",
    "c": 5
  },
  {
    "en": "kidney",
    "es": "riñón",
    "c": 5
  },
  {
    "en": "kindergarten",
    "es": "jardín de infantes",
    "c": 5
  },
  {
    "en": "kingdom",
    "es": "reino",
    "c": 5
  },
  {
    "en": "kit",
    "es": "kit",
    "c": 5
  },
  {
    "en": "landing",
    "es": "aterrizaje",
    "c": 5
  },
  {
    "en": "landmark",
    "es": "hito",
    "c": 5
  },
  {
    "en": "lane",
    "es": "carril",
    "c": 5
  },
  {
    "en": "lap",
    "es": "regazo",
    "c": 5
  },
  {
    "en": "large-scale",
    "es": "a gran escala",
    "c": 5
  },
  {
    "en": "latter",
    "es": "último / este último",
    "c": 5
  },
  {
    "en": "lawmaker",
    "es": "legislador",
    "c": 5
  },
  {
    "en": "lawsuit",
    "es": "demanda",
    "c": 5
  },
  {
    "en": "layout",
    "es": "diseño",
    "c": 5
  },
  {
    "en": "legacy",
    "es": "legado",
    "c": 5
  },
  {
    "en": "legend",
    "es": "leyenda",
    "c": 5
  },
  {
    "en": "legendary",
    "es": "legendario",
    "c": 5
  },
  {
    "en": "legislation",
    "es": "legislación",
    "c": 5
  },
  {
    "en": "legislative",
    "es": "legislativo",
    "c": 5
  },
  {
    "en": "legislature",
    "es": "legislatura",
    "c": 5
  },
  {
    "en": "legitimate",
    "es": "legítimo",
    "c": 5
  },
  {
    "en": "lengthy",
    "es": "extenso",
    "c": 5
  },
  {
    "en": "lens",
    "es": "lente",
    "c": 5
  },
  {
    "en": "lesbian",
    "es": "lesbiana",
    "c": 5
  },
  {
    "en": "lesser",
    "es": "menor",
    "c": 5
  },
  {
    "en": "liable",
    "es": "responsable",
    "c": 5
  },
  {
    "en": "liberation",
    "es": "liberación",
    "c": 5
  },
  {
    "en": "lifelong",
    "es": "de por vida",
    "c": 5
  },
  {
    "en": "lifetime",
    "es": "vida / toda una vida",
    "c": 5
  },
  {
    "en": "lighting",
    "es": "iluminación",
    "c": 5
  },
  {
    "en": "limb",
    "es": "extremidad",
    "c": 5
  },
  {
    "en": "limitation",
    "es": "limitación",
    "c": 5
  },
  {
    "en": "linear",
    "es": "lineal",
    "c": 5
  },
  {
    "en": "lineup",
    "es": "alineación",
    "c": 5
  },
  {
    "en": "linger",
    "es": "permanecer",
    "c": 5
  },
  {
    "en": "listing",
    "es": "listado",
    "c": 5
  },
  {
    "en": "liter",
    "es": "litro",
    "c": 5
  },
  {
    "en": "literacy",
    "es": "alfabetización",
    "c": 5
  },
  {
    "en": "literally",
    "es": "literalmente",
    "c": 5
  },
  {
    "en": "literary",
    "es": "literario",
    "c": 5
  },
  {
    "en": "liver",
    "es": "hígado",
    "c": 5
  },
  {
    "en": "lobby",
    "es": "vestíbulo / cabildear",
    "c": 5
  },
  {
    "en": "logic",
    "es": "lógica",
    "c": 5
  },
  {
    "en": "logo",
    "es": "logo",
    "c": 5
  },
  {
    "en": "long-standing",
    "es": "de larga data",
    "c": 5
  },
  {
    "en": "longtime",
    "es": "de mucho tiempo",
    "c": 5
  },
  {
    "en": "loom",
    "es": "amenazar / surgir",
    "c": 5
  },
  {
    "en": "loop",
    "es": "bucle",
    "c": 5
  },
  {
    "en": "lottery",
    "es": "lotería",
    "c": 5
  },
  {
    "en": "lyric",
    "es": "letra de canción",
    "c": 5
  },
  {
    "en": "machinery",
    "es": "maquinaria",
    "c": 5
  },
  {
    "en": "magical",
    "es": "mágico",
    "c": 5
  },
  {
    "en": "magnetic",
    "es": "magnético",
    "c": 5
  },
  {
    "en": "mainland",
    "es": "tierra firme",
    "c": 5
  },
  {
    "en": "mainstream",
    "es": "corriente principal",
    "c": 5
  },
  {
    "en": "maintenance",
    "es": "mantenimiento",
    "c": 5
  },
  {
    "en": "makeup",
    "es": "maquillaje",
    "c": 5
  },
  {
    "en": "making",
    "es": "fabricación",
    "c": 5
  },
  {
    "en": "mandatory",
    "es": "obligatorio",
    "c": 5
  },
  {
    "en": "manifest",
    "es": "manifestar",
    "c": 5
  },
  {
    "en": "manipulate",
    "es": "manipular",
    "c": 5
  },
  {
    "en": "manipulation",
    "es": "manipulación",
    "c": 5
  },
  {
    "en": "manufacture",
    "es": "fabricar",
    "c": 5
  },
  {
    "en": "manufacturing",
    "es": "manufactura",
    "c": 5
  },
  {
    "en": "marathon",
    "es": "maratón",
    "c": 5
  },
  {
    "en": "march",
    "es": "marcha / marchar",
    "c": 5
  },
  {
    "en": "marginal",
    "es": "marginal",
    "c": 5
  },
  {
    "en": "marker",
    "es": "marcador",
    "c": 5
  },
  {
    "en": "marketplace",
    "es": "mercado",
    "c": 5
  },
  {
    "en": "martial",
    "es": "marcial",
    "c": 5
  },
  {
    "en": "mask",
    "es": "máscara",
    "c": 5
  },
  {
    "en": "massacre",
    "es": "masacre",
    "c": 5
  },
  {
    "en": "mathematical",
    "es": "matemático",
    "c": 5
  },
  {
    "en": "mature",
    "es": "maduro",
    "c": 5
  },
  {
    "en": "maximize",
    "es": "maximizar",
    "c": 5
  },
  {
    "en": "meantime",
    "es": "entretanto",
    "c": 5
  },
  {
    "en": "mechanical",
    "es": "mecánico",
    "c": 5
  },
  {
    "en": "mechanism",
    "es": "mecanismo",
    "c": 5
  },
  {
    "en": "medication",
    "es": "medicación",
    "c": 5
  },
  {
    "en": "medieval",
    "es": "medieval",
    "c": 5
  },
  {
    "en": "meditation",
    "es": "meditación",
    "c": 5
  },
  {
    "en": "melody",
    "es": "melodía",
    "c": 5
  },
  {
    "en": "memo",
    "es": "memo",
    "c": 5
  },
  {
    "en": "memoir",
    "es": "memorias",
    "c": 5
  },
  {
    "en": "memorable",
    "es": "memorable",
    "c": 5
  },
  {
    "en": "memorial",
    "es": "memorial",
    "c": 5
  },
  {
    "en": "merchant",
    "es": "comerciante",
    "c": 5
  },
  {
    "en": "mercy",
    "es": "misericordia",
    "c": 5
  },
  {
    "en": "mere",
    "es": "mero",
    "c": 5
  },
  {
    "en": "merely",
    "es": "meramente",
    "c": 5
  },
  {
    "en": "merge",
    "es": "fusionar",
    "c": 5
  },
  {
    "en": "merger",
    "es": "fusión",
    "c": 5
  },
  {
    "en": "merit",
    "es": "mérito",
    "c": 5
  },
  {
    "en": "metaphor",
    "es": "metáfora",
    "c": 5
  },
  {
    "en": "methodology",
    "es": "metodología",
    "c": 5
  },
  {
    "en": "midst",
    "es": "en medio de",
    "c": 5
  },
  {
    "en": "migration",
    "es": "migración",
    "c": 5
  },
  {
    "en": "militant",
    "es": "militante",
    "c": 5
  },
  {
    "en": "militia",
    "es": "milicia",
    "c": 5
  },
  {
    "en": "mill",
    "es": "molino",
    "c": 5
  },
  {
    "en": "miner",
    "es": "minero",
    "c": 5
  },
  {
    "en": "minimal",
    "es": "mínimo",
    "c": 5
  },
  {
    "en": "minimize",
    "es": "minimizar",
    "c": 5
  },
  {
    "en": "mining",
    "es": "minería",
    "c": 5
  },
  {
    "en": "ministry",
    "es": "ministerio",
    "c": 5
  },
  {
    "en": "miracle",
    "es": "milagro",
    "c": 5
  },
  {
    "en": "misery",
    "es": "miseria",
    "c": 5
  },
  {
    "en": "misleading",
    "es": "engañoso",
    "c": 5
  },
  {
    "en": "missile",
    "es": "misil",
    "c": 5
  },
  {
    "en": "mob",
    "es": "turba",
    "c": 5
  },
  {
    "en": "mobile",
    "es": "móvil",
    "c": 5
  },
  {
    "en": "mobility",
    "es": "movilidad",
    "c": 5
  },
  {
    "en": "mobilize",
    "es": "movilizar",
    "c": 5
  },
  {
    "en": "mode",
    "es": "modo",
    "c": 5
  },
  {
    "en": "moderate",
    "es": "moderado",
    "c": 5
  },
  {
    "en": "modification",
    "es": "modificación",
    "c": 5
  },
  {
    "en": "module",
    "es": "módulo",
    "c": 5
  },
  {
    "en": "momentum",
    "es": "impulso",
    "c": 5
  },
  {
    "en": "monk",
    "es": "monje",
    "c": 5
  },
  {
    "en": "monopoly",
    "es": "monopolio",
    "c": 5
  },
  {
    "en": "monster",
    "es": "monstruo",
    "c": 5
  },
  {
    "en": "monthly",
    "es": "mensual",
    "c": 5
  },
  {
    "en": "monument",
    "es": "monumento",
    "c": 5
  },
  {
    "en": "morality",
    "es": "moralidad",
    "c": 5
  },
  {
    "en": "moreover",
    "es": "además",
    "c": 5
  },
  {
    "en": "mosquito",
    "es": "mosquito",
    "c": 5
  },
  {
    "en": "motion",
    "es": "movimiento",
    "c": 5
  },
  {
    "en": "motivate",
    "es": "motivar",
    "c": 5
  },
  {
    "en": "motivation",
    "es": "motivación",
    "c": 5
  },
  {
    "en": "motive",
    "es": "motivo",
    "c": 5
  },
  {
    "en": "moving",
    "es": "conmovedor",
    "c": 5
  },
  {
    "en": "municipal",
    "es": "municipal",
    "c": 5
  },
  {
    "en": "mutual",
    "es": "mutuo",
    "c": 5
  },
  {
    "en": "myth",
    "es": "mito",
    "c": 5
  },
  {
    "en": "naked",
    "es": "desnudo",
    "c": 5
  },
  {
    "en": "namely",
    "es": "a saber",
    "c": 5
  },
  {
    "en": "nationwide",
    "es": "a nivel nacional",
    "c": 5
  },
  {
    "en": "navigation",
    "es": "navegación",
    "c": 5
  },
  {
    "en": "neglect",
    "es": "descuidar",
    "c": 5
  },
  {
    "en": "negotiate",
    "es": "negociar",
    "c": 5
  },
  {
    "en": "negotiation",
    "es": "negociación",
    "c": 5
  },
  {
    "en": "neighboring",
    "es": "vecino",
    "c": 5
  },
  {
    "en": "newly",
    "es": "recién",
    "c": 5
  },
  {
    "en": "newsletter",
    "es": "boletín",
    "c": 5
  },
  {
    "en": "niche",
    "es": "nicho",
    "c": 5
  },
  {
    "en": "nickel",
    "es": "níquel",
    "c": 5
  },
  {
    "en": "noble",
    "es": "noble",
    "c": 5
  },
  {
    "en": "nominate",
    "es": "nominar",
    "c": 5
  },
  {
    "en": "nomination",
    "es": "nominación",
    "c": 5
  },
  {
    "en": "nominee",
    "es": "candidato",
    "c": 5
  },
  {
    "en": "nonetheless",
    "es": "no obstante",
    "c": 5
  },
  {
    "en": "nonprofit",
    "es": "sin fines de lucro",
    "c": 5
  },
  {
    "en": "norm",
    "es": "norma",
    "c": 5
  },
  {
    "en": "notable",
    "es": "notable",
    "c": 5
  },
  {
    "en": "notably",
    "es": "notablemente",
    "c": 5
  },
  {
    "en": "notify",
    "es": "notificar",
    "c": 5
  },
  {
    "en": "notorious",
    "es": "notorious",
    "c": 5
  },
  {
    "en": "novelist",
    "es": "novelista",
    "c": 5
  },
  {
    "en": "nursery",
    "es": "guardería",
    "c": 5
  },
  {
    "en": "nursing",
    "es": "enfermería",
    "c": 5
  },
  {
    "en": "nutrition",
    "es": "nutrición",
    "c": 5
  },
  {
    "en": "obesity",
    "es": "obesidad",
    "c": 5
  },
  {
    "en": "objection",
    "es": "objeción",
    "c": 5
  },
  {
    "en": "observer",
    "es": "observador",
    "c": 5
  },
  {
    "en": "obsess",
    "es": "obsesionar",
    "c": 5
  },
  {
    "en": "obsession",
    "es": "obsesión",
    "c": 5
  },
  {
    "en": "obstacle",
    "es": "obstáculo",
    "c": 5
  },
  {
    "en": "occurrence",
    "es": "ocurrencia",
    "c": 5
  },
  {
    "en": "odds",
    "es": "probabilidades",
    "c": 5
  },
  {
    "en": "offender",
    "es": "infractor",
    "c": 5
  },
  {
    "en": "offering",
    "es": "oferta",
    "c": 5
  },
  {
    "en": "offspring",
    "es": "descendencia",
    "c": 5
  },
  {
    "en": "openly",
    "es": "abiertamente",
    "c": 5
  },
  {
    "en": "operational",
    "es": "operacional",
    "c": 5
  },
  {
    "en": "opt",
    "es": "optar",
    "c": 5
  },
  {
    "en": "optical",
    "es": "óptico",
    "c": 5
  },
  {
    "en": "optimism",
    "es": "optimismo",
    "c": 5
  },
  {
    "en": "optimistic",
    "es": "optimista",
    "c": 5
  },
  {
    "en": "oral",
    "es": "oral",
    "c": 5
  },
  {
    "en": "organic",
    "es": "orgánico",
    "c": 5
  },
  {
    "en": "organizational",
    "es": "organizacional",
    "c": 5
  },
  {
    "en": "orientation",
    "es": "orientación",
    "c": 5
  },
  {
    "en": "originate",
    "es": "originarse",
    "c": 5
  },
  {
    "en": "outbreak",
    "es": "brote",
    "c": 5
  },
  {
    "en": "outing",
    "es": "salida",
    "c": 5
  },
  {
    "en": "outlet",
    "es": "salida / canal",
    "c": 5
  },
  {
    "en": "output",
    "es": "producción",
    "c": 5
  },
  {
    "en": "outrage",
    "es": "indignación",
    "c": 5
  },
  {
    "en": "outsider",
    "es": "forastero",
    "c": 5
  },
  {
    "en": "overcome",
    "es": "superar",
    "c": 5
  },
  {
    "en": "overlook",
    "es": "pasar por alto",
    "c": 5
  },
  {
    "en": "overly",
    "es": "excesivamente",
    "c": 5
  },
  {
    "en": "oversee",
    "es": "supervisar",
    "c": 5
  },
  {
    "en": "overturn",
    "es": "anular",
    "c": 5
  },
  {
    "en": "overwhelm",
    "es": "abrumar",
    "c": 5
  },
  {
    "en": "ownership",
    "es": "propiedad",
    "c": 5
  },
  {
    "en": "oxygen",
    "es": "oxígeno",
    "c": 5
  },
  {
    "en": "panic",
    "es": "pánico",
    "c": 5
  },
  {
    "en": "parade",
    "es": "desfile",
    "c": 5
  },
  {
    "en": "parallel",
    "es": "paralelo",
    "c": 5
  },
  {
    "en": "parameter",
    "es": "parámetro",
    "c": 5
  },
  {
    "en": "parental",
    "es": "parental",
    "c": 5
  },
  {
    "en": "partial",
    "es": "parcial",
    "c": 5
  },
  {
    "en": "partially",
    "es": "parcialmente",
    "c": 5
  },
  {
    "en": "participation",
    "es": "participación",
    "c": 5
  },
  {
    "en": "partnership",
    "es": "asociación",
    "c": 5
  },
  {
    "en": "passing",
    "es": "fallecimiento",
    "c": 5
  },
  {
    "en": "passionate",
    "es": "apasionado",
    "c": 5
  },
  {
    "en": "patch",
    "es": "parche",
    "c": 5
  },
  {
    "en": "patent",
    "es": "patente",
    "c": 5
  },
  {
    "en": "pathway",
    "es": "camino",
    "c": 5
  },
  {
    "en": "patrol",
    "es": "patrulla",
    "c": 5
  },
  {
    "en": "patron",
    "es": "patrón",
    "c": 5
  },
  {
    "en": "peak",
    "es": "pico",
    "c": 5
  },
  {
    "en": "peasant",
    "es": "campesino",
    "c": 5
  },
  {
    "en": "peculiar",
    "es": "peculiar",
    "c": 5
  },
  {
    "en": "peer",
    "es": "par",
    "c": 5
  },
  {
    "en": "penalty",
    "es": "penalidad",
    "c": 5
  },
  {
    "en": "perceive",
    "es": "percibir",
    "c": 5
  },
  {
    "en": "perception",
    "es": "percepción",
    "c": 5
  },
  {
    "en": "permanently",
    "es": "permanentemente",
    "c": 5
  },
  {
    "en": "persist",
    "es": "persistir",
    "c": 5
  },
  {
    "en": "persistent",
    "es": "persistente",
    "c": 5
  },
  {
    "en": "personnel",
    "es": "personal",
    "c": 5
  },
  {
    "en": "petition",
    "es": "petición",
    "c": 5
  },
  {
    "en": "philosopher",
    "es": "filósofo",
    "c": 5
  },
  {
    "en": "philosophical",
    "es": "filosófico",
    "c": 5
  },
  {
    "en": "pioneer",
    "es": "pionero",
    "c": 5
  },
  {
    "en": "pipeline",
    "es": "tubería / canal",
    "c": 5
  },
  {
    "en": "pirate",
    "es": "pirata",
    "c": 5
  },
  {
    "en": "pit",
    "es": "pozo",
    "c": 5
  },
  {
    "en": "placement",
    "es": "colocación",
    "c": 5
  },
  {
    "en": "plea",
    "es": "súplica",
    "c": 5
  },
  {
    "en": "plead",
    "es": "suplicar",
    "c": 5
  },
  {
    "en": "plunge",
    "es": "sumergirse",
    "c": 5
  },
  {
    "en": "pole",
    "es": "polo",
    "c": 5
  },
  {
    "en": "poll",
    "es": "encuesta",
    "c": 5
  },
  {
    "en": "pond",
    "es": "estanque",
    "c": 5
  },
  {
    "en": "portion",
    "es": "porción",
    "c": 5
  },
  {
    "en": "portray",
    "es": "retratar",
    "c": 5
  },
  {
    "en": "postpone",
    "es": "posponer",
    "c": 5
  },
  {
    "en": "postwar",
    "es": "de posguerra",
    "c": 5
  },
  {
    "en": "potentially",
    "es": "potencialmente",
    "c": 5
  },
  {
    "en": "preach",
    "es": "predicar",
    "c": 5
  },
  {
    "en": "precede",
    "es": "preceder",
    "c": 5
  },
  {
    "en": "precedent",
    "es": "precedente",
    "c": 5
  },
  {
    "en": "precious",
    "es": "precioso",
    "c": 5
  },
  {
    "en": "precise",
    "es": "preciso",
    "c": 5
  },
  {
    "en": "precisely",
    "es": "precisamente",
    "c": 5
  },
  {
    "en": "precision",
    "es": "precisión",
    "c": 5
  },
  {
    "en": "predator",
    "es": "depredador",
    "c": 5
  },
  {
    "en": "predecessor",
    "es": "predecesor",
    "c": 5
  },
  {
    "en": "predictable",
    "es": "predecible",
    "c": 5
  },
  {
    "en": "predominantly",
    "es": "predominantemente",
    "c": 5
  },
  {
    "en": "pregnancy",
    "es": "embarazo",
    "c": 5
  },
  {
    "en": "prejudice",
    "es": "prejuicio",
    "c": 5
  },
  {
    "en": "preliminary",
    "es": "preliminar",
    "c": 5
  },
  {
    "en": "premier",
    "es": "primer ministro",
    "c": 5
  },
  {
    "en": "premise",
    "es": "premisa",
    "c": 5
  },
  {
    "en": "premium",
    "es": "prima",
    "c": 5
  },
  {
    "en": "prescribe",
    "es": "prescribir",
    "c": 5
  },
  {
    "en": "preservation",
    "es": "preservación",
    "c": 5
  },
  {
    "en": "preside",
    "es": "presidir",
    "c": 5
  },
  {
    "en": "presidency",
    "es": "presidencia",
    "c": 5
  },
  {
    "en": "presidential",
    "es": "presidencial",
    "c": 5
  },
  {
    "en": "prestigious",
    "es": "prestigioso",
    "c": 5
  },
  {
    "en": "presumably",
    "es": "presumiblemente",
    "c": 5
  },
  {
    "en": "presume",
    "es": "presumir",
    "c": 5
  },
  {
    "en": "prevail",
    "es": "prevalecer",
    "c": 5
  },
  {
    "en": "prevalence",
    "es": "prevalencia",
    "c": 5
  },
  {
    "en": "prevention",
    "es": "prevención",
    "c": 5
  },
  {
    "en": "prey",
    "es": "presa",
    "c": 5
  },
  {
    "en": "pride",
    "es": "orgullo",
    "c": 5
  },
  {
    "en": "primarily",
    "es": "principalmente",
    "c": 5
  },
  {
    "en": "prior",
    "es": "anterior",
    "c": 5
  },
  {
    "en": "privatization",
    "es": "privatización",
    "c": 5
  },
  {
    "en": "privilege",
    "es": "privilegio",
    "c": 5
  },
  {
    "en": "probability",
    "es": "probabilidad",
    "c": 5
  },
  {
    "en": "probe",
    "es": "sonda / investigar",
    "c": 5
  },
  {
    "en": "problematic",
    "es": "problemático",
    "c": 5
  },
  {
    "en": "proceed",
    "es": "proceder",
    "c": 5
  },
  {
    "en": "proceeding",
    "es": "proceso",
    "c": 5
  },
  {
    "en": "proceeds",
    "es": "ganancias",
    "c": 5
  },
  {
    "en": "processing",
    "es": "procesamiento",
    "c": 5
  },
  {
    "en": "processor",
    "es": "procesador",
    "c": 5
  },
  {
    "en": "proclaim",
    "es": "proclamar",
    "c": 5
  },
  {
    "en": "productive",
    "es": "productivo",
    "c": 5
  },
  {
    "en": "productivity",
    "es": "productividad",
    "c": 5
  },
  {
    "en": "profitable",
    "es": "rentable",
    "c": 5
  },
  {
    "en": "profound",
    "es": "profundo",
    "c": 5
  },
  {
    "en": "programming",
    "es": "programación",
    "c": 5
  },
  {
    "en": "progressive",
    "es": "progresista",
    "c": 5
  },
  {
    "en": "prohibit",
    "es": "prohibir",
    "c": 5
  },
  {
    "en": "projection",
    "es": "proyección",
    "c": 5
  },
  {
    "en": "prominent",
    "es": "prominente",
    "c": 5
  },
  {
    "en": "promising",
    "es": "prometedor",
    "c": 5
  },
  {
    "en": "promotion",
    "es": "promoción",
    "c": 5
  },
  {
    "en": "pronounced",
    "es": "pronunciado",
    "c": 5
  },
  {
    "en": "propaganda",
    "es": "propaganda",
    "c": 5
  },
  {
    "en": "proportion",
    "es": "proporción",
    "c": 5
  },
  {
    "en": "proposition",
    "es": "proposición",
    "c": 5
  },
  {
    "en": "prosecute",
    "es": "procesar",
    "c": 5
  },
  {
    "en": "prosecution",
    "es": "acusación",
    "c": 5
  },
  {
    "en": "prosecutor",
    "es": "fiscal",
    "c": 5
  },
  {
    "en": "prospective",
    "es": "prospectivo",
    "c": 5
  },
  {
    "en": "prosperity",
    "es": "prosperidad",
    "c": 5
  },
  {
    "en": "protective",
    "es": "protector",
    "c": 5
  },
  {
    "en": "protein",
    "es": "proteína",
    "c": 5
  },
  {
    "en": "protocol",
    "es": "protocolo",
    "c": 5
  },
  {
    "en": "province",
    "es": "provincia",
    "c": 5
  },
  {
    "en": "provincial",
    "es": "provincial",
    "c": 5
  },
  {
    "en": "provision",
    "es": "disposición",
    "c": 5
  },
  {
    "en": "provoke",
    "es": "provocar",
    "c": 5
  },
  {
    "en": "psychiatric",
    "es": "psiquiátrico",
    "c": 5
  },
  {
    "en": "psychological",
    "es": "psicológico",
    "c": 5
  },
  {
    "en": "publicity",
    "es": "publicidad",
    "c": 5
  },
  {
    "en": "publishing",
    "es": "editorial",
    "c": 5
  },
  {
    "en": "pulse",
    "es": "pulso",
    "c": 5
  },
  {
    "en": "punch",
    "es": "golpe / golpear",
    "c": 5
  },
  {
    "en": "punk",
    "es": "punk",
    "c": 5
  },
  {
    "en": "purely",
    "es": "puramente",
    "c": 5
  },
  {
    "en": "pursuit",
    "es": "persecución",
    "c": 5
  },
  {
    "en": "puzzle",
    "es": "rompecabezas",
    "c": 5
  },
  {
    "en": "query",
    "es": "consulta",
    "c": 5
  },
  {
    "en": "quest",
    "es": "búsqueda",
    "c": 5
  },
  {
    "en": "quota",
    "es": "cuota",
    "c": 5
  },
  {
    "en": "racial",
    "es": "racial",
    "c": 5
  },
  {
    "en": "racism",
    "es": "racismo",
    "c": 5
  },
  {
    "en": "racist",
    "es": "racista",
    "c": 5
  },
  {
    "en": "radar",
    "es": "radar",
    "c": 5
  },
  {
    "en": "radiation",
    "es": "radiación",
    "c": 5
  },
  {
    "en": "rage",
    "es": "rabia",
    "c": 5
  },
  {
    "en": "raid",
    "es": "redada",
    "c": 5
  },
  {
    "en": "rally",
    "es": "rally / reunirse",
    "c": 5
  },
  {
    "en": "random",
    "es": "aleatorio",
    "c": 5
  },
  {
    "en": "ranking",
    "es": "clasificación",
    "c": 5
  },
  {
    "en": "rape",
    "es": "violación",
    "c": 5
  },
  {
    "en": "rat",
    "es": "rata",
    "c": 5
  },
  {
    "en": "rating",
    "es": "calificación",
    "c": 5
  },
  {
    "en": "ratio",
    "es": "razón / relación",
    "c": 5
  },
  {
    "en": "rational",
    "es": "racional",
    "c": 5
  },
  {
    "en": "readily",
    "es": "fácilmente",
    "c": 5
  },
  {
    "en": "realization",
    "es": "realización",
    "c": 5
  },
  {
    "en": "realm",
    "es": "reino",
    "c": 5
  },
  {
    "en": "rear",
    "es": "trasero",
    "c": 5
  },
  {
    "en": "reasonably",
    "es": "razonablemente",
    "c": 5
  },
  {
    "en": "reasoning",
    "es": "razonamiento",
    "c": 5
  },
  {
    "en": "rebellion",
    "es": "rebelión",
    "c": 5
  },
  {
    "en": "rebuild",
    "es": "reconstruir",
    "c": 5
  },
  {
    "en": "receiver",
    "es": "receptor",
    "c": 5
  },
  {
    "en": "recession",
    "es": "recesión",
    "c": 5
  },
  {
    "en": "recipient",
    "es": "destinatario",
    "c": 5
  },
  {
    "en": "reconstruction",
    "es": "reconstrucción",
    "c": 5
  },
  {
    "en": "recount",
    "es": "relatar",
    "c": 5
  },
  {
    "en": "recovery",
    "es": "recuperación",
    "c": 5
  },
  {
    "en": "recruit",
    "es": "reclutar",
    "c": 5
  },
  {
    "en": "recruitment",
    "es": "reclutamiento",
    "c": 5
  },
  {
    "en": "referee",
    "es": "árbitro",
    "c": 5
  },
  {
    "en": "referendum",
    "es": "referéndum",
    "c": 5
  },
  {
    "en": "reflection",
    "es": "reflexión",
    "c": 5
  },
  {
    "en": "reform",
    "es": "reforma",
    "c": 5
  },
  {
    "en": "refuge",
    "es": "refugio",
    "c": 5
  },
  {
    "en": "refugee",
    "es": "refugiado",
    "c": 5
  },
  {
    "en": "regain",
    "es": "recuperar",
    "c": 5
  },
  {
    "en": "regardless",
    "es": "independientemente",
    "c": 5
  },
  {
    "en": "regime",
    "es": "régimen",
    "c": 5
  },
  {
    "en": "regulate",
    "es": "regular",
    "c": 5
  },
  {
    "en": "regulator",
    "es": "regulador",
    "c": 5
  },
  {
    "en": "regulatory",
    "es": "regulatorio",
    "c": 5
  },
  {
    "en": "rehabilitation",
    "es": "rehabilitación",
    "c": 5
  },
  {
    "en": "reign",
    "es": "reinado",
    "c": 5
  },
  {
    "en": "reinforce",
    "es": "reforzar",
    "c": 5
  },
  {
    "en": "rejection",
    "es": "rechazo",
    "c": 5
  },
  {
    "en": "relevance",
    "es": "relevancia",
    "c": 5
  },
  {
    "en": "reliability",
    "es": "confiabilidad",
    "c": 5
  },
  {
    "en": "relieve",
    "es": "aliviar",
    "c": 5
  },
  {
    "en": "relieved",
    "es": "aliviado",
    "c": 5
  },
  {
    "en": "reluctant",
    "es": "reticente",
    "c": 5
  },
  {
    "en": "remainder",
    "es": "resto",
    "c": 5
  },
  {
    "en": "remains",
    "es": "restos",
    "c": 5
  },
  {
    "en": "remarkably",
    "es": "notablemente",
    "c": 5
  },
  {
    "en": "remedy",
    "es": "remedio",
    "c": 5
  },
  {
    "en": "reminder",
    "es": "recordatorio",
    "c": 5
  },
  {
    "en": "removal",
    "es": "eliminación",
    "c": 5
  },
  {
    "en": "render",
    "es": "convertir",
    "c": 5
  },
  {
    "en": "renew",
    "es": "renovar",
    "c": 5
  },
  {
    "en": "renowned",
    "es": "renombrado",
    "c": 5
  },
  {
    "en": "rental",
    "es": "alquiler",
    "c": 5
  },
  {
    "en": "replacement",
    "es": "reemplazo",
    "c": 5
  },
  {
    "en": "reportedly",
    "es": "según se informa",
    "c": 5
  },
  {
    "en": "reporting",
    "es": "reportaje",
    "c": 5
  },
  {
    "en": "representation",
    "es": "representación",
    "c": 5
  },
  {
    "en": "reproduce",
    "es": "reproducir",
    "c": 5
  },
  {
    "en": "reproduction",
    "es": "reproducción",
    "c": 5
  },
  {
    "en": "republic",
    "es": "república",
    "c": 5
  },
  {
    "en": "resemble",
    "es": "parecerse",
    "c": 5
  },
  {
    "en": "reside",
    "es": "residir",
    "c": 5
  },
  {
    "en": "residence",
    "es": "residencia",
    "c": 5
  },
  {
    "en": "residential",
    "es": "residencial",
    "c": 5
  },
  {
    "en": "residue",
    "es": "residuo",
    "c": 5
  },
  {
    "en": "resign",
    "es": "renunciar",
    "c": 5
  },
  {
    "en": "resignation",
    "es": "renuncia",
    "c": 5
  },
  {
    "en": "resistance",
    "es": "resistencia",
    "c": 5
  },
  {
    "en": "resolution",
    "es": "resolución",
    "c": 5
  },
  {
    "en": "respective",
    "es": "respectivo",
    "c": 5
  },
  {
    "en": "respectively",
    "es": "respectivamente",
    "c": 5
  },
  {
    "en": "restoration",
    "es": "restauración",
    "c": 5
  },
  {
    "en": "restore",
    "es": "restaurar",
    "c": 5
  },
  {
    "en": "restraint",
    "es": "restricción",
    "c": 5
  },
  {
    "en": "restrict",
    "es": "restringir",
    "c": 5
  },
  {
    "en": "restriction",
    "es": "restricción",
    "c": 5
  },
  {
    "en": "resume",
    "es": "reanudar",
    "c": 5
  },
  {
    "en": "résumé",
    "es": "currículum",
    "c": 5
  },
  {
    "en": "retail",
    "es": "venta al por menor",
    "c": 5
  },
  {
    "en": "retirement",
    "es": "jubilación",
    "c": 5
  },
  {
    "en": "retreat",
    "es": "retiro",
    "c": 5
  },
  {
    "en": "retrieve",
    "es": "recuperar",
    "c": 5
  },
  {
    "en": "revelation",
    "es": "revelación",
    "c": 5
  },
  {
    "en": "revenge",
    "es": "venganza",
    "c": 5
  },
  {
    "en": "revenue",
    "es": "ingresos",
    "c": 5
  },
  {
    "en": "reverse",
    "es": "revertir",
    "c": 5
  },
  {
    "en": "revision",
    "es": "revisión",
    "c": 5
  },
  {
    "en": "revival",
    "es": "renacimiento",
    "c": 5
  },
  {
    "en": "revolutionary",
    "es": "revolucionario",
    "c": 5
  },
  {
    "en": "rhetoric",
    "es": "retórica",
    "c": 5
  },
  {
    "en": "rifle",
    "es": "rifle",
    "c": 5
  },
  {
    "en": "riot",
    "es": "disturbio",
    "c": 5
  },
  {
    "en": "rip",
    "es": "rasgar",
    "c": 5
  },
  {
    "en": "ritual",
    "es": "ritual",
    "c": 5
  },
  {
    "en": "rival",
    "es": "rival",
    "c": 5
  },
  {
    "en": "robust",
    "es": "robusto",
    "c": 5
  },
  {
    "en": "rocket",
    "es": "cohete",
    "c": 5
  },
  {
    "en": "rod",
    "es": "vara",
    "c": 5
  },
  {
    "en": "romance",
    "es": "romance",
    "c": 5
  },
  {
    "en": "rookie",
    "es": "novato",
    "c": 5
  },
  {
    "en": "roster",
    "es": "lista",
    "c": 5
  },
  {
    "en": "rotation",
    "es": "rotación",
    "c": 5
  },
  {
    "en": "roughly",
    "es": "aproximadamente",
    "c": 5
  },
  {
    "en": "ruling",
    "es": "fallo",
    "c": 5
  },
  {
    "en": "rumor",
    "es": "rumor",
    "c": 5
  },
  {
    "en": "sacred",
    "es": "sagrado",
    "c": 5
  },
  {
    "en": "sacrifice",
    "es": "sacrificio",
    "c": 5
  },
  {
    "en": "saint",
    "es": "santo",
    "c": 5
  },
  {
    "en": "sake",
    "es": "bien de",
    "c": 5
  },
  {
    "en": "sanction",
    "es": "sanción",
    "c": 5
  },
  {
    "en": "satisfaction",
    "es": "satisfacción",
    "c": 5
  },
  {
    "en": "scandal",
    "es": "escándalo",
    "c": 5
  },
  {
    "en": "scare",
    "es": "asustar",
    "c": 5
  },
  {
    "en": "scattered",
    "es": "disperso",
    "c": 5
  },
  {
    "en": "scenario",
    "es": "escenario",
    "c": 5
  },
  {
    "en": "scholar",
    "es": "erudito",
    "c": 5
  },
  {
    "en": "scholarship",
    "es": "beca",
    "c": 5
  },
  {
    "en": "scope",
    "es": "alcance",
    "c": 5
  },
  {
    "en": "screening",
    "es": "proyección",
    "c": 5
  },
  {
    "en": "screw",
    "es": "tornillo",
    "c": 5
  },
  {
    "en": "scrutiny",
    "es": "escrutinio",
    "c": 5
  },
  {
    "en": "seal",
    "es": "sellar / sello",
    "c": 5
  },
  {
    "en": "secondly",
    "es": "en segundo lugar",
    "c": 5
  },
  {
    "en": "seeker",
    "es": "buscador",
    "c": 5
  },
  {
    "en": "seemingly",
    "es": "aparentemente",
    "c": 5
  },
  {
    "en": "segment",
    "es": "segmento",
    "c": 5
  },
  {
    "en": "selective",
    "es": "selectivo",
    "c": 5
  },
  {
    "en": "seminar",
    "es": "seminario",
    "c": 5
  },
  {
    "en": "sensation",
    "es": "sensación",
    "c": 5
  },
  {
    "en": "sensitivity",
    "es": "sensibilidad",
    "c": 5
  },
  {
    "en": "sentiment",
    "es": "sentimiento",
    "c": 5
  },
  {
    "en": "separation",
    "es": "separación",
    "c": 5
  },
  {
    "en": "serial",
    "es": "serial",
    "c": 5
  },
  {
    "en": "settlement",
    "es": "asentamiento",
    "c": 5
  },
  {
    "en": "settler",
    "es": "colono",
    "c": 5
  },
  {
    "en": "setup",
    "es": "configuración",
    "c": 5
  },
  {
    "en": "severely",
    "es": "severamente",
    "c": 5
  },
  {
    "en": "sexuality",
    "es": "sexualidad",
    "c": 5
  },
  {
    "en": "sexy",
    "es": "sexy",
    "c": 5
  },
  {
    "en": "shaped",
    "es": "con forma de",
    "c": 5
  },
  {
    "en": "shareholder",
    "es": "accionista",
    "c": 5
  },
  {
    "en": "shatter",
    "es": "destrozar",
    "c": 5
  },
  {
    "en": "shed",
    "es": "verter",
    "c": 5
  },
  {
    "en": "shipping",
    "es": "envío",
    "c": 5
  },
  {
    "en": "shortage",
    "es": "escasez",
    "c": 5
  },
  {
    "en": "shortly",
    "es": "en breve",
    "c": 5
  },
  {
    "en": "short-term",
    "es": "a corto plazo",
    "c": 5
  },
  {
    "en": "shrink",
    "es": "encoger",
    "c": 5
  },
  {
    "en": "shrug",
    "es": "encogerse de hombros",
    "c": 5
  },
  {
    "en": "sibling",
    "es": "hermano/a",
    "c": 5
  },
  {
    "en": "sidewalk",
    "es": "acera",
    "c": 5
  },
  {
    "en": "sigh",
    "es": "suspirar",
    "c": 5
  },
  {
    "en": "simulate",
    "es": "simular",
    "c": 5
  },
  {
    "en": "simulation",
    "es": "simulación",
    "c": 5
  },
  {
    "en": "simultaneously",
    "es": "simultáneamente",
    "c": 5
  },
  {
    "en": "sin",
    "es": "pecado",
    "c": 5
  },
  {
    "en": "skeptical",
    "es": "escéptico",
    "c": 5
  },
  {
    "en": "sketch",
    "es": "boceto",
    "c": 5
  },
  {
    "en": "skip",
    "es": "saltarse",
    "c": 5
  },
  {
    "en": "skull",
    "es": "cráneo",
    "c": 5
  },
  {
    "en": "slam",
    "es": "golpear",
    "c": 5
  },
  {
    "en": "slash",
    "es": "cortar",
    "c": 5
  },
  {
    "en": "slavery",
    "es": "esclavitud",
    "c": 5
  },
  {
    "en": "slogan",
    "es": "eslogan",
    "c": 5
  },
  {
    "en": "slot",
    "es": "ranura",
    "c": 5
  },
  {
    "en": "smash",
    "es": "destrozar",
    "c": 5
  },
  {
    "en": "soak",
    "es": "empapar",
    "c": 5
  },
  {
    "en": "soar",
    "es": "elevarse",
    "c": 5
  },
  {
    "en": "so-called",
    "es": "llamado / supuesto",
    "c": 5
  },
  {
    "en": "socialist",
    "es": "socialista",
    "c": 5
  },
  {
    "en": "sole",
    "es": "único",
    "c": 5
  },
  {
    "en": "solely",
    "es": "únicamente",
    "c": 5
  },
  {
    "en": "solidarity",
    "es": "solidaridad",
    "c": 5
  },
  {
    "en": "sometime",
    "es": "en algún momento",
    "c": 5
  },
  {
    "en": "sophisticated",
    "es": "sofisticado",
    "c": 5
  },
  {
    "en": "sophomore",
    "es": "estudiante de segundo año",
    "c": 5
  },
  {
    "en": "sovereignty",
    "es": "soberanía",
    "c": 5
  },
  {
    "en": "spam",
    "es": "spam",
    "c": 5
  },
  {
    "en": "span",
    "es": "abarcar",
    "c": 5
  },
  {
    "en": "spark",
    "es": "chispa / desencadenar",
    "c": 5
  },
  {
    "en": "specialize",
    "es": "especializarse",
    "c": 5
  },
  {
    "en": "specialized",
    "es": "especializado",
    "c": 5
  },
  {
    "en": "specification",
    "es": "especificación",
    "c": 5
  },
  {
    "en": "specify",
    "es": "especificar",
    "c": 5
  },
  {
    "en": "specimen",
    "es": "espécimen",
    "c": 5
  },
  {
    "en": "spectacle",
    "es": "espectáculo",
    "c": 5
  },
  {
    "en": "spectator",
    "es": "espectador",
    "c": 5
  },
  {
    "en": "spectrum",
    "es": "espectro",
    "c": 5
  },
  {
    "en": "speculate",
    "es": "especular",
    "c": 5
  },
  {
    "en": "speculation",
    "es": "especulación",
    "c": 5
  },
  {
    "en": "sphere",
    "es": "esfera",
    "c": 5
  },
  {
    "en": "spice",
    "es": "especia",
    "c": 5
  },
  {
    "en": "spin",
    "es": "girar",
    "c": 5
  },
  {
    "en": "spine",
    "es": "columna vertebral",
    "c": 5
  },
  {
    "en": "spite",
    "es": "a pesar de",
    "c": 5
  },
  {
    "en": "spokesman",
    "es": "portavoz",
    "c": 5
  },
  {
    "en": "spokesperson",
    "es": "portavoz",
    "c": 5
  },
  {
    "en": "spokeswoman",
    "es": "portavoz mujer",
    "c": 5
  },
  {
    "en": "sponsorship",
    "es": "patrocinio",
    "c": 5
  },
  {
    "en": "spotlight",
    "es": "foco de atención",
    "c": 5
  },
  {
    "en": "spouse",
    "es": "cónyuge",
    "c": 5
  },
  {
    "en": "squad",
    "es": "equipo",
    "c": 5
  },
  {
    "en": "stability",
    "es": "estabilidad",
    "c": 5
  },
  {
    "en": "stabilize",
    "es": "estabilizar",
    "c": 5
  },
  {
    "en": "stake",
    "es": "apuesta",
    "c": 5
  },
  {
    "en": "stance",
    "es": "postura",
    "c": 5
  },
  {
    "en": "standing",
    "es": "permanente",
    "c": 5
  },
  {
    "en": "stark",
    "es": "crudo",
    "c": 5
  },
  {
    "en": "starve",
    "es": "morir de hambre",
    "c": 5
  },
  {
    "en": "statistical",
    "es": "estadístico",
    "c": 5
  },
  {
    "en": "steadily",
    "es": "de manera constante",
    "c": 5
  },
  {
    "en": "stem",
    "es": "tallo / derivarse de",
    "c": 5
  },
  {
    "en": "stereotype",
    "es": "estereotipo",
    "c": 5
  },
  {
    "en": "stimulate",
    "es": "estimular",
    "c": 5
  },
  {
    "en": "stimulus",
    "es": "estímulo",
    "c": 5
  },
  {
    "en": "storage",
    "es": "almacenamiento",
    "c": 5
  },
  {
    "en": "straightforward",
    "es": "directo",
    "c": 5
  },
  {
    "en": "strain",
    "es": "tensión",
    "c": 5
  },
  {
    "en": "strand",
    "es": "hilo / hebra",
    "c": 5
  },
  {
    "en": "strategic",
    "es": "estratégico",
    "c": 5
  },
  {
    "en": "strengthen",
    "es": "fortalecer",
    "c": 5
  },
  {
    "en": "strictly",
    "es": "estrictamente",
    "c": 5
  },
  {
    "en": "striking",
    "es": "llamativo",
    "c": 5
  },
  {
    "en": "strip",
    "es": "tira / quitarse",
    "c": 5
  },
  {
    "en": "strive",
    "es": "esforzarse",
    "c": 5
  },
  {
    "en": "stroke",
    "es": "ictus / trazo",
    "c": 5
  },
  {
    "en": "structural",
    "es": "estructural",
    "c": 5
  },
  {
    "en": "stumble",
    "es": "tropezar",
    "c": 5
  },
  {
    "en": "stun",
    "es": "aturdir",
    "c": 5
  },
  {
    "en": "submission",
    "es": "sumisión",
    "c": 5
  },
  {
    "en": "subscriber",
    "es": "suscriptor",
    "c": 5
  },
  {
    "en": "subscription",
    "es": "suscripción",
    "c": 5
  },
  {
    "en": "subsequent",
    "es": "posterior",
    "c": 5
  },
  {
    "en": "subsequently",
    "es": "posteriormente",
    "c": 5
  },
  {
    "en": "subsidy",
    "es": "subsidio",
    "c": 5
  },
  {
    "en": "substantial",
    "es": "sustancial",
    "c": 5
  },
  {
    "en": "substantially",
    "es": "sustancialmente",
    "c": 5
  },
  {
    "en": "substitute",
    "es": "sustituto",
    "c": 5
  },
  {
    "en": "substitution",
    "es": "sustitución",
    "c": 5
  },
  {
    "en": "subtle",
    "es": "sutil",
    "c": 5
  },
  {
    "en": "suburb",
    "es": "suburbio",
    "c": 5
  },
  {
    "en": "suburban",
    "es": "suburbano",
    "c": 5
  },
  {
    "en": "succession",
    "es": "sucesión",
    "c": 5
  },
  {
    "en": "successive",
    "es": "sucesivo",
    "c": 5
  },
  {
    "en": "successor",
    "es": "sucesor",
    "c": 5
  },
  {
    "en": "suck",
    "es": "chupar",
    "c": 5
  },
  {
    "en": "sue",
    "es": "demandar",
    "c": 5
  },
  {
    "en": "suffering",
    "es": "sufrimiento",
    "c": 5
  },
  {
    "en": "sufficient",
    "es": "suficiente",
    "c": 5
  },
  {
    "en": "sufficiently",
    "es": "suficientemente",
    "c": 5
  },
  {
    "en": "suicide",
    "es": "suicidio",
    "c": 5
  },
  {
    "en": "suite",
    "es": "suite",
    "c": 5
  },
  {
    "en": "summit",
    "es": "cumbre",
    "c": 5
  },
  {
    "en": "super",
    "es": "súper",
    "c": 5
  },
  {
    "en": "superintendent",
    "es": "superintendente",
    "c": 5
  },
  {
    "en": "superior",
    "es": "superior",
    "c": 5
  },
  {
    "en": "supervise",
    "es": "supervisar",
    "c": 5
  },
  {
    "en": "supervision",
    "es": "supervisión",
    "c": 5
  },
  {
    "en": "supervisor",
    "es": "supervisor",
    "c": 5
  },
  {
    "en": "supplement",
    "es": "suplemento",
    "c": 5
  },
  {
    "en": "suppress",
    "es": "suprimir",
    "c": 5
  },
  {
    "en": "supreme",
    "es": "supremo",
    "c": 5
  },
  {
    "en": "surge",
    "es": "aumento repentino",
    "c": 5
  },
  {
    "en": "surgeon",
    "es": "cirujano",
    "c": 5
  },
  {
    "en": "surgical",
    "es": "quirúrgico",
    "c": 5
  },
  {
    "en": "surplus",
    "es": "excedente",
    "c": 5
  },
  {
    "en": "surrender",
    "es": "rendirse",
    "c": 5
  },
  {
    "en": "surveillance",
    "es": "vigilancia",
    "c": 5
  },
  {
    "en": "survival",
    "es": "supervivencia",
    "c": 5
  },
  {
    "en": "survivor",
    "es": "sobreviviente",
    "c": 5
  },
  {
    "en": "suspend",
    "es": "suspender",
    "c": 5
  },
  {
    "en": "suspension",
    "es": "suspensión",
    "c": 5
  },
  {
    "en": "suspicion",
    "es": "sospecha",
    "c": 5
  },
  {
    "en": "sustain",
    "es": "sostener",
    "c": 5
  },
  {
    "en": "swallow",
    "es": "tragar",
    "c": 5
  },
  {
    "en": "symbolic",
    "es": "simbólico",
    "c": 5
  },
  {
    "en": "sympathetic",
    "es": "comprensivo",
    "c": 5
  },
  {
    "en": "syndrome",
    "es": "síndrome",
    "c": 5
  },
  {
    "en": "synthesis",
    "es": "síntesis",
    "c": 5
  },
  {
    "en": "systematic",
    "es": "sistemático",
    "c": 5
  },
  {
    "en": "tackle",
    "es": "abordar",
    "c": 5
  },
  {
    "en": "tactic",
    "es": "táctica",
    "c": 5
  },
  {
    "en": "tactical",
    "es": "táctico",
    "c": 5
  },
  {
    "en": "tag",
    "es": "etiqueta",
    "c": 5
  },
  {
    "en": "taxpayer",
    "es": "contribuyente",
    "c": 5
  },
  {
    "en": "technological",
    "es": "tecnológico",
    "c": 5
  },
  {
    "en": "teen",
    "es": "adolescente",
    "c": 5
  },
  {
    "en": "temporarily",
    "es": "temporalmente",
    "c": 5
  },
  {
    "en": "tenant",
    "es": "inquilino",
    "c": 5
  },
  {
    "en": "tendency",
    "es": "tendencia",
    "c": 5
  },
  {
    "en": "tender",
    "es": "tierno",
    "c": 5
  },
  {
    "en": "tension",
    "es": "tensión",
    "c": 5
  },
  {
    "en": "tenure",
    "es": "tenencia",
    "c": 5
  },
  {
    "en": "terms",
    "es": "términos",
    "c": 5
  },
  {
    "en": "terrain",
    "es": "terreno",
    "c": 5
  },
  {
    "en": "terribly",
    "es": "terriblemente",
    "c": 5
  },
  {
    "en": "terrify",
    "es": "aterrorizar",
    "c": 5
  },
  {
    "en": "territory",
    "es": "territorio",
    "c": 5
  },
  {
    "en": "terror",
    "es": "terror",
    "c": 5
  },
  {
    "en": "terrorism",
    "es": "terrorismo",
    "c": 5
  },
  {
    "en": "terrorist",
    "es": "terrorista",
    "c": 5
  },
  {
    "en": "testify",
    "es": "testificar",
    "c": 5
  },
  {
    "en": "testimony",
    "es": "testimonio",
    "c": 5
  },
  {
    "en": "testing",
    "es": "pruebas",
    "c": 5
  },
  {
    "en": "textbook",
    "es": "libro de texto",
    "c": 5
  },
  {
    "en": "thankfully",
    "es": "afortunadamente",
    "c": 5
  },
  {
    "en": "theatrical",
    "es": "teatral",
    "c": 5
  },
  {
    "en": "theoretical",
    "es": "teórico",
    "c": 5
  },
  {
    "en": "therapist",
    "es": "terapeuta",
    "c": 5
  },
  {
    "en": "thereafter",
    "es": "después de eso",
    "c": 5
  },
  {
    "en": "thereby",
    "es": "por ello",
    "c": 5
  },
  {
    "en": "thorough",
    "es": "exhaustivo",
    "c": 5
  },
  {
    "en": "thoroughly",
    "es": "exhaustivamente",
    "c": 5
  },
  {
    "en": "thoughtful",
    "es": "reflexivo",
    "c": 5
  },
  {
    "en": "thought-provoking",
    "es": "que provoca reflexión",
    "c": 5
  },
  {
    "en": "threshold",
    "es": "umbral",
    "c": 5
  },
  {
    "en": "thrive",
    "es": "prosperar",
    "c": 5
  },
  {
    "en": "tide",
    "es": "marea",
    "c": 5
  },
  {
    "en": "tighten",
    "es": "apretar",
    "c": 5
  },
  {
    "en": "timely",
    "es": "oportuno",
    "c": 5
  },
  {
    "en": "timing",
    "es": "tiempo / sincronización",
    "c": 5
  },
  {
    "en": "tissue",
    "es": "tejido",
    "c": 5
  },
  {
    "en": "tolerate",
    "es": "tolerar",
    "c": 5
  },
  {
    "en": "torture",
    "es": "tortura",
    "c": 5
  },
  {
    "en": "toss",
    "es": "lanzar",
    "c": 5
  },
  {
    "en": "tournament",
    "es": "torneo",
    "c": 5
  },
  {
    "en": "toxic",
    "es": "tóxico",
    "c": 5
  },
  {
    "en": "trademark",
    "es": "marca registrada",
    "c": 5
  },
  {
    "en": "trading",
    "es": "comercio",
    "c": 5
  },
  {
    "en": "tragic",
    "es": "trágico",
    "c": 5
  },
  {
    "en": "trail",
    "es": "sendero",
    "c": 5
  },
  {
    "en": "trailer",
    "es": "tráiler",
    "c": 5
  },
  {
    "en": "trait",
    "es": "rasgo",
    "c": 5
  },
  {
    "en": "transaction",
    "es": "transacción",
    "c": 5
  },
  {
    "en": "transcript",
    "es": "transcripción",
    "c": 5
  },
  {
    "en": "transformation",
    "es": "transformación",
    "c": 5
  },
  {
    "en": "transit",
    "es": "tránsito",
    "c": 5
  },
  {
    "en": "transmission",
    "es": "transmisión",
    "c": 5
  },
  {
    "en": "transmit",
    "es": "transmitir",
    "c": 5
  },
  {
    "en": "transparency",
    "es": "transparencia",
    "c": 5
  },
  {
    "en": "transparent",
    "es": "transparente",
    "c": 5
  },
  {
    "en": "trap",
    "es": "trampa",
    "c": 5
  },
  {
    "en": "trauma",
    "es": "trauma",
    "c": 5
  },
  {
    "en": "treasure",
    "es": "tesoro",
    "c": 5
  },
  {
    "en": "treaty",
    "es": "tratado",
    "c": 5
  },
  {
    "en": "tremendous",
    "es": "tremendo",
    "c": 5
  },
  {
    "en": "tribal",
    "es": "tribal",
    "c": 5
  },
  {
    "en": "tribe",
    "es": "tribu",
    "c": 5
  },
  {
    "en": "tribute",
    "es": "tributo",
    "c": 5
  },
  {
    "en": "trillion",
    "es": "billón",
    "c": 5
  },
  {
    "en": "trio",
    "es": "trío",
    "c": 5
  },
  {
    "en": "triumph",
    "es": "triunfo",
    "c": 5
  },
  {
    "en": "troop",
    "es": "tropa",
    "c": 5
  },
  {
    "en": "trophy",
    "es": "trofeo",
    "c": 5
  },
  {
    "en": "troubled",
    "es": "angustiado",
    "c": 5
  },
  {
    "en": "trustee",
    "es": "fideicomisario",
    "c": 5
  },
  {
    "en": "tsunami",
    "es": "tsunami",
    "c": 5
  },
  {
    "en": "tuition",
    "es": "matrícula",
    "c": 5
  },
  {
    "en": "tumor",
    "es": "tumor",
    "c": 5
  },
  {
    "en": "turnout",
    "es": "participación",
    "c": 5
  },
  {
    "en": "turnover",
    "es": "rotación",
    "c": 5
  },
  {
    "en": "twist",
    "es": "torcer",
    "c": 5
  },
  {
    "en": "unacceptable",
    "es": "inaceptable",
    "c": 5
  },
  {
    "en": "uncertainty",
    "es": "incertidumbre",
    "c": 5
  },
  {
    "en": "unconstitutional",
    "es": "inconstitucional",
    "c": 5
  },
  {
    "en": "undergraduate",
    "es": "universitario",
    "c": 5
  },
  {
    "en": "underlying",
    "es": "subyacente",
    "c": 5
  },
  {
    "en": "undermine",
    "es": "socavar",
    "c": 5
  },
  {
    "en": "undertake",
    "es": "emprender",
    "c": 5
  },
  {
    "en": "unfold",
    "es": "desarrollarse",
    "c": 5
  },
  {
    "en": "unfortunate",
    "es": "desafortunado",
    "c": 5
  },
  {
    "en": "unify",
    "es": "unificar",
    "c": 5
  },
  {
    "en": "unite",
    "es": "unir",
    "c": 5
  },
  {
    "en": "unprecedented",
    "es": "sin precedentes",
    "c": 5
  },
  {
    "en": "unveil",
    "es": "revelar",
    "c": 5
  },
  {
    "en": "upcoming",
    "es": "próximo",
    "c": 5
  },
  {
    "en": "upgrade",
    "es": "actualizar",
    "c": 5
  },
  {
    "en": "uphold",
    "es": "mantener",
    "c": 5
  },
  {
    "en": "usage",
    "es": "uso",
    "c": 5
  },
  {
    "en": "useless",
    "es": "inútil",
    "c": 5
  },
  {
    "en": "utterly",
    "es": "completamente",
    "c": 5
  },
  {
    "en": "vacuum",
    "es": "vacío",
    "c": 5
  },
  {
    "en": "valid",
    "es": "válido",
    "c": 5
  },
  {
    "en": "validity",
    "es": "validez",
    "c": 5
  },
  {
    "en": "vanish",
    "es": "desaparecer",
    "c": 5
  },
  {
    "en": "venture",
    "es": "aventura",
    "c": 5
  },
  {
    "en": "verbal",
    "es": "verbal",
    "c": 5
  },
  {
    "en": "verdict",
    "es": "veredicto",
    "c": 5
  },
  {
    "en": "verify",
    "es": "verificar",
    "c": 5
  },
  {
    "en": "verse",
    "es": "verso",
    "c": 5
  },
  {
    "en": "versus",
    "es": "versus",
    "c": 5
  },
  {
    "en": "vertical",
    "es": "vertical",
    "c": 5
  },
  {
    "en": "vessel",
    "es": "embarcación",
    "c": 5
  },
  {
    "en": "veteran",
    "es": "veterano",
    "c": 5
  },
  {
    "en": "viable",
    "es": "viable",
    "c": 5
  },
  {
    "en": "vibrant",
    "es": "vibrante",
    "c": 5
  },
  {
    "en": "vice",
    "es": "vicio",
    "c": 5
  },
  {
    "en": "vicious",
    "es": "vicioso",
    "c": 5
  },
  {
    "en": "viewpoint",
    "es": "punto de vista",
    "c": 5
  },
  {
    "en": "violate",
    "es": "violar",
    "c": 5
  },
  {
    "en": "violation",
    "es": "violación",
    "c": 5
  },
  {
    "en": "virtue",
    "es": "virtud",
    "c": 5
  },
  {
    "en": "visible",
    "es": "visible",
    "c": 5
  },
  {
    "en": "vocal",
    "es": "vocal",
    "c": 5
  },
  {
    "en": "voluntary",
    "es": "voluntario",
    "c": 5
  },
  {
    "en": "voting",
    "es": "votación",
    "c": 5
  },
  {
    "en": "vow",
    "es": "jurar",
    "c": 5
  },
  {
    "en": "vulnerability",
    "es": "vulnerabilidad",
    "c": 5
  },
  {
    "en": "vulnerable",
    "es": "vulnerable",
    "c": 5
  },
  {
    "en": "wander",
    "es": "vagar",
    "c": 5
  },
  {
    "en": "warehouse",
    "es": "almacén",
    "c": 5
  },
  {
    "en": "warfare",
    "es": "guerra",
    "c": 5
  },
  {
    "en": "warming",
    "es": "calentamiento",
    "c": 5
  },
  {
    "en": "warrant",
    "es": "garantía / justificar",
    "c": 5
  },
  {
    "en": "warrior",
    "es": "guerrero",
    "c": 5
  },
  {
    "en": "weaken",
    "es": "debilitar",
    "c": 5
  },
  {
    "en": "weave",
    "es": "tejer",
    "c": 5
  },
  {
    "en": "weed",
    "es": "maleza",
    "c": 5
  },
  {
    "en": "wheat",
    "es": "trigo",
    "c": 5
  },
  {
    "en": "whereby",
    "es": "por el cual",
    "c": 5
  },
  {
    "en": "whip",
    "es": "látigo",
    "c": 5
  },
  {
    "en": "wholly",
    "es": "totalmente",
    "c": 5
  },
  {
    "en": "widen",
    "es": "ampliar",
    "c": 5
  },
  {
    "en": "widespread",
    "es": "generalizado",
    "c": 5
  },
  {
    "en": "willingness",
    "es": "disposición",
    "c": 5
  },
  {
    "en": "wipe",
    "es": "limpiar",
    "c": 5
  },
  {
    "en": "wisdom",
    "es": "sabiduría",
    "c": 5
  },
  {
    "en": "wit",
    "es": "ingenio",
    "c": 5
  },
  {
    "en": "withdraw",
    "es": "retirar",
    "c": 5
  },
  {
    "en": "withdrawal",
    "es": "retiro",
    "c": 5
  },
  {
    "en": "wolf",
    "es": "lobo",
    "c": 5
  },
  {
    "en": "workforce",
    "es": "fuerza laboral",
    "c": 5
  },
  {
    "en": "workout",
    "es": "entrenamiento",
    "c": 5
  },
  {
    "en": "workplace",
    "es": "lugar de trabajo",
    "c": 5
  },
  {
    "en": "workshop",
    "es": "taller",
    "c": 5
  },
  {
    "en": "worm",
    "es": "gusano",
    "c": 5
  },
  {
    "en": "worthwhile",
    "es": "que vale la pena",
    "c": 5
  },
  {
    "en": "worthy",
    "es": "digno",
    "c": 5
  },
  {
    "en": "yell",
    "es": "gritar",
    "c": 5
  },
  {
    "en": "yield",
    "es": "ceder / rendimiento",
    "c": 5
  },
  {
    "en": "percent",
    "es": "por ciento",
    "c": 5
  },
  {
    "en": "journal",
    "es": "revista académica, diario",
    "c": 5
  },
  {
    "en": "estate",
    "es": "propiedad, patrimonio",
    "c": 5
  },
  {
    "en": "nevertheless",
    "es": "sin embargo, no obstante",
    "c": 5
  },
  {
    "en": "converse",
    "es": "conversar, lo contrario",
    "c": 5
  }
];
