<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //registracija
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'uspesno' => false,
                'poruka' => 'Greska pri validaciji',
                'greske' => $validator->errors()
            ]);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('TokenReg')->plainTextToken;

        $odgovor = [
            'uspesno' => true,
            'poruka' => 'Uspesna registracija',
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($odgovor);
    }

    //login
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'uspesno' => false,
                'poruka', $validator->errors()
            ]);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'uspesno' => false,
                'poruka' => 'Pogresni podaci'
            ]);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('TokenLogin')->plainTextToken;

        $odgovor = [
            'uspesno' => true,
            'poruka' => 'Uspesan login',
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($odgovor);
    }

    //logout
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json('Uspesan logout.');
    }
}
