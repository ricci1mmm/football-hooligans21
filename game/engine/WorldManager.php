<?php

namespace Game\Engine;

use Game\World\City;
use Game\World\District;

class WorldManager
{
    public static function createDefaultCity(): City
    {
        $city = new City();

        $north = new District(
            'Северный район',
            'Старые панельки, дворы, граффити и ультрас.'
        );
        $north->features = ['stadium', 'pub', 'yards'];

        $center = new District(
            'Центр',
            'Кафе, магазины, полиция и городская жизнь.'
        );
        $center->features = ['shops', 'police', 'cafes'];

        $industrial = new District(
            'Промзона',
            'Гаражи, заводы и старые склады.'
        );
        $industrial->features = ['garages', 'factories'];

        $city->addDistrict($north);
        $city->addDistrict($center);
        $city->addDistrict($industrial);

        return $city;
    }
}
