<?php

namespace Game\Engine;

use Game\World\City;

class GameEngine
{
    public City $city;
    public string $weather = 'clear';
    public string $timeOfDay = 'day';

    public function __construct(City $city)
    {
        $this->city = $city;
    }

    public function setTime(string $time): void
    {
        $this->timeOfDay = $time;
    }

    public function setWeather(string $weather): void
    {
        $this->weather = $weather;
    }

    public function getWorldState(): array
    {
        return [
            'time' => $this->timeOfDay,
            'weather' => $this->weather,
            'districts' => count($this->city->getDistricts())
        ];
    }
}
