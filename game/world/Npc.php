<?php

namespace Game\World;

class Npc
{
    public string $name;
    public string $role;
    public string $story;

    public array $quests = [];

    public function __construct(string $name, string $role, string $story)
    {
        $this->name = $name;
        $this->role = $role;
        $this->story = $story;
    }

    public function giveQuest(string $quest): void
    {
        $this->quests[] = $quest;
    }
}
