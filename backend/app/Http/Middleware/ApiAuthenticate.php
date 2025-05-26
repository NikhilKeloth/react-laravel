<?php
namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Auth\AuthenticationException;

class ApiAuthenticate extends Middleware
{
    // protected function unauthenticated($request, array $guards)
    // {
    //     throw new AuthenticationException(
    //         'Unauthenticated.',
    //         $guards,
    //         $request->expectsJson() ? null : abort(401, 'Unauthorized')
    //     );
    // }
    public function handle($request, \Closure $next)
{
    $token = $request->bearerToken();

    if (!$token || $token !== 'expected_token_value') {
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    return $next($request);
}

}
