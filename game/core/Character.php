<?php

namespace Game\Core;

class Character
{
    public int $id;
    public string $name;
    public int $level = 1;
    public int $experience = 0;

    public array $stats = [
        'strength' => 1,
        'endurance' => 1,
        'charisma' => 1,
        'authority' => 0,
    ];

    public array $reputation = [
        'respect' => 0,
        'fame' => 0,
        'wanted' => 0,
    ];

    public function addExperience(int $value): void
    {
        $this->experience += $value;

        if ($this->experience >= $this->level * 100) {
            $this->level++;
            $this->experience = 0;
        }
    }

    public function changeRespect(int $value): void
    {
        $this->reputation['respect'] += $value;
    }
}
