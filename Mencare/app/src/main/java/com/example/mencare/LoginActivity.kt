package com.example.mencare.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.*
import com.android.volley.Request
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.example.mencare.R
import com.example.mencare.utils.SessionManager
import com.example.mencare.utils.RoleRouter
import org.json.JSONObject

class LoginActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val email = findViewById<EditText>(R.id.etEmail)
        val password = findViewById<EditText>(R.id.etPassword)
        val btnLogin = findViewById<Button>(R.id.btnLogin)

        val session = SessionManager(this)

        btnLogin.setOnClickListener {

            val url = "http://10.0.2.2/mentcare_api/login.php"

            val request = object : StringRequest(
                Request.Method.POST,
                url,
                { response ->

                    val json = JSONObject(response)

                    if(json.getString("status")=="success"){

                        val role = json.getString("role")

                        session.saveUser(role)

                        RoleRouter.go(this, role)

                    }else{
                        Toast.makeText(this,"Login failed",Toast.LENGTH_SHORT).show()
                    }

                },
                {
                    Toast.makeText(this,"API ERROR",Toast.LENGTH_LONG).show()
                }){

                override fun getParams(): MutableMap<String,String> {

                    val map = HashMap<String,String>()
                    map["email"]=email.text.toString()
                    map["password"]=password.text.toString()
                    return map
                }
            }

            Volley.newRequestQueue(this).add(request)
        }
    }
}
