package com.example.mencare.activities

import android.os.Bundle
import android.widget.Toast
import com.example.mencare.R

class ComptableActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_comptable)

        initFinance()
    }

    private fun initFinance(){

        Toast.makeText(this,"Interface Comptable",Toast.LENGTH_SHORT).show()

        // paiements
        // facturation
        // statistiques financières

    }
}
