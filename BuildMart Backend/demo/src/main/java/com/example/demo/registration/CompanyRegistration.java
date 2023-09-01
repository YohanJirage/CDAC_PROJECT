package com.example.demo.registration;


public class CompanyRegistration {
	
	private String cname;
	private String email;
	private String cno;
	private int city;
	private int area;
	private String addline;
	private String uname;
	private String pwd;
	private String cpwd;
	private int qid;
	private String ans;
	public CompanyRegistration(String cname, String email, String cno, int city, int area, String addline, String uname,
			String pwd, String cpwd, int qid, String ans) {
		super();
		this.cname = cname;
		this.email = email;
		this.cno = cno;
		this.city = city;
		this.area = area;
		this.addline = addline;
		this.uname = uname;
		this.pwd = pwd;
		this.cpwd = cpwd;
		this.qid = qid;
		this.ans = ans;
	}
	public CompanyRegistration() {
		super();
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCno() {
		return cno;
	}
	public void setCno(String cno) {
		this.cno = cno;
	}
	public int getCity() {
		return city;
	}
	public void setCity(int city) {
		this.city = city;
	}
	public int getArea() {
		return area;
	}
	public void setArea(int area) {
		this.area = area;
	}
	public String getAddline() {
		return addline;
	}
	public void setAddline(String addline) {
		this.addline = addline;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getCpwd() {
		return cpwd;
	}
	public void setCpwd(String cpwd) {
		this.cpwd = cpwd;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getAns() {
		return ans;
	}
	public void setAns(String ans) {
		this.ans = ans;
	}
	@Override
	public String toString() {
		return "CompanyRegestration [cname=" + cname + ", email=" + email + ", cno=" + cno + ", city=" + city
				+ ", area=" + area + ", addline=" + addline + ", uname=" + uname + ", pwd=" + pwd + ", cpwd=" + cpwd
				+ ", qid=" + qid + ", ans=" + ans + "]";
	}
	
	

}
