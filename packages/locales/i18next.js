import {
    initReactI18next,
} from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation'];
const supportedLngs = ['en', 'vi'];

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // debug: true,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        defaultNS: 'translation',
        ns,
        supportedLngs,
    });

supportedLngs.forEach((lang) => {
    ns.forEach((n) => {
        i18n.addResourceBundle(
            lang,
            n,
            import(`./${lang}/${n}.json`)
        );
    });
});

export {
    i18n,
    supportedLngs
}