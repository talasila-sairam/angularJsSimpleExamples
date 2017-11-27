import com.google.gson.annotations.Since;

public class Employee 
{
	
 public String ename;
 public String esal;
 public String eaddr;
/**
 * @return the ename
 */
public String getEname() {
	return ename;
}
/**
 * @param ename the ename to set
 */
public void setEname(String ename) {
	this.ename = ename;
	System.out.println("hi");
}
/**
 * @return the esal
 */
public String getEsal() {
	return esal;
}
/**
 * @param esal the esal to set
 */
public void setEsal(String esal) {
	this.esal = esal;
}
/**
 * @return the eaddr
 */
public String getEaddr() {
	return eaddr;
}
/**
 * @param eaddr the eaddr to set
 */
public void setEaddr(String eaddr) {
	this.eaddr = eaddr;
}
 /*public String toString()
 {
	 return "hi";
 }*/
}
