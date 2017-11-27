package com.serv;

import java.io.BufferedReader;
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


@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		PrintWriter out=response.getWriter();
		BufferedReader br= request.getReader();
		JSONObject jop=null;
		try {
			jop=(JSONObject)(new JSONParser().parse(br));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(jop);
		JSONObject job=new JSONObject();
		job.put("sai","ram");
		job.put("akshay","nalamwar");
		job.put("santosh","kumar");
		job.put("rajini","krishna");
		System.out.println(job);
		out.println(job);
	}

}
