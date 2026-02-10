package com.example.mencare.utils

import android.content.Context
import android.content.Intent
import com.example.mencare.activities.*

object RoleRouter {

    fun go(context: Context, role:String){

        val intent = when(role){

            "admin" -> Intent(context, AdminActivity::class.java)
            "psychologue" -> Intent(context, PsychologueActivity::class.java)
            "infirmier" -> Intent(context, InfirmierActivity::class.java)
            "client" -> Intent(context, ClientActivity::class.java)
            "comptable" -> Intent(context, ComptableActivity::class.java)

            else -> return
        }

        context.startActivity(intent)
    }
}
