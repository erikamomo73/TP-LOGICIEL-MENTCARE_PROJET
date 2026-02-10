package com.example.mencare.activities

import android.os.Bundle
import android.widget.Toast
import com.example.mencare.R

class ClientActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_client)

        loadRendezVous()
    }

    private fun loadRendezVous(){

        Toast.makeText(this,"Interface Client",Toast.LENGTH_SHORT).show()

        // voir rendez-vous
        // voir traitement

    }
}
