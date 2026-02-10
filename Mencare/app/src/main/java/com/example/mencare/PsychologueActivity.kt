package com.example.mencare.activities

import android.os.Bundle
import android.widget.Toast
import com.example.mencare.R

class PsychologueActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_psychologue)

        loadPatients()
    }

    private fun loadPatients(){

        Toast.makeText(this,"Interface Psychologue",Toast.LENGTH_SHORT).show()

        // voir patients
        // notes cliniques
        // suivi traitement

    }
}
