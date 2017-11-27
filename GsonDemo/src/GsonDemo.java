import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class GsonDemo 
{
	public static void main(String[] args) { 
		
	      String jsonString = "{'ename':'Mahesh','esal':'1000','eaddr':'hyd'}"; 
	      GsonBuilder builder = new GsonBuilder(); 
	      //builder.setPrettyPrinting(); 
	      Gson gson = builder.create(); 
	      Employee emp= gson.fromJson(jsonString,Employee.class); 
	      System.out.println(emp.getEname());
	      System.out.println(emp.getEsal());
	      System.out.println(emp.getEaddr());
	      Employee emp1=new Employee();
	      emp1.setEaddr("warangal");
	      emp1.setEsal("10001");
	      emp1.setEname("akshay");

	      jsonString = gson.toJson(emp1); 
	      System.out.println(jsonString);  
	     // Employee emp2=gson.fromJson(emp1,Employee.class);	      
}
}
