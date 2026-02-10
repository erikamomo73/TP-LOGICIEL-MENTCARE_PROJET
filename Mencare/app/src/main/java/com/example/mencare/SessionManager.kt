package com.example.mencare.utils

import android.content.Context

class SessionManager(context: Context) {

    private val prefs = context.getSharedPreferences("MENTCARE_SESSION", Context.MODE_PRIVATE)

    fun saveUser(role:String){
        prefs.edit().putString("role", role).apply()
    }

    fun getRole():String?{
        return prefs.getString("role", null)
    }

    fun logout(){
        prefs.edit().clear().apply()
    }
}
