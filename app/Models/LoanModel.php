<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanModel extends Model
{
    use HasFactory;

    protected $table = 'loan_models';
    protected $fillable = ['userID', 'employeeName', 'companyName', 'withInterest', 'amount', 'monthly', 'amortization'. 'companyID'];
}