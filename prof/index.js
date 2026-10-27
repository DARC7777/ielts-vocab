// ══════════════════════════════════════════════════════════════════════════
// INGLÉS PARA TU PROFESIÓN — lista de familias.
// El vocabulario de cada familia está en prof/<id>.js y la app lo carga solo cuando
// se abre esa familia. n = número de entradas: lo actualiza `node tools/check-prof.js`.
// ══════════════════════════════════════════════════════════════════════════
const PROF_FAMILIES = [
  { id: 'business', icon: '📊', n: 2004, en: 'Business, Management & Strategy', es: 'Negocios, gestión y estrategia', jobs: 'Business Analyst, Management Consultant, Strategy Manager, Operations Manager, Project Manager' },
  { id: 'sales', icon: '🤝', n: 2003, en: 'Sales, Marketing & Negotiation', es: 'Ventas, marketing y negociación', jobs: 'Sales Executive, Business Development Manager, Marketing Specialist, Account Manager, Negotiator' },
  { id: 'finance', icon: '💰', n: 2128, en: 'Finance, Banking & Accounting', es: 'Finanzas, banca y contabilidad', jobs: 'Financial Analyst, Investment Banker, Accountant, Auditor, Risk Analyst, Actuary' },
  { id: 'logistics', icon: '🚚', n: 2007, en: 'Logistics, Supply Chain & Procurement', es: 'Logística, cadena de suministro y compras', jobs: 'Supply Chain Manager, Logistics Analyst, Procurement Specialist, Freight Forwarder, Demand Planner' },
  { id: 'agriculture', icon: '🌾', n: 2006, en: 'Agriculture, Agribusiness & Food Production', es: 'Agricultura, agronegocios y producción de alimentos', jobs: 'Agronomist, Agricultural Engineer, Farm Manager, Agribusiness Analyst, Precision Agriculture Specialist' },
  { id: 'biotech', icon: '🧬', n: 2000, en: 'Biotechnology, Life Sciences & Pharmaceuticals', es: 'Biotecnología, ciencias de la vida y farmacéutica', jobs: 'Biotechnologist, Bioprocess Engineer, Biomedical Scientist, Pharmaceutical Researcher, Clinical Research Associate' },
  { id: 'healthcare', icon: '🩺', n: 2007, en: 'Healthcare & Medical Professions', es: 'Salud y profesiones médicas', jobs: 'Physician, Specialist Nurse, Physiotherapist, Pharmacist, Medical Laboratory Scientist' },
  { id: 'engineering', icon: '⚙️', n: 2006, en: 'Engineering, Manufacturing & Quality', es: 'Ingeniería, manufactura y calidad', jobs: 'Industrial Engineer, Mechanical Engineer, Manufacturing Engineer, Quality Engineer, Process Engineer' },
  { id: 'energy', icon: '⚡', n: 2002, en: 'Energy, Environment & Sustainability', es: 'Energía, medio ambiente y sostenibilidad', jobs: 'Renewable Energy Engineer, Environmental Consultant, Energy Analyst, Sustainability Manager, Power Systems Engineer' },
  { id: 'construction', icon: '🏗️', n: 2000, en: 'Construction, Architecture & Infrastructure', es: 'Construcción, arquitectura e infraestructura', jobs: 'Civil Engineer, Architect, Construction Manager, Quantity Surveyor, Structural Engineer' },
  { id: 'it', icon: '💻', n: 2002, en: 'Information Technology & Software', es: 'Tecnología de la información y software', jobs: 'Software Engineer, Cloud Engineer, Cybersecurity Specialist, Systems Administrator, Solutions Architect' },
  { id: 'data', icon: '🤖', n: 2000, en: 'Data, Artificial Intelligence & Machine Learning', es: 'Datos, inteligencia artificial y machine learning', jobs: 'Data Scientist, Data Engineer, AI Engineer, ML Engineer, Quantitative Researcher' },
  { id: 'research', icon: '🔬', n: 2002, en: 'Research, Science & Laboratory', es: 'Investigación, ciencia y laboratorio', jobs: 'Research Scientist, Chemist, Physicist, Statistician, Laboratory Technician' },
  { id: 'legal', icon: '⚖️', n: 2000, en: 'Legal, Compliance & International Trade', es: 'Derecho, cumplimiento y comercio internacional', jobs: 'Lawyer, Compliance Officer, Contract Manager, International Trade Specialist, Customs Compliance Specialist' },
  { id: 'hr', icon: '👥', n: 2002, en: 'Human Resources, Education & Communication', es: 'Recursos humanos, educación y comunicación', jobs: 'HR Specialist, Recruiter, Corporate Trainer, Teacher, Technical Writer, Communications Specialist' },
];
