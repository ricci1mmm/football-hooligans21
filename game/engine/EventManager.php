<?php

namespace Game\Engine;

use Game\World\Event;

class EventManager
{
    public array $events = [];

    public function generateDailyEvent(): Event
    {
        $events = [
            [
                'title' => 'Ночное дерби',
                'description' => 'Сегодня возле стадиона собираются фанаты.',
                'reward' => 10
            ],
            [
                'title' => 'Новый баннер',
                'description' => 'На рынке появился редкий предмет.',
                'reward' => 20
            ],
            [
                'title' => 'Полицейский рейд',
                'description' => 'В городе повышена активность полиции.',
                'reward' => 5
            ]
        ];

        $event = $events[array_rand($events)];
        return new Event(
            $event['title'],
            $event['description'],
            $event['reward']
        );
    }
}
