import { describe, expect, test, vi } from "vitest";
import { renderToString } from "react-dom/server";

import init from "../src/init.jsx";

// Заготовку копирует студент, а проверка проекта входит в приложение через
// init: зовёт его со своим сокетом и рендерит то, что он вернул. Тест повторяет
// тот же путь, поэтому сломанный контракт виден здесь, а не в репозитории
// студента, где он выглядит как ошибка студента.
describe("точка входа", () => {
  test("init принимает сокет и возвращает разметку", async () => {
    const socket = { on: vi.fn() };

    const markup = renderToString(await init(socket));

    expect(markup).toContain("Hexlet Chat");
    // Подписка на события проверяется затем, что сокет уже был параметром,
    // который init игнорировал: снаружи это выглядело работающим.
    expect(socket.on).toHaveBeenCalled();
  });
});
