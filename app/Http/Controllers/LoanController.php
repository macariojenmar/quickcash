<?php

namespace App\Http\Controllers;

use App\Models\CompanyModel;
use App\Models\UserModel;
use Illuminate\Http\Request;
use App\Models\LoanModel;

class LoanController extends Controller
{
    public function getLoan() {

        $loans = LoanModel::all();

        return response()->json([
            'status' => 200,
            'loans' => $loans,
        ]);

    }
    
    public function storeLoan(Request $request){ 

        /*const totalPer = ammortization * 0.05;
        const totalInt = data.loanAmount * totalPer;
        const totalAmt = parseFloat(data.loanAmount) + parseFloat(totalInt);
        const monthly = totalAmt / ammortization;
        */

        $request->validate([
            'loanAmount'=>'required'
        ]);

        $sessionID = session('userID');

        $loan = new LoanModel();

        $loanAmount = $request->input('loanAmount');

        $amortization = 6;
        $totalPer = $amortization * 0.05;
        $totalInt =  $loanAmount * $totalPer;
        $totalAmt = $loanAmount + $totalInt;
        $monthly = $totalAmt / $amortization;
        $formattedMonthly = number_format((float)$monthly, 2, '.', '');

        $loan->userID = "Test ID";
        $loan->employeeName = "Test Name";
        $loan->companyName = "Test Company Name";
        $loan->companyID = 0000000001;
        $loan->withInterest = $totalAmt;
        $loan->amount = $loanAmount;
        $loan->monthly =  $formattedMonthly;
        $loan->amortization = $amortization;
        $loan->status = "Pending";

        $loan->save();

        /*

        $userID = UserModel::find($sessionID);

        $data = CompanyModel::where('companyName', $userID)->first();

        $capital = $data->capital;

        $lessCapital = $capital - $loanAmount;

        $data->capital = $lessCapital;

        $data->update();
        */
    
        return response()->json([
            'status' => 200,
            'message' => "Success"
        ]);
       

    }
}
