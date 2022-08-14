<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;

use App\Models\UserModel;
use Illuminate\Http\Request;

class UserManagementController extends Controller
{

    public function getUser() {

        
        $users = UserModel::all();

        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);

    }
    
    public function store(Request $request){
        
        $request->validate([
            'email'=>'required|unique:user_models',
            'fName'=>'required',
            'lName'=>'required',
            'role'=>'required',
            'company'=>'required',
            'companyID'=>'required',
        ]);

        $userID = rand(10000000000,90000000000);
        $defaultPass = "nms123";

        $user = new UserModel();

        $user->fName = $request->input('fName');
        $user->lName = $request->input('lName');
        $user->email = $request->input('email');
        $user->role = $request->input('role');
        $user->company = $request->input('company');
        $user->companyID = $request->input('companyID');
        $user->userID = $userID;
        $user->password = Hash::make($defaultPass);

        $user->save();

        return response()->json([
            'status' => 200,
            'message' => "Success"
        ]);
    }
}