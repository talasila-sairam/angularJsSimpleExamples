import java.io.BufferedReader; 
import java.io.FileNotFoundException; 
import java.io.FileReader; 
import java.io.FileWriter; 
import java.io.IOException;  

import com.google.gson.Gson; 
import com.google.gson.GsonBuilder;  

public class GsonTester { 
   public static void main(String args[]) { 
      GsonTester tester = new GsonTester(); 
      try { 
         Employee emp= new Employee(); 
         emp.setEaddr("hyd");
         emp.setEname("sai");;
         emp.setEsal("1000");
         tester.writeJSON(emp);  
         Employee emp1 = tester.readJSON(); 
         System.out.println(emp1.getEaddr());
         System.out.println(emp1.getEname());
         System.out.println(emp1.getEsal());
      } 
      catch(FileNotFoundException e) { 
         e.printStackTrace(); 
      } 
      catch(IOException e) { 
         e.printStackTrace();
      } 
   } 
   private void writeJSON(Employee emp) throws IOException { 
      GsonBuilder builder = new GsonBuilder(); 
      Gson gson = builder.create(); 
      builder.setPrettyPrinting(); 
      FileWriter writer = new FileWriter("Employee.json",true);   
      writer.write(gson.toJson(emp));   
      writer.close(); 
   }  
   private Employee readJSON() throws FileNotFoundException { 
      GsonBuilder builder = new GsonBuilder(); 
      Gson gson = builder.create();
      builder.setPrettyPrinting(); 
      BufferedReader bufferedReader = new BufferedReader(
         new FileReader("Employee.json"));   
      
      Employee emp1 = gson.fromJson(bufferedReader, Employee.class); 
      return emp1; 
   } 
} 
