package com.example.rodrigo.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.util.Log;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;



public class MainActivity extends AppCompatActivity {

    public void clickB1 (View view) {

        EditText myTextField1 = (EditText) findViewById(R.id.tbUser);
        Log.i("Username", myTextField1.getText().toString());

        EditText myTextField2 = (EditText) findViewById(R.id.tbPswd);
        Log.i("Password:", myTextField2.getText().toString());

    if (myTextField2.getText().toString().equals("Jordan")){
            Log.i("Password Accepted", "Nice");
            Toast.makeText(getApplicationContext(), "Hello " +  myTextField1.getText().toString(), Toast.LENGTH_SHORT).show();

        ImageView bimg = (ImageView) findViewById(R.id.backImg);
            bimg.setImageResource(R.drawable.skyp3);
    }
        else {
            Log.i("Password Denied", "GG");
             Toast.makeText(getApplicationContext(), "Incorrect Password. Please Try Again",Toast.LENGTH_SHORT).show();

        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
