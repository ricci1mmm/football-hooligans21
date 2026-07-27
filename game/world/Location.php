<?php

namespace Game\World;

class Location
{
    public string $name;
    public string $type;
    public array $activities = [];

    public function __construct(string $name, string $type)
    {
        $this->name = $name;
        $this->type = $type;
    }

    public function addActivity(string $activity): void
    {
        $this->activities[] = $activity;
    }
}
