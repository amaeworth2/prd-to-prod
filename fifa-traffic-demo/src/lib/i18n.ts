import type { Language } from '@/types'

export const languages: Language[] = ['en', 'es', 'de', 'ko']

export const defaultLanguage: Language = 'en'

export const translations = {
  en: {
    appTitle: 'FIFA Traffic Navigator',
    welcome: 'Welcome',
    events: 'Events',
    map: 'Map',
    transit: 'Transit',
    schedule: 'Schedule',
  },
  es: {
    appTitle: 'Navegador de Tráfico FIFA',
    welcome: 'Bienvenido',
    events: 'Eventos',
    map: 'Mapa',
    transit: 'Tránsito',
    schedule: 'Horario',
  },
  de: {
    appTitle: 'FIFA-Verkehrsnavigator',
    welcome: 'Willkommen',
    events: 'Veranstaltungen',
    map: 'Karte',
    transit: 'Transit',
    schedule: 'Zeitplan',
  },
  ko: {
    appTitle: 'FIFA 교통 네비게이터',
    welcome: '환영합니다',
    events: '이벤트',
    map: '지도',
    transit: '대중교통',
    schedule: '일정',
  },
}

export function getTranslations(lang: Language) {
  return translations[lang] || translations[defaultLanguage]
}
