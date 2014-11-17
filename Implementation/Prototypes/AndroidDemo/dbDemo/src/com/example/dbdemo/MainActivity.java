package com.example.dbdemo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.w3c.dom.Comment;

import android.support.v7.app.ActionBarActivity;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

public class MainActivity extends ActionBarActivity {

	private ListView mainListView;
	private ArrayAdapter<String> listAdapter;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		Repository repo = Repository.getInstance(this);
		SQLiteDatabase db = repo.getWritableDatabase();

		Cursor cursor = repo.getReadableDatabase().rawQuery(
				"SELECT * FROM RSH WHERE Rasse = \'HOL\'", null);
//
		ArrayList<String> list = new ArrayList<String>();
//		
        if (cursor.moveToFirst()) {
            do {
//                list.add("serzer");
                list.add(cursor.getString(54));
            } while (cursor.moveToNext());
        }

		// Find the ListView resource.
		mainListView = (ListView) findViewById(R.id.mainListView);

		// Create and populate a List of planet names.
//		String[] planets = new String[] { "Mercury", "Venus", "Earth", "Mars",
//				"Jupiter", "Saturn", "Uranus", "Neptune" };
//		ArrayList<String> planetList = new ArrayList<String>();
//		planetList.addAll(Arrays.asList(planets));

		// Create ArrayAdapter using the planet list.
		listAdapter = new ArrayAdapter<String>(this, R.layout.simplerow,
				list);

		// Add more planets. If you passed a String[] instead of a List<String>
		// into the ArrayAdapter constructor, you must not add more items.
		// Otherwise an exception will occur.
//		listAdapter.add("Ceres");
//		listAdapter.add("Pluto");
//		listAdapter.add("Haumea");
//		listAdapter.add("Makemake");
//		listAdapter.add("Eris");

		// Set the ArrayAdapter as the ListView's adapter.
		mainListView.setAdapter(listAdapter);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}



}
