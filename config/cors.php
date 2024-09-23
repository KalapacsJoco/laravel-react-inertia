<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // a szükséges útvonalak
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // cseréld le a konkrét domainre, ha szükséges
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
