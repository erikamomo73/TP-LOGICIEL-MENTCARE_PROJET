package com.example.mencare.activities

import android.os.Bundle
import android.widget.Toast
import com.example.mencare.R

class InfirmierActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_infirmier)

        loadObservations()
    }

    private fun loadObservations(){

        Toast.makeText(this,"Interface Infirmier",Toast.LENGTH_SHORT).show()

        // suivi patients
        // observation
        // soins

    }
}
