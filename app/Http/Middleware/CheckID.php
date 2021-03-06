<?php

namespace App\Http\Middleware;

use Closure;

class CheckID
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->route('id') != null){
            if($request->user()->id == $request->route('id')){
                return $next($request);
            }
        }
        else{
            if($request->user()->email == $request->json('source_email')){
                return $next($request);
            }
        }
    }
}
