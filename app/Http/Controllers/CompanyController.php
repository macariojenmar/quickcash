<?php

namespace App\Http\Controllers;

use App\Models\CompanyModel;
use Illuminate\Http\Request;

class CompanyController extends Controller
{

    public function getCompany() {

        $companies = CompanyModel::all();

        return response()->json([
            'status' => 200,
            'companies' => $companies,
        ]);

    }

    public function storeCompany(Request $request){  
        
        $request->validate([
            'companyName'=>'required|unique:company_models',
            'capital'=>'required'
        ]);

        $company = new CompanyModel();

        $company->companyName = $request->input('companyName');
        $company->capital = $request->input('capital');

        $company->save();

        return response()->json([
            'status' => 200,
            'message' => "Success"
        ]);
    }
}
