import { defineConfig } from "i18next-cli";

// Ключи вынимаются из кода, а не поддерживаются руками: пропущенный перевод
// иначе виден только тогда, когда на него наткнулся пользователь. Заготовка
// отдаёт эту настройку сразу, чтобы первый же t() в чате попал в переводы.
//
// Типы не генерируются: пакет на JS, проверять ключи компилятором нечем.
export default defineConfig({
  locales: ["ru"],
  extract: {
    input: ["src/**/*.{js,jsx}"],
    output: "src/locales/{{language}}/{{namespace}}.json",
    defaultNS: "translation",
    primaryLanguage: "ru",
  },
});
