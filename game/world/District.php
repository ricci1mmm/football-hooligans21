<?php

namespace Game\World;

class District
{
    public string $name;
    public string $description;
    public int $influence = 0;

    public array $features = [];

    public function __construct(string $name, string $description)
    {
        $this->name = $name;
        $this->description = $description;
    }

    public function addInfluence(int $value): void
    {
        $this->influence += $value;
    }
}
