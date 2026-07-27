<?php

namespace Game\World;

class Event
{
    public string $title;
    public string $description;
    public int $reward;

    public function __construct(string $title, string $description, int $reward = 0)
    {
        $this->title = $title;
        $this->description = $description;
        $this->reward = $reward;
    }
}
