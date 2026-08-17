// Тексты лежат в json, а сам json собирает i18next-cli из вызовов t()
// (`make i18n-extract`, настройки — i18next.config.js). Здесь он пока пустой:
// ключи появятся вместе с первым t() в коде чата.
import ru from "./ru/translation.json";

export default {
  ru: { translation: ru },
};
