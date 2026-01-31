import { ui, defaultLang } from './ui';

export function getLangFromBrowser(navLang: string) {
    const lang = navLang.split('-')[0];
    if(lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]){
        return ui[lang][key] || ui[defaultLang][key];
    }
}