<?php

namespace Game\World;

class City
{
    public string $name = 'Football City';

    /** @var District[] */
    public array $districts = [];

    public function addDistrict(District $district): void
    {
        $this->districts[] = $district;
    }

    public function getDistricts(): array
    {
        return $this->districts;
    }
}
