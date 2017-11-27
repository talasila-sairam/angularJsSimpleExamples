import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
@WebServlet("/FormServ")
public class FormServ extends HttpServlet 
{
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		PrintWriter pw=response.getWriter();
		String jsonobj=request.getParameter("jsonobj");
		JSONObject job=new JSONObject();
		job.put("sai","ram");
		JsonParser job1=new JsonParser();
		JSONParser jsonparser=new JSONParser();
		
		System.out.println(job.get("sai"));
		String s = "{ename:Mahesh,'esal':'1000','eaddr':'hyd'}";
		JsonObject jse=(JsonObject) job1.parse(s);
		System.out.println(jse.get("esal"));
		System.out.println(s);
		try {
			JSONObject obj=(JSONObject) jsonparser.parse(s);
			System.out.println(obj);
			//System.out.println(obj.get("ename"));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		/*System.out.println(jsonobj);
		System.out.println(request.getQueryString());
		 GsonBuilder builder = new GsonBuilder(); 
	      builder.setPrettyPrinting(); 
	      Gson gson = builder.create(); 
	      Employee emp= gson.fromJson(jsonobj,Employee.class); 
		  System.out.println(emp.getEaddr());
		  System.out.println(emp.getEname());
		  System.out.println(emp.getEsal());
		  pw.println("hi");*/
	}
	}
