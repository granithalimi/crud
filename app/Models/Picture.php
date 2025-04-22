<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    protected $fillable = [
        'name',
        'gallery_id',
    ];

    public function gallery(){
        return $this->belongsTo(Gallery::class);
    }
}
