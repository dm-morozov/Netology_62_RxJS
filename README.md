# Домашнее задание к занятию "RxJS"

### Статус проекта
[![Build status](https://ci.appveyor.com/api/projects/status/r5ce93k5693307wb?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-62-rxjs)
![CI](https://github.com/dm-morozov/Netology_62_RxJS/actions/workflows/web.yaml/badge.svg)
![Netology](https://img.shields.io/badge/TypeScript-WebPack-blue)

## Описание проекта

Этот проект создан в рамках домашнего задания к занятию "RxJS" курса Netology. Основная цель — реализация системы обмена сообщениями, аналогичной email, с использованием библиотеки RxJS для периодического опроса сервера о новых непрочитанных сообщениях. Проект выполнен с использованием TypeScript, Webpack и библиотеки `@faker-js/faker` для эмуляции серверной части.

[Ссылка на проект на GitHub Pages](https://dm-morozov.github.io/Netology_62_RxJS/)

### Задача 6: Polling

**Легенда**: Разрабатывается корпоративная система обмена сообщениями. Необходимо реализовать клиентский виджет, который периодически опрашивает сервер о новых непрочитанных сообщениях и отображает их в таблице.

**Особенности реализации**:
- **Серверная часть**: Эмуляция REST endpoint `/messages/unread` с использованием библиотеки `@faker-js/faker` для генерации случайных данных.
- **Клиентская часть**:
  - Используется RxJS для периодического опроса (оператор `interval`).
  - Запросы к серверу эмулируются с помощью `ServerMock`.
  - Новые сообщения добавляются в начало таблицы (сверху), существующие не удаляются.
  - Поле `subject` обрезается до 15 символов с добавлением многоточия (`...`), если длина превышает 15 символов.
  - Поле `received` (timestamp) преобразуется в формат `ЧЧ:ММ ДД.ММ.ГГГГ`.
  - Ошибки сервера обрабатываются, возвращая пустой массив сообщений.
- **Архитектура**: Проект реализован в стиле ООП с разделением на слои:
  - `MessagesApi`: слой взаимодействия с API.
  - `MessagesService`: бизнес-логика с обработкой данных и RxJS.
  - `MessagesWidget`: UI-компонент для отображения таблицы сообщений.
- **Технологии**: TypeScript, RxJS, Webpack, CSS.

## Структура проекта

```
Netology_62_RxJS/
├── .github/                    # Настройки GitHub Actions для деплоя
├── src/                        # Исходный код
│   ├── css/                    # Стили
│   │   └── style.css           # Основные стили для приложения
│   ├── ts/                     # TypeScript код
│   │   ├── MessagesApi.ts      # Класс для эмуляции API-запросов
│   │   ├── MessagesService.ts  # Класс для обработки данных и RxJS-логики
│   │   ├── MessagesWidget.ts   # Класс для UI-компонента (таблица сообщений)
│   │   ├── models.ts           # Интерфейсы данных
│   │   ├── server-mock.ts      # Эмуляция сервера с помощью faker
│   │   └── index.ts            # Точка входа
│   └── index.html              # HTML-страница
├── .appveyor.yml               # Конфигурация CI для AppVeyor
├── tsconfig.json               # Конфигурация TypeScript
├── webpack.config.mjs          # Конфигурация Webpack
├── package.json                # Зависимости и скрипты
└── README.md                   # Документация проекта
```

## Используемые технологии
- **TypeScript**: Для типизации и улучшения читаемости кода.
- **RxJS**: Для реализации реактивного программирования и периодического опроса.
- **@faker-js/faker**: Для генерации фейковых данных.
- **Webpack**: Для сборки проекта.
- **CSS**: Для стилизации таблицы.

## 📧 Контакты

Если возникнут вопросы, пишите:

* ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
* ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
* ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)



