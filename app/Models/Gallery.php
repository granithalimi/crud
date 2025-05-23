<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Gallery extends Model
{
    protected $fillable = [
        'name',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function images(){
        return $this->hasMany(Picture::class);
    }
}
