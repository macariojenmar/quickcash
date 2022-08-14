<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;

use App\Models\UserModel;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
        
        $emailVal = $request->input('email');
        $password = $request->input('password');

        // GETTING EMAIL

        $userInfo = UserModel::where('email', $emailVal)->first(); 

        if($userInfo){

            //CHECKING USING HASH

            if(Hash::check($password, $userInfo->password)) {

               session(['testSession' => $userInfo->email]);
               $mySession = session('testSession');

                return response()->json([
                    'status' => 200,
                    'message' => "Success",
                    'mySession' => $mySession
                ]);
            }
        }
    }
    public function register(Request $request){
        $request->validate([
            'email'=>'required|unique:user_models',
            'fName'=>'required',
            'lName'=>'required',
            'company'=>'required',
            'companyID'=>'required|unique:user_models',
            'password' => [
                'required',
                'confirmed',
                'min:6',
                'regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/',
            ],
            'password_confirmation' => 'required'
        ]
    );

    $employee = new UserModel();

    $userID = rand(10000000000,90000000000);
    $password =  $request->input('password');
  
    $employee->fName = $request->input('fName');
    $employee->lName = $request->input('lName');
    $employee->email = $request->input('email');
    $employee->role = "emp";
    $employee->companyID = $request->input('companyID');
    $employee->password = Hash::make($password);
    $employee->userID = $userID;
    $employee->company = $request->input('company');

    $saved = $employee->save();

    if($saved) {
        return response()->json([
            'status' => 200,
            'message' => "Success"
        ]);
    }
    else {
        return response()->json([
            'status' => 500,
            'message' => "Failed"
        ]);
    }
    }
}