<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route; // <-- this is important

class RouteServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        parent::boot();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes\api.php'));

            Route::middleware('api')
                ->prefix('api/admin')
                ->group(base_path('routes\admin_route.php'));
        });
    }
}
